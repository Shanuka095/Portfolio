import { useEffect, useState, useRef } from "react"; // Import useRef
import { FaSun, FaMoon } from 'react-icons/fa';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("darkMode") === "true"
  );
  const iconRef = useRef(null); // Ref for the icon element

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
    // Add animation classes before toggling state to play "out" animation
    if (iconRef.current) {
      iconRef.current.classList.remove('animate-fade-rotate');
      iconRef.current.classList.add('animate-fade-rotate-out');

      // Remove the class after animation to prepare for next "in" animation
      const animationEndHandler = () => {
        iconRef.current.classList.remove('animate-fade-rotate-out');
        setDarkMode(prevMode => !prevMode); // Toggle dark mode after current icon animates out
        iconRef.current.removeEventListener('animationend', animationEndHandler);
      };
      iconRef.current.addEventListener('animationend', animationEndHandler);
    } else {
      // Fallback if ref is not set
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
                 flex items-center justify-center relative overflow-hidden" // Added relative & overflow-hidden
      aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <span // Wrapper for the icon to apply animation
        ref={iconRef}
        key={String(darkMode)} // Key to force re-render/re-animation when darkMode changes
        className={`inline-block ${darkMode ? 'animate-fade-rotate' : 'animate-fade-rotate'} `} // Apply fade-rotate animation
      >
        {darkMode ? (
          <FaSun className="text-xl" />
        ) : (
          <FaMoon className="text-xl" />
        )}
      </span>
    </button>
  );
}