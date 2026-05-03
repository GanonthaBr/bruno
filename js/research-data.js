/* ============================================================
   research-data.js
   Add / edit your research projects here.
   Each object supports:
     - title: string
     - status: "Ongoing" | "Published" | "Preprint" | "In Review"
     - description: string
     - tags: string[]
     - links: [{ label, url }]  (optional)
   ============================================================ */

const RESEARCH_PROJECTS = [
  {
    title: "Sparse Autoencoders for Feature Decomposition in Transformer Residual Streams",
    status: "Ongoing",
    description: "Investigating whether sparse autoencoders can reliably decompose the residual stream of large language models into interpretable, monosemantic features. We analyze feature geometry, universality across models, and alignment with human-understandable concepts.",
    tags: ["Mechanistic Interpretability", "Sparse Autoencoders", "Transformers", "Feature Analysis"],
    links: [
      // { label: "Paper", url: "#" },
      // { label: "Code", url: "#" }
    ]
  },
  {
    title: "Circuit Analysis of Indirect Object Identification in GPT-2",
    status: "Preprint",
    description: "A replication and extension of the IOI circuit discovery work. We trace how GPT-2 small performs indirect object identification through attention head circuits, with ablation studies and causal interventions to validate circuit completeness.",
    tags: ["Circuit Discovery", "GPT-2", "Causal Tracing", "Attention Heads"],
    links: [
      // { label: "ArXiv", url: "#" },
      // { label: "Code", url: "#" }
    ]
  },
  {
    title: "Representation Engineering for Truthfulness in LLMs",
    status: "In Review",
    description: "Exploring how linear directions in activation space encode truthfulness. We identify truth-related directions via contrast pairs and test whether steering along these directions can reliably reduce hallucinations in open-source models.",
    tags: ["Representation Engineering", "LLM Safety", "Hallucination", "Linear Probing"],
    links: [
      // { label: "Paper", url: "#" }
    ]
  },
  {
    title: "Scaling Laws for Interpretability: How Circuit Complexity Grows with Model Size",
    status: "Ongoing",
    description: "An empirical study of how the complexity and structure of mechanistic circuits scales across model sizes from 125M to 7B parameters. Preliminary results suggest super-linear growth in circuit depth with model capacity.",
    tags: ["Scaling Laws", "Mechanistic Interpretability", "Circuits", "Empirical ML"],
    links: []
  }
];
