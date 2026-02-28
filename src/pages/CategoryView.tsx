import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { portfolioData, PORTFOLIO_CATEGORIES } from "../data/portfolio";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CategoryView() {
  const { categorySlug } = useParams<{ categorySlug: string }>();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categorySlug]);

  // Encontrar la categoría actual
  const category = PORTFOLIO_CATEGORIES.find((c) => c.slug === categorySlug);

  // Filtrar los trabajos que pertenecen a esta categoría
  const categoryItems = portfolioData.filter(
    (item) => item.categorySlug === categorySlug,
  );

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-bg noise-bg">
        <div className="text-center relative z-10">
          <h1 className="text-4xl font-bold mb-4 font-display text-white">
            Categoría no encontrada
          </h1>
          <Link
            to="/"
            className="text-brand-accent hover:text-white transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft size={20} /> Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-bg noise-bg font-sans text-brand-light flex flex-col">
      {/* Navbar con fondo oscuro para esta página */}
      <div className="bg-brand-surface border-b border-white/5">
        <Navbar />
      </div>

      <main className="flex-grow pt-32 pb-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Encabezado de la categoría */}
          <div className="mb-20">
            <Link
              to="/#portfolio"
              className="inline-flex items-center text-gray-400 hover:text-brand-accent transition-colors mb-8 font-medium"
            >
              <ArrowLeft size={20} className="mr-2" />
              Volver al Portafolio
            </Link>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-display font-bold text-white tracking-tighter"
            >
              {category.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-2xl text-gray-400 max-w-3xl leading-relaxed font-light"
            >
              Explora todos nuestros trabajos y proyectos realizados en el área
              de {category.name.toLowerCase()}.
            </motion.p>
          </div>

          {/* Grid de Trabajos */}
          {categoryItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {categoryItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-3xl aspect-[4/3] mb-6 bg-brand-surface border border-white/5">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="text-3xl font-bold font-display text-white mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-gray-400 leading-relaxed text-lg font-light">
                      {item.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-32 bg-brand-surface rounded-3xl border border-white/5">
              <p className="text-2xl text-gray-400 font-display">
                Aún no hay trabajos en esta categoría.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
