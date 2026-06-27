// ─── Design tokens ────────────────────────────────────────────────────────────
export const LIME_GRAD = "linear-gradient(135deg,#a3e635,#4ade80)";
export const BG_MAIN   = "#0d1117";
export const BG_CARD   = "#0a0d12";
export const BG_INPUT  = "#161b22";
export const BORDER    = "#1e2530";
export const BORDER2   = "#2a3040";

// ─── Colours cycled through avatars and card accents ──────────────────────────
export const AVATAR_COLORS = ["#a3e635","#4ade80","#34d399","#fbbf24","#86efac","#bef264"];
export const CARD_ACCENTS  = ["#a3e635","#4ade80","#34d399","#fbbf24","#86efac","#bef264"];

// ─── Status tag appearance ────────────────────────────────────────────────────
export const TAG_META = {
  Active:    { dot: "#a3e635", bg: "rgba(163,230,53,0.1)",  text: "#a3e635" },
  Planning:  { dot: "#4ade80", bg: "rgba(74,222,128,0.1)",  text: "#4ade80" },
  Completed: { dot: "#34d399", bg: "rgba(52,211,153,0.1)",  text: "#34d399" },
  "On Hold": { dot: "#fbbf24", bg: "rgba(251,191,36,0.1)",  text: "#fbbf24" },
};

// ─── Shared Tailwind input class string ───────────────────────────────────────
export const INPUT_CLS =
  "w-full px-3.5 py-2.5 rounded-xl border text-sm transition focus:outline-none focus:ring-2 " +
  "border-[#2a3040] text-slate-200 placeholder:text-slate-600 " +
  "focus:ring-lime-500/30 focus:border-lime-500/50";
