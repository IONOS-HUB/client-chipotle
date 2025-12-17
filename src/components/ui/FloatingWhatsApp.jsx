import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_CONFIG } from '../../utils/constants';

const FloatingWhatsApp = () => {
    return (
        <a
            href={WHATSAPP_CONFIG.getLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-[0_4px_14px_0_rgba(74,222,128,0.39)] hover:bg-green-400 active:scale-95 transition-all hover:scale-110 border-4 border-white group focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
            title="Chat en WhatsApp"
        >
            <MessageCircle size={32} className="group-hover:rotate-12 transition-transform" />
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                ¡Pide aquí!
            </span>
        </a>
    );
};

export default FloatingWhatsApp;
