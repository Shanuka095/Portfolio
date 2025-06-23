import React from 'react';

export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto py-16 md:py-24 px-4" data-aos="fade-up">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-light-text dark:text-dark-text">About Me</h2>
      <div className="bg-light-card dark:bg-dark-card p-8 rounded-xl shadow-xl transition-colors duration-500 border border-light-border dark:border-dark-border">
        <p className="mb-4 text-light-textSecondary dark:text-dark-textSecondary leading-relaxed">
          I am currently pursuing a Bachelor of Science Honours in Information Technology, specializing in Software Engineering, at the Sri Lanka Institute of Information Technology (SLIIT), expecting to graduate in 2026.
        </p>
        <p className="mb-4 text-light-textSecondary dark:text-dark-textSecondary leading-relaxed">
          Previously, I completed my Higher National Diploma (HND) in Information Technology, which laid a strong foundation in core IT principles and practical skills.
        </p>
        <p className="mb-4 text-light-textSecondary dark:text-dark-textSecondary leading-relaxed">
          I have practical experience through internships and hands-on projects, showcasing my software engineering skills including full-stack development with the MERN stack.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-6 text-light-text dark:text-dark-text">Primary Skills & Expertise</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-light-textSecondary dark:text-dark-textSecondary">
          {/* Grouping skills for better readability */}
          <ul className="list-none space-y-2">
            <li className="font-semibold text-light-primary dark:text-dark-primary">Programming Languages:</li>
            <li>• JavaScript (ES6+)</li>
            <li>• C, C++, Java</li>
            <li>• Python, C#, Kotlin</li>
          </ul>
          <ul className="list-none space-y-2">
            <li className="font-semibold text-light-primary dark:text-dark-primary">Frameworks & Libraries:</li>
            <li>• React.js, Node.js, Express.js</li>
            <li>• MERN Stack, .NET</li>
          </ul>
          <ul className="list-none space-y-2">
            <li className="font-semibold text-light-primary dark:text-dark-primary">Web Technologies:</li>
            <li>• HTML5, CSS3</li>
            <li>• RESTful APIs, WebSockets</li>
          </ul>
          <ul className="list-none space-y-2">
            <li className="font-semibold text-light-primary dark:text-dark-primary">Databases:</li>
            <li>• MongoDB, MySQL, SQL</li>
          </ul>
          <ul className="list-none space-y-2">
            <li className="font-semibold text-light-primary dark:text-dark-primary">Tools & Platforms:</li>
            <li>• Git & GitHub, VS Code</li>
            <li>• Docker, Kubernetes</li>
          </ul>
          <ul className="list-none space-y-2">
            <li className="font-semibold text-light-primary dark:text-dark-primary">Methodologies & Concepts:</li>
            <li>• Software Eng. Principles</li>
            <li>• Mobile App Dev, UI/UX</li>
            <li>• Agile Methodologies</li>
          </ul>
        </div>
      </div>
    </section>
  );
}