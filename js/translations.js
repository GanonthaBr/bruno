/* ============================================================
   translations.js — All UI strings for EN / FR / AR
   ============================================================ */

const TRANSLATIONS = {

  /* ========================================================== */
  en: {
    nav: {
      home: "Home", about: "About", research: "Research",
      blog: "Blog", videos: "Videos"
    },
    footer: { built: "Built with ☕ & curiosity" },
    index: {
      greeting: "👋 Hello, I'm",
      heroTitle: "M.S. Information Technology &middot; <strong>CMU Africa</strong>, Kigali<br><strong>AI &amp; Machine Learning Engineer</strong> &middot; AI Safety &amp; Alignment",
      heroBio: "AI &amp; Machine Learning Engineer with a strong background in software engineering. My career focus is AI research — leveraging machine learning to make a significant positive impact on millions of lives. I specialize in <strong>AI Safety and alignment</strong>, with emphasis on <strong>Mechanistic Interpretability</strong>: reverse-engineering neural networks to understand their reasoning and enforce safety barriers.",
      viewResearch: "View Research →",
      readBlog: "Read Blog",
      h2ResearchInterests: "Research <span>Interests</span>",
      h2FeaturedResearch:  "Featured <span>Research</span>",
      h2RecentPosts:       "Recent <span>Posts</span>",
      selectedProjects: "Selected projects —",
      viewAllResearch: "view all research →",
      thoughtsOn: "Thoughts on interpretability, safety, and ML —",
      viewAllPosts: "view all posts →"
    },
    interests: {
      safety_label: "AI Safety & Alignment",
      safety_desc: "Enforcing safety barriers in AI systems by understanding and steering model behavior at the representation level.",
      mech_label: "Mechanistic Interpretability",
      mech_desc: "Reverse-engineering neural networks to understand their internal reasoning processes and thought patterns.",
      robust_label: "Robustness & Adversarial ML",
      robust_desc: "Evaluating model robustness against natural degradations and adversarial attacks to identify and close safety gaps.",
      nlp_label: "Low-Resource NLP",
      nlp_desc: "Building reliable NLP systems for African and other low-resource languages, including robust RAG with abstention mechanisms."
    },
    about: {
      pageLabel: "About",
      downloadCV: "Download CV",
      getInTouch: "Get in Touch",
      h2Education: "Education",
      h2Experience: "Research <span>Experience</span>",
      h2Skills: "Technical <span>Skills</span>",
      h2Awards: "Honors &amp; <span>Awards</span>",
      h2Community: "Community <span>Involvement</span>"
    },
    blog: {
      pageLabel: "Blog",
      title: "Articles & Notes",
      subtitle: "I write about mechanistic interpretability, AI safety, LLM research, and ideas I find interesting. Posts support LaTeX math notation.",
      allPosts: "All Posts",
      readMore: "Read more →",
      noPostsInCategory: "No posts in this category yet."
    },
    blogPost: {
      backToBlog: "← Back to Blog",
      backToAllPosts: "← Back to all posts",
      loading: "Loading post…",
      noPostSpecified: "No post specified.",
      returnToBlog: "Return to blog",
      postNotFound: "Post not found."
    },
    research: {
      pageLabel: "Research",
      title: "Projects & Publications",
      subtitle: "My work focuses on mechanistic interpretability of large language models and AI safety. I'm interested in understanding the internal representations and algorithms that emerge in transformer-based models.",
      allProjects: "All Projects",
      linksComingSoon: "Links coming soon",
      noProjectsInCategory: "No projects in this category yet."
    },
    videos: {
      pageLabel: "Videos",
      title: "YouTube Channel",
      subtitle: "I make videos on mechanistic interpretability, AI safety, paper explanations, and ML concepts. Subscribe to get notified when new videos drop.",
      visitChannel: "▶ Visit My Channel",
      allVideos: "All Videos",
      comingSoonTitle: "Videos Coming Soon",
      comingSoonText: "I'm working on video content covering AI safety, mechanistic interpretability, and machine learning research. Subscribe to the channel to get notified when the first videos drop.",
      subscribeYouTube: "Subscribe on YouTube",
      noVideosInCategory: "No videos in this category yet."
    },
    status: {
      Ongoing: "Ongoing", Completed: "Completed", Published: "Published",
      Preprint: "Preprint", "In Review": "In Review"
    }
  },

  /* ========================================================== */
  fr: {
    nav: {
      home: "Accueil", about: "À Propos", research: "Recherche",
      blog: "Blog", videos: "Vidéos"
    },
    footer: { built: "Construit avec ☕ & curiosité" },
    index: {
      greeting: "👋 Bonjour, je suis",
      heroTitle: "M.S. Technologies de l'Information &middot; <strong>CMU Africa</strong>, Kigali<br><strong>Ingénieur IA &amp; Apprentissage Automatique</strong> &middot; Sécurité IA &amp; Alignement",
      heroBio: "Ingénieur en IA et Apprentissage Automatique avec une solide formation en génie logiciel. Mon objectif de carrière est la recherche en IA — utiliser l'apprentissage automatique pour avoir un impact positif significatif sur des millions de vies. Je me spécialise dans la <strong>sécurité de l'IA et l'alignement</strong>, avec un accent sur l'<strong>interprétabilité mécanistique</strong> : la rétroingénierie des réseaux de neurones pour comprendre leur raisonnement et imposer des barrières de sécurité.",
      viewResearch: "Voir les Recherches →",
      readBlog: "Lire le Blog",
      h2ResearchInterests: "Intérêts de <span>Recherche</span>",
      h2FeaturedResearch:  "Recherches <span>Sélectionnées</span>",
      h2RecentPosts:       "Articles <span>Récents</span>",
      selectedProjects: "Projets sélectionnés —",
      viewAllResearch: "voir toutes les recherches →",
      thoughtsOn: "Réflexions sur l'interprétabilité, la sécurité et le ML —",
      viewAllPosts: "voir tous les articles →"
    },
    interests: {
      safety_label: "Sécurité IA & Alignement",
      safety_desc: "Imposer des barrières de sécurité dans les systèmes d'IA en comprenant et en orientant le comportement des modèles au niveau des représentations.",
      mech_label: "Interprétabilité Mécanistique",
      mech_desc: "Rétroingénierie des réseaux de neurones pour comprendre leurs processus de raisonnement interne et leurs schémas de pensée.",
      robust_label: "Robustesse & ML Adversarial",
      robust_desc: "Évaluation de la robustesse des modèles face aux dégradations naturelles et aux attaques adversariales pour identifier et combler les lacunes de sécurité.",
      nlp_label: "TALN à Faibles Ressources",
      nlp_desc: "Construction de systèmes TALN fiables pour les langues africaines et autres langues à faibles ressources, y compris des systèmes RAG robustes avec mécanismes d'abstention."
    },
    about: {
      pageLabel: "À Propos",
      downloadCV: "Télécharger le CV",
      getInTouch: "Me Contacter",
      h2Education: "Formation",
      h2Experience: "Expérience de <span>Recherche</span>",
      h2Skills: "Compétences <span>Techniques</span>",
      h2Awards: "Distinctions &amp; <span>Prix</span>",
      h2Community: "Engagement <span>Communautaire</span>"
    },
    blog: {
      pageLabel: "Blog",
      title: "Articles & Notes",
      subtitle: "J'écris sur l'interprétabilité mécanistique, la sécurité de l'IA, la recherche sur les LLM, et les idées qui m'intéressent. Les articles prennent en charge la notation mathématique LaTeX.",
      allPosts: "Tous les Articles",
      readMore: "Lire la suite →",
      noPostsInCategory: "Aucun article dans cette catégorie pour l'instant."
    },
    blogPost: {
      backToBlog: "← Retour au Blog",
      backToAllPosts: "← Retour à tous les articles",
      loading: "Chargement de l'article…",
      noPostSpecified: "Aucun article spécifié.",
      returnToBlog: "Retour au blog",
      postNotFound: "Article introuvable."
    },
    research: {
      pageLabel: "Recherche",
      title: "Projets & Publications",
      subtitle: "Mes travaux portent sur l'interprétabilité mécanistique des grands modèles de langage et la sécurité de l'IA. Je m'intéresse à la compréhension des représentations internes et des algorithmes qui émergent dans les modèles basés sur les transformers.",
      allProjects: "Tous les Projets",
      linksComingSoon: "Liens à venir",
      noProjectsInCategory: "Aucun projet dans cette catégorie pour l'instant."
    },
    videos: {
      pageLabel: "Vidéos",
      title: "Chaîne YouTube",
      subtitle: "Je réalise des vidéos sur l'interprétabilité mécanistique, la sécurité de l'IA, les explications d'articles et les concepts ML. Abonnez-vous pour être notifié lors de la publication de nouvelles vidéos.",
      visitChannel: "▶ Visiter Ma Chaîne",
      allVideos: "Toutes les Vidéos",
      comingSoonTitle: "Vidéos Bientôt Disponibles",
      comingSoonText: "Je travaille sur du contenu vidéo couvrant la sécurité de l'IA, l'interprétabilité mécanistique et la recherche en apprentissage automatique. Abonnez-vous à la chaîne pour être notifié à la sortie des premières vidéos.",
      subscribeYouTube: "S'abonner sur YouTube",
      noVideosInCategory: "Aucune vidéo dans cette catégorie pour l'instant."
    },
    status: {
      Ongoing: "En cours", Completed: "Terminé", Published: "Publié",
      Preprint: "Prépublication", "In Review": "En révision"
    }
  },

  /* ========================================================== */
  ar: {
    nav: {
      home: "الرئيسية", about: "عني", research: "البحث",
      blog: "المدونة", videos: "الفيديوهات"
    },
    footer: { built: "مبني بـ ☕ وفضول" },
    index: {
      greeting: "👋 مرحباً، أنا",
      heroTitle: "ماجستير تقنية المعلومات &middot; <strong>CMU Africa</strong>، كيغالي<br><strong>مهندس ذكاء اصطناعي وتعلّم آلي</strong> &middot; سلامة الذكاء الاصطناعي ومحاذاته",
      heroBio: "مهندس ذكاء اصطناعي وتعلّم آلي بخلفية قوية في هندسة البرمجيات. يتمحور توجهي المهني حول البحث في الذكاء الاصطناعي — توظيف التعلم الآلي لإحداث أثر إيجابي ملموس في حياة الملايين. أتخصص في <strong>سلامة الذكاء الاصطناعي ومحاذاته</strong>، مع تركيز على <strong>التفسيرية الآلية</strong>: إعادة هندسة الشبكات العصبية لفهم استدلالها وفرض حواجز السلامة.",
      viewResearch: "عرض البحوث ←",
      readBlog: "قراءة المدونة",
      h2ResearchInterests: "الاهتمامات <span>البحثية</span>",
      h2FeaturedResearch:  "أبحاث <span>مميزة</span>",
      h2RecentPosts:       "مقالات <span>حديثة</span>",
      selectedProjects: "مشاريع مختارة —",
      viewAllResearch: "عرض جميع الأبحاث ←",
      thoughtsOn: "أفكار حول التفسيرية والسلامة وتعلم الآلة —",
      viewAllPosts: "عرض جميع المقالات ←"
    },
    interests: {
      safety_label: "سلامة الذكاء الاصطناعي ومحاذاته",
      safety_desc: "فرض حواجز السلامة في أنظمة الذكاء الاصطناعي من خلال فهم سلوك النماذج وتوجيهه على مستوى التمثيلات.",
      mech_label: "التفسيرية الآلية",
      mech_desc: "إعادة هندسة الشبكات العصبية لفهم عمليات استدلالها الداخلي وأنماط تفكيرها.",
      robust_label: "المتانة وتعلم الآلة المعادي",
      robust_desc: "تقييم متانة النماذج في مواجهة التدهورات الطبيعية والهجمات المعادية لتحديد الثغرات الأمنية وسدّها.",
      nlp_label: "معالجة اللغة الطبيعية بموارد منخفضة",
      nlp_desc: "بناء أنظمة معالجة لغة طبيعية موثوقة للغات الأفريقية وغيرها من اللغات منخفضة الموارد، بما يشمل أنظمة RAG متينة بآليات امتناع."
    },
    about: {
      pageLabel: "عني",
      downloadCV: "تحميل السيرة الذاتية",
      getInTouch: "التواصل معي",
      h2Education: "التعليم",
      h2Experience: "الخبرة <span>البحثية</span>",
      h2Skills: "المهارات <span>التقنية</span>",
      h2Awards: "الجوائز <span>والتكريمات</span>",
      h2Community: "المشاركة <span>المجتمعية</span>"
    },
    blog: {
      pageLabel: "المدونة",
      title: "مقالات وملاحظات",
      subtitle: "أكتب عن التفسيرية الآلية وسلامة الذكاء الاصطناعي وبحوث نماذج اللغة الكبيرة والأفكار التي تستأثر باهتمامي. تدعم المقالات ترميز الرياضيات بـ LaTeX.",
      allPosts: "جميع المقالات",
      readMore: "اقرأ المزيد ←",
      noPostsInCategory: "لا توجد مقالات في هذه الفئة بعد."
    },
    blogPost: {
      backToBlog: "العودة إلى المدونة ←",
      backToAllPosts: "العودة إلى جميع المقالات ←",
      loading: "جارٍ تحميل المقال…",
      noPostSpecified: "لم يُحدَّد أي مقال.",
      returnToBlog: "العودة إلى المدونة",
      postNotFound: "المقال غير موجود."
    },
    research: {
      pageLabel: "البحث",
      title: "المشاريع والمنشورات",
      subtitle: "يتركز عملي على التفسيرية الآلية لنماذج اللغة الكبيرة وسلامة الذكاء الاصطناعي. أهتم بفهم التمثيلات الداخلية والخوارزميات التي تظهر في النماذج المبنية على المحوّلات.",
      allProjects: "جميع المشاريع",
      linksComingSoon: "الروابط قريباً",
      noProjectsInCategory: "لا توجد مشاريع في هذه الفئة بعد."
    },
    videos: {
      pageLabel: "الفيديوهات",
      title: "قناة يوتيوب",
      subtitle: "أصنع فيديوهات عن التفسيرية الآلية وسلامة الذكاء الاصطناعي وشرح الأوراق البحثية ومفاهيم تعلم الآلة. اشترك لتُبلَّغ عند نشر فيديوهات جديدة.",
      visitChannel: "▶ زيارة قناتي",
      allVideos: "جميع الفيديوهات",
      comingSoonTitle: "الفيديوهات قريباً",
      comingSoonText: "أعمل على محتوى فيديو يغطي سلامة الذكاء الاصطناعي والتفسيرية الآلية وبحوث تعلم الآلة. اشترك في القناة لتُبلَّغ عند نشر أول الفيديوهات.",
      subscribeYouTube: "الاشتراك في يوتيوب",
      noVideosInCategory: "لا توجد فيديوهات في هذه الفئة بعد."
    },
    status: {
      Ongoing: "جارٍ", Completed: "مكتمل", Published: "منشور",
      Preprint: "قبل النشر", "In Review": "قيد المراجعة"
    }
  }

};
