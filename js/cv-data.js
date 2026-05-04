/* ============================================================
   cv-data.js — CV / About page content.
   Use getCV() to get content in the current language.
   ============================================================ */

const CV_DATA = {
  bio: "AI & Machine Learning Engineer with a strong background in software engineering. My career focus is AI research — leveraging machine learning to make a significant positive impact on millions of lives. I specialize in AI Safety and alignment, with emphasis on Mechanistic Interpretability: reverse-engineering neural networks to understand their reasoning and enforce safety barriers.",

  education: [
    {
      degree: "M.S. in Information Technology",
      school: "Carnegie Mellon University",
      location: "Kigali, Rwanda",
      period: "Aug 2025 — May 2027",
      details: "Focus areas: Artificial Intelligence, Machine Learning, Data Analytics, Software Development, Computer Networking, Research."
    },
    {
      degree: "B.S. in Management of Information Systems",
      school: "African Development University",
      location: "Niamey, Niger",
      period: "Oct 2019 — Aug 2022",
      details: "Coursework: Information Technology, Data Analytics, Software Development, Entrepreneurship and Leadership."
    }
  ],

  experience: [
    {
      role: "Graduate Teaching Assistant",
      org: "Carnegie Mellon University — Kigali, Rwanda",
      period: "Jan 2026 — May 2026",
      description: "Assisted professor with teaching; held daily office hours to help students understand course concepts; responsible for grading homework."
    },
    {
      role: "Software Developer",
      org: "PayiSkoul — Abidjan, Cote d'Ivoire",
      period: "May 2025 — Aug 2025",
      description: "Developed a mobile application with Flutter, integrating REST API and WebSocket for instant messaging. Integrated a KYC system from an external provider for instant identity verification, ensuring 100% identity accuracy."
    },
    {
      role: "Software Developer",
      org: "ONG APIS — Niamey, Niger",
      period: "Mar 2024 — Aug 2024",
      description: "Created a full-stack web application and enhanced internal/external communications via a mailing system. Increased NGO visibility from 10 to 100+ volunteers per month."
    }
  ],

  skills: {
    "Programming":  ["Python", "NumPy", "PyTorch", "Keras", "Flutter", "Django"],
    "ML / AI":      ["Machine Learning", "Deep Learning", "LLMs", "Diffusion Models", "RAG Systems"],
    "Tools":        ["Git", "REST APIs", "WebSocket", "Docker", "Cloud Deployment"],
    "Languages":    ["French (Native)", "English (Proficient)", "Arabic (Basic)"]
  },

  awards: [],

  community: [
    {
      role: "Technical Support",
      org: "Eglise Evangelique de la Republique du Niger (EERN)",
      period: "Oct 2023 — Jul 2025",
      description: "Provided technical support during church services including projection and photography."
    },
    {
      role: "Ministry of Technology — Student Council",
      org: "African Development University — Niamey, Niger",
      period: "Oct 2021 — Jul 2022",
      description: "Promoted technology in the student community; organized 5+ training workshops on digital literacy."
    }
  ]
};

