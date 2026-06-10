"use client";

import { motion } from "framer-motion";
import { WHATSAPP_CORRESPONSAL } from "@/lib/constants";
import { CheckCircle, Wifi, Smartphone, IdCard, FileText, ArrowRight } from "lucide-react";

const spring = { type: "spring", stiffness: 80, damping: 20 } as const;

const features = [
  { text: "Sin costo de afiliación", color: "#10B981" },
  { text: "Capacitación incluida", color: "#3B82F6" },
  { text: "Soporte técnico 24/7", color: "#F5A623" },
  { text: "Comisiones por cada transacción", color: "#8B5CF6" },
  { text: "Software fácil de usar", color: "#F43F5E" },
];

const requirements = [
  { icon: Wifi, text: "Conexión a internet (WiFi o datos)" },
  { icon: Smartphone, text: "Smartphone o tablet" },
  { icon: IdCard, text: "Cédula de ciudadanía" },
  { icon: FileText, text: "RUT o matrícula mercantil" },
];

export default function Corresponsal() {
  return (
    <section id="corresponsal" className="relative py-24 px-[5%] grain overflow-hidden" style={{ background: "#0A1628" }}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(245,166,35,0.08) 0%, transparent 65%)" }} />
        <div className="absolute -left-20 bottom-0 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 65%)" }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={spring}
        >
          <span className="inline-block font-sora text-[11px] font-bold text-gold uppercase tracking-[0.18em] mb-4 px-3 py-1 bg-gold/10 rounded-full border border-gold/20">
            Oportunidad de negocio
          </span>
          <h2 className="font-sora font-extrabold text-white leading-[1.1] mt-3 mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            Conviértete en{" "}
            <span className="text-gradient-gold">Corresponsal</span>
          </h2>
          <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-md">
            Genera ingresos adicionales desde tu negocio. Fácil, sin inversión en equipos costosos y con respaldo tecnológico.
          </p>

          <div className="flex flex-col gap-3.5">
            {features.map((f, i) => (
              <motion.div
                key={f.text}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ ...spring, delay: i * 0.07 }}
                className="flex items-center gap-3"
              >
                <CheckCircle size={18} strokeWidth={2} style={{ color: f.color, flexShrink: 0 }} />
                <span className="text-white/75 text-[15px]">{f.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — glass card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ ...spring, delay: 0.1 }}
          className="glass rounded-3xl p-9"
        >
          <h4 className="font-sora font-bold text-white text-xl mb-1.5">
            ¿Qué necesitas para empezar?
          </h4>
          <p className="text-white/40 text-sm mb-8">
            Solo algunos requisitos básicos y ya puedes comenzar.
          </p>

          <div className="flex flex-col gap-4 mb-8">
            {requirements.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={r.text}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...spring, delay: i * 0.07 }}
                  className="flex items-center gap-3.5"
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/[0.06] border border-white/[0.08]">
                    <Icon size={16} color="#F5A623" strokeWidth={1.8} />
                  </div>
                  <span className="text-white/70 text-sm">{r.text}</span>
                </motion.div>
              );
            })}
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/[0.06] border border-white/[0.08] text-sm">
                🏪
              </div>
              <span className="text-white/70 text-sm">Un local comercial o negocio activo</span>
            </div>
          </div>

          <motion.a
            href={WHATSAPP_CORRESPONSAL}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03, boxShadow: "0 14px 48px rgba(245,166,35,0.4)" }}
            whileTap={{ scale: 0.97 }}
            transition={spring}
            className="flex items-center justify-center gap-2.5 bg-gold text-navy font-sora font-bold text-[15px] py-4 rounded-full no-underline shadow-[0_8px_28px_rgba(245,166,35,0.3)] hover:bg-gold-light transition-colors duration-200"
          >
            Quiero ser corresponsal
            <ArrowRight size={16} strokeWidth={2.5} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
