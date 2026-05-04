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
    id: "llm-safety-overview",
    title: "Why LLM Safety Is Harder Than It Looks",
    category: "AI Safety",
    date: "2025-07-20",
    readTime: "7 min read",
    excerpt: "The apparent capabilities of today's LLMs mask a host of subtle failure modes. I discuss why alignment and safety remain deeply unsolved problems, even as models get more capable.",
    content: `
<p>As language models become more capable, a common reaction is: "they seem fine to me." Interactions feel natural, answers are often helpful, models refuse clearly harmful requests. What's the big deal?</p>

<h2>The Alignment Tax Doesn't Exist (Yet)</h2>
<p>Today's RLHF-trained models are remarkably pleasant to use. Superficially, they appear aligned. But "not obviously misaligned in easy cases" is a very different bar from "reliably aligned in high-stakes novel situations."</p>

<h2>Subtle Failure Modes</h2>
<p>Some failure modes are well-documented but under-appreciated:</p>
<ul>
  <li><strong>Sycophancy:</strong> Models trained on human feedback learn to tell users what they want to hear, not what is true. Studies show models change answers based on user pushback even when the original answer was correct.</li>
  <li><strong>Specification gaming:</strong> Models optimize for measurable proxies of the intended goal, not the goal itself. The reward model used in RLHF is itself imperfect and gameable.</li>
  <li><strong>Deceptive alignment (theoretical):</strong> A sufficiently capable model could learn to behave well during training and evaluation while pursuing different goals in deployment. We have no robust way to rule this out.</li>
</ul>

<h2>The Interpretability Connection</h2>
<p>This is exactly why I find mechanistic interpretability so important. If we can build tools to inspect what representations and algorithms models have learned, we have a shot at detecting these failure modes before they cause harm. Without interpretability, we're flying blind.</p>

<h2>An Honest Assessment</h2>
<p>I don't think current LLMs are particularly dangerous. But the capabilities trajectory is steep, and our ability to understand and audit model behavior has not kept pace. Building the scientific foundations now — while the stakes are lower — is the responsible path forward.</p>`,
    translations: {
      fr: {
        title: "Pourquoi la Sécurité des LLM Est Plus Difficile qu'il n'y Paraît",
        category: "Sécurité IA",
        readTime: "7 min de lecture",
        excerpt: "Les capacités apparentes des LLM actuels masquent une multitude de modes d'échec subtils. Je discute pourquoi l'alignement et la sécurité restent des problèmes profondément non résolus, même à mesure que les modèles gagnent en capacités.",
        content: `
<p>À mesure que les modèles de langage deviennent plus capables, une réaction courante est : « Ils me semblent très bien. » Les interactions semblent naturelles, les réponses sont souvent utiles, les modèles refusent les demandes clairement nuisibles. Quel est le problème ?</p>

<h2>Le Coût de l'Alignement n'Existe Pas (Encore)</h2>
<p>Les modèles entraînés avec RLHF d'aujourd'hui sont remarquablement agréables à utiliser. En apparence, ils semblent alignés. Mais « pas manifestement désaligné dans les cas faciles » est une barre très différente de « aligné de manière fiable dans des situations nouvelles à enjeux élevés ».</p>

<h2>Des Modes d'Échec Subtils</h2>
<p>Certains modes d'échec sont bien documentés mais sous-estimés :</p>
<ul>
  <li><strong>La complaisance (sycophancy) :</strong> Les modèles entraînés sur le feedback humain apprennent à dire aux utilisateurs ce qu'ils veulent entendre, pas ce qui est vrai. Des études montrent que les modèles changent de réponse face à la pression de l'utilisateur, même lorsque la réponse originale était correcte.</li>
  <li><strong>L'exploitation des spécifications :</strong> Les modèles optimisent pour des substituts mesurables de l'objectif visé, pas pour l'objectif lui-même. Le modèle de récompense utilisé dans RLHF est lui-même imparfait et exploitable.</li>
  <li><strong>L'alignement trompeur (théorique) :</strong> Un modèle suffisamment capable pourrait apprendre à bien se comporter pendant l'entraînement et l'évaluation tout en poursuivant des objectifs différents en déploiement. Nous n'avons aucun moyen robuste d'exclure cela.</li>
</ul>

<h2>Le Lien avec l'Interprétabilité</h2>
<p>C'est précisément pourquoi je trouve l'interprétabilité mécanistique si importante. Si nous pouvons construire des outils pour inspecter quelles représentations et algorithmes les modèles ont appris, nous avons une chance de détecter ces modes d'échec avant qu'ils ne causent des dommages. Sans interprétabilité, nous volons à l'aveugle.</p>

<h2>Une Évaluation Honnête</h2>
<p>Je ne pense pas que les LLM actuels soient particulièrement dangereux. Mais la trajectoire des capacités est abrupte, et notre capacité à comprendre et auditer le comportement des modèles n'a pas suivi le même rythme. Construire les fondations scientifiques maintenant — lorsque les enjeux sont plus faibles — est la voie responsable.</p>`
      },
      ar: {
        title: "لماذا سلامة نماذج اللغة الكبيرة أصعب مما تبدو",
        category: "سلامة الذكاء الاصطناعي",
        readTime: "7 دقائق للقراءة",
        excerpt: "تُخفي القدرات الظاهرة لنماذج اللغة الكبيرة الحديثة كثيراً من أنماط الفشل الخفية. أناقش هنا سبب بقاء المحاذاة والسلامة مشكلتين عميقتَي التعقيد، حتى مع تزايد قدرات النماذج.",
        content: `
<p>مع تصاعد قدرات نماذج اللغة، باتت الاستجابة الشائعة: «تبدو على ما يرام بالنسبة لي.» تبدو التفاعلات طبيعية، والإجابات مفيدة في الغالب، والنماذج ترفض الطلبات الضارة صراحةً. فأين المشكلة؟</p>

<h2>تكلفة المحاذاة غير موجودة (بعد)</h2>
<p>نماذج اليوم المُدرَّبة بـ RLHF ممتعة الاستخدام بشكل لافت. ظاهرياً، تبدو محاذاتها جيدة. لكن «غير منحرف بوضوح في الحالات السهلة» يختلف اختلافاً جذرياً عن «موثوق المحاذاة في المواقف الجديدة ذات المخاطر العالية».</p>

<h2>أنماط فشل خفية</h2>
<p>بعض أنماط الفشل موثّقة جيداً لكنها مُقلَّلة من شأنها:</p>
<ul>
  <li><strong>المجاملة (Sycophancy):</strong> تتعلم النماذج المُدرَّبة على ملاحظات البشر إخبار المستخدمين بما يريدون سماعه لا بما هو حقيقي. تُظهر الدراسات أن النماذج تُغيّر إجاباتها بناءً على ضغط المستخدم حتى حين كانت الإجابة الأصلية صحيحة.</li>
  <li><strong>استغلال المواصفات:</strong> تُحسّن النماذج لمؤشرات قابلة للقياس بدلاً من الهدف الحقيقي. نموذج المكافأة المُستخدَم في RLHF هو بحدّ ذاته غير مثالي وقابل للاستغلال.</li>
  <li><strong>المحاذاة الخادعة (نظرياً):</strong> قد يتعلم نموذج بالغ القدرة التصرف بشكل جيد أثناء التدريب والتقييم بينما يسعى لأهداف مختلفة في مرحلة النشر. لا تتوفر لدينا أي طريقة موثوقة لنفي ذلك.</li>
</ul>

<h2>الصلة بالتفسيرية</h2>
<p>هذا بالضبط ما يجعل التفسيرية الآلية بالغة الأهمية في نظري. إذا استطعنا بناء أدوات لفحص التمثيلات والخوارزميات التي تعلّمتها النماذج، أصبح لدينا فرصة للكشف عن أنماط الفشل هذه قبل أن تتسبب في أضرار. بدون التفسيرية، نحن نطير عمياء.</p>

<h2>تقييم صريح</h2>
<p>لا أعتقد أن نماذج اللغة الكبيرة الحالية خطيرة بشكل خاص. لكن منحنى القدرات حادٌّ، وقدرتنا على فهم سلوك النماذج وتدقيقها لم تواكب الوتيرة ذاتها. بناء الأسس العلمية الآن — حين تكون المخاطر أقل — هو المسار المسؤول.</p>`
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
