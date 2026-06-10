"use client";

import { motion, type Variants } from "framer-motion";
import { PARTNERS } from "@/lib/constants";

const spring = { type: "spring", stiffness: 80, damping: 20 } as const;

const partnerDomains: Record<string, string> = {
  "Bancolombia": "bancolombia.com",
  "Nequi": "nequi.com.co",
  "Daviplata": "daviplata.com",
  "Davivienda": "davivienda.com",
  "Banco de Bogotá": "bancodebogota.com",
  "Banco de Occidente": "bancodeoccidente.com.co",
  "Banco Agrario": "bancoagrario.gov.co",
  "Claro": "claro.com.co",
  "Movistar": "movistar.co",
  "Tigo": "tigo.com.co",
  "WOM": "wom.co",
  "EPM": "epm.com.co",
  "EMCALI": "emcali.com.co",
  "ETB": "etb.com",
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const chip: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 20 } },
};

export default function Partners() {
  return (
    <section className="py-20 px-[5%] bg-[#F8FAFF]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={spring}
          className="text-center mb-12"
        >
          <span className="inline-block font-sora text-[11px] font-bold text-blue-500 uppercase tracking-[0.18em] mb-4 px-3 py-1 bg-blue-500/[0.08] rounded-full">
            Ecosistema financiero
          </span>
          <h2 className="font-sora font-extrabold text-navy leading-snug mt-3"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
            Bancos y plataformas{" "}
            <span className="text-gradient-blue">aliadas</span>
          </h2>
          <p className="text-gray-text text-base mt-3 max-w-md mx-auto leading-relaxed">
            Operamos con las principales entidades financieras y operadores de Colombia.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-wrap justify-center gap-3"
        >
          {PARTNERS.map((name) => (
            <motion.div
              key={name}
              variants={chip}
              whileHover={{ y: -3, scale: 1.04, borderColor: "#3B82F6", boxShadow: "0 8px 28px rgba(37,99,235,0.12)" }}
              transition={spring}
              className="flex items-center gap-2.5 bg-white border border-[#E8EDF8] rounded-full px-5 py-2.5 font-sora text-sm font-bold text-navy cursor-default shadow-sm transition-colors duration-200"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://logo.clearbit.com/${partnerDomains[name]}`}
                alt={name}
                className="w-5 h-5 object-contain rounded"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
              {name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
