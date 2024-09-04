import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { LinkedinIcon, AtSignIcon, Github } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'

interface ContactProps {
    language: 'pt' | 'en'
}

interface Content {
    [key: string]: {
        title: string;
        whatsapp: string;
        linkedin: string;
        email: string;
        github: string;
    };
}

export default function Contact({ language }: ContactProps) {
    const content: Content = {
        pt: {
            title: 'Entre em Contato',
            whatsapp: 'WhatsApp',
            linkedin: 'LinkedIn',
            email: 'E-Mail',
            github: 'GitHub'
        },
        en: {
            title: 'Get in Touch',
            whatsapp: 'WhatsApp',
            linkedin: 'LinkedIn',
            email: 'E-Mail',
            github: 'GitHub'
        }
    };

    type LanguageKeys = keyof typeof content[typeof language];

    const contactMethods = [
        {
            name: 'whatsapp',
            icon: FaWhatsapp,
            link: 'https://api.whatsapp.com/send?phone=5547997135921',
            color: 'bg-green-500 hover:bg-green-600'
        },
        {
            name: 'linkedin',
            icon: LinkedinIcon,
            link: 'https://www.linkedin.com/in/ggirardii/',
            color: 'bg-blue-600 hover:bg-blue-700'
        },
        {
            name: 'email',
            icon: AtSignIcon,
            link: 'mailto:dev.ggirardi@gmail.com',
            color: 'bg-red-500 hover:bg-red-600'
        },
        {
            name: 'github',
            icon: Github,
            link: 'https://github.com/GabrielGirardi',
            color: 'bg-black hover:bg-gray-900'
        }
    ]

    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
            className="max-w-md mx-auto rounded-md p-4 bg-gray-100 text-black border dark:bg-gray-800 dark:text-white"
        >
            <h2 className="text-3xl font-bold text-center">{content[language].title}</h2>
            <span className="flex justify-center my-6">
                <img className="rounded-full border" src="/assets/profile-2.jpeg" alt="" title="" width={128} height={128}/>
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactMethods.map((method, index) => (
                    <motion.div
                        key={method.name}
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: index * 0.1}}
                    >
                        <Button
                            asChild
                            className={`w-full ${method.color} text-white`}
                        >
                            <a
                                href={method.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 py-6"
                            >
                                <method.icon className="h-6 w-6"/>
                                <span>{content[language][method.name as LanguageKeys]}</span>
                            </a>
                        </Button>
                    </motion.div>
                ))}
            </div>
        </motion.div>
)
}