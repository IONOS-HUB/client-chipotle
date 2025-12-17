import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../../utils/constants';

const MenuPreview = () => {
    return (
        <section id="menu" className="py-24 bg-stone-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-red-500 font-bold tracking-widest uppercase mb-2 block" data-aos="fade-up">Nuestro Menú</span>
                    <h2 className="font-mexican text-4xl md:text-6xl text-gray-900" data-aos="fade-up" data-aos-delay="100">Favoritos de la Casa</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {/* Menu Card 1 */}
                    <div
                        className="group bg-white rounded-3xl shadow-lg overflow-hidden border border-stone-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <div className="h-64 overflow-hidden relative">
                            <img src={IMAGES.burger} alt="Tomahawk - Corte de carne importado de 400g asado al carbón de El Chipotle" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full font-bold text-red-600 shadow-sm">$18.00</div>
                        </div>
                        <div className="p-8">
                            <h3 className="font-mexican text-2xl text-stone-800 mb-2 group-hover:text-red-600 transition-colors">Tomahowk</h3>
                            <p className="text-gray-500 mb-6 text-sm leading-relaxed">Corte importado de 400g, asado al carbón, bañado en chimichurri de la casa y acompañado de papas rústicas doradas.</p>
                            <Link 
                                to="/menu" 
                                className="block w-full text-center py-3 border-2 border-red-500 text-red-500 font-bold rounded-xl hover:bg-red-50 active:scale-95 transition-all duration-200 uppercase tracking-wide text-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                            >
                                Ver Detalles
                            </Link>
                        </div>
                    </div>

                    {/* Menu Card 2 */}
                    <div
                        className="group bg-white rounded-3xl shadow-xl overflow-hidden border border-stone-100 hover:shadow-2xl transition-all duration-300 transform md:-translate-y-8 relative z-10"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 text-xs font-bold px-3 py-2 text-center uppercase tracking-widest z-20">★ El Más Vendido ★</div>
                        <div className="h-64 overflow-hidden relative mt-8">
                            <img src={IMAGES.steak} alt="Fajita de carne o pollo con pimientos y cebolla, servida con tortillas y guacamole" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute bottom-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg font-bold shadow-lg">$7.00</div>
                        </div>
                        <div className="p-8">
                            <h3 className="font-mexican text-3xl text-stone-800 mb-2 group-hover:text-red-600 transition-colors">Fajita</h3>
                            <p className="text-gray-500 mb-6 text-sm leading-relaxed">Tiernas tiras de carne o pollo marinadas, salteadas con pimientos y cebolla, servidas con tortillas calientes y guacamole.</p>
                            <Link 
                                to="/menu" 
                                className="block w-full text-center py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl uppercase tracking-wide text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
                            >
                                Ordenar Ahora
                            </Link>
                        </div>
                    </div>

                    {/* Menu Card 3 */}
                    <div
                        className="group bg-white rounded-3xl shadow-lg overflow-hidden border border-stone-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <div className="h-64 overflow-hidden relative">
                            <img src={IMAGES.combo} alt="Ensaladas frescas de El Chipotle con lechugas mixtas, aderezo ranch y pollo a la parrilla" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full font-bold text-red-600 shadow-sm">$4.00</div>
                        </div>
                        <div className="p-8">
                            <h3 className="font-mexican text-2xl text-stone-800 mb-2 group-hover:text-red-600 transition-colors">Ensaladas</h3>
                            <p className="text-gray-500 mb-6 text-sm leading-relaxed">Frescas lechugas mixtas, aderezo ranch de la casa, crutones artesanales, queso parmesano y pollo a la parrilla.</p>
                            <Link 
                                to="/menu" 
                                className="block w-full text-center py-3 border-2 border-red-500 text-red-500 font-bold rounded-xl hover:bg-red-50 active:scale-95 transition-all duration-200 uppercase tracking-wide text-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                            >
                                Ver Detalles
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MenuPreview;
