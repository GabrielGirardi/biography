import { CodeIcon, PersonIcon, ImageIcon, MobileIcon } from "@radix-ui/react-icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function NavigationSwiper() {
    return (
        <Swiper className="p-2" spaceBetween={20} slidesPerView={2.5}>
            <SwiperSlide className="w-1/2 h-96 rounded-lg bg-bg-navigation border shadow-nav backdrop-blur-lg p-2 ease-in duration-150 hover:-translate-y-2">
                <a href="">
                    <div className="flex flex-col items-center justify-center h-4/5 bg-gradient-to-r from-purple-500 to-blue-500 w-auto text-center rounded-lg p-4">
                        <p className="text-4xl font-bold">Projetos</p>
                        <span className="text-sm text-gray-300">Minha biblioteca de projetos desenvolvidos</span>
                    </div>
                    <div className="flex items-center h-20 ml-4 gap-6">      
                        <CodeIcon width={24} height={24} />
                        <span className="flex flex-col justify-center gap-1">
                            <h3 className="text-base">
                                Projetos
                            </h3>
                            <p className="text-xs text-gray-400">
                                Aqui você encontra todos os meus projetos desenvolvidos ao longo da minha carreira.
                            </p>
                        </span>
                    </div>
                </a>
            </SwiperSlide>

            <SwiperSlide className="w-1/2 h-96 rounded-lg bg-bg-navigation border shadow-nav backdrop-blur-lg p-2 ease-in duration-150 hover:-translate-y-2">
                <a href="">
                    <div className="flex flex-col items-center justify-center h-4/5 bg-gradient-to-r from-sky-500 to-indigo-500 w-auto text-center rounded-lg p-4">
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
                </a>
            </SwiperSlide>

            <SwiperSlide className="w-1/2 h-96 rounded-lg bg-bg-navigation border shadow-nav backdrop-blur-lg p-2 ease-in duration-150 hover:-translate-y-2">
                <a href="">
                    <div className="flex flex-col items-center justify-center h-4/5 bg-gradient-to-r from-violet-500 to-fuchsia-500 w-auto text-center rounded-lg p-4">
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
                </a>
            </SwiperSlide>

            <SwiperSlide className="w-1/2 h-96 rounded-lg bg-bg-navigation border shadow-nav backdrop-blur-lg p-2 ease-in duration-150 hover:-translate-y-2">
                <a href="">
                    <div className="flex flex-col items-center justify-center h-4/5 bg-gradient-to-r from-pink-500 to-yellow-500 w-auto text-center rounded-lg p-4">
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
                                Aqui você encontra meios de contato para se comunicar comigo.
                            </p>
                        </span>
                    </div>
                </a>
            </SwiperSlide>
        </Swiper>
    )
}

export default NavigationSwiper;