import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import {Link} from "react-router-dom";

interface HomeProps {
    language: 'pt' | 'en'
}

export default function Home({ language }: HomeProps) {
    const content = {
        pt: {
            greeting: 'Olá, eu sou',
            name: 'Gabriel Girardi',
            title: 'Desenvolvedor Fullstack',
            description: 'Apaixonado por criar soluções web inovadoras e eficientes.',
            cta: 'Veja meus projetos',
        },
        en: {
            greeting: 'Hi, I\'m',
            name: 'Gabriel Girardi',
            title: 'Fullstack Developer',
            description: 'Passionate about creating innovative and efficient web solutions.',
            cta: 'View my projects',
        }
    }

    const { greeting, name, title, description, cta } = content[language]

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
        >
            <span className="flex justify-center my-6">
                <img className="rounded-full" src="/assets/profile.jpeg" alt="" title="" width={256} height={256} />
            </span>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {greeting} <span className="text-blue-600 dark:text-blue-400">{name}</span>
            </h1>
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">{title}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">{description}</p>
            <Link to="/projects">
                <Button size="lg" className="group">
                    {cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
            </Link>
        </motion.div>
    )
}