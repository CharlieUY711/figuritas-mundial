import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import PageLayout from "./PageLayout";
import StickerGrid from "./StickerGrid";

export default function App() {
  const [user, setUser] = useState(null);
  const [mode, setMode] = useState("login");

  const stickers = Array.from({ length: 20 }).map((_, i) => ({
    id: i + 1,
    number: i + 1,
    collected: false,
  }));

  if (!user) {
    return mode === "login"
      ? <Login onLogin={setUser} />
      : <Signup onSignup={setUser} />;
  }

  return (
    <PageLayout userName={user.email}>
      <StickerGrid items={stickers} onPress={(s) => console.log(s)} />
    </PageLayout>
  );
}
