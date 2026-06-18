import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orange Coffee & Laundry",
  description: "Lavandería, cafetería, servicio a domicilio y Orange Puntos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
