import React from 'react';
import { IMAGES, WHATSAPP_CONFIG } from '../../utils/constants';

const Gallery = () => {
    return (
        <section id="galeria" className="py-16 bg-red-900 text-white bg-pattern">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2
                        className="font-mexican text-3xl md:text-4xl text-yellow-400 mb-4 drop-shadow-md"
                        data-aos="fade-up"
                    >
                        La Galería del Sabor
                    </h2>
                    <div
                        className="w-20 h-1 bg-yellow-400 mx-auto rounded-full mb-5"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    ></div>
                    <p
                        className="mt-4 text-black text-base max-w-2xl mx-auto"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Una pequeña muestra de lo que te espera. Advertencia: puede causar hambre extrema.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]">
                    {/* Featured Item Large */}
                    <div
                        className="lg:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-xl shadow-2xl cursor-pointer border-4 border-yellow-500/30 hover:border-yellow-500 transition-colors"
                        data-aos="zoom-in"
                    >
                        <img src={IMAGES.steak} alt="Corte de carne T-Bone parrillero de El Chipotle, asado al carbón con chimichurri" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="font-mexican text-lg text-white border-4 border-white px-5 py-2 rounded">Comida Mexicana</span>
                        </div>
                    </div>

                    {/* Other Items */}
                    <div
                        className="lg:col-span-1 lg:row-span-2 group relative overflow-hidden rounded-xl shadow-xl cursor-pointer"
                        data-aos="zoom-in"
                        data-aos-delay="100"
                    >
                        <img src={IMAGES.burger} alt="Chipotle Burger con carne angus, queso cheddar, tocino y aros de cebolla" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="font-mexican text-lg text-white border-4 border-white px-5 py-2 rounded">Cortes de Carne</span>
                        </div>
                    </div>

                    <div
                        className="lg:col-span-1 group relative overflow-hidden rounded-xl shadow-xl cursor-pointer"
                        data-aos="zoom-in"
                        data-aos-delay="200"
                    >
                        <img src={IMAGES.tacos} alt="Trío de tacos al pastor con piña asada, cebolla y cilantro de El Chipotle" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="font-mexican text-lg text-white border-4 border-white px-5 py-2 rounded">Hamburgesas</span>
                        </div>
                    </div>

                    <div
                        className="lg:col-span-1 group relative overflow-hidden rounded-xl shadow-xl cursor-pointer"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                    >
                        <img src={IMAGES.salad} alt="Ensalada especial de El Chipotle con mix de lechugas, aguacate y nueces" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="font-mexican text-lg text-white border-4 border-white px-5 py-2 rounded">Opciones Saludables</span>
                        </div>
                    </div>
                </div>

                <div
                    className="lg:col-span-4 bg-yellow-500 rounded-xl flex flex-col md:grid md:grid-cols-3 items-center p-8 mt-3 transform hover:scale-[1.01] transition-transform shadow-xl relative"
                    data-aos="fade-up">
                    {/* Left Side: Text */}
                    <div className="text-center md:text-left mb-12 md:mb-0 md:pl-10">
                        <h3 className="font-mexican text-3xl text-red-900 mb-2">¿Se te antojó?</h3>
                        <p className="text-red-800 font-medium text-lg">No te quedes con las ganas</p>
                        <p className="text-red-800 font-medium text-lg">¡Estamos listos para atenderte!</p>
                    </div>

                    {/* Center Side: Button */}
                    <div className="flex justify-center mb-12 md:mb-0 relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-white blur-2xl rounded-full opacity-90"></div>
                        <a 
                            href={WHATSAPP_CONFIG.getLink()} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="relative z-10 inline-block bg-red-700 text-white font-bold text-xl px-10 py-4 rounded-full hover:bg-red-800 active:scale-95 transition-all duration-200 shadow-2xl"
                            aria-label="Pedir ahora por WhatsApp"
                        >
                            ¡Pedir Ahora!
                        </a>
                    </div>

                    {/* Right Side: Logo */}
                    <div className="flex justify-center md:justify-end items-center md:pr-10">
                        <img 
                            src={IMAGES.logo} // Asegúrate de que esta ruta sea la de tu logo circular
                            alt="Logo de El Chipotle - Restaurante de comida mexicana y americana" 
                            className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
