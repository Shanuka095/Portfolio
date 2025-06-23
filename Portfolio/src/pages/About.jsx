import React from 'react';
import { FaLaptopCode, FaReact, FaDatabase, FaTools, FaMobileAlt, FaDraftingCompass } from 'react-icons/fa';

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

export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto py-16 md:py-24 px-4" data-aos="fade-up" data-aos-easing="ease-out-cubic">
      <h2 className="section-heading text-light-text dark:text-dark-text">About Me</h2>
      <div className="bg-light-card dark:bg-dark-card p-8 rounded-xl shadow-custom-light dark:shadow-custom-dark transition-colors duration-500 border border-light-border dark:border-dark-border">
        <p className="mb-4 text-light-textSecondary dark:text-dark-textSecondary leading-relaxed text-lg" data-aos="fade-up" data-aos-delay="100">
          I am currently pursuing a Bachelor of Science Honours in Information Technology, specializing in Software Engineering, at the Sri Lanka Institute of Information Technology (SLIIT), expecting to graduate in 2026.
        </p>
        <p className="mb-4 text-light-textSecondary dark:text-dark-textSecondary leading-relaxed text-lg" data-aos="fade-up" data-aos-delay="200">
          Previously, I completed my Higher National Diploma (HND) in Information Technology, which laid a strong foundation in core IT principles and practical skills.
        </p>
        <p className="mb-4 text-light-textSecondary dark:text-dark-textSecondary leading-relaxed text-lg" data-aos="fade-up" data-aos-delay="300">
          I have practical experience through internships and hands-on projects, showcasing my software engineering skills including full-stack development with the MERN stack.
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
              <category.icon className="text-light-accent dark:text-dark-accent text-5xl mb-4" />
              <h4 className="font-semibold text-light-primary dark:text-dark-primary mb-3 text-xl">{category.title}</h4>
              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1 bg-light-primary/10 dark:bg-dark-primary/10 text-light-text dark:text-dark-text
                               rounded-full text-xs font-mono border border-light-primary/30 dark:border-dark-primary/30
                               hover:bg-light-primary/20 dark:hover:bg-dark-primary/20 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}