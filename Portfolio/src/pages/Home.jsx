import React from 'react';
import profilePic from '../assets/ShanukaProfile.png';
import ShanukaProfile1 from '../assets/ShanukaProfile1.png';
import myCV from '../assets/Shanuka_Induran_CV.pdf';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaDownload } from 'react-icons/fa';

export default function Home() {
  return (
    <section
      id="home"
      className="text-center py-16 md:py-24 lg:py-32 flex flex-col items-center justify-center min-h-screen-minus-navbar relative overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-out-cubic"
    >
      {/* Subtle background blob/gradient animation */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-light-primary/20 dark:bg-dark-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-light-accent/20 dark:bg-dark-accent/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 pointer-events-none"></div>

      {/* ShanukaProfile1 as a floating background element */}
      <img
        src={ShanukaProfile1}
        alt="Shanuka Induran Digital Persona"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-contain opacity-5 transform rotate-12 -z-10 animate-float"
      />

      <img
        src={profilePic}
        alt="Shanuka Induran"
        className="mx-auto rounded-full w-48 h-48 object-cover mb-8 shadow-xl border-4 border-light-primary dark:border-dark-primary
                   transition-colors duration-500 transform hover:scale-105 relative z-10
                   animated-profile-photo profile-border-animated"
      />

      <h1
        className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight text-light-text dark:text-dark-text text-shadow-lg relative z-10 animated-name"
      >
        Shanuka Induran
      </h1>

      <p
        className="text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto leading-relaxed text-light-textSecondary dark:text-dark-textSecondary relative z-10"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="600"
      >
        I’m a passionate **Information Technology student specializing in Software Engineering** at SLIIT.
        I enjoy building innovative software solutions using modern technologies like the **MERN stack**,
        and exploring the intersection of technology and creativity.
      </p>
      <p
        className="text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto leading-relaxed text-light-textSecondary dark:text-dark-textSecondary mt-2 relative z-10"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="800"
      >
        Currently, I’m focused on developing scalable, user-friendly applications and expanding my skills in full-stack development.
      </p>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mt-8 relative z-10" data-aos="fade-up" data-aos-delay="1200">
        <a href="https://github.com/Shanuka095" target="_blank" rel="noopener noreferrer"
           className="text-light-textSecondary dark:text-dark-textSecondary hover:text-light-primary dark:hover:text-dark-primary
                      transform hover:scale-125 transition-all duration-300 text-3xl" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/shanuka-induran" target="_blank" rel="noopener noreferrer"
           className="text-light-textSecondary dark:text-dark-textSecondary hover:text-light-primary dark:hover:text-dark-primary
                      transform hover:scale-125 transition-all duration-300 text-3xl" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://web.facebook.com/shanuka.induran" target="_blank" rel="noopener noreferrer"
           className="text-light-textSecondary dark:text-dark-textSecondary hover:text-light-primary dark:hover:text-dark-primary
                      transform hover:scale-125 transition-all duration-300 text-3xl" aria-label="Facebook">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/_shanuka_40/" target="_blank" rel="noopener noreferrer"
           className="text-light-textSecondary dark:text-dark-textSecondary hover:text-light-primary dark:hover:text-dark-primary
                      transform hover:scale-125 transition-all duration-300 text-3xl" aria-label="Instagram">
          <FaInstagram />
        </a>
      </div>

      {/* Call-to-action & CV Download Buttons */}
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-10 relative z-10" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="1400">
        <Link
          to="contact"
          smooth={true}
          duration={800}
          className="inline-block bg-light-primary hover:bg-light-accent text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105
                     transition-all duration-300 cursor-pointer text-lg btn-pulse"
        >
          Get In Touch
        </Link>
        <a
          href={myCV}
          download="Shanuka_Induran_CV.pdf"
          className="inline-flex items-center justify-center bg-transparent border-2 border-light-primary dark:border-dark-primary text-light-primary dark:text-dark-primary
                     font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer text-lg
                     hover:bg-light-primary hover:text-white dark:hover:bg-dark-primary dark:hover:text-dark-background"
          data-aos="zoom-in" data-aos-delay="1600"
        >
          Download CV <FaDownload className="ml-3" />
        </a>
      </div>
    </section>
  );
}