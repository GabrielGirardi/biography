import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface Skill {
  name: string;
  level: number;
  color?: string;
}

const SkillsSection: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  const frontendSkills: Skill[] = [
    { name: 'Javascript', level: 100, color: '#FFCA28' },
    { name: 'TypeScript', level: 100, color: '#3178C6' },
    { name: 'Tailwind CSS', level: 100, color: '#38B2AC' },
    { name: 'CSS/SCSS', level: 100, color: '#CC6699' },
    { name: 'React', level: 90, color: '#61DAFB' },
    { name: 'Vue', level: 90, color: '#47A248' },
    { name: 'NextJS', level: 60, color: '#000000' },
  ];

  const backendSkills: Skill[] = [
    { name: 'Node.js', level: 90, color: '#339933' },
    { name: 'Express', level: 90, color: '#000000' },
    { name: 'MongoDB', level: 80, color: '#47A248' },
    { name: 'PostgreSQL', level: 80, color: '#336791' },
    { name: 'PHP', level: 75, color: '#4B32C3' },
    { name: 'Python', level: 30, color: '#FFCA28' },
    { name: 'C#', level: 30, color: '#FF9900' },
  ];

  const toolsSkills: Skill[] = [
    { name: 'Git / Gitlab', level: 100, color: '#F05032' },
    { name: 'BitBucket', level: 100, color: '#007ACC' },
    { name: 'Design System', level: 100, color: '#FFCA28' },
    { name: 'Responsive Design', level: 100, color: '#C21325' },
    { name: 'Figma', level: 90, color: '#F24E1E' },
    { name: 'Docker', level: 40, color: '#2496ED' },
    { name: 'CI/CD', level: 25, color: '#4B32C3' },
  ];

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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const SkillBar: React.FC<{ skill: Skill; delay: number }> = ({ skill, delay }) => (
    <div className="mb-4 animate-on-scroll" style={{ animationDelay: `${delay}ms` }}>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
        <span className="text-sm text-gray-500">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="skill-bar-fill h-full rounded-full"
          style={{ backgroundColor: skill.color || '#3dae2b', width: `${skill.level}%` }}
          data-level={skill.level}
        ></div>
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gray-50 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block bg-kawasaki-green/10 px-3 py-1 rounded-full text-sm font-medium text-kawasaki-green mb-4 animate-on-scroll opacity-0">
            {t('skills')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 animate-on-scroll opacity-0">
            {t('skillsTitle')}
          </h2>
          <p className="text-gray-600 animate-on-scroll opacity-0">
            {t('skillsDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md animate-on-scroll opacity-0">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <svg
                  className="w-5 h-5 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">{t('frontend')}</h3>
            </div>

            <div>
              {frontendSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} delay={index * 100} />
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md animate-on-scroll opacity-0" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">{t('backend')}</h3>
            </div>

            <div>
              {backendSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} delay={100 + index * 100} />
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md animate-on-scroll opacity-0" style={{ animationDelay: '400ms' }}>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                <svg
                  className="w-5 h-5 text-purple-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">{t('tools')}</h3>
            </div>

            <div>
              {toolsSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} delay={200 + index * 100} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-gradient-to-bl from-kawasaki-green/10 to-transparent rounded-full opacity-60"></div>
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-gradient-to-tr from-blue-300/10 to-transparent rounded-full opacity-60"></div>
    </section>
  );
};

export default SkillsSection;