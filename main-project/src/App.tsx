import Navigation from "./components/ui/navigation";

export function App() {
    return (
        <section className="min-h-screen flex flex-col">
            <div className="p-10 flex justify-between items-center">
                <nav className="flex">
                    <Navigation />
                </nav>
            </div>
        </section>
    )
}
