import { useEffect } from 'react';

const SEO = ({ 
  title = 'El Chipotle - Auténtica Comida Mexicana y Americana en Ibarra | Restaurante',
  description = 'El Chipotle en Ibarra, Ecuador ofrece auténtica comida mexicana y americana. Disfruta de nuestros tacos, burgers, parrilladas y más de 20 salsas caseras. Ubicados en Av. Rafael Sanchez y José Miguel Leoro. ¡Ordena por WhatsApp!',
  keywords = 'restaurante mexicano Ibarra, comida mexicana Ibarra, tacos Ibarra, burgers Ibarra, parrillada Ibarra, El Chipotle, comida americana Ibarra, restaurante Ecuador, pedidos comida Ibarra, comida mexicana Ecuador, restaurante Imbabura',
  image = '/logo/logo.png',
  url = 'https://www.chipotleibarra.com/',
  type = 'website'
}) => {
  useEffect(() => {
    // Update title
    document.title = title;
    
    // Update or create meta tags
    const updateMetaTag = (name, content, property = false) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Primary meta tags
    updateMetaTag('title', title);
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'El Chipotle Ibarra');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', 'Spanish');
    updateMetaTag('revisit-after', '7 days');
    
    // Geographic meta tags
    updateMetaTag('geo.region', 'EC-I'); // Ecuador - Imbabura
    updateMetaTag('geo.placename', 'Ibarra');
    updateMetaTag('geo.position', '0.3476;-78.1233'); // Coordenadas aproximadas de Ibarra
    updateMetaTag('ICBM', '0.3476, -78.1233');
    
    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', 'restaurant', true);
    updateMetaTag('og:locale', 'es_EC', true);
    updateMetaTag('og:site_name', 'El Chipotle Ibarra', true);
    updateMetaTag('og:street-address', 'Av. Rafael Sanchez y José Miguel Leoro', true);
    updateMetaTag('og:locality', 'Ibarra', true);
    updateMetaTag('og:region', 'Imbabura', true);
    updateMetaTag('og:country-name', 'Ecuador', true);
    updateMetaTag('og:phone_number', '+593999402348', true);
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }, [title, description, keywords, image, url, type]);

  return null;
};

export default SEO;

