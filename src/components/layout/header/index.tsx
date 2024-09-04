import { useEffect, useState } from "react";
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

import Menu from "@/components/layout/menu";

function Header() {
    const [isMobile, setIsMobile] = useState(false);
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

    return (
        <header className="flex max-w-[100%] md:max-w-[80%] mx-auto h-24 w-full bg-yellow-300 md:bg-transparent md:border-0 px-[6%]">
            <div className="flex justify-between items-center w-full text-[--text]">
                <div>
                    <h1 className="text-md md:text-2xl font-bold">Sthefany Schroeder</h1>
                </div>
                { !isMobile ? (
                    <>
                        <div>
                            <ul className="flex space-x-4">
                                <li className={page === '/' ? 'underline underline-offset-8' : ''}>
                                    <Link to="/">Home</Link>
                                </li>
                                <li className={page === '/sobre' ? 'underline underline-offset-8' : ''}>
                                    <Link to="/sobre">Sobre</Link>
                                </li>
                                <li className={page === '/projetos' ? 'underline underline-offset-8' : ''}>
                                    <Link to="/projetos">Projetos</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center">
                            <ul className="flex items-center space-x-4">
                                <li>
                                    <a href="">
                                        <FaWhatsapp className="w-6 h-6"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <FaInstagram className="w-6 h-6"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <FaLinkedin className="w-6 h-6"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </>
                ) : (
                    <Menu/>
                )}
            </div>
        </header>
    )
}

export default Header;