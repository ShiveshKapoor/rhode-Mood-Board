/* ========================================================
   RHODE — FIND YOUR GLOW  ·  Quiz Logic & Mood Board Engine
   ======================================================== */

// ─── Quiz Data ───────────────────────────────────────────
const questions = [
  {
    id: "skin_type",
    number: 1,
    text: "Let's start with the basics — what's your skin type?",
    options: [
      { emoji: "💧", label: "Oily", desc: "Shiny by midday, enlarged pores", tags: { mattify: 2, lightweight: 2 } },
      { emoji: "🏜️", label: "Dry", desc: "Tight, flaky, craving moisture", tags: { hydration: 3, barrier: 2 } },
      { emoji: "🌗", label: "Combination", desc: "Oily T-zone, dry cheeks", tags: { hydration: 1, lightweight: 1, barrier: 1 } },
      { emoji: "☁️", label: "Normal", desc: "Balanced and low-maintenance", tags: { glow: 2, lightweight: 1 } },
    ],
  },
  {
    id: "skin_concern",
    number: 2,
    text: "What's your biggest skin concern right now?",
    options: [
      { emoji: "✨", label: "Dullness", desc: "I want that lit-from-within glow", tags: { glow: 3, brightening: 2 } },
      { emoji: "🧴", label: "Hydration", desc: "My skin always feels thirsty", tags: { hydration: 3, barrier: 2 } },
      { emoji: "🔬", label: "Fine Lines", desc: "Preventative anti-aging is key", tags: { peptides: 3, barrier: 1 } },
      { emoji: "🌿", label: "Breakouts", desc: "Keeping blemishes at bay", tags: { lightweight: 2, mattify: 2, gentle: 1 } },
    ],
  },
  {
    id: "aesthetic",
    number: 3,
    text: "Which aesthetic speaks to your soul?",
    options: [
      { emoji: "🤍", label: "Clean Girl", desc: "Minimal, dewy, effortless", tags: { glow: 2, minimal: 3, dewy: 2 } },
      { emoji: "🍩", label: "Glazed Donut", desc: "Ultra-shiny, glass-skin energy", tags: { glow: 3, dewy: 3, hydration: 1 } },
      { emoji: "🌸", label: "Soft Glam", desc: "Polished but natural", tags: { softglam: 3, lips: 1, blush: 2 } },
      { emoji: "🖤", label: "Effortless Cool", desc: "Undone, low-key, editorial", tags: { minimal: 2, lightweight: 2, cool: 2 } },
    ],
  },
  {
    id: "routine_steps",
    number: 4,
    text: "How many steps does your dream routine have?",
    options: [
      { emoji: "2️⃣", label: "2 – 3 Steps", desc: "Keep it simple", tags: { minimal: 3, lightweight: 1 } },
      { emoji: "4️⃣", label: "4 – 5 Steps", desc: "The sweet spot", tags: { balanced: 2 } },
      { emoji: "6️⃣", label: "6+ Steps", desc: "I love a full ritual", tags: { maximal: 2, peptides: 1 } },
      { emoji: "🤷", label: "Whatever works", desc: "Function over formula", tags: { balanced: 1, minimal: 1 } },
    ],
  },
  {
    id: "lip_look",
    number: 5,
    text: "Your go-to lip look?",
    options: [
      { emoji: "💋", label: "Glossy & Juicy", desc: "Mirror-like shine", tags: { lips: 3, gloss: 3, dewy: 1 } },
      { emoji: "🫦", label: "Soft Tint", desc: "A hint of color", tags: { lips: 2, tint: 3, softglam: 1 } },
      { emoji: "🍑", label: "Peachy Nude", desc: "My-lips-but-better", tags: { lips: 2, tint: 2, minimal: 1 } },
      { emoji: "👄", label: "Bare & Hydrated", desc: "Nourished, no color", tags: { lips: 3, hydration: 1, minimal: 1 } },
    ],
  },
  {
    id: "morning_vibe",
    number: 6,
    text: "How does your morning routine feel?",
    options: [
      { emoji: "⚡", label: "Quick & Efficient", desc: "5 minutes or less", tags: { minimal: 3, lightweight: 1 } },
      { emoji: "🧖", label: "Self-Care Ritual", desc: "I savour every step", tags: { maximal: 2, barrier: 1, peptides: 1 } },
      { emoji: "☕", label: "Somewhere In Between", desc: "A nice balance", tags: { balanced: 2 } },
      { emoji: "😴", label: "What morning routine?", desc: "I wing it", tags: { minimal: 2, lightweight: 2 } },
    ],
  },
  {
    id: "skin_goal",
    number: 7,
    text: "If you could wake up with one skin goal achieved…",
    options: [
      { emoji: "🌟", label: "Dewy Glow", desc: "Luminous from sunrise", tags: { glow: 3, dewy: 3 } },
      { emoji: "🧊", label: "Plump & Bouncy", desc: "Hydrated, pillow-soft skin", tags: { hydration: 3, peptides: 2 } },
      { emoji: "🪞", label: "Even Tone", desc: "Smooth, uniform complexion", tags: { brightening: 3, gentle: 1 } },
      { emoji: "🍯", label: "Healthy Barrier", desc: "Calm, strong, resilient", tags: { barrier: 3, hydration: 1 } },
    ],
  },
  {
    id: "vibe_pick",
    number: 8,
    text: "Pick the vibe that feels most like you.",
    options: [
      { emoji: "🕊️", label: "Minimal & Chic", desc: "Less is always more", tags: { minimal: 3, cool: 1 } },
      { emoji: "🌺", label: "Soft & Romantic", desc: "Dreamy, feminine energy", tags: { softglam: 3, blush: 2, lips: 1 } },
      { emoji: "🔥", label: "Bold & Expressive", desc: "Maximalist queen", tags: { maximal: 2, blush: 1, tint: 1 } },
      { emoji: "🧊", label: "Cool & Understated", desc: "Effortlessly put-together", tags: { cool: 3, minimal: 1 } },
    ],
  },
  {
    id: "season",
    number: 9,
    text: "Which season matches your energy?",
    options: [
      { emoji: "🌷", label: "Spring", desc: "Fresh, renewing, blooming", tags: { brightening: 2, glow: 1, gentle: 1 } },
      { emoji: "☀️", label: "Summer", desc: "Warm, radiant, carefree", tags: { glow: 2, dewy: 2, lightweight: 1 } },
      { emoji: "🍂", label: "Autumn", desc: "Cozy, rich, grounding", tags: { barrier: 2, hydration: 1, softglam: 1 } },
      { emoji: "❄️", label: "Winter", desc: "Crisp, refined, serene", tags: { hydration: 2, barrier: 2, cool: 1 } },
    ],
  },
  {
    id: "product_priority",
    number: 10,
    text: "What matters most to you in a product?",
    options: [
      { emoji: "🔬", label: "Ingredients", desc: "Peptides, ceramides, the works", tags: { peptides: 3, barrier: 1 } },
      { emoji: "🫧", label: "Texture", desc: "It has to feel amazing", tags: { glow: 1, dewy: 1, hydration: 1, lightweight: 1 } },
      { emoji: "🎀", label: "Aesthetic & Packaging", desc: "Beauty in every detail", tags: { softglam: 1, blush: 1, tint: 1 } },
      { emoji: "🔄", label: "Multi-Use", desc: "One product, many uses", tags: { minimal: 2, balanced: 1, lips: 1 } },
    ],
  },
];

