import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Error404() {
    return (
        <div className="flex flex-col justify-between items-center w-full">
            <img className="rounded-full mt-6 animate__fadeIn duration-1000" src="/assets/404.gif" alt="Página não encontrada" width={400} height={400}/>
            <h1 className="text-5xl md:text-7xl font-bold text-center text-[--text] mt-4 animate__fadeInDown duration-1000">Uh oh.</h1>
            <p className="text-xl md:text-2xl text-center text-[--text]">Parece que essa página não existe.</p>
            <Button className="relative mt-6 md:mt-10 w-1/2 2xl:w-2/5 h-16 bg-yellow-300 text-[--text] transition duration-300 hover:bg-yellow-400 rounded-md">
                <Link className="flex justify-center items-center w-full h-full" to="/">Página Inicial</Link>
            </Button>
        </div>
    )
}
