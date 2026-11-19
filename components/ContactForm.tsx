"use client";
import { useState } from "react";
import { wa } from "./data";
import { WhatsAppIcon } from "./ui";

const opts = ["Proyección y ejecución de obra", "Renderizado 3D", "Diseño de interiores", "Mobiliario a medida", "Materiales, relevamiento y planos", "Asesoría online", "Materiales de cantera / bloques", "Otro"];
const field = "w-full border border-navy/20 bg-white px-4 py-3 outline-none focus:border-clay";

export default function ContactForm() {
  const [v, setV] = useState({ nombre: "", localidad: "", servicio: opts[0], detalle: "" });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setV({ ...v, [k]: e.target.value });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola Terrano Group, quisiera pedir un presupuesto.\n\nNombre: ${v.nombre}\nLocalidad: ${v.localidad}\nServicio de interés: ${v.servicio}\nDetalle del proyecto: ${v.detalle || "A definir"}`;
    window.open(wa(msg), "_blank", "noopener,noreferrer");
  };
  return (
    <form onSubmit={submit} className="space-y-4 bg-sand p-6 sm:p-8">
      <h3 className="font-heading text-xl font-bold">Contanos tu proyecto</h3>
      <label className="block text-sm">Nombre<input required className={field} value={v.nombre} onChange={set("nombre")} /></label>
      <label className="block text-sm">Localidad<input required className={field} value={v.localidad} onChange={set("localidad")} /></label>
      <label className="block text-sm">Servicio de interés<select className={field} value={v.servicio} onChange={set("servicio")}>{opts.map((o) => <option key={o}>{o}</option>)}</select></label>
      <label className="block text-sm">Detalle del proyecto<textarea rows={4} className={field} value={v.detalle} onChange={set("detalle")} /></label>
      <button className="flex w-full items-center justify-center gap-2 bg-clay px-6 py-3 font-medium text-white transition hover:bg-earth"><WhatsAppIcon />Enviar por WhatsApp</button>
    </form>
  );
}
