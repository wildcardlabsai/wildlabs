import React from 'react';
import { PricingTier } from '../types';
import { Check, ArrowRight } from 'lucide-react';

interface PricingCardProps {
  tier: PricingTier;
  onScope: (tierName: string) => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({ tier, onScope }) => {
  return (
    <div
      id={`pricing-tier-${tier.id}`}
      className={`relative rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 ${
        tier.popular
          ? 'bg-[#121620] border-2 border-[#a3e635] shadow-[0_0_30px_rgba(163,230,53,0.1)]'
          : 'bg-[#0f1218] border border-[#1e232f] hover:border-[#2f3747]'
      }`}
    >
      {tier.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#a3e635] text-[#090b0e] text-[11px] font-bold uppercase tracking-wider">
          Most Popular Scope
        </div>
      )}

      <div>
        {/* Tier title and target */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-[#171b25] text-[#d4d4d8] border border-[#252d3c]">
            {tier.name}
          </span>
          <span className="text-xs text-[#71717a] font-mono">{tier.timeline}</span>
        </div>

        <h3 className="text-xl font-bold text-white mt-4">{tier.target}</h3>
        <p className="text-xs text-[#9ca3af] mt-1.5 leading-relaxed">{tier.tagline}</p>

        {/* Pricing tag */}
        <div className="mt-5 pb-5 border-b border-[#1c222e]">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-[#f4f4f2]">
              {tier.indicativePrice}
            </span>
            {tier.indicativePrice.includes('From') && (
              <span className="text-xs text-[#71717a] font-mono">(indicative)</span>
            )}
          </div>
          <p className="text-xs text-[#71717a] mt-1">
            Definitive price determined by integration complexity & error edge-cases.
          </p>
        </div>

        {/* What's included */}
        <div className="mt-6">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#a3e635] font-semibold block mb-3">
            What is included:
          </span>
          <ul className="space-y-2.5">
            {tier.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-[#d1d5db] leading-relaxed">
                <Check className="w-4 h-4 text-[#a3e635] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 pt-5 border-t border-[#1a1f2a]">
        <div className="text-[11px] text-[#71717a] mb-4">
          <strong className="text-[#a1a1aa]">Ideal for:</strong> {tier.idealFor}
        </div>

        <button
          id={`scope-btn-${tier.id}`}
          onClick={() => onScope(tier.name)}
          className={`w-full py-3 px-4 rounded-xl text-xs font-semibold inline-flex items-center justify-center gap-2 transition-all ${
            tier.popular
              ? 'bg-[#a3e635] text-[#090b0e] hover:bg-[#b8f542] shadow-md'
              : 'bg-[#181d27] hover:bg-[#222836] text-white border border-[#2a3242]'
          }`}
        >
          <span>Let’s scope it</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
