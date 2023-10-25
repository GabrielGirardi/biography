import { Button } from "./components/ui/button";


export function App() {
    return (
        <section className="min-h-screen flex flex-col">
            <div className="px-6 py-3 flex justify-between items-center border-b">
                <nav>
                    <ul>
                        <li><a href=""><img src="" alt=""/></a></li>
                        <li><a href=""><img src="" alt=""/></a></li>
                        <li><a href=""><img src="" alt=""/></a></li>
                        <li><a href=""><img src="" alt=""/></a></li>
                        <li><a href=""><img src="" alt=""/></a></li>
                        <li><a href=""><img src="" alt=""/></a></li>
                    </ul>
                </nav>
                <h1 className="text-xl">Bem Vindo Visitante</h1>

                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">
                    Desenvolvido com 💙 por GG
                  </span>
                </div>
            </div>
        </section>
    )
}