/* ---- Per-language overrides ---- */
const CV_TRANSLATIONS = {
  fr: {
    bio: "Ingénieur en IA et Apprentissage Automatique avec une solide formation en génie logiciel. Mon objectif de carrière est la recherche en IA — utiliser l'apprentissage automatique pour avoir un impact positif significatif sur des millions de vies. Je me spécialise dans la sécurité de l'IA et l'alignement, avec un accent sur l'interprétabilité mécanistique : la rétroingénierie des réseaux de neurones pour comprendre leur raisonnement et imposer des barrières de sécurité.",
    education: [
      { details: "Domaines de spécialisation : Intelligence Artificielle, Apprentissage Automatique, Analytique des Données, Développement Logiciel, Réseaux Informatiques, Recherche." },
      { details: "Cours suivis : Technologies de l'Information, Analytique des Données, Développement Logiciel, Entrepreneuriat et Leadership." }
    ],
    experience: [
      { description: "Assistance au professeur dans l'enseignement ; permanences quotidiennes pour aider les étudiants à comprendre les concepts du cours ; responsable de la correction des devoirs." },
      { description: "Développement d'une application mobile avec Flutter, intégrant REST API et WebSocket pour la messagerie instantanée. Intégration d'un système KYC d'un fournisseur externe pour la vérification d'identité instantanée, assurant une précision d'identité à 100 %." },
      { description: "Création d'une application web full-stack et amélioration des communications internes/externes via un système de mailing. Augmentation de la visibilité de l'ONG de 10 à 100+ bénévoles par mois." }
    ],
    skills: {
      "Programmation":  ["Python", "NumPy", "PyTorch", "Keras", "Flutter", "Django"],
      "ML / IA":        ["Apprentissage Automatique", "Apprentissage Profond", "LLM", "Modèles de Diffusion", "Systèmes RAG"],
      "Outils":         ["Git", "REST APIs", "WebSocket", "Docker", "Déploiement Cloud"],
      "Langues":        ["Français (Natif)", "Anglais (Courant)", "Arabe (Notions)"]
    },
    community: [
      { description: "Support technique lors des services religieux comprenant la projection et la photographie." },
      { description: "Promotion de la technologie dans la communauté étudiante ; organisation de 5+ ateliers de formation en littératie numérique." }
    ]
  },
  ar: {
    bio: "مهندس ذكاء اصطناعي وتعلّم آلي بخلفية قوية في هندسة البرمجيات. يتمحور توجهي المهني حول البحث في الذكاء الاصطناعي — توظيف التعلم الآلي لإحداث أثر إيجابي ملموس في حياة الملايين. أتخصص في سلامة الذكاء الاصطناعي ومحاذاته، مع تركيز على التفسيرية الآلية: إعادة هندسة الشبكات العصبية لفهم استدلالها وفرض حواجز السلامة.",
    education: [
      { details: "مجالات التركيز: الذكاء الاصطناعي، التعلم الآلي، تحليل البيانات، تطوير البرمجيات، شبكات الحاسوب، البحث العلمي." },
      { details: "المقررات الدراسية: تقنية المعلومات، تحليل البيانات، تطوير البرمجيات، ريادة الأعمال والقيادة." }
    ],
    experience: [
      { description: "مساعدة الأستاذ في التدريس؛ إجراء ساعات مكتبية يومية لمساعدة الطلاب على فهم مفاهيم المقرر؛ المسؤولية عن تصحيح الواجبات." },
      { description: "تطوير تطبيق جوال باستخدام Flutter مع دمج REST API وWebSocket للمراسلة الفورية. دمج نظام KYC من مزوّد خارجي للتحقق الفوري من الهوية بدقة 100%." },
      { description: "إنشاء تطبيق ويب متكامل وتحسين الاتصالات الداخلية والخارجية عبر نظام بريدي. زيادة قاعدة المتطوعين في المنظمة من 10 إلى أكثر من 100 متطوع شهرياً." }
    ],
    skills: {
      "البرمجة":                              ["Python", "NumPy", "PyTorch", "Keras", "Flutter", "Django"],
      "تعلّم الآلة / الذكاء الاصطناعي":     ["تعلم الآلة", "التعلم العميق", "نماذج اللغة الكبيرة", "نماذج الانتشار", "أنظمة RAG"],
      "الأدوات":                              ["Git", "REST APIs", "WebSocket", "Docker", "النشر السحابي"],
      "اللغات":                               ["الفرنسية (لغة أم)", "الإنجليزية (طليق)", "العربية (أساسي)"]
    },
    community: [
      { description: "تقديم الدعم التقني خلال خدمات الكنيسة بما في ذلك العرض والتصوير الفوتوغرافي." },
      { description: "تعزيز ثقافة التكنولوجيا في المجتمع الطلابي؛ تنظيم أكثر من 5 ورش تدريبية في محو الأمية الرقمية." }
    ]
  }
};

function getCV() {
  const lang = (window.I18n && window.I18n.lang) || 'en';
  if (lang === 'en' || !CV_TRANSLATIONS[lang]) return CV_DATA;
  const t = CV_TRANSLATIONS[lang];
  return {
    ...CV_DATA,
    bio:       t.bio || CV_DATA.bio,
    education: CV_DATA.education.map((e, i) => ({
      ...e,
      details: (t.education && t.education[i]) ? t.education[i].details : e.details
    })),
    experience: CV_DATA.experience.map((e, i) => ({
      ...e,
      description: (t.experience && t.experience[i]) ? t.experience[i].description : e.description
    })),
    skills:    t.skills || CV_DATA.skills,
    awards:    CV_DATA.awards,
    community: CV_DATA.community.map((c, i) => ({
      ...c,
      description: (t.community && t.community[i]) ? t.community[i].description : c.description
    }))
  };
}
