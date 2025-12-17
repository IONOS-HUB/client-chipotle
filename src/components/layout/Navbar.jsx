import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { IMAGES, NAV_LINKS, WHATSAPP_CONFIG } from '../../utils/constants';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHome = location.pathname === '/';

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-red-900 shadow-xl py-2' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-2 group">
                    <div className="h-12 w-12 rounded-full border-2 border-yellow-400 bg-white flex items-center justify-center overflow-hidden transition-transform group-hover:scale-110">
                        <img
                            src={IMAGES.logo}
                            alt="Logo El Chipotle"
                            className="h-full w-full object-contain"
                            onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '<span class="text-xs font-bold text-red-700">EC</span>' }}
                        />
                    </div>
                    <span className={`font-mexican text-2xl ${scrolled ? 'text-white' : 'text-white drop-shadow-md'}`}>
                        El Chipotle
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.name}
                            href={isHome ? link.href : `/${link.href}`}
                            className="text-white font-bold hover:text-yellow-400 transition-colors uppercase tracking-wide text-sm drop-shadow-sm"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Link
                        to="/menu"
                        className="text-white font-bold hover:text-yellow-400 transition-colors uppercase tracking-wide text-sm drop-shadow-sm"
                    >
                        Menú Completo
                    </Link>
                    <a
                        href={WHATSAPP_CONFIG.getLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-yellow-500 hover:bg-yellow-400 text-red-900 px-4 py-2 rounded-full font-bold transition-transform transform hover:scale-105 flex items-center gap-2 shadow-lg"
                    >
                        <Phone size={18} />
                        Reservar
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-red-900 shadow-xl border-t border-red-800">
                    <div className="flex flex-col p-4 space-y-4">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.name}
                                href={isHome ? link.href : `/${link.href}`}
                                className="text-white font-bold hover:text-yellow-400 text-center py-2 border-b border-red-800 last:border-0"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <Link
                            to="/menu"
                            className="text-white font-bold hover:text-yellow-400 text-center py-2 border-b border-red-800 last:border-0"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Menú Completo
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
