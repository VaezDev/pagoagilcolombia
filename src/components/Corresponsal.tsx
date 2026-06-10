"use client";

import { motion } from "framer-motion";
import { WHATSAPP_CORRESPONSAL } from "@/lib/constants";

const features = [
  "Sin costo de afiliación",
  "Capacitación incluida",
  "Soporte técnico 24/7",
  "Comisiones por cada transacción",
  "Software fácil de usar",
];

const requirements = [
  "Un local comercial o negocio activo",
  "Conexión a internet (WiFi o datos)",
  "Smartphone o tablet",
  "Cédula de ciudadanía",
  "RUT o matrícula mercantil",
];

export default function Corresponsal() {
  return (
    <section
      id="corresponsal"
      className="relative py-20 px-[5%] bg-gradient-to-br from-navy to-[#1A2E6B] overflow-hidden"
    >
      {/* Decorative blob */}
      <div className="absolute -right-24 -top-24 w-[500px] h-[500px] rounded-full bg-gold/[0.05] pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: "easeOut" as const }}
        >
          <span className="font-sora text-xs font-bold text-gold uppercase tracking-[0.12em] mb-3.5 block">
            Oportunidad de negocio
          </span>
          <h2 className="text-[clamp(1.6rem,3.5vw,2.6rem)] font-extrabold text-white leading-snug mb-4">
            Conviértete en{" "}
            <em className="not-italic text-gold">Corresponsal</em> Pago Ágil
          </h2>
          <p className="text-[15px] text-white/60 leading-[1.7] mb-8">
            Genera ingresos adicionales desde tu negocio. Fácil, sin inversión
            en equipos costosos y con respaldo tecnológico.
          </p>

          <div className="flex flex-col gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-3.5 text-white/80 text-[15px]"
              >
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="w-6 h-6 min-w-[24px] bg-gold/15 border border-gold/30 rounded-full flex items-center justify-center text-gold text-[12px] font-bold"
                >
                  ✓
                </motion.div>
                {f}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: "easeOut" as const, delay: 0.1 }}
          className="bg-white/[0.05] border-[1.5px] border-white/10 rounded-2xl p-9 backdrop-blur-md"
        >
          <h4 className="text-[20px] font-bold text-white mb-1.5">
            ¿Qué necesitas para empezar?
          </h4>
          <p className="text-sm text-white/50 mb-7">
            Solo algunos requisitos básicos y ya puedes comenzar a generar
            ingresos.
          </p>

          <ul className="flex flex-col gap-3 mb-7">
            {requirements.map((r, i) => (
              <motion.li
                key={r}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="flex items-center gap-2.5 text-sm text-white/75"
              >
                <span className="text-gold font-bold">→</span>
                {r}
              </motion.li>
            ))}
          </ul>

          <motion.a
            href={WHATSAPP_CORRESPONSAL}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.02, boxShadow: "0 12px 36px rgba(245,166,35,0.35)" }}
            whileTap={{ scale: 0.98 }}
            className="block text-center bg-gold text-navy font-bold text-[15px] py-3.5 rounded-full no-underline transition-colors duration-200 hover:bg-gold-light"
          >
            📲 Quiero ser corresponsal
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
