"use client";

import { motion, type Variants } from "framer-motion";
import { PARTNERS } from "@/lib/constants";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const chip: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Partners() {
  return (
    <section className="py-16 px-[5%] bg-gray-soft">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="font-sora text-xs font-bold text-blue-500 uppercase tracking-[0.12em] mb-3.5 block">
          Ecosistema financiero
        </span>
        <h2 className="text-[clamp(1.6rem,3.5vw,2.6rem)] font-extrabold text-navy leading-snug mb-2">
          Bancos y plataformas{" "}
          <em className="not-italic text-blue-500">aliadas</em>
        </h2>
        <p className="text-[15px] text-gray-text text-center">
          Operamos con las principales entidades financieras y operadores de
          Colombia.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
      >
        {PARTNERS.map((name) => (
          <motion.div
            key={name}
            variants={chip}
            whileHover={{
              y: -3,
              borderColor: "#3B82F6",
              boxShadow: "0 8px 24px rgba(37,99,235,0.14)",
            }}
            className="flex items-center gap-2.5 bg-white border-[1.5px] border-[#E8EDF8] rounded-full px-5 py-3 font-sora text-sm font-bold text-navy cursor-default transition-colors duration-200"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://logo.clearbit.com/${name
                .toLowerCase()
                .replace(/ /g, "")
                .replace("bancolombia", "bancolombia.com")
                .replace("nequi", "nequi.com.co")
                .replace("daviplata", "daviplata.com")
                .replace("davivienda", "davivienda.com")
                .replace("bancodebogotá", "bancodebogota.com")
                .replace("bancodeoccidente", "bancodeoccidente.com.co")
                .replace("bancoagrario", "bancoagrario.gov.co")
                .replace("claro", "claro.com.co")
                .replace("movistar", "movistar.co")
                .replace("tigo", "tigo.com.co")
                .replace("wom", "wom.co")
                .replace("epm", "epm.com.co")
                .replace("emcali", "emcali.com.co")
                .replace("etb", "etb.com")}`}
              alt={name}
              className="w-5 h-5 object-contain rounded"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            {name}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
