import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { LiveProjectButton } from '../components/LiveProjectButton';
import Strands from '../components/Strands';
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack';
import Folder from '../components/Folder';

const PROJECTS = [
  {
    number: "01",
    category: "Devdale Agency",
    name: "Devdale Agency Website",
    link: "https://www.thedevdale.com/",
    img: "/brave_screenshot_www.thedevdale.com.webp"
  },
  {
    number: "02",
    category: "E-Commerce Web",
    name: "Glow with Jwells",
    link: "https://glowwithjwells.vercel.app/",
    img: "/brave_screenshot_glowwithjwells.vercel.app.webp"
  },
  {
    number: "03",
    category: "IP Management Platform",
    name: "Patents Planet",
    link: "https://patentsplanet.com/",
    img: "/brave_screenshot_patentsplanet.com.webp"
  },
  {
    number: "04",
    category: "3D Animated Website",
    name: "Sundown Studio Clone",
    link: "https://sundown-studio-clone-gamma.vercel.app/",
    img: "/brave_screenshot_sundown-studio-clone-gamma.vercel.app.webp"
  },
  {
    number: "05",
    category: "React Web Application",
    name: "Laza Rev",
    link: "https://laza-rev-alpha.vercel.app/",
    img: "/brave_screenshot_laza-rev-alpha.vercel.app.webp"
  }
];

const socialFolderItems = [
  // Paper 1: GitHub Card
  <a 
    href="https://github.com" 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-full h-full flex flex-col items-center justify-between p-2.5 bg-[#181A1B] text-[#D7E2EA] hover:bg-[#24292e] transition-colors select-none text-center rounded-[8px] border border-white/5 overflow-hidden"
  >
    <div className="flex flex-col items-center justify-center flex-grow">
      <svg className="w-8 h-8 text-white mb-1.5 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
      <span className="text-[10px] uppercase font-semibold tracking-wider text-[#D7E2EA]">@naveen</span>
    </div>
    <div className="w-full flex flex-col gap-[2px] opacity-35">
      <div className="w-full h-[2px] bg-white/20 rounded-full" />
      <div className="w-2/3 h-[2px] bg-white/20 rounded-full" />
    </div>
  </a>,

  // Paper 2: LinkedIn Card
  <a 
    href="https://linkedin.com" 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-full h-full flex flex-col items-center justify-between p-2.5 bg-[#0A66C2] text-white hover:bg-[#0077b5] transition-colors select-none text-center rounded-[8px] overflow-hidden"
  >
    <div className="flex flex-col items-center justify-center flex-grow">
      <svg className="w-8 h-8 text-white mb-1.5 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
      <span className="text-[10px] uppercase font-semibold tracking-wider text-white">Naveen</span>
    </div>
    <div className="w-full flex flex-col gap-[2px] opacity-35">
      <div className="w-full h-[2px] bg-white/30 rounded-full" />
      <div className="w-1/2 h-[2px] bg-white/30 rounded-full" />
    </div>
  </a>,

  // Paper 3: Instagram Card
  <a 
    href="https://instagram.com" 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-full h-full flex flex-col items-center justify-between p-2.5 text-white bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:brightness-110 transition-all select-none text-center rounded-[8px] overflow-hidden"
  >
    <div className="flex flex-col items-center justify-center flex-grow">
      <svg className="w-8 h-8 text-white mb-1.5 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
      <span className="text-[10px] uppercase font-semibold tracking-wider text-white">@naveen</span>
    </div>
    <div className="w-full flex flex-col gap-[2px] opacity-35">
      <div className="w-full h-[2px] bg-white/30 rounded-full" />
      <div className="w-2/3 h-[2px] bg-white/30 rounded-full" />
    </div>
  </a>
];

export const ProjectsSection: React.FC = () => {
  return (
    <section 
      id="projects" 
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-10 relative z-10 w-full"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
          <h2 
            className="hero-heading font-black uppercase leading-none tracking-tight select-none text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Project
          </h2>
        </FadeIn>

        {/* ScrollStack Stacking Container */}
        <ScrollStack 
          useWindowScroll={true} 
          className="w-full flex flex-col items-center"
          itemDistance={120}
          itemScale={0.03}
          itemStackDistance={35}
          stackPosition="15%"
          scaleEndPosition="5%"
          baseScale={0.88}
          blurAmount={1.5}
        >
          {PROJECTS.map((project) => (
            <ScrollStackItem key={project.number} itemClassName="shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              {/* Card Contents */}
              <div className="flex flex-col gap-6 md:gap-8 w-full">
                {/* Top Row */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-4">
                  <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
                    <div 
                      className="font-black leading-none text-[#D7E2EA] select-none"
                      style={{ fontSize: 'clamp(2.5rem, 8vw, 90px)' }}
                    >
                      {project.number}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#D7E2EA]/60 text-xs sm:text-sm uppercase tracking-widest font-light select-none">
                        {project.category}
                      </span>
                      <h3 className="text-[#D7E2EA] font-semibold text-lg sm:text-2xl md:text-3xl uppercase tracking-wide select-none">
                        {project.name}
                      </h3>
                    </div>
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <LiveProjectButton />
                  </a>
                </div>

                {/* Bottom Row - Single Project Screenshot Mockup */}
                <div className="group w-full h-[250px] sm:h-[380px] md:h-[480px] overflow-hidden rounded-[24px] sm:rounded-[40px] md:rounded-[60px] border border-[#D7E2EA]/10">
                  <img 
                    src={project.img} 
                    alt={`${project.name} Screenshot`} 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out select-none"
                    loading="lazy"
                  />
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

        {/* Contact Block */}
        <div id="contact" className="w-full pt-32 pb-16 flex flex-col items-center border-t border-[#D7E2EA]/10 mt-20 relative overflow-hidden min-h-[500px] justify-center bg-[#0C0C0C] z-20">
          {/* Strands background animation */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
            <Strands
              colors={["#F97316", "#7C3AED", "#06B6D4"]}
              count={3}
              speed={0.5}
              amplitude={1}
              waviness={1}
              thickness={0.7}
              glow={2.6}
              taper={3}
              spread={1}
              intensity={0.6}
              saturation={1.5}
              opacity={1}
              scale={1.5}
              glass={false}
            />
          </div>

          <FadeIn delay={0} y={30} className="text-center flex flex-col items-center gap-6 z-10 relative">
            <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-sm font-medium">
              Start a conversation
            </span>
            <a 
              href="mailto:naveenvadla505@gmail.com" 
              className="text-[#D7E2EA] font-black uppercase tracking-tight leading-none text-center hover:opacity-80 transition-opacity select-none cursor-pointer"
              style={{ fontSize: 'clamp(2rem, 6vw, 80px)' }}
            >
              naveenvadla505@gmail.com
            </a>
            
            {/* Folder Component for Socials */}
            <div className="flex flex-col items-center mt-16 sm:mt-24 gap-4">
              <span className="text-[#D7E2EA]/40 uppercase tracking-widest text-[11px] font-semibold select-none animate-pulse">
                Click folder to connect
              </span>
              <Folder size={1.55} items={socialFolderItems} color="#0EA5E9" className="mt-4" />
            </div>

            <p className="text-[#D7E2EA]/30 text-xs sm:text-sm uppercase tracking-widest mt-16 font-light">
              &copy; {new Date().getFullYear()} Naveen. All rights reserved.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
