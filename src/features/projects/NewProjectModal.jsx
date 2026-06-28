import { useState } from "react";
import LimeBtn from "../../components/LimeBtn";
import { LIME_GRAD, BG_MAIN, BG_CARD, BG_INPUT, BORDER2, AVATAR_COLORS, TAG_META, INPUT_CLS } from "../../constants";

/**
 * Modal dialog for creating a new project.
 * @param {function} onClose     - Closes the modal without saving.
 * @param {function} onAdd       - Called with the new project data object.
 * @param {string}   authorName  - Pre-filled from the logged-in user.
 */
export default function NewProjectModal({ onClose, onAdd, authorName }) {
  const [title, setTitle] = useState("");
  const [tag, setTag]     = useState("Active");
  const [info, setInfo] = useState("");

  const handleSubmit = () => {
    if (!title.trim()) return;
    const initials = authorName.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2);
    const color    = AVATAR_COLORS[Math.floor(Math.random() * AVATAR_COLORS.length)];
    onAdd({ title: title.trim(), author: authorName, initials, color, tag, info: info.trim(), });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div
        className="rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden border"
        style={{ background: BG_MAIN, borderColor: BORDER2 }}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b flex items-center justify-between" style={{ borderColor: BORDER2 }}>
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: LIME_GRAD }}>
              <svg className="w-3.5 h-3.5" style={{ color: BG_MAIN }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h2 className="text-base font-semibold text-slate-100">New Project</h2>
          </div>
          <button
            onClick={onClose}
            className="text-slate-600 hover:text-slate-300 transition p-1 rounded-lg hover:bg-white/5"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Fields */}
        <div className="px-6 py-5 space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-wide">
              Project title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Website Redesign"
              className={INPUT_CLS}
              style={{ background: BG_INPUT }}
            />
          </div>

           {/* Description */}
          <div>

            <label className="block text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-wide">
              Description
            </label>

            <textarea
              rows={4}
              value={info}
              onChange={(e) => setInfo(e.target.value)}
              placeholder="Describe your project..."
              className={`${INPUT_CLS} resize-none`}
              style={{ background: BG_INPUT }}
            />

          </div>

          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-wide">Status</label>
            <select
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              className={INPUT_CLS + " cursor-pointer"}
              style={{ background: BG_INPUT }}
            >
              {Object.keys(TAG_META).map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t flex gap-3 justify-end" style={{ background: BG_CARD, borderColor: BORDER2 }}>
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-200 hover:bg-white/5 rounded-xl transition"
          >
            Cancel
          </button>
          <LimeBtn onClick={handleSubmit} disabled={!title.trim()} className="px-5 py-2 text-sm">
            Create project
          </LimeBtn>
        </div>
      </div>
    </div>
  );
}
