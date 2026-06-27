import { useState } from "react";
import AuthScreen from "./features/auth/AuthScreen";
import Dashboard from "./features/dashboard/Dashboard";

/**
 * Root component.
 * - If no user is logged in  → show the AuthScreen.
 * - Once authenticated       → show the Dashboard.
 *
 * This is intentionally thin: it only manages who is logged in.
 * All other state lives inside the feature components.
 */
export default function App() {
  const [user, setUser] = useState(null); // null = logged out

  if (!user) {
    return <AuthScreen onAuth={setUser} />;
  }

  return <Dashboard user={user} onLogout={() => setUser(null)} />;
}
