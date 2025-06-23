import React from 'react';
import { FaLaptopCode, FaReact, FaDatabase, FaTools, FaMobileAlt, FaDraftingCompass } from 'react-icons/fa'; // Example icons

export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto py-16 md:py-24 px-4" data-aos="fade-up">
      <h2 className="section-heading text-light-text dark:text-dark-text">About Me</h2>
      <div className="bg-light-card dark:bg-dark-card p-8 rounded-xl shadow-xl transition-colors duration-500 border border-light-border dark:border-dark-border">
        <p className="mb-4 text-light-textSecondary dark:text-dark-textSecondary leading-relaxed" data-aos="fade-up" data-aos-delay="100">
          I am currently pursuing a Bachelor of Science Honours in Information Technology, specializing in Software Engineering, at the Sri Lanka Institute of Information Technology (SLIIT), expecting to graduate in 2026.
        </p>
        <p className="mb-4 text-light-textSecondary dark:text-dark-textSecondary leading-relaxed" data-aos="fade-up" data-aos-delay="200">
          Previously, I completed my Higher National Diploma (HND) in Information Technology, which laid a strong foundation in core IT principles and practical skills.
        </p>
        <p className="mb-4 text-light-textSecondary dark:text-dark-textSecondary leading-relaxed" data-aos="fade-up" data-aos-delay="300">
          I have practical experience through internships and hands-on projects, showcasing my software engineering skills including full-stack development with the MERN stack.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-6 text-light-text dark:text-dark-text" data-aos="fade-right" data-aos-delay="400">Primary Skills & Expertise</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-light-textSecondary dark:text-dark-textSecondary">
          {/* Programming Languages */}
          <div className="flex items-start p-4 rounded-lg bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border shadow-sm" data-aos="fade-up" data-aos-delay="500">
            <FaLaptopCode className="text-light-accent dark:text-dark-accent text-3xl mr-3 mt-1" />
            <div>
              <h4 className="font-semibold text-light-primary dark:text-dark-primary mb-1">Programming Languages</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>JavaScript (ES6+)</li>
                <li>C, C++, Java</li>
                <li>Python, C#, Kotlin</li>
              </ul>
            </div>
          </div>
          {/* Frameworks & Libraries */}
          <div className="flex items-start p-4 rounded-lg bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border shadow-sm" data-aos="fade-up" data-aos-delay="600">
            <FaReact className="text-light-accent dark:text-dark-accent text-3xl mr-3 mt-1" />
            <div>
              <h4 className="font-semibold text-light-primary dark:text-dark-primary mb-1">Frameworks & Libraries</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>React.js, Node.js, Express.js</li>
                <li>MERN Stack, .NET</li>
              </ul>
            </div>
          </div>
          {/* Databases */}
          <div className="flex items-start p-4 rounded-lg bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border shadow-sm" data-aos="fade-up" data-aos-delay="700">
            <FaDatabase className="text-light-accent dark:text-dark-accent text-3xl mr-3 mt-1" />
            <div>
              <h4 className="font-semibold text-light-primary dark:text-dark-primary mb-1">Databases</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>MongoDB</li>
                <li>MySQL, SQL</li>
              </ul>
            </div>
          </div>
          {/* Tools & Platforms */}
          <div className="flex items-start p-4 rounded-lg bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border shadow-sm" data-aos="fade-up" data-aos-delay="800">
            <FaTools className="text-light-accent dark:text-dark-accent text-3xl mr-3 mt-1" />
            <div>
              <h4 className="font-semibold text-light-primary dark:text-dark-primary mb-1">Tools & Platforms</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Git & GitHub, VS Code</li>
                <li>Docker, Kubernetes</li>
              </ul>
            </div>
          </div>
          {/* Mobile Development & UI/UX */}
          <div className="flex items-start p-4 rounded-lg bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border shadow-sm" data-aos="fade-up" data-aos-delay="900">
            <FaMobileAlt className="text-light-accent dark:text-dark-accent text-3xl mr-3 mt-1" />
            <div>
              <h4 className="font-semibold text-light-primary dark:text-dark-primary mb-1">Mobile & Design</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Mobile App Development</li>
                <li>UI/UX Design</li>
              </ul>
            </div>
          </div>
          {/* Methodologies */}
          <div className="flex items-start p-4 rounded-lg bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border shadow-sm" data-aos="fade-up" data-aos-delay="1000">
            <FaDraftingCompass className="text-light-accent dark:text-dark-accent text-3xl mr-3 mt-1" />
            <div>
              <h4 className="font-semibold text-light-primary dark:text-dark-primary mb-1">Methodologies</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Software Eng. Principles</li>
                <li>Agile Methodologies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}