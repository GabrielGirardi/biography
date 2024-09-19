import NavigationSwiper from "./components/navigationSwiper";
import Banner from "@/assets/images/banner-profile.png";
import { Button } from "./components/button";
import { Link } from "react-router-dom";

function LandingPage() {
    return (
        <>
            <div className="flex items-center gap-20 ml-0 radial flex-col lg:flex-row lg:ml-40 opening">
                <div className="flex flex-col w-full text-center lg:text-left lg:w-1/2 animate__backInLeft duration-1000">
                    <h2 className="text-3xl">Gabriel Girardi</h2>
                    <h1 className="text-6xl lg:text-5xl">
                        <b>Desenvolvedor <span className="gradient-text">Full-Stack</span></b>
                    </h1>
                    <span className="text-xl mt-2 mouse-text">
                        Sou apaixonado por criar soluções web inovadoras e eficientes. Tenho um profundo apreço por transformar conceitos em realidade, tornando-os não apenas visíveis, mas também altamente funcionais.
                    </span>
                    <div className="flex items-center gap-4 w-full mt-16 text-lg justify-center lg:justify-start">
                        <a href="https://wa.link/ytox44" target="_blank">
                            <Button/>
                        </a>
                        <Link to="/about" title="Sobre mim" className="mouse-pointer">
                            <button className="overflow-hidden w-32 p-2 h-14 bg-black text-white border-none rounded-md text-sm font-bold relative z-10 group">
                                Leia +
                                <span className="absolute w-36 h-32 -top-8 -left-2 bg-blue-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>
                                <span className="absolute w-36 h-32 -top-8 -left-2 bg-blue-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>
                                <span className="absolute w-36 h-32 -top-8 -left-2 bg-blue-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>
                                <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-4.5 left-10 z-10">Explore!</span>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="w-full h-full min-h-full rounded-lg overflow-hidden lg:w-1/2">
                    <img className="w-full h-full object-contain" src={Banner} alt="banner perfil" draggable="false"/>
                </div>
            </div>
            <div className="flex flex-col mt-16 border-t lg:ml-40 lg:border-t-0 opening animate__fadeInRightBig duration-1000">
                <NavigationSwiper/>
            </div>
        </>
    )
}

export default LandingPage;