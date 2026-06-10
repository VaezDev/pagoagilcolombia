"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, MapPin, ShieldCheck, Clock } from "lucide-react";

const spring = { type: "spring", stiffness: 80, damping: 20 } as const;

function Counter({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

const stats = [
  { icon: TrendingUp, label: "Puntos Activos", target: 10, prefix: "+", suffix: "", accent: "#F5A623", desc: "y creciendo" },
  { icon: MapPin,     label: "Ciudades",       target: 4,  prefix: "",  suffix: "", accent: "#3B82F6", desc: "en Colombia" },
  { icon: ShieldCheck,label: "Transacciones",  target: 100,prefix: "",  suffix: "%",accent: "#10B981", desc: "seguras" },
  { icon: Clock,      label: "Disponibilidad", target: null,prefix: "",  suffix: "", accent: "#8B5CF6", desc: "siempre activo", display: "24/7" },
];

export default function Stats() {
  return (
    <section className="relative py-20 px-[5%] bg-white overflow-hidden">
      {/* Top separator */}
      <div className="absolute top-0 left-[5%] right-[5%] h-px bg-gradient-to-r from-transparent via-[#E8EDF8] to-transparent" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={spring}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ ...spring, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative group rounded-3xl border border-[#E8EDF8] bg-white p-7 overflow-hidden cursor-default"
              >
                {/* Hover glow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 pointer-events-none rounded-3xl"
                  style={{ background: `radial-gradient(ellipse at 50% 100%, ${s.accent}10 0%, transparent 70%)` }}
                />

                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${s.accent}12`, border: `1.5px solid ${s.accent}25` }}
                >
                  <Icon size={18} color={s.accent} strokeWidth={1.8} />
                </div>

                {/* Number */}
                <div className="font-sora font-extrabold leading-none mb-1"
                  style={{ fontSize: "clamp(2.4rem, 5vw, 3.2rem)", color: s.accent }}>
                  {s.target !== null
                    ? <Counter target={s.target!} prefix={s.prefix} suffix={s.suffix} />
                    : s.display}
                </div>

                <p className="font-sora font-bold text-navy text-sm mt-2">{s.label}</p>
                <p className="text-gray-text text-xs mt-0.5">{s.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
