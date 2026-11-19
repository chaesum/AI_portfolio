import {ChevronLeft, ChevronRight, X} from 'lucide-react';
import {useEffect, useState} from 'react';
import type {PortfolioProject} from '../data/portfolioData';
import {ResilientImage} from './ResilientImage';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
}

export function ProjectModal({project, onClose, onNavigate}: ProjectModalProps) {
  const [zoomedFrameIndex, setZoomedFrameIndex] = useState<number | null>(null);

  useEffect(() => {
    setZoomedFrameIndex(null);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (zoomedFrameIndex !== null) {
          setZoomedFrameIndex(null);
        } else {
          onClose();
        }
      } else if (e.key === 'ArrowLeft') {
        if (zoomedFrameIndex !== null) {
          setZoomedFrameIndex((prev) =>
            prev === null ? null : (prev - 1 + project.gallery.length) % project.gallery.length
          );
        } else {
          onNavigate('prev');
        }
      } else if (e.key === 'ArrowRight') {
        if (zoomedFrameIndex !== null) {
          setZoomedFrameIndex((prev) =>
            prev === null ? null : (prev + 1) % project.gallery.length
          );
        } else {
          onNavigate('next');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, zoomedFrameIndex, onClose, onNavigate]);

  if (!project) return null;

  const activeZoomFrame =
    zoomedFrameIndex !== null ? project.gallery[zoomedFrameIndex] : null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      className="fixed inset-0 z-50 bg-primary/70 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
    >
      {/* Modal Dialog Sheet */}
      <div className="relative w-full max-w-5xl bg-surface p-6 md:p-12 border border-border-hairline shadow-2xl max-h-[92vh] overflow-y-auto">
        {/* Close Button (Top-Right) */}
        <button
          type="button"
          aria-label="Close project modal"
          onClick={onClose}
          className="absolute top-5 right-5 md:top-8 md:right-8 w-11 h-11 inline-flex items-center justify-center text-primary hover:text-secondary hover:bg-surface-container transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-primary"
        >
          <X className="w-7 h-7" />
        </button>

        {/* Modal Header Meta & Title */}
        <div className="pb-8 pr-12">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary block mb-2">
            {project.eyebrow}
          </span>
          <h2
            id="project-modal-title"
            className="font-display text-3xl sm:text-4xl md:text-[52px] font-bold tracking-tight text-primary uppercase leading-tight"
          >
            {project.title}
          </h2>
        </div>

        {/* Single-Frame Zoom Lightbox OR 2x2 Image Monograph Gallery Grid */}
        {activeZoomFrame ? (
          <div className="pb-10 space-y-4">
            <div className="relative aspect-[16/10] bg-surface-container border border-border-hairline overflow-hidden">
              <ResilientImage
                src={activeZoomFrame.url}
                alt={activeZoomFrame.alt}
                fallbackLabel={activeZoomFrame.caption}
                loading="eager"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="text-[13px] font-medium text-text-secondary">
                {activeZoomFrame.caption}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setZoomedFrameIndex((prev) =>
                      prev === null
                        ? 0
                        : (prev - 1 + project.gallery.length) % project.gallery.length
                    )
                  }
                  className="px-3 py-1.5 border border-border-hairline text-[11px] font-bold uppercase tracking-[0.12em] text-primary hover:border-primary cursor-pointer"
                >
                  Prev Frame
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setZoomedFrameIndex((prev) =>
                      prev === null ? 0 : (prev + 1) % project.gallery.length
                    )
                  }
                  className="px-3 py-1.5 border border-border-hairline text-[11px] font-bold uppercase tracking-[0.12em] text-primary hover:border-primary cursor-pointer"
                >
                  Next Frame
                </button>
                <button
                  type="button"
                  onClick={() => setZoomedFrameIndex(null)}
                  className="px-4 py-1.5 bg-primary text-on-primary text-[11px] font-bold uppercase tracking-[0.12em] cursor-pointer"
                >
                  Grid View
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-10">
            {project.gallery.slice(0, 4).map((frame, index) => (
              <button
                key={`${project.id}-frame-${index}`}
                type="button"
                onClick={() => setZoomedFrameIndex(index)}
                aria-label={`Inspect ${frame.caption}`}
                className="group relative aspect-[4/3] bg-surface-container overflow-hidden border border-border-hairline text-left cursor-zoom-in focus-visible:outline-2 focus-visible:outline-primary"
              >
                <ResilientImage
                  src={frame.url}
                  alt={frame.alt}
                  fallbackLabel={frame.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-3 left-3 bg-surface/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {frame.caption}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* PROJECT INFORMATION & TOOLS */}
        <div className="pt-6 border-t border-border-hairline grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary block">
              Project Information
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              <div>
                <span className="text-[13px] font-medium text-text-secondary block">
                  담당 업무
                </span>
                <p className="text-[15px] text-primary font-medium mt-1">
                  {project.role}
                </p>
              </div>
              <div>
                <span className="text-[13px] font-medium text-text-secondary block">
                  클라이언트
                </span>
                <p className="text-[15px] text-primary font-medium mt-1">
                  {project.client}
                </p>
              </div>
              <div>
                <span className="text-[13px] font-medium text-text-secondary block">
                  제작 연도
                </span>
                <p className="text-[15px] text-primary font-medium mt-1 tabular-nums">
                  {project.period}
                </p>
              </div>
            </div>
            <p className="text-[14px] text-text-secondary pt-2 leading-relaxed">
              {project.desc}
            </p>
          </div>

          <div className="md:col-span-4 space-y-4 md:border-l md:border-border-hairline md:pl-8">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary block">
              Tools
            </span>
            <p className="text-[15px] text-text-secondary leading-relaxed">
              {project.tools}
            </p>
            <div className="pt-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary">
                Archive Edition · {project.dateLabel}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Prev / Next Project Navigation */}
        <div className="mt-8 pt-6 border-t border-border-hairline flex items-center justify-between">
          <button
            type="button"
            onClick={() => onNavigate('prev')}
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-on-surface-variant hover:text-primary transition-colors cursor-pointer py-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous Project
          </button>
          <button
            type="button"
            onClick={() => onNavigate('next')}
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-on-surface-variant hover:text-primary transition-colors cursor-pointer py-2"
          >
            Next Project
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
