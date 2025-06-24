import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import ShanukaProfile4 from '../assets/ShanukaProfile4.png'; // Import ShanukaProfile4

export default function Contact() {
  const [submissionStatus, setSubmissionStatus] = useState(null);

  // !!! IMPORTANT: REPLACE THIS WITH YOUR ACTUAL FORMSPREE ENDPOINT URL !!!
  // You need to get this from your Formspree.io dashboard after creating a form.
  // Example: "https://formspree.io/f/xpznwkgj"
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT"; 

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default browser form submission
    setSubmissionStatus('sending'); // Set status to indicate sending

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: form.method, // "POST"
        body: formData,
        headers: {
            'Accept': 'application/json' // Essential for Formspree API
        }
      });

      if (response.ok) {
        setSubmissionStatus('success'); // Message sent successfully
        form.reset(); // Clear the form fields
        setTimeout(() => setSubmissionStatus(null), 5000); // Clear message after 5 seconds
      } else {
        const data = await response.json();
        setSubmissionStatus('error'); // There was an error
        console.error("Form submission error:", data.errors); // Log specific errors from Formspree
      }
    } catch (error) {
      setSubmissionStatus('error'); // Network or other unexpected error
      console.error("Form submission failed:", error);
    }
  };

  return (
    <section id="contact" className="max-w-4xl mx-auto mb-20 py-16 md:py-24 px-4 relative overflow-hidden" data-aos="fade-up" data-aos-easing="ease-out-cubic">
      {/* ShanukaProfile4 as a subtle background image */}
      <img
        src={ShanukaProfile4}
        alt="Digital Persona 4 Background"
        className="absolute inset-0 w-full h-full object-cover opacity-5 md:opacity-10 pointer-events-none -z-10" // Adjust opacity and z-index
      />

      <h2 className="section-heading text-light-text dark:text-dark-text">Contact Me</h2>
      <div className="bg-light-card dark:bg-dark-card p-8 rounded-xl shadow-custom-light dark:shadow-custom-dark transition-colors duration-500 border border-light-border dark:border-dark-border grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">

        {/* Contact Info Section */}
        <div data-aos="fade-right" data-aos-delay="100">
          <h3 className="text-2xl font-semibold mb-4 text-light-text dark:text-dark-text">Reach Out Directly</h3>
          <ul className="space-y-5 text-light-textSecondary dark:text-dark-textSecondary text-lg">
            <li className="flex items-center group">
              <a
                href="mailto:shanukainduran@gmail.com"
                className="flex items-center text-light-primary dark:text-dark-primary hover:text-light-accent dark:hover:text-dark-accent
                           transition-colors duration-200 transform group-hover:scale-105"
                aria-label="Email"
              >
                <FaEnvelope className="mr-3 text-3xl" />
                <span className="text-light-textSecondary dark:text-dark-textSecondary group-hover:text-light-primary dark:group-hover:text-dark-primary transition-colors duration-200">
                  shanukainduran@gmail.com
                </span>
              </a>
            </li>
            <li className="flex items-center group">
              <a
                href="tel:+94725033327"
                className="flex items-center text-light-primary dark:text-dark-primary hover:text-light-accent dark:hover:text-dark-accent
                           transition-colors duration-200 transform group-hover:scale-105"
                aria-label="Phone 1"
              >
                <FaPhoneAlt className="mr-3 text-3xl" />
                <span className="text-light-textSecondary dark:text-dark-textSecondary group-hover:text-light-primary dark:group-hover:text-dark-primary transition-colors duration-200">
                  +94 72 503 3327
                </span>
              </a>
            </li>
            <li className="flex items-center group">
              <a
                href="tel:+94771237825"
                className="flex items-center text-light-primary dark:text-dark-primary hover:text-light-accent dark:hover:text-dark-accent
                           transition-colors duration-200 transform group-hover:scale-105"
                aria-label="Phone 2"
              >
                <FaPhoneAlt className="mr-3 text-3xl" />
                <span className="text-light-textSecondary dark:text-dark-textSecondary group-hover:text-light-primary dark:group-hover:text-dark-primary transition-colors duration-200">
                  +94 77 123 7825
                </span>
              </a>
            </li>
            <li className="flex items-center group" data-aos="fade-right" data-aos-delay="400">
              <a
                href="https://linkedin.com/in/shanuka-induran"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-light-primary dark:text-dark-primary hover:text-light-accent dark:hover:text-dark-accent
                           transition-colors duration-200 transform group-hover:scale-105"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="mr-3 text-3xl" />
                <span className="text-light-textSecondary dark:text-dark-textSecondary group-hover:text-light-primary dark:group-hover:text-dark-primary transition-colors duration-200">
                  LinkedIn Profile
                </span>
              </a>
            </li>
            <li className="flex items-center group" data-aos="fade-right" data-aos-delay="500">
              <a
                href="https://github.com/Shanuka095"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-light-primary dark:text-dark-primary hover:text-light-accent dark:hover:text-dark-accent
                           transition-colors duration-200 transform group-hover:scale-105"
                aria-label="GitHub"
              >
                <FaGithub className="mr-3 text-3xl" />
                <span className="text-light-textSecondary dark:text-dark-textSecondary group-hover:text-light-primary dark:group-hover:text-dark-primary transition-colors duration-200">
                  GitHub Profile
                </span>
              </a>
            </li>
            <li className="flex items-center group" data-aos="fade-right" data-aos-delay="600">
              <a
                href="https://web.facebook.com/shanuka.induran"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-light-primary dark:text-dark-primary hover:text-light-accent dark:hover:text-dark-accent
                           transition-colors duration-200 transform group-hover:scale-105"
                aria-label="Facebook"
              >
                <FaFacebook className="mr-3 text-3xl" />
                <span className="text-light-textSecondary dark:text-dark-textSecondary group-hover:text-light-primary dark:group-hover:text-dark-primary transition-colors duration-200">
                  Facebook Profile
                </span>
              </a>
            </li>
            <li className="flex items-center group" data-aos="fade-right" data-aos-delay="700">
              <a
                href="https://www.instagram.com/_shanuka_40/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-light-primary dark:text-dark-primary hover:text-light-accent dark:hover:text-dark-accent
                           transition-colors duration-200 transform group-hover:scale-105"
                aria-label="Instagram"
              >
                <FaInstagram className="mr-3 text-3xl" />
                <span className="text-light-textSecondary dark:text-dark-textSecondary group-hover:text-light-primary dark:group-hover:text-dark-primary transition-colors duration-200">
                  Instagram Profile
                </span>
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div data-aos="fade-left" data-aos-delay="200">
          <h3 className="text-2xl font-semibold mb-4 text-light-text dark:text-dark-text">Send a Message</h3>
          <p className="text-light-textSecondary dark:text-dark-textSecondary mb-6">
            Fill out the form below to get in touch!
          </p>
          <form onSubmit={handleSubmit} method="POST" action={FORMSPREE_ENDPOINT} className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                type="text"
                id="name"
                name="name" // Added name attribute for Formspree
                placeholder="Your Name"
                required // Added required attribute
                className="w-full p-3 rounded-md bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border
                           focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary outline-none transition-all duration-200
                           text-light-text dark:text-dark-text placeholder-light-textSecondary/70 dark:placeholder-dark-textSecondary/70"
                data-aos="fade-left" data-aos-delay="300"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                id="email"
                name="email" // Added name attribute for Formspree
                placeholder="Your Email"
                required // Added required attribute
                className="w-full p-3 rounded-md bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border
                           focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary outline-none transition-all duration-200
                           text-light-text dark:text-dark-text placeholder-light-textSecondary/70 dark:placeholder-dark-textSecondary/70"
                data-aos="fade-left" data-aos-delay="400"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message" // Added name attribute for Formspree
                rows="5"
                placeholder="Your Message"
                required // Added required attribute
                className="w-full p-3 rounded-md bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border
                           focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary outline-none transition-all duration-200
                           text-light-text dark:text-dark-text placeholder-light-textSecondary/70 dark:placeholder-dark-textSecondary/70 resize-y"
                data-aos="fade-left" data-aos-delay="500"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={submissionStatus === 'sending'} // Disable button when sending
              className="w-full py-3 px-6 bg-light-primary hover:bg-light-accent text-white font-bold rounded-md shadow-md hover:shadow-lg
                         transition-all duration-300 transform hover:scale-105
                         focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary focus:ring-opacity-75"
              data-aos="zoom-in" data-aos-delay="600"
            >
              {submissionStatus === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {submissionStatus === 'success' && (
              <p className="text-green-500 text-center mt-2 animate-pop-in">Message sent successfully!</p>
            )}
            {submissionStatus === 'error' && (
              <p className="text-red-500 text-center mt-2 animate-pop-in">Failed to send message. Please try again later.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}