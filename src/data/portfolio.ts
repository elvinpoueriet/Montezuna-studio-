// src/data/portfolio.ts
// ==========================================
// BASE DE DATOS SIMULADA DEL PORTAFOLIO
// ==========================================
// Aquí puedes agregar, editar o eliminar los trabajos que has subido.
// Cada objeto representa un proyecto en tu portafolio.

export interface PortfolioItem {
  id: number;
  title: string;
  categorySlug: string; // Identificador único para la URL (ej. "logos")
  categoryName: string; // Nombre visible de la categoría (ej. "Logos")
  imageUrl: string; // URL de la imagen del proyecto
  description?: string; // Descripción opcional del proyecto
}

// Estas son las categorías principales que solicitaste
export const PORTFOLIO_CATEGORIES = [
  {
    slug: "disenos",
    name: "Diseños",
    coverImage:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "logos",
    name: "Logos",
    coverImage:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "fotografias",
    name: "Fotografías",
    coverImage:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "videos",
    name: "Videos",
    coverImage:
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "paginas-web",
    name: "Diseño de Página Web",
    coverImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
  },
];

// Aquí están todos tus trabajos subidos.
// Para agregar uno nuevo, simplemente copia un bloque {} y cambia los datos.
export const portfolioData: PortfolioItem[] = [
  // --- DISEÑOS ---
  {
    id: 1,
    title: "Campaña Publicitaria Verano",
    categorySlug: "disenos",
    categoryName: "Diseños",
    imageUrl:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1000&auto=format&fit=crop",
    description:
      "Diseño de piezas gráficas para campaña de verano en redes sociales.",
  },
  {
    id: 2,
    title: "Identidad Corporativa Tech",
    categorySlug: "disenos",
    categoryName: "Diseños",
    imageUrl:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop",
    description: "Manual de marca y papelería para startup tecnológica.",
  },

  // --- LOGOS ---
  {
    id: 3,
    title: "Granja Eliceo",
    categorySlug: "logos",
    categoryName: "Logos",
    imageUrl:
      "https://fvakfzhhhybmdpkxpqjk.supabase.co/storage/v1/object/sign/logos/IMG_1309.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOGRiMjY4Mi1iOGZmLTQ1ZGYtYjIxYy0wMjU0ZTY3ODcyOWEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvcy9JTUdfMTMwOS5qcGciLCJpYXQiOjE3NzIyNjQ5OTIsImV4cCI6MTgwMzgwMDk5Mn0.IO6q1L3eXKp2sKqa0fvbsV7dRo2pfjdwwAfvHXdr9hQ",
    description: "Logo minimalista para granja de pollos.",
  },
  {
    id: 4,
    title: "Silva Solano",
    categorySlug: "logos",
    categoryName: "Logos",
    imageUrl:
      "https://fvakfzhhhybmdpkxpqjk.supabase.co/storage/v1/object/sign/logos/IMG_1588.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOGRiMjY4Mi1iOGZmLTQ1ZGYtYjIxYy0wMjU0ZTY3ODcyOWEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvcy9JTUdfMTU4OC5qcGciLCJpYXQiOjE3NzIyNjUyNjEsImV4cCI6MTgwMzgwMTI2MX0.o4_7inbk9gvxSsjQUWX3rrPHPHs5iMFZ4kSTcqGnLu8",
    description: "Logo para una constructora.",
  },
  {
    id: 11,
    title: "Agroplus",
    categorySlug: "logos",
    categoryName: "Logos",
    imageUrl:
      "https://fvakfzhhhybmdpkxpqjk.supabase.co/storage/v1/object/sign/logos/IMG_5569.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOGRiMjY4Mi1iOGZmLTQ1ZGYtYjIxYy0wMjU0ZTY3ODcyOWEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvcy9JTUdfNTU2OS5qcGciLCJpYXQiOjE3NzIyNjUyOTksImV4cCI6MTgwMzgwMTI5OX0.IouVHIPv76opgIRxugkNzNbPppRIKMmmk2FwaHNw6eA",
    description: "Logo para una marca de químicos del campo.",
  },
  {
    id: 12,
    title: "Prestige",
    categorySlug: "logos",
    categoryName: "Logos",
    imageUrl:
      "https://fvakfzhhhybmdpkxpqjk.supabase.co/storage/v1/object/sign/logos/IMG_6333.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOGRiMjY4Mi1iOGZmLTQ1ZGYtYjIxYy0wMjU0ZTY3ODcyOWEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvcy9JTUdfNjMzMy5qcGciLCJpYXQiOjE3NzIyNjUzNDAsImV4cCI6MTgwMzgwMTM0MH0.fzPGLgL3Kk62lj2JUceq3i-D9HmXY6bcGV4m7EgOl1A",
    description: "Marca de chacabanas.",
  },
  {
    id: 13,
    title: "Carlos Brito Production",
    categorySlug: "logos",
    categoryName: "Logos",
    imageUrl:
      "https://fvakfzhhhybmdpkxpqjk.supabase.co/storage/v1/object/sign/logos/IMG_6472.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOGRiMjY4Mi1iOGZmLTQ1ZGYtYjIxYy0wMjU0ZTY3ODcyOWEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvcy9JTUdfNjQ3Mi5qcGciLCJpYXQiOjE3NzIyNjUzNzUsImV4cCI6MTgwMzgwMTM3NX0.wYSINGwIa99CBcy1TAa47DcY8e1ofdQgTO7xmI9QIC8",
    description: "Imprenta de bordados y diferentes servicios.",
  },
  {
    id: 14,
    title: "Lechonera Don Botin",
    categorySlug: "logos",
    categoryName: "Logos",
    imageUrl:
      "https://fvakfzhhhybmdpkxpqjk.supabase.co/storage/v1/object/sign/logos/IMG_6493.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOGRiMjY4Mi1iOGZmLTQ1ZGYtYjIxYy0wMjU0ZTY3ODcyOWEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvcy9JTUdfNjQ5My5qcGciLCJpYXQiOjE3NzIyNjU0MjEsImV4cCI6MTgwMzgwMTQyMX0.TcZ8C2saLuugC1Jp3AzWKEE2kS1TYHe3m8W2dxRKq1A",
    description: "Restaurante de chicharrón.",
  },
  {
    id: 15,
    title: "Super Market Serie 26",
    categorySlug: "logos",
    categoryName: "Logos",
    imageUrl:
      "https://fvakfzhhhybmdpkxpqjk.supabase.co/storage/v1/object/sign/logos/IMG_6726.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOGRiMjY4Mi1iOGZmLTQ1ZGYtYjIxYy0wMjU0ZTY3ODcyOWEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvcy9JTUdfNjcyNi5qcGciLCJpYXQiOjE3NzIyNjU0NTEsImV4cCI6MTgwMzgwMTQ1MX0.qexvNiMcUzmlmT9nwoVFmjpLCh93k1Z1l15VxXTZvzU",
    description: "Tienda de insumos.",
  },
  {
    id: 16,
    title: "PS Plomería",
    categorySlug: "logos",
    categoryName: "Logos",
    imageUrl:
      "https://fvakfzhhhybmdpkxpqjk.supabase.co/storage/v1/object/sign/logos/IMG_6729.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOGRiMjY4Mi1iOGZmLTQ1ZGYtYjIxYy0wMjU0ZTY3ODcyOWEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvcy9JTUdfNjcyOS5wbmciLCJpYXQiOjE3NzIyNjYwMTksImV4cCI6MTgwMzgwMjAxOX0.mb1RsugMxjX5NyXA6C0idxfPnLgKBNbIUeUGR-Y4NRY",
    description: "Servicios de plomería.",
  },
  {
    id: 17,
    title: "Isabel Cloud",
    categorySlug: "logos",
    categoryName: "Logos",
    imageUrl:
      "https://fvakfzhhhybmdpkxpqjk.supabase.co/storage/v1/object/sign/logos/IMG_7428.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOGRiMjY4Mi1iOGZmLTQ1ZGYtYjIxYy0wMjU0ZTY3ODcyOWEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvcy9JTUdfNzQyOC5qcGciLCJpYXQiOjE3NzIyNjU1NjAsImV4cCI6MTgwMzgwMTU2MH0.QmkQIsRJQmYs-S3pXO1XIiDESFMWkmqq48nD0PmXZfM",
    description: "Venta de internet.",
  },
  {
    id: 18,
    title: "ARH",
    categorySlug: "logos",
    categoryName: "Logos",
    imageUrl:
      "https://fvakfzhhhybmdpkxpqjk.supabase.co/storage/v1/object/sign/logos/IMG_7430.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOGRiMjY4Mi1iOGZmLTQ1ZGYtYjIxYy0wMjU0ZTY3ODcyOWEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvcy9JTUdfNzQzMC5qcGciLCJpYXQiOjE3NzIyNjU1NzksImV4cCI6MTgwMzgwMTU3OX0.-DTYecVZ1rcz5Mep94yBIH0_Hw5ptWEjh-NdzU9LbZs",
    description: "Ferretería y servicios ferreteros.",
  },
  {
    id: 19,
    title: "Distribuidora Agrícola",
    categorySlug: "logos",
    categoryName: "Logos",
    imageUrl:
      "https://fvakfzhhhybmdpkxpqjk.supabase.co/storage/v1/object/sign/logos/IMG_7439.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOGRiMjY4Mi1iOGZmLTQ1ZGYtYjIxYy0wMjU0ZTY3ODcyOWEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvcy9JTUdfNzQzOS5qcGciLCJpYXQiOjE3NzIyNjU2MTMsImV4cCI6MTgwMzgwMTYxM30.GIyKAAPw4fZPrL0qaHR_CoZgGDhh-jiAqf2MMA9AKQ8",
    description: "Venta de insumos del campo.",
  },
  {
    id: 20,
    title: "Compu Reysi",
    categorySlug: "logos",
    categoryName: "Logos",
    imageUrl:
      "https://fvakfzhhhybmdpkxpqjk.supabase.co/storage/v1/object/sign/logos/IMG_7841.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOGRiMjY4Mi1iOGZmLTQ1ZGYtYjIxYy0wMjU0ZTY3ODcyOWEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvcy9JTUdfNzg0MS5qcGciLCJpYXQiOjE3NzIyNjU2NDgsImV4cCI6MTgwMzgwMTY0OH0.70zWSCWUBFr5iIGodjr9JSU5ej3mOAEIkpVT9H-k8A0",
    description: "Tienda de computadoras.",
  },

  // --- FOTOGRAFÍAS ---
  {
    id: 5,
    title: "Sesión Producto Cosmético",
    categorySlug: "fotografias",
    categoryName: "Fotografías",
    imageUrl:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1000&auto=format&fit=crop",
    description:
      "Fotografía de producto en estudio con iluminación profesional.",
  },
  {
    id: 6,
    title: "Cobertura Evento Corporativo",
    categorySlug: "fotografias",
    categoryName: "Fotografías",
    imageUrl:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop",
    description: "Fotografía documental de evento anual de empresa.",
  },

  // --- VIDEOS ---
  {
    id: 7,
    title: "Comercial TV 'Nueva Era'",
    categorySlug: "videos",
    categoryName: "Videos",
    imageUrl:
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1000&auto=format&fit=crop",
    description: "Producción y edición de comercial para televisión nacional.",
  },
  {
    id: 8,
    title: "Reels para Instagram",
    categorySlug: "videos",
    categoryName: "Videos",
    imageUrl:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    description:
      "Creación de contenido dinámico en formato vertical para redes.",
  },

  // --- DISEÑO DE PÁGINA WEB ---
  {
    id: 9,
    title: "E-commerce de Moda",
    categorySlug: "paginas-web",
    categoryName: "Diseño de Página Web",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    description:
      "Tienda en línea completa con pasarela de pagos y gestión de inventario.",
  },
  {
    id: 10,
    title: "Landing Page Evento",
    categorySlug: "paginas-web",
    categoryName: "Diseño de Página Web",
    imageUrl:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop",
    description:
      "Página de aterrizaje optimizada para captura de leads (clientes potenciales).",
  },
];
