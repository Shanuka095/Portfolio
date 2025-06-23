import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-4 py-2 rounded-full font-semibold text-sm
                 bg-light-primary text-white hover:bg-light-accent
                 dark:bg-dark-primary dark:text-dark-background dark:hover:bg-dark-accent
                 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}