/* ========================================================
   RHODE — FIND YOUR GLOW
   Quiz engine, scoring, mood board & product recommender
   ======================================================== */

// ─── Quiz Data ───────────────────────────────────────────
const questions = [
  {
    id: "skin_type",
    number: 1,
    text: "Let\u2019s start with the basics \u2014 what\u2019s your skin type?",
    options: [
      { emoji: "\uD83D\uDCA7", label: "Oily", desc: "Shiny by midday, enlarged pores", tags: { mattify: 2, lightweight: 2 } },
      { emoji: "\uD83C\uDFDC\uFE0F", label: "Dry", desc: "Tight, flaky, craving moisture", tags: { hydration: 3, barrier: 2 } },
      { emoji: "\uD83C\uDF17", label: "Combination", desc: "Oily T-zone, dry cheeks", tags: { hydration: 1, lightweight: 1, barrier: 1 } },
      { emoji: "\u2601\uFE0F", label: "Normal", desc: "Balanced and low-maintenance", tags: { glow: 2, lightweight: 1 } },
    ],
  },
  {
    id: "skin_concern",
    number: 2,
    text: "What\u2019s your biggest skin concern right now?",
    options: [
      { emoji: "\u2728", label: "Dullness", desc: "I want that lit-from-within glow", tags: { glow: 3, brightening: 2 } },
      { emoji: "\uD83E\uDDF4", label: "Hydration", desc: "My skin always feels thirsty", tags: { hydration: 3, barrier: 2 } },
      { emoji: "\uD83D\uDD2C", label: "Fine Lines", desc: "Preventative anti-aging is key", tags: { peptides: 3, barrier: 1 } },
      { emoji: "\uD83C\uDF3F", label: "Breakouts", desc: "Keeping blemishes at bay", tags: { lightweight: 2, mattify: 2, gentle: 1 } },
    ],
  },
  {
    id: "aesthetic",
    number: 3,
    text: "Which aesthetic speaks to your soul?",
    options: [
      { emoji: "\uD83E\uDD0D", label: "Clean Girl", desc: "Minimal, dewy, effortless beauty", tags: { glow: 2, minimal: 3, dewy: 2 } },
      { emoji: "\uD83C\uDF69", label: "Glazed Donut", desc: "Ultra-shiny, glass-skin energy", tags: { glow: 3, dewy: 3, hydration: 1 } },
      { emoji: "\uD83C\uDF38", label: "Soft Glam", desc: "Polished yet natural & romantic", tags: { softglam: 3, lips: 1, blush: 2 } },
      { emoji: "\uD83D\uDDA4", label: "Effortless Cool", desc: "Undone, low-key, editorial", tags: { minimal: 2, lightweight: 2, cool: 2 } },
    ],
  },
  {
    id: "routine_steps",
    number: 4,
    text: "How many steps does your dream routine have?",
    options: [
      { emoji: "2\uFE0F\u20E3", label: "2 \u2013 3 Steps", desc: "Keep it beautifully simple", tags: { minimal: 3, lightweight: 1 } },
      { emoji: "4\uFE0F\u20E3", label: "4 \u2013 5 Steps", desc: "The perfect sweet spot", tags: { balanced: 2 } },
      { emoji: "6\uFE0F\u20E3", label: "6+ Steps", desc: "I love a full self-care ritual", tags: { maximal: 2, peptides: 1 } },
      { emoji: "\uD83E\uDD37", label: "Whatever works", desc: "Function over formula", tags: { balanced: 1, minimal: 1 } },
    ],
  },
  {
    id: "lip_look",
    number: 5,
    text: "Your go-to lip look?",
    options: [
      { emoji: "\uD83D\uDC8B", label: "Glossy & Juicy", desc: "Mirror-like, dewy shine", tags: { lips: 3, gloss: 3, dewy: 1 } },
      { emoji: "\uD83E\uDEE6", label: "Soft Tint", desc: "Just a hint of colour", tags: { lips: 2, tint: 3, softglam: 1 } },
      { emoji: "\uD83C\uDF51", label: "Peachy Nude", desc: "My-lips-but-better", tags: { lips: 2, tint: 2, minimal: 1 } },
      { emoji: "\uD83D\uDC44", label: "Bare & Hydrated", desc: "Nourished, no colour needed", tags: { lips: 3, hydration: 1, minimal: 1 } },
    ],
  },
  {
    id: "morning_vibe",
    number: 6,
    text: "Describe your morning routine energy.",
    options: [
      { emoji: "\u26A1", label: "Quick & Efficient", desc: "Five minutes or less", tags: { minimal: 3, lightweight: 1 } },
      { emoji: "\uD83E\uDDD6", label: "Self-Care Ritual", desc: "I savour every single step", tags: { maximal: 2, barrier: 1, peptides: 1 } },
      { emoji: "\u2615", label: "Somewhere In Between", desc: "A balanced, unhurried pace", tags: { balanced: 2 } },
      { emoji: "\uD83D\uDE34", label: "What morning routine?", desc: "Honestly, I wing it", tags: { minimal: 2, lightweight: 2 } },
    ],
  },
  {
    id: "skin_goal",
    number: 7,
    text: "If you could wake up with one skin goal achieved\u2026",
    options: [
      { emoji: "\uD83C\uDF1F", label: "Dewy Glow", desc: "Luminous from sunrise to sunset", tags: { glow: 3, dewy: 3 } },
      { emoji: "\uD83E\uDDCA", label: "Plump & Bouncy", desc: "Deeply hydrated, pillow-soft skin", tags: { hydration: 3, peptides: 2 } },
      { emoji: "\uD83E\uDE9E", label: "Even Tone", desc: "Smooth, uniform complexion", tags: { brightening: 3, gentle: 1 } },
      { emoji: "\uD83C\uDF6F", label: "Healthy Barrier", desc: "Calm, strong, resilient", tags: { barrier: 3, hydration: 1 } },
    ],
  },
  {
    id: "vibe_pick",
    number: 8,
    text: "Pick the vibe that feels most like you.",
    options: [
      { emoji: "\uD83D\uDD4A\uFE0F", label: "Minimal & Chic", desc: "Less is always, always more", tags: { minimal: 3, cool: 1 } },
      { emoji: "\uD83C\uDF3A", label: "Soft & Romantic", desc: "Dreamy, feminine energy", tags: { softglam: 3, blush: 2, lips: 1 } },
      { emoji: "\uD83D\uDD25", label: "Bold & Expressive", desc: "Maximalist by nature", tags: { maximal: 2, blush: 1, tint: 1 } },
      { emoji: "\uD83E\uDDCA", label: "Cool & Understated", desc: "Effortlessly put-together", tags: { cool: 3, minimal: 1 } },
    ],
  },
  {
    id: "season",
    number: 9,
    text: "Which season matches your energy?",
    options: [
      { emoji: "\uD83C\uDF37", label: "Spring", desc: "Fresh, renewing, full of bloom", tags: { brightening: 2, glow: 1, gentle: 1 } },
      { emoji: "\u2600\uFE0F", label: "Summer", desc: "Warm, radiant, carefree", tags: { glow: 2, dewy: 2, lightweight: 1 } },
      { emoji: "\uD83C\uDF42", label: "Autumn", desc: "Cozy, rich, grounding", tags: { barrier: 2, hydration: 1, softglam: 1 } },
      { emoji: "\u2744\uFE0F", label: "Winter", desc: "Crisp, refined, serene", tags: { hydration: 2, barrier: 2, cool: 1 } },
    ],
  },
  {
    id: "product_priority",
    number: 10,
    text: "What matters most to you in a product?",
    options: [
      { emoji: "\uD83D\uDD2C", label: "Ingredients", desc: "Peptides, ceramides \u2014 the works", tags: { peptides: 3, barrier: 1 } },
      { emoji: "\uD83E\uDEE7", label: "Texture", desc: "It has to feel incredible on skin", tags: { glow: 1, dewy: 1, hydration: 1, lightweight: 1 } },
      { emoji: "\uD83C\uDF80", label: "Aesthetic & Packaging", desc: "Beauty is in every detail", tags: { softglam: 1, blush: 1, tint: 1 } },
      { emoji: "\uD83D\uDD04", label: "Multi-Use", desc: "One product, endless possibilities", tags: { minimal: 2, balanced: 1, lips: 1 } },
    ],
  },
];

