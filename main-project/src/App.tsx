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
                        Welcome to the extraordinary world of Gabriel Girardi, a versatile and imaginative artist who skillfully navigates the realms of product development, design and digital art. With a keen eye for detail and a relentless pursuit of innovation, Gabriel Girardi crafts captivating visual narratives, immersive digital realms, and functional yet aesthetically pleasing products.
                    </span>
                </div>
                <div className="w-1/3 h-80 rounded-lg bg-white">
                    
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
