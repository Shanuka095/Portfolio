import React, { useState, useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';
import { Link } from 'react-scroll'; // Import Link from react-scroll

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust scroll threshold as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navClasses = `
    p-5 flex justify-between items-center sticky top-0 z-50 transition-all duration-300
    ${isScrolled ? 'bg-light-card/95 dark:bg-dark-card/95 shadow-lg backdrop-blur-sm' : 'bg-transparent shadow-none'}
  `;

  const linkClasses = `
    hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-200
    cursor-pointer
  `;

  return (
    <nav className={navClasses}>
      {/* Dynamic text colors for your name */}
      <div className="text-2xl font-bold cursor-default select-none text-light-text dark:text-dark-text">
        Shanuka Induran
      </div>
      <div className="space-x-6 flex items-center text-light-textSecondary dark:text-dark-textSecondary">
        <Link to="home" smooth={true} duration={500} className={linkClasses}>Home</Link>
        <Link to="about" smooth={true} duration={500} className={linkClasses}>About</Link>
        <Link to="portfolio" smooth={true} duration={500} className={linkClasses}>Portfolio</Link>
        <Link to="services" smooth={true} duration={500} className={linkClasses}>Services</Link>
        <Link to="contact" smooth={true} duration={500} className={linkClasses}>Contact</Link>
        <DarkModeToggle />
      </div>
    </nav>
  );
}