/* ============================================================
   videos-data.js
   Add your YouTube videos here.
   Fields:
     - youtubeId: the video ID from the YouTube URL
       e.g. for https://www.youtube.com/watch?v=dQw4w9WgXcQ → "dQw4w9WgXcQ"
     - title: string
     - description: string (optional)
     - category: string (used for filter tabs)
   ============================================================ */

const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@YourChannelHandle"; // ← Update this

const VIDEOS = [
  // ── Add your videos below ──
  // Example:
  // {
  //   youtubeId: "dQw4w9WgXcQ",
  //   title: "Introduction to Mechanistic Interpretability",
  //   description: "A walkthrough of the core ideas in mechanistic interpretability — circuits, features, and causal tracing.",
  //   category: "Interpretability"
  // },
];

/* Sample placeholder videos — remove these once you add your own */
const SAMPLE_VIDEOS = [
  {
    youtubeId: "wjZofJX0v4M",
    title: "Attention is All You Need — Paper Explained",
    description: "A deep dive into the original Transformer paper with intuitions and diagrams.",
    category: "Paper Reviews"
  },
  {
    youtubeId: "aircAruvnKk",
    title: "Neural Networks: How They Actually Work",
    description: "From perceptrons to deep networks — building intuition from the ground up.",
    category: "Tutorials"
  },
  {
    youtubeId: "IHZwWFHWa-w",
    title: "Gradient Descent, How Neural Networks Learn",
    description: "Visualizing gradient descent and backpropagation.",
    category: "Tutorials"
  }
];

// Use real videos if defined, otherwise show placeholders
const ALL_VIDEOS = VIDEOS.length > 0 ? VIDEOS : SAMPLE_VIDEOS;
