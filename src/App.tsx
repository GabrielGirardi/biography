import { useState, useEffect, useRef } from 'react'

import {
  Mail,
  ChevronRight
} from 'lucide-react'

import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import SnakeGame from './components/SnakeGame'
import ParallaxBackground from './components/ParallaxBackground'
import MouseFollower from './components/MouseFollower'
import MotorcycleIllustration from './components/MotorcycleIllustration'
import MotorcycleAnimation from './components/MotorcycleAnimation'
import Header from './components/layout/header'

type Language = 'pt-BR' | 'en'

const translations = {
  'pt-BR': {
    name: 'Gabriel Girardi',
    role: 'Desenvolvedor Fullstack & Entusiasta de Motos',
    about: 'Sobre mim',
    aboutText: 'Desenvolvedor fullstack com 3 anos de experiência, apaixonado por criar soluções web inovadoras e eficientes. Tenho um profundo apreço por transformar conceitos em realidade, tornando-os não apenas visíveis, mas também altamente funcionais. Quando não estou codando, você pode me encontrar pilotando minha moto pelas estradas.',
    skills: 'Habilidades / Ferramentas',
    projects: 'Projetos',
    cases: 'Cases',
    contact: 'Contato',
    theme: 'Tema',
    language: 'Idioma',
    viewProject: 'Ver Projeto',
    viewCase: 'Ver Case',
  },
  'en': {
    name: 'Gabriel Girardi',
    role: 'Fullstack Developer & Motorcycle Enthusiast',
    about: 'About me',
    aboutText: 'Fullstack developer with 3 years of experience, passionate about creating innovative and efficient web solutions. I have a deep appreciation for transforming concepts into reality, making them not only visible but also highly functional. When I\'m not coding, you can find me riding my motorcycle on the open roads.',
    skills: 'Skills / Tools',
    projects: 'Projects',
    cases: 'Cases',
    contact: 'Contact',
    theme: 'Theme',
    language: 'Language',
    viewProject: 'View Project',
    viewCase: 'View Case',
  },
}

const skills = ['React', 'Vue', 'JQuery', 'Javascript', 'TypeScript', 'Node.js', 'PHP', 'Python', 'SQL', 'MongoDB', 'Postgres', 'Supabase', 'AWS', 'Google Cloud', 'Git', 'Gitlab', 'Kanban', 'Scrum', 'Jira', 'ClickUp', 'Bitrix24', 'Figma']

const projects = [
  { name: 'Weather Forecast', link: 'https://weather-forecast-gg.vercel.app/', description: 'This weather forecast project is a web application that allows users to obtain accurate and up-to-date weather information for any city in the world.' },
  { name: 'Credit System', link: 'https://github.com/GabrielGirardi/credit-system', description: 'This credit system project is a web application that allows users to efficiently manage and monitor their credit scores.' },
  { name: 'Restaurant System', link: 'https://restaurant-system-one.vercel.app/', description: 'A complete Restaurant platform with shopping cart, table, and about.' },
]

const cases = [
  { name: '', link: '', description: '' },
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
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <ParallaxBackground />
      <MouseFollower />
      <MotorcycleAnimation />
      <Header
        theme={theme}
        language={language}
        setTheme={setTheme}
        setLanguage={setLanguage}
        name={t.name}
      />

      <main className="flex-grow px-4 sm:px-6 py-12 space-y-24 overflow-y-auto w-full relative z-10">
        <FadeInSection>
          <section className="text-center relative">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">{t.name}</h2>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8">{t.role}</p>
            <div className="flex justify-center">
              <MotorcycleIllustration />
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="max-w-3xl mx-auto backdrop-blur-lg bg-background bg-opacity-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6">{t.about}</h3>
            <p className="text-lg sm:text-xl leading-relaxed">{t.aboutText}</p>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">{t.skills}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
              {skills.map((skill, index) => (
                  <Card key={index} className="transition-transform hover:scale-105 backdrop-blur-lg bg-opacity-50">
                    <CardContent className="flex items-center justify-center h-24 sm:h-32">
                      <span className="text-lg sm:text-xl font-medium">{skill}</span>
                    </CardContent>
                  </Card>
              ))}
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
                      <CardDescription className="text-sm sm:text-base h-[72px] overflow-hidden">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <a href={project.link} target="_blank">
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
              {cases.map((itemCase, index) => (
                  <Card key={index} className="transition-all hover:shadow-lg backdrop-blur-lg bg-opacity-50">
                    <CardHeader>
                      <CardTitle className="text-xl sm:text-2xl">{itemCase.name}</CardTitle>
                      <CardDescription className="text-sm sm:text-base h-[72px] overflow-hidden">{itemCase.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <a href={itemCase.link} target="_blank">
                        <Button variant="outline" className="w-full">
                          {t.viewCase}
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
            <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">{t.contact}</h3>
            <Card className="max-w-md mx-auto backdrop-blur-lg bg-opacity-50">
              <CardContent className="flex flex-col items-center space-y-6 py-8">
                <Mail className="h-12 w-12 text-blue-500" />
                <a href="mailto:your.email@example.com" className="text-lg sm:text-xl text-blue-500 hover:underline transition-colors">
                  your.email@example.com
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
    </div>
  )
}

export default App