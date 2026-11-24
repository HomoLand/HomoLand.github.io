const ALLOWED_ORIGINS = new Set([
  "https://homo.land",
  "https://www.homo.land",
  "https://homoland.github.io",
  "https://homoland-al2.pages.dev",
  "http://127.0.0.1:11451",
  "http://localhost:11451",
]);

const TEA_PATHS = new Set(["/", "/tea", "/api/tea"]);
const WINDOW_SECONDS = 600;
const MAX_HITS_PER_WINDOW = 120;

function isAllowedOrigin(origin) {
  if (!origin) return false;
  if (ALLOWED_ORIGINS.has(origin)) return true;
  try {
    const parsed = new URL(origin);
    return parsed.protocol === "https:" && parsed.hostname.endsWith(".homoland-al2.pages.dev");
  } catch {
    return false;
  }
}

function buildHeaders(origin, extra = {}) {
  const headers = new Headers({
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    Vary: "Origin",
    ...extra,
  });
  if (origin && isAllowedOrigin(origin)) {
    headers.set("Access-Control-Allow-Origin", origin);
    headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    headers.set("Access-Control-Allow-Headers", "Content-Type");
    headers.set("Access-Control-Max-Age", "86400");
  }
  return headers;
}

function jsonResponse(body, status, origin, extraHeaders) {
  return new Response(JSON.stringify(body), {
    status,
    headers: buildHeaders(origin, extraHeaders),
  });
}

async function hashClientIp(ip) {
  const bytes = new TextEncoder().encode(`homoland-tea-v1:${ip || "unknown"}`);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, "0")).join("");
}

async function getTeaCount(db) {
  const row = await db
    .prepare("SELECT count FROM counters WHERE name = 'tea'")
    .first();
  return row && typeof row.count === "number" ? row.count : 0;
}

async function incrementTeaCount(db) {
  const row = await db
    .prepare(
      `INSERT INTO counters (name, count, updated_at)
       VALUES ('tea', 1, unixepoch())
       ON CONFLICT(name) DO UPDATE SET
         count = count + 1,
         updated_at = unixepoch()
       RETURNING count`
    )
    .first();
  return row && typeof row.count === "number" ? row.count : 1;
}

async function checkRateLimit(db, ip, ctx) {
  const nowSec = Math.floor(Date.now() / 1000);
  const windowStart = Math.floor(nowSec / WINDOW_SECONDS) * WINDOW_SECONDS;
  const ipHash = await hashClientIp(ip);

  const row = await db
    .prepare(
      `INSERT INTO rate_limits (ip_hash, window_start, hits)
       VALUES (?, ?, 1)
       ON CONFLICT(ip_hash) DO UPDATE SET
         hits = CASE WHEN rate_limits.window_start = excluded.window_start THEN rate_limits.hits + 1 ELSE 1 END,
         window_start = excluded.window_start
       RETURNING hits, window_start`
    )
    .bind(ipHash, windowStart)
    .first();

  const hits = row && typeof row.hits === "number" ? row.hits : 1;
  if (hits === 1) {
    ctx.waitUntil(
      db
        .prepare("DELETE FROM rate_limits WHERE window_start < ?")
        .bind(windowStart - WINDOW_SECONDS)
        .run()
        .catch(() => {})
    );
  }

  return {
    limited: hits > MAX_HITS_PER_WINDOW,
    retryAfter: Math.max(1, windowStart + WINDOW_SECONDS - nowSec),
  };
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin");

    if (!TEA_PATHS.has(url.pathname)) {
      return jsonResponse({ ok: false, error: "Not found" }, 404, origin);
    }

    if (request.method === "OPTIONS") {
      if (origin && !isAllowedOrigin(origin)) {
        return new Response(null, { status: 403, headers: { Vary: "Origin" } });
      }
      return new Response(null, { status: 204, headers: buildHeaders(origin) });
    }

    try {
      if (request.method === "GET") {
        const count = await getTeaCount(env.DB);
        return jsonResponse({ ok: true, count }, 200, origin);
      }

      if (request.method === "POST") {
        if (origin && !isAllowedOrigin(origin)) {
          return jsonResponse({ ok: false, error: "Forbidden origin" }, 403, origin);
        }

        const ip = request.headers.get("CF-Connecting-IP") || "unknown";
        const rate = await checkRateLimit(env.DB, ip, ctx);
        if (rate.limited) {
          const count = await getTeaCount(env.DB);
          console.log(JSON.stringify({ event: "tea_rate_limited", count }));
          return jsonResponse(
            {
              ok: false,
              limited: true,
              error: "红茶壶冷却中，稍后再试。",
              count,
              retryAfter: rate.retryAfter,
            },
            429,
            origin,
            { "Retry-After": String(rate.retryAfter) }
          );
        }

        const count = await incrementTeaCount(env.DB);
        console.log(JSON.stringify({ event: "tea_served", count }));
        return jsonResponse({ ok: true, count }, 200, origin);
      }

      return jsonResponse(
        { ok: false, error: "Method not allowed" },
        405,
        origin,
        { Allow: "GET, POST, OPTIONS" }
      );
    } catch (err) {
      console.error(
        JSON.stringify({
          event: "tea_error",
          message: err instanceof Error ? err.message : String(err),
        })
      );
      return jsonResponse({ ok: false, error: "Internal server error" }, 500, origin);
    }
  },
};
