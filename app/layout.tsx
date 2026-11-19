import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", weight: ["400", "500", "600", "700", "800"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const title = "Terrano Group — Diseño + Construcción";
const description = "Arquitectura, ingeniería y construcción bajo un mismo nombre. Estudio en Salta Capital y cantera propia en la entrada de San Lorenzo. Proyectos en todo el NOA.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title, description,
  icons: { icon: "/logo-terrano.png", apple: "/logo-terrano.png" },
  openGraph: { title, description, type: "website", locale: "es_AR", siteName: "Terrano Group", images: [{ url: "/logo-terrano.png", alt: "Terrano Group" }] },
  twitter: { card: "summary", title, description, images: ["/logo-terrano.png"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
