import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Menu from '@/components/layout/menu'
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon, LinkedinIcon, AtSignIcon, Github, SmartphoneIcon } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import Home from '@/pages/LandingPage'
import About from '@/pages/About'
import Projects from '@/pages/Projects'
import Contact from '@/pages/Contact'
import { motion } from 'framer-motion'

export default function App() {
    const [isMobile, setIsMobile] = useState(false);

    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedDarkMode = localStorage.getItem('darkMode')
        return savedDarkMode ? JSON.parse(savedDarkMode) : true
    })

    const [language, setLanguage] = useState<'pt' | 'en'>(() => {
        const savedLanguage = localStorage.getItem('language')
        return savedLanguage ? JSON.parse(savedLanguage) : 'pt'
    })

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [isDarkMode])

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode: string) => {
            const newMode = !prevMode
            localStorage.setItem('darkMode', JSON.stringify(newMode))
            return newMode
        })
    }

    const toggleLanguage = () => {
        setLanguage(prevLanguage => {
            const newLanguage = prevLanguage === 'pt' ? 'en' : 'pt'
            localStorage.setItem('language', JSON.stringify(newLanguage))
            return newLanguage
        })
    }

    return (
        <Router>
            <div className={`relative min-h-screen ${isDarkMode ? 'dark' : ''}`}>
                <nav className="bg-white dark:bg-gray-800 shadow-lg">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-wrap items-center justify-between h-16">
                            <div className="flex items-center">
                                <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {language === 'pt' ? 'Meu Portfólio' : 'My Portfolio'}
                                </Link>
                            </div>
                            { !isMobile ? (
                                <div className="flex flex-wrap items-center">
                                    <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                        {language === 'pt' ? 'Início' : 'Home'}
                                    </Link>
                                    <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                        {language === 'pt' ? 'Sobre' : 'About'}
                                    </Link>
                                    <Link to="/projects" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                        {language === 'pt' ? 'Projetos' : 'Projects'}
                                    </Link>
                                    <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                        {language === 'pt' ? 'Contato' : 'Contact'}
                                    </Link>
                                    <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="ml-4">
                                        {isDarkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
                                    </Button>
                                    <Button variant="ghost" size="sm" onClick={toggleLanguage} className="ml-4">
                                        {language === 'pt' ? 'PT 🇧🇷' : 'EN 🇺🇲'}
                                    </Button>
                                </div>
                                ) : (
                                <span className="flex items-center gap-2">
                                     <Button variant="outline" size="sm" onClick={toggleLanguage} className="ml-4">
                                        {language === 'pt' ? 'PT 🇧🇷' : 'EN 🇺🇲'}
                                    </Button>
                                    <Menu language={language} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                                </span>
                            )}
                        </div>
                    </div>
                </nav>

                <main className="max-w-7xl mx-auto px-4 h-full sm:px-6 lg:px-8 py-8">
                    <Routes>
                        <Route path="/" element={<Home language={language} />} />
                        <Route path="/about" element={<About language={language} isDarkMode={isDarkMode} />} />
                        <Route path="/projects" element={<Projects language={language} />} />
                        <Route path="/contact" element={<Contact language={language} />} />
                    </Routes>
                </main>

                <motion.footer
                    className="md:fixed bottom-0 left-0 bg-gray-100 border dark:bg-gray-800 shadow-lg mt-8 md:rounded-tr-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-gray-700 dark:text-gray-300">
                        <a className="transition duration-200 hover:translate-y-[-2px]" href="https://api.whatsapp.com/send?phone=5547997135921" title="WhatsApp" target="_blank">
                            <FaWhatsapp className="rounded-full bg-green-600 p-1 h-6 w-6" color="white" />
                        </a>
                        <a className="transition duration-200 hover:translate-y-[-2px]" href="https://www.linkedin.com/in/ggirardii/" title="Linkedin" target="_blank">
                            <LinkedinIcon className="rounded-full bg-blue-600 p-1 h-6 w-6" color="white" />
                        </a>
                        <a className="transition duration-200 hover:translate-y-[-2px]" href="mailto:dev.ggirardi@gmail.com" title="E-Mail" target="_blank">
                            <AtSignIcon className="rounded-full bg-yellow-700 p-1 h-6 w-6" color="white" />
                        </a>
                        <a className="transition duration-200 hover:translate-y-[-2px]" href="https://github.com/GabrielGirardi/" title="Github" target="_blank">
                            <Github className="rounded-full bg-black p-1 h-6 w-6" color="white" />
                        </a>
                        <a className="transition duration-200 hover:translate-y-[-2px]" href="tel:+5547997135921" title={language === 'pt' ? 'Telefone' : 'Phone'} target="_blank">
                            <SmartphoneIcon className="rounded-full bg-orange-600 p-1 h-6 w-6" color="white" />
                        </a>
                    </div>
                </motion.footer>
            </div>
        </Router>
    )
}
