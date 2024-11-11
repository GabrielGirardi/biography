import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import {
  Mail,
  ChevronRight,
  ChevronDown,
  Code,
  Database,
  Server,
  Cloud,
  Github,
  Trello,
  Figma
} from 'lucide-react'

import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'

import Header from './components/layout/header'
import SnakeGame from './components/SnakeGame'
import ParallaxBackground from './components/ParallaxBackground'
import MouseFollower from './components/MouseFollower'
import MotorcycleIllustration from './components/MotorcycleIllustration'
import MotorcycleAnimation from './components/MotorcycleAnimation'
import CaseDetails from './components/CaseDetails'
import SkillCard from './components/SkillCard'
import Page404 from "@/pages/404";

type Language = 'pt-BR' | 'en'

const translations = {
  'pt-BR': {
    name: 'Gabriel Girardi',
    role: 'Desenvolvedor Fullstack & Entusiasta de Motos',
    about: 'Sobre mim',
    aboutText: 'Desenvolvedor fullstack com 3 anos de experiência, apaixonado por criar soluções web inovadoras e eficientes. Tenho um profundo apreço por transformar conceitos em realidade, tornando-os não apenas visíveis, mas também altamente funcionais. Quando não estou codando, você pode me encontrar pilotando minha moto pelas estradas.',
    aboutSectionText: 'Sou um desenvolvedor fullstack apaixonado por criar soluções web inovadoras. Com experiência em várias tecnologias, estou sempre buscando aprender e crescer na minha carreira. Atualmente, atuo como desenvolvedor fullstack, dedicando-me a aprimorar a experiência do usuário por meio de interfaces elegantes e funcionais. No entanto, minha busca por conhecimento é contínua. Tenho um profundo apreço por transformar conceitos em realidade, tornando-os não apenas visíveis, mas também altamente funcionais.',
    skills: 'Habilidades / Ferramentas',
    projects: 'Projetos',
    cases: 'Cases',
    contact: 'Contato',
    theme: 'Tema',
    language: 'Idioma',
    viewProject: 'Ver Projeto',
    viewCase: 'Ver Case',
    scrollDown: 'Rolar para baixo',
    learnMore: 'Saiba mais',
    backToHome: 'Voltar para a página inicial',
    challenge: 'Desafio',
    solution: 'Solução',
    results: 'Resultados',
    allSkills: 'Todas as habilidades',
  },
  'en': {
    name: 'Gabriel Girardi',
    role: 'Fullstack Developer & Motorcycle Enthusiast',
    about: 'About me',
    aboutText: 'Fullstack developer with 3 years of experience, passionate about creating innovative and efficient web solutions. I have a deep appreciation for transforming concepts into reality, making them not only visible but also highly functional. When I\'m not coding, you can find me riding my motorcycle on the open roads.',
    aboutSectionText: 'I am a fullstack developer passionate about creating innovative web solutions. With experience in various technologies, I am always looking to learn and grow in my career. Currently, I work as a fullstack developer, dedicating myself to enhancing user experience through elegant and functional interfaces. However, my quest for knowledge is continuous. I have a deep appreciation for transforming concepts into reality, making them not only visible but also highly functional.',
    skills: 'Skills / Tools',
    projects: 'Projects',
    cases: 'Cases',
    contact: 'Contact',
    theme: 'Theme',
    language: 'Language',
    viewProject: 'View Project',
    viewCase: 'View Case',
    scrollDown: 'Scroll down',
    learnMore: 'Learn more',
    backToHome: 'Back to home',
    challenge: 'Challenge',
    solution: 'Solution',
    results: 'Results',
    allSkills: 'All skills',
  },
}

const skills = [
  { name: 'Frontend', icon: Code, items: ['React', 'Vue', 'jQuery', 'JavaScript', 'TypeScript'] },
  { name: 'Backend', icon: Server, items: ['Node.js', 'PHP', 'Python'] },
  { name: 'Database', icon: Database, items: ['SQL', 'MongoDB', 'Postgres', 'Supabase'] },
  { name: 'Cloud', icon: Cloud, items: ['AWS', 'Google Cloud'] },
  { name: 'Version Control', icon: Github, items: ['Git', 'GitLab'] },
  { name: 'Project Management', icon: Trello, items: ['Kanban', 'Scrum', 'Jira', 'ClickUp', 'Bitrix24'] },
  { name: 'UI/UX', icon: Figma, items: ['Figma'] },
]
const projects = [
  { name: 'Weather Forecast', link: 'https://weather-forecast-gg.vercel.app/', description: 'This weather forecast project is a web application that allows users to obtain accurate and up-to-date weather information for any city in the world.' },
  { name: 'Credit System', link: 'https://github.com/GabrielGirardi/credit-system', description: 'This credit system project is a web application that allows users to efficiently manage and monitor their credit scores.' },
  { name: 'Restaurant System', link: 'https://restaurant-system-one.vercel.app/', description: 'A complete Restaurant platform with shopping cart, table, and about.' },
]

const cases = [
  { id: 1, name: 'Magazord', description: 'Developed the user interface of a major e-commerce platform, resulting in a 30% increase in conversion rates.', image: '/images/magazord.jpg' },
  { id: 2, name: 'T-Code Soluções', description: 'Developed a cross-platform mobile app for a startup, leading to 100,000+ downloads in the first month.', image: '/images/t-code.jpg' },
  { id: 3, name: 'BRBox', description: 'Integrated multiple third-party APIs into a client\'s existing system, streamlining their business processes.', image: '/placeholder.svg?height=200&width=400' },
  { id: 4, name: 'LogPago', description: 'Integrated multiple third-party APIs into a client\'s existing system, streamlining their business processes.', image: '/images/LogPago.jpg' },
]

