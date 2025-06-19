import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Code, Map, Calendar, Puzzle, Hammer, Gamepad } from 'lucide-react';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const stats = [
    { value: '12+', label: t('completedProjects') },
    { value: '4+', label: t('yearsExperience') },
    { value: '3+', label: t('automatedProjects') },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-on-scroll opacity-0">
            <div className="relative rounded-lg overflow-hidden">
              <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-blue-300/20 mix-blend-multiply"></div>

                <div className="bg-gradient-to-br from-gray-100 to-gray-200 w-full h-full flex items-center justify-center border border-yellow-500">
                  <video
                    className="w-full h-full text-yellow-500/30"
                    src="/video.mp4"
                    autoPlay
                    loop
                    muted
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg border border border-yellow-500">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center">
                    <Map className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-800">Brasil</div>
                    <div className="text-xs text-gray-500">SC - Santa Catarina</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-8 mt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center animate-on-scroll opacity-0 bg-yellow-500/10 p-4 rounded-lg shadow-lg border border border-yellow-500"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="text-4xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="inline-block bg-yellow-500/10 px-3 py-1 rounded-full text-sm font-medium text-yellow-500 mb-4 animate-on-scroll opacity-0">
              {t('about')}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 animate-on-scroll opacity-0">
              {t('aboutTitle')}
            </h2>

            <div className="space-y-6">
              <p className="text-gray-700 animate-on-scroll opacity-0">
                {t('aboutDescription')}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-50 p-5 rounded-lg animate-on-scroll opacity-0" style={{ animationDelay: '200ms' }}>
                  <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center mb-4">
                    <Code className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Development</h3>
                  <p className="text-gray-600 text-sm">
                    {t('aboutDevelopment')}
                  </p>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg animate-on-scroll opacity-0" style={{ animationDelay: '300ms' }}>
                  <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Riding</h3>
                  <p className="text-gray-600 text-sm">
                    {t('aboutRiding')}
                  </p>
                </div>
              </div>

              <div className="mt-8 animate-on-scroll opacity-0" style={{ animationDelay: '400ms' }}>
                <a
                  href="#skills"
                  className="inline-flex items-center text-yellow-500 hover:text-yellow-500/80 font-medium cursor-hover"
                >
                  <span>{t('readMore')}</span>
                  <svg className="w-5 h-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 bg-gray-50 rounded-2xl p-8 animate-on-scroll opacity-0">
          <div className="mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t('personalTitle')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                    <Puzzle className="w-5 h-5 text-yellow-500"/>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">{t('personalInterestsTitle')}</h4>
                    <p className="text-gray-600">{t('personalInterests')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                    <Hammer className="w-5 h-5 text-yellow-500"/>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">{t('personalInterestsTitle2')}</h4>
                    <p className="text-gray-600">{t('personalInterests2')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                    <Gamepad className="w-5 h-5 text-yellow-500"/>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">{t('personalInterestsTitle3')}</h4>
                    <p className="text-gray-600">{t('personalInterests3')}</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <p className="text-gray-600">{t('personalBackground')}</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h4 className="text-lg font-medium text-gray-900 mb-4">{t('personalHighlightsTitle')}</h4>
                  <ul className="space-y-3">
                    {t('personalHighlights').split('\n').map((highlight, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <img src="/photo.jpeg" alt="foto de perfil" className="w-full h-auto rounded-xl shadow-lg border border-gray-100"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-yellow-500/5 to-transparent rounded-full opacity-70 translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-300/5 to-transparent rounded-full opacity-70 -translate-x-1/3 -translate-y-1/3"></div>
    </section>
  );
};

export default AboutSection;
