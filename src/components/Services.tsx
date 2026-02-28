import { motion } from "motion/react";
import {
  Palette,
  Video,
  Megaphone,
  Share2,
  Globe,
  PenTool,
  Camera,
} from "lucide-react";

const services = [
  {
    title: "Diseños",
    description:
      "Creamos piezas gráficas impactantes que comunican tu mensaje de forma visual y efectiva.",
    icon: Palette,
  },
  {
    title: "Marcas (Logos)",
    description:
      "Diseño de identidad visual corporativa, logotipos y manuales de marca completos.",
    icon: PenTool,
  },
  {
    title: "Fotografías",
    description:
      "Sesiones fotográficas de producto, corporativas y eventos con la más alta calidad.",
    icon: Camera,
  },
  {
    title: "Videos",
    description:
      "Producción audiovisual profesional para comerciales, redes sociales y corporativos.",
    icon: Video,
  },
  {
    title: "Páginas Web",
    description:
      "Desarrollo de sitios web modernos, rápidos y optimizados para conversiones.",
    icon: Globe,
  },
  {
    title: "Marketing",
    description:
      "Estrategias integrales para posicionar tu marca y aumentar tus ventas en el mercado.",
    icon: Megaphone,
  },
  {
    title: "Redes Sociales",
    description:
      "Gestión profesional de tus perfiles, creación de contenido y community management.",
    icon: Share2,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-brand-surface relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-brand-light text-sm tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
              Lo que hacemos
            </div>
            <h2 className="text-white font-display font-bold text-5xl md:text-7xl mb-6 tracking-tighter">
              Nuestros <span className="italic font-light text-brand-accent">Servicios</span>
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed font-light">
              Ofrecemos soluciones creativas 360° para impulsar tu negocio.
              Desde la idea inicial hasta la ejecución final.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-brand-bg rounded-3xl p-10 border border-white/5 hover:border-brand-accent/50 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full blur-[50px] group-hover:bg-brand-accent/20 transition-colors duration-500"></div>
              
              <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-8 group-hover:border-brand-accent group-hover:bg-brand-accent/10 transition-all duration-500 relative z-10">
                <service.icon className="w-7 h-7 text-white group-hover:text-brand-accent transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-display tracking-tight relative z-10">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg font-light relative z-10">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
