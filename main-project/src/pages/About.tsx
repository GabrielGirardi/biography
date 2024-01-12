function Projects() {
    return (
        <>
            <div className="flex items-center gap-20 ml-0 flex-col lg:flex-row lg:ml-40 opening">
                <div className="flex flex-col w-full text-center lg:text-left">
                    <h2 className="text-3xl">SOBRE MIM</h2>
                    <h1 className="text-6xl lg:text-5xl">
                        <b><span className="gradient-text">GABRIEL GIRARDI</span></b>
                    </h1>
                    <span className="text-xl mt-10 flex flex-col gap-3 lg:max-w-7xl">
                        <p>Sou um entusiasta da programação, apaixonado pelo desenvolvimento de software. Minha jornada começou aos meus 14 anos de idade, quando a curiosidade sobre a criação de sites e jogos despertou em mim uma busca constante por conhecimento.</p>
                        <p>Iniciei meus estudos na criação de plugins em Java para jogos, marcando oficialmente o primeiro contato significativo com a programação. Essa paixão não demorou muito para evoluir, e aos meus 18 anos dei meus primeiro passo no desenvolvimento web, que se tornou meu foco de estudo até hoje.</p>
                        <p>Atualmente, atuo como desenvolvedor frontend, dedicando-me a aprimorar a experiência do usuário por meio de interfaces elegantes. No entanto, minha busca por conhecimento não para por aí; estou empenhado em me tornar um desenvolvedor full stack, pois tenho um profundo apreço por transformar conceitos em realidade e tornar as coisas não apenas visíveis, mas também funcionais.</p>
                    </span>
                </div>
            </div>

            <div className="flex flex-col mt-16 border-t justify-center text-center lg:text-left lg:ml-40 lg:border-t-0 opening lg:justify-start">
                <h2 className="text-4xl mt-4 lg:mt-0">Anexos</h2>

                <nav className="flex items-center text-center gap-6">
                    <a className="flex items-center justify-center rounded-sm p-4 border w-full mt-10 lg:w-24 hover:bg-slate-800" href="https://drive.google.com/file/d/1O3Jk_V62_fxmo-gWX1CC-NOV9LusRKmq/view?usp=sharing" target="_blank">Currículo</a>
                    <a className="flex items-center justify-center rounded-sm p-4 border w-full mt-10 lg:w-24 hover:bg-slate-800" href="https://wa.link/ytox44">Contato</a>
                </nav>
            </div>
        </>
    )
}

export default Projects;