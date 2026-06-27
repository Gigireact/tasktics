import { useState } from "react";
import Navbar from "./Navbar";
import ProjectList from "../projects/ProjectList";
import NewProjectModal from "../projects/NewProjectModal";
import NotificationsPanel from "../notifications/NotificationsPanel";
import { BG_MAIN } from "../../constants";
import { initialProjects, initialNotifications } from "../../data/seedData";

/**
 * The main dashboard page shown after login.
 * Owns all project and notification state and passes actions down to children.
 * @param {object}   user     - Logged-in user { name, email }.
 * @param {function} onLogout - Called when the user logs out.
 */
export default function Dashboard({ user, onLogout }) {
  const [projects, setProjects]           = useState(initialProjects);
  const [notifications, setNotifications] = useState(initialNotifications);
  const [showModal, setShowModal]         = useState(false);

  const handleAddProject = ({ title, author, initials, color, tag }) => {
    const now  = new Date();
    const time = `Today at ${now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;

    setProjects((prev) => [{ id: Date.now(), title, author, initials, color, time, tag }, ...prev]);
    setNotifications((prev) => [
      { id: Date.now(), user: author, userColor: color, action: "Added a new project", time: "just now" },
      ...prev,
    ]);
  };

  const handleDeleteProject = (id) => setProjects((prev) => prev.filter((p) => p.id !== id));
  const handleClearNotifications = () => setNotifications([]);

  return (
    <div className="min-h-screen font-sans" style={{ background: BG_MAIN }}>

      <Navbar user={user} onNewProject={() => setShowModal(true)} onLogout={onLogout} />

      <main className="max-w-6xl mx-auto px-5 pt-18 pb-8">
        {/* Page heading */}
        <div className="mb-7">
          <h1 className="text-2xl font-bold text-slate-100">Dashboard</h1>
          <p className="text-slate-600 text-sm mt-0.5">
            {projects.length} project{projects.length !== 1 ? "s" : ""} running
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ProjectList
              projects={projects}
              onDelete={handleDeleteProject}
              onCreateFirst={() => setShowModal(true)}
            />
          </div>

          <div className="lg:col-span-1">
            <NotificationsPanel
              notifications={notifications}
              onClearAll={handleClearNotifications}
            />
          </div>
        </div>
      </main>

      {showModal && (
        <NewProjectModal
          onClose={() => setShowModal(false)}
          onAdd={handleAddProject}
          authorName={user.name}
        />
      )}
    </div>
  );
}
