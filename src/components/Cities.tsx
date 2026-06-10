"use client";

import { motion, type Variants } from "framer-motion";
import { CITIES } from "@/lib/constants";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Cities() {
  return (
    <section id="ciudades" className="py-20 px-[5%] bg-gray-soft">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <span className="font-sora text-xs font-bold text-blue-500 uppercase tracking-[0.12em] mb-3.5 block">
          Cobertura
        </span>
        <h2 className="text-[clamp(1.6rem,3.5vw,2.6rem)] font-extrabold text-navy leading-snug">
          Presente en <em className="not-italic text-blue-500">4 ciudades</em>
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mt-10"
      >
        {CITIES.map((c) => (
          <motion.div
            key={c.name}
            variants={card}
            whileHover={{ y: -6, boxShadow: "0 14px 40px rgba(13,27,62,0.10)" }}
            className="bg-white rounded-2xl p-8 text-center border-[1.5px] border-[#E8EDF8] transition-shadow duration-300"
          >
            <motion.span
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }}
              className="text-[40px] mb-3.5 block"
            >
              {c.emoji}
            </motion.span>
            <h3 className="text-xl font-bold text-navy mb-2">{c.name}</h3>
            <p className="text-[13px] text-gray-text leading-[1.6] mb-3.5">
              {c.description}
            </p>
            <span className="inline-block bg-blue-500/[0.08] text-blue-500 text-xs font-semibold px-3.5 py-1.5 rounded-full">
              {c.badge}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
