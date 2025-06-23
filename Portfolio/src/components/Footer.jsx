import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-light-card dark:bg-dark-card text-light-textSecondary dark:text-dark-textSecondary text-center p-6 mt-20 select-none shadow-inner-lg transition-colors duration-500 border-t border-light-border dark:border-dark-border">
      <p>&copy; {new Date().getFullYear()} Shanuka Induran. All rights reserved.</p>
    </footer>
  );
}