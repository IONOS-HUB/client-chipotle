import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ZoomIn, X, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { MENU_IMAGES } from '../../utils/constants';

const FullMenuGallery = () => {
    return (
        <section id="menu-completo" className="py-24 bg-gradient-to-b from-stone-50 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span
                        className="text-red-500 font-bold tracking-widest uppercase mb-2 block"
                        data-aos="fade-up"
                    >
                        Nuestro Menú Completo
                    </span>
                    <h2
                        className="font-mexican text-4xl md:text-6xl text-gray-900 mb-4"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        Explora Todas Nuestras Delicias
                    </h2>
                    <p
                        className="text-gray-600 text-lg max-w-2xl mx-auto mb-8"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Haz clic en cualquier imagen para verla en tamaño completo
                    </p>
                    <Link
                        to="/menu"
                        className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 uppercase tracking-wide text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        Ver Menú Completo Digital
                    </Link>
                </div>


                {/* Lightbox Modal */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                        onClick={closeLightbox}
                    >
                        <button
                            className="absolute top-4 right-4 text-white hover:text-red-500 active:scale-95 transition-all z-10 p-2 rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            onClick={closeLightbox}
                            aria-label="Cerrar menú"
                        >
                            <X size={40} />
                        </button>

                        {MENU_IMAGES.length > 1 && (
                            <>
                                <button
                                    className="absolute left-4 text-white hover:text-yellow-400 active:scale-95 transition-all z-10 p-2 rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                    aria-label="Imagen anterior"
                                >
                                    <ChevronLeft size={48} />
                                </button>
                                <button
                                    className="absolute right-4 text-white hover:text-yellow-400 active:scale-95 transition-all z-10 p-2 rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                    aria-label="Imagen siguiente"
                                >
                                    <ChevronRight size={48} />
                                </button>
                            </>
                        )}

                        <div className="relative max-w-6xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
                            <img
                                src={selectedImage}
                                alt={`Menú completo de El Chipotle - Vista ampliada página ${currentIndex + 1}`}
                                className="w-full h-full object-contain rounded-lg"
                            />
                            <a
                                href={selectedImage}
                                download={`menu-el-chipotle-${currentIndex + 1}.png`}
                                className="absolute bottom-4 right-4 bg-green-600 hover:bg-green-500 active:scale-95 text-white font-bold px-6 py-3 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
                                onClick={(e) => e.stopPropagation()}
                                aria-label="Descargar menú"
                            >
                                <Download size={20} />
                                Descargar
                            </a>
                        </div>

                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
                            {currentIndex + 1} / {MENU_IMAGES.length}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default FullMenuGallery;
