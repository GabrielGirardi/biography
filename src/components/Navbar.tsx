import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt-BR' : 'en');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: t('home'), href: '/#hero' },
    { name: t('about'), href: '/#about' },
    { name: t('skills'), href: '/#skills' },
    { name: t('projects'), href: '/#projects' },
    { name: t('contact'), href: '/#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-200/20 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
            className="text-2xl font-bold tracking-tighter relative cursor-hover"
            aria-label="Home"
          >
            <span className="inline-block">
              <span className="text-gradient">&lt;GG</span>
              <span className="text-gradient">/&gt;</span>
            </span>
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-kawasaki-green transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover-link text-sm font-medium cursor-hover text-kawasaki-green"
              >
                {link.name}
              </a>
            ))}

            <button
              onClick={toggleLanguage}
              className="flex items-center text-sm font-medium text-blue-500 hover:text-kawasaki-green transition-colors duration-200 cursor-hover"
              aria-label={`Switch to ${language === 'en' ? 'Portuguese' : 'English'}`}
            >
              <Globe className="w-4 h-4 mr-1" />
              <span>{language === 'en' ? 'PT' : 'EN'}</span>
            </button>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center text-gray-800 cursor-hover"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-50 bg-white/90 backdrop-blur-md md:hidden transition-transform duration-300 ease-cubic ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 p-6">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl font-medium hover:text-kawasaki-green transition-colors duration-200 cursor-hover"
                onClick={handleLinkClick}
              >
                {link.name}
              </a>
            ))}

            {/* Language toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center text-2xl font-medium hover:text-kawasaki-green transition-colors duration-200 cursor-hover mt-4"
              aria-label={`Switch to ${language === 'en' ? 'Portuguese' : 'English'}`}
            >
              <Globe className="w-5 h-5 mr-2" />
              <span>{t('switchLanguage')}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;