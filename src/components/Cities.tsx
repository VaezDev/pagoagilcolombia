"use client";

import { motion, type Variants } from "framer-motion";
import { CITIES } from "@/lib/constants";
import { CheckCircle, Clock, Rocket } from "lucide-react";

const spring = { type: "spring", stiffness: 80, damping: 20 } as const;

const cityIcons = ["🌇", "🏔️", "🌉", "🏙️"];
const badgeIcons = [CheckCircle, CheckCircle, CheckCircle, Rocket];
const badgeColors = ["#10B981", "#10B981", "#10B981", "#F5A623"];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } },
};

export default function Cities() {
  return (
    <section id="ciudades" className="py-24 px-[5%] bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
          {/* Left label */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={spring}
            className="lg:sticky lg:top-28"
          >
            <span className="inline-block font-sora text-[11px] font-bold text-blue-500 uppercase tracking-[0.18em] mb-4 px-3 py-1 bg-blue-500/[0.08] rounded-full">
              Cobertura
            </span>
            <h2 className="font-sora font-extrabold text-navy leading-[1.1] mt-3"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
              Presente en{" "}
              <span className="text-gradient-blue">4 ciudades</span>
            </h2>
            <p className="text-gray-text text-base leading-relaxed mt-4 max-w-xs">
              Nuestra red continúa expandiéndose para llevarte servicios financieros accesibles.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-sm font-sora font-semibold text-gray-text">
                <Clock size={14} className="text-blue-500" />
                Red en crecimiento
              </div>
            </div>
          </motion.div>

          {/* Cards grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {CITIES.map((c, i) => {
              const BadgeIcon = badgeIcons[i];
              const badgeColor = badgeColors[i];
              return (
                <motion.div
                  key={c.name}
                  variants={card}
                  whileHover={{ y: -5, boxShadow: "0 20px 60px rgba(13,27,62,0.10)" }}
                  transition={spring}
                  className="group relative bg-white border border-[#E8EDF8] rounded-3xl p-7 overflow-hidden cursor-default"
                >
                  {/* Gradient corner glow */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at 100% 0%, ${badgeColor}08 0%, transparent 60%)` }}
                  />

                  <div className="flex items-start justify-between mb-5">
                    <span className="text-4xl">{cityIcons[i]}</span>
                    <div
                      className="flex items-center gap-1.5 text-xs font-sora font-bold px-3 py-1 rounded-full"
                      style={{ background: `${badgeColor}12`, color: badgeColor, border: `1px solid ${badgeColor}25` }}
                    >
                      <BadgeIcon size={11} strokeWidth={2.5} />
                      {c.badge}
                    </div>
                  </div>

                  <h3 className="font-sora font-extrabold text-navy text-2xl mb-2">{c.name}</h3>
                  <p className="text-gray-text text-sm leading-[1.65]">{c.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
