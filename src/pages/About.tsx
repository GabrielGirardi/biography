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
} from 'react-icons/fa'


interface AboutProps {
    language: 'pt' | 'en'
    isDarkMode: string
}

export default function About({ language, isDarkMode }: AboutProps) {
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

    const { title, bio, skills, skillsList } = content[language]

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <span className={`flex flex-col p-2 md:p-6 rounded-lg my-4 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black border'}`}>
                <h1 className="text-3xl font-bold mb-5 text-gray-900 dark:text-white">{title}</h1>
                <span className="flex flex-col md:flex-row items-center gap-6">
                    <img className="rounded-full border shadow-lg shadow-white dark:shadow-gray-900" src="/assets/profile-real.jpeg" alt="" title="" width={128} height={128} />
                    <p className="text-lg text-gray-700 dark:text-gray-300">{bio}</p>
                </span>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 my-5">{skills}</h2>
                <div className="flex flex-wrap gap-4">
                    {skillsList.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 p-2 bg-white dark:bg-gray-900 rounded-lg"
                        >
                            {skill.icon}
                            <span>{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </span>
        </motion.div>
    )
}