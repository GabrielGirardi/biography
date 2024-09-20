import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Lottie from 'react-lottie-player';
import animationData from '@/assets/animations/motorcycle.json';

interface Photo {
    title: string;
    description: string;
    imageUrl: string;
}

function GalleryBoard() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

    const language = localStorage.getItem('language') as string || 'pt';

    const content = {
        pt: {
            title: 'Galeria de Eventos e Projetos',
            photos: [
                { title: 'Evento A', description: 'Descrição do evento A.', imageUrl: 'https://media.licdn.com/dms/image/v2/D4D22AQGf7vUN1uQeNQ/feedshare-shrink_800/feedshare-shrink_800/0/1693080886088?e=1729728000&v=beta&t=kkyY_7MShVk948LXrIK_ukPNxE3iBou6Xc2hACmXY8k' },
                { title: 'Projeto B', description: 'Descrição do projeto B.', imageUrl: 'https://media.licdn.com/dms/image/v2/D4D22AQGf7vUN1uQeNQ/feedshare-shrink_800/feedshare-shrink_800/0/1693080886088?e=1729728000&v=beta&t=kkyY_7MShVk948LXrIK_ukPNxE3iBou6Xc2hACmXY8k' },
                { title: 'Evento C', description: 'Descrição do evento C.', imageUrl: 'https://media.licdn.com/dms/image/v2/D4D22AQGf7vUN1uQeNQ/feedshare-shrink_800/feedshare-shrink_800/0/1693080886088?e=1729728000&v=beta&t=kkyY_7MShVk948LXrIK_ukPNxE3iBou6Xc2hACmXY8k' },
                { title: 'Projeto D', description: 'Descrição do projeto D.', imageUrl: 'https://media.licdn.com/dms/image/v2/D4D22AQGf7vUN1uQeNQ/feedshare-shrink_800/feedshare-shrink_800/0/1693080886088?e=1729728000&v=beta&t=kkyY_7MShVk948LXrIK_ukPNxE3iBou6Xc2hACmXY8k' },
            ],
        },
        en: {
            title: 'Gallery of Events and Projects',
            photos: [
                { title: 'Event A', description: 'Description of Event A.', imageUrl: 'https://media.licdn.com/dms/image/v2/D4D22AQGf7vUN1uQeNQ/feedshare-shrink_800/feedshare-shrink_800/0/1693080886088?e=1729728000&v=beta&t=kkyY_7MShVk948LXrIK_ukPNxE3iBou6Xc2hACmXY8k' },
                { title: 'Project B', description: 'Description of Project B.', imageUrl: 'https://media.licdn.com/dms/image/v2/D4D22AQGf7vUN1uQeNQ/feedshare-shrink_800/feedshare-shrink_800/0/1693080886088?e=1729728000&v=beta&t=kkyY_7MShVk948LXrIK_ukPNxE3iBou6Xc2hACmXY8k' },
                { title: 'Event C', description: 'Description of Event C.', imageUrl: 'https://media.licdn.com/dms/image/v2/D4D22AQGf7vUN1uQeNQ/feedshare-shrink_800/feedshare-shrink_800/0/1693080886088?e=1729728000&v=beta&t=kkyY_7MShVk948LXrIK_ukPNxE3iBou6Xc2hACmXY8k' },
                { title: 'Project D', description: 'Description of Project D.', imageUrl: 'https://media.licdn.com/dms/image/v2/D4D22AQGf7vUN1uQeNQ/feedshare-shrink_800/feedshare-shrink_800/0/1693080886088?e=1729728000&v=beta&t=kkyY_7MShVk948LXrIK_ukPNxE3iBou6Xc2hACmXY8k' },
            ],
        }
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const { title, photos } = content[language];

    const openModal = (photo: Photo) => {
        setSelectedPhoto(photo);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedPhoto(null);
    };

    const handleClickOutside = (event: React.MouseEvent) => {
        const target = event.target as HTMLElement;
        if (target.closest('.modal-content') === null) {
            closeModal();
        }
    };

    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
            className="p-6 lg:flex-row lg:ml-40"
        >
            <h1 className="text-5xl lg:text-4xl mb-8">
                <b><span className="gradient-text">{title}</span></b>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {photos.map((photo: Photo, index: number) => (
                    <motion.div
                        key={index}
                        whileHover={{scale: 1.02, rotate: 2}}
                        transition={{duration: 0.3}}
                        onClick={() => openModal(photo)}
                    >
                        <Card className="bg-[#171619] shadow-lg rounded-lg overflow-hidden relative cursor-pointer">
                            <img src={photo.imageUrl} alt={photo.title} className="w-full h-48 object-cover"/>
                            <div className="p-4">
                                <h4 className="text-lg font-semibold text-white">{photo.title}</h4>
                                <p className="text-gray-400">{photo.description}</p>
                            </div>
                            <div
                                className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <Lottie
                                    loop
                                    play
                                    animationData={animationData}
                                    style={{width: 148, height: 148}}
                                />
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={handleClickOutside} // Fecha o modal ao clicar fora
                >
                    <motion.div
                        initial={{scale: 0.8, opacity: 0}}
                        animate={{scale: 1, opacity: 1}}
                        exit={{scale: 0.8, opacity: 0}}
                        transition={{duration: 0.3}}
                        className="modal-content bg-[#171619] rounded-lg shadow-lg p-2 w-2/3 h-2/3 mx-auto relative"
                    >
                        <button onClick={closeModal} className="absolute top-0 right-4 text-white text-5xl">
                            &times;
                        </button>
                        {selectedPhoto && (
                            <>
                                <img src={selectedPhoto.imageUrl} alt={selectedPhoto.title}
                                     className="mb-4 w-full h-[500px] object-cover rounded"/>
                                <h4 className="text-xl font-bold text-white mb-4">{selectedPhoto.title}</h4>
                                <p className="text-gray-300">{selectedPhoto.description}</p>
                            </>
                        )}
                    </motion.div>
                </div>
            )}
        </motion.div>
    );
}

export default GalleryBoard;
