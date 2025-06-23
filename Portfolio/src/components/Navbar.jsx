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
    cursor-pointer font-medium relative group
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
        <Link to="home" smooth={true} duration={500} className={linkClasses}>
            Home
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-light-primary dark:bg-dark-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </Link>
        <Link to="about" smooth={true} duration={500} className={linkClasses}>
            About
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-light-primary dark:bg-dark-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </Link>
        <Link to="portfolio" smooth={true} duration={500} className={linkClasses}>
            Portfolio
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-light-primary dark:bg-dark-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </Link>
        <Link to="services" smooth={true} duration={500} className={linkClasses}>
            Services
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-light-primary dark:bg-dark-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </Link>
        <Link to="contact" smooth={true} duration={500} className={linkClasses}>
            Contact
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-light-primary dark:bg-dark-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </Link>
        <DarkModeToggle />
      </div>
    </nav>
  );
}