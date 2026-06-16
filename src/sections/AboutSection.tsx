import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { AnimatedText } from '../components/AnimatedText';
import { ContactButton } from '../components/ContactButton';

export const AboutSection: React.FC = () => {
  return (
    <section 
      id="about" 
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 w-full"
    >
      {/* Decorative 3D Images absolute positioned in corners */}
      
      {/* Top-left: Moon icon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="hidden sm:block absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] z-0 pointer-events-none select-none"
      >
        <img 
          src="/moon_icon.webp" 
          alt="Moon Icon" 
          className="w-full h-auto"
        />
      </FadeIn>

      {/* Bottom-left: 3D object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="hidden sm:block absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] z-0 pointer-events-none select-none"
      >
        <img 
          src="/sphere_icon.webp" 
          alt="3D Sphere Object" 
          className="w-full h-auto"
        />
      </FadeIn>

      {/* Top-right: Lego icon */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="hidden sm:block absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] z-0 pointer-events-none select-none"
      >
        <img 
          src="/lego_icon.webp" 
          alt="Lego Block" 
          className="w-full h-auto"
        />
      </FadeIn>

      {/* Bottom-right: 3D group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="hidden sm:block absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] z-0 pointer-events-none select-none"
      >
        <img 
          src="/group_icon.webp" 
          alt="3D Group Icon" 
          className="w-full h-auto"
        />
      </FadeIn>

      {/* Content wrapper */}
      <div className="flex flex-col items-center text-center z-10 w-full max-w-4xl">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2 
            className="hero-heading font-black uppercase leading-none tracking-tight text-center select-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Gap between heading/text */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Animated Paragraph */}
        <AnimatedText
          text="I am a full stack web developer specializing in the MERN stack and crafting immersive 3D animated websites. Currently pursuing my B.Tech 3rd year in CSE (AI & ML) and co-founder of Devdale Agency. I love building high-performance, visually stunning applications that stand out. Let's build something incredible together!"
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] select-none"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />

        {/* Gap between text and button */}
        <div className="h-16 sm:h-20 md:h-24" />

        {/* Contact Button */}
        <FadeIn delay={0} y={20}>
          <ContactButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} />
        </FadeIn>
      </div>
    </section>
  );
};
