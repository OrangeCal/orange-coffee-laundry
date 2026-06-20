import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orange Coffee & Laundry",
  description: "Visítanos en nuestras sucursales y disfruta una experiencia rápida, cómoda y agradable.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