// ─── Product Database ────────────────────────────────────
const products = [
  {
    id: "glazing_fluid",
    name: "Peptide Glazing Fluid",
    category: "Serum",
    emoji: "\u2728",
    desc: "A lightweight, peptide-packed serum that delivers Rhode\u2019s signature glazed-donut glow. Plumps, hydrates, and preps skin for a dewy finish.",
    tags: ["Peptides", "Glow", "Lightweight"],
    scores: { glow: 4, dewy: 4, peptides: 3, lightweight: 3, hydration: 2, brightening: 1 },
    step: { order: 2, name: "Peptide Glazing Fluid", detail: "Apply 2\u20133 drops to clean skin for instant glow" },
  },
  {
    id: "barrier_cream",
    name: "Barrier Restore Cream",
    category: "Moisturizer",
    emoji: "\uD83E\uDDF4",
    desc: "A rich yet fast-absorbing moisturizer with peptides and ceramides to strengthen your skin barrier and lock in deep, lasting hydration.",
    tags: ["Barrier", "Hydration", "Peptides"],
    scores: { barrier: 5, hydration: 4, peptides: 3, gentle: 2 },
    step: { order: 3, name: "Barrier Restore Cream", detail: "Smooth over face to seal in moisture" },
  },
  {
    id: "lip_treatment",
    name: "Peptide Lip Treatment",
    category: "Lip Care",
    emoji: "\uD83D\uDC8B",
    desc: "The cult-favourite lip treatment that delivers peptide-powered hydration with a glossy, juicy, plumping finish. Your lips, but better.",
    tags: ["Lips", "Peptides", "Glossy"],
    scores: { lips: 5, gloss: 4, hydration: 2, peptides: 2, minimal: 1 },
    step: { order: 5, name: "Peptide Lip Treatment", detail: "Swipe on for glossy, nourished lips" },
  },
  {
    id: "lip_tint",
    name: "Peptide Lip Tint",
    category: "Lip Colour",
    emoji: "\uD83E\uDEE6",
    desc: "Sheer, buildable colour with peptide-infused hydration. Looks effortless and feels like absolutely nothing on your lips.",
    tags: ["Lips", "Tint", "Soft Glam"],
    scores: { lips: 4, tint: 5, softglam: 3, blush: 1 },
    step: { order: 5, name: "Peptide Lip Tint", detail: "Dab on for a natural flush of colour" },
  },
  {
    id: "pocket_blush",
    name: "Pocket Blush",
    category: "Cheek Colour",
    emoji: "\uD83C\uDF38",
    desc: "A creamy, buildable blush in a sleek compact. Melts into skin for a natural-looking flush that lasts from morning to night.",
    tags: ["Blush", "Soft Glam", "Creamy"],
    scores: { blush: 5, softglam: 4, dewy: 1, maximal: 1 },
    step: { order: 4, name: "Pocket Blush", detail: "Tap and blend onto cheeks for a healthy flush" },
  },
  {
    id: "glazing_milk",
    name: "Glazing Milk",
    category: "Body Care",
    emoji: "\uD83E\uDD5B",
    desc: "A peptide-rich body serum that gives your skin a lit-from-within luminosity. Lightweight, fast-absorbing, and endlessly glowy.",
    tags: ["Body", "Glow", "Lightweight"],
    scores: { glow: 3, dewy: 3, lightweight: 3, maximal: 2 },
    step: { order: 6, name: "Glazing Milk", detail: "Smooth over body for all-over radiance" },
  },
  {
    id: "cleanser",
    name: "Pineapple Refresh Cleanser",
    category: "Cleanser",
    emoji: "\uD83C\uDF4D",
    desc: "A gentle, gel-to-foam cleanser infused with pineapple and glycolic acid. Removes impurities without stripping \u2014 just clean, happy skin.",
    tags: ["Cleanse", "Brightening", "Gentle"],
    scores: { brightening: 4, gentle: 3, hydration: 1, balanced: 2, mattify: 1 },
    step: { order: 1, name: "Pineapple Refresh Cleanser", detail: "Massage onto damp skin, rinse with warm water" },
  },
];

