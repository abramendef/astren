import { useEffect } from 'react';

// JSON-LD Schema para Astren
export const AstrenOrganizationSchema = () => {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Astren',
      url: 'https://astren.app',
      logo: 'https://astren.app/logo_og.png',
      description: 'Proyecto digital en crecimiento enfocado en software propio, páginas web e invitaciones digitales.',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+52-81-3877-8770',
        contactType: 'customer service',
        email: 'astren.app@gmail.com',
        availableLanguage: ['Spanish'],
      },
      sameAs: [
        'https://github.com/abramendef/astren',
      ],
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'MX',
        addressRegion: 'Sinaloa',
        addressLocality: 'Mazatlán',
      },
      areaServed: [
        {
          '@type': 'Country',
          name: 'Mexico',
        },
        {
          '@type': 'Place',
          name: 'Internacional',
        },
      ],
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = 'astren-org-schema';
    
    // Remove existing schema if present
    const existing = document.getElementById('astren-org-schema');
    if (existing) existing.remove();
    
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('astren-org-schema');
      if (el) el.remove();
    };
  }, []);

  return null;
};

// Schema para LocalBusiness (servicios web)
export const WebServicesSchema = () => {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://astren.app/services/web',
      name: 'Astren - Páginas Web',
      description: 'Desarrollo de páginas web profesionales: portfolios, blogs, e-commerce, landing pages y sitios empresariales.',
      url: 'https://astren.app/services/web',
      telephone: '+52-81-3877-8770',
      email: 'astren.app@gmail.com',
      priceRange: '$$',
      areaServed: [
        {
          '@type': 'Country',
          name: 'Mexico',
        },
        {
          '@type': 'Place',
          name: 'Worldwide',
        },
      ],
      serviceType: ['Web Development', 'E-commerce', 'Web Design', 'Remote Web Development'],
      additionalType: 'RemoteService',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios de Desarrollo Web',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Portfolio/CV Digital',
              description: 'Página web personal o profesional para mostrar tu trabajo',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Blog o Sitio de Contenido',
              description: 'Plataforma para compartir artículos, noticias o contenido multimedia',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Sitio Web para Negocios',
              description: 'Página corporativa con información de servicios y contacto',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Tienda en Línea (E-commerce)',
              description: 'Plataforma de venta online con carrito de compras y pagos',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Landing Page',
              description: 'Página de aterrizaje para campañas de marketing o producto específico',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Sitio Web Corporativo',
              description: 'Plataforma empresarial con múltiples secciones y funcionalidades',
            },
          },
        ],
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = 'web-services-schema';
    
    const existing = document.getElementById('web-services-schema');
    if (existing) existing.remove();
    
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('web-services-schema');
      if (el) el.remove();
    };
  }, []);

  return null;
};

// Schema para servicios de invitaciones
export const InvitationsSchema = () => {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': 'https://astren.app/services/invitaciones',
      name: 'Astren - Invitaciones Web',
      description: 'Invitaciones digitales personalizadas para bodas, XV años, bautizos y eventos especiales con RSVP y galería de fotos.',
      provider: {
        '@type': 'Organization',
        name: 'Astren',
      },
      url: 'https://astren.app/services/invitaciones',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Planes de Invitaciones Web',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Plan Esencial',
            price: '600',
            priceCurrency: 'MXN',
            description: 'Invitación web básica activa por 1 mes después del evento',
          },
          {
            '@type': 'Offer',
            name: 'Plan Completo',
            price: '1000',
            priceCurrency: 'MXN',
            description: 'Invitación web completa activa por 6 meses con formulario RSVP',
          },
          {
            '@type': 'Offer',
            name: 'Plan Premium+',
            price: '1200',
            priceCurrency: 'MXN',
            description: 'Invitación web premium activa para siempre con galería ilimitada',
          },
        ],
      },
      areaServed: [
        {
          '@type': 'Country',
          name: 'Mexico',
        },
        {
          '@type': 'Place',
          name: 'Worldwide',
        },
      ],
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = 'invitations-schema';
    
    const existing = document.getElementById('invitations-schema');
    if (existing) existing.remove();
    
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('invitations-schema');
      if (el) el.remove();
    };
  }, []);

  return null;
};
