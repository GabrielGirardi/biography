import { PersonIcon, SunIcon, PlayIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function NavigationSwiper() {
    let slides;

    if (window.innerWidth < 768) {
        slides = 1.1;
    } else {
        slides = 2.5;
    }


    return (
        <Swiper className="p-2" spaceBetween={20} slidesPerView={slides} scrollbar={{ draggable: true }} navigation>
            <SwiperSlide className="w-1/2 h-96 rounded-lg bg-bg-navigation border shadow-nav backdrop-blur-lg p-2 ease-in duration-150 hover:-translate-y-2">
                <a href="https://restaurant-system-one.vercel.app/" target="_blank">
                    <div className="flex flex-col items-center justify-center h-4/5 bg-gradient-to-r from-gray-500 to-yellow-800 w-auto text-center rounded-lg p-4">
                        <p className="text-4xl font-bold">Sistema de restaurante</p>
                        <span className="text-sm text-gray-300">Sistema de reservas de mesas no Ahoy</span>
                    </div>
                    <div className="flex items-center h-20 ml-4 gap-6">      
                        <HamburgerMenuIcon width={24} height={24}/>
                        <span className="flex flex-col justify-center gap-1">
                            <h3 className="text-base">
                                Sistema de restaurante
                            </h3>
                            <p className="text-xs text-gray-400">
                                Um sistema de reservas de mesas em Vue.js
                            </p>
                        </span>
                    </div>
                </a>
            </SwiperSlide>

            <SwiperSlide className="w-1/2 h-96 rounded-lg bg-bg-navigation border shadow-nav backdrop-blur-lg p-2 ease-in duration-150 hover:-translate-y-2">
                <a href="https://weather-forecast-gg.vercel.app/" target="_blank">
                    <div className="flex flex-col items-center justify-center h-4/5 bg-gradient-to-r from-gray-500 to-sky-800 w-auto text-center rounded-lg p-4">
                        <p className="text-4xl font-bold">Previsão do tempo</p>
                        <span className="text-sm text-gray-300">Saiba mais sobre o clima</span>
                    </div>
                    <div className="flex items-center h-20 ml-4 gap-6">   
                        <SunIcon width={24} height={24} />     
                        <span className="flex flex-col justify-center gap-1">
                            <h3 className="text-base">
                                Previsão do tempo
                            </h3>
                            <p className="text-xs text-gray-400">
                                Um sistema para saber o clima atual de qualquer cidade.
                            </p>
                        </span>
                    </div>
                </a>
            </SwiperSlide>

            <SwiperSlide className="w-1/2 h-96 rounded-lg bg-bg-navigation border shadow-nav backdrop-blur-lg p-2 ease-in duration-150 hover:-translate-y-2">
                <a href="https://github.com/GabrielGirardi/credit-system" target="_blank">
                    <div className="flex flex-col items-center justify-center h-4/5 bg-gradient-to-r from-gray-500 to-fuchsia-800 w-auto text-center rounded-lg p-4">
                        <p className="text-4xl font-bold">Crediário</p>
                        <span className="text-sm text-gray-300">Sistema desenvolvido para armazenamento de informações</span>
                    </div>
                    <div className="flex items-center h-20 ml-4 gap-6">
                        <PersonIcon width={24} height={24}/>        
                        <span className="flex flex-col justify-center gap-1">
                            <h3 className="text-base">
                                Sistema de crediário
                            </h3>
                            <p className="text-xs text-gray-400">
                                Um sistema feito em PHP para cadastro de informações.
                            </p>
                        </span>
                    </div>
                </a>
            </SwiperSlide>

            <SwiperSlide className="w-1/2 h-96 rounded-lg bg-bg-navigation border shadow-nav backdrop-blur-lg p-2 ease-in duration-150 hover:-translate-y-2">
                <a href="https://github.com/GabrielGirardi/nlw-IA" target="_blank">
                    <div className="flex flex-col items-center justify-center h-4/5 bg-gradient-to-r from-gray-500 to-orange-800 w-auto text-center rounded-lg p-4">
                        <p className="text-4xl font-bold">NLW IA</p>
                        <span className="text-sm text-gray-300">Projeto utilizando IA</span>
                    </div>
                    <div className="flex items-center h-20 ml-4 gap-6">
                        <PlayIcon width={24} height={24} />        
                        <span className="flex flex-col justify-center gap-1">
                            <h3 className="text-base">
                                NLW IA
                            </h3>
                            <p className="text-xs text-gray-400">
                                Projeto para produzir descrições/títulos para vídeos.
                            </p>
                        </span>
                    </div>
                </a>
            </SwiperSlide>
        </Swiper>
    )
}

export default NavigationSwiper;