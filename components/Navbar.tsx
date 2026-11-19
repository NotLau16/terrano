"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { InstagramIcon, Logo } from "./ui";
import { INSTAGRAM, links, wa } from "./data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 24);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 text-white transition-colors duration-300 ${scrolled || open ? "bg-navy-deep/85 backdrop-blur-md" : "bg-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <Logo />
          <span className="font-heading text-sm font-semibold tracking-wide">TERRANO <span className="font-normal text-white/60">| Diseño + Construcción</span></span>
        </a>
        <nav className="hidden gap-8 text-sm text-white/80 lg:flex" aria-label="Principal">
          {links.map(([l, h]) => <a key={h} href={h} className="transition hover:text-white">{l}</a>)}
        </nav>
        <div className="flex items-center gap-3">
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram de Terrano" className="hidden p-2 text-white/80 hover:text-white sm:block"><InstagramIcon /></a>
          <a href={wa()} target="_blank" rel="noopener noreferrer" className="hidden rounded-sm bg-clay px-4 py-2 text-sm font-medium transition hover:bg-earth sm:block">Pedir presupuesto</a>
          <button className="p-2 lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 px-5 pb-6 lg:hidden" aria-label="Móvil">
          {links.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="border-b border-white/10 py-3 text-lg">{l}</a>)}
          <a href={wa()} className="mt-4 rounded-sm bg-clay px-4 py-3 text-center font-medium">Pedir presupuesto</a>
        </nav>
      )}
    </header>
  );
}
