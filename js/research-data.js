/* ============================================================
   research-data.js
   Each project has a base (English) + translations{fr,ar}.
   Use getResearchProjectsLocalized() when rendering.
   ============================================================ */

const RESEARCH_PROJECTS = [
  {
    title: "Lite-LDM: Generating High-Quality Compute-Efficient Chest CT",
    status: "Ongoing",
    description: "Leading a team effort brainstorming and conducting ablation studies using denoising diffusion models with lightweight encoders. Overseeing action planning, task distribution, and communication with the faculty mentor.",
    tags: ["Diffusion Models", "Medical Imaging", "Deep Learning", "Chest CT"],
    links: [{ label: "GitHub", url: "https://github.com/GanonthaBr/Lite-LDM" }],
    translations: {
      fr: {
        title: "Lite-LDM : Génération de CT Thoracique Haute Qualité et Efficace en Calcul",
        description: "Direction d'un effort d'équipe pour les sessions de réflexion et les études d'ablation utilisant des modèles de diffusion débruitage avec des encodeurs légers. Supervision de la planification d'action, de la distribution des tâches et de la communication avec le mentor de faculté."
      },
      ar: {
        title: "Lite-LDM: توليد صور CT صدرية عالية الجودة بكفاءة حسابية",
        description: "قيادة جهد جماعي في عقد جلسات التفكير الإبداعي وإجراء دراسات الاستئصال باستخدام نماذج الانتشار مع مشفّرات خفيفة الوزن. الإشراف على تخطيط الإجراءات وتوزيع المهام والتواصل مع المرشد الأكاديمي."
      }
    }
  },
  {
    title: "Robustness of RAG Systems on Low-Resource Languages",
    status: "Ongoing",
    description: "Investigating robustness of RAG systems under noisy documents in low-resource languages. Constructing an abstention mechanism for African languages and comparing safety levels against high-resource languages.",
    tags: ["RAG", "Low-Resource NLP", "African Languages", "LLMs", "Robustness"],
    links: [],
    translations: {
      fr: {
        title: "Robustesse des Systèmes RAG sur les Langues à Faibles Ressources",
        description: "Étude de la robustesse des systèmes RAG face à des documents bruités dans des langues à faibles ressources. Construction d'un mécanisme d'abstention pour les langues africaines et comparaison des niveaux de sécurité avec les langues à hautes ressources."
      },
      ar: {
        title: "متانة أنظمة RAG في اللغات منخفضة الموارد",
        description: "التحقيق في متانة أنظمة RAG في مواجهة المستندات الضوضائية في اللغات منخفضة الموارد. بناء آلية امتناع للغات الأفريقية ومقارنة مستويات الأمان مع اللغات عالية الموارد."
      }
    }
  },
  {
    title: "Cross-Robustness Analysis of Lightweight Object Detection",
    status: "Completed",
    description: "Evaluated YOLOv11 models against natural degradations (fog, blur) and digital adversarial attacks (PGD) to identify safety gaps. Curated the \"Kigali Motorcycle Dataset\" and applied heavy natural augmentation to improve environmental resilience in LMIC contexts.",
    tags: ["Object Detection", "YOLOv11", "Adversarial Robustness", "Computer Vision"],
    links: [],
    translations: {
      fr: {
        title: "Analyse de Robustesse Croisée de la Détection d'Objets Légère",
        description: "Évaluation des modèles YOLOv11 face aux dégradations naturelles (brouillard, flou) et aux attaques adversariales numériques (PGD) pour identifier les failles de sécurité. Constitution du « Jeu de Données Moto de Kigali » avec une augmentation naturelle intensive pour améliorer la résilience environnementale dans les contextes PRFI."
      },
      ar: {
        title: "تحليل المتانة المتقاطعة للكشف عن الأجسام الخفيف",
        description: "تقييم نماذج YOLOv11 ضد التدهورات الطبيعية (الضباب، التعتيم) والهجمات الرقمية المعادية (PGD) لتحديد الثغرات الأمنية. تنظيم «مجموعة بيانات دراجات كيغالي» مع تعزيز طبيعي مكثّف لتحسين المرونة البيئية في سياقات البلدان منخفضة ومتوسطة الدخل."
      }
    }
  },
  {
    title: "Predicting Global Homicide Trends via Economic Indicators",
    status: "Completed",
    description: "Processed and cleaned a longitudinal dataset covering 185 countries (2008–2022) to analyze correlation between GDP per capita and intentional homicide rates. Developed and evaluated Linear Regression, Ridge Regression, and Random Forest models, achieving R² of 0.51 through 5-fold cross-validation.",
    tags: ["Machine Learning", "Data Analysis", "Python", "Predictive Modeling"],
    links: [],
    translations: {
      fr: {
        title: "Prédiction des Tendances Mondiales d'Homicides via des Indicateurs Économiques",
        description: "Traitement et nettoyage d'un jeu de données longitudinal couvrant 185 pays (2008–2022) pour analyser la corrélation entre le PIB par habitant et les taux d'homicide intentionnel. Développement et évaluation de modèles de Régression Linéaire, de Régression Ridge et de Forêt Aléatoire, atteignant un R² de 0,51 grâce à une validation croisée à 5 plis."
      },
      ar: {
        title: "التنبؤ باتجاهات الجرائم القاتلة العالمية عبر المؤشرات الاقتصادية",
        description: "معالجة وتنظيف مجموعة بيانات طولية تغطي 185 دولة (2008–2022) لتحليل الارتباط بين الناتج المحلي الإجمالي للفرد ومعدلات القتل العمد. تطوير وتقييم نماذج الانحدار الخطي وانحدار Ridge والغابات العشوائية، مع تحقيق R² يبلغ 0.51 عبر التحقق المتقاطع الخماسي."
      }
    }
  }
];

function getResearchProjectsLocalized() {
  if (!window.I18n) return RESEARCH_PROJECTS;
  return RESEARCH_PROJECTS.map(p => window.I18n.localize(p));
}
