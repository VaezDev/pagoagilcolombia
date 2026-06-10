"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PUNTOS } from "@/lib/constants";

export default function Puntos() {
  return (
    <section id="puntos-atencion" className="py-20 bg-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 px-[5%]"
      >
        <span className="font-sora text-xs font-bold text-blue-500 uppercase tracking-[0.12em] mb-3.5 block">
          Visítanos
        </span>
        <h2 className="text-[clamp(1.6rem,3.5vw,2.6rem)] font-extrabold text-navy leading-snug mb-4">
          Nuestros puntos de{" "}
          <em className="not-italic text-blue-500">atención</em>
        </h2>
        <p className="text-base text-gray-text max-w-lg mx-auto leading-[1.7]">
          Encuentra tu corresponsal Pago Ágil más cercano. Desliza para ver
          nuestras ubicaciones principales.
        </p>
      </motion.div>

      {/* Horizontal scroll carousel */}
      <div className="flex gap-6 overflow-x-auto px-[5%] pb-10 snap-x snap-mandatory scroll-smooth [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {PUNTOS.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            whileHover={{ y: -6, boxShadow: "0 14px 40px rgba(13,27,62,0.12)" }}
            className="flex-none w-[320px] max-[480px]:w-[85vw] bg-white border-[1.5px] border-[#E8EDF8] rounded-2xl overflow-hidden snap-center"
          >
            {p.image ? (
              <div className="relative w-full h-[200px]">
                <Image src={p.image} alt={p.name} fill className="object-cover" />
              </div>
            ) : (
              <div className="w-full h-[200px] bg-navy-mid flex items-center justify-center text-white/30 text-lg font-semibold">
                Foto próximamente
              </div>
            )}
            <div className="p-6">
              <span className="inline-block bg-blue-500/10 text-blue-500 text-xs font-bold px-3.5 py-1.5 rounded-full mb-3">
                {p.city}
              </span>
              <h3 className="text-[18px] font-bold text-navy mb-3.5">
                {p.name}
              </h3>
              <p className="text-sm text-gray-text leading-[1.6] mb-2">
                <strong>📍 Dirección:</strong> {p.address}
              </p>
              <p className="text-sm text-gray-text leading-[1.6]">
                <strong>🕒 Horario:</strong> {p.hours}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
