"use client";

import { motion, type Variants } from "framer-motion";
import { Zap, Lightbulb, Smartphone, Landmark, Ticket, FileText } from "lucide-react";

const spring = { type: "spring", stiffness: 80, damping: 20 } as const;

const services = [
  {
    icon: Zap,
    title: "Transferencias",
    description: "Envía y recibe dinero de forma inmediata entre cuentas bancarias y billeteras digitales.",
    accent: "#F5A623",
    size: "large",
  },
  {
    icon: Lightbulb,
    title: "Pago de Servicios",
    description: "Energía, agua, gas, internet y televisión sin moverte del barrio.",
    accent: "#3B82F6",
    size: "medium",
  },
  {
    icon: Smartphone,
    title: "Recargas",
    description: "Claro, Movistar, Tigo, WOM y más. Instantáneo.",
    accent: "#10B981",
    size: "small",
  },
  {
    icon: Landmark,
    title: "Corresponsalía Bancaria",
    description: "Depósitos, retiros y consultas sin ir a una sucursal.",
    accent: "#8B5CF6",
    size: "medium",
  },
  {
    icon: Ticket,
    title: "Pines y Tarjetas",
    description: "Pines de recarga y tarjetas de regalo para múltiples plataformas.",
    accent: "#F43F5E",
    size: "small",
  },
  {
    icon: FileText,
    title: "Trámites y Certificados",
    description: "Multas, impuestos, SOAT y más desde nuestros puntos.",
    accent: "#06B6D4",
    size: "small",
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 20 } },
};

export default function Services() {
  return (
    <section id="servicios" className="relative py-24 px-[5%] bg-white overflow-hidden">
      {/* Subtle gradient bleed from dark section above */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-navy-deep/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ ...spring }}
          className="mb-16 max-w-xl"
        >
          <span className="inline-block font-sora text-[11px] font-bold text-blue-500 uppercase tracking-[0.18em] mb-4 px-3 py-1 bg-blue-500/[0.08] rounded-full">
            Lo que ofrecemos
          </span>
          <h2 className="font-sora font-extrabold text-navy leading-[1.1] mt-3"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            Todos los servicios
            <br />
            en{" "}
            <span className="text-gradient-blue">un solo punto</span>
          </h2>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-4"
        >
          {services.map((s, i) => {
            const Icon = s.icon;
            const isLarge = i === 0;

            return (
              <motion.div
                key={s.title}
                variants={item}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={spring}
                className={`group relative rounded-3xl border border-[#E8EDF8] bg-white overflow-hidden cursor-default ${
                  isLarge ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
                style={{
                  padding: isLarge ? "36px 32px" : "28px 24px",
                  minHeight: isLarge ? 220 : 180,
                }}
              >
                {/* Hover gradient bg */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 0% 0%, ${s.accent}0D 0%, transparent 65%)` }}
                />

                {/* Top accent line */}
                <motion.div
                  initial={{ scaleX: 0, originX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: `linear-gradient(90deg, ${s.accent}, transparent)` }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 relative z-10"
                  style={{ background: `${s.accent}12`, border: `1.5px solid ${s.accent}25` }}
                >
                  <Icon size={22} color={s.accent} strokeWidth={1.8} />
                </div>

                <h3 className={`font-sora font-bold text-navy mb-2.5 relative z-10 ${isLarge ? "text-xl" : "text-[17px]"}`}>
                  {s.title}
                </h3>
                <p className="text-[14px] text-gray-text leading-[1.65] relative z-10">
                  {s.description}
                </p>

                {/* Corner number — subtle */}
                <span className="absolute bottom-5 right-5 font-sora font-extrabold text-[52px] leading-none opacity-[0.04] select-none pointer-events-none text-navy">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