// ─── Product Database ────────────────────────────────────
const products = [
  {
    id: "glazing_fluid",
    name: "Peptide Glazing Fluid",
    category: "Serum",
    emoji: "✨",
    desc: "A lightweight, peptide-packed serum that gives your skin that signature glazed-donut glow. Plumps, hydrates, and preps skin for a dewy finish.",
    tags: ["Peptides", "Glow", "Lightweight"],
    scores: { glow: 4, dewy: 4, peptides: 3, lightweight: 3, hydration: 2, brightening: 1 },
    step: { order: 2, name: "Peptide Glazing Fluid", detail: "Apply to clean skin for instant glow" },
  },
  {
    id: "barrier_cream",
    name: "Barrier Restore Cream",
    category: "Moisturizer",
    emoji: "🧴",
    desc: "A rich yet fast-absorbing moisturizer formulated with peptides and ceramides to strengthen your skin barrier and lock in deep hydration.",
    tags: ["Barrier", "Hydration", "Peptides"],
    scores: { barrier: 5, hydration: 4, peptides: 3, gentle: 2 },
    step: { order: 3, name: "Barrier Restore Cream", detail: "Seal in moisture and protect your barrier" },
  },
  {
    id: "lip_treatment",
    name: "Peptide Lip Treatment",
    category: "Lip Care",
    emoji: "💋",
    desc: "The cult-favorite lip treatment that delivers peptide-powered hydration with a glossy, plumping finish. Your lips, but juicier.",
    tags: ["Lips", "Peptides", "Glossy"],
    scores: { lips: 5, gloss: 4, hydration: 2, peptides: 2, minimal: 1 },
    step: { order: 5, name: "Peptide Lip Treatment", detail: "Swipe on for glossy, hydrated lips" },
  },
  {
    id: "lip_tint",
    name: "Peptide Lip Tint",
    category: "Lip Color",
    emoji: "🫦",
    desc: "Sheer, buildable color with peptide-infused hydration. A lip tint that looks effortless and feels like nothing on your lips.",
    tags: ["Lips", "Tint", "Soft Glam"],
    scores: { lips: 4, tint: 5, softglam: 3, blush: 1 },
    step: { order: 5, name: "Peptide Lip Tint", detail: "Dab on for a flush of natural color" },
  },
  {
    id: "pocket_blush",
    name: "Pocket Blush",
    category: "Cheek Color",
    emoji: "🌸",
    desc: "A creamy, buildable blush in a sleek compact. Melts into skin for a natural-looking flush that lasts all day.",
    tags: ["Blush", "Soft Glam", "Creamy"],
    scores: { blush: 5, softglam: 4, dewy: 1, maximal: 1 },
    step: { order: 4, name: "Pocket Blush", detail: "Tap onto cheeks for a healthy flush" },
  },
  {
    id: "glazing_milk",
    name: "Glazing Milk",
    category: "Body Care",
    emoji: "🥛",
    desc: "A peptide-rich body serum that gives your skin a lit-from-within shimmer. Lightweight, fast-absorbing, and endlessly glowy.",
    tags: ["Body", "Glow", "Lightweight"],
    scores: { glow: 3, dewy: 3, lightweight: 3, maximal: 2 },
    step: { order: 6, name: "Glazing Milk", detail: "Smooth over body for an all-over glow" },
  },
  {
    id: "cleanser",
    name: "Pineapple Refresh Cleanser",
    category: "Cleanser",
    emoji: "🍍",
    desc: "A gentle, gel-to-foam cleanser infused with pineapple and glycolic acid. Removes impurities without stripping — just clean, happy skin.",
    tags: ["Cleanse", "Brightening", "Gentle"],
    scores: { brightening: 4, gentle: 3, hydration: 1, balanced: 2, mattify: 1 },
    step: { order: 1, name: "Pineapple Refresh Cleanser", detail: "Massage onto damp skin, rinse clean" },
  },
];

