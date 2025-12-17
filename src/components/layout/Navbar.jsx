import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IMAGES, NAV_LINKS, WHATSAPP_CONFIG } from '../../utils/constants';
import { scrollToSection } from '../../utils/scrollToSection';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHome = location.pathname === '/';

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const sectionId = href.replace('#', '');
        
        if (isHome) {
            scrollToSection(sectionId);
        } else {
            navigate('/');
            setTimeout(() => {
                scrollToSection(sectionId);
            }, 100);
        }
        setIsMenuOpen(false);
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-red-900 shadow-xl py-2' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-2 group">
                    <div className="h-12 w-12 rounded-full flex items-center justify-center overflow-hidden transition-transform group-hover:scale-110">
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
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-white font-bold hover:text-yellow-400 transition-colors uppercase tracking-wide text-sm drop-shadow-sm relative group"
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
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
                        className="bg-yellow-500 hover:bg-yellow-400 text-red-900 px-4 py-2 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg hover:shadow-xl"
                        aria-label="Reservar por WhatsApp"
                    >
                        <Phone size={18} />
                        Reservar
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-red-900 shadow-xl border-t border-red-800 animate-fade-in-up">
                    <div className="flex flex-col p-4 space-y-2">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="text-white font-bold hover:text-yellow-400 hover:bg-red-800 text-center py-3 px-4 rounded-lg transition-all active:scale-95"
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
