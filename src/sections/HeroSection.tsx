import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { Magnet } from '../components/Magnet';
import { ContactButton } from '../components/ContactButton';
import PillNav from '../components/PillNav';
import GradientText from '../components/GradientText';

export const HeroSection: React.FC = () => {
  return (
    <section className="h-screen flex flex-col justify-between relative overflow-hidden bg-[#0C0C0C] w-full">
      {/* Hero Portrait - Centered absolutely */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-10">
        <FadeIn
          delay={0.6}
          y={30}
          className="w-[240px] min-[400px]:w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] absolute left-1/2 -translate-x-1/2 bottom-0 pointer-events-none sm:pointer-events-auto"
        >
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full"
          >
            <img
              src="/portrait.webp"
              alt="Naveen Portrait"
              className="w-full h-auto object-contain select-none pointer-events-none"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Navbar */}
      <PillNav
        logo="/naveenLogo.webp"
        logoAlt="Naveen Logo"
        items={[
          { label: 'About', href: '#about' },
          { label: 'Skills', href: '#services' },
          { label: 'Projects', href: '#projects' },
          { label: 'Contact', href: '#contact' }
        ]}
        baseColor="#D7E2EA"
        pillColor="#0C0C0C"
        pillTextColor="#D7E2EA"
        hoveredPillTextColor="#0C0C0C"
      />

      {/* Heading Container */}
      <div className="overflow-hidden w-full z-0 flex items-center justify-center flex-grow">
        <FadeIn delay={0.15} y={40} className="w-full text-center">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[10vw] sm:text-[9.5vw] md:text-[10vw] lg:text-[10.5vw] xl:text-[11vw] mt-6 sm:mt-4 md:-mt-5 select-none">
            Hi, i&apos;m naveen
          </h1>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 sm:gap-0 w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20">
        <FadeIn delay={0.35} y={20} className="w-full sm:w-auto flex justify-center sm:justify-start">
          <GradientText
            colors={["#5227FF", "#FF9FFC", "#B497CF"]}
            animationSpeed={6}
            showBorder={false}
            direction="horizontal"
            className="text-center sm:text-left mx-auto sm:mx-0 font-thin uppercase tracking-wide leading-snug max-w-[280px] sm:max-w-[220px] md:max-w-[260px] select-none"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a full stack developer & 3d web creator crafting immersive digital experiences
          </GradientText>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} />
        </FadeIn>
      </div>
    </section>
  );
};
