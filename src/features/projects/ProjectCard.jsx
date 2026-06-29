import Avatar from "../../components/Avatar";
import { TAG_META, BORDER } from "../../constants";
import {useNavigate} from "react-router-dom";

/**
 * Card representing a single project in the list.
 * @param {object}   project  - Project data object.
 * @param {function} onDelete - Called with project.id when the delete button is clicked.
 * @param {string}   accent   - Hex colour for the left edge bar.
 */
export default function ProjectCard({ project, onDelete, accent }) {
  const meta = TAG_META[project.tag] || TAG_META["Active"];

  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/projects/${project.id}`)}
      className="group relative rounded-2xl border hover:border-[#2e3d30] transition-all duration-200 overflow-hidden cursor-pointer"
      style={{ background: "linear-gradient(145deg,#111820,#0d1117)", borderColor: BORDER }}
    >
      {/* Coloured left edge bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl" style={{ background: accent }} />

      <div className="pl-5 pr-4 py-4 flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">

          {/* Status tag */}
          <span
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2"
            style={{ background: meta.bg, color: meta.text }}
          >
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: meta.dot }} />
            {project.tag}
          </span>

          {/* Title */}
          <h3 className="text-slate-100 font-semibold text-base leading-snug mb-3 truncate">
            {project.title}
          </h3>


          {/* Author row */}
          <div className="flex items-center justify-between">

            {/* Left side */}
            <div className="flex items-center gap-2">
              <Avatar
                initials={project.initials}
                color={project.color}
                size="sm"
              />
              <span className="text-sm font-medium text-slate-300">
                {project.author}
              </span>
            </div>

            {/* Right side */}
            <div className="text-right">
              <p className="text-xs text-slate-600">
                {project.time}
              </p>

              <p className="text-xs text-slate-500 truncate">
                Click to view details
              </p>
            </div>

          </div>
        </div>

        {/* Delete button — only visible on hover */}
        <button
          onClick={(e) => { e.stopPropagation(); onDelete(project.id); }}
          className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity p-1.5 rounded-lg hover:bg-red-500/10 text-slate-700 hover:text-red-400 flex-shrink-0 mt-1"        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7
                 m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
}
