import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, ChevronDown, MousePointer, Code } from 'lucide-react';
import ParallaxBackground from './ParallaxBackground';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateOnScroll = () => {
      const element = containerRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isVisible) {
        element.classList.add('opacity-100');
        element.classList.remove('opacity-0', 'translate-y-4');
      }
    };

    animateOnScroll();

    window.addEventListener('scroll', animateOnScroll);

    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gray-900 z-0">
        <ParallaxBackground speed={0.2} direction="up" intensity="light" className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 text-kawasaki-green/5 text-8xl transform -translate-x-1/2 -translate-y-1/2">
            <Code size={120} />
          </div>
          <div className="absolute bottom-1/4 right-1/4 text-blue-400/5 text-8xl transform translate-x-1/2 translate-y-1/2">
            <Code size={80} />
          </div>
        </ParallaxBackground>

        <ParallaxBackground speed={0.3} direction="down" intensity="medium" className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-kawasaki-green/10 to-transparent rounded-full blur-3xl opacity-30 -translate-y-1/2 -translate-x-1/2"></div>
        </ParallaxBackground>

        <ParallaxBackground speed={0.4} direction="up" intensity="medium" className="absolute inset-0">
          <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-gradient-radial from-blue-400/10 to-transparent rounded-full blur-3xl opacity-40 translate-y-1/3 translate-x-1/4"></div>
        </ParallaxBackground>

        <ParallaxBackground speed={0.5} direction="left" intensity="medium" className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/5 w-10 h-10 border border-kawasaki-green/20 rounded-full"></div>
          <div className="absolute top-2/3 left-1/5 w-6 h-6 bg-blue-400/10 rounded-md rotate-45"></div>
          <div className="absolute bottom-1/4 right-1/3 w-16 h-1 bg-kawasaki-green/15 rounded-full"></div>
        </ParallaxBackground>

        <ParallaxBackground speed={0.3} direction="right" intensity="light" className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-3 h-12 bg-blue-400/10 rounded-full"></div>
          <div className="absolute bottom-1/3 right-1/4 w-8 h-8 border border-kawasaki-green/15 rounded-lg rotate-12"></div>
        </ParallaxBackground>
      </div>

      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div
        ref={containerRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 opacity-0 translate-y-4 transition-all duration-1000 ease-cubic"
      >
        <div className="flex flex-col items-center text-center">
          <div className="inline-block bg-kawasaki-green/10 px-4 py-1.5 rounded-full text-sm font-medium text-kawasaki-green mb-6 animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
            <span className="inline-block animate-float">
              {t('greeting')}
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 overflow-hidden">
            <div className="relative overflow-hidden">
              <span className="block animate-text-reveal opacity-0" style={{ animationDelay: '500ms' }}>
                <span className="inline-block">
                  <span className="text-gradient">&lt;Gabriel Girardi</span>
                  <span className="text-gray-200">/&gt;</span>
                </span>
              </span>
            </div>
          </h1>

          <h2 className="text-xl sm:text-2xl font-medium text-gray-300 mb-6 animate-fade-in opacity-0" style={{ animationDelay: '700ms' }}>
            {t('profession')}
          </h2>

          <p className="max-w-2xl text-gray-400 mb-10 animate-fade-in opacity-0" style={{ animationDelay: '900ms' }}>
            {t('heroDescription')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fade-in opacity-0" style={{ animationDelay: '1100ms' }}>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-kawasaki-green text-white font-medium transition-all hover:shadow-lg hover:shadow-kawasaki-green/20 hover:translate-y-[-2px] cursor-hover"
            >
              {t('getInTouch')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-gray-200 font-medium transition-all hover:bg-white/20 hover:translate-y-[-2px] cursor-hover"
            >
              {t('viewProjects')}
            </a>
          </div>
        </div>
      </div>

      <ParallaxBackground speed={0.2} direction="down" intensity="light" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
        <div className="animate-bounce">
          <a
            href="#about"
            className="inline-flex flex-col items-center justify-center text-gray-400 hover:text-kawasaki-green transition-colors cursor-hover"
            aria-label="Scroll down"
          >
            <MousePointer className="w-5 h-5 mb-2 opacity-70" />
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </ParallaxBackground>
    </section>
  );
};

export default HeroSection;