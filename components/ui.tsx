"use client";
import { useEffect, useRef, useState } from "react";

export const InstagramIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
    <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
  </svg>
);
export const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.200Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.700 6.700 0 0 1-3.300-2.900c-.2-.4.2-.4.700-1.300.1-.2 0-.3 0-.5l-.8-1.800c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.300-.2.300-.9.900-.9 2.200s.9 2.500 1.100 2.700c.1.200 1.800 2.800 4.400 3.900 1.600.7 2.300.8 3.100.6.500-.1 1.500-.6 1.700-1.200.2-.6.2-1.100.1-1.200-.1-.1-.2-.2-.5-.3Z" />
  </svg>
);

export function Logo({ className = "h-9 w-9" }: { className?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed)
    return (
      <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-label="Terrano">
        <path d="M6 34V20a14 14 0 0 1 28 0v14" /><path d="M13 34V22a7 7 0 0 1 14 0v12" /><path d="M3 34h34" />
      </svg>
    );
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/logo-terrano.png" alt="Terrano" className={`${className} object-contain`} onError={() => setFailed(true)} />;
}

export function Img({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const [ok, setOk] = useState(true);
  // eslint-disable-next-line @next/next/no-img-element
  return ok ? <img src={src} alt={alt} loading="lazy" onError={() => setOk(false)} className={`object-cover ${className}`} /> : <div role="img" aria-label={alt} className={`bg-navy ${className}`} />;
}

export function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

export function Topo({ className = "" }: { className?: string }) {
  const rings = Array.from({ length: 14 }, (_, i) => {
    const r = 40 + i * 34;
    return <path key={i} d={`M${600 - r * 1.5} ${300 + Math.sin(i) * 14} C ${600 - r} ${300 - r * 0.9}, ${600 + r * 0.6} ${300 - r * 1.1}, ${600 + r * 1.4} ${300 - 10 + i * 3} S ${600 + r} ${300 + r}, ${600 - r * 0.2} ${300 + r * 0.8} S ${600 - r * 1.5} ${300 + r * 0.4}, ${600 - r * 1.5} ${300 + Math.sin(i) * 14}Z`} />;
  });
  return (
    <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" aria-hidden className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} fill="none" stroke="#fff" strokeOpacity="0.07" strokeWidth="1.2">
      {rings}
    </svg>
  );
}
