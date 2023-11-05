import Navigation from "./components/ui/navigation";
import { CodeIcon, PersonIcon, ImageIcon, MobileIcon } from "@radix-ui/react-icons";

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
                        Welcome to the extraordinary world of Gabriel Girardi, a versatile and imaginative artist who skillfully navigates the realms of product development, design and digital art. With a keen eye for detail and a relentless pursuit of innovation, Gabriel Girardi crafts captivating visual narratives, immersive digital realms, and functional yet aesthetically pleasing products.
                    </span>
                </div>
                <div className="w-1/3 h-80 rounded-lg bg-white">
                    
                </div>
            </div>

            <div className="flex flex-col gap-20 mt-16 ml-40">
                <h2 className="text-4xl">Navegação</h2>
                <ul className="flex gap-10">
                    <li className="w-1/4 h-64 rounded-lg bg-bg-navigation border shadow-nav backdrop-blur-lg p-2">
                        <a href="">
                            <div className="flex flex-col items-center justify-center h-40 bg-gradient-to-r from-cyan-500 to-blue-500 w-auto text-center rounded-lg p-4">
                                <p className="text-4xl font-bold">Projetos</p>
                                <span className="text-sm text-gray-300">Minha biblioteca de projetos desenvolvidos</span>
                            </div>
                            <div className="flex items-center h-20 ml-4">
                                <CodeIcon width={20} height={20}/>
                                <span className="flex flex-col items-center justify-center">
                                    <h3>

                                    </h3>
                                    <p>

                                    </p>
                                </span>
                            </div>
                        </a>
                    </li>
                    <li className="w-1/4 h-64 rounded-lg bg-bg-navigation border shadow-nav backdrop-blur-lg p-2">
                        <a href="">
                            <div className="flex flex-col items-center justify-center h-40 bg-gradient-to-r from-cyan-500 to-blue-500 w-auto text-center rounded-lg p-4">
                                <p className="text-4xl font-bold">Sobre mim</p>
                                <span className="text-sm text-gray-300">Conheça mais sobre mim</span>
                            </div>
                            <div className="flex items-center h-20 ml-4">
                                <PersonIcon width={20} height={20}/>
                                <span className="flex flex-col items-center justify-center">
                                    <h3>

                                    </h3>
                                    <p>

                                    </p>
                                </span>
                            </div>
                        </a>
                    </li>
                    <li className="w-1/4 h-64 rounded-lg bg-bg-navigation border shadow-nav backdrop-blur-lg p-2">
                        <a href="">
                            <div className="flex flex-col items-center justify-center h-40 bg-gradient-to-r from-cyan-500 to-blue-500 w-auto text-center rounded-lg p-4">
                                <p className="text-4xl font-bold">Técnico</p>
                                <span className="text-sm text-gray-300">Minha biblioteca de desenvolvimento</span>
                            </div>
                            <div className="flex items-center h-20 ml-4">
                                <ImageIcon width={20} height={20}/>
                                <span className="flex flex-col items-center justify-center">
                                    <h3>

                                    </h3>
                                    <p>

                                    </p>
                                </span>
                            </div>
                        </a>
                    </li>
                    <li className="w-1/4 h-64 rounded-lg bg-bg-navigation border shadow-nav backdrop-blur-lg p-2">
                        <a href="">
                            <div className="flex flex-col items-center justify-center h-40 bg-gradient-to-r from-cyan-500 to-blue-500 w-auto text-center rounded-lg p-4">
                                <p className="text-4xl font-bold">Contato</p>
                                <span className="text-sm text-gray-300">Entre em contato comigo</span>
                            </div>
                            <div className="flex items-center h-20 ml-4">
                                <MobileIcon width={20} height={20}/>
                                <span className="flex flex-col items-center justify-center">
                                    <h3>

                                    </h3>
                                    <p>

                                    </p>
                                </span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}
