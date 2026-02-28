import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "../config";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-bg noise-bg"
    >
      {/* Fondo con imagen y overlay oscuro para que resalte el texto */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop"
          alt="Abstract art"
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/80 via-brand-bg/90 to-brand-bg"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-brand-light text-sm tracking-widest uppercase mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
            Agencia Creativa Digital
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white mb-6 tracking-tighter leading-[0.9]">
            Creamos <span className="outline-text italic font-light">Marcas</span> que{" "}
            <br className="hidden md:block" />
            Dejan Huella
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light mb-12 leading-relaxed">
            Especialistas en diseño, video, marketing y desarrollo web. Llevamos
            tu visión al siguiente nivel con resultados extraordinarios.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto mt-4">
            <a
              href="/#portfolio"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-brand-bg bg-brand-accent overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              <span className="relative flex items-center">
                Ver Portafolio
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-white border border-white/20 hover:bg-white hover:text-brand-bg transition-all duration-300 backdrop-blur-sm"
            >
              Contáctanos
            </a>
          </div>
        </motion.div>
      </div>

      {/* Elemento decorativo animado */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/30"
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/20 flex justify-center p-2">
          <div className="w-1 h-3 bg-white/30 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
