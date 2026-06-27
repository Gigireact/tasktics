import ProjectCard from "./ProjectCard";
import { BG_CARD, BG_INPUT, BORDER, CARD_ACCENTS } from "../../constants";

/**
 * The left-hand column: renders all project cards, or an empty state CTA.
 * @param {Array}    projects      - Array of project objects.
 * @param {function} onDelete      - Passed down to each ProjectCard.
 * @param {function} onCreateFirst - Called when the empty-state link is clicked.
 */
export default function ProjectList({ projects, onDelete, onCreateFirst }) {
  if (projects.length === 0) {
    return (
      <div
        className="rounded-2xl border-2 border-dashed p-12 text-center"
        style={{ background: BG_CARD, borderColor: BORDER }}
      >
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3"
          style={{ background: BG_INPUT }}
        >
          <svg className="w-6 h-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2
                 M9 5a2 2 0 002 2h2a2 2 0 002-2
                 M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <p className="text-slate-400 font-medium mb-1">No projects yet</p>
        <p className="text-slate-600 text-sm mb-4">Create your first project to get started.</p>
        <button
          onClick={onCreateFirst}
          className="text-sm font-semibold underline underline-offset-2 transition"
          style={{ color: "#a3e635" }}
        >
          Create a project
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {projects.map((project, i) => (
        <ProjectCard
          key={project.id}
          project={project}
          onDelete={onDelete}
          accent={CARD_ACCENTS[i % CARD_ACCENTS.length]}
        />
      ))}
    </div>
  );
}
