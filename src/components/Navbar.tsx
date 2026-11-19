import {Menu, X} from 'lucide-react';
import {useEffect, useState} from 'react';

interface NavbarProps {
  onOpenInquiry: () => void;
}

const NAV_ITEMS = [
  {id: 'home', label: 'Home', href: '#home'},
  {id: 'works', label: 'Works', href: '#works'},
  {id: 'about', label: 'About', href: '#about'},
  {id: 'contact', label: 'Contact', href: '#contact'},
];

export function Navbar({onOpenInquiry}: NavbarProps) {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = ['home', 'vision', 'works', 'about', 'contact'];
    const handleScroll = () => {
      const scrollY = window.scrollY + 140;
      let current = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id === 'vision' ? 'home' : id;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-surface-container-low/90 backdrop-blur-md border-b border-border-hairline/70">
      <div className="h-20 w-full px-5 md:px-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#home"
          onClick={() => handleNavClick('home')}
          className="font-display text-xl md:text-2xl font-bold tracking-tight text-primary whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          HONG GILDONG
        </a>

        {/* Zone 2: 4 Single-line Text Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-10"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-1 text-[11px] font-bold uppercase tracking-[0.14em] whitespace-nowrap shrink-0 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${
                  isActive
                    ? 'text-primary after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1.5px] after:bg-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary CTA + Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenInquiry}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] bg-primary text-on-primary hover:bg-primary-container transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Inquire
          </button>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 text-primary hover:bg-surface-container transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-surface-container-low border-t border-border-hairline px-5 py-6 space-y-4">
          <nav className="flex flex-col gap-3" aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => handleNavClick(item.id)}
                  className={`py-2 text-xs font-bold uppercase tracking-[0.14em] border-b border-border-hairline/60 ${
                    isActive ? 'text-primary' : 'text-on-surface-variant'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              onOpenInquiry();
            }}
            className="w-full py-3 text-xs font-bold uppercase tracking-[0.14em] bg-primary text-on-primary cursor-pointer"
          >
            Inquire
          </button>
        </div>
      )}
    </header>
  );
}
