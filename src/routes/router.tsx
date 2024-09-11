import { Routes, Route } from "react-router-dom";

import LandingPage from "@/pages/landing-page";
import About from "@/pages/about";
import Project from "@/pages/projects";
import Gallery from "@/pages/gallery";
import Page404 from "@/pages/404";

function router() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/projects" element={<Project/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
            <Route path="*" element={<Page404/>}/>
        </Routes>
    )
}

export default router;