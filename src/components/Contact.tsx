"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";

const contactLinks = [
  { icon: "💬", label: "WhatsApp", href: WHATSAPP_URL, external: true },
  { icon: "✉️", label: "info@pagoagil.com.co", href: "mailto:info@pagoagil.com.co", external: false },
  { icon: "📞", label: "+57 324 607 9259", href: "tel:+573246079259", external: false },
  { icon: "📍", label: "Cali, Valle del Cauca", href: "#", external: false },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  }

  return (
    <section id="contacto" className="py-20 px-[5%] bg-white">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold text-navy leading-snug mb-4">
            ¿Tienes alguna
            <br />
            <em className="not-italic text-blue-500">pregunta?</em>
          </h2>
          <p className="text-gray-text leading-[1.7] mb-7 text-[15px]">
            Estamos disponibles para ayudarte. Escríbenos por WhatsApp o llena
            el formulario y te respondemos pronto.
          </p>

          <div className="flex flex-col gap-3.5">
            {contactLinks.map((l) => (
              <motion.a
                key={l.label}
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noreferrer" : undefined}
                whileHover={{ x: 4, color: "#2563EB" }}
                className="flex items-center gap-3.5 text-navy text-[15px] font-medium no-underline transition-colors duration-200"
              >
                <motion.div
                  whileHover={{ backgroundColor: "rgba(37,99,235,0.08)" }}
                  className="w-11 h-11 bg-gray-soft rounded-xl flex items-center justify-center text-xl transition-colors duration-200"
                >
                  {l.icon}
                </motion.div>
                {l.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right form */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gray-soft rounded-2xl p-8"
        >
          <h3 className="text-[18px] font-bold text-navy mb-5">
            Envíanos un mensaje
          </h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {[
              { label: "Nombre", type: "text", placeholder: "Tu nombre completo" },
              { label: "Teléfono", type: "tel", placeholder: "300 000 0000" },
            ].map((f) => (
              <div key={f.label}>
                <label className="block text-[13px] font-semibold text-navy/70 mb-1.5">
                  {f.label}
                </label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  className="w-full px-4 py-3 border-[1.5px] border-[#DDE3F0] rounded-lg font-sans text-sm text-navy bg-white outline-none transition-colors duration-200 focus:border-blue-500"
                />
              </div>
            ))}

            <div>
              <label className="block text-[13px] font-semibold text-navy/70 mb-1.5">
                Ciudad
              </label>
              <select className="w-full px-4 py-3 border-[1.5px] border-[#DDE3F0] rounded-lg text-sm text-navy bg-white outline-none transition-colors duration-200 focus:border-blue-500 appearance-none">
                <option value="">Selecciona tu ciudad</option>
                {["Cali", "Pasto", "Ipiales", "Bogotá", "Otra"].map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[13px] font-semibold text-navy/70 mb-1.5">
                Mensaje
              </label>
              <textarea
                placeholder="¿En qué podemos ayudarte?"
                rows={3}
                className="w-full px-4 py-3 border-[1.5px] border-[#DDE3F0] rounded-lg text-sm text-navy bg-white outline-none transition-colors duration-200 focus:border-blue-500 resize-none"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ backgroundColor: "#2563EB", y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-navy text-white font-sora font-bold text-[15px] py-3.5 rounded-full mt-1 border-none cursor-pointer transition-colors duration-200"
            >
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.span
                    key="sent"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    ✅ ¡Mensaje enviado!
                  </motion.span>
                ) : (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Enviar mensaje →
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
