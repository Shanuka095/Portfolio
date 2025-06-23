import React from 'react';
import profilePic from '../assets/profile.jpg';
import { Link } from 'react-scroll';

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

      <img
        src={profilePic}
        alt="Shanuka Induran"
        className="mx-auto rounded-full w-48 h-48 object-cover mb-8 shadow-xl border-4 border-light-primary dark:border-dark-primary transition-colors duration-500 transform hover:scale-105 relative z-10"
        data-aos="zoom-in"
        data-aos-duration="1200"
        data-aos-easing="ease-out-back"
      />

      <h1
        className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight text-light-text dark:text-dark-text text-shadow-lg relative z-10"
        data-aos="fade-right"
        data-aos-duration="1200"
        data-aos-delay="300"
      >
        Shanuka Induran
      </h1>

      <p
        className="text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto leading-relaxed text-light-textSecondary dark:text-dark-textSecondary relative z-10"
        data-aos="fade-left"
        data-aos-duration="1200"
        data-aos-delay="600"
      >
        I’m a passionate **Information Technology student specializing in Software Engineering** at SLIIT.
        I enjoy building innovative software solutions using modern technologies like the **MERN stack**,
        and exploring the intersection of technology and creativity.
      </p>
      <p
        className="text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto leading-relaxed text-light-textSecondary dark:text-dark-textSecondary mt-2 relative z-10"
        data-aos="fade-left"
        data-aos-duration="1200"
        data-aos-delay="800"
      >
        Currently, I’m focused on developing scalable, user-friendly applications and expanding my skills in full-stack development.
      </p>

      {/* Call-to-action button with pulse animation */}
      <div className="mt-10 relative z-10" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="1000">
        <Link
          to="contact"
          smooth={true}
          duration={800}
          className="inline-block bg-light-primary hover:bg-light-accent text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105
                     transition-all duration-300 cursor-pointer text-lg btn-pulse"
        >
          Get In Touch
        </Link>
      </div>
    </section>
  );
}