// ─── Aesthetic Profiles ──────────────────────────────────
const vibeProfiles = {
  cleanGirl:    { name: "Clean Girl Glow", tagline: "Minimal effort, maximum radiance", color1: "#FAE3DA", color2: "#FFF7F0", color3: "#E8B9A2", accent: "#C27E62", emojis: ["🤍", "☁️", "🧖", "🫧"] },
  glazedDonut:  { name: "Glazed Donut", tagline: "Shine bright like glass skin", color1: "#F9E4D4", color2: "#FFF0E8", color3: "#F5C8A8", accent: "#D4908A", emojis: ["🍩", "✨", "🪞", "💫"] },
  softGlam:     { name: "Soft Glam", tagline: "Polished, romantic, and always glowing", color1: "#F2D4C4", color2: "#FCEAE0", color3: "#D4908A", accent: "#8B6F47", emojis: ["🌸", "🎀", "💋", "🌺"] },
  coolMinimal:  { name: "Cool & Understated", tagline: "Effortlessly chic, quietly radiant", color1: "#E8DDD5", color2: "#F5F0EB", color3: "#C7B8AA", accent: "#5C4033", emojis: ["🖤", "🧊", "🕊️", "🌿"] },
};

// ─── State ───────────────────────────────────────────────
let currentQuestion = 0;
let answers = {};
let tagScores = {};

