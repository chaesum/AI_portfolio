import {ArrowUpRight, Eye, Play} from 'lucide-react';
import {useMemo, useState} from 'react';
import {PROJECTS, type PortfolioProject, type ProjectCategory} from '../data/portfolioData';
import {ResilientImage} from './ResilientImage';

interface WorksSectionProps {
  onSelectProject: (project: PortfolioProject) => void;
}

type FilterOption = 'all' | ProjectCategory;

const FILTER_OPTIONS: {id: FilterOption; label: string}[] = [
  {id: 'all', label: 'All (06)'},
  {id: 'branding', label: 'Branding'},
  {id: 'motion', label: 'Motion'},
  {id: 'video', label: 'Video'},
  {id: 'editorial', label: 'Editorial'},
];

export function WorksSection({onSelectProject}: WorksSectionProps) {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('all');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return PROJECTS;
    }
    return PROJECTS.filter((project) => project.categories.includes(activeFilter));
  }, [activeFilter]);

  const featuredProjects = useMemo(
    () => filteredProjects.filter((p) => p.featured),
    [filteredProjects]
  );

  const archiveProjects = useMemo(
    () => filteredProjects.filter((p) => !p.featured),
    [filteredProjects]
  );

  return (
    <section
      id="works"
      className="w-full px-5 md:px-16 py-24 md:py-28 bg-surface-container-low"
    >
      {/* Section Header & Segmented Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16 border-b border-border-hairline">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary block mb-2">
            02 · Selected Projects
          </span>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-[72px] font-bold tracking-[-0.03em] uppercase text-primary leading-none">
            WORKS.
          </h2>
        </div>

        {/* Interactive Filter Controls */}
        <div
          role="group"
          aria-label="Filter projects by discipline"
          className="flex flex-wrap gap-2"
        >
          {FILTER_OPTIONS.map((option) => {
            const isActive = activeFilter === option.id;
            return (
              <button
                key={option.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(option.id)}
                className={`px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] rounded-full transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  isActive
                    ? 'bg-primary text-on-primary border border-primary'
                    : 'bg-surface border border-border-hairline text-on-surface hover:border-primary'
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* FEATURED PROJECTS (Widescreen Showcases) */}
      {featuredProjects.length > 0 && (
        <div className="pt-16 space-y-12">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-text-secondary">
              Featured Showcases
            </span>
            <span className="text-[13px] text-secondary uppercase font-semibold tracking-[0.06em] tabular-nums">
              Highlights [0{featuredProjects.length}]
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {featuredProjects.map((project) => (
              <article key={project.id} className="group flex flex-col">
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="text-left w-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  <div className="relative w-full aspect-[16/10] bg-surface-container overflow-hidden">
                    <ResilientImage
                      src={project.coverImage}
                      alt={project.coverAlt}
                      fallbackLabel={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="w-16 h-16 rounded-full bg-surface-bright/95 backdrop-blur-md flex items-center justify-center text-primary shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                        {project.modalActionIcon === 'play' ? (
                          <Play className="w-6 h-6 fill-primary" />
                        ) : (
                          <Eye className="w-6 h-6" />
                        )}
                      </span>
                    </div>
                    <div className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em]">
                      {project.badgeLabel}
                    </div>
                  </div>

                  <div className="pt-5 flex items-start justify-between gap-4 border-b border-border-hairline pb-4">
                    <div>
                      <h3 className="font-display text-2xl md:text-[28px] font-bold tracking-tight text-primary group-hover:text-secondary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[13px] text-text-secondary mt-1">
                        {project.subtitle}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-primary group-hover:text-secondary pt-1.5 whitespace-nowrap shrink-0">
                      View More <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </button>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* OTHER PROJECTS (Archive 4-Grid Layout) */}
      {archiveProjects.length > 0 && (
        <div className={featuredProjects.length > 0 ? 'pt-24' : 'pt-16'}>
          <div className="flex items-center justify-between pb-8">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-text-secondary block mb-1">
                Archive Collection
              </span>
              <h3 className="font-display text-2xl md:text-[28px] font-bold text-primary tracking-tight tabular-nums">
                SELECTED ARCHIVES (0{archiveProjects.length})
              </h3>
            </div>
            <span className="text-[13px] uppercase tracking-[0.06em] text-text-secondary tabular-nums">
              Index 01 — 0{archiveProjects.length}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {archiveProjects.map((project) => (
              <article
                key={project.id}
                className="group bg-surface border border-border-hairline hover:border-primary transition-colors duration-200 flex flex-col justify-between"
              >
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="p-4 text-left h-full flex flex-col justify-between cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <div>
                    <div className="relative w-full aspect-[4/5] bg-surface-container overflow-hidden mb-4">
                      <ResilientImage
                        src={project.coverImage}
                        alt={project.coverAlt}
                        fallbackLabel={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span
                        className={`absolute top-2.5 left-2.5 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.12em] ${
                          project.id === 'excalibur'
                            ? 'bg-secondary text-on-secondary'
                            : 'bg-surface/95 text-primary'
                        }`}
                      >
                        {project.badgeLabel}
                      </span>
                    </div>
                    <p className="text-[11px] font-bold uppercase text-secondary tracking-[0.12em] mb-1">
                      {project.kicker}
                    </p>
                    <h4 className="font-display text-[20px] font-bold text-primary tracking-tight leading-snug group-hover:text-secondary transition-colors">
                      {project.title}
                    </h4>
                  </div>

                  <div className="pt-4 border-t border-border-hairline mt-4 flex items-center justify-between w-full">
                    <span className="text-[13px] text-text-secondary">
                      {project.disciplineLabel}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-primary group-hover:text-secondary transition-colors" />
                  </div>
                </button>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
