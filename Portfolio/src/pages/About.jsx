import React, { useState } from 'react';
import { FaLaptopCode, FaReact, FaDatabase, FaTools, FaMobileAlt, FaDraftingCompass } from 'react-icons/fa';
import ShanukaCover1 from '../assets/ShanukaCover1.png';
import ShanukaProfile2 from '../assets/ShanukaProfile2.png';
import ShanukaCover2 from '../assets/ShanukaCover2.png'; // Corrected import path from .2.png to .png

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
    description: "Python fundamentals, syntax, control structures, basic problem solving.",
    verificationCode: "fAzinQoK98",
    verificationLink: "https://open.uom.lk/verify"
  },
  {
    name: "Web Design for Beginners",
    issuer: "University of Moratuwa",
    image: WebDesignCert,
    description: "HTML, CSS, responsive layout design, web design principles.",
    verificationCode: "VlRHXnwtx2",
    verificationLink: "https://open.uom.lk/verify"
  },
  {
    name: "Introduction to MERN Stack",
    issuer: "Simplilearn SkillUp",
    image: MERNCert,
    description: "Fullstack web development basics using MongoDB, Express.js, React.js, and Node.js.",
    verificationLink: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzMzM3IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODQ5ODgwNV84ODY2MTUzMTc1MDUzNjEwNTU1OC5wbmciLCJ1c2VybmFtZSI6IlNoYW51a2EgSW5kdXJhbiJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-ce%20rtificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F6129%2FIntroduction-to-MERN-Stack%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1283813841183267946&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVDwhPzzIsj7LMC02yrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAMI2kTNBAAAAA"
  },
  {
    name: "Front-End Web Development",
    issuer: "University of Moratuwa",
    image: FrontEndCert,
    description: "Front-end development fundamentals, Angular framework, jQuery, AJAX, Single Page Applications (SPA).",
    verificationCode: "VD4syYC0Sh",
    verificationLink: "https://open.uom.lk/verify"
  },
];

