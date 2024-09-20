import SocialCard from "./components/socialCard";
import { motion } from 'framer-motion'
import { DiJqueryLogo } from "react-icons/di"
import { DiMongodb, DiPostgresql, DiMysql } from 'react-icons/di'
import {
    FaReact,
    FaVuejs,
    FaJs,
    FaNodeJs,
    FaPhp,
    FaPython,
    FaAws,
    FaGoogle,
    FaGit,
    FaGitlab,
    FaTrello,
    FaJira,
    FaBitbucket,
    FaFigma,
} from 'react-icons/fa';

interface AboutProps {
    language: 'pt' | 'en'
}


function About({ language }: AboutProps) {
    language = 'pt';

    const content = {
        pt: {
            title: 'Sobre Mim',
            bio: 'Sou um desenvolvedor fullstack apaixonado por criar soluções web inovadoras. Com experiência em várias tecnologias, estou sempre buscando aprender e crescer na minha carreira. Atualmente, atuo como desenvolvedor frontend, dedicando-me a aprimorar a experiência do usuário por meio de interfaces elegantes e funcionais. No entanto, minha busca por conhecimento é contínua. Tenho um profundo apreço por transformar conceitos em realidade, tornando-os não apenas visíveis, mas também altamente funcionais.',
            skills: 'Minhas habilidades incluem:',
            skillsList: [
                { name: 'React', icon: <FaReact /> },
                { name: 'Vue.js', icon: <FaVuejs /> },
                { name: 'Javascript', icon: <FaJs /> },
                { name: 'JQuery', icon: <DiJqueryLogo /> },
                { name: 'Node.js', icon: <FaNodeJs /> },
                { name: 'Next.js', icon: <FaReact /> }, // Não há ícone específico para Next.js, usando o ícone do React como substituto
                { name: 'PHP', icon: <FaPhp /> },
                { name: 'Python', icon: <FaPython /> },
                { name: 'MongoDB', icon: <DiMongodb /> },
                { name: 'PostgreSQL', icon: <DiPostgresql /> },
                { name: 'MySQL', icon: <DiMysql /> },
                { name: 'AWS', icon: <FaAws /> },
                { name: 'Google Cloud Platform', icon: <FaGoogle /> },
                { name: 'Git', icon: <FaGit /> },
                { name: 'Gitlab', icon: <FaGitlab /> },
                { name: 'Kanban', icon: <FaTrello /> }, // Não há ícone específico para Kanban, usando o ícone do Trello como substituto
                { name: 'Scrum', icon: <FaJira /> }, // Não há ícone específico para Scrum, usando o ícone do Jira como substituto
                { name: 'Trello', icon: <FaTrello /> },
                { name: 'Jira', icon: <FaJira /> },
                { name: 'Bitrix24', icon: <FaBitbucket /> }, // Não há ícone específico para Bitrix24, usando o ícone do Bitbucket como substituto
                { name: 'ClickUP', icon: <FaTrello /> }, // Não há ícone específico para ClickUP, usando o ícone do Trello como substituto
                { name: 'Figma', icon: <FaFigma /> },
            ],
        },
        en: {
            title: 'About Me',
            bio: 'I am a fullstack developer passionate about creating innovative web solutions. With experience in various technologies, I am always looking to learn and grow in my career. Currently, I work as a frontend developer, dedicating myself to enhancing user experience through elegant and functional interfaces. However, my quest for knowledge is continuous. I have a deep appreciation for transforming concepts into reality, making them not only visible but also highly functional.',
            skills: 'My skills include:',
            skillsList: [
                { name: 'React', icon: <FaReact /> },
                { name: 'Vue.js', icon: <FaVuejs /> },
                { name: 'Javascript', icon: <FaJs /> },
                { name: 'JQuery', icon: <DiJqueryLogo /> },
                { name: 'Node.js', icon: <FaNodeJs /> },
                { name: 'Next.js', icon: <FaReact /> }, // Using React icon as a substitute
                { name: 'PHP', icon: <FaPhp /> },
                { name: 'Python', icon: <FaPython /> },
                { name: 'MongoDB', icon: <DiMongodb /> },
                { name: 'PostgreSQL', icon: <DiPostgresql /> },
                { name: 'MySQL', icon: <DiMysql /> },
                { name: 'AWS', icon: <FaAws /> },
                { name: 'Google Cloud Platform', icon: <FaGoogle /> },
                { name: 'Git', icon: <FaGit /> },
                { name: 'Gitlab', icon: <FaGitlab /> },
                { name: 'Kanban', icon: <FaTrello /> }, // Using Trello icon as a substitute
                { name: 'Scrum', icon: <FaJira /> }, // Using Jira icon as a substitute
                { name: 'Trello', icon: <FaTrello /> },
                { name: 'Jira', icon: <FaJira /> },
                { name: 'Bitrix24', icon: <FaBitbucket /> }, // Using Bitbucket icon as a substitute
                { name: 'ClickUP', icon: <FaTrello /> }, // Using Trello icon as a substitute
                { name: 'Figma', icon: <FaFigma /> },
            ],
        }
    }

    const { skills, skillsList } = content[language]

    return (
        <>
            <div className="flex items-center gap-20 ml-0 flex-col lg:flex-row lg:ml-40 opening animate__fadeInDown duration-1000">
                <div className="flex flex-col w-full text-center lg:text-left">
                    <h2 className="text-3xl">SOBRE MIM</h2>
                    <h1 className="text-6xl lg:text-5xl">
                        <b><span className="gradient-text">GABRIEL GIRARDI</span></b>
                    </h1>
                    <span className="text-xl mt-10 flex flex-col gap-3 lg:max-w-7xl">
                        <p>
                            Sou um desenvolvedor Full-Stack apaixonado por criar soluções web inovadoras. Com experiência nas tecnologias, foco em melhorar a experiência do usuário através de interfaces elegantes e funcionais. Estou sempre em busca de novos conhecimentos e tenho um profundo apreço por transformar conceitos em realidade, tornando-os práticos e eficientes.
                        </p>
                    </span>
                </div>
            </div>
            <div className="gap-20 ml-0 flex-col lg:flex-row lg:ml-40 mt-10 lg:max-w-7xl animate__fadeIn duration-1000">
                <h2 className="text-2xl font-semibold text-gray-200 my-5">{skills}</h2>
                <div className="flex flex-wrap gap-4">
                    { skillsList.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, x: -20}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.1, delay: index * 0.1}}
                            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 p-2 bg-white rounded-lg hover:bg-blue-100 hover:tra transition duration-300 cursor-pointer"
                        >
                            {skill.icon}
                            <span>{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col mt-16 border-t justify-center text-center lg:text-left lg:ml-40 lg:border-t-0 opening lg:justify-start animate__fadeInUp duration-1000">
                <h2 className="text-4xl mt-4 lg:mt-0">Social / Links</h2>
                <nav className="flex items-center text-center">
                    <SocialCard/>
                </nav>
            </div>
        </>
    )
}

export default About;