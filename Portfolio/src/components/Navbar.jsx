import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between">
      <div className="text-xl font-bold">Shanuka Induran</div>
      <div className="space-x-4">
        <a href="#home" className="hover:text-blue-400">Home</a>
        <a href="#about" className="hover:text-blue-400">About</a>
        <a href="#portfolio" className="hover:text-blue-400">Portfolio</a>
        <a href="#services" className="hover:text-blue-400">Services</a>
        <a href="#contact" className="hover:text-blue-400">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
