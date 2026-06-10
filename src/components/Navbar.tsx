"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";

const spring = { type: "spring", stiffness: 300, damping: 30 } as const;

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#ciudades", label: "Ciudades" },
  { href: "#corresponsal", label: "Corresponsal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 30);
    setHidden(latest > prev && latest > 120);
  });

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: hidden ? -90 : 0, opacity: 1 }}
        transition={spring}
        className={`fixed top-0 left-0 right-0 z-50 h-[68px] flex items-center justify-between px-[5%] transition-all duration-300 ${
          scrolled
            ? "bg-navy-deep/90 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_40px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <motion.a
          href="#"
          whileHover={{ opacity: 0.85 }}
          className="flex items-center no-underline"
        >
          <Image
            src="/logo-pago-agil.png"
            alt="Pago Ágil"
            width={120}
            height={48}
            style={{ height: 44, width: "auto", objectFit: "contain" }}
            priority
          />
        </motion.a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <motion.a
                href={l.href}
                whileHover={{ color: "#F5A623" }}
                className="relative text-white/60 no-underline text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/[0.05] transition-colors duration-200 block"
              >
                {l.label}
              </motion.a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <motion.a
            href="https://wa.me/573246079259"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={spring}
            className="flex items-center gap-2 bg-gold text-navy font-sora font-bold text-sm px-5 py-2.5 rounded-full shadow-[0_4px_20px_rgba(245,166,35,0.3)] hover:shadow-[0_6px_28px_rgba(245,166,35,0.45)] hover:bg-gold-light transition-shadow duration-200 no-underline"
          >
            <MessageCircle size={14} strokeWidth={2.5} />
            Contáctanos
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          transition={spring}
          className="md:hidden text-white/80 p-2 rounded-lg hover:bg-white/[0.08] transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span key="close" initial={{ rotate: -45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 45, opacity: 0 }} transition={{ duration: 0.15 }}>
                <X size={22} />
              </motion.span>
            ) : (
              <motion.span key="open" initial={{ rotate: 45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -45, opacity: 0 }} transition={{ duration: 0.15 }}>
                <Menu size={22} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 35 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-navy-deep border-l border-white/[0.08] flex flex-col pt-20 pb-8 px-6 md:hidden"
            >
              <nav className="flex flex-col gap-1 flex-1">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, type: "spring", stiffness: 300, damping: 30 }}
                    onClick={() => setOpen(false)}
                    className="text-white/70 no-underline text-base font-medium py-3.5 px-4 rounded-xl hover:bg-white/[0.06] hover:text-white transition-colors"
                  >
                    {l.label}
                  </motion.a>
                ))}
              </nav>
              <motion.a
                href="https://wa.me/573246079259"
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 300, damping: 30 }}
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 bg-gold text-navy font-sora font-bold py-4 rounded-full no-underline hover:bg-gold-light transition-colors"
              >
                <MessageCircle size={16} strokeWidth={2.5} />
                Contáctanos por WhatsApp
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
