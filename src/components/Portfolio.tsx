import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { PORTFOLIO_CATEGORIES } from "../data/portfolio";
import { ArrowRight } from "lucide-react";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-brand-light text-sm tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
              Nuestro Trabajo
            </div>
            <h2 className="text-white font-display font-bold text-5xl md:text-7xl mb-6 tracking-tighter">
              Nuestro <span className="italic font-light text-brand-accent">Portafolio</span>
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed font-light">
              Explora nuestros trabajos por categoría. Haz clic en cualquiera de
              ellas para ver todos los proyectos que hemos realizado.
            </p>
          </div>
        </div>

        {/* Grid de Categorías Animado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/portafolio/${category.slug}`}
                className="group block relative overflow-hidden rounded-3xl shadow-sm hover:shadow-2xl aspect-[4/5] md:aspect-[3/4] bg-brand-surface border border-white/5"
              >
                {/* Imagen de fondo de la categoría */}
                <img
                  src={category.coverImage}
                  alt={category.name}
                  className="w-full h-full object-cover opacity-40 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-20 mix-blend-luminosity group-hover:mix-blend-normal"
                  referrerPolicy="no-referrer"
                />

                {/* Contenido sobre la imagen */}
                <div className="absolute inset-0 flex flex-col justify-end p-10 bg-gradient-to-t from-brand-bg/90 via-brand-bg/20 to-transparent">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-brand-accent font-medium mb-2 uppercase tracking-widest text-sm">
                        Portafolio
                      </p>
                      <h3 className="text-white text-4xl font-bold font-display tracking-tight">
                        {category.name}
                      </h3>
                    </div>
                    <div className="w-14 h-14 rounded-full border border-white/20 group-hover:bg-brand-accent group-hover:border-brand-accent flex items-center justify-center text-white transform translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                      <ArrowRight size={24} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
