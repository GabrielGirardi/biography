function Projects() {
    return (
        <>
            <div className="flex items-center gap-20 ml-0 flex-col lg:flex-row lg:ml-40 opening">
                <div className="flex flex-col w-full text-center lg:text-left">
                    <h2 className="text-3xl">SOBRE MIM</h2>
                    <h1 className="text-6xl lg:text-5xl">
                        <b><span className="gradient-text">GABRIEL GIRARDI</span></b>
                    </h1>
                    <span className="text-xl mt-10">
                        Sou um entusiasta da programação, apaixonado pelo desenvolvimento de software há cerca de três anos. Minha jornada começou aos 14 anos, quando a curiosidade sobre a criação de sites e jogos despertou em mim uma busca constante por conhecimento.

                        Iniciei minha trajetória estudando a criação de plugins em Java para jogos, marcando meu primeiro contato significativo com a programação. Essa paixão evoluiu ao longo dos anos, e aos 18 anos, dei meus primeiros passos no desenvolvimento web, uma área que se tornou meu verdadeiro campo de interesse.

                        Atualmente, atuo como desenvolvedor frontend, dedicando-me a aprimorar a experiência do usuário por meio de interfaces elegantes. No entanto, minha busca por conhecimento não para por aí; estou empenhado em me tornar um desenvolvedor full stack, pois tenho um profundo apreço por transformar conceitos em realidade e tornar as coisas não apenas visíveis, mas também funcionais.
                    </span>
                </div>
            </div>

            <div className="flex flex-col mt-16 border-t justify-center text-center lg:text-left lg:ml-40 lg:border-t-0 opening lg:justify-start">
                <h2 className="text-4xl mt-4 lg:mt-0">Anexos</h2>

                <nav className="flex items-center text-center gap-6">
                    <a className="flex items-center justify-center rounded-sm p-4 border w-full mt-10 lg:w-24 hover:bg-slate-800" href="https://drive.google.com/file/d/1O3Jk_V62_fxmo-gWX1CC-NOV9LusRKmq/view?usp=sharing" target="_blank">Currículo</a>
                    <a className="flex items-center justify-center rounded-sm p-4 border w-full mt-10 lg:w-24 hover:bg-slate-800" href="tel:+5547997135921">Contato</a>
                </nav>
            </div>
        </>
    )
}

export default Projects;