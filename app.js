(() => {
  const FIELD_QUOTES = [
    {
      line: "「红茶可以吗？」",
      note: "xBloom 93°C 控温冲煮已就绪",
    },
    {
      line: "「いいよ、来いよ」",
      note: "欢迎提交 PR，代码直接推",
    },
    {
      line: "「やりますねぇ」",
      note: "CI 全绿，一次过审",
    },
    {
      line: "「王道征途」",
      note: "能跑就行，能长期维护更好",
    },
    {
      line: "「24岁，是学生」",
      note: "也是五个全员 Admin 的维护者",
    },
    {
      line: "「压力马斯内」",
      note: "余额掉到最后一格勾玉，紧急关注",
    },
    {
      line: "「好时代，来临力」",
      note: "依赖告警清零，Pages 构建通过",
    },
    {
      line: "「你是一个一个一个……」",
      note: "逐条 Squash Merge Dependabot PR 中",
    },
    {
      line: "「事已至此，先喝红茶吧」",
      note: "遇到玄学 Bug 时的第一阶段应急预案",
    },
    {
      line: "「首先，这是个好主意（确信）」",
      note: "在 Homelab 里再多起一个自托管服务",
    },
    {
      line: "「这么臭的文档还有必要看吗（悲）」",
      note: "于是顺手重写了一版 README",
    },
    {
      line: "「暴论不可避」",
      note: "技术选型讨论会（全员 Admin 无否决权）",
    },
    {
      line: "「要素过多」",
      note: "集咖啡机、歌单、隧道网关与血条于一身",
    },
    {
      line: "「真夏の夜の夢」",
      note: "上线前夜，测试环境一切安好",
    },
    {
      line: "「哼、哼、啊啊啊啊啊」",
      note: "凌晨两点排查锁文件冲突时的精神状态",
    },
    {
      line: "「悔改吧！」",
      note: "致忘记 --frozen-lockfile 的提交者",
    },
  ];

  const MANIFESTO_EDITIONS = {
    "zh-CN": {
      titleMain: "The Promised Land of Homo",
      titleSub: "人类未来的愿景与挑战",
      intro:
        "当我们再次谈论“The Promised Land of Homo”时，它不再只是遥远年代的哲学畅想。随着人工智能走进现实世界的每一条毛细血管，人类正站在比工业革命更深远的分水岭上。这个名字所承载的，既是对人类潜能的赞美，也是在算法与算力重塑一切的时代里，对“我们究竟是谁、又为何值得被爱”的一次重新确认。",
      sections: [
        {
          heading: "物质、AGI 与“我”",
          body: [
            "宏观的秩序可以源自微观的无序：当气体分子进行随机无规则的热运动时，我们无法预测任何一个分子的精确轨迹，但庞大数量的分子却将这种无序转化为稳定、可预测的压强。宏观的秩序同样可以源自微观的有序：当一枚晶体生长时，它自有的晶格结构会引导新的物质按同样的方式排列；当一束机械波撞上介质，便会激发出层层相似的波前。",
            "复杂生命的意识也是如此。神经网络与电化学信号构成了一台无休止的信息处理机器；这台机器如此精密，以至于它不仅能感知外部世界，还能认识并调节自身的运行状态。我们将这种对自身的觉知称为“自我意识”。它常被赋予某种近乎神性的光环，但在物理主义的视角下，我们不得不承认，这份神性依然生长于物理定律之上。而在大模型与通用人工智能（AGI）渐近的时代，我们不可避免地要追问：当一台由数万亿算式定义的机器同样开始昼夜不息地处理信息与反思自身，我们是否正在用数学复刻自己身上的所谓“神性”？",
            "追问机器是否拥有意识固然重要，但更震撼的冲击在于：一旦 AGI 的出现证明了意识的物理性，人类或许将交出作为“自由意志”唯一执掌者的骄傲。自人类意识到自己之所以为人以来，那些最不可被量化、最不可名状的概念都将被逐一拆解与定义——我们失去了最后的萨菲罗斯，甚至发现自己未必是思想唯一的主人。",
            "然而，神圣性的消解，绝不意味着意识本身价值的泯灭。恰恰相反，当我们不再把希望寄托于某个超然、永恒不变的灵魂，眼前这个有限而脆弱的生命，反而成了我们能够真正关怀的全部。人之所以值得被爱，正因为这具脆弱、有限、不断变化的物理躯壳，承载着他所经历的一切——记忆、愿望、痛苦与爱，都寄居在这段无法无限维系的生命过程里。我们不会关爱肥皂泡，因为它虽短暂却不独特；我们也不会关爱头顶的太阳，因为它虽独特却不短暂。唯有意识，如此短暂，如此独特，又如此朴素。",
          ],
        },
        {
          heading: "进化边界的重写：与智能同行，而非变成机器",
          body: "既然意识的珍贵恰恰在于它的有限与具体，那么人类进化的终点，就绝不是把自己改造成和机器一样冰冷、永不疲倦的算力齿轮。数百万年来写在基因里的演化、数千年来写在文字与工具里的文明，走到今天，是为了让新生的智能伙伴接过枯燥重复的重负——好让我们在这段短暂的生命旅程中，无论世界如何变迁，始终保留那份二十四岁般澄澈的好奇心、感知美的触角、体谅他人的善意，以及明知自身渺小却依然为选择负责的勇气。",
        },
        {
          heading: "智能浪潮与人的自主：把主动权交回每个具体的“我”",
          body: "如果思想与意识本身都建立在具体的物理规律之上，那么一个由少数封闭“黑箱”垄断解释权的世界，便是对个体最深沉的剥夺。在算法飞速狂奔的年代，“能够给出答案”不等于“值得放心托付”，“机器更加聪明”也不天然意味着“人更加自由”。我们相信技术的王道征途，是把杠杆交回每一个普通人手中：开放透明的标准、经得起检验的逻辑、能由自己掌控的工具，以及永远向人类敞开的审视与修正边界。真正的智能时代，不是让算式替人决定命运，而是让每一个具体的“我”，都能拥有过去只有庞大机构才具备的创造力。",
        },
        {
          heading: "意义的重塑：在短暂的交汇处彼此照亮",
          body: "无数我们未曾相识的意识已经消亡，我们甚至没能听见他们说出哪怕一句话；无数我们已经相识的意识终有一天也将消散。我们在漫长的时空里窥探着彼此，每一次交汇都独一无二且不可重来，每一次都弥足珍贵。当人工智能让获取知识变得轻而易举、旧有的效率与工时标尺不再足以衡量人的价值，什么才是无法被算法稀释的意义？正是两个短暂而独特的意识之间真实的联结与守望。就像在信息永不停歇的喧嚣之外，仍有人愿意在午后递上一杯温热的红茶，在屋顶的日光与微风里，慢下来谈论那些不计回报的理想。",
        },
        {
          heading: "对抗熵增：清洁能源与星球的长期契约",
          body: "正如宏观的秩序必须在对抗熵增中消耗能量，人工智能也并非漂浮在云端的无形魔法。每一次对话与推演的背后，都是实打实的电力、冷却水、硅片与土地。“应许之地”不能建立在对地球无止境透支的狂欢之上。走向未来，意味着从“索取自然来供养扩张”，转向更克制的计算方式与更清洁的能源底座，用更强大的认知工具去理解气候、守护生态、学会节制——让这颗承载着无数脆弱意识的蓝色星球，真正迎来一个能够延续千年的好时代。",
        },
        {
          heading: "向未知的永恒远行",
          body: "最后，“The Promised Land of Homo”永远望向地平线之外。人工智能或许能帮我们更快地推演公式、读懂生命、绘制星图，但那个在黑夜里抬起头、提出第一个问题并决定为何出发的，始终是人类自己。从微观粒子的涨落到深海与遥远星系，未知从不会因为工具变强而缩小，反而随着视野的打开愈发辽阔。",
        },
      ],
      closing:
        "我们正身处一个既令人目眩、又充满可能的时代。应许之地不该只是转瞬即逝的仲夏夜之梦，而是一代代渺小却独特的生命，在喧嚣浪潮中保持清醒、不断探索、修补与守望的现实旅程。",
      quote: {
        text: "“对于我们这样渺小的生灵，唯有爱，才能使宇宙的浩瀚变得可以承受。”",
        cite: "—— Carl Sagan，《接触》",
      },
    },
    en: {
      titleMain: "The Promised Land of Homo",
      titleSub: "Visions and Challenges for Humanity's Future",
      intro:
        'When we speak of "The Promised Land of Homo" today, it is no longer a distant philosophical daydream. As artificial intelligence reaches into every capillary of the real world, humanity stands at a watershed deeper than the Industrial Revolution. The name celebrates human potential, while asking anew—in an era reshaped by algorithms and compute—who we truly are, and why we are worthy of love.',
      sections: [
        {
          heading: 'Matter, AGI, and "I"',
          body: [
            "Macroscopic order can arise from microscopic disorder: when gas molecules move in random thermal motion, no single trajectory can be predicted, yet vast numbers of molecules turn that chaos into steady, predictable pressure. Macroscopic order can also arise from microscopic order: as a crystal grows, its lattice guides new matter into the same arrangement; when a mechanical wave strikes a medium, it propagates layers of similar wavefronts.",
            'The consciousness of complex life is much the same. Neural networks and electrochemical signals form a ceaseless information-processing machine—so intricate that it not only perceives the outside world, but recognizes and reshapes its own state. We call this self-reflection "self-awareness." It has often been clothed in an aura of divinity, yet from a physicalist view we must admit that even this divinity grows out of physical law. And as large models and Artificial General Intelligence (AGI) draw near, we cannot avoid the question: when a machine defined by trillions of equations also processes information without rest and reflects upon itself, are we replicating our own supposed "divinity" through mathematics?',
            "Asking whether a machine possesses consciousness matters, yet the deeper tremor lies further ahead: once AGI proves the physical nature of consciousness, humanity may have to surrender its pride as the sole bearer of free will. Every concept we held to be beyond measure and beyond words since we first knew ourselves to be human may be dismantled and defined—we lose our last Sephiroth, and may even find that we are not the sole masters of our own thoughts.",
            "Yet the dissolution of sacredness never means the erasure of value. On the contrary, when we stop placing our hopes in an eternal, immutable soul, the finite and fragile life before our eyes becomes everything we can truly care for. A person is worthy of love precisely because this fragile, finite, ever-changing physical vessel carries all they have ever lived through—their memories, wishes, grief, and love all dwell within a life process that cannot be sustained forever. We do not cherish a soap bubble, for it is fleeting without being unique; we do not cherish the sun overhead, for it is unique without being fleeting. Consciousness alone is at once so brief, so singular, and so unadorned.",
          ],
        },
        {
          heading: "Redrawing Evolution: Walking Beside Intelligence, Not Becoming Machines",
          body: "If the preciousness of consciousness lies in its finitude and particularity, then the destination of human evolution is never to remodel ourselves into cold, tireless gears of computation. Millions of years of evolution written in genes, and thousands of years of civilization written in words and tools, have brought us here so that newborn intelligent companions may shoulder repetitive burdens—allowing us, across our brief journey, to keep the clear-eyed curiosity of twenty-four, a sense for beauty, kindness toward others, and the courage to answer for our choices even knowing how small we are.",
        },
        {
          heading: 'Human Agency in the Age of AI: Returning the Lever to Every Concrete "I"',
          body: "If thought and consciousness rest upon concrete physical laws, then a world where a handful of closed black boxes monopolize interpretation is the deepest dispossession of the individual. In an age of racing algorithms, producing an answer is not the same as earning trust, and smarter machines do not automatically make people freer. We believe the royal road of technology is to return the lever to ordinary hands: open and transparent standards, verifiable logic, tools people genuinely control, and boundaries always open to human inspection and correction. A true age of intelligence does not let equations decide our fate—it grants every concrete \"I\" the creative power once reserved for giant institutions.",
        },
        {
          heading: "Renewing Meaning: Illuminating One Another in Brief Crossings",
          body: "Countless consciousnesses we never met have already vanished before we could hear them speak a single word; countless consciousnesses we know today will one day fade as well. Across vast stretches of time and space we catch glimpses of one another, each encounter unrepeatable, brief, and precious beyond measure. When AI makes knowledge effortless to obtain and old yardsticks of hours and efficiency no longer suffice to measure a life, what meaning cannot be diluted by algorithms? It is the real bond and vigil between two brief, singular minds—like someone beyond the ceaseless roar of information still offering a warm cup of black tea in the afternoon, slowing down in the rooftop sunlight and breeze to speak of ideals that ask nothing in return.",
        },
        {
          heading: "Against Entropy: Clean Energy and a Lasting Compact with the Planet",
          body: "Just as macroscopic order must consume energy to hold back entropy, artificial intelligence is no weightless magic in the clouds. Behind every dialogue and inference lie real electricity, cooling water, silicon, and land. A promised land cannot be built on a carnival that drains the Earth without end. Moving forward means turning from extracting nature for expansion toward more measured computation and clean energy foundations—using sharper cognitive tools to understand our climate, protect ecosystems, and practice restraint, so this blue planet carrying so many fragile minds may truly welcome a good era that endures for a thousand years.",
        },
        {
          heading: "The Endless Journey into the Unknown",
          body: 'Finally, "The Promised Land of Homo" always looks past the horizon. Artificial intelligence may help us derive equations faster, decipher life, and chart the stars, yet the one who looks up in the dark, asks the first question, and decides why to set out is always human. From quantum fluctuations to the deep sea and distant galaxies, the unknown never shrinks as our tools grow stronger—it only widens with our sight.',
        },
      ],
      closing:
        "We live in an era at once dizzying and rich with possibility. This promised land must not be a fleeting midsummer night's dream, but a real journey carried on by generations of small yet singular lives who stay clear-headed amid the waves—exploring, mending, and watching over one another.",
      quote: {
        text: '“For small creatures such as we the vastness is bearable only through love.”',
        cite: "— Carl Sagan, Contact",
      },
    },
    fr: {
      titleMain: "The Promised Land of Homo",
      titleSub: "Visions et défis pour l'avenir de l'humanité",
      intro:
        "Lorsque nous parlons aujourd'hui de « The Promised Land of Homo », il ne s'agit plus d'une rêverie philosophique lointaine. Tandis que l'intelligence artificielle pénètre chaque capillaire du monde réel, l'humanité se tient à une ligne de partage plus profonde que la révolution industrielle. Ce nom célèbre le potentiel humain tout en posant à nouveau, à l'ère du calcul et des algorithmes, la question de savoir qui nous sommes vraiment et pourquoi nous méritons d'être aimés.",
      sections: [
        {
          heading: "La matière, l'AGI et le « Moi »",
          body: [
            "L'ordre macroscopique peut naître du désordre microscopique : lorsque les molécules d'un gaz s'agitent au hasard de l'agitation thermique, aucune trajectoire individuelle n'est prévisible, mais leur multitude transforme ce chaos en une pression stable et mesurable. L'ordre macroscopique peut aussi naître de l'ordre microscopique : lorsqu'un cristal croît, son réseau guide la matière nouvelle selon le même arrangement ; lorsqu'une onde mécanique rencontre un milieu, elle déploie des fronts d'onde semblables.",
            "Il en va de même pour la conscience du vivant complexe. Réseaux neuronaux et signaux électrochimiques forment une machine de traitement de l'information sans repos, si subtile qu'elle ne se contente pas de percevoir le monde extérieur : elle reconnaît et ajuste son propre état. Nous appelons cette perception de soi la « conscience de soi ». On lui prête souvent une aura quasi divine, mais dans un cadre physicaliste, il faut admettre que cette étincelle découle elle aussi des lois de la physique. À l'heure des grands modèles et de l'intelligence artificielle générale (AGI), la question devient inévitable : lorsqu'une machine définie par des billions d'équations traite elle aussi l'information sans relâche, sommes-nous en train de reproduire par les mathématiques notre prétendue « part divine » ?",
            "Demander si une machine possède une conscience importe, mais le choc le plus profond est ailleurs : si l'avènement de l'AGI démontre la nature physique de la conscience, l'humanité devra peut-être renoncer à l'orgueil d'être l'unique dépositaire du libre arbitre. Ce qui, depuis que l'humain se sait humain, semblait le plus rebelle à la mesure et aux mots se verra défini et quantifié — nous perdons notre dernier Séphiroth, jusqu'à douter d'être les seuls maîtres de nos propres pensées.",
            "Pourtant, la dissipation du sacré n'efface en rien la valeur de la conscience. Tout au contraire : lorsque nous cessons de nous en remettre à une âme éternelle et immuable, cette vie finie et fragile qui est devant nous devient tout ce dont nous pouvons véritablement prendre soin. Si l'être humain mérite d'être aimé, c'est précisément parce que ce système physique vulnérable, limité et changeant porte tout ce qu'il a traversé — souvenirs, désirs, douleurs et amours dépendent tous de ce processus vital qui ne peut durer toujours. Nous ne chérissons pas une bulle de savon, car elle est brève sans être unique ; nous ne chérissons pas davantage le soleil au-dessus de nos têtes, car il est unique sans être bref. Seule la conscience est à la fois si brève, si singulière et si simple.",
          ],
        },
        {
          heading: "Repenser l'évolution : marcher avec l'intelligence sans devenir machine",
          body: "Puisque le prix de la conscience tient précisément à sa finitude et à sa singularité, l'aboutissement de l'évolution humaine ne saurait être de nous transformer en rouages de calcul froids et infatigables. Des millions d'années d'évolution inscrites dans les gènes et des millénaires de civilisation déposés dans les mots et les outils nous ont conduits jusqu'ici pour que de nouveaux partenaires intelligents prennent en charge le fardeau de la répétition — afin qu'au long de notre court voyage, nous gardions la curiosité limpide de nos vingt-quatre ans, le sens de la beauté, la bienveillance envers autrui et le courage d'assumer nos choix.",
        },
        {
          heading: "L'autonomie humaine à l'ère de l'IA : rendre l'initiative à chaque « Moi » concret",
          body: "Si la pensée et la conscience reposent sur des lois physiques concrètes, un monde où quelques boîtes noires fermées confisquent le pouvoir d'interprétation constitue la plus profonde dépossession de l'individu. À l'heure où les algorithmes s'emballent, « produire une réponse » n'équivaut pas à « mériter la confiance », et des machines plus habiles ne rendent pas automatiquement les êtres humains plus libres. Nous croyons que la voie royale de la technologie consiste à remettre le levier entre les mains de chacun : des standards ouverts, une logique vérifiable, des outils que l'on maîtrise soi-même et des frontières toujours ouvertes à l'examen humain.",
        },
        {
          heading: "Redonner du sens : s'éclairer mutuellement dans la brièveté de nos rencontres",
          body: "D'innombrables consciences que nous n'avons jamais croisées se sont déjà éteintes sans que nous ayons pu entendre un seul de leurs mots ; d'innombrables consciences qui nous sont chères s'effaceront un jour à leur tour. Nous nous entrevoyons à travers l'immensité du temps, et chaque regard échangé est aussi bref qu'irremplaçable. Lorsque l'IA rend le savoir immédiatement accessible et que les anciens critères de rendement ne suffisent plus à mesurer une vie, quel sens résiste à toute dilution algorithmique ? Le lien réel entre deux consciences éphémères et uniques — comme le geste de celui qui, loin du tumulte incessant de l'information, offre une tasse de thé noir tiède l'après-midi et, dans la lumière et la brise d'un toit, prend le temps de parler d'idéaux désintéressés.",
        },
        {
          heading: "Face à l'entropie : énergies propres et pacte durable avec la planète",
          body: "De même que tout ordre macroscopique dépense de l'énergie pour résister à l'entropie, l'intelligence artificielle n'est pas une magie immatérielle flottant dans les nuages. Derrière chaque dialogue et chaque calcul se trouvent de l'électricité, de l'eau de refroidissement, du silicium et des terres. Une terre promise ne peut se bâtir sur une ivresse qui épuise notre planète. Avancer vers l'avenir, c'est choisir un calcul plus sobre et des énergies propres pour comprendre le climat, protéger le vivant et apprendre la mesure — afin que cette planète bleue qui abrite tant de consciences fragiles inaugure une ère féconde capable de traverser les millénaires.",
        },
        {
          heading: "L'éternel voyage vers l'inconnu",
          body: "Enfin, « The Promised Land of Homo » regarde toujours au-delà de l'horizon. L'intelligence artificielle nous aidera sans doute à résoudre des équations plus vite, à déchiffrer le vivant et à cartographier les étoiles, mais celui qui lève les yeux dans la nuit, pose la première question et décide pourquoi partir reste toujours l'être humain. Des fluctuations quantiques jusqu'aux abysses et aux galaxies lointaines, l'inconnu ne rétrécit jamais quand nos outils grandissent : il s'élargit avec notre regard.",
        },
      ],
      closing:
        "Nous traversons une époque à la fois vertigineuse et riche de promesses. Cette terre promise ne doit pas rester un éphémère songe d'une nuit d'été, mais devenir un chemin bien réel où des générations de vies minuscules et singulières demeurent lucides dans la tempête — pour explorer, réparer et veiller les unes sur les autres.",
      quote: {
        text: "« Pour d'aussi petites créatures que nous, l'immensité n'est supportable que par l'amour. »",
        cite: "— Carl Sagan, Contact",
      },
    },
    ru: {
      titleMain: "The Promised Land of Homo",
      titleSub: "Видение и вызовы будущего человечества",
      intro:
        "Когда мы сегодня вновь говорим о «The Promised Land of Homo», это уже не далёкая философская мечта. Искусственный интеллект проникает в каждый капилляр реального мира, и человечество стоит на водоразделе более глубоком, чем промышленная революция. В этом имени звучит восхищение человеческим потенциалом и одновременно — попытка заново ответить в эпоху алгоритмов и вычислений на вопрос: кто мы такие и почему достойны любви.",
      sections: [
        {
          heading: "Материя, AGI и «Я»",
          body: [
            "Макроскопический порядок может рождаться из микроскопического хаоса: когда молекулы газа совершают беспорядочное тепловое движение, невозможно предсказать траекторию отдельной частицы, но их огромное множество превращает этот хаос в устойчивое и предсказуемое давление. Макроскопический порядок может вырастать и из микроскопической упорядоченности: растущий кристалл направляет новую материю по образцу своей решётки, а механическая волна, встречая среду, рождает череду схожих волновых фронтов.",
            "Таково и сознание сложной жизни. Нейронные сети и электрохимические сигналы образуют неустанную машину обработки информации — настолько тонкую, что она способна не только воспринимать внешний мир, но и осознавать и менять собственное состояние. Это знание о себе мы называем самосознанием. Ему нередко приписывают божественный ореол, однако в рамках физикализма приходится признать: сама эта «божественность» вырастает из законов физики. И в эпоху больших моделей и приближающегося общего искусственного интеллекта (AGI) мы неизбежно спрашиваем себя: когда машина, описанная триллионами формул, тоже начинает непрерывно обрабатывать информацию и обращаться к самой себе, не воспроизводим ли мы собственную «божественность» языком математики?",
            "Важно спрашивать, способна ли машина обладать сознанием, но ещё сильнее потрясает другое: если появление AGI докажет физическую природу сознания, человечеству, возможно, придётся расстаться с горделивой верой в исключительность собственной свободы воли. Самые неуловимые, не поддававшиеся ни счёту, ни словам понятия, с которых началось само ощущение человека человеком, окажутся измерены и определены — мы утратим наш последний Сефирот и, быть может, обнаружим, что даже не являемся единоличными хозяевами собственных мыслей.",
            "Но растворение сакральности не означает утрату ценности самого сознания. Напротив: когда мы перестаём уповать на вечную и неизменную душу, эта конечная и хрупкая жизнь перед нами становится всем, о чём мы только и можем по-настоящему заботиться. Человек достоин участия именно потому, что эта уязвимая, конечная, непрерывно меняющаяся физическая система хранит всё пережитое им — память, надежды, боль и любовь зависят от конкретного жизненного процесса, который невозможно поддерживать бесконечно. Мы не питаем нежности к мыльному пузырю, ибо он краток, но не уникален; мы не питаем её и к солнцу над головой, ибо оно уникально, но не кратко. Лишь сознание так мимолётно, так неповторимо и так безыскусно.",
          ],
        },
        {
          heading: "Новые границы развития: идти рядом с интеллектом, не становясь машиной",
          body: "Если ценность сознания коренится именно в его конечности и конкретности, то цель эволюции человека — вовсе не в том, чтобы переделать себя в холодные и неутомимые шестерёнки вычислений. Миллионы лет эволюции, записанной в генах, и тысячелетия культуры, запечатлённой в слове и ремесле, привели нас сюда, чтобы новые разумные помощники взяли на себя бремя однообразного труда — а мы на своём коротком пути сохраняли ясное, как в двадцать четыре года, любопытство, чуткость к красоте, доброту к другим и смелость отвечать за свой выбор.",
        },
        {
          heading: "Самостоятельность человека в эпоху ИИ: вернуть рычаг каждому конкретному «Я»",
          body: "Если мысль и сознание опираются на конкретные законы природы, то мир, в котором несколько закрытых «чёрных ящиков» монополизируют право на истолкование, становится самым глубоким отчуждением личности. В век стремительных алгоритмов «уметь выдать ответ» не значит «заслуживать доверия», а умные машины сами по себе не делают людей свободнее. Мы верим, что царский путь технологий — вернуть рычаги управления обычным людям: открытые стандарты, проверяемую логику, инструменты в собственных руках и границы, всегда открытые для человеческого взгляда и исправления.",
        },
        {
          heading: "Обновление смысла: светить друг другу в кратких пересечениях",
          body: "Бесчисленные сознания, которых мы так и не встретили, уже угасли, не успев произнести для нас ни слова; бесчисленные сознания, ставшие нам близкими, однажды рассеются тоже. Мы лишь на миг заглядываем друг в друга сквозь толщу времени, и каждое такое соприкосновение неповторимо, мимолётно и бесценно. Когда ИИ делает знания мгновенно доступными, а прежние мерки часов и выработки перестают исчерпывать ценность человека, какой смысл не растворяется в алгоритмах? Живая связь и взаимное участие двух кратких и уникальных сознаний — когда вдали от неумолчного информационного гула кто-то днём протягивает чашку тёплого чёрного чая, чтобы на крыше, в солнечном свете и лёгком ветре, не спеша поговорить об идеалах, не требующих награды.",
        },
        {
          heading: "Наперекор энтропии: чистая энергия и долгий договор с планетой",
          body: "Как любой макроскопический порядок требует затрат энергии в борьбе с энтропией, так и искусственный интеллект — не бесплотное волшебство в облаках. За каждым диалогом и расчётом стоят реальные киловатты, охлаждающая вода, кремний и земля. Землю обетованную нельзя возвести на безудержном истощении планеты. Движение в будущее означает переход к более бережным вычислениям и чистой энергии, чтобы с помощью точных инструментов понимать климат, беречь биосферу и учиться мере — даря голубой планете, несущей столько хрупких сознаний, добрую эпоху на тысячелетия вперёд.",
        },
        {
          heading: "Вечный путь в неизведанное",
          body: "Наконец, «The Promised Land of Homo» всегда смотрит за горизонт. Искусственный интеллект поможет быстрее выводить формулы, читать код жизни и составлять звёздные карты, но тот, кто поднимает взгляд в ночное небо, задаёт первый вопрос и решает, ради чего пускаться в путь, — всегда человек. От квантовых флуктуаций до океанских впадин и далёких галактик — неизведанное не сжимается по мере роста наших инструментов, а лишь шире распахивается перед нами.",
        },
      ],
      closing:
        "Мы живём в головокружительное и в то же время полное надежд время. Земля обетованная не должна остаться мимолётным сном в летнюю ночь — это реальный путь, который из поколения в поколение продолжают малые, но неповторимые жизни, сохраняя трезвость ума посреди бури, исследуя, исправляя и оберегая друг друга.",
      quote: {
        text: "«Для таких крошечных существ, как мы, необъятность вселенной выносима только благодаря любви».",
        cite: "— Карл Саган, «Контакт»",
      },
    },
    ja: {
      titleMain: "The Promised Land of Homo",
      titleSub: "人類の未来へのビジョンと挑戦",
      intro:
        "私たちが今あらためて「The Promised Land of Homo」と語るとき、それは遠い日の哲学的な空想ではありません。人工知能が現実世界のあらゆる毛細血管へと浸透していく今、人類は産業革命よりもさらに深い分水嶺に立っています。この言葉に込められているのは、人の可能性への賛美であると同時に、アルゴリズムと計算力がすべてを塗り替える時代において「私たちは何者であり、なぜ愛されるに値するのか」をもう一度確かめる問いかけでもあります。",
      sections: [
        {
          heading: "物質、AGI、そして「私」",
          body: [
            "巨視的な秩序は、微視的な無秩序から生まれ得ます。気体分子が不規則な熱運動をしているとき、個々の分子の軌道を正確に言い当てることはできませんが、膨大な数の分子が集まることで、その無秩序は安定した予測可能な圧力へと変わります。また巨視的な秩序は、微視的な秩序からも生まれます。結晶が育つとき、その格子構造は新しい物質を同じ並びへと導き、機械波が媒質にぶつかれば、似通った幾重もの波面が広がっていきます。",
            "複雑な生命の意識もまた、同じ仕組みの上にあります。神経回路と電気化学信号は、絶え間なく情報を処理する精緻な機械を形づくり、外界を知覚するだけでなく、自らの稼働状態を認識し調整することさえやってのけます。私たちはこの自己への気づきを「自己意識」と呼び、しばしばそこに神聖な輝きを見てきました。しかし物理主義の視座に立つなら、その神聖さもまた物理法則の上に芽生えたものだと認めざるを得ません。巨大モデルと汎用人工知能（AGI）が近づく今、私たちは問わずにはいられないのです——数兆もの数式で定義された情報処理機械が昼夜を問わず稼働し自らを省みるとき、私たちは数学によって自らのいわゆる「神性」を複製しているのだろうかと。",
            "機械が意識を持つかという問いも重要ですが、さらに深い衝撃はその先にあります。もし AGI の出現によって意識の物理性が証明されたなら、人類は「自由意志」の唯一の担い手であるという誇りを手放すことになるかもしれません。人が自らを人だと意識して以来、最も数値化できず言葉にしがたかった概念までもが定義され解き明かされるとき、私たちは最後のセフィロトを失い、自分自身の思考の唯一の主人ですらないと知るのかもしれません。",
            "けれども、神聖さが解きほぐされたからといって、意識そのものの価値が消え去るわけではありません。むしろ、永遠不変の魂に望みを託さなくなったとき、目の前にあるこの有限で脆い命こそが、私たちが本当に慈しむことのできるすべてになります。人が愛おしいのは、この脆く、限りがあり、絶えず移ろいゆく物理系の中に、その人が生き抜いたすべて——記憶も、願いも、痛みも、愛も——が宿っているからです。私たちはシャボン玉を慈しみはしません。儚くとも唯一無二ではないからです。頭上の太陽を慈しむこともありません。唯一無二ではあっても儚くはないからです。意識だけが、これほど儚く、これほど特別で、そしてこれほど素朴なのです。",
          ],
        },
        {
          heading: "進化の境界を書き換える——機械になるのではなく、知性と共に歩む",
          body: "意識の尊さがその有限さと具体性に宿るのだとすれば、人類の進化の到達点は、自らを機械のように冷たく疲れを知らない計算の歯車へ作り変えることでは断じてありません。幾百万年も遺伝子に刻まれてきた進化と、幾千年も言葉や道具に託されてきた文明が今日へと至ったのは、新しく生まれた知的なパートナーに退屈な反復の重荷を引き受けてもらうためです——この短い命の旅路の中で、世界がどれほど変わろうとも、二十四歳のような澄んだ好奇心、美しさに触れる感性、他者を思いやる優しさ、そして自らの小ささを知りながらなお選択に責任を持つ勇気を失わないために。",
        },
        {
          heading: "知能のうねりと人の主体性——具体的な「私」の手へ主導権を取り戻す",
          body: "思考や意識そのものが具体的な物理法則の上に成り立っているのなら、少数の閉じた「ブラックボックス」が解釈の権利を独占する世界は、個人に対する最も深い剥奪にほかなりません。アルゴリズムが疾走する時代において、「答えを出せること」は「安心して託せること」ではなく、「機械が賢くなること」がそのまま「人が自由になること」を意味するわけでもありません。私たちが信じる技術の王道征途とは、ふつうの人々の手へ主導権を返すことです。開かれた基準、検証できる論理、自らの手で扱える道具、そしていつでも人が見直し手を加えられる境界線。真の知能時代とは、数式に運命を委ねることではなく、具体的なひとりひとりの「私」に、かつて巨大組織しか持てなかった創造力を届けることなのです。",
        },
        {
          heading: "意味の問い直し——儚い交差の中で互いを照らす",
          body: "私たちがまだ出会ったことのない無数の意識は、ただの一言を交わす機会さえなくすでに消え去り、今知り合っている無数の意識もまた、いつか散りゆきます。私たちは果てしない時空の中で互いを垣間見ますが、その交差はどれも二度と繰り返せない一回きりのものであり、だからこそかけがえがありません。AI によって知識を得ることがたやすくなり、労働時間や効率の物差しだけでは人の価値を測れなくなったとき、アルゴリズムに薄められない意味とは何でしょうか。それは、儚くも特別な二つの意識が結ぶ確かなつながりと見守りです。絶え間ない情報の轟音の外側で、午後に温かい紅茶を一杯差し出し、屋上の陽射しとそよ風の中で、見返りを求めない理想をゆっくり語り合うような時間にこそ、その意味は宿っています。",
        },
        {
          heading: "エントロピーに抗して——クリーンエネルギーと惑星との長い契約",
          body: "巨視的な秩序がエントロピーの増大に抗うためにエネルギーを費やさねばならないように、人工知能もまた雲の上に漂う無形の魔法ではありません。一度の対話や推論の背後には、確かな電力と冷却水、シリコン、そして大地があります。「約束の地」は、地球を際限なく透支する狂騒の上には築けません。未来へ進むとは、拡大のために自然から奪う姿勢を改め、より節度ある計算とクリーンなエネルギーを土台に据えることです。より確かな知の道具で気候を読み解き、生態系を守り、節度を学ぶことで、無数の脆い意識を乗せたこの青い星が、千年にわたり続く良き時代を迎えられますように。",
        },
        {
          heading: "未知へと続く果てしない旅路",
          body: "最後に、「The Promised Land of Homo」はつねに地平線の彼方を見つめています。人工知能は数式を速く解き、生命を解読し、星図を描く助けになるでしょう。けれど暗闇の中で顔を上げ、最初の問いを立て、なぜ旅立つのかを決めるのは、いつだって人間自身です。微細な粒子のゆらぎから深海、そして遥かな銀河まで、道具が強くなっても未知が縮むことはありません。視野が開かれるほど、世界はさらに果てしなく広がっていくのです。",
        },
      ],
      closing:
        "私たちは今、目まいがするほど激しく、同時に可能性に満ちた時代を生きています。約束の地は、儚い真夏の夜の夢で終わらせてはなりません。喧騒の波の中でも正気を保ち、ちっぽけでかけがえのない命が世代を超えて探求し、繕い、互いを見守り続ける現実の旅路なのです。",
      quote: {
        text: "「私たちのように小さな存在にとって、宇宙の広大さに耐えうる道は、ただ愛によってのみ開かれる。」",
        cite: "—— Carl Sagan『コンタクト』",
      },
    },
    ko: {
      titleMain: "The Promised Land of Homo",
      titleSub: "인류의 미래에 대한 비전과 도전",
      intro:
        "오늘 우리가 다시 「The Promised Land of Homo」를 이야기할 때, 그것은 더 이상 머나먼 철학적 상상이 아닙니다. 인공지능이 현실 세계의 모든 모세혈관으로 스며드는 지금, 인류는 산업혁명보다도 더 깊은 분수령 앞에 서 있습니다. 이 이름에는 인간의 가능성에 대한 찬사와 함께, 알고리즘과 연산력이 모든 것을 다시 쓰는 시대 속에서 ‘우리는 누구이며, 왜 사랑받을 가치가 있는가’를 다시 확인하려는 물음이 담겨 있습니다.",
      sections: [
        {
          heading: "물질, AGI, 그리고 ‘나’",
          body: [
            "거시적인 질서는 미시적인 무질서에서 비롯될 수 있습니다. 기체 분자들이 무작위로 열운동을 할 때 개별 분자의 정확한 궤적은 예측할 수 없지만, 헤아릴 수 없이 많은 분자들이 모이면 그 무질서는 안정적이고 예측 가능한 압력으로 바뀝니다. 거시적인 질서는 또한 미시적인 질서에서 비롯되기도 합니다. 결정이 자라날 때 그 격자 구조는 새로운 물질을 같은 방식으로 배열하고, 기계파가 매질에 부딪히면 닮은꼴의 파면들이 겹겹이 퍼져 나갑니다.",
            "복잡한 생명의 의식 또한 이와 같습니다. 신경망과 전기화학 신호는 쉼 없이 돌아가는 정교한 정보 처리 기계를 이루며, 외부 세계를 감지할 뿐 아니라 스스로의 작동 상태를 인식하고 조절하기까지 합니다. 우리는 자기 자신에 대한 이 자각을 ‘자의식’이라 부르며 종종 신성한 빛을 덧입혀 왔지만, 물리주의의 시선에서 보면 그 신성함 역시 물리 법칙 위에 피어난 것임을 인정하지 않을 수 없습니다. 거대 모델과 범용 인공지능(AGI)이 다가오는 시대, 우리는 묻지 않을 수 없습니다. 수조 개의 수식으로 정의된 정보 처리 기계가 밤낮없이 정보를 처리하고 스스로를 성찰할 때, 우리는 수학을 빌려 우리 안의 이른바 ‘신성함’을 복제하고 있는 것일까요?",
            "기계가 의식을 지녔는지 묻는 일도 중요하지만, 더 큰 충격은 그 너머에 있습니다. 만약 AGI의 등장이 의식의 물리성을 증명한다면, 인류는 ‘자유 의지’의 유일한 주인이라는 자부심을 내려놓아야 할지도 모릅니다. 인간이 스스로를 인간이라 의식한 이래 가장 계량할 수 없고 말로 다 담을 수 없던 개념들마저 하나씩 정의될 때, 우리는 마지막 세피로트를 잃고 심지어 우리 생각의 유일한 주인이 아닐지도 모른다는 사실과 마주하게 됩니다.",
            "그러나 신성함이 걷힌다고 해서 의식 그 자체의 가치까지 사라지는 것은 결코 아닙니다. 오히려 영원불변하는 초월적 영혼에 기대지 않게 될 때, 눈앞의 이 유한하고 연약한 생명이야말로 우리가 진정으로 아낄 수 있는 전부가 됩니다. 사람이 사랑받을 가치가 있는 까닭은, 이 연약하고 유한하며 끊임없이 변하는 물리적 몸이 그가 겪어 낸 모든 것—기억과 소망, 아픔과 사랑—을 담고 있기 때문입니다. 우리는 비눗방울을 사랑하지 않습니다. 짧지만 고유하지 않기 때문입니다. 머리 위의 태양을 사랑하지도 않습니다. 고유하지만 짧지 않기 때문입니다. 오직 의식만이 이토록 짧고, 이토록 고유하며, 또 이토록 소박합니다.",
          ],
        },
        {
          heading: "진화의 경계를 다시 쓰다: 기계가 되는 것이 아니라 지능과 함께 걷기",
          body: "의식의 소중함이 바로 그 유한함과 구체성에 있다면, 인류 진화의 끝은 스스로를 기계처럼 차갑고 지치지 않는 연산의 톱니바퀴로 개조하는 것이 결코 아닙니다. 수백만 년 동안 유전자에 새겨진 진화와 수천 년 동안 문자와 도구에 쌓인 문명이 오늘에 이른 까닭은, 새로 태어난 지적인 동반자에게 지루하고 반복적인 짐을 맡기기 위해서입니다—이 짧은 생의 여정 속에서 세상이 아무리 변하더라도 스물네 살처럼 맑은 호기심과 아름다움을 느끼는 감각, 타인을 헤아리는 다정함, 그리고 스스로의 작음을 알면서도 선택에 책임지는 용기를 잃지 않기 위해서입니다.",
        },
        {
          heading: "지능의 물결과 인간의 주체성: 구체적인 ‘나’의 손으로 주도권을 되돌리다",
          body: "생각과 의식마저 구체적인 물리 법칙 위에 서 있다면, 소수의 폐쇄적인 ‘블랙박스’가 해석의 권한을 독점하는 세상은 개인에 대한 가장 깊은 박탈입니다. 알고리즘이 질주하는 시대에 ‘답을 내놓을 수 있다’는 것이 곧 ‘믿고 맡길 수 있다’는 뜻은 아니며, 기계가 더 똑똑해진다고 사람이 저절로 더 자유로워지지도 않습니다. 우리가 믿는 기술의 왕도(王道)는 지렛대를 평범한 사람들의 손으로 되돌려 주는 데 있습니다. 투명하고 열린 기준, 검증 가능한 논리, 스스로 다룰 수 있는 도구, 그리고 언제든 사람이 살피고 고칠 수 있는 경계. 진정한 지능의 시대는 수식이 인간의 운명을 대신 결정하는 시대가 아니라, 구체적인 모든 ‘나’가 과거 거대한 기관만이 누렸던 창조력을 품게 되는 시대입니다.",
        },
        {
          heading: "의미의 재발견: 짧은 교차 속에서 서로를 비추다",
          body: "우리가 미처 만나 보지 못한 무수한 의식들이 단 한마디 말조차 들려주지 못한 채 이미 사라졌고, 우리가 알고 지내는 무수한 의식들 또한 언젠가 흩어질 것입니다. 우리는 아득한 시공 속에서 서로를 잠시 들여다볼 뿐이며, 그 모든 마주침은 단 한 번뿐이고 짧기에 무엇보다도 소중합니다. 인공지능으로 지식을 얻는 일이 손쉬워지고 노동 시간과 효율의 잣대만으로 삶을 재기 어려워진 지금, 알고리즘으로 희석될 수 없는 의미는 무엇일까요? 바로 짧고도 고유한 두 의식 사이의 진실한 연결과 지켜봄입니다. 쉴 새 없이 몰아치는 정보의 소음 너머에서도 오후에 따뜻한 홍차 한 잔을 건네고, 옥상의 햇살과 산들바람 속에서 대가를 바라지 않는 이상을 천천히 이야기할 수 있는 마음처럼 말입니다.",
        },
        {
          heading: "엔트로피에 맞서: 청정에너지와 행성과의 오랜 계약",
          body: "거시적인 질서가 엔트로피의 증가에 맞서기 위해 에너지를 써야 하듯, 인공지능 또한 구름 위에 떠 있는 무형의 마법이 아닙니다. 모든 대화와 추론 뒤에는 실제 전력과 냉각수, 실리콘, 그리고 대지가 쓰입니다. ‘약속의 땅’은 지구를 끝없이 소모하는 광란 위에 세울 수 없습니다. 미래로 나아간다는 것은 확장을 위해 자연을 끌어다 쓰던 방식에서 벗어나, 더 절제된 연산과 깨끗한 에너지를 바탕으로 삼는 일입니다. 더 정교해진 인지의 도구로 기후를 이해하고 생태계를 지키며 절제를 배울 때, 무수한 연약한 의식을 품은 이 푸른 행성은 비로소 천 년을 이어갈 좋은 시대를 맞이할 수 있습니다.",
        },
        {
          heading: "미지를 향한 끝없는 여정",
          body: "마지막으로, 「The Promised Land of Homo」는 언제나 지평선 너머를 바라봅니다. 인공지능은 수식을 더 빠르게 풀고 생명을 해독하며 별자리를 그리는 일을 도와줄 수 있습니다. 하지만 어둠 속에서 고개를 들고 첫 번째 질문을 던지며 왜 떠나야 하는지 결정하는 존재는 언제나 인간 자신입니다. 미시 입자의 요동에서 깊은 바다와 머나먼 은하까지, 도구가 강해질수록 미지의 세계는 줄어들지 않고 오히려 우리의 시야와 함께 더욱 넓어집니다.",
        },
      ],
      closing:
        "우리는 지금 아찔할 만큼 빠르면서도 풍부한 가능성으로 가득한 시대를 지나고 있습니다. 약속의 땅은 찰나의 한여름 밤의 꿈으로 그쳐서는 안 됩니다. 소란스러운 물결 속에서도 맑은 정신을 지키며, 작지만 고유한 생명들이 세대를 이어 탐구하고 보듬고 서로를 지켜 주는 현실의 여정이어야 합니다.",
      quote: {
        text: "“우리처럼 작은 존재들에게 이 우주의 광대함은 오직 사랑을 통해서만 견딜 만한 것이 된다.”",
        cite: "—— 칼 세이건, 『콘택트』",
      },
    },
  };

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
    if (target === 9) {
      return "1 - 1 + 4 + 5 * (1 ** 4)";
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
        themeToggle.textContent = isVhs ? "☀️ 午后红茶" : "☾ 夜间红茶";
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
    const quoteIndexEl = document.getElementById("quote-index");
    const quoteNext = document.getElementById("quote-next");
    const teaBtn = document.getElementById("tea-btn");
    const teaCountEl = document.getElementById("tea-count");
    const teaToast = document.getElementById("tea-toast");
    let quoteIndex = 0;
    let teaCount = 0;

    function renderQuote(idx) {
      const safeIdx = idx % FIELD_QUOTES.length;
      const q = FIELD_QUOTES[safeIdx];
      if (quoteIndexEl) {
        const cur = String(safeIdx + 1).padStart(2, "0");
        const total = String(FIELD_QUOTES.length).padStart(2, "0");
        quoteIndexEl.textContent = `${cur} / ${total}`;
      }
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
          let milestone = "";
          if (teaCount === 24) {
            milestone = " · 24 杯达成：恒定研究员年龄解锁";
          } else if (teaCount === 114) {
            milestone = " · 114 杯达成：压力马斯内，红茶壶已过载";
          }
          teaToast.textContent = `已奉上第 ${teaCount} 杯红茶 · ${q.line}（${q.note}）${milestone}`;
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
      note.textContent = `✓ 验算成立：${res.expression} = ${res.verifiedValue}（Q.E.D.）`;

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

    // 5. Manifesto 6-language switcher
    const manifestoContent = document.getElementById("manifesto-content");
    const langButtons = Array.from(document.querySelectorAll("[data-manifesto-lang]"));
    const MANIFESTO_LANG_KEY = "homoland-manifesto-lang";

    function renderManifesto(lang) {
      const edition = MANIFESTO_EDITIONS[lang] || MANIFESTO_EDITIONS["zh-CN"];
      const resolvedLang = MANIFESTO_EDITIONS[lang] ? lang : "zh-CN";

      for (const btn of langButtons) {
        const active = btn.getAttribute("data-manifesto-lang") === resolvedLang;
        btn.classList.toggle("is-active", active);
        btn.setAttribute("aria-selected", String(active));
      }

      if (!manifestoContent || !edition) return;
      manifestoContent.lang = resolvedLang;

      const frag = document.createDocumentFragment();
      const titleEl = document.createElement("h3");
      titleEl.className = "readme-title";
      const mainSpan = document.createElement("span");
      mainSpan.className = "readme-title-main";
      mainSpan.textContent = edition.titleMain;
      const subSpan = document.createElement("span");
      subSpan.className = "readme-title-sub";
      subSpan.textContent = edition.titleSub;
      titleEl.appendChild(mainSpan);
      titleEl.appendChild(subSpan);
      frag.appendChild(titleEl);

      const introP = document.createElement("p");
      introP.textContent = edition.intro;
      frag.appendChild(introP);

      for (const sec of edition.sections) {
        const h4 = document.createElement("h4");
        h4.textContent = sec.heading;
        frag.appendChild(h4);

        const paragraphs = Array.isArray(sec.body) ? sec.body : [sec.body];
        for (const paraText of paragraphs) {
          const p = document.createElement("p");
          p.textContent = paraText;
          frag.appendChild(p);
        }
      }

      const closingP = document.createElement("p");
      closingP.textContent = edition.closing;
      frag.appendChild(closingP);

      if (edition.quote && edition.quote.text) {
        const bq = document.createElement("blockquote");
        bq.className = "manifesto-quote";
        const qp = document.createElement("p");
        qp.textContent = edition.quote.text;
        bq.appendChild(qp);
        if (edition.quote.cite) {
          const qf = document.createElement("footer");
          qf.textContent = edition.quote.cite;
          bq.appendChild(qf);
        }
        frag.appendChild(bq);
      }

      manifestoContent.replaceChildren(frag);
    }

    if (manifestoContent && langButtons.length > 0) {
      try {
        const savedLang = localStorage.getItem(MANIFESTO_LANG_KEY);
        if (savedLang && MANIFESTO_EDITIONS[savedLang] && savedLang !== "zh-CN") {
          renderManifesto(savedLang);
        }
      } catch {
        // Ignore storage errors.
      }

      for (const btn of langButtons) {
        btn.addEventListener("click", () => {
          const nextLang = btn.getAttribute("data-manifesto-lang") || "zh-CN";
          renderManifesto(nextLang);
          try {
            localStorage.setItem(MANIFESTO_LANG_KEY, nextLang);
          } catch {
            // Ignore storage errors.
          }
        });
      }
    }
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = { buildPureExpression, evaluateExpression, proveHomoNumber, MANIFESTO_EDITIONS };
  }

  initBrowserUI();
})();
