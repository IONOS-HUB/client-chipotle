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
                title="El Chipotle - Auténtica Comida Mexicana y Americana | Restaurante"
                description="El Chipotle ofrece auténtica comida mexicana y americana. Disfruta de nuestros tacos, burgers, parrilladas y más. Ubicados en Av. Rafael Sanchez y José Miguel Leoro. Pedidos por WhatsApp."
                keywords="restaurante mexicano, comida mexicana, tacos, burgers, parrillada, El Chipotle, comida americana, restaurante Ecuador, pedidos comida"
                url="https://elchipotle.com"
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
