"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: "easeOut" as const, delay },
});

const stats = [
  { num: "4", label: "Ciudades" },
  { num: "24/7", label: "Disponible" },
  { num: "100%", label: "Digital" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-[#1A2E6B] to-navy px-[5%] pt-24 pb-16">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[600px] h-[600px] rounded-full bg-gold/[0.07] -top-40 -right-40"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute w-[400px] h-[400px] rounded-full bg-blue-600/[0.10] -bottom-32 -left-20"
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-2xl text-center">
        {/* Badge */}
        <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 text-gold px-5 py-2 rounded-full text-sm font-semibold mb-7">
          <span className="text-base">⚡</span> Agilizador Tecnológico
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.1)}
          className="text-[clamp(2rem,5vw,3.4rem)] font-extrabold text-white leading-[1.15] mb-5"
        >
          Pagos rápidos,
          <br />
          seguros y{" "}
          <em className="not-italic text-gold">cerca de ti</em>
        </motion.h1>

        {/* Sub */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-[clamp(15px,2vw,18px)] text-white/65 leading-[1.7] mb-9"
        >
          Transferencias, pagos de servicios, recargas y corresponsalía
          bancaria en Cali, Pasto, Ipiales y Bogotá. Sin complicaciones, sin
          filas.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex gap-3.5 justify-center flex-wrap"
        >
          <motion.a
            href="#servicios"
            whileHover={{ y: -3, boxShadow: "0 14px 40px rgba(245,166,35,0.45)" }}
            whileTap={{ scale: 0.97 }}
            className="bg-gold text-navy font-bold text-[15px] px-8 py-4 rounded-full no-underline shadow-[0_8px_30px_rgba(245,166,35,0.3)] transition-colors duration-200 hover:bg-gold-light"
          >
            Ver servicios
          </motion.a>
          <motion.a
            href="#corresponsal"
            whileHover={{ y: -3, borderColor: "#F5A623", color: "#F5A623" }}
            whileTap={{ scale: 0.97 }}
            className="bg-transparent text-white font-semibold text-[15px] px-8 py-4 rounded-full border border-white/30 no-underline transition-all duration-200"
          >
            Ser corresponsal
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          {...fadeUp(0.45)}
          className="flex justify-center gap-10 mt-14 flex-wrap"
        >
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center gap-10">
              <div className="text-center">
                <div className="font-extrabold text-[28px] text-gold font-sora">
                  {s.num}
                </div>
                <div className="text-[12px] text-white/50 mt-1 uppercase tracking-widest">
                  {s.label}
                </div>
              </div>
              {i < stats.length - 1 && (
                <div className="w-px self-stretch bg-white/10 hidden sm:block" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
