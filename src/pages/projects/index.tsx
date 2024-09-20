import ProjectsBoard from "./components/projects";

function Projects() {
    return (
        <>
            <div className="flex items-center gap-20 ml-0 flex-col lg:flex-row lg:ml-40 opening">
                <div className="flex flex-col w-full text-center lg:text-left lg:w-1/2">
                    <h2 className="text-3xl">ÁREA DE</h2>
                    <h1 className="text-6xl lg:text-5xl">
                        <b><span className="gradient-text">PROJETOS</span></b>
                    </h1>
                </div>
            </div>
            <div className="flex flex-col mt-4 border-t lg:ml-40 lg:border-t-0 opening">
                <nav className="flex flex-row gap-10 mt-10 w-full">
                    <ProjectsBoard />
                </nav>
            </div>
        </>
    )
}

export default Projects;