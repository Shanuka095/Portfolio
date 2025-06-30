import React, { useState } from 'react';
import { FaLaptopCode, FaReact, FaDatabase, FaTools, FaMobileAlt, FaDraftingCompass, FaTimes } from 'react-icons/fa';
import ShanukaCover1 from '../assets/ShanukaCover1.png';

// Import certificate images
import FrontEndCert from '../assets/FrontEnd.png';
import MERNCert from '../assets/MERN.png';
import PythonCert from '../assets/Python.png';
import WebDesignCert from '../assets/WebDesign.png';


const skillCategories = [
  {
    icon: FaLaptopCode,
    title: "Programming Languages",
    skills: ["JavaScript (ES6+)", "C", "C++", "Java", "Python", "C#", "Kotlin"]
  },
  {
    icon: FaReact,
    title: "Frameworks & Libraries",
    skills: ["React.js", "Node.js", "Express.js", "MERN Stack", ".NET"]
  },
  {
    icon: FaDatabase,
    title: "Databases",
    skills: ["MongoDB", "MySQL", "SQL"]
  },
  {
    icon: FaTools,
    title: "Tools & Platforms",
    skills: ["Git & GitHub", "Visual Studio Code", "Docker", "Kubernetes"]
  },
  {
    icon: FaMobileAlt,
    title: "Mobile & Design",
    skills: ["Mobile App Development", "UI/UX Design"]
  },
  {
    icon: FaDraftingCompass,
    title: "Methodologies & Concepts",
    skills: ["Software Engineering Principles", "Agile Methodologies"]
  },
];

const certifications = [
  {
    name: "Python for Beginners",
    issuer: "University of Moratuwa",
    image: PythonCert,
    description: "Python fundamentals, syntax, control structures, basic problem solving."
  },
  {
    name: "Web Design for Beginners",
    issuer: "University of Moratuwa",
    image: WebDesignCert,
    description: "HTML, CSS, responsive layout design, web design principles."
  },
  {
    name: "Introduction to MERN Stack",
    issuer: "Simplilearn SkillUp",
    image: MERNCert,
    description: "Fullstack web development basics using MongoDB, Express.js, React.js, and Node.js."
  },
  {
    name: "Front-End Web Development",
    issuer: "University of Moratuwa",
    image: FrontEndCert,
    description: "Front-end development fundamentals, Angular framework, jQuery, AJAX, Single Page Applications (SPA)."
  },
];

export default function About() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalClosing, setIsModalClosing] = useState(false);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalClosing(false);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalClosing(true);
    setTimeout(() => {
      setSelectedImage(null);
      document.body.style.overflow = 'unset'; // Re-enable scrolling
    }, 300); // Match this duration with your scale-out animation duration
  };

  return (
    <section id="about" className="max-w-4xl mx-auto py-16 md:py-24 px-4 relative overflow-hidden" data-aos="fade-up" data-aos-easing="ease-out-cubic">
      {/* ShanukaCover1 as a subtle background image */}
      <img
        src={ShanukaCover1}
        alt="About Background"
        className="absolute inset-0 w-full h-full object-cover opacity-5 md:opacity-10 pointer-events-none -z-10"
      />

      <h2 className="section-heading text-light-text dark:text-dark-text">About Me</h2>
      <div className="bg-light-card dark:bg-dark-card p-8 rounded-xl shadow-custom-light dark:shadow-custom-dark transition-colors duration-500 border border-light-border dark:border-dark-border relative z-10">
        <p className="mb-4 text-light-textSecondary dark:text-dark-textSecondary leading-relaxed text-lg" data-aos="fade-up" data-aos-delay="100">
          I am currently pursuing a Bachelor of Science Honours in Information Technology, specializing in Software Engineering, at the Sri Lanka Institute of Information Technology (SLIIT), expecting to graduate in 2026.
        </p>
        <p className="mb-4 text-light-textSecondary dark:text-dark-textSecondary leading-relaxed text-lg" data-aos="fade-up" data-aos-delay="200">
          Previously, I completed my Higher National Diploma (HND) in Information Technology, which laid a strong foundation in core IT principles and practical skills.
        </p>
        <p className="mb-4 text-light-textSecondary dark:text-dark-textSecondary leading-relaxed text-lg" data-aos="fade-up" data-aos-delay="300">
          I have hands-on experience through various projects, showcasing my software engineering skills including full-stack development with the MERN stack.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-6 text-light-text dark:text-dark-text" data-aos="fade-right" data-aos-delay="400">Primary Skills & Expertise</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-light-textSecondary dark:text-dark-textSecondary">
          {skillCategories.map((category, catIdx) => (
            <div
              key={catIdx}
              className="p-5 rounded-lg bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border shadow-md flex flex-col items-center text-center
                         transform hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay={500 + (catIdx * 100)}
            >
              <category.icon className="text-light-primary dark:text-dark-primary text-5xl mb-4" />
              <h4 className="font-semibold text-light-primary dark:text-dark-primary mb-3 text-xl">{category.title}</h4>
              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1 bg-light-primary/10 dark:bg-dark-primary/10 text-light-text dark:text-dark-text
                               rounded-full text-xs font-mono border border-light-primary/30 dark:border-dark-primary/30
                               hover:bg-light-primary/20 dark:hover:bg-dark-primary/20 transition-colors duration-200 cursor-default select-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-semibold mt-10 mb-6 text-light-text dark:text-dark-text" data-aos="fade-right" data-aos-delay="800">Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, certIdx) => (
            <div
              key={certIdx}
              className="p-5 rounded-lg bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border shadow-md flex flex-col items-center text-center
                         cursor-pointer group relative overflow-hidden transform transition-all duration-300
                         hover:scale-[1.02] hover:shadow-lg hover:animate-lift-and-glow dark:hover:animate-lift-and-glow-dark" // Added new hover animation classes
              data-aos="zoom-in"
              data-aos-delay={900 + (certIdx * 100)}
              onClick={() => openModal(cert.image)}
            >
              <img src={cert.image} alt={cert.name} className="w-24 h-24 object-contain mb-4" />
              <h4 className="font-semibold text-light-primary dark:text-dark-primary mb-2 text-xl">{cert.name}</h4>
              <p className="text-light-textSecondary dark:text-dark-textSecondary text-sm mb-2">{cert.issuer}</p>
              <p className="text-light-textSecondary dark:text-dark-textSecondary text-base leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 transition-opacity duration-300
                      ${isModalClosing ? 'opacity-0' : 'opacity-100'}`}
          onClick={closeModal}
        >
          <div
            className={`relative max-w-full max-h-[90vh] overflow-auto rounded-lg shadow-lg
                        ${isModalClosing ? 'animate-scale-out' : 'animate-scale-in'}
                        flex items-center justify-center`} // Added flex properties for centering content within the modal body
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-white text-3xl p-2 rounded-full bg-gray-700/70 hover:bg-gray-800/90 z-10 transition-colors duration-200"
              aria-label="Close image modal"
            >
              <FaTimes />
            </button>
            <img
              src={selectedImage}
              alt="Enlarged Certificate"
              className="max-w-full max-h-full object-contain" // Use max-w-full and max-h-full
            />
          </div>
        </div>
      )}
    </section>
  );
}