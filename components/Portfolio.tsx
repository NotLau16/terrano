"use client";
import { useEffect, useState } from "react";
import { X, MapPin } from "lucide-react";
import { Img } from "./ui";
import { projects, wa, type Project } from "./data";

const filters = [["all", "Todos"], ["3d", "Diseños 3D"], ["int", "Interiores"], ["obra", "Obras"]] as const;

export default function Portfolio() {
  const [f, setF] = useState<string>("all");
  const [sel, setSel] = useState<Project | null>(null);
  const list = projects.filter((p) => f === "all" || p.cat === f);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && setSel(null);
    document.body.style.overflow = sel ? "hidden" : "";
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [sel]);
  return (
    <>
      <div className="flex flex-wrap gap-2" role="tablist">
        {filters.map(([k, l]) => (
          <button key={k} role="tab" aria-selected={f === k} onClick={() => setF(k)}
            className={`border px-4 py-2 text-sm transition ${f === k ? "border-navy bg-navy text-white" : "border-navy/20 hover:border-navy"}`}>{l}</button>
        ))}
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <button key={p.id} onClick={() => setSel(p)} className={`group relative overflow-hidden text-left ${p.featured && f === "all" ? "lg:col-span-2" : ""}`}>
            <Img src={p.img} alt={p.title} className="aspect-[4/3] w-full transition duration-700 group-hover:scale-105 lg:aspect-auto lg:h-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
              {p.featured && <span className="mb-2 inline-block bg-clay px-2 py-0.5 text-xs">Proyecto destacado</span>}
              <h3 className="font-heading text-lg font-semibold">{p.title}</h3>
              <p className="text-sm text-white/70">{p.place}</p>
            </div>
          </button>
        ))}
      </div>
      {sel && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-deep/80 p-4 backdrop-blur-sm" onClick={() => setSel(null)} role="dialog" aria-modal="true" aria-label={sel.title}>
          <div className="relative grid max-h-[92vh] w-full max-w-4xl overflow-auto bg-white md:grid-cols-2" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSel(null)} aria-label="Cerrar" className="absolute right-3 top-3 z-10 bg-white/90 p-2"><X className="h-5 w-5" /></button>
            <Img src={sel.img} alt={sel.title} className="h-64 w-full md:h-full" />
            <div className="p-8">
              <p className="flex items-center gap-1 text-sm text-clay"><MapPin className="h-4 w-4" />{sel.place}</p>
              <h3 className="mt-2 font-heading text-2xl font-bold">{sel.title}</h3>
              <p className="mt-4 leading-relaxed text-navy/80">{sel.desc}</p>
              <ul className="mt-5 flex flex-wrap gap-2">{sel.tags.map((t) => <li key={t} className="border border-navy/20 px-3 py-1 text-xs">{t}</li>)}</ul>
              <a href={wa(`Hola Terrano Group, vi el proyecto "${sel.title}" (${sel.place}) y quisiera consultar por un proyecto similar.`)} target="_blank" rel="noopener noreferrer"
                className="mt-8 inline-block bg-clay px-6 py-3 text-sm font-medium text-white transition hover:bg-earth">Consultar por un proyecto similar</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
