import Navigation from "./components/ui/navigation";
import NavigationSwiper from "./components/ui/navigationSwiper";
import Banner from "./assets/images/banner-profile.jpg";

export function App() {
    return (
        <section className="min-h-screen flex flex-col p-10 ">
            <div className="flex items-center gap-20">
                <nav className="flex items-center w-20">
                    <Navigation />
                </nav>
                <div className="flex flex-col w-1/2 gap-10">
                    <h1 className="text-5xl">Gabriel Girardi</h1>
                    <span className="text-xl">
                    Seja bem-vindo ao meu portfólio, uma forma versátil e imaginativa que oferece uma visão mais aprofundada da minha jornada como desenvolvedor na área de tecnologia. Sinta-se à vontade para explorar alguns dos projetos destacados, conhecer mais sobre minha história na seção "Sobre Mim" e, caso haja interesse, encontrar maneiras de entrar em contato comigo. Espero que desfrute da experiência e encontre insights valiosos sobre meu percurso e habilidades.
                    </span>
                </div>
                <div className="w-1/3 h-80 rounded-lg bg-white overflow-hidden">
                    <img className="w-full h-full" src={Banner} alt="banner perfil"/>
                </div>
            </div>

            <div className="flex flex-col mt-16 ml-40">
                <h2 className="text-4xl">Navegação</h2>

                <nav className="flex flex-row gap-10 mt-10 w-full">
                    <NavigationSwiper />
                </nav>
            </div>
        </section>
    )
}