export default function About() {
  const [copiedCode, setCopiedCode] = useState(null);

  const copyToClipboard = (code, certName) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedCode(certName);
      setTimeout(() => setCopiedCode(null), 2000); // Reset after 2 seconds
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
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
          I am actively seeking a Fullstack Development internship. Proficient in both frontend and backend technologies, with hands-on experience building dynamic, responsive web applications. Skilled in JavaScript, React, Node.js, Express, MongoDB, and UI frameworks such as Tailwind CSS and Bootstrap. Experienced in developing MERN stack projects with a strong focus on performance, usability, and clean code practices. Passionate about real-world problem solving, continuous improvement, and working in collaborative development environments.
        </p>

        {/* Education Section */}
        <h3 className="text-2xl font-semibold mt-10 mb-6 text-light-text dark:text-dark-text" data-aos="fade-right" data-aos-delay="300">Education</h3>
        <div className="space-y-6 mb-10">
          <div data-aos="fade-up" data-aos-delay="400">
            <h4 className="font-semibold text-light-primary dark:text-dark-primary text-xl mb-1">Bachelor of Science Honors in Information Technology - Undergraduate</h4>
            <p className="text-light-textSecondary dark:text-dark-textSecondary text-md">Sri Lanka Institute of Information Technology | Jan 2023 - Present</p>
            <p className="text-light-textSecondary dark:text-dark-textSecondary text-md mt-1">Specialized in Software Engineering (3rd year, 1st semester).</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="500">
            <h4 className="font-semibold text-light-primary dark:text-dark-primary text-xl mb-1">G.C.E. Advanced Level – Technology Stream</h4>
            <p className="text-light-textSecondary dark:text-dark-textSecondary text-md">Shariputre College, Matara | Aug 2021</p>
            <ul className="list-disc list-inside text-light-textSecondary dark:text-dark-textSecondary text-md mt-1 ml-4">
              <li>Engineering Technology - B</li>
              <li>Science for Technology - C</li>
              <li>ICT - S</li>
            </ul>
            <p className="text-light-textSecondary dark:text-dark-textSecondary text-sm mt-1">Index Number: 6082572</p>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mt-10 mb-6 text-light-text dark:text-dark-text" data-aos="fade-right" data-aos-delay="600">Primary Skills & Expertise</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-light-textSecondary dark:text-dark-textSecondary">
          {skillCategories.map((category, catIdx) => (
            <div
              key={catIdx}
              className="p-5 rounded-lg bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border shadow-md flex flex-col items-center text-center
                         group relative overflow-hidden transform transition-all duration-300
                         hover:scale-[1.02] hover:shadow-lg hover:animate-lift-and-glow dark:hover:animate-lift-and-glow-dark"
              data-aos="zoom-in"
              data-aos-delay={700 + (catIdx * 100)}
            >
              {/* ShanukaCover2 as a subtle background image on hover */}
              <img
                src={ShanukaCover2}
                alt="Digital watermark"
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-[0.05] md:group-hover:opacity-[0.1] lg:group-hover:opacity-[0.15] pointer-events-none"
              />
              <category.icon className="text-light-primary dark:text-dark-primary text-5xl mb-4 relative z-10" />
              <h4 className="font-semibold text-light-primary dark:text-dark-primary mb-3 text-xl relative z-10">{category.title}</h4>
              <div className="flex flex-wrap justify-center gap-2 relative z-10">
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

        <h3 className="text-2xl font-semibold mt-10 mb-6 text-light-text dark:text-dark-text" data-aos="fade-right" data-aos-delay="1000">Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, certIdx) => (
            <div
              key={certIdx}
              className="p-5 rounded-lg bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border shadow-md flex flex-col items-center text-center
                         group relative overflow-hidden transform transition-all duration-300
                         hover:scale-[1.02] hover:shadow-lg hover:animate-lift-and-glow dark:hover:animate-lift-and-glow-dark"
              data-aos="zoom-in"
              data-aos-delay={1100 + (certIdx * 100)}
            >
              {/* ShanukaProfile2 as a subtle background image on hover */}
              <img
                src={ShanukaProfile2}
                alt="Digital watermark"
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-[0.05] md:group-hover:opacity-[0.1] lg:group-hover:opacity-[0.15] pointer-events-none"
              />
              <img src={cert.image} alt={cert.name} className="w-24 h-24 object-contain mb-4 relative z-10" />
              <a
                href={cert.verificationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-light-primary dark:text-dark-primary mb-2 text-xl relative z-10
                           hover:underline hover:underline-offset-4 hover:decoration-light-accent dark:hover:decoration-dark-accent transition-all duration-200"
              >
                {cert.name}
              </a>
              <p className="text-light-textSecondary dark:text-dark-textSecondary text-sm mb-2 relative z-10">{cert.issuer}</p>
              <p className="text-light-textSecondary dark:text-dark-textSecondary text-base leading-relaxed mb-4 relative z-10">{cert.description}</p>

              {cert.verificationCode && (
                <div className="relative z-10">
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent opening link when copying
                      copyToClipboard(cert.verificationCode, cert.name);
                    }}
                    className="mt-2 px-4 py-2 bg-light-accent hover:bg-light-primary text-white text-sm font-semibold rounded-md shadow-md
                               transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-light-primary focus:ring-opacity-75
                               dark:bg-dark-accent dark:hover:bg-dark-primary dark:text-dark-background"
                  >
                    {copiedCode === cert.name ? 'Copied!' : 'Copy Verification Code'}
                  </button>
                  {copiedCode === cert.name && (
                    <p className="text-green-500 text-xs mt-1 absolute left-1/2 -translate-x-1/2 animate-fade-in-up whitespace-nowrap">Code copied!</p>
                  )}
                </div>
              )}
              {cert.verificationLink && !cert.verificationCode && ( // For MERN Stack certificate
                 <a
                    href={cert.verificationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 px-4 py-2 bg-light-accent hover:bg-light-primary text-white text-sm font-semibold rounded-md shadow-md
                               transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-light-primary focus:ring-opacity-75 relative z-10
                               dark:bg-dark-accent dark:hover:bg-dark-primary dark:text-dark-background"
                 >
                    Verify Certificate
                 </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}