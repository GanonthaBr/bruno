/* ============================================================
   blog-data.js
   Each post has a base (English) and a translations{fr,ar} block.
   getBlogPostsLocalized() / getBlogPostById() return the right lang.
   ============================================================ */

const BLOG_POSTS = [
  {
    id: "intro-to-mechanistic-interpretability",
    title: "A Gentle Introduction to Mechanistic Interpretability",
    category: "Interpretability",
    date: "2025-03-15",
    readTime: "10 min read",
    excerpt: "What does it mean to 'understand' a neural network? Mechanistic interpretability aims to reverse-engineer the algorithms learned by models — I walk through the core ideas and why I find this research direction so compelling.",
    content: `
<p>Mechanistic interpretability is one of the most exciting and challenging areas of AI safety research. At its core, it asks a deceptively simple question: <em>what is a neural network actually doing when it makes a prediction?</em></p>

<h2>The Problem of Opacity</h2>
<p>Modern large language models are trained on vast corpora and develop capabilities that surprise even their creators. Yet we treat them largely as black boxes: we give them inputs, observe their outputs, and iterate on training to get better outputs. We have very little insight into <em>how</em> the computation happens internally.</p>
<p>This opacity isn't just philosophically unsatisfying — it's a concrete safety problem. If we don't understand how a model reasons, we can't reliably predict when it will fail, detect deceptive behavior, or verify that it has learned the values we intended.</p>

<h2>What Mechanistic Interpretability Does</h2>
<p>Mechanistic interpretability tries to reverse-engineer neural networks the way a reverse engineer might analyze a compiled binary: by carefully studying the internal computations, identifying functional components (circuits), and building a human-understandable account of how the model computes its outputs.</p>
<p>A central concept is the <strong>circuit</strong>: a sub-graph of the network that implements a specific algorithm. For example, in their landmark 2021 paper, Olah et al. found that curve detectors in vision models are implemented by specific circuits that can be described mathematically:</p>

$$\\text{curve}_{\\theta}(x) = \\max_{r} \\left[ \\text{edge}_{\\theta}(x + r\\hat{n}) - \\text{edge}_{\\theta + \\pi}(x - r\\hat{n}) \\right]$$

<p>Here, $\\theta$ is the curve orientation and $\\hat{n}$ is the normal direction. The point is that the model learned a clean, interpretable algorithm — and we can find it!</p>

<h2>Key Techniques</h2>
<p>Several techniques have proven particularly useful in mechanistic interpretability:</p>
<ul>
  <li><strong>Activation patching (causal tracing):</strong> Selectively replacing activations from a "clean" run into a "corrupted" run to identify which components are causally responsible for a behavior.</li>
  <li><strong>Logit lens / direct logit attribution:</strong> Projecting intermediate residual stream states into vocabulary space to see how predictions evolve through layers.</li>
  <li><strong>Sparse autoencoders (SAEs):</strong> Training an overcomplete dictionary on activations to find sparse, potentially monosemantic features.</li>
</ul>

<h2>A Simple Example: Attention Heads as Matching Operations</h2>
<p>Consider a single attention head. It computes:</p>

$$\\text{Attn}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right) V$$

<p>where $Q = XW_Q$, $K = XW_K$, $V = XW_V$. From an interpretability perspective, we can ask: what does the product $W_Q W_K^T$ compute in the residual stream basis? This is called the QK circuit, and analyzing it often reveals the matching criterion an attention head implements (e.g., "copy previous token", "attend to subject noun").</p>

<h2>Why I'm Excited</h2>
<p>I believe mechanistic interpretability has a real chance of giving us the conceptual tools to build AI systems we can actually trust. It's hard, painstaking work — but the payoff, a genuine understanding of what these systems are doing — seems worth it.</p>
<p>In upcoming posts, I'll dive into specific circuits I've been studying in the context of my research. Stay tuned!</p>`,
    translations: {
      fr: {
        title: "Introduction à l'Interprétabilité Mécanistique",
        category: "Interprétabilité",
        readTime: "10 min de lecture",
        excerpt: "Que signifie « comprendre » un réseau de neurones ? L'interprétabilité mécanistique vise à rétro-concevoir les algorithmes appris par les modèles — je présente les idées fondamentales et pourquoi cette direction de recherche me captive.",
        content: `
<p>L'interprétabilité mécanistique est l'un des domaines les plus fascinants et les plus complexes de la recherche en sécurité de l'IA. En son cœur, elle pose une question trompeusement simple : <em>que fait réellement un réseau de neurones lorsqu'il effectue une prédiction ?</em></p>

<h2>Le Problème de l'Opacité</h2>
<p>Les grands modèles de langage modernes sont entraînés sur d'immenses corpus et développent des capacités qui surprennent même leurs créateurs. Pourtant, nous les traitons largement comme des boîtes noires : nous leur fournissons des entrées, observons leurs sorties, et affinons l'entraînement pour obtenir de meilleures sorties. Nous avons très peu d'aperçu sur <em>comment</em> le calcul s'effectue en interne.</p>
<p>Cette opacité n'est pas seulement insatisfaisante d'un point de vue philosophique — c'est un problème concret de sécurité. Si nous ne comprenons pas comment un modèle raisonne, nous ne pouvons pas prévoir de manière fiable ses échecs, détecter des comportements trompeurs, ni vérifier qu'il a appris les valeurs que nous souhaitons.</p>

<h2>Ce que Fait l'Interprétabilité Mécanistique</h2>
<p>L'interprétabilité mécanistique essaie de rétro-concevoir les réseaux de neurones comme un ingénieur analyserait un binaire compilé : en étudiant soigneusement les calculs internes, en identifiant les composants fonctionnels (circuits), et en construisant une description compréhensible par l'humain de la façon dont le modèle calcule ses sorties.</p>
<p>Un concept central est le <strong>circuit</strong> : un sous-graphe du réseau qui implémente un algorithme spécifique. Par exemple, dans leur article fondateur de 2021, Olah et al. ont découvert que les détecteurs de courbes dans les modèles de vision sont implémentés par des circuits spécifiques pouvant être décrits mathématiquement :</p>

$$\\text{courbe}_{\\theta}(x) = \\max_{r} \\left[ \\text{bord}_{\\theta}(x + r\\hat{n}) - \\text{bord}_{\\theta + \\pi}(x - r\\hat{n}) \\right]$$

<p>Ici, $\\theta$ est l'orientation de la courbe et $\\hat{n}$ est la direction normale. L'essentiel est que le modèle a appris un algorithme propre et interprétable — et nous pouvons le trouver !</p>

<h2>Techniques Clés</h2>
<p>Plusieurs techniques se sont révélées particulièrement utiles en interprétabilité mécanistique :</p>
<ul>
  <li><strong>Patching d'activation (traçage causal) :</strong> Remplacer sélectivement des activations d'une exécution « propre » dans une exécution « corrompue » pour identifier quels composants sont causalement responsables d'un comportement.</li>
  <li><strong>Objectif logit / attribution directe des logits :</strong> Projeter les états intermédiaires du flux résiduel dans l'espace du vocabulaire pour voir comment les prédictions évoluent à travers les couches.</li>
  <li><strong>Autoencodeurs épars (SAE) :</strong> Entraîner un dictionnaire surcomplet sur des activations pour trouver des caractéristiques éparsées, potentiellement monosémantiques.</li>
</ul>

<h2>Un Exemple Simple : Les Têtes d'Attention comme Opérations de Correspondance</h2>
<p>Considérons une seule tête d'attention. Elle calcule :</p>

$$\\text{Attn}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right) V$$

<p>où $Q = XW_Q$, $K = XW_K$, $V = XW_V$. Du point de vue de l'interprétabilité, on peut se demander : que calcule le produit $W_Q W_K^T$ dans la base du flux résiduel ? C'est ce qu'on appelle le circuit QK, et son analyse révèle souvent le critère de correspondance qu'une tête d'attention implémente (par exemple, « copier le token précédent », « s'attacher au nom sujet »).</p>

<h2>Pourquoi Je Suis Enthousiaste</h2>
<p>Je crois que l'interprétabilité mécanistique a une vraie chance de nous donner les outils conceptuels pour construire des systèmes d'IA en lesquels nous pouvons vraiment avoir confiance. C'est un travail difficile et minutieux — mais la récompense, une véritable compréhension de ce que ces systèmes font — en vaut la peine.</p>
<p>Dans les prochains articles, je plongerai dans des circuits spécifiques que j'étudie dans le cadre de ma recherche. Restez à l'écoute !</p>`
      },
      ar: {
        title: "مقدمة لطيفة إلى التفسيرية الآلية",
        category: "التفسيرية",
        readTime: "10 دقائق للقراءة",
        excerpt: "ماذا يعني أن «نفهم» شبكة عصبية؟ تسعى التفسيرية الآلية إلى إعادة هندسة الخوارزميات التي تتعلمها النماذج — أستعرض الأفكار الأساسية وسبب اهتمامي بهذا التوجه البحثي.",
        content: `
<p>تُعدّ التفسيرية الآلية من أكثر مجالات بحوث سلامة الذكاء الاصطناعي إثارةً وتحدياً. في جوهرها، تطرح سؤالاً بسيطاً في ظاهره: <em>ما الذي تفعله الشبكة العصبية فعلياً حين تُجري تنبؤاً ما؟</em></p>

<h2>مشكلة الغموض</h2>
<p>تُدرَّب نماذج اللغة الكبيرة الحديثة على مجموعات بيانات ضخمة، وتطوّر قدرات تُفاجئ حتى مصمّميها. ومع ذلك، نتعامل معها في الغالب كصناديق سوداء: نُدخل إليها مُدخَلات، ونرصد مُخرَجاتها، ونُعدّل عملية التدريب للحصول على نتائج أفضل. ولدينا فهم محدود جداً لـ<em>كيفية</em> إجراء الحسابات داخلياً.</p>
<p>هذا الغموض ليس مُقلقاً من الناحية الفلسفية فحسب، بل يمثّل مشكلة أمنية ملموسة. فإذا لم نفهم كيف يستدلّ النموذج، لا يمكننا التنبؤ بثقة بحالات إخفاقه، ولا اكتشاف السلوك الخادع، ولا التحقق من أنه تعلّم القيم التي نقصدها.</p>

<h2>ما تفعله التفسيرية الآلية</h2>
<p>تسعى التفسيرية الآلية إلى عكس هندسة الشبكات العصبية، تماماً كما يُحلّل مهندس ثنائياً مُصرَّفاً: بدراسة الحسابات الداخلية بعناية، وتحديد المكوّنات الوظيفية (الدوائر)، وبناء وصف مفهوم للإنسان يشرح كيف يحسب النموذج مُخرَجاته.</p>
<p>من المفاهيم المحورية <strong>الدائرة</strong>: وهي رسم بياني جزئي من الشبكة يُنفّذ خوارزمية بعينها. ففي ورقتهم البحثية المرجعية عام 2021، اكتشف أولا وآخرون أن كاشفات المنحنيات في نماذج الرؤية تُنفَّذ بدوائر محددة يمكن وصفها رياضياً:</p>

$$\\text{منحنى}_{\\theta}(x) = \\max_{r} \\left[ \\text{حافة}_{\\theta}(x + r\\hat{n}) - \\text{حافة}_{\\theta + \\pi}(x - r\\hat{n}) \\right]$$

<p>هنا $\\theta$ هو اتجاه المنحنى و$\\hat{n}$ هو الاتجاه العمودي. الأهم أن النموذج تعلّم خوارزمية نظيفة وقابلة للتفسير — ويمكننا إيجادها!</p>

<h2>التقنيات الرئيسية</h2>
<p>ثمة تقنيات عدة أثبتت فائدتها الكبيرة في التفسيرية الآلية:</p>
<ul>
  <li><strong>ترقيع التنشيط (التتبع السببي):</strong> استبدال انتقائي للتنشيطات من تشغيل «نظيف» في تشغيل «مُفسَد» لتحديد المكوّنات المسؤولة سببياً عن سلوك معيّن.</li>
  <li><strong>عدسة اللوجت / الإسناد المباشر للوجت:</strong> إسقاط حالات تدفق المخلّفات الوسيطة في فضاء المفردات لمعرفة كيف تتطوّر التنبؤات عبر الطبقات.</li>
  <li><strong>المشفّرات التلقائية المتفرقة:</strong> تدريب قاموس فائق الاكتمال على التنشيطات للعثور على ميزات متفرقة قابلة للتفسير.</li>
</ul>

<h2>مثال بسيط: رؤوس الانتباه كعمليات مطابقة</h2>
<p>لنأخذ رأس انتباه واحداً. يحسب:</p>

$$\\text{Attn}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right) V$$

<p>حيث $Q = XW_Q$, $K = XW_K$, $V = XW_V$. من منظور التفسيرية، يمكننا أن نسأل: ماذا يحسب حاصل الضرب $W_Q W_K^T$ في أساس تدفق المخلّفات؟ يُسمّى هذا بدائرة QK، وغالباً ما يكشف تحليلها عن معيار المطابقة الذي ينفّذه رأس الانتباه (مثل «نسخ الرمز السابق»، أو «الانتباه إلى اسم الفاعل»).</p>

<h2>لماذا أنا متحمّس</h2>
<p>أعتقد أن للتفسيرية الآلية فرصة حقيقية في منحنا الأدوات المفاهيمية لبناء أنظمة ذكاء اصطناعي يمكننا الوثوق بها فعلاً. إنه عمل شاق ودقيق — لكن المكافأة، وهي الفهم الحقيقي لما تفعله هذه الأنظمة، تستحق العناء.</p>
<p>في المقالات القادمة، سأتعمق في دوائر بعينها أدرسها في إطار بحثي. ترقّبوا!</p>`
      }
    }
  },

  {
    id: "sparse-autoencoders-features",
    title: "Sparse Autoencoders and the Superposition Hypothesis",
    category: "Research Notes",
    date: "2025-05-02",
    readTime: "12 min read",
    excerpt: "Neural networks appear to represent far more features than they have dimensions. Sparse autoencoders offer a principled way to disentangle this superposition — but do they actually find meaningful features?",
    content: `
<p>One of the most intriguing puzzles in mechanistic interpretability is the <strong>superposition hypothesis</strong>: the idea that neural networks represent more features than they have neurons by encoding multiple features in superposition across neurons.</p>

<h2>The Superposition Hypothesis</h2>
<p>Suppose a model needs to represent $n$ binary features, but has only $d \\ll n$ neurons. It can still do this approximately if the feature vectors are near-orthogonal in $\\mathbb{R}^d$. The interference between features is small as long as most features are "off" (sparse) at any given input. More precisely, if each feature is active with probability $p$, the expected interference is:</p>

$$\\mathbb{E}[\\text{interference}] \\approx \\frac{n - d}{d} \\cdot p$$

<p>For small $p$ (sparse features), this can be negligible even when $n \\gg d$.</p>

<h2>Enter Sparse Autoencoders</h2>
<p>A sparse autoencoder (SAE) trained on model activations attempts to find this overcomplete feature dictionary. Given an activation vector $x \\in \\mathbb{R}^d$, an SAE computes:</p>

$$\\hat{x} = W_{\\text{dec}}\\, \\text{ReLU}(W_{\\text{enc}} x + b_{\\text{enc}}) + b_{\\text{dec}}$$

<p>with a reconstruction loss plus an $L_1$ sparsity penalty on the hidden activations $f = \\text{ReLU}(W_{\\text{enc}} x + b_{\\text{enc}})$:</p>

$$\\mathcal{L} = \\|x - \\hat{x}\\|_2^2 + \\lambda \\|f\\|_1$$

<p>The $L_1$ penalty encourages only a small number of features to be active at once. In principle, each column of $W_{\\text{dec}}$ should correspond to a single, interpretable feature direction.</p>

<h2>Do SAE Features Make Sense?</h2>
<p>Recent work from Anthropic and others suggests yes — many SAE features are surprisingly interpretable. Features have been found corresponding to concepts like "mentions of Paris", "Python code indentation", and "emotionally negative contexts". This is striking evidence that models <em>do</em> learn something close to discrete, human-interpretable concepts.</p>

<p>However, there are important caveats:</p>
<ul>
  <li>Many features remain opaque and don't correspond to obvious concepts.</li>
  <li>It's unclear whether feature geometry (beyond individual feature directions) carries meaning.</li>
  <li>SAEs trade off reconstruction fidelity against sparsity — the optimal $\\lambda$ is hard to choose.</li>
</ul>

<h2>My Current Work</h2>
<p>In my research, I'm investigating whether SAE features are consistent across model checkpoints and across similar but differently-trained models. Preliminary results suggest a core set of "universal" features that appear robustly, alongside a long tail of model-specific features. More on this soon!</p>`,
    translations: {
      fr: {
        title: "Les Autoencodeurs Épars et l'Hypothèse de Superposition",
        category: "Notes de Recherche",
        readTime: "12 min de lecture",
        excerpt: "Les réseaux de neurones semblent représenter bien plus de caractéristiques qu'ils n'ont de dimensions. Les autoencodeurs épars offrent un moyen rigoureux de démêler cette superposition — mais trouvent-ils vraiment des caractéristiques significatives ?",
        content: `
<p>L'une des énigmes les plus intrigantes en interprétabilité mécanistique est l'<strong>hypothèse de superposition</strong> : l'idée que les réseaux de neurones représentent plus de caractéristiques qu'ils n'ont de neurones en encodant plusieurs caractéristiques en superposition à travers les neurones.</p>

<h2>L'Hypothèse de Superposition</h2>
<p>Supposons qu'un modèle doive représenter $n$ caractéristiques binaires, mais ne dispose que de $d \\ll n$ neurones. Il peut néanmoins le faire approximativement si les vecteurs de caractéristiques sont quasi-orthogonaux dans $\\mathbb{R}^d$. L'interférence entre les caractéristiques est faible tant que la plupart d'entre elles sont « inactives » (éparses) pour toute entrée donnée. Plus précisément, si chaque caractéristique est active avec probabilité $p$, l'interférence attendue est :</p>

$$\\mathbb{E}[\\text{interférence}] \\approx \\frac{n - d}{d} \\cdot p$$

<p>Pour de petites valeurs de $p$ (caractéristiques éparses), cela peut être négligeable même lorsque $n \\gg d$.</p>

<h2>Les Autoencodeurs Épars</h2>
<p>Un autoencodeur épars (SAE) entraîné sur des activations de modèles tente de trouver ce dictionnaire de caractéristiques surcomplet. Étant donné un vecteur d'activation $x \\in \\mathbb{R}^d$, un SAE calcule :</p>

$$\\hat{x} = W_{\\text{dec}}\\, \\text{ReLU}(W_{\\text{enc}} x + b_{\\text{enc}}) + b_{\\text{dec}}$$

<p>avec une perte de reconstruction plus une pénalité de parcimonie $L_1$ sur les activations latentes $f = \\text{ReLU}(W_{\\text{enc}} x + b_{\\text{enc}})$ :</p>

$$\\mathcal{L} = \\|x - \\hat{x}\\|_2^2 + \\lambda \\|f\\|_1$$

<p>La pénalité $L_1$ encourage seulement un petit nombre de caractéristiques à être actives à la fois. En principe, chaque colonne de $W_{\\text{dec}}$ devrait correspondre à une seule direction de caractéristique interprétable.</p>

<h2>Les Caractéristiques SAE ont-elles du Sens ?</h2>
<p>Des travaux récents d'Anthropic et d'autres suggèrent que oui — de nombreuses caractéristiques SAE sont étonnamment interprétables. On a trouvé des caractéristiques correspondant à des concepts tels que « mentions de Paris », « indentation de code Python » et « contextes émotionnellement négatifs ». C'est une preuve frappante que les modèles <em>apprennent</em> effectivement quelque chose de proche de concepts discrets et interprétables par l'humain.</p>

<p>Cependant, il y a des mises en garde importantes :</p>
<ul>
  <li>Beaucoup de caractéristiques restent opaques et ne correspondent pas à des concepts évidents.</li>
  <li>Il n'est pas clair si la géométrie des caractéristiques (au-delà des directions individuelles) a une signification.</li>
  <li>Les SAE font un compromis entre fidélité de reconstruction et parcimonie — le $\\lambda$ optimal est difficile à choisir.</li>
</ul>

<h2>Mon Travail Actuel</h2>
<p>Dans ma recherche, j'étudie si les caractéristiques SAE sont cohérentes entre les points de contrôle du modèle et entre des modèles similaires mais entraînés différemment. Les résultats préliminaires suggèrent un ensemble de caractéristiques « universelles » qui apparaissent de manière robuste, aux côtés d'une longue traîne de caractéristiques spécifiques au modèle. Plus d'informations prochainement !</p>`
      },
      ar: {
        title: "المشفرات التلقائية المتفرقة وفرضية التراكب",
        category: "ملاحظات بحثية",
        readTime: "12 دقيقة للقراءة",
        excerpt: "يبدو أن الشبكات العصبية تمثّل ميزاتٍ أكثر بكثير مما لديها من أبعاد. تُتيح المشفرات التلقائية المتفرقة طريقة منهجية لفكّ تشابك هذا التراكب — لكن هل تجد فعلاً ميزات ذات معنى؟",
        content: `
<p>من أكثر الألغاز إثارةً للفضول في التفسيرية الآلية هي <strong>فرضية التراكب</strong>: الفكرة القائلة بأن الشبكات العصبية تمثّل ميزاتٍ أكثر مما لديها من خلايا عصبية، وذلك بترميز ميزات متعددة في حالة تراكب عبر الخلايا العصبية.</p>

<h2>فرضية التراكب</h2>
<p>لنفترض أن نموذجاً يحتاج إلى تمثيل $n$ ميزة ثنائية، لكن ليس لديه سوى $d \\ll n$ خلية عصبية. يمكنه مع ذلك تحقيق ذلك تقريباً إذا كانت متجهات الميزات شبه متعامدة في $\\mathbb{R}^d$. يبقى التداخل بين الميزات ضئيلاً طالما أن معظم الميزات «غير نشطة» (متفرقة) لأي مُدخَل معيّن. وبشكل أدق، إذا كانت كل ميزة نشطة باحتمال $p$، فإن التداخل المتوقع هو:</p>

$$\\mathbb{E}[\\text{التداخل}] \\approx \\frac{n - d}{d} \\cdot p$$

<p>عند قيم صغيرة لـ $p$ (ميزات متفرقة)، يمكن أن يكون هذا ضئيلاً حتى حين $n \\gg d$.</p>

<h2>المشفّرات التلقائية المتفرقة</h2>
<p>يحاول مشفّر تلقائي متفرق (SAE) مُدرَّب على تنشيطات النموذج إيجاد هذا القاموس الفائق الاكتمال للميزات. بمعطى متجه تنشيط $x \\in \\mathbb{R}^d$، يحسب الـ SAE:</p>

$$\\hat{x} = W_{\\text{dec}}\\, \\text{ReLU}(W_{\\text{enc}} x + b_{\\text{enc}}) + b_{\\text{dec}}$$

<p>مع خسارة إعادة بناء مضافاً إليها عقوبة تفرّق $L_1$ على التنشيطات الخفية $f = \\text{ReLU}(W_{\\text{enc}} x + b_{\\text{enc}})$:</p>

$$\\mathcal{L} = \\|x - \\hat{x}\\|_2^2 + \\lambda \\|f\\|_1$$

<p>تُشجّع عقوبة $L_1$ على أن يكون عدد صغير فحسب من الميزات نشطاً في آنٍ واحد. من حيث المبدأ، يجب أن تقابل كل عمود في $W_{\\text{dec}}$ اتجاهَ ميزةٍ واحدة قابلة للتفسير.</p>

<h2>هل تنطوي ميزات SAE على معنى؟</h2>
<p>تشير أعمال حديثة من Anthropic وآخرين إلى الإيجاب — فكثير من ميزات SAE قابلة للتفسير بشكل مثير للدهشة. عُثر على ميزات تقابل مفاهيم كـ«ذِكر باريس»، و«مسافة بادئة في كود Python»، و«السياقات العاطفية السلبية». هذا دليل صارخ على أن النماذج <em>تتعلّم</em> فعلاً شيئاً قريباً من المفاهيم المنفصلة القابلة للتفسير البشري.</p>

<p>غير أن ثمة تحفظات مهمة:</p>
<ul>
  <li>كثير من الميزات لا تزال غامضة ولا تقابل مفاهيم واضحة.</li>
  <li>غير واضح ما إذا كانت هندسة الميزات (بعيداً عن اتجاهات الميزات المنفردة) تحمل معنىً.</li>
  <li>تُوازن الـ SAE بين دقة إعادة البناء والتفرّق — ويصعب اختيار القيمة المثلى لـ $\\lambda$.</li>
</ul>

<h2>عملي الحالي</h2>
<p>أبحث في ما إذا كانت ميزات SAE متسقة عبر نقاط تحقق النموذج وعبر نماذج مشابهة لكن مُدرَّبة بشكل مختلف. تشير النتائج الأولية إلى مجموعة أساسية من الميزات «الكونية» التي تظهر بصورة موثوقة، إلى جانب ذيل طويل من الميزات الخاصة بالنموذج. مزيد من التفاصيل قريباً!</p>`
      }
    }
  },
{
  id: "universal-approximation-theorem",
  title: "The Theorem That Justifies All of Deep Learning",
  category: "Deep Learning",
  date: "2026-05-14",
  readTime: "9 min read",
  excerpt: "A neural network with enough neurons can approximate any function — to any precision. That is not a heuristic or an intuition. It is a theorem. Here is what it actually says, why depth matters exponentially, and what the fine print means for you.",
  content: `
<p>In the previous article, we established what a neural network is: a layered composition of simple artificial neurons, each computing a weighted sum of its inputs and passing the result through a nonlinear function. Stack enough of these units in enough layers, connect them the right way, and you have a deep learning model.</p>

<p>But we did not ask the most important question: <strong>what can such a model actually represent?</strong></p>

<p>Is there a class of functions neural networks can learn, and a class they cannot? Or is there some remarkable generality — some theoretical guarantee that a network can, in principle, fit anything? There is. It is called the Universal Approximation Theorem, and it is the mathematical foundation on which all of deep learning rests.</p>

<h2>What the Theorem Says</h2>

<p>The Universal Approximation Theorem states:</p>

<p><em>A multi-layer perceptron with a single hidden layer and a sufficient number of neurons can approximate any continuous function to any desired level of precision.</em></p>

<p>Not just simple functions. Not just smooth polynomial functions. Not just functions on small inputs. <strong>Any continuous function</strong>, on any domain, to any precision you specify. This is a profound statement. It means that the limitation of a neural network is never its fundamental expressive power. Given enough neurons, a network can represent any continuous mapping from input to output.</p>

<p>But there is important fine print — and it changes everything about how you design a network in practice.</p>

<h2>Understanding "Approximate"</h2>

<p>The theorem does not say a network can <em>exactly</em> compute any function. It says that for any target function f and any error tolerance ε > 0, there exists a network that stays within ε of f at every point.</p>

<p>The way this approximation works is elegant. Think about approximating a smooth curve with a collection of narrow rectangular pulses. Each pulse covers a small interval of the input and has a height equal to the function's value at that point. The narrower the pulses, the more precisely they trace the curve. A neural network can implement exactly this strategy: each neuron in the hidden layer fires within a specific range of inputs, acting as one pulse. The output unit sums all these pulses, weighted by their heights.</p>

<p>More neurons means narrower pulses, which means finer approximation. In the limit of infinitely many neurons, you can approximate the function to any precision. The same argument extends to higher dimensions — the principle is the same: tile the input space with enough small regions, fit each one, and you approximate the whole.</p>

<h2>Three Kinds of Universality</h2>

<p>MLPs are actually universal in three distinct senses, each more powerful than it might first appear.</p>

<ul>
  <li><strong>Universal Boolean function:</strong> Any logical circuit — any combination of AND, OR, NOT, XOR — can be computed by an MLP. A single perceptron can implement AND and OR directly. XOR requires exactly one hidden layer. Since any Boolean function can be expressed in terms of these gates, any Boolean function can be computed by a neural network.</li>
  <li><strong>Universal classifier:</strong> Any decision boundary in continuous space — no matter how complex its shape — can be captured by an MLP. A single hidden layer can draw arbitrarily curved decision boundaries by composing many linear boundaries together. As the number of faces grows, the polygon approaches any shape.</li>
  <li><strong>Universal function approximator:</strong> Any continuous real-valued function can be approximated to arbitrary precision by a single-hidden-layer MLP. This is the most general result, and it subsumes both of the above.</li>
</ul>

<p>All three results hold with just <strong>one hidden layer</strong>. That is the surprising part — you do not need a deep network to guarantee representational power. Depth serves a different purpose entirely.</p>

<h2>The Catch: Exponential Width</h2>

<p>The theorem guarantees existence, not efficiency. Yes, a single hidden layer can approximate any function. But how many neurons does it need?</p>

<p>For certain functions, the answer is catastrophically large. Consider computing the parity (XOR) of N binary inputs. A single-hidden-layer network computing this requires <strong>2^(N−1) neurons</strong>.</p>

<ul>
  <li>N = 10 inputs → 512 neurons</li>
  <li>N = 20 inputs → 524,288 neurons</li>
  <li>N = 30 inputs → over 500 million neurons</li>
</ul>

<p>The growth is exponential in the number of inputs. For high-dimensional real-world problems — images with thousands of pixels, audio with thousands of samples — a shallow network is completely impractical. This is not a flaw in the theorem; it is just telling you that shallow networks, while theoretically universal, can be impossibly expensive in practice.</p>

<h2>Why Depth Is the Real Answer</h2>

<p>A deep network — one with multiple hidden layers — can compute the same parity function using only <strong>3(N−1) neurons</strong> total.</p>

<ul>
  <li>N = 10 inputs → 27 neurons (vs 512)</li>
  <li>N = 20 inputs → 57 neurons (vs 524,288)</li>
  <li>N = 30 inputs → 87 neurons (vs 500 million)</li>
</ul>

<p>That is linear growth instead of exponential. The gap widens with every additional input. How? Through a binary tree of XOR computations. Instead of computing the parity of all N inputs at once, a deep network pairs up inputs at the first layer, pairs up those results at the second layer, and so on. Each layer halves the problem. The total number of neurons grows linearly.</p>

<p>This is the key insight about depth: <strong>it enables reuse of intermediate computations</strong>. A shallow network must recompute everything from scratch for every output neuron. A deep network computes something once in layer k and hands it to layer k+1, which builds on it. The savings compound across layers.</p>

<p>The formal result is striking: a function that requires exponentially many neurons in a shallow network can require only linearly many in a deep one. <strong>Depth is not just a design preference. For many functions, it is a mathematical necessity.</strong></p>

<h2>The Role of Activation Functions</h2>

<p>There is a third dimension beyond width and depth: the <strong>activation function</strong>.</p>

<p>A hard threshold activation blocks information. Once a neuron produces a 0 or a 1, all the nuance of the original input value is lost. The next layer only knows which neurons fired, not by how much.</p>

<p>A smooth activation like sigmoid or tanh preserves that nuance. A neuron that receives a large positive input fires strongly. A neuron that receives a slightly positive input fires weakly. The gradation carries information that the next layer can use to distinguish cases that a threshold network would treat identically.</p>

<p>ReLU (Rectified Linear Unit), which outputs max(0, z), is in many ways the most "graded" of the standard activations — it is linear above zero, passing arbitrarily large values through without compression. This makes it the most information-preserving, and is why ReLU largely replaced sigmoid as the default in modern networks.</p>

<h2>What the Theorem Does Not Give You</h2>

<p>It is worth being precise about what universal approximation does and does not guarantee.</p>

<p>It guarantees that a network with the right architecture <em>can</em> represent a target function — meaning those weights exist somewhere in the space of all possible weight configurations. It does not guarantee:</p>

<ul>
  <li>That gradient descent will find those weights</li>
  <li>That you have enough training data to specify the function</li>
  <li>That the network will generalize to inputs it has not seen</li>
  <li>That training will converge in a reasonable amount of time</li>
</ul>

<p>These are the hard problems of deep learning, and they occupy the rest of the course. <strong>Representation is solved. Learning is the challenge.</strong></p>

<h2>What's Next</h2>

<p>We know a network <em>can</em> represent any function. We do not yet know how to make it represent a <em>specific</em> function — the one that maps our training inputs to the correct outputs. That requires a learning algorithm, and that algorithm at its core requires understanding one mathematical concept: the derivative. In the next article, we build that intuition from the ground up.</p>`,

  translations: {
    fr: {
      title: "Le Théorème qui Justifie Tout l'Apprentissage Profond",
      category: "Apprentissage Profond",
      readTime: "9 min de lecture",
      excerpt: "Un réseau de neurones avec suffisamment de neurones peut approximer n'importe quelle fonction — avec n'importe quelle précision. Ce n'est pas une heuristique. C'est un théorème. Voici ce qu'il dit réellement, pourquoi la profondeur compte exponentiellement, et ce que signifient les nuances.",
      content: `
<p>Dans l'article précédent, nous avons établi ce qu'est un réseau de neurones : une composition en couches de simples neurones artificiels, chacun calculant une somme pondérée de ses entrées et passant le résultat par une fonction non linéaire.</p>

<p>Mais nous n'avons pas posé la question la plus importante : <strong>que peut réellement représenter un tel modèle ?</strong></p>

<p>Il existe une garantie théorique remarquable qu'un réseau peut, en principe, s'adapter à n'importe quoi. Elle s'appelle le Théorème d'Approximation Universelle, et c'est le fondement mathématique sur lequel repose tout l'apprentissage profond.</p>

<h2>Ce que dit le théorème</h2>

<p>Le Théorème d'Approximation Universelle énonce :</p>

<p><em>Un perceptron multi-couches avec une seule couche cachée et un nombre suffisant de neurones peut approximer n'importe quelle fonction continue avec n'importe quel niveau de précision désiré.</em></p>

<p>Pas seulement les fonctions simples. Pas seulement les fonctions polynomiales lisses. <strong>N'importe quelle fonction continue</strong>, sur n'importe quel domaine, avec n'importe quelle précision que vous spécifiez. Cela signifie que la limitation d'un réseau de neurones n'est jamais sa puissance expressive fondamentale.</p>

<h2>Comprendre « approximer »</h2>

<p>Le théorème ne dit pas qu'un réseau peut calculer <em>exactement</em> n'importe quelle fonction. Il dit que pour toute fonction cible f et toute tolérance d'erreur ε > 0, il existe un réseau qui reste dans ε de f en chaque point.</p>

<p>La façon dont fonctionne cette approximation est élégante. Imaginez approximer une courbe lisse avec une collection d'impulsions rectangulaires étroites. Chaque impulsion couvre un petit intervalle de l'entrée et a une hauteur égale à la valeur de la fonction en ce point. Plus les impulsions sont étroites, plus elles tracent précisément la courbe. Plus de neurones = impulsions plus étroites = approximation plus fine.</p>

<h2>Trois types d'universalité</h2>

<p>Les MLPs sont universels en trois sens distincts :</p>

<ul>
  <li><strong>Fonction booléenne universelle :</strong> Tout circuit logique peut être calculé par un MLP.</li>
  <li><strong>Classificateur universel :</strong> N'importe quelle frontière de décision dans l'espace continu peut être capturée par un MLP.</li>
  <li><strong>Approximateur de fonction universel :</strong> N'importe quelle fonction réelle continue peut être approximée à précision arbitraire par un MLP à couche cachée unique.</li>
</ul>

<p>Les trois résultats tiennent avec une seule couche cachée. C'est la partie surprenante — la profondeur sert un tout autre objectif.</p>

<h2>Le piège : la largeur exponentielle</h2>

<p>Le théorème garantit l'existence, pas l'efficacité. Pour calculer la parité (XOR) de N entrées binaires, un réseau à couche cachée unique nécessite <strong>2^(N−1) neurones</strong>.</p>

<ul>
  <li>N = 10 → 512 neurones</li>
  <li>N = 20 → 524 288 neurones</li>
  <li>N = 30 → plus de 500 millions de neurones</li>
</ul>

<p>La croissance est exponentielle. Pour les problèmes réels en haute dimension, un réseau peu profond est totalement impraticable.</p>

<h2>Pourquoi la profondeur est la vraie réponse</h2>

<p>Un réseau profond calcule la même fonction avec seulement <strong>3(N−1) neurones</strong> au total.</p>

<ul>
  <li>N = 10 → 27 neurones (contre 512)</li>
  <li>N = 20 → 57 neurones (contre 524 288)</li>
</ul>

<p>C'est une croissance linéaire au lieu d'exponentielle. La profondeur permet la <strong>réutilisation des calculs intermédiaires</strong>. Un réseau peu profond doit tout recalculer depuis le début pour chaque neurone de sortie. Un réseau profond calcule quelque chose une fois dans la couche k et le passe à la couche k+1, qui s'appuie dessus.</p>

<p><strong>La profondeur n'est pas qu'une préférence de conception. Pour de nombreuses fonctions, c'est une nécessité mathématique.</strong></p>

<h2>Le rôle des fonctions d'activation</h2>

<p>Une activation à seuil dur bloque l'information. Une fois qu'un neurone produit un 0 ou un 1, toute la nuance de la valeur d'entrée originale est perdue. Une activation lisse comme la sigmoïde ou tanh préserve cette nuance — la gradation transporte une information que la couche suivante peut utiliser. ReLU, qui produit max(0, z), est le plus « gradué » des activations standard, et c'est pourquoi il a largement remplacé la sigmoïde comme choix par défaut.</p>

<h2>Ce que le théorème ne vous donne pas</h2>

<p>Il garantit que les bons poids <em>existent</em> quelque part. Il ne garantit pas :</p>

<ul>
  <li>Que la descente de gradient les trouvera</li>
  <li>Que vous avez suffisamment de données d'entraînement</li>
  <li>Que le réseau généralisera aux entrées inconnues</li>
  <li>Que l'entraînement convergera en un temps raisonnable</li>
</ul>

<p><strong>La représentation est résolue. L'apprentissage est le défi.</strong></p>

<h2>Ce qui vient ensuite</h2>

<p>Nous savons qu'un réseau <em>peut</em> représenter n'importe quelle fonction. Nous ne savons pas encore comment lui faire représenter une fonction <em>spécifique</em>. Cela nécessite un algorithme d'apprentissage, et cet algorithme nécessite de comprendre un seul concept mathématique : la dérivée. Dans le prochain article, nous construisons cette intuition depuis le début.</p>`
    },

    ar: {
      title: "النظرية التي تبرر كل التعلم العميق",
      category: "التعلم العميق",
      readTime: "9 دقائق للقراءة",
      excerpt: "شبكة عصبية بعدد كافٍ من الخلايا تستطيع تقريب أي دالة — بأي دقة. هذه ليست حدسية. إنها نظرية. إليك ما تقوله فعلاً، ولماذا يهم العمق بشكل أسي، وما تعنيه التحفظات.",
      content: `
<p>في المقال السابق، أرسينا ما هي الشبكة العصبية: تركيبة متعددة الطبقات من خلايا عصبية اصطناعية بسيطة، كل منها تحسب مجموعاً موزوناً لمدخلاتها وتمرر النتيجة عبر دالة غير خطية.</p>

<p>لكننا لم نطرح السؤال الأهم: <strong>ما الذي يستطيع مثل هذا النموذج تمثيله فعلاً؟</strong></p>

<p>ثمة ضمان نظري رائع بأن الشبكة تستطيع من حيث المبدأ تكييف نفسها مع أي شيء. يُسمى هذا نظرية التقريب العالمي، وهو الأساس الرياضي الذي يرتكز عليه كل التعلم العميق.</p>

<h2>ما تقوله النظرية</h2>

<p>تنص نظرية التقريب العالمي على:</p>

<p><em>يستطيع الشبكة العصبية ذات الطبقة الخفية الواحدة وعدد كافٍ من الخلايا تقريب أي دالة مستمرة بأي مستوى من الدقة المطلوب.</em></p>

<p>ليس فقط الدوال البسيطة. ليس فقط الدوال متعددة الحدود الناعمة. <strong>أي دالة مستمرة</strong>، على أي مجال، وبأي دقة تحددها. هذا يعني أن قيود الشبكة العصبية لا تكمن أبداً في قدرتها التعبيرية الجوهرية.</p>

<h2>فهم معنى "تقريب"</h2>

<p>النظرية لا تقول إن الشبكة تستطيع حساب أي دالة <em>بدقة تامة</em>. تقول إنه لأي دالة هدف f وأي حد خطأ ε > 0، توجد شبكة تبقى ضمن ε من f في كل نقطة.</p>

<p>آلية عمل هذا التقريب أنيقة. تخيل تقريب منحنى سلس بمجموعة من النبضات المستطيلة الضيقة. كل نبضة تغطي فترة صغيرة من المدخل وارتفاعها يساوي قيمة الدالة عند تلك النقطة. كلما ضاقت النبضات، كلما تتبعت المنحنى بدقة أكبر. المزيد من الخلايا = نبضات أضيق = تقريب أدق.</p>

<h2>ثلاثة أنواع من الشمولية</h2>

<p>الشبكات متعددة الطبقات شاملة بثلاثة معانٍ متمايزة:</p>

<ul>
  <li><strong>دالة بوليانية شاملة:</strong> يمكن حساب أي دائرة منطقية بواسطة MLP.</li>
  <li><strong>مصنّف شامل:</strong> يمكن التقاط أي حد فاصل في الفضاء المستمر بواسطة MLP.</li>
  <li><strong>مقرّب دالة شامل:</strong> يمكن تقريب أي دالة حقيقية مستمرة بدقة اعتباطية بواسطة MLP ذي طبقة خفية واحدة.</li>
</ul>

<p>تنطبق النتائج الثلاثة مع <strong>طبقة خفية واحدة فقط</strong>. هذا هو الجزء المفاجئ — العمق يخدم غرضاً مختلفاً تماماً.</p>

<h2>المأزق: العرض الأسي</h2>

<p>النظرية تضمن الوجود، لا الكفاءة. لحساب تكافؤ (XOR) لـ N مدخل ثنائي، تحتاج شبكة ذات طبقة خفية واحدة إلى <strong>2^(N−1) خلية عصبية</strong>.</p>

<ul>
  <li>N = 10 مدخلات → 512 خلية</li>
  <li>N = 20 مدخلاً → 524,288 خلية</li>
  <li>N = 30 مدخلاً → أكثر من 500 مليون خلية</li>
</ul>

<p>النمو أسي. للمسائل الواقعية عالية الأبعاد، الشبكة الضحلة غير عملية تماماً.</p>

<h2>لماذا العمق هو الإجابة الحقيقية</h2>

<p>تستطيع الشبكة العميقة حساب الدالة ذاتها بـ <strong>3(N−1) خلية فقط</strong>.</p>

<ul>
  <li>N = 10 → 27 خلية (مقابل 512)</li>
  <li>N = 20 → 57 خلية (مقابل 524,288)</li>
</ul>

<p>هذا نمو خطي بدلاً من الأسي. العمق يُتيح <strong>إعادة استخدام الحسابات الوسيطة</strong>. الشبكة الضحلة يجب أن تعيد حساب كل شيء من الصفر لكل خلية خرج. أما الشبكة العميقة فتحسب شيئاً مرة واحدة في الطبقة k وتمرره إلى الطبقة k+1 التي تبني عليه.</p>

<p><strong>العمق ليس مجرد تفضيل تصميمي. لكثير من الدوال، إنه ضرورة رياضية.</strong></p>

<h2>دور دوال التنشيط</h2>

<p>تنشيط العتبة الصارمة يحجب المعلومات. بمجرد أن تنتج خلية عصبية 0 أو 1، تضيع كل دقة قيمة المدخل الأصلية. التنشيط الناعم كالسيغمويد أو tanh يحافظ على تلك الدقة — التدرج يحمل معلومات تستطيع الطبقة التالية استخدامها. أما ReLU، الذي يُنتج max(0, z)، فهو الأكثر "تدرجاً" بين التنشيطات القياسية، ولهذا حلّ محل السيغمويد كخيار افتراضي في الشبكات الحديثة.</p>

<h2>ما لا تمنحك إياه النظرية</h2>

<p>تضمن النظرية أن الأوزان الصحيحة <em>موجودة</em> في مكان ما. لا تضمن:</p>

<ul>
  <li>أن الانحدار التدرجي سيجدها</li>
  <li>أن لديك بيانات تدريب كافية</li>
  <li>أن الشبكة ستعمم على المدخلات غير المرئية</li>
  <li>أن التدريب سيتقارب في وقت معقول</li>
</ul>

<p><strong>التمثيل محلول. التعلم هو التحدي.</strong></p>

<h2>ما التالي</h2>

<p>نعرف أن الشبكة <em>تستطيع</em> تمثيل أي دالة. لا نعرف بعد كيف نجعلها تمثل دالة <em>محددة</em>. هذا يتطلب خوارزمية تعلم، وهذه الخوارزمية تتطلب في جوهرها فهم مفهوم رياضي واحد: المشتقة. في المقال القادم، نبني هذه الحدسية من الصفر.</p>`
    }
  }
},
{
  id: "what-is-a-neural-network",
  title: "What Even Is a Neural Network? A Beginner's Honest Explanation",
  category: "Deep Learning",
  date: "2026-05-12",
  readTime: "8 min read",
  excerpt: "Your brain has 86 billion neurons. A neural network has a few thousand fake ones. Yet it can recognize your face, translate speech, and beat world champions at chess. Here is how — from scratch, no background assumed.",
  content: `
<p>Your brain is doing something extraordinary right now. It is parsing these symbols, retrieving their meanings, constructing sentences, and building understanding — all in a fraction of a second, without any conscious effort. The machinery behind that is roughly 86 billion neurons, each one a tiny biological switch, connected in a network of almost incomprehensible complexity.</p>

<p>A neural network does something far simpler. It takes a handful of artificial neurons — sometimes thousands, sometimes billions — connects them in layers, and adjusts the strength of those connections until the network gets good at a specific task. No biology. No consciousness. Just math.</p>

<p>And yet, with enough of these artificial neurons and the right training, neural networks can recognize your face in a photo, transcribe your speech in real time, beat world champions at chess, and generate text that reads like a human wrote it.</p>

<p>How? That is exactly what this article is about.</p>

<h2>Starting Where It All Started: The Biological Neuron</h2>

<p>The design of artificial neural networks was directly inspired by the brain. So it helps to start there.</p>

<p>A biological neuron has three main parts. Dendrites receive electrical signals from neighboring neurons. The cell body collects and sums those signals. And if the total crosses a certain threshold, the neuron fires — sending a signal down its axon to the next set of neurons.</p>

<p>The key insight is that this is fundamentally simple: <strong>accumulate inputs, compare to a threshold, fire or do not fire</strong>. That is the entire operation of a single neuron. The artificial version copies this logic almost exactly.</p>

<h2>The Perceptron: One Artificial Neuron</h2>

<p>An artificial neuron — called a <strong>perceptron</strong> — works as follows:</p>

<ul>
  <li>Take a set of inputs: x₁, x₂, x₃, ... xₙ</li>
  <li>Multiply each input by a corresponding weight: w₁, w₂, w₃, ... wₙ</li>
  <li>Sum everything up plus a bias term b: z = w₁x₁ + w₂x₂ + ... + wₙxₙ + b</li>
  <li>Apply an activation function to z to produce the output ŷ</li>
</ul>

<p>The weighted sum z captures how much each input "matters." The activation function then decides what to do with that sum — whether to fire, and how strongly.</p>

<p>The bias b plays the role of a threshold: it shifts the weighted sum up or down, effectively setting how easy or hard it is for the neuron to activate. Without a bias, every perceptron would be forced to pass through the origin, which severely limits what it can learn.</p>

<h2>What the Weights Actually Mean</h2>

<p>The weights are where all the learned knowledge lives. A large positive weight on input xᵢ means: "pay close attention to this input — when it is high, I am more likely to activate." A weight near zero means: "this input barely matters." A negative weight means: "this input actively suppresses my activation."</p>

<p>Training a neural network is, at its core, the process of finding the right values for all the weights and biases. Everything else — the architecture, the optimization algorithm, the loss function — is infrastructure that serves this one goal.</p>

<h2>The Soft Perceptron: Why We Use Sigmoid Instead of a Step Function</h2>

<p>Early perceptrons used a hard threshold: output 1 if the weighted sum exceeds zero, output 0 otherwise. This is mathematically clean but has a fatal flaw: it is not differentiable. At the threshold, the function jumps discontinuously. Everywhere else, its slope is exactly zero.</p>

<p>Why does this matter? Because the way neural networks learn — gradient descent — requires us to compute how much the output changes when we nudge a weight slightly. If the activation function has zero slope almost everywhere, that information is destroyed. The network cannot learn.</p>

<p>The solution is to replace the hard step with a smooth curve. The most classical choice is the <strong>sigmoid function</strong>:</p>

<p>σ(z) = 1 / (1 + e⁻ᶻ)</p>

<p>The sigmoid squashes any value of z into the range (0, 1), approaching 0 for very negative inputs and 1 for very positive ones. Crucially, it does this smoothly — it has a well-defined slope at every point. That slope is what makes learning possible.</p>

<h2>The Limits of a Single Neuron</h2>

<p>A single perceptron can only solve <strong>linearly separable</strong> problems. Geometrically, it draws a single straight line through the input space, putting one class on each side.</p>

<p>This sounds useful, and it is — for simple problems. But the world is full of non-linearly separable problems. The canonical example is XOR: given two binary inputs, output 1 if exactly one of them is 1, output 0 otherwise. Draw this on a 2D grid and you will immediately see that no single straight line can separate the 1s from the 0s.</p>

<p>A single neuron cannot solve XOR. This is not a limitation of any particular design choice — it is a mathematical impossibility for any linear classifier. This limitation was identified early in the history of neural networks and nearly killed the field. The solution turned out to be straightforward: use more than one neuron, and stack them into layers.</p>

<h2>The Multi-Layer Perceptron: Where the Magic Happens</h2>

<p>A <strong>multi-layer perceptron (MLP)</strong> connects perceptrons in layers, where the outputs of one layer feed as inputs into the next. Each layer transforms the data into a new representation, and the final layer produces the network's output.</p>

<p>The key insight is what happens to the input space as data flows through layers. Each layer applies a linear transformation followed by a nonlinear activation. The combination of these operations warps, stretches, and rotates the input space. By the time the data reaches the output layer, what was once a tangled, non-separable mess has been transformed into something that <em>can</em> be separated by a simple line.</p>

<p>This is why neural networks are powerful: <strong>they learn to transform the problem, not just to solve it in the original space.</strong></p>

<h2>What "Deep" Actually Means</h2>

<p>"Deep" in deep learning refers simply to the number of layers. A network with at least three layers (input, one or more hidden layers, output) is considered deep. More layers means the network can learn more abstract representations.</p>

<p>Consider an image classifier. The first hidden layer might learn to detect simple edges and color gradients. The second layer combines those into shapes and textures. The third combines shapes into object parts. The fourth combines parts into recognizable objects. Each layer builds on the abstractions of the previous one — this hierarchical representation is what makes deep networks dramatically more powerful than shallow ones for complex real-world problems.</p>

<h2>Parameters: What Gets Learned</h2>

<p>Every edge between two neurons corresponds to a weight. Every neuron has a bias. Together, these are called the <strong>parameters</strong> of the network — and they are the only things that change during training.</p>

<p>A small network might have tens of thousands of parameters. ResNet-50, a widely used image model, has 25 million. GPT-3 has 175 billion. Every single one of those numbers was learned from data — not manually set by any human. This is the definition of machine learning: the architecture defines the <em>structure</em> of the function; the parameters define the <em>specific function</em> that structure computes.</p>

<h2>Putting It Together</h2>

<p>A neural network is a layered composition of simple units. Each unit computes a weighted sum of its inputs, adds a bias, and passes the result through a smooth nonlinear function. Stacked into layers, these units can represent extraordinarily complex mappings — from raw pixels to object labels, from waveforms to transcriptions, from board positions to winning moves.</p>

<p>The complexity does not come from any single clever neuron. It emerges from depth, from nonlinearity, and from parameters adjusted through training on examples. Understanding what a network <em>is</em> — this layer of perceptrons connected to that layer, computing these weighted sums — is the foundation for understanding everything that follows.</p>

<h2>What's Next</h2>

<p>We know what a neural network is. We know its structure. But we have not asked the most important question yet: <strong>what kinds of functions can a neural network actually represent?</strong></p>

<p>Is there a limit? Can a network learn <em>any</em> function, or only certain kinds? That question has a remarkable answer — and a theorem to back it up. In the next article, we cover the Universal Approximation Theorem: the mathematical result that justifies all of deep learning.</p>`,

  translations: {
    fr: {
      title: "C'est quoi un réseau de neurones ? Une explication honnête pour débutants",
      category: "Apprentissage Profond",
      readTime: "8 min de lecture",
      excerpt: "Votre cerveau possède 86 milliards de neurones. Un réseau de neurones en possède quelques milliers, artificiels. Pourtant il peut reconnaître votre visage, traduire des discours et battre des champions du monde aux échecs. Voici comment — sans aucun prérequis.",
      content: `
<p>Votre cerveau accomplit quelque chose d'extraordinaire en ce moment. Il décode ces symboles, en récupère les significations, construit des phrases et développe une compréhension — le tout en une fraction de seconde, sans aucun effort conscient. Le mécanisme derrière tout cela, ce sont environ 86 milliards de neurones, chacun étant un minuscule interrupteur biologique, connectés dans un réseau d'une complexité presque incompréhensible.</p>

<p>Un réseau de neurones artificiel fait quelque chose de bien plus simple. Il prend une poignée de neurones artificiels — parfois des milliers, parfois des milliards — les connecte en couches, et ajuste la force de ces connexions jusqu'à ce que le réseau devienne performant sur une tâche spécifique. Pas de biologie. Pas de conscience. Juste des mathématiques.</p>

<p>Et pourtant, avec suffisamment de ces neurones artificiels et un entraînement approprié, les réseaux de neurones peuvent reconnaître votre visage sur une photo, transcrire votre discours en temps réel, battre des champions du monde aux échecs, et générer du texte qui semble écrit par un humain.</p>

<p>Comment ? C'est précisément ce que cet article explique.</p>

<h2>Commencer là où tout a commencé : le neurone biologique</h2>

<p>La conception des réseaux de neurones artificiels s'est directement inspirée du cerveau. Il est donc utile de commencer par là.</p>

<p>Un neurone biologique possède trois parties principales. Les dendrites reçoivent des signaux électriques des neurones voisins. Le corps cellulaire collecte et additionne ces signaux. Et si le total dépasse un certain seuil, le neurone se déclenche — envoyant un signal le long de son axone vers le prochain ensemble de neurones.</p>

<p>L'idée clé est que c'est fondamentalement simple : <strong>accumuler les entrées, comparer à un seuil, se déclencher ou non</strong>. C'est l'intégralité du fonctionnement d'un seul neurone. La version artificielle copie cette logique presque exactement.</p>

<h2>Le Perceptron : un neurone artificiel</h2>

<p>Un neurone artificiel — appelé <strong>perceptron</strong> — fonctionne comme suit :</p>

<ul>
  <li>Prendre un ensemble d'entrées : x₁, x₂, x₃, ... xₙ</li>
  <li>Multiplier chaque entrée par un poids correspondant : w₁, w₂, w₃, ... wₙ</li>
  <li>Tout additionner avec un terme de biais b : z = w₁x₁ + w₂x₂ + ... + wₙxₙ + b</li>
  <li>Appliquer une fonction d'activation à z pour produire la sortie ŷ</li>
</ul>

<p>La somme pondérée z capture l'importance de chaque entrée. La fonction d'activation décide ensuite quoi faire de cette somme — s'il faut se déclencher, et avec quelle intensité.</p>

<p>Le biais b joue le rôle d'un seuil : il déplace la somme pondérée vers le haut ou vers le bas, déterminant ainsi la facilité ou la difficulté d'activation du neurone. Sans biais, chaque perceptron serait contraint de passer par l'origine, ce qui limiterait considérablement ce qu'il peut apprendre.</p>

<h2>Ce que signifient vraiment les poids</h2>

<p>Les poids contiennent toute la connaissance apprise. Un poids positif élevé sur l'entrée xᵢ signifie : « prêter une attention particulière à cette entrée — quand elle est élevée, je suis plus susceptible de m'activer. » Un poids proche de zéro signifie : « cette entrée a peu d'importance. » Un poids négatif signifie : « cette entrée supprime activement mon activation. »</p>

<p>Entraîner un réseau de neurones, c'est fondamentalement trouver les bonnes valeurs pour tous les poids et biais. Tout le reste — l'architecture, l'algorithme d'optimisation, la fonction de perte — est une infrastructure au service de cet unique objectif.</p>

<h2>Le perceptron souple : pourquoi on utilise la sigmoïde</h2>

<p>Les premiers perceptrons utilisaient un seuil dur : sortie 1 si la somme pondérée dépasse zéro, sortie 0 sinon. C'est mathématiquement propre mais possède un défaut fatal : ce n'est pas différentiable. Au seuil, la fonction saute discontinûment. Partout ailleurs, sa pente est exactement zéro.</p>

<p>Pourquoi est-ce important ? Parce que la façon dont les réseaux de neurones apprennent — la descente de gradient — nécessite de calculer combien la sortie change quand on ajuste légèrement un poids. Si la fonction d'activation a une pente nulle presque partout, cette information est détruite. Le réseau ne peut pas apprendre.</p>

<p>La solution est de remplacer le saut brutal par une courbe lisse. Le choix le plus classique est la <strong>fonction sigmoïde</strong> :</p>

<p>σ(z) = 1 / (1 + e⁻ᶻ)</p>

<p>La sigmoïde compresse toute valeur de z dans l'intervalle (0, 1), tendant vers 0 pour les entrées très négatives et vers 1 pour les entrées très positives. Surtout, elle le fait de manière lisse — elle possède une pente bien définie en tout point. C'est cette pente qui rend l'apprentissage possible.</p>

<h2>Les limites d'un seul neurone</h2>

<p>Un seul perceptron ne peut résoudre que des problèmes <strong>linéairement séparables</strong>. Géométriquement, il trace une seule ligne droite dans l'espace des entrées, plaçant une classe de chaque côté.</p>

<p>Cela semble utile, et c'est vrai — pour les problèmes simples. Mais le monde est plein de problèmes non linéairement séparables. L'exemple canonique est XOR : étant donné deux entrées binaires, produire 1 si exactement l'une d'elles est 1, et 0 sinon. Aucune ligne droite ne peut séparer les 1 des 0 — c'est une impossibilité mathématique pour tout classificateur linéaire. La solution : empiler des neurones en couches.</p>

<h2>Le Perceptron Multi-Couches : là où la magie opère</h2>

<p>Un <strong>perceptron multi-couches (MLP)</strong> connecte des perceptrons en couches, où les sorties d'une couche servent d'entrées à la suivante. Chaque couche transforme les données en une nouvelle représentation, et la couche finale produit la sortie du réseau.</p>

<p>L'idée clé est ce qui arrive à l'espace des entrées au fil des couches. Chaque couche applique une transformation linéaire suivie d'une activation non linéaire. La combinaison de ces opérations déforme, étire et fait pivoter l'espace des entrées. Au moment où les données atteignent la couche de sortie, ce qui était autrefois un enchevêtrement inséparable a été transformé en quelque chose qui <em>peut</em> être séparé.</p>

<p>C'est pourquoi les réseaux de neurones sont puissants : <strong>ils apprennent à transformer le problème, pas seulement à le résoudre dans l'espace original.</strong></p>

<h2>Ce que signifie vraiment "profond"</h2>

<p>"Profond" dans l'apprentissage profond désigne simplement le nombre de couches. Un réseau avec au moins trois couches est considéré profond. Plus il y a de couches, plus le réseau peut apprendre des représentations abstraites — des bords simples aux textures, aux parties d'objets, jusqu'aux objets reconnaissables. Chaque couche s'appuie sur les abstractions de la précédente.</p>

<h2>Les paramètres : ce qui est appris</h2>

<p>Chaque connexion entre deux neurones correspond à un poids. Chaque neurone possède un biais. Ensemble, ils forment les <strong>paramètres</strong> du réseau — les seules choses qui changent pendant l'entraînement.</p>

<p>Un petit réseau peut avoir des dizaines de milliers de paramètres. ResNet-50 en a 25 millions. GPT-3 en a 175 milliards. Chacun de ces nombres a été appris à partir de données — aucun n'a été défini manuellement par un humain.</p>

<h2>Ce qui vient ensuite</h2>

<p>Nous savons ce qu'est un réseau de neurones. Mais nous n'avons pas encore posé la question la plus importante : <strong>quels types de fonctions un réseau de neurones peut-il réellement représenter ?</strong> Cette question a une réponse remarquable — et un théorème pour l'étayer. Dans le prochain article, nous abordons le Théorème d'Approximation Universelle.</p>`
    },

    ar: {
      title: "ما هي الشبكة العصبية؟ شرح صادق للمبتدئين",
      category: "التعلم العميق",
      readTime: "8 دقائق للقراءة",
      excerpt: "يمتلك دماغك 86 مليار خلية عصبية. الشبكة العصبية الاصطناعية تمتلك بضعة آلاف منها. ومع ذلك، تستطيع التعرف على وجهك، وترجمة الكلام، وهزيمة أبطال العالم في الشطرنج. إليك كيف — دون أي خلفية مسبقة.",
      content: `
<p>يؤدي دماغك الآن شيئاً استثنائياً. إنه يفسّر هذه الرموز، ويسترجع معانيها، ويبني جملاً، ويطوّر فهماً — كل ذلك في جزء من الثانية، دون أي جهد واعٍ. الآلية وراء ذلك هي نحو 86 مليار خلية عصبية، كلٌّ منها مفتاح بيولوجي صغير، متصلة في شبكة بالغة التعقيد.</p>

<p>أما الشبكة العصبية الاصطناعية فتفعل شيئاً أبسط بكثير. تأخذ حفنة من الخلايا العصبية الاصطناعية — أحياناً آلافاً، وأحياناً مليارات — تربطها في طبقات، وتضبط قوة تلك الروابط حتى تتقن الشبكة مهمة محددة. لا أحياء، لا وعي، فقط رياضيات.</p>

<p>ومع ذلك، بعدد كافٍ من هذه الخلايا والتدريب المناسب، تستطيع الشبكات العصبية التعرف على وجهك في صورة، ونقل كلامك نصياً في الوقت الفعلي، وهزيمة أبطال العالم في الشطرنج، وتوليد نصوص تبدو وكأنها كُتبت بقلم إنسان.</p>

<p>كيف؟ هذا بالضبط ما يشرحه هذا المقال.</p>

<h2>البداية من حيث بدأ كل شيء: الخلية العصبية البيولوجية</h2>

<p>استُلهم تصميم الشبكات العصبية الاصطناعية مباشرةً من الدماغ. لذا من المفيد أن نبدأ من هنا.</p>

<p>تتكون الخلية العصبية البيولوجية من ثلاثة أجزاء رئيسية. تستقبل التغصنات الإشارات الكهربائية من الخلايا العصبية المجاورة. يجمع جسم الخلية هذه الإشارات ويجمعها. وإذا تجاوز المجموع عتبة معينة، أطلقت الخلية إشارة عبر محورها إلى مجموعة الخلايا التالية.</p>

<p>الفكرة الجوهرية هي أن هذا أمر بسيط في جوهره: <strong>تجميع المدخلات، ومقارنتها بعتبة، والإطلاق أو عدمه</strong>. هذه هي العملية الكاملة لخلية عصبية واحدة. النسخة الاصطناعية تنسخ هذا المنطق بشكل شبه حرفي.</p>

<h2>الخلية الإدراكية: خلية عصبية اصطناعية واحدة</h2>

<p>تعمل الخلية العصبية الاصطناعية — المسماة <strong>perceptron</strong> — على النحو التالي:</p>

<ul>
  <li>أخذ مجموعة من المدخلات: x₁, x₂, x₃, ... xₙ</li>
  <li>ضرب كل مدخل في وزن مقابل: w₁, w₂, w₃, ... wₙ</li>
  <li>جمع كل شيء مع حد الانحياز b: z = w₁x₁ + w₂x₂ + ... + wₙxₙ + b</li>
  <li>تطبيق دالة التنشيط على z لإنتاج الخرج ŷ</li>
</ul>

<p>يلتقط المجموع الموزون z مدى أهمية كل مدخل. ثم تقرر دالة التنشيط ماذا تفعل بهذا المجموع — هل تطلق الخلية أم لا، وبأي قوة.</p>

<p>يؤدي حد الانحياز b دور العتبة: يزيح المجموع الموزون للأعلى أو للأسفل، مما يحدد مدى سهولة أو صعوبة تنشيط الخلية العصبية. بدون انحياز، سيُجبر كل perceptron على المرور عبر نقطة الأصل، مما يقيد بشدة ما يمكنه تعلمه.</p>

<h2>ما تعنيه الأوزان فعلاً</h2>

<p>الأوزان هي المكان الذي تقطن فيه كل المعرفة المكتسبة. وزن موجب كبير على المدخل xᵢ يعني: «انتبه جيداً لهذا المدخل — عندما يكون مرتفعاً، أنا أكثر ميلاً للتنشيط.» وزن قريب من الصفر يعني: «هذا المدخل بالكاد مهم.» وزن سالب يعني: «هذا المدخل يكبح تنشيطي بنشاط.»</p>

<p>تدريب الشبكة العصبية هو في جوهره عملية إيجاد القيم الصحيحة لجميع الأوزان والانحيازات. كل شيء آخر — البنية، وخوارزمية التحسين، ودالة الخسارة — هو بنية تحتية تخدم هذا الهدف الوحيد.</p>

<h2>لماذا نستخدم السيغمويد بدلاً من دالة الخطوة</h2>

<p>استخدمت الخلايا الإدراكية المبكرة عتبة صارمة: الخرج 1 إذا تجاوز المجموع الموزون الصفر، والخرج 0 إذا لم يتجاوزه. هذا نظيف رياضياً لكنه يحمل عيباً قاتلاً: إنه غير قابل للاشتقاق. عند العتبة، تقفز الدالة بشكل متقطع. في كل مكان آخر، ميلها صفر تماماً.</p>

<p>لماذا يهم هذا؟ لأن طريقة تعلم الشبكات العصبية — الانحدار التدرجي — تتطلب حساب مقدار تغير الخرج عند تعديل وزن ما بشكل طفيف. إذا كان ميل دالة التنشيط صفراً في كل مكان تقريباً، تُفقد هذه المعلومات. لا تستطيع الشبكة التعلم.</p>

<p>الحل هو استبدال القفزة الحادة بمنحنى سلس. الخيار الكلاسيكي الأبرز هو <strong>دالة السيغمويد</strong>:</p>

<p>σ(z) = 1 / (1 + e⁻ᶻ)</p>

<p>تضغط السيغمويد أي قيمة لـ z في النطاق (0, 1)، مقتربةً من 0 للمدخلات السالبة جداً ومن 1 للمدخلات الموجبة جداً. الأهم من ذلك، أنها تفعل ذلك بسلاسة — لها ميل محدد في كل نقطة. هذا الميل هو ما يجعل التعلم ممكناً.</p>

<h2>حدود خلية عصبية واحدة</h2>

<p>يستطيع perceptron واحد فقط حل المسائل <strong>القابلة للفصل الخطي</strong>. هندسياً، يرسم خطاً مستقيماً واحداً عبر فضاء المدخلات، واضعاً فئة على كل جانب.</p>

<p>يبدو هذا مفيداً، وهو كذلك — للمسائل البسيطة. لكن العالم مليء بمسائل غير قابلة للفصل الخطي. المثال الكلاسيكي هو XOR: لا يستطيع أي خط مستقيم فصل الـ 1 عن الـ 0 — إنه استحالة رياضية لأي مصنف خطي. الحل: تكديس خلايا عصبية في طبقات.</p>

<h2>الشبكة متعددة الطبقات: حيث تحدث المعجزة</h2>

<p>تربط <strong>شبكة الخلايا الإدراكية متعددة الطبقات (MLP)</strong> الخلايا الإدراكية في طبقات، حيث تُغذّي مخرجات طبقة ما مدخلات الطبقة التالية. تحوّل كل طبقة البيانات إلى تمثيل جديد، وتُنتج الطبقة الأخيرة مخرجات الشبكة.</p>

<p>تعمل كل طبقة على تشويه فضاء المدخلات وتمطيطه وتدويره. بحلول وصول البيانات إلى طبقة الخرج، يكون ما كان تشابكاً غير قابل للفصل قد تحوّل إلى شيء <em>يمكن</em> فصله بخط بسيط.</p>

<p>هذا هو سبب قوة الشبكات العصبية: <strong>إنها تتعلم تحويل المسألة، لا مجرد حلها في الفضاء الأصلي.</strong></p>

<h2>ما تعنيه "العمق" فعلاً</h2>

<p>"العميق" في التعلم العميق يشير ببساطة إلى عدد الطبقات. الشبكة ذات الطبقات الأكثر تستطيع تعلم تمثيلات أكثر تجريداً — من الحواف البسيطة إلى الأنماط إلى أجزاء الأشياء وصولاً إلى الأشياء القابلة للتمييز. كل طبقة تبني على تجريدات الطبقة السابقة.</p>

<h2>المعاملات: ما يُتعلم</h2>

<p>كل اتصال بين خليتين عصبيتين يقابله وزن. كل خلية عصبية لها انحياز. معاً، تُسمى هذه <strong>معاملات</strong> الشبكة — وهي الأشياء الوحيدة التي تتغير أثناء التدريب.</p>

<p>قد تحتوي شبكة صغيرة على عشرات الآلاف من المعاملات. تحتوي ResNet-50 على 25 مليوناً. أما GPT-3 فيحتوي على 175 مليار. كل رقم من هذه الأرقام تعلمته الشبكة من البيانات — لم يضعه إنسان يدوياً.</p>

<h2>ما التالي</h2>

<p>نعرف الآن ما هي الشبكة العصبية. لكننا لم نطرح بعد السؤال الأهم: <strong>ما أنواع الدوال التي تستطيع الشبكة العصبية تمثيلها فعلاً؟</strong> لهذا السؤال إجابة مذهلة — ونظرية تدعمها. في المقال القادم، نتناول نظرية التقريب العالمي.</p>`
    }
  }
}
];

/* ---------- Helpers ---------- */

function getBlogPostById(id) {
  const post = BLOG_POSTS.find(p => p.id === id) || null;
  return post ? (window.I18n ? window.I18n.localize(post) : post) : null;
}

function getBlogPostsLocalized() {
  if (!window.I18n) return BLOG_POSTS;
  return BLOG_POSTS.map(p => window.I18n.localize(p));
}

function formatDate(dateStr) {
  const locale = (window.I18n && window.I18n.locale) || 'en-US';
  const d = new Date(dateStr + 'T00:00:00');
  function fmt(opts) {
    try { return d.toLocaleString(locale, opts); }
    catch (_) { return d.toLocaleString('en-US', opts); }
  }
  return {
    month: fmt({ month: 'short' }).toUpperCase(),
    day:   d.getDate(),
    year:  d.getFullYear(),
    full:  fmt({ month: 'long', day: 'numeric', year: 'numeric' })
  };
}
