import {
  CERTIFICATIONS_LIST,
  DISCIPLINE_METRICS,
  EXPERIENCE_TIMELINE,
  PORTRAIT_IMAGE,
  TOOLS_LIST,
} from '../data/portfolioData';
import {ResilientImage} from './ResilientImage';

export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full px-5 md:px-16 py-24 md:py-28 bg-surface border-t border-border-hairline"
    >
      {/* Header Row */}
      <div className="flex items-center gap-3 pb-8">
        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary">
          03 · Biography
        </span>
        <span className="h-px w-12 bg-secondary" aria-hidden="true" />
        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-text-secondary">
          Get to know me
        </span>
      </div>

      {/* Asymmetric About Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Portrait & Core Motto */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="relative w-full aspect-[4/5] bg-surface-container overflow-hidden">
            <ResilientImage
              src={PORTRAIT_IMAGE}
              alt="Editorial portrait of Korean creative art director Hong Gil Dong in a minimalist studio"
              fallbackLabel="Hong Gil Dong"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-6 text-on-primary">
              <p className="font-display text-2xl md:text-[28px] font-bold tracking-tight">
                홍길동 (Hong Gil Dong)
              </p>
              <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-secondary-fixed mt-1">
                Lead Visual &amp; Motion Director
              </p>
            </div>
          </div>

          <div className="p-6 bg-surface-container-low border border-border-hairline space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary block">
              Core Motto
            </span>
            <p className="font-display text-xl text-primary font-medium italic leading-snug">
              &ldquo;장면을 연결해 브랜드의 미래를 그립니다.&rdquo;
            </p>
            <p className="text-[13px] text-text-secondary leading-relaxed">
              단순히 시각적인 결과물에 그치지 않고, 클라이언트의 비전이 살아 숨 쉬는 구조적 시각 언어를 설계합니다.
            </p>
          </div>
        </div>

        {/* Right Column: Narrative, Tools, Metrics, Timeline */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-12">
          <div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-[72px] font-bold tracking-[-0.03em] uppercase text-primary leading-[1.05]">
              I SHAPE STORIES.
            </h2>

            <div className="mt-6 space-y-4">
              <h3 className="font-display text-2xl md:text-[28px] font-semibold text-primary tracking-tight">
                Who Tells Your Story? / 누가 당신의 이야기를 전하는가?
              </h3>
              <p className="text-base md:text-lg text-text-secondary leading-[1.7] max-w-[68ch]">
                단순한 시각적 아름다움을 넘어, 본질을 꿰뚫는 디자인 언어로 사람의 마음을 움직이고 브랜드의 가치를 확장합니다. 복잡한 문제를 명료한 형태로 정제하고, 절제된 리듬과 감각적인 모션을 결합하여 독보적인 브랜딩을 완성합니다.
              </p>
            </div>

            {/* Clean Unboxed Tools & Proficiency Index */}
            <div className="pt-8">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-text-secondary block mb-3">
                Tools &amp; Proficiency
              </span>
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-primary leading-relaxed">
                {TOOLS_LIST.map((tool, index) => (
                  <span key={tool}>
                    {tool}
                    {index < TOOLS_LIST.length - 1 && (
                      <span className="mx-3 text-secondary" aria-hidden="true">
                        ·
                      </span>
                    )}
                  </span>
                ))}
              </p>
            </div>
          </div>

          {/* Ability Bars */}
          <div className="p-8 bg-surface-container-low border border-border-hairline space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary">
                Discipline Metrics
              </span>
              <span className="text-[13px] font-medium text-text-secondary uppercase tracking-[0.05em] tabular-nums">
                2026 Benchmark
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {DISCIPLINE_METRICS.map((metric) => (
                <div key={metric.label} className="space-y-2">
                  <div className="flex justify-between text-[13px] uppercase tracking-[0.05em] text-primary">
                    <span className="font-medium">{metric.label}</span>
                    <span className="font-bold tabular-nums">{metric.value}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-container-high overflow-hidden">
                    <div
                      className={
                        metric.tone === 'primary' ? 'h-full bg-primary' : 'h-full bg-secondary'
                      }
                      style={{width: `${metric.value}%`}}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2-Column Experience & Certification Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            {/* Experience Track */}
            <div className="space-y-4">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary pb-2 border-b border-border-hairline">
                Experience
              </h4>
              <ul className="divide-y divide-border-hairline/60 text-[13px]">
                {EXPERIENCE_TIMELINE.map((item) => (
                  <li key={item.title} className="py-3 first:pt-0 last:pb-0 space-y-1">
                    <div className="flex justify-between text-secondary font-medium tracking-[0.05em] tabular-nums">
                      <span>{item.period}</span>
                      {item.location && (
                        <span className="text-text-secondary">{item.location}</span>
                      )}
                    </div>
                    <p className="font-bold text-primary text-sm">{item.title}</p>
                    <p className="text-text-secondary">{item.subtitle}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certification Track */}
            <div className="space-y-4">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary pb-2 border-b border-border-hairline">
                Certifications &amp; Honors
              </h4>
              <ul className="divide-y divide-border-hairline/60 text-[13px]">
                {CERTIFICATIONS_LIST.map((item) => (
                  <li key={item.title} className="py-3 first:pt-0 last:pb-0 space-y-1">
                    <span className="text-secondary font-medium tracking-[0.05em] tabular-nums block">
                      {item.period}
                    </span>
                    <p className="font-bold text-primary text-sm">{item.title}</p>
                    <p className="text-text-secondary">{item.subtitle}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
