import React from 'react';

export default function Services() {
  return (
    <section id="services" className="max-w-3xl mx-auto py-16 md:py-24 px-4" data-aos="fade-up">
      <h2 className="text-4xl font-bold mb-6 text-center text-light-text dark:text-dark-text">Services I Offer</h2>
      <div className="bg-light-card dark:bg-dark-card p-8 rounded-xl shadow-xl transition-colors duration-500 border border-light-border dark:border-dark-border">
        <p className="mb-4 text-light-textSecondary dark:text-dark-textSecondary leading-relaxed">
          I specialize in full-stack web development using the MERN stack (MongoDB, Express.js, React.js, Node.js), delivering responsive and scalable web applications tailored to client needs.
        </p>
        <p className="mb-4 text-light-textSecondary dark:text-dark-textSecondary leading-relaxed">
          I am expanding my expertise in C# and .NET technologies, eager to take on projects that challenge me to grow in these areas.
        </p>
        <p className="text-light-textSecondary dark:text-dark-textSecondary leading-relaxed">
          I also have a strong foundation in UI/UX principles to create user-friendly interfaces that enhance the overall user experience.
        </p>
      </div>
    </section>
  );
}