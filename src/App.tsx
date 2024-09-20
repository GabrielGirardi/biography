import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import Menu from "@/components/layout/menu";
import Layout from "@/utils/layout";

type Language = 'en' | 'pt';

export function App() {
    const [language, setLanguage] = useState<Language>(() => {
        const savedLanguage = localStorage.getItem('language');
        return (savedLanguage as Language) || 'en';
    });

    const toggleLanguage = () => {
        const newLanguage: Language = language === 'pt' ? 'en' : 'pt';
        localStorage.setItem('language', newLanguage);
        setLanguage(newLanguage);
    };

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);
    return (
        <BrowserRouter>
            <section className="min-h-screen flex flex-col p-4 lg:p-10">
                <nav className="flex items-center w-full mb-10 relative md:w-1/2 lg:w-20 lg:absolute lg:mb-0 animate__fadeIn duration-1000">
                    <Menu language={language} toggleLanguage={toggleLanguage} />
                </nav>
                <Layout/>
            </section>
        </BrowserRouter>
    )
}
