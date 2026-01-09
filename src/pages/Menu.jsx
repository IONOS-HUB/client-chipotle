import React from 'react';
import { MENU_ITEMS, WHATSAPP_CONFIG, IMAGES } from '../utils/constants';
import SEO from '../components/seo/SEO';

const Menu = () => {
    return (
        <>
            <SEO 
                title="Menú Completo - El Chipotle Ibarra | Comida Mexicana y Americana"
                description="Explora nuestro menú completo en Ibarra con tacos, burritos, enchiladas, burgers, carnes, postres y más de 20 salsas caseras. Precios y descripciones de todos nuestros platillos. Pedidos por WhatsApp al +593 99 940 2348."
                keywords="menú El Chipotle Ibarra, carta restaurante Ibarra, precios comida mexicana, tacos Ibarra, burritos Ibarra, enchiladas, carnes, postres, pedidos online Ibarra, menú restaurante Ecuador"
                url="https://www.chipotleibarra.com/menu"
            />
            <div className="pt-32 pb-20 bg-green-900 min-h-screen">
                {/* Decorative Top Border - Papel Picado */}
                <div className="h-24 bg-black relative overflow-hidden flex items-end justify-center pb-3">
                    {/* String line */}
                    <div className="absolute top-3 left-0 right-0 h-0.5 bg-gray-400 z-10"></div>
                    <div className="flex items-end gap-0.5 z-20">
                        {[...Array(20)].map((_, i) => {
                            const colors = ['#14b8a6', '#a855f7', '#ec4899', '#f97316'];
                            const color = colors[i % 4];
                            return (
                                <div key={i} className="relative" style={{ width: '70px', height: '55px' }}>
                                    <svg width="70" height="55" viewBox="0 0 70 55" className="drop-shadow-lg">
                                        {/* Banner shape with decorative bottom */}
                                        <path
                                            d="M 5 0 L 65 0 L 65 42 Q 65 48 60 48 L 35 55 L 10 48 Q 5 48 5 42 Z"
                                            fill={color}
                                        />
                                        {/* Central star/flower design */}
                                        <g transform="translate(35, 28)">
                                            <path
                                                d="M 0 -10 L 2.5 -3 L 10 -3 L 4 2 L 6 10 L 0 5 L -6 10 L -4 2 L -10 -3 L -2.5 -3 Z"
                                                fill="white"
                                                opacity="0.4"
                                            />
                                            <circle cx="0" cy="0" r="3" fill="white" opacity="0.5" />
                                        </g>
                                        {/* Decorative bottom fringe - scalloped */}
                                        <path
                                            d="M 10 48 Q 12 46 14 48 Q 16 46 18 48 Q 20 46 22 48 Q 24 46 26 48 Q 28 46 30 48 Q 32 46 34 48 Q 36 46 38 48 Q 40 46 42 48 Q 44 46 46 48 Q 48 46 50 48 Q 52 46 54 48 Q 56 46 58 48 Q 60 46 60 48"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            fill="none"
                                            opacity="0.6"
                                        />
                                    </svg>
                                </div>
                            );
                        })}
                    </div>
                </div>
                
                <div className="container mx-auto px-4 max-w-5xl ">
                    {/* Button Section */}
                        <a 
                            href="/"
                            className="inline-block px-5 pt-0.1 pb-1 bg-red-600 text-white font-bold text-2xl md:text-3xl rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg transition-all duration-300 mt-5"
                            aria-label="Botón para regresar a la página principal"
                        >
                            ←
                        </a>
                    
                    {/* Logo Section */}
                    <div className="flex flex-col items-center mb-12">
                        <div className="relative mb-6">
                            <img 
                                src={IMAGES.logo} 
                                alt="El Chipotle Logo" 
                                className="h-32 md:h-40 w-auto"
                            />
                        </div>
                        <div className="flex items-center justify-center mb-8">
                            <h1 className="font-mexican text-5xl md:text-6xl text-orange-500 text-center" style={{ fontStyle: 'italic' }}>
                                Cocina Mexicana
                            </h1>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Left Column - Cocina Mexicana */}
                        <div className="space-y-6 flex flex-col">
                            {MENU_ITEMS.find(cat => cat.category === "Cocina Mexicana")?.items.map((item) => (
                                <div key={item.id} className="text-white">
                                    <div className="flex justify-between items-start mb-1">
                                        {/*Estilo de texto para copiar a los demás */}
                                        <h3 className="font-bold text-lg md:text-xl text-green-400 uppercase">
                                            {item.name}
                                        </h3>
                                        <span className="font-bold text-xl md:text-2xl text-green-400 ml-4 whitespace-nowrap">
                                            {item.price}
                                        </span>
                                    </div>
                                    <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                            <p className="text-white text-sm mt-auto italic">
                                * 50% de descuento en tu cumpleaños (Aplican condiciones)
                            </p>
                        </div>

                        {/* Right Column - Cocina Mexicana (continuación) */}
                        <div className="space-y-6 flex flex-col">
                            {/* Mostrar los últimos 10 items de Cocina Mexicana en la columna derecha */}
                            {MENU_ITEMS.find(cat => cat.category === "Cocina Mexicana")?.items.slice(10).map((item) => (
                                <div key={item.id} className="text-white">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="font-bold text-lg md:text-xl text-green-400 uppercase">
                                            {item.name}
                                        </h3>
                                        <span className="font-bold text-xl md:text-2xl text-green-400 ml-4 whitespace-nowrap">
                                            {item.price}
                                        </span>
                                    </div>
                                    <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                            <p className="text-white text-sm mt-auto italic">
                                * Opción solo carne adicional $1
                            </p>
                        </div>
                    </div>

                    {/* Separador */}
                    <div className="my-16 border-t-2 border-green-700"></div>

                    {/* Segunda Sección: Cocina Americana, Carnes, Postres y Bebidas */}
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Left Column */}
                        <div className="space-y-12 flex flex-col">
                            {/* Cocina Americana */}
                            <div>
                                <div className="flex items-center justify-center mb-6">
                                    <h2 className="font-mexican text-4xl md:text-5xl text-white text-center">
                                        Cocina Americana
                                    </h2>
                                </div>
                                <div className="space-y-4">
                                    {MENU_ITEMS.find(cat => cat.category === "Cocina Americana")?.items.map((item) => (
                                        <div key={item.id} className="text-white">
                                            <div className="flex justify-between items-start mb-1">
                                                <h3 className="font-bold text-lg md:text-xl text-white uppercase">
                                                    {item.name}
                                                </h3>
                                                <span className="font-bold text-xl md:text-2xl text-white ml-4 whitespace-nowrap">
                                                    {item.price}
                                                </span>
                                            </div>
                                            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Bebidas sin alcohol */}
                            <div>
                                <div className="flex items-center justify-center mb-6">
                                    <h2 className="font-mexican text-4xl md:text-5xl text-white text-center">
                                        Bebidas sin alcohol
                                    </h2>
                                </div>
                                <div className="space-y-4">
                                    {MENU_ITEMS.find(cat => cat.category === "Bebidas sin Alcohol")?.items.map((item) => (
                                        <div key={item.id} className="text-white">
                                            <div className="flex justify-between items-start mb-1">
                                                <h3 className="font-bold text-lg md:text-xl text-white uppercase">
                                                    {item.name}
                                                </h3>
                                                <span className="font-bold text-xl md:text-2xl text-white ml-4 whitespace-nowrap">
                                                    {item.price}
                                                </span>
                                            </div>
                                            {item.description && (
                                                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                                    {item.description}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-12 flex flex-col">
                            {/* Carnes */}
                            <div>
                                <div className="flex items-center justify-center mb-6">
                                    <h2 className="font-mexican text-4xl md:text-5xl text-white text-center">
                                        Carnes
                                    </h2>
                                </div>
                                {MENU_ITEMS.find(cat => cat.category === "Carnes")?.note && (
                                    <p className="text-gray-400 text-sm text-center mb-4 italic">
                                        {MENU_ITEMS.find(cat => cat.category === "Carnes")?.note}
                                    </p>
                                )}
                                <div className="space-y-4">
                                    {MENU_ITEMS.find(cat => cat.category === "Carnes")?.items.map((item) => (
                                        <div key={item.id} className="text-white">
                                            <div className="flex justify-between items-start mb-1">
                                                <h3 className="font-bold text-lg md:text-xl text-white uppercase">
                                                    {item.name}
                                                </h3>
                                                <span className="font-bold text-xl md:text-2xl text-white ml-4 whitespace-nowrap">
                                                    {item.price}
                                                </span>
                                            </div>
                                            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Postres y Café */}
                            <div>
                                <div className="flex items-center justify-center mb-6">
                                    <h2 className="font-mexican text-4xl md:text-5xl text-white text-center">
                                        Postres y Café
                                    </h2>
                                </div>
                                <div className="space-y-4">
                                    {MENU_ITEMS.find(cat => cat.category === "Postres y Café")?.items.map((item) => (
                                        <div key={item.id} className="text-white">
                                            <div className="flex justify-between items-start mb-1">
                                                <h3 className="font-bold text-lg md:text-xl text-white uppercase">
                                                    {item.name}
                                                </h3>
                                                <span className="font-bold text-xl md:text-2xl text-white ml-4 whitespace-nowrap">
                                                    {item.price}
                                                </span>
                                            </div>
                                            {item.description && (
                                                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                                    {item.description}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Bebidas con alcohol */}
                            <div>
                                <div className="flex items-center justify-center mb-6">
                                    <h2 className="font-mexican text-4xl md:text-5xl text-white text-center">
                                        Bebidas con alcohol
                                    </h2>
                                </div>
                                <div className="space-y-4">
                                    {MENU_ITEMS.find(cat => cat.category === "Bebidas con Alcohol")?.items.map((item) => (
                                        <div key={item.id} className="text-white">
                                            <div className="flex justify-between items-start mb-1">
                                                <h3 className="font-bold text-lg md:text-xl text-white uppercase">
                                                    {item.name}
                                                </h3>
                                                <span className="font-bold text-xl md:text-2xl text-white ml-4 whitespace-nowrap">
                                                    {item.price}
                                                </span>
                                            </div>
                                            {item.description && (
                                                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                                    {item.description}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Bottom Border - Papel Picado */}
                <div className="h-24 bg-black relative overflow-hidden flex items-start justify-center pt-3 mt-8">
                    {/* String line */}
                    <div className="absolute bottom-3 left-0 right-0 h-0.5 bg-gray-400 z-10"></div>
                    <div className="flex items-start gap-0.5 z-20">
                        {[...Array(20)].map((_, i) => {
                            const colors = ['#a855f7', '#3b82f6', '#22c55e', '#eab308', '#f97316', '#ef4444'];
                            const color = colors[i % 6];
                            return (
                                <div key={i} className="relative" style={{ width: '70px', height: '55px' }}>
                                    <svg width="70" height="55" viewBox="0 0 70 55" className="drop-shadow-lg">
                                        {/* Banner shape with decorative top */}
                                        <path
                                            d="M 5 55 L 65 55 L 65 13 Q 65 7 60 7 L 35 0 L 10 7 Q 5 7 5 13 Z"
                                            fill={color}
                                        />
                                        {/* Central star/flower design */}
                                        <g transform="translate(35, 28)">
                                            <path
                                                d="M 0 -10 L 2.5 -3 L 10 -3 L 4 2 L 6 10 L 0 5 L -6 10 L -4 2 L -10 -3 L -2.5 -3 Z"
                                                fill="white"
                                                opacity="0.4"
                                            />
                                            <circle cx="0" cy="0" r="3" fill="white" opacity="0.5" />
                                        </g>
                                        {/* Decorative top fringe - scalloped */}
                                        <path
                                            d="M 10 7 Q 12 9 14 7 Q 16 9 18 7 Q 20 9 22 7 Q 24 9 26 7 Q 28 9 30 7 Q 32 9 34 7 Q 36 9 38 7 Q 40 9 42 7 Q 44 9 46 7 Q 48 9 50 7 Q 52 9 54 7 Q 56 9 58 7 Q 60 9 60 7"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            fill="none"
                                            opacity="0.6"
                                        />
                                    </svg>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Menu;
