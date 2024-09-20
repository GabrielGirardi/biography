import router from "@/routes/router";

function Layout() {
    return (
        <main>
            { router() }
        </main>
    )
}

export default Layout;