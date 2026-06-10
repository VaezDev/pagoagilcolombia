"use client";

import { motion } from "framer-motion";
import { STEPS } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative py-20 px-[5%] bg-navy overflow-hidden"
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-sora text-xs font-bold text-gold uppercase tracking-[0.12em] mb-3.5 block">
            Proceso simple
          </span>
          <h2 className="text-[clamp(1.6rem,3.5vw,2.6rem)] font-extrabold text-white leading-snug">
            ¿Cómo <em className="not-italic text-gold">funciona</em>?
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative flex flex-col">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute left-7 top-7 bottom-7 w-0.5 bg-gradient-to-b from-gold to-blue-500 opacity-30 hidden sm:block"
          />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" as const }}
              className="flex gap-7 items-start py-6"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-14 h-14 min-w-[56px] bg-gold rounded-full flex items-center justify-center font-extrabold text-[18px] text-navy font-sora relative z-10 shadow-[0_0_24px_rgba(245,166,35,0.35)]"
              >
                {step.num}
              </motion.div>
              <div className="pt-3.5">
                <h4 className="text-[18px] font-bold text-white mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-white/55 leading-[1.65]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