// ─── Navigation Helpers ──────────────────────────────────
function showPage(id) {
  document.querySelectorAll(".page").forEach((p) => {
    p.classList.remove("active", "fade-in");
  });
  const page = document.getElementById(id);
  page.classList.add("active");
  requestAnimationFrame(() => page.classList.add("fade-in"));
  window.scrollTo(0, 0);
}

// ─── Start Quiz ──────────────────────────────────────────
function startQuiz() {
  currentQuestion = 0;
  answers = {};
  tagScores = {};
  showPage("quiz");
  renderQuestion();
}

// ─── Render Question ─────────────────────────────────────
function renderQuestion() {
  const q = questions[currentQuestion];
  const wrapper = document.getElementById("quiz-question-wrapper");

  // Progress
  const pct = ((currentQuestion + 1) / questions.length) * 100;
  document.getElementById("progress-fill").style.width = pct + "%";
  document.getElementById("progress-label").textContent =
    `${currentQuestion + 1} / ${questions.length}`;

  // Build HTML
  const selectedIdx = answers[q.id] !== undefined ? answers[q.id] : -1;

  let optionsHTML = q.options
    .map(
      (opt, i) => `
    <div class="quiz-option ${i === selectedIdx ? "selected" : ""}" onclick="selectOption(${i})" id="opt-${i}">
      <span class="option-emoji">${opt.emoji}</span>
      <div class="option-content">
        <span class="option-label">${opt.label}</span>
        <span class="option-desc">${opt.desc}</span>
      </div>
      <div class="option-check"></div>
    </div>
  `
    )
    .join("");

  wrapper.innerHTML = `
    <div class="quiz-question">
      <p class="quiz-q-number">Question ${q.number} of ${questions.length}</p>
      <h2 class="quiz-q-text">${q.text}</h2>
      <div class="quiz-options">${optionsHTML}</div>
    </div>
  `;

  // Button states
  document.getElementById("btn-prev").disabled = currentQuestion === 0;
  const btnNext = document.getElementById("btn-next");
  btnNext.disabled = selectedIdx === -1;
  btnNext.innerHTML =
    currentQuestion === questions.length - 1
      ? `See My Results <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`
      : `Next <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`;
}

// ─── Select Option ───────────────────────────────────────
function selectOption(idx) {
  const q = questions[currentQuestion];
  answers[q.id] = idx;

  // Accumulate tags
  const opt = q.options[idx];
  for (const [tag, val] of Object.entries(opt.tags)) {
    tagScores[tag] = (tagScores[tag] || 0) + val;
  }

  // Visual feedback
  document.querySelectorAll(".quiz-option").forEach((el, i) => {
    el.classList.toggle("selected", i === idx);
  });

  document.getElementById("btn-next").disabled = false;
}

// ─── Navigate Questions ──────────────────────────────────
function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    showResults();
  }
}

