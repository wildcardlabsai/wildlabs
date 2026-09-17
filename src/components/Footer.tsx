import React, { useState } from 'react';
import { Logo } from './Logo';
import { PageId } from '../types';
import { LegalModal } from './LegalModal';
import { ArrowUpRight, ShieldCheck, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | 'cookies' | null>(null);

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#07080b] border-t border-[#1a1e27] text-[#9ca3af] pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-14 border-b border-[#161a23]">
            {/* Column 1: Brand & Tagline */}
            <div className="lg:col-span-2 space-y-4">
              <button
                onClick={() => handleNav('home')}
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9ee82b] rounded-lg p-1 -ml-1 inline-block"
              >
                <Logo size="md" />
              </button>
              <p className="text-sm sm:text-base text-[#d1d5db] font-normal max-w-sm leading-relaxed">
                AI automation for businesses that have better things to do.
              </p>
              <p className="text-xs text-[#71717a] max-w-sm leading-relaxed">
                We design and build robust automated workflows and intelligent AI workers that remove manual admin, connect disparate software, and run reliably in the background.
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs text-[#a1a1aa]">
                <MapPin className="w-3.5 h-3.5 text-[#9ee82b]" />
                <span>Covent Garden, London • Serving UK Businesses</span>
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#e4e4e7] font-semibold">
                Services & Platform
              </span>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <button
                    onClick={() => handleNav('what-we-automate')}
                    className="hover:text-[#9ee82b] transition-colors"
                  >
                    What We Automate
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav('solutions')}
                    className="hover:text-[#9ee82b] transition-colors"
                  >
                    Solutions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav('ai-employees')}
                    className="hover:text-[#9ee82b] transition-colors flex items-center gap-1.5"
                  >
                    <span>AI Employees</span>
                    <span className="text-[10px] px-1.5 py-0.2 bg-[#1b2513] text-[#a3e635] rounded font-bold">New</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav('pricing')}
                    className="hover:text-[#9ee82b] transition-colors"
                  >
                    Pricing & Scoping
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Methodology */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#e4e4e7] font-semibold">
                Company & Guides
              </span>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <button
                    onClick={() => handleNav('how-it-works')}
                    className="hover:text-[#9ee82b] transition-colors"
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav('about')}
                    className="hover:text-[#9ee82b] transition-colors"
                  >
                    About Wildcard Labs
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav('resources')}
                    className="hover:text-[#9ee82b] transition-colors"
                  >
                    Resources Hub
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav('contact')}
                    className="hover:text-[#9ee82b] transition-colors"
                  >
                    Contact & Consultation
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Quick consultation callout */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#e4e4e7] font-semibold">
                Start an Audit
              </span>
              <p className="text-xs text-[#71717a] leading-relaxed">
                Have a manual process that wastes hours each week? Let’s evaluate if software can do it instead.
              </p>
              <button
                onClick={() => handleNav('contact')}
                className="w-full mt-2 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#151921] hover:bg-[#1f2532] text-xs font-semibold text-[#f4f4f2] border border-[#242b38] transition-all"
              >
                <span>Talk to Wildcard Labs</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#9ee82b]" />
              </button>
            </div>
          </div>

          {/* Bottom Bar: Legal & Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717a]">
            <div className="flex flex-wrap items-center gap-6">
              <span>© 2026 Wildcard Labs. All rights reserved.</span>
              <button
                onClick={() => setLegalType('privacy')}
                className="hover:text-[#e4e4e7] transition-colors underline-offset-4 hover:underline"
              >
                Privacy
              </button>
              <button
                onClick={() => setLegalType('terms')}
                className="hover:text-[#e4e4e7] transition-colors underline-offset-4 hover:underline"
              >
                Terms
              </button>
              <button
                onClick={() => setLegalType('cookies')}
                className="hover:text-[#e4e4e7] transition-colors underline-offset-4 hover:underline"
              >
                Cookies
              </button>
            </div>

            <div className="flex items-center gap-2 text-[#71717a]">
              <ShieldCheck className="w-4 h-4 text-[#86efac]" />
              <span>UK GDPR & Data Protection Act 2018 Compliant</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Dialog */}
      <LegalModal type={legalType} onClose={() => setLegalType(null)} />
    </>
  );
};