// ─── Vibe Profiles ───────────────────────────────────────
const vibeProfiles = {
  cleanGirl: {
    name: "Clean Girl Glow",
    tagline: "Minimal effort, maximum radiance \u2014 your glow speaks for itself.",
    colors: ["#FAE8DA", "#FFF6EF", "#E2BDA3", "#B8734A"],
    emojis: ["\uD83E\uDD0D", "\u2601\uFE0F", "\uD83E\uDDD6", "\uD83E\uDEE7"],
  },
  glazedDonut: {
    name: "Glazed Donut",
    tagline: "Ultra-luminous, glass-skin energy \u2014 shine bright, always.",
    colors: ["#F0D5C0", "#FFF0EB", "#EDADA0", "#C9956F"],
    emojis: ["\uD83C\uDF69", "\u2728", "\uD83E\uDE9E", "\uD83D\uDCAB"],
  },
  softGlam: {
    name: "Soft Glam",
    tagline: "Polished, romantic, and always perfectly glowing.",
    colors: ["#FADDD3", "#FFF6EF", "#D88E80", "#7A6352"],
    emojis: ["\uD83C\uDF38", "\uD83C\uDF80", "\uD83D\uDC8B", "\uD83C\uDF3A"],
  },
  coolMinimal: {
    name: "Cool & Understated",
    tagline: "Effortlessly chic, quietly radiant \u2014 less is more, always.",
    colors: ["#EDE5DC", "#F8F3EE", "#C7B5A3", "#5B4535"],
    emojis: ["\uD83D\uDDA4", "\uD83E\uDDCA", "\uD83D\uDD4A\uFE0F", "\uD83C\uDF3F"],
  },
};

