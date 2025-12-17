import React from 'react';
import { IMAGES } from '../../utils/constants';

const History = () => {
    return (
        <section id="historia" className="py-20 bg-stone-100 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400 rounded-br-full opacity-20"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-red-600 rounded-tl-full opacity-10"></div>

            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div
                        className="md:w-1/2 relative group"
                        data-aos="fade-right"
                    >
                        <div className="absolute -top-4 -left-4 w-full h-full border-4 border-yellow-500 rounded-lg transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                        <img
                            src={IMAGES.interior}
                            alt="Ambiente del restaurante"
                            className="rounded-lg shadow-2xl w-full h-96 object-cover relative z-10 transform rotate-1 hover:rotate-0 transition-transform duration-500"
                        />
                    </div>
                    <div
                        className="md:w-1/2 text-center md:text-left"
                        data-aos="fade-left"
                    >
                        <span className="text-red-600 font-bold tracking-[0.2em] uppercase mb-2 block">Nuestra Esencia</span>
                        <h2 className="font-mexican text-3xl md:text-4xl text-gray-900 mb-6 leading-tight">
                            Más que comida, <br /> una <span className="text-red-600 relative inline-block">fiesta
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-400" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                                </svg>
                            </span> de sabor
                        </h2>
                        <p className="text-gray-600 mb-6 text-base leading-relaxed">
                            En <strong>El Chipotle</strong>, no solo servimos comida; servimos historia. Nacimos de la pasión por los sabores intensos de las calles de México fusionados con el estilo Americano que tanto nos gusta.
                        </p>
                        <p className="text-gray-600 mb-8 text-base leading-relaxed">
                            Cada taco, cada hamburguesa y cada corte de carne se prepara con ingredientes frescos y nuestras salsas secretas que han pasado de generación en generación. Ven y descubre por qué somos los favoritos.
                        </p>

                        <div className="grid grid-cols-3 gap-3 text-center border-t border-gray-300 pt-5">
                            <div>
                                <h3 className="font-mexican text-2xl text-red-700">100%</h3>
                                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Fresco</p>
                            </div>
                            <div>
                                <h3 className="font-mexican text-2xl text-red-700">20+</h3>
                                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Salsas</p>
                            </div>
                            <div>
                                <h3 className="font-mexican text-2xl text-red-700">4.9</h3>
                                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Calificación</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default History;
