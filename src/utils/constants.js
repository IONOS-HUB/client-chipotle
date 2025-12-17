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
        category: "Cocina Mexicana",
        items: [
            { id: 1, name: "Botanas con Guacamole", price: "$5.00", description: "Tortillas de maíz crocantes", image: IMAGES.tacos },
            { id: 2, name: "Picadita Mexicana", price: "$10.00", description: "Tortillas crocantes - carne - pollo - chorizo mexicano o mixto - fréjol - queso - guacamole", image: IMAGES.tacos },
            { id: 3, name: "El Cuate", price: "$9.50", description: "Arroz mexicano - carnitas a la plancha - flauta de pollo taco de queso - taco de chorizo - frijoles refritos guacamole - lechuga", image: IMAGES.combo },
            { id: 4, name: "Burrito Chipotle XL", price: "$10.50", description: "Queso - fréjol - carne - pollo - chorizo mexicano o mixto lechuga - guacamole - tomate - queso - crema agria", image: IMAGES.burger },
            { id: 5, name: "Burrito", price: "$7.50", description: "Tortilla de trigo - relleno de queso - puré de frejol-carne pollo - chorizo mexicano o mixto - lechuga - guacamole", image: IMAGES.burger },
            { id: 6, name: "Burrito Mojado", price: "$7.75", description: "Tortilla de trigo relleno de queso puré de fréjol carne pollo chorizo mexicano o mixto lechuga guacamole mojado en jugo de enchilada", image: IMAGES.burger },
            { id: 7, name: "Enchiladas", price: "$8.00", description: "Tortilla de maíz jugo de enchilada pollo carne chorizo mexicano o mixta - queso gratinado al horno", image: IMAGES.tacos },
            { id: 8, name: "Flautas (4)", price: "$7.00", description: "Tortillas de maíz crocante relleno de pollo guacamole - lechuga - crema agria", image: IMAGES.tacos },
            { id: 9, name: "Tacos (3)", price: "$7.50", description: "Tortilla de maíz suave rellenas de carne pollo chorizo mexicano o mixta - puré de frejol - guacamole", image: IMAGES.tacos },
            { id: 10, name: "Nachos Rancheros", price: "$8.00", description: "Tortilla de maíz suave rellenas de carne pollo chorizo mexicano o mixta - puré de frejól - guacamole huevos fritos", image: IMAGES.interior },
            { id: 11, name: "Nachos Chipotle", price: "$10.50", description: "Tortillas de maíz crocantes bañadas en jugo de enchilada - queso - carne - pollo - chorizo mexicano o míxta - puré de frejol - lechuga", image: IMAGES.interior },
            { id: 12, name: "Nachos", price: "$7.00", description: "Tortillas de maíz crocantes bañadas en jugo de enchilada - queso - carne - pollo - chorizo mexicano o mixta - puré de frejol - guacamole", image: IMAGES.interior },
            { id: 13, name: "Chilaquiles Rancheros", price: "$7.00", description: "Tortillas de maíz crocantes carne pollo - chorizo mexicano o mixta - queso - cubierta de lechuga jugo de enchilada - crema agría", image: IMAGES.tacos },
            { id: 14, name: "Tostadas", price: "$7.00", description: "3 tortillas de maíz crocantes carne pollo o mixta puré de fréjol - queso - lechuga - crema agria", image: IMAGES.tacos },
            { id: 15, name: "Quesadilla Clásica", price: "$6.00", description: "Tortillas de trigo rellenes de jamón queso acompañada de guacamole - lechuga - pico de gallo", image: IMAGES.tacos },
            { id: 16, name: "Quesadilla Chipotle", price: "$8.00", description: "Tortillas de trigo rellenas de queso carne - pollo chorizo mexicano o mixta acompañada de guacamole lechuga - pico de gallo", image: IMAGES.tacos },
            { id: 17, name: "Quesadilla de Camarón", price: "$8.50", description: "Tortillas de trigo rellenas de: queso camarón acompañada de guacamole lechuga - pico de gallo", image: IMAGES.tacos },
            { id: 18, name: "Fajitas", price: "$9.00", description: "Verduras asadas - carne - pollo - camarón acompañada de tortilla - guacamole", image: IMAGES.steak },
            { id: 19, name: "Pozole", price: "$5.00", description: "Mote - carne - pollo - lechuga - tortillas acompañadas de rabanos", image: IMAGES.combo },
            { id: 20, name: "Sopa Azteca", price: "$5.00", description: "Queso - tortilla crocante - cebolla", image: IMAGES.combo },
        ]
    },
    {
        category: "Cocina Americana",
        items: [
            { id: 21, name: "Filet Mignon", price: "$10.50", description: "Lomo fino envuelto en tocino, con salsa de champiñones, papas fritas y ensalada", image: IMAGES.steak },
            { id: 22, name: "Lomo en Champiñones", price: "$9.50", description: "Lomo en salsa de champiñones, con papas fritas y ensalada", image: IMAGES.steak },
            { id: 23, name: "Pollo o Lomo a la Plancha", price: "$8.50", description: "Pechuga de pollo o lomo a la plancha, con papas fritas y ensalada", image: IMAGES.steak },
            { id: 24, name: "Pollo a la Diabla", price: "$8.50", description: "Pechuga de pollo a la plancha en salsa picante, con papas fritas y ensalada", image: IMAGES.steak },
            { id: 25, name: "Pollo en Champiñones", price: "$9.50", description: "Pechuga de pollo a la plancha en salsa de champiñones, con papas fritas y ensalada", image: IMAGES.steak },
            { id: 26, name: "Churrasco", price: "$9.00", description: "Lomo fino a la plancha, con arroz, papas fritas, huevos fritos y aguacate", image: IMAGES.steak },
            { id: 27, name: "Chuleta a la Plancha", price: "$8.00", description: "Chuleta a la plancha, con papas fritas y ensalada", image: IMAGES.steak },
            { id: 28, name: "Chuleta a la Diabla", price: "$8.50", description: "Chuleta a la plancha en salsa semi-picante, con papas fritas y ensalada", image: IMAGES.steak },
            { id: 29, name: "Camarón al Ajillo", price: "$9.00", description: "Camarón en salsa semi-picante, con papas fritas y ensalada", image: IMAGES.steak },
            { id: 30, name: "Camarón a la Plancha o a la Diabla", price: "$9.00", description: "Camarón a la plancha o a la diabla, con papas fritas y ensalada", image: IMAGES.steak },
            { id: 31, name: "Hamburguesa Chipotle", price: "$8.00", description: "Hamburguesa con pan, carne, tomate, lechuga, cebolla, queso cheddar, jamón, salsa de tomate y mayonesa", image: IMAGES.burger },
            { id: 32, name: "Ensalada Chipotle", price: "$6.00", description: "Ensalada con lechuga, pollo, pimiento, tomate, queso, champiñones, jamón, tortilla de maíz frita y vinagreta", image: IMAGES.salad },
            { id: 33, name: "Alitas BBQ", price: "$8.00", description: "Deliciosas alitas de pollo BBQ, acompañadas de papas fritas y ensalada", image: IMAGES.combo },
            { id: 34, name: "Salmón Chipotle", price: "$15.00", description: "Delicioso salmón a la plancha, acompañado de papas fritas y ensalada", image: IMAGES.steak },
        ]
    },
    {
        category: "Carnes",
        note: "Tiempo de cocción: 20 a 25 min. Incluye: papas fritas - ensalada",
        items: [
            { id: 35, name: "Tomahawk", price: "$18.00", description: "Costilla gruesa con hueso con costillas anteriores y abundante grasa intermuscular e intramuscular", image: IMAGES.steak },
            { id: 36, name: "Bife de Chorizo", price: "$14.00", description: "Corte argentino original, equilibrando carne, grasa y otros componentes", image: IMAGES.steak },
            { id: 37, name: "Picaña", price: "$15.00", description: "Carne suave y jugosa con costra de grasa crujiente, tierna y roja por dentro", image: IMAGES.steak },
            { id: 38, name: "Ribeye", price: "$10.00", description: "Carne fina con hueso con marmoleo significativo para ternura y sabor", image: IMAGES.steak },
            { id: 39, name: "Costillas BBQ", price: "$12.00", description: "Costillas de cerdo tiernas bañadas en salsa BBQ", image: IMAGES.steak },
        ]
    },
    {
        category: "Postres y Café",
        items: [
            { id: 40, name: "Waffles", price: "$4.50", description: "Con Nutella y mermelada", image: IMAGES.combo },
            { id: 41, name: "Torta del Día", price: "$3.50", description: "Deliciosa torta artesanal", image: IMAGES.combo },
            { id: 42, name: "Helado de Paila", price: "$3.00", description: "Helado de paila artesanal", image: IMAGES.combo },
            { id: 43, name: "Mocachino - Capuchino - Chococino", price: "$3.50", description: "Bebidas calientes con café y chocolate", image: IMAGES.combo },
            { id: 44, name: "Americano - Expresso", price: "$2.50", description: "Café americano o expresso", image: IMAGES.combo },
        ]
    },
    {
        category: "Bebidas con Alcohol",
        items: [
            { id: 45, name: "Michelada Pilsener", price: "$3.00", description: "Cerveza Pilsener con limón y condimentos", image: IMAGES.combo },
            { id: 46, name: "Michelada Club", price: "$3.50", description: "Cerveza Club con limón y condimentos", image: IMAGES.combo },
            { id: 47, name: "Pilsener", price: "$2.50", description: "Cerveza Pilsener", image: IMAGES.combo },
            { id: 48, name: "Corona", price: "$3.50", description: "Cerveza Corona", image: IMAGES.combo },
            { id: 49, name: "Club", price: "$3.00", description: "Cerveza Club", image: IMAGES.combo },
            { id: 50, name: "Submarino", price: "$5.00", description: "Bebida con cerveza y licor", image: IMAGES.combo },
            { id: 51, name: "Tequila / Shot", price: "$4.50", description: "Tequila o shot", image: IMAGES.combo },
            { id: 52, name: "Tequila Sunrise", price: "$5.00", description: "Cóctel con tequila, jugo de naranja y granadina", image: IMAGES.combo },
            { id: 53, name: "Margarita", price: "$6.00", description: "Cóctel con tequila, triple sec y limón", image: IMAGES.combo },
            { id: 54, name: "Mojito", price: "$6.00", description: "Cóctel con ron, menta, limón y soda", image: IMAGES.combo },
            { id: 55, name: "Cuba Libre", price: "$6.00", description: "Ron con cola y limón", image: IMAGES.combo },
            { id: 56, name: "Piña Colada", price: "$6.00", description: "Cóctel con ron, piña y coco", image: IMAGES.combo },
            { id: 57, name: "Whisky", price: "$5.00", description: "Whisky", image: IMAGES.combo },
            { id: 58, name: "Vino (Botella)", price: "$28.00", description: "Vino por botella", image: IMAGES.combo },
            { id: 59, name: "Vino Hervido (Jarra)", price: "$16.00", description: "Vino hervido por jarra", image: IMAGES.combo },
            { id: 60, name: "Vino (Copa)", price: "$5.00", description: "Vino por copa", image: IMAGES.combo },
        ]
    },
    {
        category: "Bebidas sin Alcohol",
        items: [
            { id: 61, name: "Aguas Frescas", price: "$1.80", description: "Aguas frescas: limonada de fresa, jamaica, horchata y tamarindo", image: IMAGES.combo },
            { id: 62, name: "Té Helado", price: "$2.00", description: "Té helado refrescante", image: IMAGES.combo },
            { id: 63, name: "Gaseosas", price: "$1.00", description: "Refrescos gaseosos", image: IMAGES.combo },
            { id: 64, name: "Agua sin Gas", price: "$1.00", description: "Agua sin gas", image: IMAGES.combo },
            { id: 65, name: "Agua con Gas", price: "$1.25", description: "Agua con gas", image: IMAGES.combo },
        ]
    }
];
