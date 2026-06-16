import React, { useRef, useEffect } from 'react';

const ROW1_IMAGES = [
  "/brave_screenshot_www.thedevdale.com.webp",
  "/brave_screenshot_glowwithjwells.vercel.app.webp",
  "/brave_screenshot_patentsplanet.com.webp",
  "/brave_screenshot_sundown-studio-clone-gamma.vercel.app.webp",
  "/brave_screenshot_laza-rev-alpha.vercel.app.webp"
];

const ROW2_IMAGES = [
  "/brave_screenshot_sundown-studio-clone-gamma.vercel.app.webp",
  "/brave_screenshot_laza-rev-alpha.vercel.app.webp",
  "/brave_screenshot_www.thedevdale.com.webp",
  "/brave_screenshot_glowwithjwells.vercel.app.webp",
  "/brave_screenshot_patentsplanet.com.webp"
];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);
  const sectionTopRef = useRef<number>(0);

  useEffect(() => {
    const getElementOffset = (element: HTMLElement) => {
      let top = 0;
      let el: HTMLElement | null = element;
      while (el) {
        top += el.offsetTop;
        el = el.offsetParent as HTMLElement | null;
      }
      return top;
    };

    const updateSectionTop = () => {
      if (sectionRef.current) {
        sectionTopRef.current = getElementOffset(sectionRef.current);
      }
    };

    updateSectionTop();

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionTop = sectionTopRef.current;
      const calculatedOffset = (scrollY - sectionTop + window.innerHeight) * 0.3;
      
      if (track1Ref.current) {
        track1Ref.current.style.transform = `translate3d(calc(-33.333% + ${calculatedOffset - 200}px), 0, 0)`;
      }
      if (track2Ref.current) {
        track2Ref.current.style.transform = `translate3d(calc(-33.333% - ${calculatedOffset - 200}px), 0, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateSectionTop);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateSectionTop);
    };
  }, []);

  const row1Tripled = [...ROW1_IMAGES, ...ROW1_IMAGES, ...ROW1_IMAGES];
  const row2Tripled = [...ROW2_IMAGES, ...ROW2_IMAGES, ...ROW2_IMAGES];

  return (
    <section 
      ref={sectionRef} 
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden w-full"
    >
      <div className="flex flex-col gap-3 w-full">
        {/* Row 1: Moves RIGHT on scroll */}
        <div className="overflow-hidden w-full">
          <div 
            ref={track1Ref}
            className="flex gap-3 w-max"
            style={{ 
              willChange: 'transform'
            }}
          >
            {row1Tripled.map((url, i) => (
              <img
                key={`row1-${i}`}
                src={url}
                alt="Marquee Design 1"
                loading="lazy"
                className="w-[280px] h-[180px] sm:w-[420px] sm:h-[270px] rounded-2xl object-cover select-none pointer-events-none"
              />
            ))}
          </div>
        </div>

        {/* Row 2: Moves LEFT on scroll */}
        <div className="overflow-hidden w-full">
          <div 
            ref={track2Ref}
            className="flex gap-3 w-max"
            style={{ 
              willChange: 'transform'
            }}
          >
            {row2Tripled.map((url, i) => (
              <img
                key={`row2-${i}`}
                src={url}
                alt="Marquee Design 2"
                loading="lazy"
                className="w-[280px] h-[180px] sm:w-[420px] sm:h-[270px] rounded-2xl object-cover select-none pointer-events-none"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
