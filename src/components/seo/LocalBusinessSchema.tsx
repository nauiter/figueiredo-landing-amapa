import { useEffect } from 'react';

const LocalBusinessSchema = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LegalService",
      "name": "Figueiredo Advocacia",
      "image": "https://figueiredoadv.com.br/logo-3d.png",
      "description": "Escritório de advocacia em Macapá-AP com mais de 13 anos de experiência em Direito Civil, Trabalhista, Imobiliário e Família. Atendimento presencial e online.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. José do Espírito Santo Araújo, n° 492",
        "addressLocality": "Macapá",
        "addressRegion": "AP",
        "postalCode": "68905-627",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -0.0347,
        "longitude": -51.0694
      },
      "telephone": "+55-96-98129-3353",
      "url": "https://figueiredoadv.com.br",
      "priceRange": "$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "08:00",
          "closes": "18:00"
        }
      ],
      "areaServed": {
        "@type": "State",
        "name": "Amapá"
      },
      "makesOffer": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Direito Civil",
            "description": "Proteção integral dos seus direitos pessoais e patrimoniais"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Direito Trabalhista",
            "description": "Defesa completa dos seus direitos trabalhistas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Direito Imobiliário",
            "description": "Segurança jurídica em todas as suas transações imobiliárias"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Direito de Família e Sucessões",
            "description": "Atendimento humanizado em divórcios, partilhas e inventários"
          }
        }
      ]
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default LocalBusinessSchema;
