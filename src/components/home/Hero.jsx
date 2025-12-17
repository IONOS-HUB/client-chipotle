import React from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES, WHATSAPP_CONFIG } from '../../utils/constants';

const Hero = () => {
    return (
        <header className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-stone-50 z-10"></div>
                    <img
                        src={IMAGES.heroBg}
                        alt="Parrilla con carne asada al carbón - El Chipotle restaurante mexicano"
                        className="w-full h-full object-cover animate-pulse-slow scale-110"
                    />
            </div>

            <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
                {/* Logo grande con fallback */}
                <div
                    className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-yellow-500 shadow-2xl mb-8 bg-white flex items-center justify-center overflow-hidden animate-bounce-slow"
                    data-aos="zoom-in"
                >
                    <img
                        src={IMAGES.logo}
                        alt="Logo de El Chipotle - Restaurante de comida mexicana y americana"
                        className="w-full h-full object-contain"
                        onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '<span class="font-mexican text-4xl text-red-700">El Chipotle</span>' }}
                    />
                </div>

                <h1
                    className="font-mexican text-5xl md:text-7xl text-yellow-400 mb-4 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] tracking-wider"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    Auténtico Sabor
                </h1>
                <h2
                    className="font-mexican text-3xl md:text-5xl text-white mb-8 drop-shadow-lg"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    Mexican & American Food
                </h2>
                <p
                    className="text-xl text-gray-200 mb-10 max-w-2xl font-light"
                    data-aos="fade-up"
                    data-aos-delay="600"
                >
                    Donde la tradición mexicana se encuentra con el apetito voraz. ¡Prepárate para una explosión de sabor en cada bocado!
                </p>
                <div
                    className="flex flex-col sm:flex-row gap-4"
                    data-aos="fade-up"
                    data-aos-delay="800"
                >
                    <Link
                        to="/menu"
                        className="bg-red-600 hover:bg-red-500 text-white text-lg px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(220,38,38,0.5)] border-2 border-red-400"
                    >
                        Ver Menú
                    </Link>
                    <a
                        href={WHATSAPP_CONFIG.getLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 hover:bg-green-500 text-white text-lg px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(22,163,74,0.5)] border-2 border-green-400 flex items-center justify-center gap-2"
                    >
                        <MessageCircle /> Pedir por WhatsApp
                    </a>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-white animate-bounce">
                <ChevronDown size={40} />
            </div>
        </header>
    );
};

export default Hero;
