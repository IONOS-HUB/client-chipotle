export const IMAGES = {
    logo: "/logo/logo.png",
    heroBg: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1469&auto=format&fit=crop",
    steak: "/imgs/comida1.jpg",
    burger: "/imgs/comida2.jpg",
    tacos: "/imgs/comida3.jpg",
    salad: "/imgs/comida4.jpg",
    combo: "/imgs/comida5.jpg",
    interior: "/imgs/comida6.jpg",
};

export const MENU_IMAGES = [
    "/menu/menu.png",
    "/menu/menu2.png"
];

export const NAV_LINKS = [
    { name: 'Historia', href: '#historia' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Menú', href: '#menu' },
    { name: 'Menú Completo', href: '#menu-completo' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Ubicación', href: '#ubicacion' },
];

export const LOCATION_CONFIG = {
    address: "Av. Rafael Sanchez y José Miguel Leoro",
    mapUrl: "https://www.google.com/maps/place/El+Chipotle/@0.3409112,-78.1234571,20.25z/data=!4m14!1m7!3m6!1s0x8e2a3cc572562c4b:0xca61bb1b1eb10b6b!2sEl+Chipotle!8m2!3d0.3408968!4d-78.1234678!16s%2Fg%2F12ltyl502!3m5!1s0x8e2a3cc572562c4b:0xca61bb1b1eb10b6b!8m2!3d0.3408968!4d-78.1234678!16s%2Fg%2F12ltyl502?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
};

export const WHATSAPP_CONFIG = {
    number: "593999402348",
    message: "Hola El Chipotle, quisiera hacer un pedido 🌮",
    getLink: () => `https://wa.me/593999402348?text=${encodeURIComponent("Hola El Chipotle, quisiera hacer un pedido 🌮")}`
};

export const MENU_ITEMS = [
    {
        category: "Favoritos",
        items: [
            { id: 1, name: "Chipotle Burger", price: "$12.50", description: "Carne angus, queso cheddar, tocino, aros de cebolla.", image: IMAGES.burger, popular: true },
            { id: 2, name: "T-Bone Parrillero", price: "$24.00", description: "Corte de 400g al carbón con chimichurri.", image: IMAGES.steak, popular: true },
            { id: 3, name: "Trío de Tacos", price: "$9.50", description: "Pastor, piña asada, cebolla y cilantro.", image: IMAGES.tacos, popular: true },
        ]
    },
    {
        category: "Especialidades",
        items: [
            { id: 4, name: "Ensalada Especial", price: "$8.50", description: "Mix de lechugas, aguacate, nueces y aderezo de la casa.", image: IMAGES.salad, popular: false },
            { id: 5, name: "Parrillada Familiar", price: "$35.00", description: "Para compartir: carne, pollo, chorizo y guarniciones.", image: IMAGES.combo, popular: false },
            { id: 6, name: "Nachos Supremos", price: "$10.00", description: "Con queso fundido, jalapeños, guacamole y pico de gallo.", image: IMAGES.interior, popular: false },
        ]
    }
];
