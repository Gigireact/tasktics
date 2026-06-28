import { useParams } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { TAG_META, BORDER, BG_MAIN } from "../../constants";
import { initialProjects } from "../../data/seedData";

export default function ProjectDetails({projects}) {
  const { id } = useParams();

  const project = projects.find(
    p => p.id === Number(id)
  );

  if (!project) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: BG_MAIN }}
      >
        <h1 className="text-xl text-slate-400">
          Project not found
        </h1>
      </div>
    );
  }

  const meta = TAG_META[project.tag];

  return (
    <div
      className="min-h-screen p-6"
      style={{ background: BG_MAIN }}
    >
      <div
        className="max-w-4xl mx-auto rounded-3xl border overflow-hidden"
        style={{
          background: "linear-gradient(145deg,#111820,#0d1117)",
          borderColor: BORDER,
        }}
      >

        {/* Accent Bar */}
        <div
          className="h-2"
          style={{ background: project.color }}
        />

        <div className="p-8">

          {/* Status */}
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full mb-4"
            style={{
              background: meta.bg,
              color: meta.text
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: meta.dot }}
            />

            {project.tag}
          </span>

          {/* Title */}
          <h1 className="text-3xl font-bold text-slate-100 mb-2">
            {project.title}
          </h1>
          <p className="text-slate-700 leading-7 mb-6">
            {project.info || "No description provided."}
          </p>

          <p className="text-slate-500 mb-6">
            Created {project.time}
          </p>

          {/* Author */}
          <div className="flex items-center gap-3 mb-8">

            <Avatar
              initials={project.initials}
              color={project.color}
              size="md"
            />

            <div>
              <p className="font-semibold text-slate-100">
                {project.author}
              </p>

              <p className="text-sm text-slate-500">
                Project Owner
              </p>
            </div>

          </div>

          {/* Information */}
          <div
            className="border-t pt-6 space-y-4"
            style={{ borderColor: BORDER }}
          >

            <div className="flex justify-between">
              <span className="text-slate-500">
                Status
              </span>

              <span className="text-slate-200">
                {project.tag}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">
                Owner
              </span>

              <span className="text-slate-200">
                {project.author}
              </span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}