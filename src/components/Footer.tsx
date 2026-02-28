import { Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { siteConfig } from "../config";

export default function Footer() {
  return (
    <footer className="bg-brand-bg text-brand-light py-16 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-accent/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo y Descripción */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              {siteConfig.logoUrl ? (
                <img
                  src={siteConfig.logoUrl}
                  alt={siteConfig.companyName}
                  className="h-12 object-contain"
                />
              ) : (
                <Logo className="w-12 h-12 text-white" />
              )}
              <span className="font-display font-bold text-2xl text-white tracking-tight">
                {siteConfig.companyName}
              </span>
            </Link>
            <p className="text-gray-400 max-w-md leading-relaxed font-light">
              Transformamos ideas en experiencias visuales memorables. Somos tu
              aliado estratégico en diseño, marketing y tecnología.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 tracking-widest uppercase text-white">
              Enlaces
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="/#home"
                  className="text-gray-400 hover:text-brand-accent transition-colors font-light"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="text-gray-400 hover:text-brand-accent transition-colors font-light"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="/#portfolio"
                  className="text-gray-400 hover:text-brand-accent transition-colors font-light"
                >
                  Portafolio
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="text-gray-400 hover:text-brand-accent transition-colors font-light"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 tracking-widest uppercase text-white">
              Síguenos
            </h4>
            <div className="flex gap-4">
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent hover:text-brand-bg transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href={siteConfig.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent hover:text-brand-bg transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm font-light">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.companyName}. Todos
            los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
