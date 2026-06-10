import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Pago Ágil — Agilizador Tecnológico",
  description:
    "Pago Ágil: transferencias, pagos de servicios, recargas y corresponsalía en Cali, Pasto, Ipiales y Bogotá.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${sora.variable} ${dmSans.variable}`}>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
