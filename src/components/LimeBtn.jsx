import { LIME_GRAD, BG_MAIN } from "../constants";

/**
 * Primary action button with the lime-to-green gradient.
 * Accepts any extra Tailwind classes via `className` for sizing / spacing.
 */
export default function LimeBtn({ onClick, disabled, children, className = "" }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`font-bold rounded-xl transition disabled:opacity-30 disabled:cursor-not-allowed ${className}`}
      style={{ background: LIME_GRAD, color: BG_MAIN }}
    >
      {children}
    </button>
  );
}
