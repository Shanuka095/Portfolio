import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto mb-20 py-16 md:py-24 px-4" data-aos="fade-up">
      <h2 className="text-4xl font-bold mb-6 text-center text-light-text dark:text-dark-text">Contact Me</h2>
      <div className="bg-light-card dark:bg-dark-card p-8 rounded-xl shadow-xl transition-colors duration-500 border border-light-border dark:border-dark-border">
        <ul className="space-y-3 text-center text-lg text-light-textSecondary dark:text-dark-textSecondary">
          <li>
            Email:{' '}
            <a
              href="mailto:shanukainduran@gmail.com"
              className="text-light-primary dark:text-dark-primary hover:underline transition-colors duration-200"
            >
              shanukainduran@gmail.com
            </a>
          </li>
          <li>
            Phone:{' '}
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
          </li>
          <li>
            LinkedIn:{' '}
            <a
              href="https://linkedin.com/in/shanuka-induran"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-primary dark:text-dark-primary hover:underline transition-colors duration-200"
            >
              linkedin.com/in/shanuka-induran
            </a>
          </li>
          <li>
            GitHub:{' '}
            <a
              href="https://github.com/Shanuka095"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-primary dark:text-dark-primary hover:underline transition-colors duration-200"
            >
              github.com/Shanuka095
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}