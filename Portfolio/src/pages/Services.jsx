import React from 'react';
import { FaCode, FaCogs, FaMobile, FaPencilRuler } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import ShanukaCover2 from '../assets/ShanukaCover2.png';

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

export default function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto py-16 md:py-24 px-4 relative overflow-hidden" data-aos="fade-up" data-aos-easing="ease-out-cubic">
      {/* ShanukaCover2 as a subtle background image */}
      <img
        src={ShanukaCover2}
        alt="Services Background"
        className="absolute inset-0 w-full h-full object-cover opacity-5 md:opacity-10 pointer-events-none -z-10"
      />

      <h2 className="section-heading text-light-text dark:text-dark-text">Services I Offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 relative z-10">
        {servicesList.map((service, idx) => (
          <Tilt
            key={idx}
            className="rounded-xl shadow-3d-light dark:shadow-3d-dark transition-shadow duration-300 transform hover:scale-[1.02]"
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            perspective={800}
            transitionEasing="cubic-bezier(.03,.98,.52,.99)"
            transitionDuration={600}
            scale={1.01}
            gyroscope={true}
            data-aos="zoom-in-up"
            data-aos-delay={idx * 150}
          >
            <div
              className="bg-light-card dark:bg-dark-card p-8 rounded-xl border border-light-border dark:border-dark-border flex flex-col items-center text-center
                         group h-full"
            >
              <service.icon className="text-light-primary dark:text-dark-primary text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-semibold mb-3 text-light-text dark:text-dark-text group-hover:text-light-primary dark:group-hover:text-dark-primary transition-colors duration-300">{service.title}</h3>
              <p className="text-light-textSecondary dark:text-dark-textSecondary leading-relaxed">
                {service.description}
              </p>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}