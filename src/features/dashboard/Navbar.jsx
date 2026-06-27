import { useState } from "react";
import Avatar from "../../components/Avatar";
import LimeBtn from "../../components/LimeBtn";
import { LIME_GRAD, BG_MAIN, BORDER, BORDER2, AVATAR_COLORS } from "../../constants";

/**
 * Sticky top navigation bar.
 * @param {object}   user           - { name, email } of the logged-in user.
 * @param {function} onNewProject   - Opens the New Project modal.
 * @param {function} onLogout       - Logs the user out.
 */
export default function Navbar({ user, onNewProject, onLogout }) {
  const [showMenu, setShowMenu] = useState(false);

  const initials = user.name.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2);
  const avatarColor = AVATAR_COLORS[initials.charCodeAt(0) % AVATAR_COLORS.length];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{ background: "rgba(13,17,23,0.88)", backdropFilter: "blur(12px)", borderColor: BORDER }}
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">

        {/* ── Logo ── */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: LIME_GRAD }}>
            <svg className="w-4 h-4" style={{ color: BG_MAIN }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2
                   M9 5a2 2 0 002 2h2a2 2 0 002-2
                   M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <span className="font-bold text-lg tracking-tight text-slate-100">Tasktics</span>
        </div>

        {/* ── Right-side actions ── */}
        <nav className="flex items-center gap-2">
          <LimeBtn onClick={onNewProject} className="flex items-center gap-2 px-4 py-2 text-sm">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
            </svg>
            New Project
          </LimeBtn>

          {/* ── User avatar + dropdown ── */}
          <div className="relative">
            <button
              onClick={() => setShowMenu((v) => !v)}
              className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm transition ml-1"
              style={{ background: LIME_GRAD, color: BG_MAIN }}
            >
              {initials}
            </button>

            {showMenu && (
              <div
                className="absolute right-0 mt-2 w-52 rounded-2xl shadow-2xl border py-1.5 overflow-hidden"
                style={{ background: BG_MAIN, borderColor: BORDER2 }}
              >
                {/* User info */}
                <div className="px-4 py-3 border-b mb-1 flex items-center gap-3" style={{ borderColor: BORDER2 }}>
                  <Avatar initials={initials} color={avatarColor} size="sm" />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-100 truncate">{user.name}</p>
                    <p className="text-xs text-slate-500 truncate">{user.email}</p>
                  </div>
                </div>

                {/* Log out */}
                <button
                  onClick={() => { setShowMenu(false); onLogout(); }}
                  className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 transition flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Log out
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
