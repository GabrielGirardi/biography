import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Github, Linkedin, Mail, Globe, Heart, ArrowUp, Code, Bike, Coffee } from 'lucide-react';
import ParallaxBackground from './ParallaxBackground';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-gray-900 text-gray-300 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950"></div>
      <div className="absolute inset-0 bg-noise opacity-20"></div>
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      <ParallaxBackground speed={0.2} direction="up" intensity="light" className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-12 -left-12 w-96 h-96 bg-gradient-radial from-kawasaki-green/5 to-transparent rounded-full opacity-50"></div>
      </ParallaxBackground>

      <ParallaxBackground speed={0.3} direction="down" intensity="light" className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-12 -right-12 w-96 h-96 bg-gradient-radial from-blue-400/5 to-transparent rounded-full opacity-50"></div>
      </ParallaxBackground>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-kawasaki-green">&lt;Dev</span>
                <span className="text-gray-300">/&gt;</span>
              </span>
            </div>
            <p className="mt-4 text-gray-400 max-w-md">
              {t('heroDescription')}
            </p>
            <div className="flex space-x-5 mt-6">
              <a
                href="https://github.com/gabrielgirardi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-kawasaki-green transition-colors duration-300 cursor-hover"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ggirardii/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-kawasaki-green transition-colors duration-300 cursor-hover"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:dev.ggirardi@gmail.com"
                className="text-gray-400 hover:text-kawasaki-green transition-colors duration-300 cursor-hover"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4 border-b border-gray-800 pb-2">
              {t('about')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-kawasaki-green transition-colors duration-300 flex items-center cursor-hover"
                >
                  <Code className="w-4 h-4 mr-2" />
                  {t('about')}
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-kawasaki-green transition-colors duration-300 flex items-center cursor-hover"
                >
                  <Coffee className="w-4 h-4 mr-2" />
                  {t('skills')}
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-kawasaki-green transition-colors duration-300 flex items-center cursor-hover"
                >
                  <Code className="w-4 h-4 mr-2" />
                  {t('projects')}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-kawasaki-green transition-colors duration-300 flex items-center cursor-hover"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  {t('contact')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4 border-b border-gray-800 pb-2">
              {t('contact')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-2 text-kawasaki-green" />
                <a href="mailto:hello@example.com" className="hover:text-kawasaki-green transition-colors duration-300 cursor-hover">
                  dev.ggirardi@gmail.com
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Globe className="w-4 h-4 mr-2 text-kawasaki-green" />
                <a href="https://dev-gg.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-kawasaki-green transition-colors duration-300 cursor-hover">
                  Website
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Bike className="w-4 h-4 mr-2 text-kawasaki-green" />
                <span>Kawasaki Versys</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} {t('copyright')}
          </p>
          <p className="text-gray-500 text-sm mt-4 md:mt-0 flex items-center">
            {t('designedBy')}
          </p>
          <button
            onClick={scrollToTop}
            className="mt-6 md:mt-0 p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-kawasaki-green hover:text-white transition-all duration-300 cursor-hover group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;