import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface WordProps {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

const Word: React.FC<WordProps> = ({ word, index, total, progress }) => {
  // Each word fades from 0.2 to 1 over a portion of the scroll timeline
  const start = (index / total) * 0.82;
  const end = Math.min(1, start + 0.18);
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <motion.span
      className="inline-block mr-[0.25em] relative select-none"
      style={{ opacity }}
    >
      {word}
    </motion.span>
  );
};

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "", style }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.15'],
  });

  const words = text.split(' ');
  const totalWords = words.length;

  return (
    <p ref={containerRef} className={className} style={style}>
      {words.map((word, index) => (
        <Word
          key={index}
          word={word}
          index={index}
          total={totalWords}
          progress={scrollYProgress}
        />
      ))}
    </p>
  );
};
