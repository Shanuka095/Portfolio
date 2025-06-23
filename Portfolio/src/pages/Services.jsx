import React from 'react';
import { FaCode, FaCogs, FaMobile, FaPencilRuler } from 'react-icons/fa'; // Example icons

export default function Services() {
  const servicesList = [
    {
      icon: FaCode,
      title: "Full-Stack Web Development",
      description: "Specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js) to build responsive, scalable, and high-performance web applications tailored to your specific requirements."
    },
    {
      icon: FaCogs,
      title: ".NET & C# Development",
      description: "Expanding my expertise in C# and .NET technologies to develop robust backend solutions and enterprise-level applications, keen on taking on challenging projects in this area."
    },
    {
      icon: FaPencilRuler,
      title: "UI/UX Design & Prototyping",
      description: "Applying strong UI/UX principles to create intuitive, user-friendly interfaces that enhance the overall user experience and meet modern design standards."
    },
    {
      icon: FaMobile,
      title: "Mobile Application Development",
      description: "Developing cross-platform or native mobile applications (using technologies like React Native or Kotlin/Java) to bring your ideas to life on iOS and Android devices."
    },
  ];

  return (
    <section id="services" className="max-w-6xl mx-auto py-16 md:py-24 px-4">
      <h2 className="section-heading text-light-text dark:text-dark-text">Services I Offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
        {servicesList.map((service, idx) => (
          <div
            key={idx}
            className="bg-light-card dark:bg-dark-card p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-light-border dark:border-dark-border flex flex-col items-center text-center"
            data-aos="zoom-in-up"
            data-aos-delay={idx * 150}
          >
            <service.icon className="text-light-primary dark:text-dark-primary text-6xl mb-6" />
            <h3 className="text-2xl font-semibold mb-3 text-light-text dark:text-dark-text">{service.title}</h3>
            <p className="text-light-textSecondary dark:text-dark-textSecondary leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}