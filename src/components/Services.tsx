"use client";

import { motion, type Variants } from "framer-motion";
import { SERVICES } from "@/lib/constants";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative py-20 px-[5%] bg-white overflow-hidden"
    >
      {/* Subtle background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(37,99,235,0.04)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(245,166,35,0.03)_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block font-sora text-xs font-bold text-blue-500 uppercase tracking-[0.12em] mb-3.5">
            Lo que ofrecemos
          </span>
          <h2 className="text-[clamp(1.6rem,3.5vw,2.6rem)] font-extrabold text-navy leading-snug mb-4">
            Todos los servicios
            <br />
            en <em className="not-italic text-blue-500">un solo punto</em>
          </h2>
          <p className="text-base text-gray-text leading-[1.7] max-w-xl mx-auto">
            Accede a servicios financieros y pagos digitales desde cualquier
            punto Pago Ágil cerca de ti.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {SERVICES.map((s) => (
            <motion.div
              key={s.title}
              variants={card}
              whileHover={{
                y: -6,
                borderColor: "#3B82F6",
                backgroundColor: "rgba(59,130,246,0.07)",
                boxShadow: "0 16px 48px rgba(37,99,235,0.15)",
              }}
              className="group bg-white border-[1.5px] border-[#E8EDF8] rounded-2xl p-7 relative overflow-hidden cursor-default transition-colors duration-300"
            >
              {/* Top accent bar */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 to-gold"
              />

              <motion.div
                whileHover={{ backgroundColor: "rgba(59,130,246,0.2)", borderColor: "rgba(59,130,246,0.4)" }}
                className="w-[52px] h-[52px] bg-gray-soft border border-[#E8EDF8] rounded-[14px] flex items-center justify-center text-2xl mb-5 transition-colors duration-300"
              >
                {s.icon}
              </motion.div>
              <h3 className="text-[17px] font-bold text-navy mb-2.5">
                {s.title}
              </h3>
              <p className="text-sm text-gray-text leading-[1.65]">
                {s.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
