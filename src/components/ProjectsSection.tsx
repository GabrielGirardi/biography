import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import ParallaxBackground from './ParallaxBackground';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

const ProjectsSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'GoCatalog Platform',
      description: language === 'en' ?
        'A modern e-commerce platform built with Next, Typescript, and Postgres.' :
        'Uma plataforma de e-commerce moderna construída com Next, Typescript, e Postgres.',
      image: 'https://i.ibb.co/3yjqgtV6/Captura-de-tela-de-2025-02-25-22-00-16.png',
      tags: ['Next.js', 'Postgres', 'Tailwind', 'Prisma'],
      liveUrl: 'https://gocatalog.framer.website/',
      featured: true,
    },
    {
      id: 2,
      title: 'Website - TCode Soluções',
      description: language === 'en' ?
        'Development of a commercial website, highlighting its services, products and values.' :
        'Desenvolvimento de um website comercial, destacando seus serviços, produtos e valores.',
      image: 'https://i.ibb.co/Dgvncprq/Captura-de-tela-de-2025-03-20-15-45-20.png',
      tags: ['React', 'TypeScript', 'Vite', 'Tailwind'],
      liveUrl: 'https://www.tcodesolucoes.com/',
      githubUrl: '',
      featured: true,
    },
    {
      id: 3,
      title: 'Restaurant System',
      description: language === 'en' ?
        'A complete Restaurant platform with shopping cart, table, and about.' :
        'Uma plataforma de restaurante completa com carrinho de compras, mesa e muito mais.',
      image: 'https://i.ibb.co/zVH8mPQ0/Captura-de-tela-de-2025-03-20-15-46-16.png',
      tags: ['Vue.js', 'Jquery', 'CSS/Scss', 'Vercel'],
      liveUrl: 'https://restaurant-system-one.vercel.app/',
      githubUrl: 'https://github.com/GabrielGirardi/restaurant-system',
      featured: true,
    },
  ];

  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

  const filteredProjects = selectedTag
    ? projects.filter(project => project.tags.includes(selectedTag))
    : projects;

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

    const elements = document.querySelectorAll('.project-card');
    elements.forEach((el, index) => {
      (el as HTMLElement).style.animationDelay = `${index * 150}ms`;
      observer.observe(el);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [filteredProjects]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-100 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <ParallaxBackground speed={0.2} className="absolute -left-20 top-20 opacity-10">
          <div className="w-64 h-64 rounded-full bg-kawasaki-green"></div>
        </ParallaxBackground>
        <ParallaxBackground speed={0.3} className="absolute right-10 top-40 opacity-10">
          <div className="w-96 h-96 rounded-full bg-blue-400"></div>
        </ParallaxBackground>
        <ParallaxBackground speed={-0.1} className="absolute -bottom-20 left-1/3 opacity-5">
          <div className="w-[500px] h-[500px] rounded-full bg-gray-800"></div>
        </ParallaxBackground>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block bg-kawasaki-green/10 px-3 py-1 rounded-full text-sm font-medium text-kawasaki-green mb-4 animate-on-scroll opacity-0">
            {t('projects')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 animate-on-scroll opacity-0">
            {t('projectsTitle')}
          </h2>
          <p className="text-gray-600 animate-on-scroll opacity-0">
            {t('projectsDescription')}
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-8 animate-on-scroll opacity-0">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                selectedTag === null
                  ? 'bg-kawasaki-green text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  selectedTag === tag
                    ? 'bg-kawasaki-green text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ParallaxBackground
              key={project.id}
              speed={0.05}
              className="project-card bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl opacity-0 transform translate-y-4"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-end space-x-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-gray-800 hover:bg-white transition-colors cursor-hover"
                        aria-label="GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-gray-800 hover:bg-white transition-colors cursor-hover"
                      aria-label="Live preview"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                {/* Links */}
                <div className="flex justify-between items-center">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-kawasaki-green hover:text-kawasaki-green/80 font-medium text-sm flex items-center cursor-hover"
                  >
                    {t('viewLive')}
                    <ArrowUpRight className="w-4 h-4 ml-1" />
                  </a>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-800 font-medium text-sm flex items-center cursor-hover"
                    >
                      {t('viewCode')}
                      <Github className="w-4 h-4 ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </ParallaxBackground>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/GabrielGirardi"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-800 font-medium transition-all hover:shadow-lg hover:bg-gray-50 hover:translate-y-[-2px] cursor-hover"
          >
            {t('viewAll')}
            <ArrowUpRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;