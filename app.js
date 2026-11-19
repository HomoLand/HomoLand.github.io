(() => {
  const FIELD_QUOTES = [
    {
      line: "「いいよ、来いよ」",
      note: "PR 欢迎，代码写好直接提就行",
    },
    {
      line: "「やりますねぇ」",
      note: "CI 全绿、Pages 构建通过，好时代来临力",
    },
    {
      line: "「红茶可以吗？」",
      note: "xBloom 93°C 昏睡手冲已就位，先喝一口再查日志",
    },
    {
      line: "「24岁，是学生」",
      note: "也是五个全员 Admin 的自托管折腾狂魔",
    },
    {
      line: "「王道征途」",
      note: "能跑就行，能长期维护且不炸网络更好",
    },
    {
      line: "「压力马斯内」",
      note: "余额血条掉到最后一格勾玉时的真实心境",
    },
  ];

  // Clean, strictly 1/1/4/5/1/4-digit-only exact building table for greedy decomposition.
  const PURE_BUILDING_BLOCKS = [
    [114514, "114514"],
    [11451, "11451"],
    [1145, "1145"],
    [514, "514"],
    [114, "114"],
    [45, "45"],
    [15, "15"],
    [14, "14"],
    [11, "11"],
    [5, "5"],
    [4, "4"],
    [1, "1"],
  ];

  function buildPureExpression(target) {
    if (!Number.isSafeInteger(target) || Math.abs(target) > 1_000_000_000) {
      return null;
    }

    if (target === 0) {
      return "1 - 1 + 4 - 5 + 1 ** 4";
    }
    if (target === 5) {
      return "-1 + 1 + 4 + 5 - 1 * 4";
    }
    if (target === 7) {
      return "1 + 1 + 4 + 5 * 1 - 4";
    }
    if (target === 24) {
      return "11 + 4 + 5 + 1 * 4";
    }
    if (target === 114) {
      return "114 * (5 - 1 * 4)";
    }

    function composePositive(n) {
      for (const [val, expr] of PURE_BUILDING_BLOCKS) {
        if (n === val) return expr;
      }
      if (n < 4) {
        return Array(n).fill("1").join(" + ");
      }
      for (const [val, expr] of PURE_BUILDING_BLOCKS) {
        if (val > n || val === 1) continue;
        const q = Math.floor(n / val);
        const r = n % val;
        if (q === 1) {
          const rest = composePositive(r);
          return `${expr} + ${rest}`;
        }
        if (q > 1) {
          const mul = composePositive(q);
          const prod = `${expr} * (${mul})`;
          if (r === 0) return prod;
          return `${prod} + ${composePositive(r)}`;
        }
      }
      return Array(n).fill("1").join(" + ");
    }

    if (target < 0) {
      return `-(${composePositive(-target)})`;
    }
    return composePositive(target);
  }

  function evaluateExpression(expr) {
    if (!/^[0-9+\-*\s()]+$/.test(expr)) {
      throw new Error("Invalid characters in expression");
    }
    // Check that every digit appearing in expr is in {1, 4, 5}.
    const digits = expr.replace(/[^0-9]/g, "");
    if (!/^[145]+$/.test(digits)) {
      throw new Error(`Non-145 digit detected: ${digits}`);
    }
    return Function(`"use strict"; return (${expr});`)();
  }

  function proveHomoNumber(raw) {
    const n = Number(raw);
    if (!Number.isInteger(n) || !Number.isSafeInteger(n) || Math.abs(n) > 1_000_000_000) {
      return { ok: false, error: "请输入绝对值不超过 10^9 的整数。" };
    }
    const expr = buildPureExpression(n);
    if (!expr) {
      return { ok: false, error: "超出论证范围。" };
    }
    const check = evaluateExpression(expr);
    if (check !== n) {
      return { ok: false, error: "论证校验失败，请换个数字再试。" };
    }
    return {
      ok: true,
      target: n,
      expression: expr,
      verifiedValue: check,
    };
  }

  function initBrowserUI() {
    if (typeof document === "undefined") return;

    // 1. Theme toggle (Afternoon Tea / Sleepy VHS)
    const root = document.documentElement;
    const themeToggle = document.getElementById("theme-toggle");
    const THEME_KEY = "homoland-theme";

    function applyTheme(theme) {
      const isVhs = theme === "vhs";
      if (isVhs) {
        root.setAttribute("data-theme", "vhs");
      } else {
        root.removeAttribute("data-theme");
      }
      if (themeToggle) {
        themeToggle.setAttribute("aria-pressed", String(isVhs));
        themeToggle.textContent = isVhs ? "☀️ 午后红茶" : "☕ 昏睡模式";
      }
    }

    try {
      const saved = localStorage.getItem(THEME_KEY);
      if (saved === "vhs") applyTheme("vhs");
    } catch {
      // Ignore storage access errors in restricted modes.
    }

    if (themeToggle) {
      themeToggle.addEventListener("click", () => {
        const next = root.getAttribute("data-theme") === "vhs" ? "tea" : "vhs";
        applyTheme(next);
        try {
          localStorage.setItem(THEME_KEY, next);
        } catch {
          // Ignore storage errors.
        }
      });
    }

    // 2. Field notes & Tea hospitality counter
    const quoteBox = document.getElementById("quote-box");
    const quoteNext = document.getElementById("quote-next");
    const teaBtn = document.getElementById("tea-btn");
    const teaCountEl = document.getElementById("tea-count");
    const teaToast = document.getElementById("tea-toast");
    let quoteIndex = 0;
    let teaCount = 0;

    function renderQuote(idx) {
      const q = FIELD_QUOTES[idx % FIELD_QUOTES.length];
      if (!quoteBox) return;
      const lineEl = quoteBox.querySelector(".quote-line");
      const noteEl = quoteBox.querySelector(".quote-note");
      if (lineEl) lineEl.textContent = q.line;
      if (noteEl) noteEl.textContent = q.note;
    }

    if (quoteNext) {
      quoteNext.addEventListener("click", () => {
        quoteIndex = (quoteIndex + 1) % FIELD_QUOTES.length;
        renderQuote(quoteIndex);
      });
    }

    if (teaBtn) {
      teaBtn.addEventListener("click", () => {
        teaCount += 1;
        quoteIndex = (quoteIndex + 1) % FIELD_QUOTES.length;
        renderQuote(quoteIndex);
        if (teaCountEl) teaCountEl.textContent = String(teaCount);
        const q = FIELD_QUOTES[quoteIndex];
        if (teaToast) {
          teaToast.textContent = `已敬第 ${teaCount} 杯冰红茶 · ${q.line}（${q.note}）`;
        }
      });
    }

    // 3. Project category filter
    const filterButtons = Array.from(document.querySelectorAll(".filter-chip"));
    const projectCards = Array.from(document.querySelectorAll("#project-grid .project-card"));

    function applyFilter(filter) {
      for (const btn of filterButtons) {
        const active = btn.getAttribute("data-filter") === filter;
        btn.classList.toggle("is-active", active);
        btn.setAttribute("aria-selected", String(active));
      }
      for (const card of projectCards) {
        const cat = card.getAttribute("data-category");
        const visible = filter === "all" || cat === filter;
        card.hidden = !visible;
      }
    }

    for (const btn of filterButtons) {
      btn.addEventListener("click", () => {
        applyFilter(btn.getAttribute("data-filter") || "all");
      });
    }

    // 4. 114514 Homo Proof Dialog
    const dialog = document.getElementById("homo-dialog");
    const openBtn = document.getElementById("homo-calc-open");
    const closeBtn = document.getElementById("homo-dialog-close");
    const form = document.getElementById("homo-form");
    const input = document.getElementById("homo-input");
    const resultEl = document.getElementById("homo-result");
    const presetChips = Array.from(document.querySelectorAll(".preset-chip"));

    function renderProof(val) {
      if (!resultEl) return;
      const res = proveHomoNumber(val);
      if (!res.ok) {
        resultEl.innerHTML = "";
        const p = document.createElement("strong");
        p.textContent = res.error;
        resultEl.appendChild(p);
        return;
      }
      resultEl.innerHTML = "";
      const main = document.createElement("div");
      const strong = document.createElement("strong");
      strong.textContent = `${res.target} = `;
      const code = document.createElement("span");
      code.textContent = res.expression;
      main.appendChild(strong);
      main.appendChild(code);

      const note = document.createElement("small");
      note.textContent = `✓ 程序验算通过：${res.expression} === ${res.verifiedValue}（仅含数字 1、4、5，Q.E.D.）`;

      resultEl.appendChild(main);
      resultEl.appendChild(note);
    }

    if (openBtn && dialog) {
      openBtn.addEventListener("click", () => {
        renderProof(input ? input.value : "24");
        if (typeof dialog.showModal === "function") {
          dialog.showModal();
        } else {
          dialog.setAttribute("open", "");
        }
      });
    }

    if (closeBtn && dialog) {
      closeBtn.addEventListener("click", () => {
        if (typeof dialog.close === "function") {
          dialog.close();
        } else {
          dialog.removeAttribute("open");
        }
      });
    }

    if (dialog) {
      dialog.addEventListener("click", (ev) => {
        if (ev.target === dialog && typeof dialog.close === "function") {
          dialog.close();
        }
      });
    }

    for (const chip of presetChips) {
      chip.addEventListener("click", () => {
        const num = chip.getAttribute("data-num") || "24";
        if (input) input.value = num;
        renderProof(num);
      });
    }

    if (form) {
      form.addEventListener("submit", (ev) => {
        ev.preventDefault();
        renderProof(input ? input.value.trim() : "");
      });
    }
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = { buildPureExpression, evaluateExpression, proveHomoNumber };
  }

  initBrowserUI();
})();
