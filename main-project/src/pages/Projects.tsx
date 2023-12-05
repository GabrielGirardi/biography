import MyProjects from "../components/ui/myProjects";

function Projects() {
    return (
        <>
            <div className="flex items-center gap-20 ml-0 flex-col lg:flex-row lg:ml-40 opening">
                <div className="flex flex-col w-full text-center lg:text-left lg:w-1/2">
                    <h2 className="text-3xl">ÁREA DE</h2>
                    <h1 className="text-6xl lg:text-5xl">
                        <b><span className="gradient-text">PROJETOS</span></b>
                    </h1>
                    <span className="text-xl mt-10">
                        Aqui compartilho alguns dos projetos que elaborei, destacando minhas habilidades e proporcionando insights sobre meu trabalho. 
                    </span>
                </div>
            </div>

            <div className="flex flex-col mt-16 border-t lg:ml-40 lg:border-t-0 opening">
                <h2 className="text-4xl mt-4 lg:mt-0">Projetos</h2>

                <nav className="flex flex-row gap-10 mt-10 w-full">
                    <MyProjects />
                </nav>
            </div>
        </>
    )
}

export default Projects;