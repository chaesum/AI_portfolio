import {VISION_ATELIER_IMAGE, VISION_PILLARS} from '../data/portfolioData';
import {ResilientImage} from './ResilientImage';

export function VisionSection() {
  return (
    <section id="vision" className="w-full px-5 md:px-16 py-24 md:py-28 bg-surface">
      {/* Eyebrow & Asymmetric Intro Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-20 md:pb-28 border-b border-border-hairline">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary">
              01 · Introduction
            </span>
            <span className="h-px w-12 bg-secondary" aria-hidden="true" />
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-text-secondary">
              Visual Storyteller
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl lg:text-[72px] font-bold tracking-[-0.03em] text-primary uppercase leading-[1.05] text-balance">
            I CREATE
            <br />
            MEANINGFUL
            <br />
            VISUAL STORIES.
          </h2>

          <div className="space-y-4 pt-4 max-w-xl">
            <p className="text-lg text-primary font-medium leading-[1.7]">
              장면을 연결해 가치 있는 이야기를 짓고,
              <br />
              브랜드의 본질적인 메시지를 독창적인 감각과 움직임으로 전달합니다.
            </p>
            <p className="text-[15px] text-text-secondary leading-[1.7]">
              기획의 깊은 의도를 통찰하여 브랜드와 사람을 잇는 시각적 경험을 설계합니다. 표면적인 그래픽을 넘어, 브랜드를 둘러싼 철학과 시스템이 하나의 완성도 높은 서사로 작동하도록 디렉팅합니다.
            </p>
          </div>
        </div>

        {/* Artistic Landscape Frame */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <div className="relative w-full aspect-[4/3] bg-surface-container overflow-hidden group">
            <ResilientImage
              src={VISION_ATELIER_IMAGE}
              alt="Minimalist modern concrete gallery interior with pure architectural geometry and shafts of sunlight"
              fallbackLabel="Seoul Atelier · 2026"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/10 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none" />
            <div className="absolute bottom-4 left-4 bg-surface-container-low/95 backdrop-blur-sm px-3.5 py-1.5 border border-border-hairline">
              <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-primary">
                Seoul Atelier · 2026
              </span>
            </div>
          </div>

          <div className="flex justify-between items-baseline pt-2">
            <span className="text-[13px] font-medium uppercase tracking-[0.06em] text-text-secondary tabular-nums">
              [ Figure 01.1 ]
            </span>
            <span className="text-[11px] font-bold italic text-primary tracking-[0.06em]">
              &ldquo;More than just a visual.&rdquo;
            </span>
          </div>
        </div>
      </div>

      {/* MY VISION: 3 Column Monolith Cards */}
      <div className="pt-16">
        <div className="flex items-center justify-between pb-8">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-text-secondary">
            Core Pillars
          </span>
          <h3 className="font-display text-2xl md:text-[28px] tracking-tight font-bold text-primary">
            MY VISION
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-b border-border-hairline divide-y md:divide-y-0 md:divide-x divide-border-hairline">
          {VISION_PILLARS.map((pillar) => (
            <div
              key={pillar.index}
              className="p-8 md:p-10 flex flex-col justify-between hover:bg-surface-container-low transition-colors duration-200"
            >
              <div>
                <div className="flex items-center justify-between pb-8">
                  <span className="font-display text-[28px] font-bold text-secondary tabular-nums">
                    {pillar.index}
                  </span>
                  <span className="font-display text-[28px] text-primary" aria-hidden="true">
                    {pillar.symbol}
                  </span>
                </div>
                <h4 className="font-display text-[28px] font-bold tracking-tight text-primary uppercase pb-4">
                  {pillar.title}
                </h4>
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary pb-3">
                  {pillar.subtitle}
                </p>
                <p className="text-[15px] text-text-secondary leading-[1.65]">
                  {pillar.description}
                </p>
              </div>
              <div className="pt-8">
                <span className="text-[11px] font-bold text-text-secondary uppercase tracking-[0.14em]">
                  {pillar.tags}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