// ─── State ───────────────────────────────────────────────
let currentQ = 0;
let answers = {};
let tagScores = {};

// ─── Cursor Glow ─────────────────────────────────────────
document.addEventListener("mousemove", (e) => {
  const glow = document.getElementById("cursor-glow");
  if (glow) {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  }
});

// ─── Page Transitions ────────────────────────────────────
function showPage(id) {
  document.querySelectorAll(".page").forEach((p) => p.classList.remove("active"));
  const page = document.getElementById(id);
  page.classList.add("active");
  window.scrollTo({ top: 0, behavior: "instant" });
}

// ─── Start Quiz ──────────────────────────────────────────
function startQuiz() {
  currentQ = 0;
  answers = {};
  tagScores = {};
  showPage("quiz");
  renderQuestion();
}

// ─── Render Question ─────────────────────────────────────
function renderQuestion() {
  const q = questions[currentQ];
  const content = document.getElementById("quiz-content");

  const pct = ((currentQ + 1) / questions.length) * 100;
  document.getElementById("progress-fill").style.width = pct + "%";
  document.getElementById("progress-text").textContent =
    String(currentQ + 1).padStart(2, "0") + " / " + String(questions.length).padStart(2, "0");

  const selIdx = answers[q.id] !== undefined ? answers[q.id] : -1;

  const optHTML = q.options
    .map(
      (o, i) => `
    <div class="q-option ${i === selIdx ? "selected" : ""}" onclick="selectOpt(${i})">
      <span class="q-emoji">${o.emoji}</span>
      <div class="q-text-wrap">
        <span class="q-label">${o.label}</span>
        <span class="q-desc">${o.desc}</span>
      </div>
      <div class="q-radio"></div>
    </div>`
    )
    .join("");

  content.innerHTML = `
    <div class="quiz-question">
      <p class="q-number">Question ${String(q.number).padStart(2, "0")}</p>
      <h2 class="q-text">${q.text}</h2>
      <div class="q-options">${optHTML}</div>
    </div>`;

  document.getElementById("btn-prev").disabled = currentQ === 0;
  const btnN = document.getElementById("btn-next");
  btnN.disabled = selIdx === -1;
  btnN.textContent = currentQ === questions.length - 1 ? "See My Results \u2192" : "Next \u2192";
}

