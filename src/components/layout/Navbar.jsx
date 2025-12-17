import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IMAGES, NAV_LINKS, WHATSAPP_CONFIG } from '../../utils/constants';
import { scrollToSection } from '../../utils/scrollToSection';
import CardNav from '../ui/CardNav';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isHome = location.pathname === '/';

    const handleNavClick = (e, link) => {
        e.preventDefault();
        const href = link.href || link;
        const sectionId = typeof href === 'string' ? href.replace('#', '') : '';
        
        if (isHome) {
            scrollToSection(sectionId);
        } else {
            navigate('/');
            setTimeout(() => {
                scrollToSection(sectionId);
            }, 100);
        }
    };

    // CardNav items - solo las secciones: Historia, Menú, FAQ, Ubicación
    const cardNavItems = [
        {
            label: "Historia",
            bgColor: "#DC2626", 
            textColor: "#fff",
            links: [
                { label: "Historia", href: "#historia", ariaLabel: "Nuestra Historia" }
            ]
        },
        {
            label: "Menú",
            bgColor: "#DC2626", 
            textColor: "#fff",
            links: [
                { label: "Menú", href: "#menu", ariaLabel: "Ver Menú" }
            ]
        },
        {
            label: "Más",
            bgColor: "#DC2626", // Bright red
            textColor: "#fff",
            links: [
                { label: "FAQ", href: "#faq", ariaLabel: "Preguntas Frecuentes" },
                { label: "Ubicación", href: "#ubicacion", ariaLabel: "Nuestra Ubicación" },
                { 
                    label: "Reservar", 
                    href: WHATSAPP_CONFIG.getLink(), 
                    ariaLabel: "Reservar por WhatsApp",
                    external: true
                }
            ]
        }
    ];

    const handleReservarClick = (e) => {
        e.preventDefault();
        window.open(WHATSAPP_CONFIG.getLink(), '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="fixed w-full z-50 top-0 left-0">
            <CardNav
                logo={IMAGES.logo}
                logoAlt="Logo El Chipotle"
                items={cardNavItems}
                baseColor="#fff"
                menuColor="#fff"
                buttonBgColor="#DC2626"
                buttonTextColor="#fff"
                ease="power3.out"
                onLinkClick={handleNavClick}
                onButtonClick={handleReservarClick}
                brandName="El Chipotle"
            />
        </div>
    );
};

export default Navbar;
