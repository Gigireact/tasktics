import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import AuthScreen from './features/auth/AuthScreen';
import Dashboard from './features/dashboard/Dashboard';
import ProjectDetails from './features/projects/ProjectDetails';
import { initialProjects } from "./data/seedData";

export default function App() {
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState(initialProjects);

  return (
    <Routes>

      <Route
        path="/"
        element={
          user
            ? <Navigate to="/dashboard" />
            : <AuthScreen onAuth={setUser} />
        }
      />

      <Route
        path="/dashboard"
        element={
          user
            ? (
              <Dashboard
                user={user}
                projects={projects}
                setProjects={setProjects}
                onLogout={() => setUser(null)}
              />
            )
            : <Navigate to="/" />
        }
      />

      <Route
        path="/projects/:id"
        element={
          user
            ? (
              <ProjectDetails
                projects={projects}
              />
            )
            : <Navigate to="/" />
        }
      />

    </Routes>
  );
}


// import { useState } from "react";
// import AuthScreen from "./features/auth/AuthScreen";
// import Dashboard from "./features/dashboard/Dashboard";

// /**
//  * Root component.
//  * - If no user is logged in  → show the AuthScreen.
//  * - Once authenticated       → show the Dashboard.
//  *
//  * This is intentionally thin: it only manages who is logged in.
//  * All other state lives inside the feature components.
//  */
// export default function App() {
//   const [user, setUser] = useState(null); // null = logged out

//   if (!user) {
//     return <AuthScreen onAuth={setUser} />;
//   }

//   return <Dashboard user={user} onLogout={() => setUser(null)} />;
// }