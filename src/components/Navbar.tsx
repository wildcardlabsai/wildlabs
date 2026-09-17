import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { PageId } from '../types';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks: { label: string; page: PageId; badge?: string }[] = [
    { label: 'Services', page: 'what-we-automate' },
    { label: 'Solutions', page: 'solutions' },
    { label: 'AI Employees', page: 'ai-employees', badge: 'New' },
    { label: 'How It Works', page: 'how-it-works' },
    { label: 'Pricing', page: 'pricing' },
    { label: 'About', page: 'about' },
    { label: 'Resources', page: 'resources' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#090b0e]/90 backdrop-blur-md border-b border-[#1f242d] py-3.5 shadow-lg shadow-black/30'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            id="nav-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9ee82b] rounded-lg p-1"
          >
            <Logo size="md" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 bg-[#12151b]/80 border border-[#212631] px-3 py-1.5 rounded-full shadow-inner">
            {navLinks.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  id={`nav-link-${item.page}`}
                  onClick={() => handleNavClick(item.page)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${
                    isActive
                      ? 'text-[#f4f4f2] bg-[#1d222b]'
                      : 'text-[#9ca3af] hover:text-[#f4f4f2] hover:bg-[#161a22]'
                  }`}
                >
                  {item.label}
                  {item.badge && (
                    <span className="px-1.5 py-0.2 text-[10px] uppercase font-bold tracking-wider rounded-full bg-[#1e2c14] text-[#a3e635] border border-[#344d1e]">
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="w-1 h-1 rounded-full bg-[#9ee82b] absolute bottom-1 left-1/2 -translate-x-1/2" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              id="nav-cta-talk"
              onClick={() => handleNavClick('contact')}
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-[#9ee82b] text-[#090b0e] hover:bg-[#b2f043] shadow-[0_2px_12px_rgba(158,232,43,0.2)] hover:shadow-[0_4px_20px_rgba(158,232,43,0.3)] transition-all duration-200"
            >
              <span>Let’s Talk</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="nav-mobile-cta"
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-[#9ee82b] text-[#090b0e]"
            >
              Let’s Talk
            </button>
            <button
              id="nav-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#13161c] border border-[#212631] text-[#f4f4f2] hover:bg-[#1a1f29] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Out Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden flex flex-col bg-[#090b0e] pt-24 px-6 pb-8 overflow-y-auto animate-in fade-in duration-200">
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase font-mono tracking-wider text-[#71717a] px-3 mb-1">
              Menu Navigation
            </span>
            {navLinks.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  id={`mobile-nav-${item.page}`}
                  onClick={() => handleNavClick(item.page)}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium text-left transition-all ${
                    isActive
                      ? 'bg-[#161a22] text-[#9ee82b] border border-[#242c3b]'
                      : 'text-[#d4d4d8] hover:bg-[#12151c]'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {item.label}
                    {item.badge && (
                      <span className="px-1.5 py-0.5 text-[10px] uppercase font-bold rounded-full bg-[#1e2c14] text-[#a3e635] border border-[#344d1e]">
                        {item.badge}
                      </span>
                    )}
                  </span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#9ee82b]" />}
                </button>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-[#1b202a] flex flex-col gap-4">
            <button
              id="mobile-drawer-cta"
              onClick={() => handleNavClick('contact')}
              className="w-full py-3.5 rounded-xl font-semibold text-center bg-[#9ee82b] text-[#090b0e] hover:bg-[#b2f043] transition-colors"
            >
              Start a Conversation
            </button>
            <div className="text-xs text-[#71717a] text-center">
              UK AI automation engineering • London HQ • No long-term lock-in
            </div>
          </div>
        </div>
      )}
    </>
  );
};