function FadeInSection({ children }: { children: React.ReactNode }) {
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting))
    })

    const currentRef = domRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
      <div
          className={`transition-opacity duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          ref={domRef}
      >
        {children}
      </div>
  )
}

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [language, setLanguage] = useState<Language>('pt-BR')
  const t = translations[language]

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
              <ParallaxBackground />
              <MouseFollower />
              <Header
                  theme={theme}
                  language={language}
                  setTheme={setTheme}
                  setLanguage={setLanguage}
                  name={t.name}
              />
              <main className="flex-grow px-4 sm:px-6 py-12 space-y-24 overflow-y-auto w-full relative z-10">
                <FadeInSection>
                  <section className="min-h-screen flex flex-col justify-center items-center text-center relative">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">{t.name}</h2>
                    <p className="text-xl sm:text-2xl text-muted-foreground mb-8">{t.role}</p>
                    <div className="mb-12">
                      <MotorcycleIllustration />
                    </div>
                    <p className="text-lg sm:text-xl max-w-2xl mb-12">{t.aboutText}</p>
                    <div className="animate-bounce flex items-center p-2 gap-2 rounded-xl border bg-card text-card-foreground shadow backdrop-blur-lg bg-opacity-50">
                      {t.scrollDown}
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </section>
                </FadeInSection>
                <FadeInSection>
                  <section className="min-h-screen flex flex-col md:flex-row justify-center items-center text-center bg-background rounded-lg transition-all border border-primary-foreground backdrop-blur-lg bg-opacity-50 mb-10 overflow-hidden">
                    <div className="w-full md:w-1/2 shadow-md backdrop-blur-lg bg-opacity-50">
                      <h3 className="text-2xl sm:text-3xl font-semibold mt-4 2xl:mt-0 mb-4 text-center">{t.about}</h3>
                      <p className="text-lg sm:text-xl md:mx-auto md:px-6">
                        {t.aboutSectionText}
                      </p>
                      <div className="p-8">
                        <h4 className="text-1xl sm:text-2xl font-semibold mb-8 text-center">{t.skills}</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                          {skills.map((skillCategory, index) => (
                              <SkillCard key={index} name={skillCategory.name} icon={skillCategory.icon}/>
                          ))}
                        </div>
                        <div className="mt-12">
                          <h4 className="text-xl font-semibold mb-4 text-center">{t.allSkills}</h4>
                          <div className="flex flex-wrap justify-center gap-2">
                            {skills.flatMap(category => category.items).map((skill, index) => (
                                <span key={index} className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm">
                          {skill}
                        </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2">
                      <img className="flex object-contain w-full" src="/images/banner-profile.jpeg" alt="banner profile"
                           width={128} height={128}/>
                    </div>
                  </section>
                </FadeInSection>
                <FadeInSection>
                  <section>
                    <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">{t.projects}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      {projects.map((project, index) => (
                          <Card key={index} className="transition-all hover:shadow-lg backdrop-blur-lg bg-opacity-50">
                            <CardHeader>
                              <CardTitle className="text-xl sm:text-2xl">{project.name}</CardTitle>
                              <CardDescription
                                  className="text-sm sm:text-base h-[72px] overflow-hidden">{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" className="w-full">
                                {t.viewProject}
                                  <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                              </a>
                            </CardContent>
                          </Card>
                      ))}
                    </div>
                  </section>
                </FadeInSection>
                <FadeInSection>
                  <section>
                    <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">{t.cases}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      {cases.map((caseItem, index) => (
                          <Card key={index} className="transition-all hover:shadow-lg backdrop-blur-lg bg-opacity-50 overflow-hidden">
                            <img src={caseItem.image} alt={caseItem.name} className="w-full h-48 object-cover" />
                            <CardHeader>
                              <CardTitle className="text-xl sm:text-2xl">{caseItem.name}</CardTitle>
                              <CardDescription className="text-sm sm:text-base h-[72px] overflow-hidden">{caseItem.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <Link to={`/case/${caseItem.id}`}>
                                <Button variant="outline" className="w-full">
                                  {t.learnMore}
                                  <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                              </Link>
                            </CardContent>
                          </Card>
                      ))}
                    </div>
                  </section>
                </FadeInSection>

                {/* Contact section */}
                <FadeInSection>
                  <section>
                    <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">{t.contact}</h3>
                    <Card className="max-w-md mx-auto backdrop-blur-lg bg-opacity-50">
                      <CardContent className="flex flex-col items-center space-y-6 py-8">
                        <Mail className="h-12 w-12 text-primary" />
                        <a href="mailto:your.email@example.com" className="text-lg sm:text-xl text-primary hover:underline transition-colors">
                          dev.ggirardi@gmail.com
                        </a>
                        <div className="flex space-x-4">
                          <Button variant="outline" size="lg" className="transition-transform hover:scale-105">
                            LinkedIn
                          </Button>
                          <Button variant="outline" size="lg" className="transition-transform hover:scale-105">
                            GitHub
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </section>
                </FadeInSection>
                <FadeInSection>
                  <section className="flex flex-col items-center">
                    <h3 className="text-2xl sm:text-3xl font-semibold mb-8">Snake Game</h3>
                    <div className="backdrop-blur-lg bg-opacity-50 p-4 rounded-lg">
                      <SnakeGame />
                    </div>
                  </section>
                </FadeInSection>
              </main>
              <footer className="relative flex flex-col items-center justify-center py-2 text-center text-muted-foreground bg-background">
                <MotorcycleAnimation />
                <p>- - - - - ®2024 Gabriel Girardi. - - - - -</p>
              </footer>
            </div>
          } />
          <Route path="/case/:id" element={<CaseDetails cases={cases} translations={translations} />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App