import React from 'react';
import { FadeIn } from '../components/FadeIn';

const SERVICES = [
  {
    number: "01",
    name: "3D Web Animation",
    description: "Integrating interactive 3D graphics, motion triggers, and immersive WebGL/canvas layouts using Framer Motion, Three.js, and React Three Fiber."
  },
  {
    number: "02",
    name: "Full Stack Development",
    description: "Developing robust, secure, and production-ready applications with MongoDB, Express.js, React, Node.js, and TypeScript."
  },
  {
    number: "03",
    name: "Devdale Agency Services",
    description: "Delivering conversion-focused web design, customized software, and full brand identities to help businesses stand out and grow."
  },
  {
    number: "04",
    name: "AI & ML Integration",
    description: "Leveraging custom machine learning models, intelligent recommendation systems, natural language processing, and deep neural nets."
  },
  {
    number: "05",
    name: "Modern UI/UX Design",
    description: "Designing sleek, responsive, and pixel-perfect interfaces focused on usability, clean layouts, and fluid micro-animations."
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section 
      id="services" 
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full text-black"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
          <h2 
            className="font-black uppercase leading-none tracking-tight select-none text-[#0C0C0C]"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Services
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="w-full flex flex-col">
          {SERVICES.map((item, index) => (
            <FadeIn
              key={item.number}
              delay={index * 0.1}
              as="div"
              className="border-t border-[#0C0C0C]/15 last:border-b py-8 sm:py-10 md:py-12 flex flex-col sm:flex-row gap-4 sm:gap-12 md:gap-16 items-start sm:items-center text-[#0C0C0C] w-full"
            >
              {/* Number */}
              <div 
                className="font-black select-none leading-none min-w-[70px] sm:min-w-[120px] md:min-w-[150px] text-[#0C0C0C]"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {item.number}
              </div>
              
              {/* Stacked Name & Description */}
              <div className="flex flex-col gap-2 flex-grow">
                <h3 
                  className="font-medium uppercase leading-tight select-none text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {item.name}
                </h3>
                <p 
                  className="font-light leading-relaxed max-w-2xl text-[#0C0C0C]/60 select-none"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