// ─── Select Option ───────────────────────────────────────
function selectOpt(idx) {
  const q = questions[currentQ];

  // If previously answered, undo old tags
  if (answers[q.id] !== undefined) {
    const prev = q.options[answers[q.id]];
    for (const [t, v] of Object.entries(prev.tags)) tagScores[t] = (tagScores[t] || 0) - v;
  }

  answers[q.id] = idx;
  const opt = q.options[idx];
  for (const [t, v] of Object.entries(opt.tags)) tagScores[t] = (tagScores[t] || 0) + v;

  document.querySelectorAll(".q-option").forEach((el, i) => el.classList.toggle("selected", i === idx));
  document.getElementById("btn-next").disabled = false;
}

// ─── Navigate ────────────────────────────────────────────
function nextQuestion() {
  if (currentQ < questions.length - 1) {
    currentQ++;
    renderQuestion();
  } else {
    showResults();
  }
}

function prevQuestion() {
  if (currentQ > 0) {
    currentQ--;
    renderQuestion();
  }
}

// ─── Results ─────────────────────────────────────────────
function showResults() {
  showPage("loading");
  setTimeout(() => {
    buildResults();
    showPage("results");
  }, 2600);
}

function buildResults() {
  const vibe = pickVibe();
  document.getElementById("rh-tagline").textContent = vibe.tagline;

  buildMoodGrid(vibe);
  const recs = getTopProducts();
  renderProductCards(recs);
  buildRoutine(recs);
}

function pickVibe() {
  const s = {
    cleanGirl:   (tagScores.minimal || 0) * 2.5 + (tagScores.glow || 0) + (tagScores.dewy || 0) + (tagScores.lightweight || 0),
    glazedDonut: (tagScores.dewy || 0) * 2.5 + (tagScores.glow || 0) * 2 + (tagScores.hydration || 0),
    softGlam:    (tagScores.softglam || 0) * 2.5 + (tagScores.blush || 0) * 2 + (tagScores.lips || 0) + (tagScores.tint || 0),
    coolMinimal: (tagScores.cool || 0) * 2.5 + (tagScores.minimal || 0) + (tagScores.lightweight || 0),
  };
  let best = "cleanGirl", hi = -1;
  for (const [k, v] of Object.entries(s)) { if (v > hi) { hi = v; best = k; } }
  return vibeProfiles[best];
}

// ─── Keyword Map ─────────────────────────────────────────
const kwMap = {
  glow: "Radiance", dewy: "Dewy Skin", hydration: "Hydration",
  minimal: "Minimalism", peptides: "Peptide Power", barrier: "Skin Barrier",
  brightening: "Brightening", lips: "Lip Obsessed", softglam: "Soft Glam",
  blush: "Flushed Cheeks", tint: "Tinted Lips", cool: "Cool Energy",
  lightweight: "Lightweight", mattify: "Matte Finish", gentle: "Gentle Care",
  gloss: "Glossy Finish", maximal: "Full Ritual", balanced: "Balance",
};

