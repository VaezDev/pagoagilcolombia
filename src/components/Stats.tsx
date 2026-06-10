"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function Counter({
  target,
  prefix = "",
  suffix = "",
}: {
  target: number;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { label: "Puntos Activos", target: 10, prefix: "+", suffix: "" },
  { label: "Ciudades", target: 4, prefix: "", suffix: "" },
  { label: "Transacciones Seguras", target: 100, prefix: "", suffix: "%" },
  { label: "Disponible", target: null, display: "24/7" },
];

export default function Stats() {
  return (
    <section className="relative py-16 px-[5%] bg-gradient-to-br from-blue-500 to-blue overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-wrap justify-center max-w-3xl mx-auto"
      >
        {stats.map((s, i) => (
          <div key={s.label} className="relative flex-1 min-w-[140px] text-center px-6 py-5">
            {/* Divider */}
            {i < stats.length - 1 && (
              <div className="absolute right-0 top-[20%] bottom-[20%] w-px bg-white/20 hidden sm:block" />
            )}
            <div className="font-extrabold text-[clamp(2rem,4vw,3rem)] text-white leading-none mb-2 font-sora">
              {s.target !== null ? (
                <Counter target={s.target!} prefix={s.prefix} suffix={s.suffix} />
              ) : (
                <>
                  {s.display?.replace("/7", "")}
                  <span className="text-[1.4rem] text-white/60">/7</span>
                </>
              )}
            </div>
            <div className="text-[13px] text-white/65 uppercase tracking-widest font-medium">
              {s.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
