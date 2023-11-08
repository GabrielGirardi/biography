import Logo from "./assets/icons/logo.svg";
import Spline from '@splinetool/react-spline';
import Navigation from "./components/ui/navigation";
import NavigationSwiper from "./components/ui/navigationSwiper";

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
                    	Bem vindo ao meu portfólio, aqui você pode encontrar mais sobre meus projetos, minhas habilidades como desenvolvedor, algumas curidosidades e claro, minhas redes sociais e meios de contato para poder se comunicar comigo. Boa navegação!
                    </span>
                </div>
                <div className="flex items-center justify-center w-1/3 h-80">
                    {/*<Spline scene="https://prod.spline.design/uBdDsjImahAlXpHC/scene.splinecode"/>*/}


                    {/*<a className="flex items-center justify-center w-72 h-72 p-2 bg-gradient-to-r" href="https://app.daily.dev/devggirardi" target="_blank">*/}
                    {/*	<img className="w-full h-full object-contain animate-pulse" src={Logo} alt={'Dev Card'}/>*/}
            	    {/*</a>*/}
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
