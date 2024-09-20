function Page404() {
    return (
        <div className="flex h-screen flex-col">
            <div className="flex justify-center w-full">
                <img src="https://wallpapercave.com/wp/wp7594542.jpg" alt="" className="h-96 w-[90%] object-cover rounded-md"/>
            </div>
            <div className="flex flex-1 items-center justify-center">
                <div className="mx-auto max-w-xl px-4 py-8 text-center">
                    <h1 className="flex flex-col gap-2 text-2xl font-bold tracking-tight sm:text-4xl text-white">
                        <span className="text-5xl">404</span>
                        We can't find that page.
                    </h1>
                    <p className="mt-4 text-gray-400">
                        Try searching again, or return home to start from the beginning.
                    </p>
                    <a
                        href="#"
                        className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
                    >
                       Go Back Home
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Page404;