import React from 'react';
import { PageId } from '../types';
import { ContactForm } from '../components/ContactForm';
import { 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Check, 
  ArrowRight,
  MessageSquare,
  Building2,
  CalendarCheck
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  selectedTier?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, selectedTier }) => {
  return (
    <div className="w-full pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Hero & Company Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161f13] border border-[#27381b] text-xs text-[#a3e635] font-mono font-semibold mb-6">
                <span>Direct Initial Consultation</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#f4f4f2] leading-tight">
                Let’s find something <span className="text-[#a3e635]">worth automating.</span>
              </h1>

              <p className="mt-5 text-base sm:text-lg text-[#9ca3af] leading-relaxed">
                Tell us what takes too much time, and we’ll help you work out whether automation can take it off your team’s hands.
              </p>
            </div>

            {/* Direct Contact Details */}
            <div className="p-6 rounded-2xl bg-[#0f131a] border border-[#1e2430] space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3.5 text-[#d1d5db]">
                <div className="p-2 rounded-xl bg-[#141822] text-[#a3e635] border border-[#202736] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-[#71717a] block">Direct Inquiries:</span>
                  <span className="text-sm font-semibold text-white">hello@wildcardlabs.uk</span>
                  <p className="text-xs text-[#71717a] mt-0.5">(Monitored by our senior engineering team)</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-[#d1d5db] pt-3 border-t border-[#181d26]">
                <div className="p-2 rounded-xl bg-[#141822] text-[#a3e635] border border-[#202736] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-[#71717a] block">UK Operational Base:</span>
                  <span className="text-sm font-semibold text-white">Covent Garden, London, WC2H</span>
                  <p className="text-xs text-[#71717a] mt-0.5">Serving clients throughout England, Scotland & Wales</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-[#d1d5db] pt-3 border-t border-[#181d26]">
                <div className="p-2 rounded-xl bg-[#141822] text-[#a3e635] border border-[#202736] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-[#71717a] block">Response Guarantee:</span>
                  <span className="text-sm font-semibold text-[#86efac]">Within 1 working day</span>
                  <p className="text-xs text-[#71717a] mt-0.5">Objective technical review — zero sales pressure</p>
                </div>
              </div>
            </div>

            {/* Reassurance Checklist */}
            <div className="space-y-2.5 text-xs text-[#9ca3af]">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#a3e635]" />
                <span>No software changes or migrations forced on your team</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#a3e635]" />
                <span>No long-term contracts required for initial scopes</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#a3e635]" />
                <span>UK GDPR & Data Protection Act 2018 fully compliant</span>
              </div>
            </div>
          </div>

          {/* Right Column: Polished Contact Form */}
          <div className="lg:col-span-7">
            {selectedTier && (
              <div className="mb-4 px-4 py-2.5 rounded-xl bg-[#162012] border border-[#27381b] text-xs text-[#a3e635] flex items-center justify-between">
                <span>Selected initial scope inquiry: <strong>{selectedTier}</strong></span>
                <span className="font-mono text-[10px] text-[#86efac]">Auto-applied</span>
              </div>
            )}
            <ContactForm initialIntent={selectedTier ? 'I have a process in mind' : 'I have a process in mind'} />
          </div>
        </div>
      </div>
    </div>
  );
};
