"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { WHATSAPP_URL } from "@/lib/constants";

const footerServices = [
  "Transferencias",
  "Pagos de servicios",
  "Recargas",
  "Corresponsalía",
];

const footerCompany = [
  { label: "¿Cómo funciona?", href: "#como-funciona" },
  { label: "Ciudades", href: "#ciudades" },
  { label: "Ser corresponsal", href: "#corresponsal" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <>
      <footer className="bg-[#080F22] px-[5%] pt-12 pb-7">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 pb-8 border-b border-white/[0.07] mb-6">
            {/* Brand */}
            <div>
              <Image
                src="/logo-pago-agil.png"
                alt="Pago Ágil"
                width={110}
                height={44}
                style={{ height: 44, width: "auto", objectFit: "contain", marginBottom: 14 }}
              />
              <p className="text-[13px] text-white/40 leading-[1.7] max-w-[280px]">
                Agilizador tecnológico presente en Cali, Pasto, Ipiales y
                Bogotá. Pagos, transferencias y corresponsalía bancaria al
                alcance de todos.
              </p>
            </div>

            {/* Servicios */}
            <div>
              <h5 className="font-sora text-[13px] font-bold text-white/60 uppercase tracking-[0.1em] mb-4">
                Servicios
              </h5>
              {footerServices.map((s) => (
                <a
                  key={s}
                  href="#servicios"
                  className="block text-[13px] text-white/40 no-underline mb-2.5 hover:text-gold transition-colors duration-200"
                >
                  {s}
                </a>
              ))}
            </div>

            {/* Empresa */}
            <div>
              <h5 className="font-sora text-[13px] font-bold text-white/60 uppercase tracking-[0.1em] mb-4">
                Empresa
              </h5>
              {footerCompany.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="block text-[13px] text-white/40 no-underline mb-2.5 hover:text-gold transition-colors duration-200"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center flex-wrap gap-2.5">
            <p className="text-[12px] text-white/25">
              © 2024 Pago Ágil. Todos los derechos reservados.
            </p>
            <p className="text-[12px] text-white/25">
              Hecho con <span className="text-gold">♥</span> en Colombia
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp float */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.12, boxShadow: "0 12px 40px rgba(37,211,102,0.55)" }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-[200] w-[58px] h-[58px] bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_6px_24px_rgba(37,211,102,0.4)] no-underline"
        title="Escríbenos por WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[30px] h-[30px] fill-white"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </motion.a>
    </>
  );
}
