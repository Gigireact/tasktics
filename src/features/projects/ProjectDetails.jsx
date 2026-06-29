import { useParams } from "react-router-dom";
import { useState } from "react";
import Avatar from "../../components/Avatar";
import { TAG_META, BORDER, BG_MAIN } from "../../constants";
import { initialProjects } from "../../data/seedData";

export default function ProjectDetails({projects, setProjects}) {
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

  const [editing, setEditing] = useState(false);

    const [title, setTitle] = useState(project.title);
    const [info, setInfo] = useState(project.info || "");


  const handleSave = () => {

  setProjects(prev =>
    prev.map(p =>
      p.id === project.id
        ? {
            ...p,
            title,
            info
          }
        : p
    )
  );

  setEditing(false);
};

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

        <div className="p-8 whitespace-pre-wrap ">

          {/* Title */}

          {editing ? (
            <>
                <input
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                className="w-full rounded-xl p-3 mb-4 bg-[#161b22] text-white"
                />

                <textarea
                value={info}
                onChange={(e)=>setInfo(e.target.value)}
                rows={6}
                className="w-full rounded-xl p-3 bg-[#161b22] text-white"
                />

                <button
                    onClick={handleSave}
                    className="block mx-auto mt-4 mb-4 px-4 py-2 rounded-xl bg-lime-400 text-black font-semibold">
                    Save
                </button>

            </>

            ) : (

            <>
                <div className="flex items-start justify-between gap-4 mb-6">

                    <div className="flex-1">
                    <h1 className="text-3xl font-bold text-lime-400 mb-2">
                      {project.title}
                    </h1>

                    <p className="text-white whitespace-pre-wrap">
                      {project.info || "No description provided."}
                    </p>
                    </div>

                    <button
                    onClick={() => setEditing(true)}
                    className="p-2 rounded-lg hover:bg-[#161b22] text-slate-400 hover:text-lime-400 transition">
                    ✏️
                    </button>
                </div>
            </>
            )}


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

            <div className="flex justify-between mt-0">
              <span className="text-slate-500">
                Created
              </span>

              <span className="text-slate-200">
                {project.time}
              </span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}