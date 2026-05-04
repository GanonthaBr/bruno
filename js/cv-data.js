/* ============================================================
   cv-data.js
   Edit your CV / About page content here.
   ============================================================ */

const CV_DATA = {

  bio: "I'm a graduate student in Machine Learning at Carnegie Mellon University, where I research mechanistic interpretability and AI safety. My goal is to develop rigorous tools for understanding the internal computations of large language models — building the scientific foundations needed to make AI systems transparent and trustworthy.",

  education: [
    {
      degree: "M.S. Machine Learning",
      school: "Carnegie Mellon University",
      location: "Pittsburgh, PA",
      period: "2024 — Present",
      details: "School of Computer Science. Research focus: mechanistic interpretability of transformer-based LLMs and AI safety. Advisor: [Advisor Name]."
    },
    {
      degree: "B.S. Computer Science",
      school: "Your Undergraduate University",
      location: "City, State",
      period: "20XX — 20XX",
      details: "Graduated with honors. Relevant coursework: machine learning, algorithms, linear algebra, statistics."
    }
  ],

  experience: [
    {
      role: "Graduate Researcher",
      org: "Carnegie Mellon University — ML & AI Safety",
      period: "2024 — Present",
      description: "Investigating mechanistic interpretability of transformer-based language models. Projects include sparse autoencoder feature decomposition in residual streams, circuit analysis for indirect object identification in GPT-2, and representation engineering for truthfulness."
    }
    // Add more entries as needed:
    // {
    //   role: "Research Intern",
    //   org: "Organization Name",
    //   period: "Summer 2023",
    //   description: "Description of work."
    // }
  ],

  skills: {
    "Languages":        ["Python", "JavaScript", "LaTeX", "Bash"],
    "ML / DL":          ["PyTorch", "JAX", "Hugging Face", "Weights & Biases", "NumPy"],
    "Interpretability": ["TransformerLens", "Sparse Autoencoders", "Activation Patching", "Logit Lens"],
    "Tools":            ["Git", "Linux", "Docker", "Jupyter", "SLURM"]
  },

  awards: [
    // Uncomment and fill in when you have awards:
    // { title: "Fellowship Name", org: "Organization", year: "2024" }
  ]

};
