import {HERO_ATMOSPHERE_IMAGE} from '../data/portfolioData';
import {ResilientImage} from './ResilientImage';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[calc(100vh-5rem)] flex flex-col justify-between px-5 md:px-16 pt-12 md:pt-16 pb-8 overflow-hidden bg-surface-container-low"
    >
      {/* Atmospheric Visual Underlay */}
      <div className="absolute inset-0 z-0 opacity-25 mix-blend-multiply pointer-events-none">
        <ResilientImage
          src={HERO_ATMOSPHERE_IMAGE}
          alt="Cinematic atmospheric mountain dawn landscape with misty fog and muted olive charcoal hues"
          fallbackLabel="Atmospheric Dawn"
          loading="eager"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Top Meta Row */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-2 border-b border-border-hairline pb-4">
        <span className="text-[11px] font-bold uppercase text-text-secondary tracking-[0.14em]">
          Seoul · Creative Direction · Edition 2026
        </span>
        <span className="text-[13px] font-semibold uppercase tracking-[0.06em] text-primary">
          [ HGD · Portfolio Archive ]
        </span>
      </div>

      {/* Monumental Hero Statement */}
      <div className="relative z-10 py-16 md:py-24 my-auto">
        <div className="max-w-5xl">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary mb-4 block">
            Brand · Motion · Visual Storyteller
          </span>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-[120px] xl:text-[128px] font-bold tracking-[-0.04em] uppercase text-primary leading-[0.92] text-balance">
            HONG GIL DONG
          </h1>
          <div className="mt-6 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-5">
            <p className="font-display text-xl sm:text-2xl md:text-[28px] tracking-tight text-on-surface-variant font-medium">
              홍길동 — Brand &amp; Visual Designer
            </p>
            <span className="hidden sm:inline text-xl text-secondary" aria-hidden="true">
              /
            </span>
            <p className="text-[13px] font-medium uppercase tracking-[0.06em] text-text-secondary">
              Portfolio 2026 Archive
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Indicator */}
      <div className="relative z-10 flex items-end justify-between pt-6 border-t border-border-hairline">
        <a
          href="#vision"
          className="group inline-flex items-center gap-4 py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <span className="w-8 h-px bg-primary transition-all duration-200 group-hover:w-12" />
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-text-secondary group-hover:text-primary transition-colors">
            Scroll to explore ↓
          </span>
        </a>
        <div className="text-right">
          <span className="text-[13px] font-medium tracking-[0.05em] text-text-secondary tabular-nums block">
            37.5665° N · 126.9780° E
          </span>
        </div>
      </div>
    </section>
  );
}
