import Navigation from "./components/ui/navigation";
import NavigationSwiper from "./components/ui/navigationSwiper";
import Banner from "./assets/images/banner-profile.jpg";

export function App() {
    return (
        <section className="min-h-screen flex flex-col p-4 lg:p-10">
            <div className="flex items-center gap-20 radial flex-col lg:flex-row">
                <nav className="flex items-center w-full lg:w-20">
                    <Navigation/>
                </nav>
                <div className="flex flex-col w-full text-center lg:text-left lg:w-1/2">
                    <h2 className="text-3xl">BEM-VINDO AO</h2>
                    <h1 className="text-6xl lg:text-5xl">
                        <b>MEU <span className="gradient-text">PORTFÓLIO</span></b>
                    </h1>
                    <span className="text-xl mt-10">
                        Sinta-se à vontade para explorar alguns dos projetos destacados e conhecer mais sobre minha história. Que tal marcarmos um café? ☕
                    </span>
                </div>
                <div className="w-full h-full rounded-lg overflow-hidden lg:w-1/2">
                    <img className="w-full h-full object-contain" src={Banner} alt="banner perfil"/>
                </div>
            </div>

            <div className="flex flex-col mt-16 border-t lg:ml-40 lg:border-t-0">
                <h2 className="text-4xl mt-4 lg:mt-0">Navegação</h2>

                <nav className="flex flex-row gap-10 mt-10 w-full">
                    <NavigationSwiper />
                </nav>
            </div>
        </section>
    )
}
