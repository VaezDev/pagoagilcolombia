"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MapPin, Zap, Shield, Clock } from "lucide-react";

const spring = { type: "spring", stiffness: 80, damping: 20 } as const;

const floatingCards = [
  { icon: Zap, label: "Transferencias", value: "Instantáneas", color: "#F5A623", delay: 0.8 },
  { icon: Shield, label: "Seguridad", value: "100% seguro", color: "#3B82F6", delay: 1.0 },
  { icon: Clock, label: "Disponible", value: "24 / 7", color: "#10B981", delay: 1.2 },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden mesh-bg grain"
    >
      {/* Parallax background layer */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        {/* Animated orbs */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[700px] h-[700px] rounded-full -top-48 -right-48"
          style={{ background: "radial-gradient(circle, rgba(245,166,35,0.12) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute w-[500px] h-[500px] rounded-full -bottom-32 -left-24"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)" }}
        />
        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-40" />
        {/* Horizontal lines */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: "repeating-linear-gradient(180deg, transparent, transparent 80px, rgba(255,255,255,0.015) 80px, rgba(255,255,255,0.015) 81px)",
          }}
        />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full max-w-6xl mx-auto px-[5%] pt-28 pb-20 grid lg:grid-cols-2 gap-12 items-center"
      >
        {/* LEFT: Text content */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <span className="flex items-center gap-1.5 bg-gold/10 border border-gold/20 text-gold px-4 py-1.5 rounded-full text-[13px] font-semibold font-sora tracking-wide">
              <MapPin size={12} strokeWidth={2.5} />
              Colombia · Cali · Pasto · Ipiales · Bogotá
            </span>
          </motion.div>

          {/* Headline — dramatic scale */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.2 }}
            className="font-sora font-extrabold text-white leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.2rem)" }}
          >
            Pagos{" "}
            <span className="text-gradient-gold">rápidos</span>
            {" "}y{" "}
            <br className="hidden sm:block" />
            <span className="relative">
              seguros
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{ originX: 0 }}
                className="absolute bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-gold to-gold-light rounded-full"
              />
            </span>
            {" "}cerca{" "}
            <br className="hidden sm:block" />
            de{" "}
            <span className="text-gradient-blue">ti</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.35 }}
            className="text-white/55 text-lg leading-relaxed mb-10 max-w-lg"
          >
            Transferencias, pagos de servicios, recargas y corresponsalía
            bancaria. Sin filas, sin complicaciones.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#servicios"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={spring}
              className="group flex items-center gap-2.5 bg-gold text-navy font-sora font-bold text-[15px] px-7 py-4 rounded-full shadow-[0_8px_32px_rgba(245,166,35,0.35)] hover:shadow-[0_12px_48px_rgba(245,166,35,0.5)] hover:bg-gold-light transition-shadow duration-300 no-underline"
            >
              Ver servicios
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={spring}
                className="group-hover:translate-x-1 transition-transform"
              >
                <ArrowRight size={16} strokeWidth={2.5} />
              </motion.span>
            </motion.a>

            <motion.a
              href="#corresponsal"
              whileHover={{ scale: 1.04, borderColor: "rgba(245,166,35,0.6)" }}
              whileTap={{ scale: 0.97 }}
              transition={spring}
              className="flex items-center gap-2 text-white/80 font-sora font-semibold text-[15px] px-7 py-4 rounded-full border border-white/15 hover:text-white hover:bg-white/[0.05] transition-colors duration-200 no-underline"
            >
              Ser corresponsal
            </motion.a>
          </motion.div>
        </div>

        {/* RIGHT: Floating glass cards */}
        <div className="relative hidden lg:flex flex-col gap-4 items-end">
          {/* Main glass card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ ...spring, delay: 0.6 }}
            className="glass rounded-3xl p-8 w-full max-w-sm"
          >
            <p className="text-white/40 text-xs font-sora font-semibold uppercase tracking-widest mb-1">
              Puntos activos
            </p>
            <p
              className="font-sora font-extrabold text-white leading-none mb-4"
              style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
            >
              +10
            </p>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {["Cali", "Pasto", "Ipiales", "Bogotá"].map((c, i) => (
                  <div
                    key={c}
                    className="w-8 h-8 rounded-full border-2 border-navy-deep flex items-center justify-center text-[10px] font-bold text-white"
                    style={{ background: ["#2563EB","#F5A623","#10B981","#8B5CF6"][i], zIndex: 4 - i }}
                  >
                    {c[0]}
                  </div>
                ))}
              </div>
              <span className="text-white/50 text-sm">Ciudades</span>
            </div>
          </motion.div>

          {/* Floating mini-cards */}
          <div className="flex gap-3 w-full max-w-sm">
            {floatingCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 24, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ ...spring, delay: card.delay }}
                  whileHover={{ y: -4, scale: 1.04 }}
                  className="glass rounded-2xl p-4 flex-1 cursor-default"
                >
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: `${card.color}18`, border: `1px solid ${card.color}30` }}
                  >
                    <Icon size={15} color={card.color} strokeWidth={2} />
                  </div>
                  <p className="text-white/40 text-[10px] font-sora font-semibold uppercase tracking-wider leading-none mb-1">
                    {card.label}
                  </p>
                  <p className="text-white text-sm font-sora font-bold">{card.value}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-white/25 text-[11px] font-sora uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-0.5 h-8 bg-gradient-to-b from-white/20 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
