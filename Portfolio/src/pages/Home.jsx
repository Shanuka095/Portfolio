import React from 'react';
import profilePic from '../assets/profile.jpg';
import { Link } from 'react-scroll';

export default function Home() {
  return (
    <section
      id="home"
      className="text-center py-16 md:py-24 lg:py-32 flex flex-col items-center justify-center min-h-screen-minus-navbar"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-out-cubic"
    >
      <img
        src={profilePic}
        alt="Shanuka Induran"
        className="mx-auto rounded-full w-48 h-48 object-cover mb-8 shadow-xl border-4 border-light-primary dark:border-dark-primary transition-colors duration-500 transform hover:scale-105"
        data-aos="zoom-in"
        data-aos-duration="1200"
        data-aos-easing="ease-out-back"
      />

      <h1
        className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight text-light-text dark:text-dark-text text-shadow-lg"
        data-aos="fade-right"
        data-aos-duration="1200"
        data-aos-delay="300"
      >
        Shanuka Induran
      </h1>

      <p
        className="text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto leading-relaxed text-light-textSecondary dark:text-dark-textSecondary"
        data-aos="fade-left"
        data-aos-duration="1200"
        data-aos-delay="600"
      >
        I’m a passionate **Information Technology student specializing in Software Engineering** at SLIIT.
        I enjoy building innovative software solutions using modern technologies like the **MERN stack**,
        and exploring the intersection of technology and creativity.
      </p>
      <p
        className="text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto leading-relaxed text-light-textSecondary dark:text-dark-textSecondary mt-2"
        data-aos="fade-left"
        data-aos-duration="1200"
        data-aos-delay="800"
      >
        Currently, I’m focused on developing scalable, user-friendly applications and expanding my skills in full-stack development.
      </p>

      {/* Call-to-action button with pulse animation */}
      <div className="mt-10" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="1000">
        <Link
          to="contact"
          smooth={true}
          duration={800}
          className="inline-block bg-light-primary hover:bg-light-accent text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105
                     transition-all duration-300 cursor-pointer text-lg btn-pulse" // Added btn-pulse class
        >
          Get In Touch
        </Link>
      </div>
    </section>
  );
}