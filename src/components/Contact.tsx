import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { siteConfig } from "../config";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Diseño de Marca (Logo)",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Hola Montezuna Studio, me gustaría hablar sobre un proyecto.

*Nombre:* ${formData.name}
*Email:* ${formData.email}
*Servicio de Interés:* ${formData.service}

*Mensaje:*
${formData.message}`;

    const encodedText = encodeURIComponent(text);
    // Usando el número de teléfono extraído del enlace corto proporcionado
    const whatsappUrl = `https://wa.me/18093449209?text=${encodedText}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-32 bg-brand-bg noise-bg relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-brand-light text-sm tracking-widest uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
            Contacto
          </div>
          <h2 className="text-white font-display font-bold text-5xl md:text-7xl mb-6 tracking-tighter">
            ¿Hablamos de tu <span className="italic font-light text-brand-accent">Proyecto?</span>
          </h2>
          <p className="text-gray-400 text-xl leading-relaxed font-light">
            Estamos listos para escuchar tu idea y hacerla realidad. Escríbenos
            y te responderemos pronto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Información de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-6 group">
              <div className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center shrink-0 group-hover:border-brand-accent group-hover:bg-brand-accent/10 transition-all duration-500">
                <Mail className="w-6 h-6 text-white group-hover:text-brand-accent transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 font-display tracking-wide">
                  Email
                </h3>
                <p className="text-gray-400 font-light">{siteConfig.contact.email}</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center shrink-0 group-hover:border-brand-accent group-hover:bg-brand-accent/10 transition-all duration-500">
                <Phone className="w-6 h-6 text-white group-hover:text-brand-accent transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 font-display tracking-wide">
                  Teléfono
                </h3>
                <p className="text-gray-400 font-light">{siteConfig.contact.phone}</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center shrink-0 group-hover:border-brand-accent group-hover:bg-brand-accent/10 transition-all duration-500">
                <MapPin className="w-6 h-6 text-white group-hover:text-brand-accent transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 font-display tracking-wide">
                  Ubicación
                </h3>
                <p className="text-gray-400 font-light">{siteConfig.contact.address}</p>
              </div>
            </div>
          </motion.div>

          {/* Formulario de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-brand-surface border border-white/5 rounded-3xl p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full blur-[50px] pointer-events-none"></div>
            
            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 rounded-xl bg-brand-bg border border-white/10 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all font-light"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 rounded-xl bg-brand-bg border border-white/10 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all font-light"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider"
                >
                  Servicio de Interés
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-4 rounded-xl bg-brand-bg border border-white/10 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all font-light appearance-none"
                >
                  <option className="bg-brand-surface text-white">Diseño de Marca (Logo)</option>
                  <option className="bg-brand-surface text-white">Desarrollo Web</option>
                  <option className="bg-brand-surface text-white">Producción de Video</option>
                  <option className="bg-brand-surface text-white">Fotografía</option>
                  <option className="bg-brand-surface text-white">Marketing / Redes Sociales</option>
                  <option className="bg-brand-surface text-white">Otro</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 rounded-xl bg-brand-bg border border-white/10 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all resize-none font-light"
                  placeholder="Cuéntanos sobre tu proyecto..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-brand-accent text-brand-bg py-4 rounded-xl font-medium hover:bg-white transition-colors duration-300 group"
              >
                Enviar Mensaje
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