function buildMoodGrid(vibe) {
  const grid = document.getElementById("mood-grid");
  const topTags = Object.entries(tagScores).sort((a, b) => b[1] - a[1]).slice(0, 6).map(([t]) => t);
  const c = vibe.colors;

  grid.innerHTML = `
    <div class="m-tile m-color m-span2 m-tall" style="background:linear-gradient(145deg,${c[0]},${c[2]})">
      <div style="text-align:center">
        <div style="font-size:3.2rem;margin-bottom:14px">${vibe.emojis[0]}</div>
        <div style="font-family:var(--font-display);font-size:1.5rem;color:${c[3]};font-weight:400">${vibe.name}</div>
      </div>
    </div>
    <div class="m-tile m-text">
      <div>
        <div class="mt-text">${kwMap[topTags[0]] || "Your Glow"}</div>
        <div class="mt-sub">primary focus</div>
      </div>
    </div>
    <div class="m-tile m-emoji">${vibe.emojis[1]}</div>
    <div class="m-tile m-color" style="background:${c[1]}">
      <span class="mt-keyword" style="color:${c[3]}">${kwMap[topTags[1]] || "Glow"}</span>
    </div>
    <div class="m-tile m-text m-span3">
      <div>
        <div class="mt-text" style="font-style:italic;font-family:var(--font-serif);font-size:1.3rem">\u201C${vibe.tagline}\u201D</div>
        <div class="mt-sub">your vibe \u2726</div>
      </div>
    </div>
    <div class="m-tile m-emoji">${vibe.emojis[2]}</div>
    <div class="m-tile m-color m-span2" style="background:linear-gradient(90deg,${c[0]},${c[1]})">
      <span class="mt-keyword" style="color:${c[3]}">${kwMap[topTags[2]] || "Rhode"}</span>
    </div>
    <div class="m-tile m-emoji">${vibe.emojis[3]}</div>
    <div class="m-tile m-color" style="background:${c[2]}">
      <span class="mt-keyword">${kwMap[topTags[3]] || "\u2726"}</span>
    </div>
    <div class="m-tile m-text">
      <div>
        <div class="mt-text" style="font-size:0.92rem">Your Palette</div>
        <div class="m-palette">
          ${c.map(cl => `<span class="m-swatch" style="background:${cl}"></span>`).join("")}
        </div>
      </div>
    </div>
  `;
}

function getTopProducts() {
  const scored = products.map((p) => {
    let s = 0;
    for (const [t, w] of Object.entries(p.scores)) s += (tagScores[t] || 0) * w;
    return { ...p, finalScore: s };
  });
  scored.sort((a, b) => b.finalScore - a.finalScore);
  return scored.slice(0, 3);
}

function renderProductCards(recs) {
  const row = document.getElementById("products-row");
  const max = recs[0].finalScore;
  row.innerHTML = recs
    .map(
      (p) => `
    <div class="p-card">
      <span class="p-emoji">${p.emoji}</span>
      <h4 class="p-name">${p.name}</h4>
      <p class="p-cat">${p.category}</p>
      <p class="p-desc">${p.desc}</p>
      <div class="p-tags">${p.tags.map((t) => `<span class="p-tag">${t}</span>`).join("")}</div>
      <div class="p-match">${Math.round((p.finalScore / max) * 100)}% Match</div>
    </div>`
    )
    .join("");
}

function buildRoutine(recs) {
  const wrap = document.getElementById("routine-wrap");
  const steps = recs.map((p) => p.step).sort((a, b) => a.order - b.order);
  wrap.innerHTML = `
    <h3 class="r-title">Your Daily Routine</h3>
    <div class="r-steps">
      ${steps.map((s, i) => `
        <div class="r-step">
          <div class="r-num">${i + 1}</div>
          <div class="r-info">
            <span class="r-name">${s.name}</span>
            <span class="r-detail">${s.detail}</span>
          </div>
        </div>`).join("")}
    </div>`;
}

// ─── Retake ──────────────────────────────────────────────
function retakeQuiz() {
  currentQ = 0;
  answers = {};
  tagScores = {};
  showPage("landing");
}
