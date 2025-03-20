import React, { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import TravelSection from '../components/TravelSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import { useLanguage } from '../context/LanguageContext';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Track scroll progress
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentProgress = Math.min(window.scrollY / totalScroll, 1);
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
        <div className="text-center">
          <div className="w-16 h-16 border-t-4 border-kawasaki-green border-solid rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg text-gray-100 font-medium">{t('loading')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 bg-noise">
      {/* Background gradients */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900 to-gray-950 z-0"></div>

      {/* Noise overlay */}
      <div className="fixed inset-0 bg-noise opacity-40 z-0"></div>

      {/* Subtle grid overlay */}
      <div className="fixed inset-0 z-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      {/* Scroll progress indicator */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-kawasaki-green via-blue-400 to-kawasaki-green z-50 transition-all duration-150"
        style={{ width: `${scrollProgress * 100}%` }}
      ></div>

      <div className="relative z-10">
        <CustomCursor />
        <Navbar />

        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <TravelSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Index;