function prevQuestion() {
  if (currentQuestion > 0) {
    // Remove tags from current answer before going back
    const q = questions[currentQuestion];
    if (answers[q.id] !== undefined) {
      const opt = q.options[answers[q.id]];
      for (const [tag, val] of Object.entries(opt.tags)) {
        tagScores[tag] = (tagScores[tag] || 0) - val;
      }
      delete answers[q.id];
    }
    currentQuestion--;
    renderQuestion();
  }
}

// ─── Show Results ────────────────────────────────────────
function showResults() {
  showPage("loading");

  setTimeout(() => {
    buildResults();
    showPage("results");
  }, 2400);
}

// ─── Build Results ───────────────────────────────────────
function buildResults() {
  // 1. Determine vibe profile
  const vibe = determineVibe();
  document.getElementById("results-vibe").textContent = `"${vibe.tagline}"`;

  // 2. Build mood board
  buildMoodBoard(vibe);

  // 3. Score and pick top products
  const recommended = getRecommendedProducts();

  // 4. Render product cards
  renderProducts(recommended);

  // 5. Build routine
  buildRoutine(recommended);
}

function determineVibe() {
  // Score each vibe profile based on tag affinity
  const vibeScores = {
    cleanGirl:   (tagScores.minimal || 0) * 2 + (tagScores.glow || 0) + (tagScores.dewy || 0) + (tagScores.lightweight || 0),
    glazedDonut: (tagScores.dewy || 0) * 2 + (tagScores.glow || 0) * 2 + (tagScores.hydration || 0),
    softGlam:    (tagScores.softglam || 0) * 2 + (tagScores.blush || 0) * 2 + (tagScores.lips || 0) + (tagScores.tint || 0),
    coolMinimal: (tagScores.cool || 0) * 2 + (tagScores.minimal || 0) + (tagScores.lightweight || 0),
  };

  let topVibe = "cleanGirl";
  let topScore = -1;
  for (const [key, score] of Object.entries(vibeScores)) {
    if (score > topScore) {
      topScore = score;
      topVibe = key;
    }
  }
  return vibeProfiles[topVibe];
}

