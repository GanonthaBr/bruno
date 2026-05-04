/* ============================================================
   research-data.js
   Add / edit your research projects here.
   Each object supports:
     - title: string
     - status: "Ongoing" | "Completed" | "Published" | "Preprint" | "In Review"
     - description: string
     - tags: string[]
     - links: [{ label, url }]  (optional)
   ============================================================ */

const RESEARCH_PROJECTS = [
  {
    title: "Lite-LDM: Generating High-Quality Compute-Efficient Chest CT",
    status: "Ongoing",
    description: "Leading a team effort brainstorming and conducting ablation studies using denoising diffusion models with lightweight encoders. Overseeing action planning, task distribution, and communication with the faculty mentor.",
    tags: ["Diffusion Models", "Medical Imaging", "Deep Learning", "Chest CT"],
    links: [
      { label: "GitHub", url: "https://github.com/GanonthaBr/Lite-LDM" }
    ]
  },
  {
    title: "Robustness of RAG Systems on Low-Resource Languages",
    status: "Ongoing",
    description: "Investigating robustness of RAG systems under noisy documents in low-resource languages. Constructing an abstention mechanism for African languages and comparing safety levels against high-resource languages.",
    tags: ["RAG", "Low-Resource NLP", "African Languages", "LLMs", "Robustness"],
    links: []
  },
  {
    title: "Cross-Robustness Analysis of Lightweight Object Detection",
    status: "Completed",
    description: "Evaluated YOLOv11 models against natural degradations (fog, blur) and digital adversarial attacks (PGD) to identify safety gaps. Curated the \"Kigali Motorcycle Dataset\" and applied heavy natural augmentation to improve environmental resilience in LMIC contexts.",
    tags: ["Object Detection", "YOLOv11", "Adversarial Robustness", "Computer Vision"],
    links: []
  },
  {
    title: "Predicting Global Homicide Trends via Economic Indicators",
    status: "Completed",
    description: "Processed and cleaned a longitudinal dataset covering 185 countries (2008–2022) to analyze correlation between GDP per capita and intentional homicide rates. Developed and evaluated Linear Regression, Ridge Regression, and Random Forest models, achieving R² of 0.51 through 5-fold cross-validation.",
    tags: ["Machine Learning", "Data Analysis", "Python", "Predictive Modeling"],
    links: []
  }
];
