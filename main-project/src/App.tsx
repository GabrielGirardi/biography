import { useState } from 'react';
import HomePage from "./pages/LandingPage";
import Projects from "./pages/Projects";
import Navigation from "./components/ui/navigation";

export function App() {
    const [paginaAtiva, setPaginaAtiva] = useState('home');

    const handleMenuClick = (pagina: string) => {
        setPaginaAtiva(pagina);
    };

    return (
        <section className="min-h-screen flex flex-col p-4 lg:p-10">
            <nav className="flex items-center w-full mb-10 relative md:w-1/2 lg:w-20 lg:absolute lg:mb-0">
                <Navigation paginaAtiva={paginaAtiva} onMenuClick={handleMenuClick}/>
            </nav>

            {paginaAtiva === 'home' && <HomePage />}
            {paginaAtiva === 'projects' && <Projects />}
        </section>
    )
}
