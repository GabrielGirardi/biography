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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'auto';
    }

    return () => {
      document.documentElement.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

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
        isScrolled ? 'bg-white/20 backdrop-blur-md border-b border-gray-200/20 shadow-sm' : 'bg-transparent'
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
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover-link text-sm font-medium cursor-hover text-yellow-500"
              >
                {link.name}
              </a>
            ))}

            <button
              onClick={toggleLanguage}
              className="flex items-center text-sm font-medium text-blue-500 hover:text-yellow-500 transition-colors duration-200 cursor-hover"
              aria-label={`Switch to ${language === 'en' ? 'Portuguese' : 'English'}`}
            >
              <Globe className="w-4 h-4 mr-1" />
              <span>{language === 'en' ? 'PT' : 'EN'}</span>
            </button>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-lg hover:bg-yellow-500/10 transition-all duration-200 text-gray-800 hover:text-yellow-500 cursor-hover"
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

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile menu */}
      <nav
        className={`fixed top-16 bottom-0 left-0 z-50 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 md:hidden transition-all duration-300 ease-in-out shadow-2xl border-l border-gray-700 ${
          isMobileMenuOpen ? 'w-screen right-0' : 'w-0 right-full'
        }`}
      >
        <div className="h-full overflow-y-auto">
          {/* Menu items container */}
          <div className="flex flex-col pt-6 px-0">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-6 py-4 text-lg font-semibold transition-all duration-300 cursor-hover border-l-4 border-transparent hover:border-yellow-500 hover:bg-gray-800/50 hover:text-yellow-400 text-gray-100 ${
                  index !== navLinks.length - 1 ? 'border-b border-gray-700' : ''
                }`}
                onClick={handleLinkClick}
                style={{
                  animation: isMobileMenuOpen ? `slideIn 0.3s ease-out ${index * 0.05}s forwards` : 'none',
                  opacity: isMobileMenuOpen ? 1 : 0,
                }}
              >
                <span className="flex items-center">
                  <span className="inline-block mr-3 text-yellow-500">•</span>
                  {link.name}
                </span>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="my-2 border-t border-gray-700" />

           {/* Language toggle */}
           <div className="px-6 py-4">
             <button
               onClick={toggleLanguage}
               className="w-full flex items-center justify-center py-3 px-4 bg-yellow-500/10 border-2 border-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-gray-900 text-yellow-400 transition-all duration-200 cursor-hover font-semibold"
               aria-label={`Switch to ${language === 'en' ? 'Portuguese' : 'English'}`}
             >
               <Globe className="w-5 h-5 mr-2" />
               <span>{language === 'en' ? 'Português' : 'English'}</span>
             </button>
           </div>
         </div>
       </nav>

      {/* Keyframe animation */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;