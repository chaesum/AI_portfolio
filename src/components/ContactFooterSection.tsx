import {ArrowUp, ArrowUpRight, Check, Copy, Send} from 'lucide-react';
import {type FormEvent, useState} from 'react';

interface ContactFooterSectionProps {
  inquiryOpen: boolean;
  onToggleInquiry: (open: boolean) => void;
}

export function ContactFooterSection({
  inquiryOpen,
  onToggleInquiry,
}: ContactFooterSectionProps) {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [scope, setScope] = useState('Brand Identity');
  const [message, setMessage] = useState('');

  const handleCopyEmail = async (address: string) => {
    try {
      await navigator.clipboard.writeText(address);
      setCopiedEmail(address);
      setTimeout(() => setCopiedEmail(null), 2200);
    } catch {
      setCopiedEmail(address);
      setTimeout(() => setCopiedEmail(null), 2200);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div id="contact" className="w-full bg-dark-canvas text-inverse-on-surface">
      {/* 5. CONTACT & INVITATION CALLOUT */}
      <section className="w-full px-5 md:px-16 py-24 md:py-28 border-b border-dark-border">
        <div className="flex flex-col justify-between min-h-[540px]">
          {/* Top Line */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-dark-border">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary-fixed">
              04 · Commissions &amp; Dialogue
            </span>
            <span className="text-[13px] font-medium uppercase tracking-[0.06em] text-dark-text-muted">
              Availability: Open for 2026 Commissions
            </span>
          </div>

          {/* Giant Invitation Block */}
          <div className="py-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-dark-text-muted block mb-4">
              Start a Conversation
            </span>
            <h2 className="font-display text-5xl sm:text-7xl lg:text-[120px] xl:text-[128px] font-bold tracking-[-0.04em] uppercase text-inverse-on-surface leading-[0.94]">
              LET&apos;S WORK
              <br />
              TOGETHER.
            </h2>
            <p className="font-display text-xl md:text-[28px] text-secondary-fixed mt-6 font-medium">
              새로운 프로젝트와 가치 있는 협업을 기다립니다.
            </p>
          </div>

          {/* Interactive Inquiry Drawer (Optional Toggle) */}
          {inquiryOpen && (
            <div className="mb-12 p-6 md:p-10 bg-dark-canvas-surface border border-dark-border">
              <div className="flex items-center justify-between pb-6 border-b border-dark-border">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary-fixed block mb-1">
                    Project Brief
                  </span>
                  <h3 className="font-display text-2xl font-bold text-inverse-on-surface">
                    Send an Inquiry
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    onToggleInquiry(false);
                    setSubmitted(false);
                  }}
                  className="text-[11px] font-bold uppercase tracking-[0.14em] text-dark-text-muted hover:text-inverse-on-surface px-3 py-2 cursor-pointer"
                >
                  Close ✕
                </button>
              </div>

              {submitted ? (
                <div className="py-10 space-y-4">
                  <p className="font-display text-2xl font-bold text-secondary-fixed">
                    Inquiry Received — 감사합니다.
                  </p>
                  <p className="text-[15px] text-dark-text-muted max-w-xl leading-relaxed">
                    Your project brief has been recorded. Hong Gil Dong will review the scope and reply directly within 2 business days.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-2 px-5 py-2.5 bg-secondary text-on-secondary text-[11px] font-bold uppercase tracking-[0.14em] cursor-pointer hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors"
                  >
                    Send Another Brief
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="inquiry-name"
                      className="block text-[11px] font-bold uppercase tracking-[0.14em] text-dark-text-muted mb-2"
                    >
                      Name / Organization
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Kim Minseo · Studio Archive"
                      className="w-full px-4 py-3 bg-dark-canvas border border-dark-border text-inverse-on-surface placeholder:text-dark-text-muted/60 text-sm focus:outline-none focus:border-secondary-fixed"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="inquiry-email"
                      className="block text-[11px] font-bold uppercase tracking-[0.14em] text-dark-text-muted mb-2"
                    >
                      Reply Email
                    </label>
                    <input
                      id="inquiry-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@studio.kr"
                      className="w-full px-4 py-3 bg-dark-canvas border border-dark-border text-inverse-on-surface placeholder:text-dark-text-muted/60 text-sm focus:outline-none focus:border-secondary-fixed"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-dark-text-muted mb-2">
                      Discipline Scope
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Brand Identity',
                        'Motion & Film',
                        'Editorial Monograph',
                        'Art Direction',
                      ].map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setScope(item)}
                          className={`px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] border transition-colors cursor-pointer ${
                            scope === item
                              ? 'bg-secondary text-on-secondary border-secondary'
                              : 'bg-dark-canvas border-dark-border text-dark-text-muted hover:text-inverse-on-surface'
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label
                      htmlFor="inquiry-message"
                      className="block text-[11px] font-bold uppercase tracking-[0.14em] text-dark-text-muted mb-2"
                    >
                      Project Overview &amp; Timeline
                    </label>
                    <textarea
                      id="inquiry-message"
                      rows={3}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="프로젝트의 목표, 일정 및 협업 방향을 자유롭게 남겨주세요."
                      className="w-full px-4 py-3 bg-dark-canvas border border-dark-border text-inverse-on-surface placeholder:text-dark-text-muted/60 text-sm focus:outline-none focus:border-secondary-fixed"
                    />
                  </div>
                  <div className="md:col-span-2 flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-on-secondary hover:bg-secondary-fixed hover:text-on-secondary-fixed text-[11px] font-bold uppercase tracking-[0.14em] transition-colors cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Submit Brief
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* Email Direct Call to Action */}
          <div className="pt-8 border-t border-dark-border flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-dark-text-muted block mb-2">
                Direct Email
              </span>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="mailto:gildong.hong@designatelier.kr"
                  className="group inline-flex items-center gap-2 font-display text-xl sm:text-2xl md:text-[28px] text-inverse-on-surface hover:text-secondary-fixed transition-colors underline underline-offset-8 decoration-1 decoration-dark-border"
                >
                  <span>gildong.hong@designatelier.kr</span>
                  <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <button
                  type="button"
                  onClick={() => handleCopyEmail('gildong.hong@designatelier.kr')}
                  aria-label="Copy email address"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-dark-border text-[11px] font-bold uppercase tracking-[0.12em] text-dark-text-muted hover:text-inverse-on-surface hover:border-secondary-fixed transition-colors cursor-pointer"
                >
                  {copiedEmail === 'gildong.hong@designatelier.kr' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-secondary-fixed" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Copy
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-dark-text-muted block">
                  Location
                </span>
                <p className="text-[13px] text-inverse-on-surface">
                  Seoul, Korea · Worldwide Remote
                </p>
              </div>

              <button
                type="button"
                onClick={() => onToggleInquiry(!inquiryOpen)}
                className="px-6 py-3 rounded-full bg-secondary text-on-secondary text-[11px] font-bold uppercase tracking-[0.14em] hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                {inquiryOpen ? 'Hide Brief Form' : 'Start Project Brief'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Footer */}
      <footer className="w-full px-5 md:px-16 pt-20 pb-14 flex flex-col justify-between min-h-[420px]">
        <div>
          <div className="flex items-center justify-between pb-8 border-b border-dark-border">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-dark-text-muted">
              Edition 2026 / Portfolio
            </span>
            <a
              href="#home"
              className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-dark-text-muted hover:text-inverse-on-surface transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              Back to top
            </a>
          </div>
        </div>

        <div className="pt-14 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="space-y-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-dark-text-muted">
              Direct Inquiries
            </p>
            <a
              href="mailto:hello@honggildong.com"
              className="inline-block font-display text-2xl md:text-[28px] text-inverse-on-surface hover:text-secondary-fixed transition-colors underline underline-offset-8 decoration-1 decoration-dark-border"
            >
              hello@honggildong.com
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-12">
            <div className="space-y-2">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-dark-text-muted">
                Studio
              </p>
              <p className="text-[13px] text-inverse-on-surface">Seoul, South Korea</p>
              <p className="text-[13px] text-dark-text-muted">KST (UTC+9)</p>
            </div>
            <div className="space-y-2">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-dark-text-muted">
                Social
              </p>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onToggleInquiry(true);
                }}
                className="block text-[13px] text-inverse-on-surface hover:text-secondary-fixed transition-colors"
              >
                Instagram
              </a>
              <a
                href="#works"
                className="block text-[13px] text-inverse-on-surface hover:text-secondary-fixed transition-colors"
              >
                Behance Archive
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-dark-text-muted">
                Network
              </p>
              <a
                href="#about"
                className="block text-[13px] text-inverse-on-surface hover:text-secondary-fixed transition-colors"
              >
                Biography
              </a>
              <a
                href="#vision"
                className="block text-[13px] text-inverse-on-surface hover:text-secondary-fixed transition-colors"
              >
                Vision
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-dark-text-muted">
                Typography
              </p>
              <p className="text-[13px] text-inverse-on-surface">Archivo</p>
              <p className="text-[13px] text-dark-text-muted">DM Sans · Noto Sans KR</p>
            </div>
          </div>
        </div>

        <div className="pt-14 flex flex-col sm:flex-row items-baseline justify-between gap-4 border-t border-dark-border mt-14">
          <p className="text-[13px] text-dark-text-muted">
            © 2026 Hong Gil Dong. All rights reserved. Crafted with architectural discipline.
          </p>
          <p className="text-[13px] font-medium uppercase tracking-[0.06em] text-dark-text-muted tabular-nums">
            37.5665° N, 126.9780° E
          </p>
        </div>
      </footer>
    </div>
  );
}
