import { useEffect, useState, useRef } from "react";
import { FaSun, FaMoon } from 'react-icons/fa';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("darkMode") === "true"
  );
  const iconRef = useRef(null);

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const handleToggle = () => {
    if (iconRef.current) {
      iconRef.current.classList.remove('animate-fade-rotate');
      iconRef.current.classList.add('animate-fade-rotate-out');

      const animationEndHandler = () => {
        setDarkMode(prevMode => !prevMode);
        iconRef.current.classList.remove('animate-fade-rotate-out');
        iconRef.current.removeEventListener('animationend', animationEndHandler);
      };
      iconRef.current.addEventListener('animationend', animationEndHandler);
    } else {
      setDarkMode(prevMode => !prevMode);
    }
  };

  return (
    <button
      onClick={handleToggle}
      className="p-3 rounded-full font-semibold text-lg
                 bg-light-primary text-white hover:bg-light-accent
                 dark:bg-dark-primary dark:text-dark-background dark:hover:bg-dark-accent
                 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110
                 focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary focus:ring-opacity-75
                 flex items-center justify-center relative overflow-hidden"
      aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <span
        ref={iconRef}
        key={String(darkMode)}
        className="inline-block"
      >
        {darkMode ? (
          <FaSun className="text-xl animate-fade-rotate" />
        ) : (
          <FaMoon className="text-xl animate-fade-rotate" />
        )}
      </span>
    </button>
  );
}