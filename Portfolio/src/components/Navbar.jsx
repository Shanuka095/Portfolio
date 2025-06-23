import React, { useState, useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
    ${isScrolled ? 'bg-light-card/95 dark:bg-dark-card/95 shadow-lg backdrop-blur-sm border-b border-light-border dark:border-dark-border' : 'bg-transparent shadow-none border-b border-transparent'}
  `;

  const linkClasses = `
    hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-200
    cursor-pointer font-medium
  `;

  return (
    <nav className={navClasses}>
      <div
        className="text-2xl font-bold cursor-pointer select-none text-light-text dark:text-dark-text
                   hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-300"
      >
        <Link to="home" smooth={true} duration={500}>Shanuka Induran</Link>
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