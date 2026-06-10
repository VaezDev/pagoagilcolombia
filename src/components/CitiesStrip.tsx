"use client";

import { motion } from "framer-motion";
import { STRIP_ITEMS } from "@/lib/constants";

const items = [...STRIP_ITEMS, ...STRIP_ITEMS];

export default function CitiesStrip() {
  return (
    <div className="bg-gold overflow-hidden py-3.5">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="flex items-center gap-0 whitespace-nowrap"
      >
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="font-bold text-[13px] text-navy px-4 font-sora">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-navy/40 mx-1" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
