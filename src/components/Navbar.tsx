"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#como-funciona", label: "¿Cómo funciona?" },
  { href: "#ciudades", label: "Ciudades" },
  { href: "#corresponsal", label: "Corresponsal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] h-[68px] transition-all duration-300 ${
          scrolled
            ? "bg-navy/98 shadow-lg shadow-black/20"
            : "bg-navy/95"
        } backdrop-blur-md border-b border-white/[0.06]`}
        style={{ "--tw-bg-opacity": 1 } as React.CSSProperties}
      >
        <a href="#" className="flex items-center gap-2.5 no-underline">
          <Image
            src="/logo-pago-agil.png"
            alt="Pago Ágil"
            width={120}
            height={48}
            style={{ height: 48, width: "auto", objectFit: "contain" }}
            priority
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-white/75 no-underline text-sm font-medium hover:text-gold transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contacto"
              className="bg-gold text-navy font-bold text-sm px-5 py-2.5 rounded-full hover:bg-gold-light transition-all duration-200 hover:-translate-y-0.5 no-underline"
            >
              Contáctanos
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1.5 cursor-pointer bg-transparent border-none"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white rounded-sm"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-white rounded-sm"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white rounded-sm"
          />
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="fixed top-[68px] left-0 right-0 z-40 bg-navy flex flex-col px-[5%] py-6 gap-5 border-b border-white/[0.08] md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={closeMenu}
                className="text-white/80 no-underline text-base font-medium py-2.5 border-b border-white/[0.07] hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={closeMenu}
              className="bg-gold text-navy text-center font-bold py-3.5 rounded-full mt-2 no-underline hover:bg-gold-light transition-colors"
            >
              📲 Contáctanos
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
