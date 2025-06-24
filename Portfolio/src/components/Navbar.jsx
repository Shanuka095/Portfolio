import React, { useState, useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navClasses = `
    p-5 flex justify-between items-center sticky top-0 z-50 transition-all duration-300
    ${isScrolled ? 'bg-light-card/95 dark:bg-dark-card/95 shadow-lg backdrop-blur-sm border-b border-light-border dark:border-dark-border' : 'bg-transparent shadow-none border-b border-transparent'}
  `;

  const linkClasses = `
    hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-200
    cursor-pointer font-medium relative group
    py-2 md:py-0
  `;

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={navClasses}>
      {/* Brand Name/Logo with continuous animation */}
      <div
        className="text-2xl font-bold cursor-pointer select-none text-light-text dark:text-dark-text
                   hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-300
                   animate-navbar-name-pulse" // New animation applied here
      >
        <Link to="home" smooth={true} duration={500} onClick={handleLinkClick}>Shanuka Induran</Link>
      </div>

      <div className="md:hidden flex items-center space-x-4">
        <DarkModeToggle />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-light-text dark:text-dark-text text-2xl focus:outline-none z-50"
          aria-label="Toggle Navigation"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className="hidden md:flex items-center space-x-6 text-light-textSecondary dark:text-dark-textSecondary">
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

      {isMenuOpen && (
        <div
          className={`md:hidden fixed inset-0 bg-light-card/95 dark:bg-dark-card/95 backdrop-blur-sm z-40 flex flex-col items-center justify-center space-y-8
                      ${isMenuOpen ? 'animate-slide-in-top' : 'animate-slide-out-top'} `}
          style={{ animationFillMode: isMenuOpen ? 'forwards' : 'backwards' }}
        >
          <Link to="home" smooth={true} duration={500} className="text-3xl font-bold text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary transition-colors" onClick={handleLinkClick}>Home</Link>
          <Link to="about" smooth={true} duration={500} className="text-3xl font-bold text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary transition-colors" onClick={handleLinkClick}>About</Link>
          <Link to="portfolio" smooth={true} duration={500} className="text-3xl font-bold text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary transition-colors" onClick={handleLinkClick}>Portfolio</Link>
          <Link to="services" smooth={true} duration={500} className="text-3xl font-bold text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary transition-colors" onClick={handleLinkClick}>Services</Link>
          <Link to="contact" smooth={true} duration={500} className="text-3xl font-bold text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary transition-colors" onClick={handleLinkClick}>Contact</Link>
          <DarkModeToggle className="md:hidden" />
        </div>
      )}
    </nav>
  );
}