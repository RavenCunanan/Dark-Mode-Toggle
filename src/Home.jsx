import React, { useContext, useEffect } from "react";
import { ThemeContext } from "./App.jsx";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="content">
      <h1>{theme === "light" ? "☀️ Light Mode" : "🌙 Dark Mode"}</h1>
      <p>
        {theme === "light"
          ? "Enjoy the bright and clear light mode!"
          : "Relax with the dark and soothing dark mode."}
      </p>
    </div>
  );
}
