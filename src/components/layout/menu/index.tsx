import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { Button } from "@/components/ui/button";
import Home from "@/assets/icons/home.svg";
import { FaWhatsapp } from "react-icons/fa";
import {
    CodeIcon,
    PersonIcon,
    ImageIcon,
    LinkedInLogoIcon,
} from "@radix-ui/react-icons";

interface MenuProps {
    language: string
    toggleLanguage: () => void;
}

function Navigation ({
     language,
     toggleLanguage
}: MenuProps) {
    const [page, setPage] = useState(window.location.pathname);
    const location = useLocation();


    useEffect(() => {
        const handleNavLink = () => {
            const links = document.querySelectorAll("nav a");
            links.forEach(link => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                if (link.href === window.location.href) {
                    link.classList.add("underline");
                } else {
                    link.classList.remove("underline");
                }
            });
        };

        handleNavLink();
        setPage(window.location.pathname);

        return () => {
            window.removeEventListener('popstate', handleNavLink);
        };
    }, [location.pathname]);

    return (
        <div className="flex w-full lg:w-full">
            <ul className="flex flex-row items-center justify-start p-1 gap-1 w-full bg-bg-navigation rounded-full border shadow-nav backdrop-blur-lg lg:justify-center lg:flex-col lg:w-16">
                <li className={'home flex items-center justify-center w-14 h-14 overflow-hidden rounded-full :before ' + `${page === '/' ? 'bg-bg-selected' : ''}`}>
                    <Link to="/" title={language === 'pt' ? 'Início' : 'Home'} className="flex items-center justify-center relative w-14 h-14">
                        <img src={Home} alt="home" width={25} height={25}/>
                        <span
                            className={'absolute bottom-0 contrast-50 ' + `${page === '/' ? 'flex' : 'hidden'}`}>.</span>
                    </Link>
                </li>
                <li className={'about flex items-center justify-center w-14 h-14 overflow-hidden rounded-full ' + `${page === '/about' ? 'bg-bg-selected' : ''}`}>
                    <Link to="/about" title={language === 'pt' ? 'Sobre mim' : 'About'} className="flex items-center justify-center relative w-14 h-14">
                        <PersonIcon className="contrast-50" width={25} height={25}/>
                        <span className={'absolute bottom-0 contrast-50 ' + `${page === '/about' ? 'flex' : 'hidden'}`}>.</span>
                    </Link>
                </li>
                <li className={'projects flex items-center justify-center w-14 h-14 overflow-hidden rounded-full ' + `${page === '/projects' ? 'bg-bg-selected' : ''}`}>
                    <Link to="/projects" title={language === 'pt' ? 'Projetos' : 'Projects'} className="flex items-center justify-center relative w-14 h-14">
                        <CodeIcon className="contrast-50" width={25} height={25}/>
                        <span
            className={'absolute bottom-0 contrast-50 ' + `${page === '/projects' ? 'flex' : 'hidden'}`}>.</span>
                    </Link>
                </li>
                <li className={'about flex items-center justify-center w-14 h-14 overflow-hidden rounded-full ' + `${page === '/gallery' ? 'bg-bg-selected' : ''}`}>
                    <Link to="/gallery" title={language === 'pt' ? 'Galeria' : 'Gallery'}
                          className="flex items-center justify-center w-14 relative h-14">
                        <ImageIcon className="contrast-50" width={25} height={25}/>
                        <span
                            className={'absolute bottom-0 contrast-50 ' + `${page === '/gallery' ? 'flex' : 'hidden'}`}>.</span>
                    </Link>
                </li>
                <span className="bg-border-separator w-8 h-0.5 rounded-full hidden lg:block"></span>
                <li className="flex items-center justify-center w-14 h-14 overflow-hidden rounded-full">
                    <a className="flex items-center justify-center w-14 h-14" target="_blank"
                       href="https://www.linkedin.com/in/ggirardii" title="Linkedin">
                        <LinkedInLogoIcon className="contrast-50" width={25} height={25}/>
                    </a>
                </li>
                <li className="flex items-center justify-center w-14 h-14 overflow-hidden rounded-full">
                    <a className="flex items-center justify-center w-14 h-14" target="_blank" href="https://wa.link/ytox44" title="WhatsApp">
                        <FaWhatsapp className="contrast-50 w-[25px] h-[25px]" width={25} height={25}/>
                    </a>
                </li>
                <span className="bg-border-separator w-8 h-0.5 rounded-full hidden lg:block"></span>
                <li className="flex items-center justify-center w-14 h-14 overflow-hidden rounded-full">
                    <Button onClick={toggleLanguage} variant="ghost">
                        {language === 'pt' ? 'PT 🇧🇷' : 'EN 🇺🇲'}
                    </Button>
                </li>
            </ul>
        </div>
)
}

export default Navigation;

