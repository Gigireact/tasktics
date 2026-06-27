import { BG_MAIN } from "../constants";

/**
 * Circular avatar showing a user's initials.
 * @param {string} initials - Up to 2 characters shown inside the circle.
 * @param {string} color    - Background hex colour.
 * @param {"sm"|"md"|"lg"} size
 */
export default function Avatar({ initials, color, size = "sm" }) {
  const sizeClass = {
    sm: "w-8 h-8 text-xs",
    md: "w-9 h-9 text-sm",
    lg: "w-10 h-10 text-sm",
  }[size];

  return (
    <div
      className={`${sizeClass} rounded-full flex items-center justify-center font-bold flex-shrink-0`}
      style={{ backgroundColor: color, color: BG_MAIN }}
    >
      {initials}
    </div>
  );
}
