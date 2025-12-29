import React from 'react';
import { MapPin, Phone, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { IMAGES, WHATSAPP_CONFIG, LOCATION_CONFIG } from '../../utils/constants';

const Footer = () => {
    // Obtener el día actual (0 = Domingo, 1 = Lunes, ..., 6 = Sábado)
    const currentDay = new Date().getDay();

    // Determinar qué día resaltar
    const isWeekday = [1, 2, 4, 5, 6].includes(currentDay); // Lunes, Martes, Jueves, Viernes, Sábado
    const isWednesday = currentDay === 3;
    const isSunday = currentDay === 0;

    return (
        <footer id="ubicacion" className="bg-stone-900 text-white pt-16 pb-8 border-t-8 border-yellow-500 relative">
            <div className="container mx-auto px-4">
                {/* Google Maps Section */}
                <div className="mb-12" data-aos="fade-up">
                    <div className="text-center mb-6">
                        <h3 className="font-mexican text-2xl md:text-3xl text-yellow-400 mb-2">Encuéntranos Aquí</h3>
                        <p className="text-gray-400">{LOCATION_CONFIG.address}</p>
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-yellow-500/30 hover:border-yellow-500 transition-colors">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.2976!2d-78.1260427!3d0.3408968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2a3cc572562c4b%3A0xca61bb1b1eb10b6b!2sEl%20Chipotle!5e0!3m2!1ses!2sec!4v1234567890"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ubicación de El Chipotle"
                        ></iframe>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-10 mb-10">

                    {/* Contact Info */}
                    <div className="text-center md:text-left">
                        <a href="/">
                        
                        <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                            <div className="p-1 rounded-full">
                                <img
                                    src={IMAGES.logo}
                                    alt="Logo El Chipotle"
                                    className="h-14 w-14 object-contain rounded-full"
                                    onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '<span class="text-xl font-bold text-red-700 p-2">EC</span>' }}
                                />
                            </div>
                            <span className="font-mexican text-2xl text-yellow-400">El Chipotle</span>
                        </div>
                        </a>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            El mejor ambiente mexicano en la ciudad. Ven por la comida, quédate por la experiencia.
                        </p>
                        <div className="space-y-3">
                            <a
                                href={LOCATION_CONFIG.mapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center md:justify-start gap-3 text-gray-300 hover:text-white transition-colors cursor-pointer group text-sm"
                            >
                                <div className="bg-stone-800 p-2 rounded-full group-hover:bg-red-600 transition-colors">
                                    <MapPin size={16} />
                                </div>
                                <span>{LOCATION_CONFIG.address}</span>
                            </a>
                            <div className="flex items-center justify-center md:justify-start gap-3 text-gray-300 hover:text-white transition-colors cursor-pointer group text-sm">
                                <div className="bg-stone-800 p-2 rounded-full group-hover:bg-green-600 transition-colors">
                                    <Phone size={16} />
                                </div>
                                <span>+593 99 940 2348</span>
                            </div>
                        </div>
                    </div>

                    {/* Hours */}
                    <div className="text-center">
                        <h3 className="font-mexican text-xl text-white mb-6 relative inline-block">
                            Horarios
                            <div className="absolute -bottom-2 left-0 w-full h-1 bg-red-600 rounded-full"></div>
                        </h3>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li className="flex justify-between max-w-xs mx-auto border-b border-stone-800 pb-2">
                                <span className={isWeekday ? "text-yellow-400 font-bold" : ""}>Demás días</span>
                                <span className={`font-mono ${isWeekday ? "text-white font-bold" : ""}`}>12:30AM - 11:30PM</span>
                            </li>
                            <li className="flex justify-between max-w-xs mx-auto border-b border-stone-800 pb-2">
                                <span className={isWednesday ? "text-yellow-400 font-bold" : ""}>Miércoles</span>
                                <span className={`font-mono ${isWednesday ? "text-white font-bold" : ""}`}>Cerrado</span>
                            </li>
                            <li className="flex justify-between max-w-xs mx-auto pb-2">
                                <span className={isSunday ? "text-yellow-400 font-bold" : ""}>Domingo</span>
                                <span className={`font-mono ${isSunday ? "text-white font-bold" : ""}`}>12:30AM - 5:00PM</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social & CTA */}
                    <div className="text-center md:text-right flex flex-col items-center md:items-end">
                        <h3 className="font-mexican text-2xl text-white mb-8">Síguenos</h3>
                        <div className="flex gap-4 mb-8">
                            <a 
                                href="https://www.instagram.com/elchipotle_/" 
                                className="bg-stone-800 p-4 rounded-full hover:bg-red-600 active:scale-95 transition-all hover:-translate-y-1 text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                aria-label="Síguenos en Instagram"
                            >
                                <Instagram size={24} />
                            </a>
                            <a 
                                href="https://www.facebook.com/chipotleibarra?locale=es_LA" 
                                className="bg-stone-800 p-4 rounded-full hover:bg-blue-600 active:scale-95 transition-all hover:-translate-y-1 text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                aria-label="Síguenos en Facebook"
                            >
                                <Facebook size={24} />
                            </a>
                        </div>
                        <a
                            href={WHATSAPP_CONFIG.getLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 active:scale-95 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl animate-pulse hover:animate-none hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
                            aria-label="Contactar por WhatsApp"
                        >
                            <MessageCircle />
                            WhatsApp
                        </a>
                    </div>
                </div>

                <div className="border-t border-stone-800 pt-8 text-center text-stone-500 text-sm">
                    <p>&copy; 2025 El Chipotle. Todos los derechos reservados. Diseñado con sabor 🌶️</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
