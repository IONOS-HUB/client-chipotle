import React from 'react';
import Hero from '../components/home/Hero';
import History from '../components/home/History';
import Gallery from '../components/home/Gallery';
import MenuPreview from '../components/home/MenuPreview';
import FullMenuGallery from '../components/home/FullMenuGallery';
import FAQ from '../components/home/FAQ';
import SEO from '../components/seo/SEO';

const Home = () => {
    return (
        <>
            <SEO 
                title="El Chipotle Ibarra - Auténtica Comida Mexicana y Americana | Restaurante en Ecuador"
                description="El Chipotle en Ibarra, Ecuador ofrece auténtica comida mexicana y americana. Disfruta de nuestros tacos, burgers, parrilladas y más de 20 salsas caseras. Ubicados en Av. Rafael Sanchez y José Miguel Leoro, Ibarra. ¡Ordena por WhatsApp al +593 99 940 2348!"
                keywords="restaurante mexicano Ibarra, comida mexicana Ibarra, tacos Ibarra, burgers Ibarra, parrillada Ibarra, El Chipotle, comida americana Ibarra, restaurante Ecuador, pedidos comida Ibarra, comida mexicana Ecuador, restaurante Imbabura, mejor restaurante Ibarra"
                url="https://www.chipotleibarra.com/"
            />
            <main>
                <Hero />
                <History />
                <Gallery />
                <MenuPreview />
                <FullMenuGallery />
                <FAQ />
            </main>
        </>
    );
};

export default Home;