function buildMoodBoard(vibe) {
  const board = document.getElementById("moodboard");

  // Generate keywords based on top tags
  const sortedTags = Object.entries(tagScores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([tag]) => tag);

  const keywordMap = {
    glow: "Radiance", dewy: "Dewy Skin", hydration: "Deep Hydration",
    minimal: "Minimalism", peptides: "Peptide Power", barrier: "Skin Barrier",
    brightening: "Brightening", lips: "Lip Obsessed", softglam: "Soft Glam",
    blush: "Flushed Cheeks", tint: "Tinted Lips", cool: "Cool Energy",
    lightweight: "Lightweight", mattify: "Matte Finish", gentle: "Gentle Care",
    gloss: "Glossy Finish", maximal: "Full Ritual", balanced: "Balance",
  };

  const tiles = [
    // Large color tile
    `<div class="moodboard-tile color-tile span-2 tall" style="--tile-color: linear-gradient(135deg, ${vibe.color1}, ${vibe.color3})">
      <div style="text-align:center">
        <div style="font-size:3.5rem; margin-bottom:12px">${vibe.emojis[0]}</div>
        <div style="font-family:var(--font-serif); font-size:1.6rem; color:${vibe.accent}">${vibe.name}</div>
      </div>
    </div>`,

    // Text tile
    `<div class="moodboard-tile text-tile">
      <div>
        <div class="tile-text">${keywordMap[sortedTags[0]] || "Your Glow"}</div>
        <div class="tile-subtext">Primary Focus</div>
      </div>
    </div>`,

    // Emoji tile
    `<div class="moodboard-tile emoji-tile">${vibe.emojis[1]}</div>`,

    // Color swatch
    `<div class="moodboard-tile color-tile" style="--tile-color: ${vibe.color2}">
      <span class="tile-keyword" style="color:${vibe.accent}">${keywordMap[sortedTags[1]] || "Glow"}</span>
    </div>`,

    // Text tile
    `<div class="moodboard-tile text-tile span-2">
      <div>
        <div class="tile-text">${vibe.tagline}</div>
        <div class="tile-subtext">Your Vibe ✦</div>
      </div>
    </div>`,

    // Emoji tile
    `<div class="moodboard-tile emoji-tile">${vibe.emojis[2]}</div>`,

    // Color swatch
    `<div class="moodboard-tile color-tile span-2" style="--tile-color: linear-gradient(90deg, ${vibe.color1}, ${vibe.color2})">
      <span class="tile-keyword" style="color:${vibe.accent}">${keywordMap[sortedTags[2]] || "Rhode"}</span>
    </div>`,

    // Emoji tile
    `<div class="moodboard-tile emoji-tile">${vibe.emojis[3]}</div>`,

    // Color tag tiles
    `<div class="moodboard-tile color-tile" style="--tile-color: ${vibe.color3}">
      <span class="tile-keyword">${keywordMap[sortedTags[3]] || "✦"}</span>
    </div>`,

    `<div class="moodboard-tile text-tile">
      <div>
        <div class="tile-text" style="font-size:1rem">Your Color Palette</div>
        <div style="display:flex; gap:8px; margin-top:10px; justify-content:center">
          <span style="width:28px; height:28px; border-radius:50%; background:${vibe.color1}; border:1px solid rgba(0,0,0,0.06)"></span>
          <span style="width:28px; height:28px; border-radius:50%; background:${vibe.color2}; border:1px solid rgba(0,0,0,0.06)"></span>
          <span style="width:28px; height:28px; border-radius:50%; background:${vibe.color3}; border:1px solid rgba(0,0,0,0.06)"></span>
          <span style="width:28px; height:28px; border-radius:50%; background:${vibe.accent}; border:1px solid rgba(0,0,0,0.06)"></span>
        </div>
      </div>
    </div>`,
  ];

  board.innerHTML = tiles.join("");
}

function getRecommendedProducts() {
  // Score each product against user's accumulated tag scores
  const scored = products.map((product) => {
    let score = 0;
    for (const [tag, weight] of Object.entries(product.scores)) {
      score += (tagScores[tag] || 0) * weight;
    }
    return { ...product, finalScore: score };
  });

  scored.sort((a, b) => b.finalScore - a.finalScore);

  // Return top 3 unique products
  return scored.slice(0, 3);
}

function renderProducts(recommended) {
  const grid = document.getElementById("products-grid");
  const maxScore = recommended[0].finalScore;

  grid.innerHTML = recommended
    .map((p, i) => {
      const matchPct = Math.round((p.finalScore / maxScore) * 100);
      return `
      <div class="product-card" style="animation-delay: ${i * 0.15}s">
        <span class="product-emoji">${p.emoji}</span>
        <h4 class="product-name">${p.name}</h4>
        <p class="product-category">${p.category}</p>
        <p class="product-desc">${p.desc}</p>
        <div class="product-tags">
          ${p.tags.map((t) => `<span class="product-tag">${t}</span>`).join("")}
        </div>
        <div class="product-match">${matchPct}% Match</div>
      </div>
    `;
    })
    .join("");
}

function buildRoutine(recommended) {
  const section = document.getElementById("routine-section");

  // Sort by step order
  const steps = recommended
    .map((p) => p.step)
    .sort((a, b) => a.order - b.order);

  section.innerHTML = `
    <h3 class="routine-title">Your Daily Routine</h3>
    <div class="routine-steps">
      ${steps
        .map(
          (s, i) => `
        <div class="routine-step">
          <div class="step-number">${i + 1}</div>
          <div class="step-info">
            <span class="step-name">${s.name}</span>
            <span class="step-detail">${s.detail}</span>
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  `;
}

// ─── Retake ──────────────────────────────────────────────
function retakeQuiz() {
  currentQuestion = 0;
  answers = {};
  tagScores = {};
  showPage("landing");
}
