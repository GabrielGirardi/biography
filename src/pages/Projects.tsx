import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {Link} from "react-router-dom";

interface ProjectsProps {
    language: 'pt' | 'en'
}

export default function Projects({ language }: ProjectsProps) {
    const content = {
        pt: {
            title: 'Meus Projetos',
            projects: [
                {
                    title: 'Sistema de Restaurante',
                    description: 'Uma plataforma de e-commerce completa com carrinho de compras, pagamentos e painel de administração.',
                    technologies: ['Vue.js', 'Redux', 'Vercel', 'SCSS'],
                    link: 'https://restaurant-system-one.vercel.app/',
                },
                {
                    title: 'Previsão do Tempo',
                    description: 'Este projeto de previsão do tempo é uma aplicação web que permite aos usuários obter informações meteorológicas precisas e atualizadas para qualquer cidade do mundo.',
                    technologies: ['JQuery', 'SCSS', 'Vercel'],
                    link: 'https://weather-forecast-gg.vercel.app/',
                },
                {
                    title: 'Sistema de Crédito',
                    description: 'Este projeto de sistema de crédito é uma aplicação web que permite aos usuários gerenciar e monitorar suas pontuações de crédito de forma eficiente.',
                    technologies: ['PHP', 'JQuery', 'MySQL', 'SCSS'],
                    link: 'https://github.com/GabrielGirardi/credit-system',
                },
                {
                    title: 'NLW IA',
                    description: 'Esse projeto é feito utilizando a Open AI para criar títulos/descrições para vídeos baseados no conteúdo via upload.',
                    technologies: ['React.js', 'Tailwind', 'Node.js', 'Prisma'],
                    link: 'https://github.com/GabrielGirardi/nlw-IA',
                },
            ],
        },
        en: {
            title: 'My Projects',
            projects: [
                {
                    title: 'Restaurant System',
                    description: 'A complete Restaurant platform with shopping cart, table, and about.',
                    technologies: ['Vue.js', 'Redux', 'Vercel', 'SCSS'],
                    link: 'https://restaurant-system-one.vercel.app/',
                },
                {
                    title: 'Weather Forecast',
                    description: 'This weather forecast project is a web application that allows users to obtain accurate and up-to-date weather information for any city in the world.',
                    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
                    link: 'https://weather-forecast-gg.vercel.app/',
                },
                {
                    title: 'Credit System',
                    description: 'This credit system project is a web application that allows users to efficiently manage and monitor their credit scores.',
                    technologies: ['PHP', 'JQuery', 'MySQL', 'SCSS'],
                    link: 'https://github.com/GabrielGirardi/credit-system',
                },
                {
                    title: 'NLW IA',
                    description: 'This project uses OpenAI to create video titles/descriptions based on the content uploaded.',
                    technologies: ['React.js', 'Tailwind', 'Node.js', 'Prisma'],
                    link: 'https://github.com/GabrielGirardi/nlw-IA',
                },
            ],
        }
    }

    const { title, projects } = content[language]

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                        <Link to={project.link} target="_blank">
                            <Card className="transition duration-150 hover:scale-[1.01]">
                                <CardHeader>
                                    <CardTitle>{project.title}</CardTitle>
                                    <CardDescription className="h-20 overflow-hidden">{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <Badge key={techIndex} variant="secondary">{tech}</Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}