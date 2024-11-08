import { Button } from "@/components/ui/button"
import { Globe, Moon, Sun } from "lucide-react"
import { Switch } from "@/components/ui/switch"

interface HeaderProps {
    theme: 'light' | 'dark'
    language: 'en' | 'pt-BR'
    setTheme: (theme: 'light' | 'dark') => void
    setLanguage: (language: 'en' | 'pt-BR') => void
    name: string
}

function Header({
    theme,
    language,
    setTheme,
    setLanguage,
    name
}: HeaderProps) {
    return (
        <header className="sticky top-0 z-20 backdrop-blur-md bg-opacity-90 bg-background w-full">
            <nav className="px-4 sm:px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl sm:text-2xl font-bold">{name}</h1>
                <div className="flex items-center space-x-2 sm:space-x-4">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        aria-label="Toggle theme"
                        className="transition-transform hover:scale-110"
                    >
                        {theme === 'dark' ? <Sun className="h-5 w-5 sm:h-6 sm:w-6"/> :
                            <Moon className="h-5 w-5 sm:h-6 sm:w-6"/>}
                    </Button>
                    <div className="flex items-center space-x-2">
                        <Globe className="h-4 w-4 sm:h-5 sm:w-5"/>
                        <Switch
                            checked={language === 'en'}
                            onCheckedChange={() => setLanguage(language === 'pt-BR' ? 'en' : 'pt-BR')}
                            className="transition-transform hover:scale-110"
                        />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header