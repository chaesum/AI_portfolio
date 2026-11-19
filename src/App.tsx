import {useCallback, useState} from 'react';
import {AboutSection} from './components/AboutSection';
import {ContactFooterSection} from './components/ContactFooterSection';
import {HeroSection} from './components/HeroSection';
import {Navbar} from './components/Navbar';
import {ProjectModal} from './components/ProjectModal';
import {VisionSection} from './components/VisionSection';
import {WorksSection} from './components/WorksSection';
import {PROJECTS, type PortfolioProject} from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [inquiryOpen, setInquiryOpen] = useState(false);

  const handleOpenInquiry = useCallback(() => {
    setInquiryOpen(true);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({behavior: 'smooth'});
    }
  }, []);

  const handleNavigateModal = useCallback(
    (direction: 'prev' | 'next') => {
      if (!selectedProject) return;
      const currentIndex = PROJECTS.findIndex((p) => p.id === selectedProject.id);
      if (currentIndex === -1) return;
      const nextIndex =
        direction === 'next'
          ? (currentIndex + 1) % PROJECTS.length
          : (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
      setSelectedProject(PROJECTS[nextIndex]);
    },
    [selectedProject]
  );

  return (
    <div className="min-h-screen w-full bg-surface text-on-surface flex flex-col">
      <Navbar onOpenInquiry={handleOpenInquiry} />

      <main className="w-full pt-20 flex-1">
        <HeroSection />
        <VisionSection />
        <WorksSection onSelectProject={setSelectedProject} />
        <AboutSection />
        <ContactFooterSection
          inquiryOpen={inquiryOpen}
          onToggleInquiry={setInquiryOpen}
        />
      </main>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNavigate={handleNavigateModal}
      />
    </div>
  );
}
