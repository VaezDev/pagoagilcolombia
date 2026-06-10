"use client";

import { motion } from "framer-motion";

const items = [
  "Cali", "Pasto", "Ipiales", "Bogotá",
  "Transferencias", "Pagos de Servicios", "Recargas", "Corresponsalía",
  "Cali", "Pasto", "Ipiales", "Bogotá",
  "Transferencias", "Pagos de Servicios", "Recargas", "Corresponsalía",
];

export default function CitiesStrip() {
  return (
    <div className="relative bg-gold overflow-hidden py-3.5">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="flex items-center whitespace-nowrap"
      >
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="font-sora font-bold text-[13px] text-navy px-5 tracking-wide">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-navy/30" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
