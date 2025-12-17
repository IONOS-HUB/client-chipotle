import React from 'react';
import { MENU_ITEMS, WHATSAPP_CONFIG } from '../utils/constants';
import SEO from '../components/seo/SEO';

const Menu = () => {
    return (
        <>
            <SEO 
                title="Menú Completo - El Chipotle | Comida Mexicana y Americana"
                description="Explora nuestro menú completo con tacos, burgers, parrilladas y más. Precios y descripciones de todos nuestros platillos. Pedidos por WhatsApp."
                keywords="menú El Chipotle, carta restaurante, precios comida mexicana, tacos, burgers, parrillada, pedidos online"
                url="https://elchipotle.com/menu"
            />
            <div className="pt-24 pb-20 bg-stone-50 min-h-screen">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="font-mexican text-5xl md:text-7xl text-red-700 mb-4 drop-shadow-md">
                        Nuestro Menú
                    </h1>
                    <div className="w-32 h-1 bg-yellow-400 mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Explora nuestra selección de sabores auténticos. Desde lo clásico hasta lo más atrevido.
                    </p>
                </div>

                {MENU_ITEMS.map((category, index) => (
                    <div key={index} className="mb-20">
                        <h2 className="font-mexican text-4xl text-stone-800 mb-10 border-b-4 border-yellow-400 inline-block pb-2">
                            {category.category}
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {category.items.map((item) => (
                                <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-stone-100">
                                    <div className="h-64 overflow-hidden relative">
                                        <img
                                            src={item.image}
                                            alt={`${item.name} - ${item.description} - Precio ${item.price} en El Chipotle`}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        {item.popular && (
                                            <div className="absolute top-4 left-4 bg-yellow-400 text-red-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                                                Popular
                                            </div>
                                        )}
                                        <div className="absolute bottom-4 right-4 bg-red-600 text-white font-bold px-4 py-2 rounded-lg shadow-lg">
                                            {item.price}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-mexican text-2xl text-stone-800 mb-2 group-hover:text-red-700 transition-colors">
                                            {item.name}
                                        </h3>
                                        <p className="text-gray-500 mb-4 leading-relaxed">
                                            {item.description}
                                        </p>
                                        <button 
                                            className="w-full py-3 border-2 border-red-100 text-red-600 font-bold rounded-xl hover:bg-red-50 hover:border-red-200 active:scale-95 transition-all duration-200 uppercase text-sm tracking-wide focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                                            onClick={() => window.open(WHATSAPP_CONFIG.getLink(), '_blank')}
                                            aria-label={`Agregar ${item.name} al pedido`}
                                        >
                                            Agregar al Pedido
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default Menu;
