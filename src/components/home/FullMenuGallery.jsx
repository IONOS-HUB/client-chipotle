import React, { useState } from 'react';
import { ZoomIn, X, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { MENU_IMAGES } from '../../utils/constants';

const FullMenuGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (index) => {
        setCurrentIndex(index);
        setSelectedImage(MENU_IMAGES[index]);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const nextImage = () => {
        const newIndex = (currentIndex + 1) % MENU_IMAGES.length;
        setCurrentIndex(newIndex);
        setSelectedImage(MENU_IMAGES[newIndex]);
    };

    const prevImage = () => {
        const newIndex = (currentIndex - 1 + MENU_IMAGES.length) % MENU_IMAGES.length;
        setCurrentIndex(newIndex);
        setSelectedImage(MENU_IMAGES[newIndex]);
    };

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
                        className="text-gray-600 text-lg max-w-2xl mx-auto"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Haz clic en cualquier imagen para verla en detalle y descargarla
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {MENU_IMAGES.map((image, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl shadow-2xl border-4 border-stone-200 hover:border-red-500 transition-all duration-300 cursor-pointer"
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                            onClick={() => openLightbox(index)}
                        >
                            <img
                                src={image}
                                alt={`Menú completo de El Chipotle - Página ${index + 1} con todos nuestros platillos, precios y especialidades`}
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-4">
                                    <ZoomIn className="text-white" size={48} />
                                    <span className="text-white font-bold text-lg bg-red-600 px-6 py-2 rounded-full">
                                        Ver en Grande
                                    </span>
                                </div>
                            </div>
                            <div className="absolute top-4 right-4 bg-yellow-500 text-red-900 font-bold px-4 py-2 rounded-full shadow-lg">
                                Menú {index + 1}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lightbox Modal */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                        onClick={closeLightbox}
                    >
                        <button
                            className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors z-10"
                            onClick={closeLightbox}
                        >
                            <X size={40} />
                        </button>

                        {MENU_IMAGES.length > 1 && (
                            <>
                                <button
                                    className="absolute left-4 text-white hover:text-yellow-400 transition-colors z-10"
                                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                >
                                    <ChevronLeft size={48} />
                                </button>
                                <button
                                    className="absolute right-4 text-white hover:text-yellow-400 transition-colors z-10"
                                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
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
                                className="absolute bottom-4 right-4 bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-full flex items-center gap-2 shadow-lg transition-colors"
                                onClick={(e) => e.stopPropagation()}
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
