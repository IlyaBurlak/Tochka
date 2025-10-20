import { ReactNode } from 'react';
import { FloatingShapes } from '../FloatingShapes/FloatingShapes.tsx';

interface HeroSectionProps {
  title: ReactNode;
  subtitle: ReactNode;
  ctaButtons: ReactNode;
  animationContent: ReactNode;
  shapesCount?: number;
}

export const HeroSection = ({
  title,
  subtitle,
  ctaButtons,
  animationContent,
  shapesCount = 5,
}: HeroSectionProps) => {
  return (
    <section className='hero'>
      <div className='hero-content'>
        <h1>{title}</h1>
        <p className='subtitle'>{subtitle}</p>
        {ctaButtons}
      </div>

      <div className='hero-animation'>
        <FloatingShapes count={shapesCount} />
        <div className='animation-content'>{animationContent}</div>
      </div>
    </section>
  );
};
