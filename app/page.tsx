import { HardHat, Box, Sofa, Armchair, ClipboardList, Globe, Phone, ArrowUpRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import ContactForm from "@/components/ContactForm";
import LocationMap from "@/components/LocationMap";
import VideoSection from "@/components/VideoSection";
import { Img, Logo, Reveal, Topo, InstagramIcon, WhatsAppIcon } from "@/components/ui";
import { IMG, INSTAGRAM, MAPS_CANTERA, PHONE, links, services, wa } from "@/components/data";

const icons = { HardHat, Box, Sofa, Armchair, ClipboardList, Globe } as const;
const pillars = ["Arquitectura + Diseño", "Ingeniería y Obra", "Cantera Propia", "Bloques Ecológicos"];
const steps = [
  ["Consulta y relevamiento", "Escuchamos qué necesitás y relevamos el terreno o el espacio."],
  ["Diseño y renders 3D", "Proyectamos y te mostramos el resultado en 3D antes de construir."],
  ["Presupuesto optimizado", "Cotizamos con materiales propios y sin intermediarios."],
  ["Ejecución y entrega", "Construimos y entregamos con apoyo profesional pleno."],
];
const btn = "inline-block px-7 py-3.5 text-sm font-medium transition";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-navy text-white">
        <Img src={IMG.hero} alt="Vivienda de arquitectura moderna" className="absolute inset-0 h-full w-full opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy/70 to-navy/40" />
        <Topo />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-36 lg:px-8">
          <p className="inline-block border border-white/25 px-4 py-1.5 text-sm text-white/80">Estudio en Salta Capital • Cantera propia en San Lorenzo • Proyectos en todo el NOA</p>
          <h1 className="mt-6 max-w-4xl font-heading text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">Arquitectura, ingeniería y construcción bajo un mismo nombre.</h1>
          <p className="mt-6 max-w-xl text-lg text-white/75">Una familia unida en un solo proyecto. Soluciones integrales desde la cantera propia hasta la obra terminada.</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href={wa()} target="_blank" rel="noopener noreferrer" className={`${btn} bg-clay hover:bg-earth`}>Solicitar presupuesto</a>
            <a href="#proyectos" className={`${btn} border border-white/40 hover:bg-white/10`}>Ver diseños y obras</a>
            <a href="#presentacion" className="inline-flex items-center gap-2 text-sm font-medium text-white/85 transition hover:text-white underline underline-offset-4">
              ▶ Ver presentación con Lucas Soler
            </a>
          </div>
        </div>
        <div className="relative border-t border-white/15 bg-navy-deep/70 backdrop-blur">
          <ul className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => <li key={p} className="border-white/10 px-5 py-5 text-sm text-white/80 lg:px-8 [&:not(:last-child)]:lg:border-r">{p}</li>)}
          </ul>
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="bg-sand py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-12 lg:px-8">
          <Reveal className="lg:col-span-6">
            <h2 className="font-heading text-4xl font-bold leading-tight sm:text-5xl">Donde la familia se convierte en proyecto.</h2>
            <p className="mt-8 border-l-2 border-clay pl-5 text-xl leading-relaxed">Una desarrolladora nacida de la unión de quienes saben construir. Nos transformamos. Nos expandimos.</p>
            <p className="mt-6 max-w-xl leading-relaxed text-navy/80">Somos una familia que decidió unir sus caminos para crear algo más grande: arquitectura, diseño, ingeniería, materiales y obra trabajando juntos bajo un mismo nombre.</p>
            <p className="mt-4 max-w-xl leading-relaxed text-navy/80">Nuestros diseños van acorde a las necesidades de los comitentes, y también planteamos soluciones prácticas y estéticas.</p>
          </Reveal>
          <div className="relative lg:col-span-6">
            <Img src={IMG.about} alt="Arquitectura en piedra y madera" className="h-[28rem] w-full lg:ml-10 lg:w-[calc(100%-2.5rem)]" />
            <div className="relative -mt-12 ml-auto mr-4 max-w-xs bg-earth p-6 text-white lg:absolute lg:-bottom-8 lg:left-0 lg:mt-0">
              <p className="font-heading text-lg font-semibold">Una familia unida en un solo proyecto</p>
              <p className="mt-2 text-sm text-white/75">Diseño, ingeniería y obra, con un único interlocutor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO PRESENTACIÓN LUCAS SOLER */}
      <VideoSection />

      {/* SERVICIOS */}
      <section id="servicios" className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal><h2 className="max-w-2xl font-heading text-4xl font-bold sm:text-5xl">Todo lo que tu proyecto necesita, en un solo lugar.</h2></Reveal>
          <div className="mt-14 grid border-l border-t border-navy/15 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = icons[s.icon as keyof typeof icons];
              return (
                <article key={s.t} className="flex flex-col border-b border-r border-navy/15 p-8 transition hover:bg-sand">
                  <div className="flex items-start justify-between"><Icon className="h-8 w-8 text-clay" strokeWidth={1.4} /><span className="font-heading text-sm text-navy/40">{String(i + 1).padStart(2, "0")}</span></div>
                  <h3 className="mt-8 font-heading text-lg font-semibold">{s.t}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/70">{s.d}</p>
                  <a href={wa(`Hola Terrano Group, quisiera consultar por: ${s.t}.`)} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-clay hover:text-earth">Consultar <ArrowUpRight className="h-4 w-4" /></a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CANTERA */}
      <section id="cantera" className="relative overflow-hidden bg-navy py-24 text-white">
        <Topo />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <h2 className="font-heading text-5xl font-extrabold sm:text-6xl">La cantera es el origen.</h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/75">Además, contamos con cantera propia, de donde extraemos materiales para la construcción y donde producimos bloques de hormigón ecológicos.</p>
            <ul className="mt-8 space-y-4">
              {["Extracción directa de áridos", "Producción propia de bloques de hormigón ecológicos", "Mejoramos tu presupuesto: sin intermediarios"].map((t) => (
                <li key={t} className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-clay" />{t}</li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={wa("Hola Terrano Group, quisiera cotizar materiales de cantera / bloques ecológicos.")} target="_blank" rel="noopener noreferrer" className={`${btn} bg-clay hover:bg-earth`}>Cotizar materiales</a>
              <a href={MAPS_CANTERA} target="_blank" rel="noopener noreferrer" className={`${btn} border border-white/40 hover:bg-white/10 inline-flex items-center gap-1.5`}>Ubicación de cantera <ArrowUpRight className="h-4 w-4" /></a>
            </div>
          </Reveal>
          <Img src={IMG.quarry} alt="Obra y materiales de cantera" className="h-[26rem] w-full" />
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal><h2 className="mb-10 max-w-2xl font-heading text-4xl font-bold sm:text-5xl">Diseños y obras</h2></Reveal>
          <Portfolio />
        </div>
      </section>

      {/* METODOLOGÍA */}
      <section className="bg-sand py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal><h2 className="font-heading text-4xl font-bold sm:text-5xl">Así trabajamos.</h2></Reveal>
          <ol className="mt-14 grid gap-10 md:grid-cols-4">
            {steps.map(([t, d], i) => (
              <li key={t} className="border-t-2 border-clay pt-5">
                <span className="font-heading text-3xl font-bold text-clay">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-heading text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:px-8">
          <div className="space-y-6 lg:col-span-7">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-clay">Canales y ubicaciones</span>
              <h2 className="mt-2 font-heading text-4xl font-bold sm:text-5xl">Hablemos de tu proyecto.</h2>
              <p className="mt-3 leading-relaxed text-navy/70">
                Coordinemos una reunión en nuestro estudio de Salta Capital o consultanos por materiales directo desde la cantera en San Lorenzo.
              </p>
            </div>

            {/* Quick contact channels */}
            <div className="grid gap-3 sm:grid-cols-2">
              <a href={wa()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5 border border-navy/15 bg-white p-4 transition hover:border-clay">
                <span className="text-clay"><WhatsAppIcon className="h-6 w-6" /></span>
                <div><span className="block text-xs text-navy/60">WhatsApp directo</span><span className="font-semibold text-sm">{PHONE}</span></div>
              </a>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5 border border-navy/15 bg-white p-4 transition hover:border-clay">
                <span className="text-clay"><InstagramIcon className="h-6 w-6" /></span>
                <div><span className="block text-xs text-navy/60">Instagram</span><span className="font-semibold text-sm">@terranogroup</span></div>
              </a>
            </div>

            {/* Interactive two-location switcher with map */}
            <LocationMap />
          </div>

          <div className="lg:col-span-5">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative overflow-hidden bg-navy-deep py-14 text-white">
        <Topo />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-3"><Logo className="h-10 w-10" /><span className="font-heading font-semibold">TERRANO <span className="font-normal text-white/60">| Diseño + Construcción</span></span></div>
          <nav className="flex flex-wrap gap-6 text-sm text-white/70" aria-label="Pie">{links.map(([l, h]) => <a key={h} href={h} className="hover:text-white">{l}</a>)}</nav>
          <div className="flex gap-4">
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon /></a>
            <a href={wa()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><WhatsAppIcon /></a>
            <a href={`tel:+5493875934763`} aria-label="Llamar"><Phone className="h-5 w-5" /></a>
          </div>
        </div>
        <p className="relative mx-auto mt-10 max-w-7xl px-5 text-sm text-white/50 lg:px-8">© 2026 Terrano Group — Diseño + Construcción. Estudio en Salta Capital (Las Heras 1545) • Cantera en San Lorenzo.</p>
      </footer>

      <a href={wa()} target="_blank" rel="noopener noreferrer" aria-label="Escribir por WhatsApp" className="fixed bottom-5 right-5 z-40 rounded-full bg-[#25D366] p-3.5 text-white shadow-lg transition hover:scale-105"><WhatsAppIcon className="h-6 w-6" /></a>
    </main>
  );
}
