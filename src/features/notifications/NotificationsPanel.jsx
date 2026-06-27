import Avatar from "../../components/Avatar";
import { BG_CARD, BORDER } from "../../constants";

/**
 * Right-hand sticky panel showing recent activity notifications.
 * @param {Array}    notifications  - Array of notification objects.
 * @param {function} onClearAll     - Clears all notifications.
 */
export default function NotificationsPanel({ notifications, onClearAll }) {
  return (
    <div
      className="rounded-2xl border overflow-hidden sticky top-24"
      style={{ background: BG_CARD, borderColor: BORDER }}
    >
      {/* Header */}
      <div className="px-5 py-4 border-b flex items-center justify-between" style={{ borderColor: BORDER }}>
        <h2 className="text-sm font-semibold text-slate-300">Notifications</h2>
        {notifications.length > 0 && (
          <span
            className="text-xs font-bold rounded-full px-2 py-0.5"
            style={{ background: "rgba(163,230,53,0.12)", color: "#a3e635" }}
          >
            {notifications.length}
          </span>
        )}
      </div>

      {/* List */}
      <div className="divide-y divide-[#161b22]">
        {notifications.length === 0 ? (
          <div className="px-5 py-8 text-center">
            <p className="text-slate-600 text-sm">All caught up!</p>
          </div>
        ) : (
          notifications.map((n) => (
            <div key={n.id} className="flex gap-3 px-5 py-3.5 hover:bg-white/[0.02] transition-colors">
              <Avatar
                initials={n.user.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                color={n.userColor}
                size="sm"
              />
              <div className="min-w-0 flex-1">
                <p className="text-sm leading-snug">
                  <span className="font-semibold" style={{ color: n.userColor }}>{n.user}</span>{" "}
                  <span className="text-slate-500">{n.action}</span>
                </p>
                <p className="text-xs text-slate-700 mt-0.5">{n.time}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Clear all footer */}
      {notifications.length > 0 && (
        <div className="px-5 py-3 border-t" style={{ borderColor: "#161b22" }}>
          <button
            onClick={onClearAll}
            className="text-xs font-medium text-slate-600 hover:text-slate-400 transition"
          >
            Clear all
          </button>
        </div>
      )}
    </div>
  );
}
