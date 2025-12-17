import React from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { IMAGES, WHATSAPP_CONFIG } from "../../utils/constants";

const Hero = () => {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-transparent z-10"></div>
        <img
          src={IMAGES.heroBg}
          alt="Parrilla con carne asada al carbón - El Chipotle restaurante mexicano"
          className="w-full h-full object-cover animate-pulse-slow scale-110"
          style={{
            maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)"
          }}
          draggable={false}
          loading="lazy"
        />
      </div>
      
      {/* Fade gradient at bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-stone-50 to-transparent z-10 pointer-events-none"
        style={{
          maskImage: "linear-gradient(to top, black 60%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top, black 60%, transparent 100%)"
        }}
      ></div>

      <div className="relative z-20 text-center px-3 sm:px-6 md:px-8 max-w-xl sm:max-w-3xl md:max-w-4xl mx-auto flex flex-col items-center">
        {/* Logo grande con fallback */}
        <div
          className="w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full shadow-2xl mb-6 sm:mb-8flex items-center justify-center overflow-hidden animate-bounce-slow"
          data-aos="zoom-in"
        >
          <img
            src={IMAGES.logo}
            alt="Logo de El Chipotle - Restaurante de comida mexicana y americana"
            className="w-full h-full object-contain xs:mt-10"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.innerHTML =
                '<span class="font-mexican text-2xl sm:text-4xl text-red-700">El Chipotle</span>';
            }}
            draggable={false}
            loading="lazy"
          />
        </div>

        <h1
          className="font-mexican text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-yellow-400 mb-2 sm:mb-4 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] tracking-wider"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Auténtico Sabor
        </h1>
        <h2
          className="font-mexican text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 sm:mb-8 drop-shadow-lg"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Mexican & American Food
        </h2>
        <p
          className="text-base xs:text-lg sm:text-xl text-gray-200 mb-6 sm:mb-10 max-w-sm sm:max-w-lg md:max-w-2xl font-light"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Donde la tradición mexicana se encuentra con el apetito voraz.
          ¡Prepárate para una explosión de sabor en cada bocado!
        </p>
        <div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none mx-auto"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <Link
            to="/menu"
            className="flex-1 bg-red-600 hover:bg-red-500 text-white text-base xs:text-lg px-6 xs:px-8 py-3 xs:py-4 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_16px_rgba(220,38,38,0.5)] hover:shadow-[0_0_24px_rgba(220,38,38,0.7)] border-2 border-red-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
          >
            Ver Menú
          </Link>
          <a
            href={WHATSAPP_CONFIG.getLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-600 hover:bg-green-500 text-white text-base xs:text-lg px-6 xs:px-8 py-3 xs:py-4 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_16px_rgba(22,163,74,0.5)] hover:shadow-[0_0_24px_rgba(22,163,74,0.7)] border-2 border-green-400 flex items-center justify-center gap-1 xs:gap-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
            aria-label="Pedir por WhatsApp"
          >
            <MessageCircle className="w-5 h-5 xs:w-6 xs:h-6" />{" "}
            <span className="hidden xs:inline">Pedir por WhatsApp</span>
            <span className="xs:hidden">WhatsApp</span>
          </a>
        </div>
      </div>

      <button
        onClick={() => {
          const nextSection = document.getElementById("historia");
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="absolute bottom-5 xs:bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 text-white animate-bounce hover:text-yellow-400 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-full p-1 xs:p-2"
        aria-label="Desplazarse a la siguiente sección"
      >
        <ChevronDown size={32} className="xs:hidden" />
        <ChevronDown size={40} className="hidden xs:inline" />
      </button>
    </header>
  );
};

export default Hero;
