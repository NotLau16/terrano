"use client";
import { useState } from "react";
import { MapPin, ArrowUpRight, Compass, Factory, Info } from "lucide-react";
import { LOCATIONS, type LocationItem } from "./data";

export default function LocationMap() {
  const [activeId, setActiveId] = useState<string>("estudio");
  const current: LocationItem = LOCATIONS.find((l) => l.id === activeId) ?? LOCATIONS[0];

  return (
    <div className="space-y-4">
      {/* Selector tabs */}
      <div className="grid grid-cols-2 gap-2" role="tablist">
        {LOCATIONS.map((loc) => {
          const isActive = loc.id === activeId;
          const Icon = loc.id === "estudio" ? Compass : Factory;
          return (
            <button
              key={loc.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(loc.id)}
              className={`flex items-center justify-center gap-2 border p-3.5 text-left text-sm font-medium transition ${
                isActive
                  ? "border-navy bg-navy text-white shadow-sm"
                  : "border-navy/20 bg-white text-navy hover:border-clay hover:bg-sand/40"
              }`}
            >
              <Icon className={`h-4 w-4 shrink-0 ${isActive ? "text-clay" : "text-navy/60"}`} />
              <div className="truncate">
                <span className="block truncate font-semibold">{loc.name}</span>
                <span className={`block truncate text-xs ${isActive ? "text-white/70" : "text-navy/60"}`}>
                  {loc.area}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected location details */}
      <div className="border border-navy/15 bg-white p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-block bg-sand px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-clay">
                {current.badge}
              </span>
              <span className="text-xs text-navy/50">{current.area}</span>
            </div>
            <h4 className="mt-1.5 font-heading text-lg font-bold text-navy flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-clay shrink-0" />
              {current.address}
            </h4>
            <p className="mt-1 text-sm text-navy/70 leading-relaxed">{current.description}</p>
          </div>

          <a
            href={current.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-1.5 bg-clay px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-earth sm:self-start"
          >
            Abrir en Google Maps <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {current.note && (
          <div className="mt-3.5 flex items-center gap-2 border-t border-navy/10 pt-3 text-xs text-navy/65">
            <Info className="h-3.5 w-3.5 shrink-0 text-clay" />
            <span>{current.note}</span>
          </div>
        )}
      </div>

      {/* Map frame */}
      <div className="relative overflow-hidden border border-navy/15 bg-sand">
        <iframe
          key={current.id}
          title={`Ubicación de ${current.name}`}
          src={current.embedSrc}
          loading="lazy"
          className="h-64 w-full border-0"
        />
        <div className="bg-navy-deep/90 px-4 py-1.5 text-right text-[11px] text-white/60">
          Coordenadas exactas • Clic en &quot;Abrir en Google Maps&quot; para trazar ruta
        </div>
      </div>
    </div>
  );
}
