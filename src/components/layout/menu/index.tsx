import { Link } from "react-router-dom";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button.tsx";

import { MoonIcon, SunIcon, MenuIcon } from "lucide-react";

interface MenuProps {
    language: string;
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

function Menu({
    language,
    isDarkMode,
    toggleDarkMode
}: MenuProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">
                    <MenuIcon/>
                </Button>
            </DialogTrigger>
            <DialogContent className="w-[90%]">
                <DialogHeader>
                    <DialogTitle>MENU</DialogTitle>
                    <DialogDescription>
                        {language === 'pt' ? 'Navegue pelas páginas' : 'Navigate through the pages'}
                    </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                    <div className="flex flex-col gap-4">
                        <Link to="/" className="text-white dark:text-gray-700 bg-black dark:bg-white hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            {language === 'pt' ? 'Início' : 'Home'}
                        </Link>
                        <Link to="/about" className="text-white dark:text-gray-700 bg-black dark:bg-white hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            {language === 'pt' ? 'Sobre' : 'About'}
                        </Link>
                        <Link to="/projects" className="text-white dark:text-gray-700 bg-black dark:bg-white hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            {language === 'pt' ? 'Projetos' : 'Projects'}
                        </Link>
                        <Link to="/contact" className="text-white dark:text-gray-700 bg-black dark:bg-white hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            {language === 'pt' ? 'Contato' : 'Contact'}
                        </Link>
                    </div>
                </div>
                <DialogFooter className="flex gap-4 items-center justify-between">
                    <Button variant="outline" size="icon" onClick={toggleDarkMode} className="ml-4">
                        {isDarkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default Menu;