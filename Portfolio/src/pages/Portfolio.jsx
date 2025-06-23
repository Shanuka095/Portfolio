import React from 'react';
// Remember to import your actual project images here when you have them!
// Example:
// import worldFactsImage from '../assets/projects/worldfacts.jpg';

const projects = [
  {
    name: "WorldFacts",
    description:
      "A modern, responsive web app that lets users explore detailed info about countries worldwide. Built with React.js and React-Leaflet, featuring secure authentication, advanced search, interactive maps, favorites, and theme toggling.",
    image: '', // KEEP THIS EMPTY OR PUT YOUR OWN IMAGE PATH HERE
    liveLink: "#", // Replace with actual live link
    githubLink: "https://github.com/Shanuka095/WorldFacts", // Replace with actual GitHub link
  },
  {
    name: "DineSwift",
    description:
      "Cloud-native food ordering and delivery platform inspired by UberEats, built with a scalable microservices MERN stack architecture. Contributed backend and frontend components focusing on real-time tracking, driver assignment, and notifications.",
    image: '', // KEEP THIS EMPTY OR PUT YOUR OWN IMAGE PATH HERE
    liveLink: "#",
    githubLink: "https://github.com/Shanuka095/DineSwift",
  },
  {
    name: "Construction Management System",
    description:
      "Comprehensive web app for managing construction projects with task scheduling, resource management, and progress tracking, built using the MERN stack.",
    image: '', // KEEP THIS EMPTY OR PUT YOUR OWN IMAGE PATH HERE
    liveLink: "#",
    githubLink: "#",
  },
  {
    name: "Blossom Yoga Website",
    description:
      "Responsive website promoting yoga services, focusing on clean UI/UX and seamless user navigation.",
    image: '', // KEEP THIS EMPTY OR PUT YOUR OWN IMAGE PATH HERE
    liveLink: "#",
    githubLink: "#",
  },
  {
    name: "FocusMinder – Task App",
    description:
      "Android productivity app built with Kotlin and Java to help users manage daily tasks with reminders and minimalistic UI.",
    image: '', // KEEP THIS EMPTY OR PUT YOUR OWN IMAGE PATH HERE
    liveLink: "#",
    githubLink: "#",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="max-w-6xl mx-auto py-16 md:py-24 px-4">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-light-text dark:text-dark-text" data-aos="fade-up">My Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-light-card dark:bg-dark-card rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-light-border dark:border-dark-border"
            data-aos="fade-up"
            data-aos-delay={idx * 100} // Staggered animation
          >
            {project.image && ( // Only render image if a path is provided
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-52 object-cover rounded-t-xl"
              />
            )}
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-light-primary dark:text-dark-primary">{project.name}</h3>
              <p className="text-light-textSecondary dark:text-dark-textSecondary text-base leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-light-accent hover:bg-light-primary text-white rounded-lg text-sm font-medium transition-colors duration-200"
                  >
                    Live Demo
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-4l5-5m0 0h-7m7 0v7"></path></svg>
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-light-primary dark:border-dark-primary text-light-primary dark:text-dark-primary hover:bg-light-primary hover:text-white dark:hover:bg-dark-primary dark:hover:text-dark-background rounded-lg text-sm font-medium transition-colors duration-200"
                  >
                    GitHub
                    <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.417 2.865 8.163 6.839 9.504.471.085.678-.205.678-.456 0-.223-.009-.817-.014-1.604-2.775.602-3.362-1.353-3.362-1.353-.45-.892-1.09-1.129-1.09-1.129-.877-.594.066-.583.066-.583.97.067 1.482.997 1.482.997.863 1.484 2.274 1.057 2.822.809.087-.63.337-1.057.612-1.298-2.155-.231-4.416-1.082-4.416-4.832 0-1.066.381-1.936 1.002-2.614-.1-.232-.435-1.235.097-2.571 0 0 .817-.261 2.673 1.001A9.702 9.702 0 0112 5.025c.85.006 1.701.114 2.502.336 1.854-1.262 2.67-.999 2.67-.999.532 1.336.196 2.339.097 2.571.621.678 1.002 1.548 1.002 2.614 0 3.758-2.261 4.597-4.425 4.829.349.3.662.883.662 1.776 0 1.288-.011 2.327-.011 2.646 0 .252.207.545.684.455C21.144 20.17 24 16.424 24 12.017 24 6.484 19.522 2 14 2h-2z" clipRule="evenodd"></path></svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}