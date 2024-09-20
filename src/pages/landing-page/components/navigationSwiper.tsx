import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Link } from "react-router-dom";

import {
    CodeIcon,
    PersonIcon,
    ImageIcon,
    MobileIcon,
    ArrowRightIcon,
    ArrowLeftIcon
} from "@radix-ui/react-icons";

function NavigationSwiper() {
    const swiperRef = useRef(null);
    const slidesPerView = window.innerWidth < 768 ? 1.1 : 2.5;
    const isMobile = window.innerWidth < 768 ? true : false;

    return (
        <>
            <span className="flex relative mt-4 xl:mt-0">
                <h2 className="text-4xl lg:mt-0 font-bold gradient-text-2">Navegação</h2>
                { !isMobile && (
                    <>
                        <button
                            className="swiper-button-prev z-10 absolute left-48 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 rounded-full p-2 shadow-md hover:bg-gray-200"
                            /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
                            /* @ts-ignore */
                            onClick={() => swiperRef.current?.slidePrev()}
                        >
                            <ArrowLeftIcon/>
                        </button>
                        <button
                            className="swiper-button-next z-10 absolute left-60 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 rounded-full p-2 shadow-md hover:bg-gray-200"
                            /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
                            /* @ts-ignore */
                            onClick={() => swiperRef.current?.slideNext()}
                        >
                            <ArrowRightIcon/>
                        </button>
                    </>
                )}
            </span>
            <nav className="flex flex-row gap-10 mt-10 w-full">
                <Swiper
                    className="p-2 rounded-lg relative"
                    spaceBetween={20}
                    slidesPerView={slidesPerView}
                    scrollbar={{ draggable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }}
                    onInit={(swiper) => {
                        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                        {/* @ts-ignore */}
                        swiperRef.current = swiper;
                    }}
                >
                    <SwiperSlide className="w-1/2 h-96 rounded-lg bg-bg-navigation border shadow-nav backdrop-blur-lg p-2 ease-in duration-150 hover:-translate-y-2">
                        <Link to="/projects" className="projects-card">
                            <div className="flex flex-col items-center justify-center h-4/5 bg-gradient-to-r from-purple-500 to-blue-500 w-auto text-center rounded-lg p-4">
                                <p className="text-4xl font-bold">Projetos</p>
                                <span className="text-sm text-gray-300">Minha biblioteca de projetos desenvolvidos</span>
                            </div>
                            <div className="flex items-center h-20 ml-4 gap-6">
                                <CodeIcon width={24} height={24}/>
                                <span className="flex flex-col justify-center gap-1">
                                    <h3 className="text-base">
                                        Projetos
                                    </h3>
                                    <p className="text-xs text-gray-400">
                                        Aqui você encontra todos os meus projetos desenvolvidos ao longo da minha carreira.
                                    </p>
                                </span>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className="w-1/2 h-96 rounded-lg bg-bg-navigation border shadow-nav backdrop-blur-lg p-2 ease-in duration-150 hover:-translate-y-2">
                        <Link to="/about" className="about-card">
                            <div className="flex flex-col items-center justify-center h-4/5 bg-gradient-to-r from-blue-500 to-yellow-500 w-auto text-center rounded-lg p-4">
                                <p className="text-4xl font-bold">Sobre mim</p>
                                <span className="text-sm text-gray-300">Saiba mais sobre mim e a minha jornada no desenvolvimento</span>
                            </div>
                            <div className="flex items-center h-20 ml-4 gap-6">
                                <PersonIcon width={24} height={24} />
                                <span className="flex flex-col justify-center gap-1">
                                    <h3 className="text-base">
                                        Sobre mim
                                    </h3>
                                    <p className="text-xs text-gray-400">
                                        Aqui você encontra um pouco da minha trajetória na vida como desenvolvedor.
                                    </p>
                                </span>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className="w-1/2 h-96 rounded-lg bg-bg-navigation border shadow-nav backdrop-blur-lg p-2 ease-in duration-150 hover:-translate-y-2">
                        <Link to="/gallery">
                            <div className="flex flex-col items-center justify-center h-4/5 bg-gradient-to-r from-yellow-500 to-fuchsia-500 w-auto text-center rounded-lg p-4">
                                <p className="text-4xl font-bold">Galeria</p>
                                <span className="text-sm text-gray-300">Veja o que eu tenho estudado até agora</span>
                            </div>
                            <div className="flex items-center h-20 ml-4 gap-6">
                                <ImageIcon width={24} height={24}/>
                                <span className="flex flex-col justify-center gap-1">
                                    <h3 className="text-base">
                                        Galeria
                                    </h3>
                                    <p className="text-xs text-gray-400">
                                        Aqui você encontra alguns certificados obtidos durante os meus estudos.
                                    </p>
                                </span>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className="w-1/2 h-96 rounded-lg bg-bg-navigation border shadow-nav backdrop-blur-lg p-2 ease-in duration-150 hover:-translate-y-2">
                        <a href="https://wa.link/ytox44" target="_blank">
                            <div className="flex flex-col items-center justify-center h-4/5 bg-gradient-to-r from-fuchsia-500 to-red-500 w-auto text-center rounded-lg p-4">
                                <p className="text-4xl font-bold">Contato</p>
                                <span className="text-sm text-gray-300">Entre em contato comigo por aqui</span>
                            </div>
                            <div className="flex items-center h-20 ml-4 gap-6">
                                <MobileIcon width={24} height={24} />
                                <span className="flex flex-col justify-center gap-1">
                                    <h3 className="text-base">
                                        Contato
                                    </h3>
                                    <p className="text-xs text-gray-400">
                                        Aqui você pode me mandar uma mensagem.
                                    </p>
                                </span>
                            </div>
                        </a>
                    </SwiperSlide>
                </Swiper>
            </nav>
        </>
    )
}

export default NavigationSwiper;