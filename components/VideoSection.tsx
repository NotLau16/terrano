"use client";
import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, ShieldCheck, Sparkles, ArrowUpRight } from "lucide-react";
import { Topo } from "./ui";
import { wa } from "./data";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section id="presentacion" className="relative overflow-hidden bg-navy py-24 text-white">
      <Topo />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          {/* Left / Info Column */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 border border-clay/50 bg-clay/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-clay">
              <Sparkles className="h-3.5 w-3.5 text-clay" />
              Video de presentación
            </span>

            <h2 className="mt-4 font-heading text-4xl font-extrabold leading-tight sm:text-5xl">
              La visión detrás de Terrano Group.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/80">
              <strong className="text-white font-semibold">Lucas Soler</strong>, uno de los socios fundadores,
              te cuenta en primera persona el origen de Terrano: cómo decidimos unir arquitectura, ingeniería,
              cantera propia y obra terminada bajo un mismo nombre familiar en Salta.
            </p>

            <div className="mt-8 space-y-4 border-l-2 border-clay/40 pl-5">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-clay" />
                <div>
                  <h4 className="font-heading font-semibold text-white">Un único interlocutor de punta a punta</h4>
                  <p className="text-sm text-white/70">
                    Desde el primer render 3D hasta la entrega de llave en mano, el mismo equipo técnico responde por tu proyecto.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-clay" />
                <div>
                  <h4 className="font-heading font-semibold text-white">Cantera propia y materiales directos</h4>
                  <p className="text-sm text-white/70">
                    Extracción de áridos y bloques de hormigón ecológicos en San Lorenzo, eliminando costos de intermediarios.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={wa("Hola Lucas y equipo de Terrano Group, vi el video de presentación y quisiera coordinar una consulta.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-clay px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-earth"
              >
                Hablar con Lucas y el equipo <ArrowUpRight className="h-4 w-4" />
              </a>
              <button
                type="button"
                onClick={togglePlay}
                className="inline-flex items-center gap-2 border border-white/30 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/10"
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 fill-white" />}
                {isPlaying ? "Pausar video" : "Reproducir video"}
              </button>
            </div>
          </div>

          {/* Right / Video Column */}
          <div className="flex justify-center lg:col-span-5">
            <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border-4 border-white/10 bg-navy-deep shadow-2xl ring-1 ring-white/10">
              {/* Top bar styling like phone / camera */}
              <div className="flex items-center justify-between border-b border-white/10 bg-navy-deep/90 px-4 py-2.5 text-xs text-white/70 backdrop-blur">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-clay animate-pulse" />
                  <span className="font-semibold text-white">Lucas Soler</span>
                </div>
                <span className="text-[11px] text-white/60">Socio Fundador • Terrano Group</span>
              </div>

              {/* Video wrapper */}
              <div className="relative aspect-[9/16] w-full bg-black">
                <video
                  ref={videoRef}
                  src="/terrano-presentacion.mp4"
                  poster="/terrano-presentacion-poster.jpg"
                  playsInline
                  controls
                  preload="metadata"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  className="h-full w-full object-cover"
                />

                {/* Initial play overlay if not playing */}
                {!isPlaying && (
                  <div
                    onClick={togglePlay}
                    className="absolute inset-0 flex cursor-pointer flex-col items-center justify-center bg-navy-deep/40 transition hover:bg-navy-deep/30"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-clay text-white shadow-2xl transition duration-300 hover:scale-110 hover:bg-earth">
                      <Play className="ml-1 h-7 w-7 fill-white" />
                    </div>
                    <span className="mt-4 rounded-full bg-navy-deep/80 px-4 py-1.5 text-xs font-medium text-white backdrop-blur">
                      Ver mensaje de Lucas Soler
                    </span>
                  </div>
                )}
              </div>

              {/* Bottom footer badge */}
              <div className="border-t border-white/10 bg-navy-deep/90 p-3 text-center text-xs text-white/75">
                Arquitectura, ingeniería y construcción • Salta & NOA
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
