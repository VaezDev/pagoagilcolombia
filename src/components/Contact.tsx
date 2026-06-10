"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";
import { MessageCircle, Mail, Phone, MapPin, ArrowRight, CheckCircle } from "lucide-react";

const spring = { type: "spring", stiffness: 80, damping: 20 } as const;

const contactLinks = [
  { icon: MessageCircle, label: "WhatsApp", sub: "+57 324 607 9259", href: WHATSAPP_URL, external: true, accent: "#25D366" },
  { icon: Mail, label: "Email", sub: "info@pagoagil.com.co", href: "mailto:info@pagoagil.com.co", external: false, accent: "#3B82F6" },
  { icon: Phone, label: "Teléfono", sub: "+57 324 607 9259", href: "tel:+573246079259", external: false, accent: "#F5A623" },
  { icon: MapPin, label: "Sede", sub: "Cali, Valle del Cauca", href: "#", external: false, accent: "#10B981" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1200);
    setTimeout(() => setSent(false), 4500);
  }

  return (
    <section id="contacto" className="relative py-24 px-[5%] bg-white overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 100% 100%, rgba(37,99,235,0.04) 0%, transparent 60%)" }} />

      <div className="relative z-10 max-w-5xl mx-auto grid lg:grid-cols-[1fr_1.4fr] gap-14 items-start">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={spring}
        >
          <span className="inline-block font-sora text-[11px] font-bold text-blue-500 uppercase tracking-[0.18em] mb-4 px-3 py-1 bg-blue-500/[0.08] rounded-full">
            Contacto
          </span>
          <h2 className="font-sora font-extrabold text-navy leading-[1.1] mt-3 mb-4"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
            ¿Tienes alguna{" "}
            <span className="text-gradient-blue">pregunta?</span>
          </h2>
          <p className="text-gray-text leading-relaxed mb-10 text-base max-w-sm">
            Estamos disponibles para ayudarte. Escríbenos por WhatsApp o llena el formulario.
          </p>

          <div className="flex flex-col gap-3">
            {contactLinks.map((l, i) => {
              const Icon = l.icon;
              return (
                <motion.a
                  key={l.label}
                  href={l.href}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noreferrer" : undefined}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...spring, delay: i * 0.07 }}
                  whileHover={{ x: 4 }}
                  className="group flex items-center gap-4 no-underline"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={spring}
                    className="w-11 h-11 rounded-2xl flex items-center justify-center flex-none transition-colors duration-200"
                    style={{ background: `${l.accent}10`, border: `1.5px solid ${l.accent}20` }}
                  >
                    <Icon size={17} strokeWidth={1.8} style={{ color: l.accent }} />
                  </motion.div>
                  <div>
                    <p className="text-navy font-sora font-semibold text-sm leading-none mb-0.5">{l.label}</p>
                    <p className="text-gray-text text-xs">{l.sub}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ ...spring, delay: 0.1 }}
          className="bg-[#F8FAFF] border border-[#E8EDF8] rounded-3xl p-8"
        >
          <h3 className="font-sora font-bold text-navy text-xl mb-6">Envíanos un mensaje</h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Nombre", type: "text", placeholder: "Tu nombre completo" },
                { label: "Teléfono", type: "tel", placeholder: "300 000 0000" },
              ].map((f) => (
                <div key={f.label}>
                  <label className="block font-sora text-xs font-semibold text-navy/60 mb-2 uppercase tracking-wide">
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    required
                    className="w-full px-4 py-3.5 bg-white border border-[#DDE3F0] rounded-xl text-sm text-navy placeholder-gray-text/60 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="block font-sora text-xs font-semibold text-navy/60 mb-2 uppercase tracking-wide">
                Ciudad
              </label>
              <select
                required
                className="w-full px-4 py-3.5 bg-white border border-[#DDE3F0] rounded-xl text-sm text-navy outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 appearance-none cursor-pointer"
              >
                <option value="">Selecciona tu ciudad</option>
                {["Cali", "Pasto", "Ipiales", "Bogotá", "Otra"].map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>

            <div>
              <label className="block font-sora text-xs font-semibold text-navy/60 mb-2 uppercase tracking-wide">
                Mensaje
              </label>
              <textarea
                placeholder="¿En qué podemos ayudarte?"
                rows={4}
                required
                className="w-full px-4 py-3.5 bg-white border border-[#DDE3F0] rounded-xl text-sm text-navy placeholder-gray-text/60 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 resize-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={loading || sent}
              whileHover={!loading && !sent ? { scale: 1.02, boxShadow: "0 8px 32px rgba(10,22,40,0.25)" } : {}}
              whileTap={!loading && !sent ? { scale: 0.98 } : {}}
              transition={spring}
              className="relative w-full flex items-center justify-center gap-2.5 bg-navy text-white font-sora font-bold text-[15px] py-4 rounded-full border-none cursor-pointer overflow-hidden transition-colors duration-200 hover:bg-blue-500 disabled:cursor-not-allowed"
              style={{ minHeight: 56 }}
            >
              <AnimatePresence mode="wait">
                {loading ? (
                  <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                    <motion.span animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }} className="block w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
                    Enviando...
                  </motion.span>
                ) : sent ? (
                  <motion.span key="sent" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-white">
                    <CheckCircle size={18} strokeWidth={2.5} />
                    ¡Mensaje enviado!
                  </motion.span>
                ) : (
                  <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                    Enviar mensaje
                    <ArrowRight size={16} strokeWidth={2.5} />
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
