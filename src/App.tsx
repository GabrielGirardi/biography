import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Menu from "@/components/layout/menu";
import Layout from "@/utils/layout";

export type Language = 'pt' | 'en';

export function App() {
    const [language, setLanguage] = useState<Language>('pt');

    return (
        <BrowserRouter>
            <section className="min-h-screen flex flex-col p-4 lg:p-10">
                <nav className="flex items-center w-full mb-10 relative md:w-1/2 lg:w-20 lg:absolute lg:mb-0 animate__fadeIn duration-1000">
                    <Menu language={language} setLanguage={setLanguage} />
                </nav>
                <Layout/>
            </section>
        </BrowserRouter>
    )
}
