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
        "当我们再次谈论“The Promised Land of Homo”时，它不再只是遥远年代的哲学畅想。随着人工智能走进日常生活的每一个角落，人类正站在一个比工业革命更深远的转折点上。这个名字所承载的，既是对人类潜能的赞美，也是在机器越来越聪明的时代里，对“人之为人的位置与尊严”的一次重新确认。",
      sections: [
        {
          heading: "进化边界的重写：与智能同行，而非变成机器",
          body: "数百万年来，人类的成长写在生命本身；数千年来，写在文字、工具与社会之中。今天，我们第一次造出了能够理解语言、协助思考并不断学习的智能伙伴。但进化的终点从来不是把人变得像机器一样冰冷高效，而是借助这些新工具，把人们从枯燥重复的劳作里解放出来——无论世界如何变迁，始终保留那份二十四岁般澄澈的好奇心、感受美的能力、体谅他人的善意，以及为自己选择负责的勇气。",
        },
        {
          heading: "智能浪潮与人的自主：让技术回到每个人的手中",
          body: "科技始终是通往“应许之地”的桥梁，但在人工智能飞速发展的世界里，更快并不自动等于更好。“能够给出答案”不等于“值得放心托付”，“机器更聪明”也不天然意味着“人更自由”。面对少数封闭平台的垄断与不透明的“黑箱”，我们相信技术的王道征途，应当把主动权交回普通人手中：开放透明的标准、经得起检验的结果、能由自己掌控的工具，以及随时允许人类检查和修正的边界。真正的智能时代，不是让机器替人做决定，而是让每个普通人都能拥有过去只有庞大机构才具备的创造力。",
        },
        {
          heading: "意义的重塑与更有温度的社会",
          body: "人工智能带来的最深刻变化，终究会落在人与人的关系上。当获取知识变得轻而易举、许多传统工作被迅速改写，过去单靠工作时长和岗位门槛来衡量人的方式正在松动。我们期待的未来社会，不以“是否比机器更便宜”评判一个人的价值，而是在新的分工里重建信任、公平与尊严——让教育回到启发而非死记硬背，让真正珍贵的东西重新归于人与人之间的真诚联结与不被功利裹挟的热爱。就像在信息永不停歇的喧嚣之外，仍有人愿意在午后递上一杯温热的红茶，在屋顶的日光与微风里，慢下来谈论那些不计回报的理想。",
        },
        {
          heading: "清洁能源与地球的长期约定",
          body: "人工智能并不是漂浮在空中的魔法。每一次对话与运算背后，都需要实打实的电力、冷却水、芯片与土地。“应许之地”不能建立在对地球无止境透支的竞赛之上。走向未来，意味着从“索取自然来满足扩张”，转向更节能的技术方式与更清洁的能源底座，并用更强大的工具去理解气候、守护生态、学会节制——让人类与我们共同栖居的这颗星球，真正迎来一个能够延续千年的好时代。",
        },
        {
          heading: "向未知的永恒远行",
          body: "最后，“The Promised Land of Homo”永远望向地平线之外。人工智能或许能帮我们更快地算出公式、读懂生命、绘制星图，但提出第一个问题、决定为何出发的，始终是人类自己。从微小的生命奥秘到深海与遥远星空，未知从不会因为工具变强而缩小，反而随着视野打开愈发辽阔。",
        },
      ],
      closing:
        "我们正身处一个既令人目眩、又充满可能的时代。应许之地不该只是转瞬即逝的仲夏夜之梦，而是一代代人在喧嚣浪潮中保持清醒、不断探索、修补与共建的现实旅程。愿人类在拥有前所未有的力量时，依然保有一份谦卑、温和与清醒——继续向前，去建造一个配得上“人类”之名的未来。",
    },
    en: {
      titleMain: "The Promised Land of Homo",
      titleSub: "Visions and Challenges for Humanity's Future",
      intro:
        'When we speak of "The Promised Land of Homo" today, it is no longer a distant philosophical daydream. As artificial intelligence enters every corner of daily life, humanity stands at a turning point more profound than the Industrial Revolution. The phrase celebrates human potential, while reaffirming the place and dignity of being human in an age of ever-smarter machines.',
      sections: [
        {
          heading: "Redrawing Evolution: Walking Beside Intelligence, Not Becoming Machines",
          body: "For millions of years, human growth was written into biology; for thousands, into language, tools, and communities. Today, for the first time, we have built intelligent companions that can read, reason alongside us, and keep learning. Yet the goal of evolution is never to turn people into cold, efficient machines. It is to let these tools lift the weight of repetitive drudgery—so that no matter how the world shifts, we keep the clear-eyed curiosity of twenty-four, a sense of beauty, kindness toward one another, and the courage to answer for our choices.",
        },
        {
          heading: "Human Agency in the Age of AI: Returning Technology to Everyday Hands",
          body: "Technology has always bridged the way toward a better future, yet in a world where AI moves at breakneck speed, faster does not automatically mean better. Producing an answer is not the same as earning trust, and smarter machines do not automatically make people freer. Against the pull of closed monopolies and opaque black boxes, we believe the royal road of technology is to place agency back in ordinary hands: open and transparent standards, results anyone can verify, tools people genuinely own, and boundaries where humans can always inspect and step in. A true age of intelligence does not hand our decisions over to machines—it puts the creative power once reserved for giant institutions within every person's reach.",
        },
        {
          heading: "Renewing Meaning in a Warmer Society",
          body: "The deepest changes brought by AI will ultimately unfold in how people treat one another. As knowledge becomes effortless to obtain and familiar jobs are reshaped overnight, measuring human worth solely by hours worked or barriers to entry begins to give way. The future we hope for never judges a person by whether they are cheaper than a machine; instead, it rebuilds trust, fairness, and dignity—returning education to curiosity rather than rote memorization, and restoring value to genuine human connection and uncalculated passion. Even beyond the ceaseless noise of information, someone still offers a warm cup of black tea in the afternoon, slowing down in the rooftop sunlight and breeze to speak of ideals that ask nothing in return.",
        },
        {
          heading: "Clean Energy and a Lasting Compact with Earth",
          body: "Artificial intelligence is not weightless magic floating in the sky. Behind every conversation and calculation lie real electricity, cooling water, silicon, and land. A promised land cannot be built on an endless race that drains the planet dry. Moving forward means shifting from taking from nature to fuel expansion toward energy-conscious design and clean power—using sharper tools to understand our climate, protect ecosystems, and practice restraint, so humanity and the planet we share may truly welcome a good era that can endure for a thousand years.",
        },
        {
          heading: "The Endless Journey into the Unknown",
          body: 'Finally, "The Promised Land of Homo" always looks past the horizon. Artificial intelligence may help us solve equations faster, decipher the patterns of life, and chart the stars, yet it is still humanity that asks the first question and decides why the voyage matters. From the smallest secrets of life to the deep ocean and distant galaxies, the unknown never shrinks as our tools grow stronger—it only widens with our sight.',
        },
      ],
      closing:
        "We live in an era that is at once dizzying and rich with possibility. This promised land must not be a fleeting midsummer night's dream, but a real journey kept alive by generations who stay clear-headed amid the noise—exploring, mending, and building together. As humanity gains unprecedented power, may we still hold onto humility, gentleness, and clarity, moving forward to build a future worthy of our name.",
    },
    fr: {
      titleMain: "The Promised Land of Homo",
      titleSub: "Visions et défis pour l'avenir de l'humanité",
      intro:
        "Lorsque nous parlons aujourd'hui de « The Promised Land of Homo », il ne s'agit plus d'une rêverie philosophique lointaine. Tandis que l'intelligence artificielle s'invite dans chaque recoin de notre quotidien, l'humanité se tient à un tournant plus profond encore que la révolution industrielle. Cette expression célèbre le potentiel humain tout en réaffirmant la place et la dignité de l'être humain à l'ère des machines toujours plus savantes.",
      sections: [
        {
          heading: "Repenser l'évolution : marcher avec l'intelligence sans devenir machine",
          body: "Pendant des millions d'années, l'histoire humaine s'est écrite dans le vivant ; pendant des millénaires, dans le langage, les outils et la vie en société. Aujourd'hui, pour la première fois, nous avons conçu des partenaires intelligents capables de comprendre, de raisonner avec nous et d'apprendre sans cesse. Mais le but de l'évolution n'a jamais été de rendre l'humain aussi froid et mécanique qu'un automate : il est de nous libérer des tâches répétitives pour préserver, quoi qu'il advienne, la curiosité limpide de nos vingt-quatre ans, le sens de la beauté, la bienveillance envers autrui et le courage d'assumer nos choix.",
        },
        {
          heading: "L'autonomie humaine à l'ère de l'IA : rendre la technique à chacun",
          body: "La technique a toujours servi de pont vers un monde meilleur, mais lorsque l'IA progresse à toute allure, aller plus vite ne signifie pas aller mieux. « Pouvoir fournir une réponse » ne veut pas dire « mériter la confiance », et des machines plus habiles ne rendent pas automatiquement les personnes plus libres. Face aux monopoles fermés et aux boîtes noires opaques, nous croyons que la voie royale de la technologie consiste à remettre l'initiative entre les mains de tous : des standards ouverts et transparents, des résultats vérifiables, des outils que chacun peut maîtriser, et des limites où l'humain garde toujours le droit d'examiner et de corriger. Le véritable âge de l'intelligence ne confie pas nos décisions aux machines : il met à la portée de chaque citoyen la force créatrice jadis réservée aux grandes institutions.",
        },
        {
          heading: "Redonner du sens à une société plus chaleureuse",
          body: "Les transformations les plus profondes qu'apporte l'IA toucheront avant tout nos relations humaines. Quand l'accès au savoir devient immédiat et que tant de métiers se redessinent, juger une personne uniquement à son temps de travail ou à des barrières professionnelles ne suffit plus. La société que nous espérons ne mesure personne à l'aune de savoir s'il coûte moins cher qu'une machine ; elle reconstruit la confiance, l'équité et la dignité — rendant à l'éducation le goût de l'éveil plutôt que du par-cœur, et redonnant tout leur prix aux liens sincères ainsi qu'aux passions désintéressées. Même loin du vacarme incessant de l'information, il reste des personnes prêtes à offrir une tasse de thé noir tiède l'après-midi et, dans la lumière et la brise d'un toit, à prendre le temps de parler d'idéaux gratuits.",
        },
        {
          heading: "Énergies propres et pacte durable avec la Terre",
          body: "L'intelligence artificielle n'est pas une magie immatérielle flottant dans les nuages. Derrière chaque échange et chaque calcul se trouvent bien réellement de l'électricité, de l'eau de refroidissement, des puces et des terres. Une terre promise ne peut se bâtir sur une course sans fin qui épuise notre planète. Avancer vers l'avenir, c'est passer d'une logique de prélèvement à une informatique plus sobre et à des énergies propres, en utilisant des outils plus fins pour comprendre le climat, protéger le vivant et apprendre la mesure — afin que l'humanité et la planète qu'elle habite inaugurent enfin une ère féconde capable de traverser les millénaires.",
        },
        {
          heading: "L'éternel voyage vers l'inconnu",
          body: "Enfin, « The Promised Land of Homo » regarde toujours au-delà de l'horizon. L'intelligence artificielle nous aidera sans doute à résoudre des équations plus vite, à déchiffrer le vivant et à cartographier les étoiles, mais poser la première question et décider pourquoi l'on part revient toujours à l'être humain. Des plus infimes mystères de la vie jusqu'aux grands fonds marins et aux galaxies lointaines, l'inconnu ne rétrécit jamais quand nos outils grandissent : il s'élargit au rythme de notre regard.",
        },
      ],
      closing:
        "Nous vivons une époque à la fois vertigineuse et pleine de promesses. Cette terre promise ne doit pas rester un éphémère songe d'une nuit d'été, mais devenir un chemin concret, porté de génération en génération par celles et ceux qui restent lucides dans le tumulte — pour explorer, réparer et bâtir ensemble. Puissions-nous, alors que s'ouvre une puissance sans précédent, conserver humilité, douceur et lucidité, et continuer d'avancer vers un avenir digne du nom d'humanité.",
    },
    ru: {
      titleMain: "The Promised Land of Homo",
      titleSub: "Видение и вызовы будущего человечества",
      intro:
        "Когда мы сегодня вновь говорим о «The Promised Land of Homo», это уже не далёкая философская мечта. Искусственный интеллект входит в каждый уголок повседневной жизни, и человечество оказывается на переломе более глубоком, чем промышленная революция. Эти слова прославляют человеческий потенциал и вместе с тем заново утверждают место и достоинство человека в эпоху всё более умных машин.",
      sections: [
        {
          heading: "Новые границы развития: идти рядом с интеллектом, не становясь машиной",
          body: "Миллионы лет развитие человека записывалось в самой жизни, тысячи лет — в языке, ремёслах и обществе. Сегодня мы впервые создали разумных помощников, способных понимать речь, помогать размышлять и непрерывно учиться. Но цель развития никогда не сводилась к тому, чтобы сделать людей такими же холодными и расчётливыми, как механизмы. Новые инструменты призваны освободить человека от однообразной рутины — чтобы, как бы ни менялся мир, мы сохраняли ясное, как в двадцать четыре года, любопытство, чувство прекрасного, доброту к ближнему и смелость отвечать за собственный выбор.",
        },
        {
          heading: "Самостоятельность человека в эпоху ИИ: вернуть технологии в руки каждого",
          body: "Технологии всегда служили мостом к лучшему будущему, однако в мире стремительно развивающегося ИИ быстрее не означает лучше. Умение выдать ответ ещё не равно доверию, а более умные машины не делают людей свободнее сами по себе. Перед лицом замкнутых монополий и непрозрачных «чёрных ящиков» мы верим, что царский путь технологий — вернуть инициативу обычным людям: открытые и понятные стандарты, проверяемые результаты, инструменты, которыми можно владеть самостоятельно, и чёткие границы, где человек всегда вправе всё проверить и поправить. Подлинная эпоха разума не перекладывает решения на машины, а даёт каждому творческую силу, прежде доступную лишь гигантским организациям.",
        },
        {
          heading: "Новые смыслы и более тёплое общество",
          body: "Самые глубокие перемены от ИИ в конечном счёте затронут отношения между людьми. Когда знания становятся доступными мгновенно, а привычные профессии стремительно меняются, прежняя мерка ценности человека по рабочим часам и профессиональным барьерам уходит в прошлое. Будущее, к которому мы стремимся, не оценивает человека по тому, дешевле ли он машины; оно заново выстраивает доверие, справедливость и уважение — возвращает образованию радость открытия вместо зубрёжки и вновь делает главной ценностью живую человеческую связь и бескорыстную увлечённость. Даже в стороне от бесконечного информационного шума всегда найдётся тот, кто днём протянет чашку тёплого чёрного чая, чтобы на крыше, в солнечном свете и лёгком ветре, не спеша поговорить об идеалах, не требующих награды.",
        },
        {
          heading: "Чистая энергия и долгий договор с Землёй",
          body: "Искусственный интеллект — не невесомое волшебство в облаках. За каждым диалогом и вычислением стоят вполне реальные электричество, вода для охлаждения, микросхемы и земля. Землю обетованную нельзя построить на бесконечной гонке, истощающей планету. Движение в будущее означает переход от безудержного потребления природы к более бережным вычислениям и чистой энергетике, чтобы с помощью более точных инструментов понимать климат, беречь экосистемы и учиться мере — и вместе с планетой, на которой мы живём, по-настоящему встретить добрую эпоху, способную продлиться тысячелетия.",
        },
        {
          heading: "Вечный путь в неизведанное",
          body: "Наконец, «The Promised Land of Homo» всегда обращена за линию горизонта. Искусственный интеллект может помочь быстрее решать уравнения, расшифровывать тайны жизни и чертить карты звёздного неба, но первый вопрос и решение, ради чего отправляться в путь, всегда остаются за человеком. От мельчайших загадок живого до океанских глубин и далёких галактик — неизведанное не становится меньше с ростом наших инструментов, а лишь шире раскрывается перед взглядом.",
        },
      ],
      closing:
        "Мы живём в удивительное время, полное одновременно головокружительных перемен и больших возможностей. Земля обетованная не должна остаться мимолетным сном в летнюю ночь — это реальный путь, который из поколения в поколение продолжают те, кто сохраняет ясность ума посреди шума, исследуя, исправляя и созидая вместе. Пусть, обретая невиданную прежде силу, человечество сохранит скромность, мягкость и трезвый взгляд — и продолжит путь к будущему, достойному имени человека.",
    },
    ja: {
      titleMain: "The Promised Land of Homo",
      titleSub: "人類の未来へのビジョンと挑戦",
      intro:
        "私たちが今あらためて「The Promised Land of Homo」と語るとき、それは遠い未来の哲学的な空想ではありません。人工知能が暮らしの隅々へと溶け込みつつある今、人類は産業革命よりもさらに深い転換点に立っています。この言葉に込められているのは、人の可能性への賛美であると同時に、機械がますます賢くなる時代において「人としての居場所と尊厳」をもう一度確かめる意志でもあります。",
      sections: [
        {
          heading: "進化の境界を書き換える——機械になるのではなく、知性と共に歩む",
          body: "何百万年ものあいだ、人類の歩みは生命そのものに刻まれ、何千年ものあいだ、言葉や道具、社会の中に紡がれてきました。そして今、私たちは初めて、言葉を理解し、思考を助け、学び続ける知的なパートナーを自らの手で生み出しました。しかし進化の到達点は、人間を機械のように冷たく効率的な存在へ作り変えることではありません。新しい道具の力で退屈な反復作業から解放され、世界がどれほど移ろっても、二十四歳のような澄んだ好奇心、美しさを感じ取る心、他者を思いやる優しさ、そして自らの選択に責任を持つ勇気を失わないことこそが大切なのです。",
        },
        {
          heading: "知能のうねりと人の主体性——技術をひとりひとりの手へ",
          body: "科学技術はつねに「約束の地」へと架かる橋でしたが、AI が目覚ましい速さで進む世界では、速さがそのまま良さを意味するわけではありません。「答えを出せること」と「安心して託せること」は違い、「機械が賢くなること」が自動的に「人が自由になること」を約束するわけでもないのです。限られた閉じたプラットフォームの独占や不透明なブラックボックスに流されるのではなく、技術の王道征途とは、主導権をふつうの人々の手へ取り戻すことだと私たちは信じます。開かれた基準、確かめられる結果、自分の手で扱える道具、そしていつでも人が見直し手を加えられる境界線。本当の知能時代とは、機械に決定を委ねることではなく、かつて巨大な組織しか持てなかった創造力を、ひとりひとりの手の中に届けることです。",
        },
        {
          heading: "意味の問い直しと、ぬくもりのある社会へ",
          body: "人工知能がもたらす最も深い変化は、やがて人と人との関係に現れます。知識を手に入れることがたやすくなり、従来の仕事のあり方が次々と書き換えられる中で、労働時間や肩書きだけで人の価値を測る物差しは揺らぎ始めています。私たちが願う未来の社会は、「機械より安いかどうか」で人を値踏みするのではなく、新しい役割分担の中で信頼と公正、そして尊厳を築き直す社会です。学びは暗記から気づきへと戻り、本当にかけがえのない価値は、人と人との誠実なつながりや損得を離れた情熱へと還っていきます。情報の喧騒が絶え間なく押し寄せるその外側で、午後に温かい紅茶を一杯差し出し、屋上の陽射しとそよ風の中で、見返りを求めない理想をゆっくり語り合えるような時間こそ、何にも代えがたいものです。",
        },
        {
          heading: "クリーンエネルギーと地球との長い約束",
          body: "人工知能は宙に浮かぶ魔法ではありません。一度の対話や計算の背後にも、確かな電力や冷却水、半導体、そして土地が使われています。「約束の地」は、地球を際限なくすり減らす競争の上には築けません。未来へ向かうとは、拡大のために自然を奪う姿勢から離れ、より省エネな技術とクリーンなエネルギーを土台に据えることです。そして強くなった知的な道具を使って気候を理解し、生態系を守り、節度を学ぶことで、人類とこの星が千年にわたり続く良き時代を本当に迎えられるようにしていくのです。",
        },
        {
          heading: "未知へと続く果てしない旅路",
          body: "最後に、「The Promised Land of Homo」はつねに地平線の彼方を見つめています。人工知能は数式を速く解き、生命を読み解き、星図を描く手助けをしてくれるでしょう。けれど最初の問いを立て、なぜ旅立つのかを決めるのは、いつだって人間自身です。小さな生命の謎から深海、そして遠い星々まで、道具がどれほど強くなっても未知は小さくなりません。視野が広がるほどに、世界はむしろさらに果てしなく広がっていくのです。",
        },
      ],
      closing:
        "私たちは今、目まいがするほど変化が速く、同時に豊かな可能性に満ちた時代を生きています。約束の地は、儚い真夏の夜の夢で終わらせてはなりません。喧騒の波の中でも正気を保ち、世代を超えて探求し、繕い、共に築き続けていく現実の旅路です。かつてない力を手にする今だからこそ、謙虚さと穏やかさ、そして澄んだまなざしを携えて前へ進み、「人類」の名にふさわしい未来を形づくっていきましょう。",
    },
    ko: {
      titleMain: "The Promised Land of Homo",
      titleSub: "인류의 미래에 대한 비전과 도전",
      intro:
        "오늘 우리가 다시 「The Promised Land of Homo」를 이야기할 때, 그것은 더 이상 머나먼 철학적 상상이 아닙니다. 인공지능이 일상의 구석구석으로 스며드는 지금, 인류는 산업혁명보다도 더 깊은 전환점 앞에 서 있습니다. 이 이름에는 인간의 가능성에 대한 찬사와 함께, 기계가 날로 똑똑해지는 시대 속에서 ‘인간다움의 자리와 존엄’을 다시 확인하려는 뜻이 담겨 있습니다.",
      sections: [
        {
          heading: "진화의 경계를 다시 쓰다: 기계가 되는 것이 아니라 지능과 함께 걷기",
          body: "수백만 년 동안 인류의 성장은 생명 그 자체에 새겨졌고, 수천 년 동안은 언어와 도구, 사회 속에 쌓여 왔습니다. 오늘날 우리는 처음으로 언어를 이해하고 생각을 도우며 끊임없이 배우는 지적인 동반자를 만들어 냈습니다. 그러나 진화의 끝은 사람을 기계처럼 차갑고 효율적으로 바꾸는 데 있지 않습니다. 새로운 도구의 도움으로 지루하고 반복적인 노동에서 벗어나, 세상이 아무리 달라져도 스물네 살처럼 맑은 호기심과 아름다움을 느끼는 마음, 타인을 헤아리는 다정함, 그리고 스스로의 선택에 책임지는 용기를 지켜 나가는 것입니다.",
        },
        {
          heading: "지능의 물결과 인간의 주체성: 기술을 모두의 손으로",
          body: "과학기술은 언제나 ‘약속의 땅’으로 이어지는 다리였지만, 인공지능이 눈부신 속도로 발전하는 세상에서 더 빠르다고 해서 저절로 더 나아지지는 않습니다. ‘답을 내놓을 수 있다’는 것이 ‘믿고 맡길 수 있다’는 뜻은 아니며, 기계가 더 똑똑해진다고 사람이 저절로 더 자유로워지지도 않습니다. 소수의 폐쇄적인 플랫폼 독점과 속을 알 수 없는 블랙박스에 맞서, 우리는 기술이 걸어야 할 왕도(王道)가 주도권을 평범한 사람들의 손으로 되돌려 주는 데 있다고 믿습니다. 투명하고 열린 기준, 누구나 검증할 수 있는 결과, 스스로 다룰 수 있는 도구, 그리고 언제든 사람이 살피고 바로잡을 수 있는 경계. 진정한 지능의 시대는 기계가 대신 결정하는 시대가 아니라, 과거 거대한 기관만이 누렸던 창조력을 모든 개인이 품게 되는 시대입니다.",
        },
        {
          heading: "의미의 재발견과 더 따뜻한 사회",
          body: "인공지능이 불러오는 가장 깊은 변화는 결국 사람과 사람의 관계에 나타납니다. 지식을 얻는 일이 손쉬워지고 익숙하던 일자리가 빠르게 달라지면서, 오직 노동 시간과 직무 장벽만으로 사람의 가치를 재던 기준도 흔들리고 있습니다. 우리가 바라는 미래 사회는 ‘기계보다 값이 싼가’로 누군가를 평가하지 않고, 새로운 역할 분담 속에서 신뢰와 공정, 존엄을 다시 세우는 사회입니다. 교육은 암기가 아니라 깨달음으로 돌아가고, 진정 소중한 가치는 사람 사이의 진심 어린 연결과 계산 없는 열정으로 돌아갑니다. 쉴 새 없이 쏟아지는 정보의 소음 너머에서도, 오후에 따뜻한 홍차 한 잔을 건네고 옥상의 햇살과 산들바람 속에서 대가를 바라지 않는 이상을 천천히 이야기할 수 있는 마음은 무엇과도 바꿀 수 없습니다.",
        },
        {
          heading: "청정에너지와 지구와의 오랜 약속",
          body: "인공지능은 허공에 떠 있는 마법이 아닙니다. 모든 대화와 연산 뒤에는 실제 전기와 냉각수, 반도체, 그리고 땅이 쓰입니다. ‘약속의 땅’은 지구를 끝없이 소모하는 경쟁 위에는 세워질 수 없습니다. 미래로 나아간다는 것은 확장을 위해 자연을 끌어다 쓰던 방식에서 벗어나, 더 에너지를 아끼는 기술과 깨끗한 에너지를 바탕으로 삼는 일입니다. 더 정교해진 도구로 기후를 이해하고 생태계를 지키며 절제를 배울 때, 인류와 우리가 함께 살아가는 이 행성은 비로소 천 년을 이어갈 좋은 시대를 맞이할 수 있습니다.",
        },
        {
          heading: "미지를 향한 끝없는 여정",
          body: "마지막으로, 「The Promised Land of Homo」는 언제나 지평선 너머를 바라봅니다. 인공지능은 수식을 더 빠르게 풀고 생명을 읽어 내며 별자리를 그리는 일을 도와줄 수 있습니다. 하지만 첫 번째 질문을 던지고 왜 떠나야 하는지 결정하는 존재는 언제나 인간 자신입니다. 작은 생명의 신비에서 깊은 바다와 먼 별빛까지, 도구가 강해질수록 미지의 세계는 줄어들지 않고 오히려 우리의 시야와 함께 더 넓어집니다.",
        },
      ],
      closing:
        "우리는 지금 아찔할 만큼 빠르면서도 풍부한 가능성으로 가득한 시대를 지나고 있습니다. 약속의 땅은 찰나의 한여름 밤의 꿈으로 그쳐서는 안 됩니다. 떠들썩한 물결 속에서도 맑은 정신을 지키며, 세대를 이어 탐구하고 보듬고 함께 쌓아 가는 현실의 여정이어야 합니다. 전례 없는 힘을 손에 쥔 지금일수록 겸손함과 온화함, 그리고 깨어 있는 시선을 간직한 채 앞으로 나아가며, ‘인류’라는 이름에 걸맞은 미래를 만들어 갑시다.",
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
        const p = document.createElement("p");
        p.textContent = sec.body;
        frag.appendChild(h4);
        frag.appendChild(p);
      }

      const closingP = document.createElement("p");
      closingP.textContent = edition.closing;
      frag.appendChild(closingP);

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
