import React from 'react';
import { X, ShieldCheck, FileText, Cookie } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'cookies' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-[#10141a] border border-[#222834] rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#1c222c] bg-[#141820]">
          <div className="flex items-center gap-3">
            {type === 'privacy' && <ShieldCheck className="w-5 h-5 text-[#a3e635]" />}
            {type === 'terms' && <FileText className="w-5 h-5 text-[#a3e635]" />}
            {type === 'cookies' && <Cookie className="w-5 h-5 text-[#a3e635]" />}
            <h3 className="text-lg font-semibold text-[#f4f4f2]">
              {type === 'privacy' && 'Privacy Policy & Data Security'}
              {type === 'terms' && 'Terms of Service & Engagement'}
              {type === 'cookies' && 'Cookie Policy'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#9ca3af] hover:text-white hover:bg-[#1f2633] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-[#d1d5db] leading-relaxed">
          {type === 'privacy' && (
            <>
              <p className="text-xs font-mono text-[#a3e635] uppercase tracking-wider">
                Last updated: March 2026 • UK GDPR & Data Protection Act 2018 Compliant
              </p>
              <h4 className="text-base font-semibold text-white">1. Core Privacy Principles</h4>
              <p>
                Wildcard Labs (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) designs and builds automation workflows for business clients. We take data sovereignty, confidentiality, and GDPR compliance with the highest degree of seriousness.
              </p>
              <h4 className="text-base font-semibold text-white">2. No AI Training on Your Business Data</h4>
              <p>
                We strictly enforce zero-retention and zero-training policies with all upstream model providers. Your client communications, financial figures, proprietary databases, and internal records are processed strictly for live execution and are NEVER used to train public or foundational machine learning models.
              </p>
              <h4 className="text-base font-semibold text-white">3. Data Transmission & Storage</h4>
              <p>
                All data in transit is encrypted using modern TLS 1.3 encryption. Workflow credentials and API tokens are isolated in dedicated hardware-backed key vaults with multi-factor access control.
              </p>
              <h4 className="text-base font-semibold text-white">4. Your Rights</h4>
              <p>
                As a UK data subject or corporate entity, you retain complete rights of access, rectification, erasure, and portability regarding any data processed during our engagements.
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <p className="text-xs font-mono text-[#a3e635] uppercase tracking-wider">
                Last updated: March 2026 • UK Law Governed
              </p>
              <h4 className="text-base font-semibold text-white">1. Scope of Engagement</h4>
              <p>
                Wildcard Labs delivers custom workflow orchestration, AI employee configuration, and systems integration services under mutually agreed Statements of Work (SOW).
              </p>
              <h4 className="text-base font-semibold text-white">2. Intellectual Property</h4>
              <p>
                Upon completion and full settlement of invoices, clients retain full ownership of their custom workflow architectures, prompt instructions, and system configurations developed specifically for their business.
              </p>
              <h4 className="text-base font-semibold text-white">3. Human Oversight & Operational Boundaries</h4>
              <p>
                Wildcard Labs builds systems with defensive architecture and optional human-in-the-loop validation checkpoints. Client organisations retain responsibility for establishing policy guardrails and business rules implemented in the workflows.
              </p>
            </>
          )}

          {type === 'cookies' && (
            <>
              <p className="text-xs font-mono text-[#a3e635] uppercase tracking-wider">
                Cookie & Storage Policy
              </p>
              <h4 className="text-base font-semibold text-white">1. Minimal Cookies Only</h4>
              <p>
                Wildcard Labs uses only strictly essential session cookies necessary for interface routing and performance state. We do not deploy invasive third-party ad trackers or sell browsing data.
              </p>
              <h4 className="text-base font-semibold text-white">2. Managing Preferences</h4>
              <p>
                You may disable cookies entirely through your browser settings without impacting the core informational browsing experience on this website.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#1c222c] bg-[#141820] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-semibold rounded-lg bg-[#202735] hover:bg-[#2b3345] text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
