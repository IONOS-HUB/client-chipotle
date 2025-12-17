import React from 'react';
import { Link } from 'react-router-dom';

const FullMenuGallery = () => {
    return (
        <section id="menu-completo" className="py-24 bg-linear-to-b from-stone-50 to-white">
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

            </div>
        </section>
    );
};

export default FullMenuGallery;
