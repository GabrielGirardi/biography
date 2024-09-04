import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Language } from '../App'

type LayoutProps = {
    children: React.ReactNode
    language: Language
    setLanguage: (lang: Language) => void
}

function Layout({ children, language, setLanguage }: LayoutProps) {
    const toggleLanguage = () => {
        setLanguage(language === 'pt' ? 'en' : 'pt')
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 dark:from-purple-900 dark:to-indigo-950">
            <header className="container mx-auto p-4">
                <nav className="flex justify-between items-center">
                    <div className="flex flex-wrap space-x-4">
                        <Link to="/" className="text-lg font-semibold hover:text-purple-600 transition-colors">
                            {language === 'pt' ? 'Início' : 'Home'}
                        </Link>
                        <Link to="/about" className="text-lg font-semibold hover:text-purple-600 transition-colors">
                            {language === 'pt' ? 'Sobre' : 'About'}
                        </Link>
                        <Link to="/skills" className="text-lg font-semibold hover:text-purple-600 transition-colors">
                            {language === 'pt' ? 'Habilidades' : 'Skills'}
                        </Link>
                        <Link to="/contact" className="text-lg font-semibold hover:text-purple-600 transition-colors">
                            {language === 'pt' ? 'Contato' : 'Contact'}
                        </Link>
                    </div>
                    <Button onClick={toggleLanguage} variant="outline">
                        {language === 'pt' ? 'PT 🇧🇷' : 'EN 🇺🇲'}
                    </Button>
                </nav>
            </header>
            <main className="container mx-auto p-4">
                {children}
            </main>
            <footer className="container mx-auto p-4 text-center text-sm text-gray-600 dark:text-gray-400">
                © 2024 Support Portfolio. {language === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}
            </footer>
        </div>
    )
}

export default Layout;