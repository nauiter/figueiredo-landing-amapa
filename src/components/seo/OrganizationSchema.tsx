import { useEffect } from 'react';

const OrganizationSchema = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Figueiredo Advocacia",
      "alternateName": "Figueiredo - Sociedade de Advogadas",
      "url": "https://figueiredoadv.com.br",
      "logo": "https://figueiredoadv.com.br/logo-3d.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+55-96-98129-3353",
        "contactType": "Customer Service",
        "areaServed": "BR",
        "availableLanguage": "Portuguese"
      },
      "sameAs": [
        "https://wa.me/5596981293353"
      ],
      "founder": {
        "@type": "Person",
        "name": "Daniele Figueiredo",
        "jobTitle": "Advogada"
      }
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default OrganizationSchema;
