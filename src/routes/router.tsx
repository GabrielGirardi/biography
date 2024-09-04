import { Routes, Route } from "react-router-dom";
import { Language } from "@/App.tsx";

import Home from "@/pages/LandingPage";
import { Error404 } from "@/pages/404";
import About from "@/pages/About";
import Skills from "@/pages/Projects.tsx";
import Contact from "@/pages/Contact";

type RouterProps = {
    language: Language
}

function router({ language }: RouterProps) {
    return (
        <Routes>
            <Route path="/" element={<Home language={language}/>}/>
            <Route path="*" element={<Error404/>}/>
            <Route path="/about" element={<About language={language}/>}/>
            <Route path="/skills" element={<Skills language={language}/>}/>
            <Route path="/contact" element={<Contact language={language}/>}/>
        </Routes>
    )
}

export default router;