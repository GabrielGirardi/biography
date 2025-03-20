import React, { useEffect, useRef, CSSProperties } from 'react';

interface ParallaxBackgroundProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  intensity?: 'light' | 'medium' | 'strong';
  overflow?: boolean;
  style?: CSSProperties;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({
  children,
  speed = 0.5,
  className = "",
  direction = "up",
  intensity = "medium",
  overflow = false,
  style = {}
}) => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;

      const scrollY = window.scrollY;
      const element = parallaxRef.current;
      const elementPosition = element.getBoundingClientRect().top + scrollY;

      // Adjust speed based on intensity
      let intensityMultiplier = 1;
      switch (intensity) {
        case "light": intensityMultiplier = 0.5; break;
        case "strong": intensityMultiplier = 1.5; break;
        default: intensityMultiplier = 1;
      }

      const calculatedSpeed = speed * intensityMultiplier;
      const offset = (scrollY - elementPosition) * calculatedSpeed;

      // Apply different transform based on direction
      let transform = '';
      switch (direction) {
        case 'up':
          transform = `translateY(${offset}px)`;
          break;
        case 'down':
          transform = `translateY(-${offset}px)`;
          break;
        case 'left':
          transform = `translateX(${offset}px)`;
          break;
        case 'right':
          transform = `translateX(-${offset}px)`;
          break;
        default:
          transform = `translateY(${offset}px)`;
      }

      element.style.transform = transform;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, direction, intensity]);

  return (
    <div
      ref={parallaxRef}
      className={`transition-transform duration-200 ${overflow ? '' : 'overflow-hidden'} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default ParallaxBackground;
