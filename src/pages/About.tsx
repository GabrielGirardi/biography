import { motion } from 'framer-motion'

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
                'React, Vue.js, Javascript, JQuery',
                'Node.js, Next.js, PHP, Python',
                'MongoDB, PostgreSQL, MySQL',
                'AWS, Google Cloud Platform, Git, Gitlab',
                'Kanban, Scrum, Trello, Jira, Bitrix24, ClickUP',
                'Figma, Photoshop',
            ],
        },
        en: {
            title: 'About Me',
            bio: 'I am a fullstack developer passionate about creating innovative web solutions. With experience in various technologies, I am always looking to learn and grow in my career. Currently, I work as a frontend developer, dedicating myself to enhancing user experience through elegant and functional interfaces. However, my quest for knowledge is continuous. I have a deep appreciation for transforming concepts into reality, making them not only visible but also highly functional.',
            skills: 'My skills include:',
            skillsList: [
                'React, Vue.js, Javascript, JQuery',
                'Node.js, Next.js, PHP, Python',
                'MongoDB, PostgreSQL, MySQL',
                'AWS, Google Cloud Platform, Git, Gitlab',
                'Kanban, Scrum, Trello, Jira, Bitrix24, ClickUP',
                'Figma, Photoshop',
            ],
        }
    }

    const { title, bio, skills, skillsList } = content[language]

    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
        >
            <h1 className="text-3xl font-bold mt-10 text-gray-900 dark:text-white">{title}</h1>
            <span className={`flex flex-col p-2 rounded-lg my-4 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black border' }`}>
                <span className="flex flex-col md:flex-row items-center gap-6">
                    <img className="rounded-full border" src="/assets/profile-real.jpeg" alt="" title="" width={128} height={128}/>
                    <p className="text-lg text-gray-700 dark:text-gray-300">{bio}</p>
                </span>
            </span>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 my-5">{skills}</h2>
            <div className="flex justify-between items-center">
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    {skillsList.map((skill, index) => (
                        <motion.li
                            key={index}
                            initial={{opacity: 0, x: -20}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.3, delay: index * 0.1}}
                        >
                            {skill}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.div>
    )
}