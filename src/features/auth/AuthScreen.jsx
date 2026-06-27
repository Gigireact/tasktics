import { useState } from "react";
import Avatar from "../../components/Avatar";
import LimeBtn from "../../components/LimeBtn";
import { LIME_GRAD, BG_MAIN, BG_CARD, BG_INPUT, BORDER2, AVATAR_COLORS, INPUT_CLS } from "../../constants";

/**
 * Full-page auth screen with toggling Login / Sign Up tabs.
 * @param {function} onAuth - Called with { name, email } once the user authenticates.
 */
export default function AuthScreen({ onAuth }) {
  const [mode, setMode]         = useState("login"); // "login" | "signup"
  const [name, setName]         = useState("");
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm]   = useState("");
  const [error, setError]       = useState("");

  // Clear all fields when switching tabs
  const switchMode = (m) => {
    setMode(m);
    setName(""); setEmail(""); setPassword(""); setConfirm(""); setError("");
  };

  const handleSubmit = () => {
    setError("");

    if (mode === "signup") {
      if (!name.trim())           return setError("Please enter your name.");
      if (!email.includes("@"))   return setError("Enter a valid email address.");
      if (password.length < 6)    return setError("Password must be at least 6 characters.");
      if (password !== confirm)   return setError("Passwords don't match.");
      onAuth({ name: name.trim(), email: email.trim() });
    } else {
      if (!email.trim() || !password.trim()) return setError("Please fill in all fields.");
      // Demo: derive a display name from the email username
      const displayName = email
        .split("@")[0]
        .replace(/[._]/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
      onAuth({ name: displayName, email: email.trim() });
    }
  };

  // Live avatar preview initials while typing name
  const previewInitials =
    name.trim().split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2) || "?";
  const previewColor = AVATAR_COLORS[previewInitials.charCodeAt(0) % AVATAR_COLORS.length];

  return (
    <div className="min-h-screen flex justify-center px-4 py-8 overflow-y-auto" style={{ background: BG_MAIN }}>
      <div className="w-full max-w-md">

        {/* ── Logo ── */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3"
               style={{ background: LIME_GRAD }}>
            <svg className="w-6 h-6" style={{ color: BG_MAIN }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2
                   M9 5a2 2 0 002 2h2a2 2 0 002-2
                   M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-slate-100 tracking-tight">Tasktics</h1>
          <p className="text-slate-500 text-sm mt-1">
            {mode === "login"
              ? "Welcome back — sign in to continue."
              : "Create your account to get started."}
          </p>
        </div>

        {/* ── Card ── */}
        <div className="rounded-2xl border overflow-hidden" style={{ background: BG_CARD, borderColor: BORDER2 }}>

          {/* Tab switcher */}
          <div className="flex border-b" style={{ borderColor: BORDER2 }}>
            {["login", "signup"].map((m) => (
              <button
                key={m}
                onClick={() => switchMode(m)}
                className="flex-1 py-3.5 text-sm font-semibold transition relative"
                style={{ color: mode === m ? "#a3e635" : "#64748b" }}
              >
                {m === "login" ? "Log In" : "Sign Up"}
                {mode === m && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-t"
                        style={{ background: LIME_GRAD }} />
                )}
              </button>
            ))}
          </div>

          {/* ── Form fields ── */}
          <div className="px-6 py-6 space-y-4">

            {/* Avatar preview — only on sign up once name is typed */}
            {mode === "signup" && name.trim() && (
              <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl" style={{ background: "#111820" }}>
                <Avatar initials={previewInitials} color={previewColor} size="sm" />
                <p className="text-sm text-slate-400">
                  Your profile will appear as{" "}
                  <span className="text-slate-200 font-medium">{name.trim()}</span>
                </p>
              </div>
            )}

            {mode === "signup" && (
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-wide">
                  Full name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Mario Plummer"
                  className={INPUT_CLS}
                  style={{ background: BG_INPUT }}
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-wide">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="mario@planforge.io"
                className={INPUT_CLS}
                style={{ background: BG_INPUT }}
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-wide">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className={INPUT_CLS}
                style={{ background: BG_INPUT }}
              />
            </div>

            {mode === "signup" && (
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-wide">
                  Confirm password
                </label>
                <input
                  type="password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  placeholder="••••••••"
                  className={INPUT_CLS}
                  style={{ background: BG_INPUT }}
                />
              </div>
            )}

            {/* Inline error */}
            {error && (
              <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-3 py-2">
                {error}
              </p>
            )}

            <LimeBtn onClick={handleSubmit} className="w-full py-2.5 text-sm mt-1">
              {mode === "login" ? "Log In" : "Create Account"}
            </LimeBtn>

            {/* Switch-mode link */}
            {mode === "login" ? (
              <p className="text-center text-xs text-slate-600">
                Don't have an account?{" "}
                <button onClick={() => switchMode("signup")}
                  className="font-semibold transition" style={{ color: "#a3e635" }}>
                  Sign up free
                </button>
              </p>
            ) : (
              <p className="text-center text-xs text-slate-600">
                Already have an account?{" "}
                <button onClick={() => switchMode("login")}
                  className="font-semibold transition" style={{ color: "#a3e635" }}>
                  Log in
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
