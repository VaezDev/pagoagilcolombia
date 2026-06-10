"use client";

import { motion } from "framer-motion";
import { MapPin, Hand, CreditCard, CheckCircle } from "lucide-react";
import { STEPS } from "@/lib/constants";

const spring = { type: "spring", stiffness: 80, damping: 20 } as const;

const icons = [MapPin, Hand, CreditCard, CheckCircle];
const accents = ["#F5A623", "#3B82F6", "#10B981", "#8B5CF6"];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-24 px-[5%] grain overflow-hidden" style={{ background: "#0A1628" }}>
      {/* Mesh background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.12) 0%, transparent 70%)" }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={spring}
            className="lg:sticky lg:top-28"
          >
            <span className="inline-block font-sora text-[11px] font-bold text-gold uppercase tracking-[0.18em] mb-4 px-3 py-1 bg-gold/10 rounded-full border border-gold/20">
              Proceso simple
            </span>
            <h2 className="font-sora font-extrabold text-white leading-[1.1] mt-3 mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
              ¿Cómo{" "}
              <span className="text-gradient-gold">funciona</span>?
            </h2>
            <p className="text-white/45 text-lg leading-relaxed max-w-md">
              En cuatro pasos simples accedes a todos los servicios financieros
              que necesitas, sin filas ni complicaciones.
            </p>

            {/* Big decorative number */}
            <div className="mt-12 hidden lg:block">
              <span className="font-sora font-extrabold leading-none select-none text-white/[0.04]"
                style={{ fontSize: "clamp(6rem, 14vw, 11rem)" }}>
                04
              </span>
              <p className="text-white/25 text-sm font-sora font-semibold -mt-4 uppercase tracking-widest">
                pasos simples
              </p>
            </div>
          </motion.div>

          {/* Steps */}
          <div className="flex flex-col gap-0">
            {STEPS.map((step, i) => {
              const Icon = icons[i];
              const accent = accents[i];
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ ...spring, delay: i * 0.1 }}
                  className="group relative flex gap-6 pb-10"
                >
                  {/* Connector line */}
                  {i < STEPS.length - 1 && (
                    <div className="absolute left-6 top-14 bottom-0 w-px"
                      style={{ background: `linear-gradient(180deg, ${accent}40 0%, ${accents[i + 1]}20 100%)` }} />
                  )}

                  {/* Step icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={spring}
                    className="flex-none w-12 h-12 rounded-2xl flex items-center justify-center relative z-10 shadow-lg"
                    style={{
                      background: `${accent}18`,
                      border: `1.5px solid ${accent}35`,
                      boxShadow: `0 0 20px ${accent}15`,
                    }}
                  >
                    <Icon size={20} strokeWidth={1.8} color={accent} />
                  </motion.div>

                  <div className="pt-1.5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-sora font-extrabold text-[12px] uppercase tracking-widest"
                        style={{ color: accent }}>
                        Paso {step.num}
                      </span>
                    </div>
                    <h4 className="font-sora font-bold text-white text-[18px] mb-2 leading-snug">
                      {step.title}
                    </h4>
                    <p className="text-white/45 text-sm leading-[1.7]">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
