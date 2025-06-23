import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto mb-20 py-16 md:py-24 px-4" data-aos="fade-up" data-aos-easing="ease-out-cubic">
      <h2 className="section-heading text-light-text dark:text-dark-text">Contact Me</h2>
      <div className="bg-light-card dark:bg-dark-card p-8 rounded-xl shadow-custom-light dark:shadow-custom-dark transition-colors duration-500 border border-light-border dark:border-dark-border grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Contact Info Section */}
        <div data-aos="fade-right" data-aos-delay="100">
          <h3 className="text-2xl font-semibold mb-4 text-light-text dark:text-dark-text">Reach Out Directly</h3>
          <ul className="space-y-5 text-light-textSecondary dark:text-dark-textSecondary text-lg">
            <li className="flex items-center">
              <FaEnvelope className="text-light-primary dark:text-dark-primary mr-3 text-2xl flex-shrink-0" />
              <div className="flex flex-col sm:flex-row sm:items-center">
                Email:
                <a
                  href="mailto:shanukainduran@gmail.com"
                  className="ml-0 sm:ml-2 text-light-primary dark:text-dark-primary hover:underline transition-colors duration-200"
                >
                  shanukainduran@gmail.com
                </a>
              </div>
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="text-light-primary dark:text-dark-primary mr-3 text-2xl flex-shrink-0" />
              <div className="flex flex-col sm:flex-row sm:items-center">
                Phone:
                <div className="ml-0 sm:ml-2">
                  <a
                    href="tel:+94725033327"
                    className="text-light-primary dark:text-dark-primary hover:underline transition-colors duration-200"
                  >
                    +94 72 503 3327
                  </a>
                  ,{' '}
                  <a
                    href="tel:+94771237825"
                    className="text-light-primary dark:text-dark-primary hover:underline transition-colors duration-200"
                  >
                    +94 77 123 7825
                  </a>
                </div>
              </div>
            </li>
            <li className="flex items-center">
              <FaLinkedin className="text-light-primary dark:text-dark-primary mr-3 text-2xl flex-shrink-0" />
              LinkedIn:{' '}
              <a
                href="https://linkedin.com/in/shanuka-induran"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-light-primary dark:text-dark-primary hover:underline transition-colors duration-200"
              >
                linkedin.com/in/shanuka-induran
              </a>
            </li>
            <li className="flex items-center">
              <FaGithub className="text-light-primary dark:text-dark-primary mr-3 text-2xl flex-shrink-0" />
              GitHub:{' '}
              <a
                href="https://github.com/Shanuka095"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-light-primary dark:text-dark-primary hover:underline transition-colors duration-200"
              >
                github.com/Shanuka095
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Form Placeholder */}
        <div data-aos="fade-left" data-aos-delay="200">
          <h3 className="text-2xl font-semibold mb-4 text-light-text dark:text-dark-text">Send a Message</h3>
          <p className="text-light-textSecondary dark:text-dark-textSecondary mb-6">
            (You can integrate a contact form here using Formspree, Netlify Forms, or a backend service)
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full p-3 rounded-md bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border
                           focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary outline-none transition-all duration-200
                           text-light-text dark:text-dark-text placeholder-light-textSecondary/70 dark:placeholder-dark-textSecondary/70"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-md bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border
                           focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary outline-none transition-all duration-200
                           text-light-text dark:text-dark-text placeholder-light-textSecondary/70 dark:placeholder-dark-textSecondary/70"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Your Message"
                className="w-full p-3 rounded-md bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border
                           focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary outline-none transition-all duration-200
                           text-light-text dark:text-dark-text placeholder-light-textSecondary/70 dark:placeholder-dark-textSecondary/70 resize-y"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-light-primary hover:bg-light-accent text-white font-bold rounded-md shadow-md hover:shadow-lg
                         transition-all duration-300 transform hover:scale-105
                         focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary focus:ring-opacity-75"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}