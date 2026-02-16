# Astren

Sitio web principal de Astren, un proyecto digital con múltiples productos y servicios. Presenta el ecosistema y ofrece servicios profesionales de desarrollo web e invitaciones digitales.

## Descripción del Proyecto

Este es el sitio web principal de Astren, desarrollado como una aplicación React moderna que sirve múltiples propósitos:

1. **Presentación del ecosistema de productos**: Muestra los diferentes productos bajo la marca Astren (AstrenGPR, AstrenAI, AstrenGames).
2. **Portal de servicios**: Ofrece servicios profesionales de desarrollo web e invitaciones digitales personalizadas para clientes en México y el mundo.
3. **Blog técnico**: Artículos sobre desarrollo web, SEO y tecnología.
4. **Plataforma de contacto**: Sistema de consultas y cotizaciones para servicios.

### El Ecosistema Astren

Astren no está limitado a un solo producto. El proyecto desarrolla múltiples soluciones tecnológicas:

- **AstrenGPR**: Sistema de gestión de productividad con reputación (activo)
- **AstrenAI**: Herramientas de inteligencia artificial para creadores y equipos (próximo lanzamiento)
- **AstrenGames**: Entretenimiento interactivo y juegos (en desarrollo)

### Servicios Ofrecidos

El sitio presenta dos servicios principales:

1. **Páginas Web Personalizadas**: Desarrollo de portfolios, blogs, e-commerce, landing pages y sitios corporativos. Incluye hosting en subdominio astren.app, SSL, y SEO básico.

2. **Invitaciones Web para Eventos**: Soluciones digitales personalizadas para bodas, XV años, bautizos y otros eventos. Incluye RSVP, galerías de fotos, música de fondo y diseño mobile-first.

### Características Técnicas

- Single Page Application con routing dinámico
- Diseño minimalista con efectos visuales y animaciones
- SEO completo con meta tags dinámicos, structured data (JSON-LD) y sitemap
- Sistema de formularios con validación
- Responsive design optimizado para móviles
- Integración con Google Maps para ubicaciones de eventos
- Componentes reutilizables con arquitectura modular

## Stack Tecnológico

### Framework Frontend
- **React 18** - Biblioteca de UI basada en componentes
- **TypeScript** - Verificación de tipos estáticos
- **Vite** - Herramienta de construcción y servidor de desarrollo

### Componentes UI
- **shadcn/ui** - Biblioteca de componentes accesibles
- **Radix UI** - Primitivos UI sin estilos y accesibles
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Biblioteca de iconos

### Bibliotecas Adicionales
- **React Router** - Enrutamiento del lado del cliente
- **React Hook Form** - Gestión de estado de formularios
- **React Helmet Async** - Gestión del head del documento para SEO
- **TanStack Query** - Gestión de estado del servidor
- **Zod** - Validación de esquemas

## Estructura del Proyecto

```
astren/
├── src/
│   ├── components/        # Componentes UI reutilizables
│   │   ├── ui/           # Componentes shadcn/ui
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ContactForm.tsx
│   │   └── SEOSchema.tsx
│   ├── pages/            # Componentes de ruta
│   │   ├── Index.tsx
│   │   ├── Blog.tsx
│   │   ├── Contact.tsx
│   │   ├── services/
│   │   └── blog/
│   ├── hooks/            # Hooks personalizados de React
│   ├── lib/              # Funciones utilitarias
│   └── App.tsx           # Componente raíz
├── public/
│   ├── sitemap.xml
│   ├── robots.txt
│   └── llms.txt
└── package.json
```

## Instalación y Configuración

### Requisitos Previos

- Node.js 18+ o runtime Bun
- Gestor de paquetes npm, yarn o bun

### Desarrollo Local

1. Clonar el repositorio:
```bash
git clone https://github.com/abramendef/astren.git
cd astren
```

2. Instalar dependencias:
```bash
npm install
# o
bun install
```

3. Iniciar el servidor de desarrollo:
```bash
npm run dev
# o
bun dev
```

La aplicación estará disponible en `http://localhost:5173`.

### Construcción para Producción

```bash
npm run build
```

La construcción optimizada se creará en el directorio `dist/`.

### Vista Previa de Construcción de Producción

```bash
npm run preview
```

## Scripts Disponibles

- `npm run dev` - Iniciar servidor de desarrollo con recarga en caliente
- `npm run build` - Crear construcción de producción
- `npm run build:dev` - Crear construcción de desarrollo
- `npm run preview` - Vista previa local de construcción de producción
- `npm run lint` - Ejecutar ESLint para verificaciones de calidad de código

## Despliegue

Este proyecto está configurado para despliegue en Vercel. El archivo `vercel.json` incluye la configuración de enrutamiento para comportamiento de aplicación de página única.

Para desplegar:

1. Hacer push de los cambios a la rama main
2. Conectar el repositorio a Vercel
3. Vercel construirá y desplegará automáticamente

Los dominios personalizados se pueden configurar en la configuración del proyecto de Vercel.

## Configuración SEO

La aplicación implementa varias mejores prácticas de SEO:

- Meta tags dinámicos usando React Helmet
- Datos estructurados (JSON-LD) para fragmentos enriquecidos
- Sitemap XML para motores de búsqueda
- robots.txt para directivas de crawlers
- llms.txt para contexto de modelos de IA

## Notas de Desarrollo

### Biblioteca de Componentes

El proyecto utiliza componentes shadcn/ui, que se copian en el proyecto en lugar de instalarse como dependencias. Esto permite la personalización completa del comportamiento y estilos de los componentes.

### Seguridad de Tipos

TypeScript está configurado con modo estricto habilitado para detectar errores potenciales durante el desarrollo. Las definiciones de tipos están disponibles para todas las dependencias principales.

### Estilo de Código

El proyecto utiliza ESLint para el cumplimiento de la calidad del código. Ejecutar `npm run lint` para verificar problemas antes de hacer commits.

## Licencia

Este proyecto es de uso privado.
