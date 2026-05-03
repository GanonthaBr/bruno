/* ============================================================
   blog-data.js
   Add / edit your blog posts here.
   Fields:
     - id: unique slug (used in URL: blog-post.html?id=xxx)
     - title: string
     - category: string
     - date: "YYYY-MM-DD"
     - readTime: e.g. "8 min read"
     - excerpt: short preview (1-2 sentences)
     - content: full HTML string — supports KaTeX math via $...$ and $$...$$
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
<p>In upcoming posts, I'll dive into specific circuits I've been studying in the context of my research. Stay tuned!</p>
    `
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
<p>In my research, I'm investigating whether SAE features are consistent across model checkpoints and across similar but differently-trained models. Preliminary results suggest a core set of "universal" features that appear robustly, alongside a long tail of model-specific features. More on this soon!</p>
    `
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
<p>I don't think current LLMs are particularly dangerous. But the capabilities trajectory is steep, and our ability to understand and audit model behavior has not kept pace. Building the scientific foundations now — while the stakes are lower — is the responsible path forward.</p>
    `
  }
];

/* ---------- Helpers ---------- */
function getBlogPostById(id) {
  return BLOG_POSTS.find(p => p.id === id) || null;
}

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return {
    month: d.toLocaleString('en-US', { month: 'short' }).toUpperCase(),
    day:   d.getDate(),
    year:  d.getFullYear(),
    full:  d.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  };
}
