import React, { useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useIsMobile } from '../hooks/use-mobile';

interface Skill {
  name: string;
  category: string;
  icon: string;
  color: string;
}

const SkillsSection: React.FC = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('Frontend');

   const skills: Skill[] = [
     { name: 'JavaScript', category: 'Frontend', icon: '⚡', color: '#FFD700' },
     { name: 'TypeScript', category: 'Frontend', icon: '🔷', color: '#B8860B' },
     { name: 'React', category: 'Frontend', icon: '⚛️', color: '#DAA520' },
     { name: 'Vue.js', category: 'Frontend', icon: '💚', color: '#FFD700' },
     { name: 'Next.js', category: 'Frontend', icon: '▲', color: '#B8860B' },
     { name: 'Tailwind', category: 'Frontend', icon: '🌊', color: '#DAA520' },

     { name: 'Node.js', category: 'Backend', icon: '🚀', color: '#FFD700' },
     { name: 'Python', category: 'Backend', icon: '🐍', color: '#B8860B' },
     { name: 'MongoDB', category: 'Backend', icon: '🍃', color: '#DAA520' },
     { name: 'PostgreSQL', category: 'Backend', icon: '🐘', color: '#FFD700' },
     { name: 'Express', category: 'Backend', icon: '⚡', color: '#B8860B' },
     { name: 'GraphQL', category: 'Backend', icon: '🔗', color: '#DAA520' },

     { name: 'Git', category: 'Tools', icon: '🌿', color: '#FFD700' },
     { name: 'Docker', category: 'Tools', icon: '🐳', color: '#B8860B' },
     { name: 'AWS', category: 'Tools', icon: '☁️', color: '#DAA520' },
     { name: 'Figma', category: 'Tools', icon: '🎨', color: '#FFD700' },
   ];

   const categories = ['Frontend', 'Backend', 'Tools'];
   const filteredSkills = isMobile
     ? skills.filter(skill => skill.category === selectedCategory)
     : skills;

  const SkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => (
    <div
      className={`skill-card ${hoveredSkill === skill.name ? 'hovered' : ''}`}
      style={{
        '--delay': `${index * 0.1}s`,
        '--color': skill.color,
      } as React.CSSProperties}
      onMouseEnter={() => setHoveredSkill(skill.name)}
      onMouseLeave={() => setHoveredSkill(null)}
    >
      <div className="card-glow"></div>
      <div className="card-content">
        <div className="skill-icon-wrapper">
          <span className="skill-icon">{skill.icon}</span>
        </div>
        <div className="skill-info">
          <h3 className="skill-name">{skill.name}</h3>
          <span className="skill-category">{skill.category}</span>
        </div>
        <div className="skill-line"></div>
      </div>
    </div>
  );

  return (
    <section className="skills-universe min-h-screen py-20 relative">
      <canvas ref={canvasRef} className="background-canvas" />
      <div className="matrix-bg"></div>
      <div className="floating-elements">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="floating-code"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
            }}
          >
            {['const', 'function', 'return', 'import', 'export', 'async', 'await'][i % 7]}
          </div>
        ))}
      </div>

      <div className="skills-content relative z-10">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <div className="dev-badge inline-block px-6 py-3 rounded-full mb-6">
              <span className="text-yellow-400 font-medium">💻 Full Stack Developer</span>
            </div>

            <h2 className="title-main golden-text">
              {t('skillsTitle')}
            </h2>
            <div className="golden-line"></div>
            <p className="title-sub">
              {t('skillsDescription')}
            </p>
           </div>

           {/* Category Tabs - Mobile Only */}
           {isMobile && (
             <div className="flex justify-center gap-3 mb-8 flex-wrap">
               {categories.map((category) => (
                 <button
                   key={category}
                   onClick={() => setSelectedCategory(category)}
                   className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 cursor-hover ${
                     selectedCategory === category
                       ? 'bg-yellow-500 text-gray-900 shadow-lg shadow-yellow-500/50'
                       : 'bg-gray-800/50 border border-gray-700 text-gray-300 hover:border-yellow-500 hover:text-yellow-400'
                   }`}
                 >
                   {category}
                 </button>
               ))}
             </div>
           )}

           <div className="skills-grid" ref={containerRef}>
             {filteredSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;