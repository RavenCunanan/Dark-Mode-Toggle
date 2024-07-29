import React, { useState, createContext } from "react";
import ThemeSwitcher from "./ThemeSwitcher.jsx";
import Home from "./Home.jsx";
import "./styles.css"; // Importing the CSS file

// Create a ThemeContext here 💖
export const ThemeContext = createContext();

export default function App() {
  const [theme, setTheme] = useState("light");

  // Toggle theme function
  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    // Provide theme and toggleTheme to child components
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app-container">
        <ThemeSwitcher />
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}
