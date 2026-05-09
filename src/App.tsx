import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import PageLayout from "./PageLayout";

export default function App() {
  const [user, setUser] = useState(null);
  const [mode, setMode] = useState("login");

  if (!user) {
    return mode === "login"
      ? <Login onLogin={setUser} />
      : <Signup onSignup={setUser} />;
  }

  return <PageLayout userName={user.email} groups={[]} />;
}
