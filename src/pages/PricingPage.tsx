import React, { useState } from 'react';
import { PageId } from '../types';
import { PRICING_TIERS } from '../data/content';
import { PricingCard } from '../components/PricingCard';
import { 
  Calculator, 
  ArrowRight, 
  Check, 
  HelpCircle, 
  TrendingUp, 
  ShieldCheck, 
  Clock,
  Sparkles
} from 'lucide-react';

interface PricingPageProps {
  onNavigate: (page: PageId, tierName?: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onNavigate }) => {
  // Interactive ROI Calculator State
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(12);
  const [hourlyWage, setHourlyWage] = useState<number>(25);

  const weeklySavings = hoursPerWeek * hourlyWage;
  const annualSavings = weeklySavings * 52;
  const paybackWeeks = Math.max(1, Math.round(2250 / (weeklySavings || 1)));

  return (
    <div className="w-full pt-32 pb-24">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161f13] border border-[#27381b] text-xs text-[#a3e635] font-mono font-semibold mb-6">
            <span>Commercial Models</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#f4f4f2] leading-tight">
            Clear, sensible <span className="text-[#a3e635]">pricing.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#9ca3af] leading-relaxed">
            We price around the value of the problem being solved, not hidden fees. Transparent fixed setup scopes, with optional continuous maintenance.
          </p>
        </div>
      </div>

      {/* 3 Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRICING_TIERS.map((tier) => (
            <PricingCard
              key={tier.id}
              tier={tier}
              onSelect={(t) => onNavigate('contact', t.name)}
            />
          ))}
        </div>
      </div>

      {/* Interactive ROI Calculator Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0e1219] border-2 border-[#1f2736] shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-2.5 text-xs font-mono text-[#a3e635] font-bold uppercase mb-2">
            <Calculator className="w-4 h-4" />
            <span>Interactive Operational Payback Model</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Calculate your automation ROI
          </h3>
          <p className="text-xs sm:text-sm text-[#9ca3af] mt-2 max-w-2xl leading-relaxed">
            If an automation saves your team 10 hours a week, it usually pays for itself in weeks. Adjust the sliders below to estimate your company’s return.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Sliders */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-[#d4d4d8] mb-2">
                  <span>Manual hours spent per week:</span>
                  <span className="font-mono text-sm text-[#a3e635] font-bold">
                    {hoursPerWeek} hrs/week
                  </span>
                </div>
                <input
                  type="range"
                  min={3}
                  max={40}
                  step={1}
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full accent-[#a3e635] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#71717a] mt-1">
                  <span>3 hrs</span>
                  <span>20 hrs</span>
                  <span>40 hrs</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-[#d4d4d8] mb-2">
                  <span>Average staff cost per hour (£):</span>
                  <span className="font-mono text-sm text-[#a3e635] font-bold">
                    £{hourlyWage}/hr
                  </span>
                </div>
                <input
                  type="range"
                  min={15}
                  max={75}
                  step={5}
                  value={hourlyWage}
                  onChange={(e) => setHourlyWage(Number(e.target.value))}
                  className="w-full accent-[#a3e635] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#71717a] mt-1">
                  <span>£15 (Admin)</span>
                  <span>£35 (Manager)</span>
                  <span>£75 (Director)</span>
                </div>
              </div>
            </div>

            {/* Results Box */}
            <div className="p-6 rounded-2xl bg-[#090b0e] border border-[#1d2432] space-y-4 font-mono">
              <div>
                <span className="text-[11px] text-[#71717a] uppercase block">
                  Projected Annual Value Recovered:
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#a3e635] mt-1">
                  £{annualSavings.toLocaleString()} / year
                </div>
              </div>

              <div className="pt-3 border-t border-[#171d27] grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[#71717a] block">Weekly savings:</span>
                  <span className="text-white font-bold text-sm">£{weeklySavings.toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-[#71717a] block">Est. payback window:</span>
                  <span className="text-[#86efac] font-bold text-sm">~{paybackWeeks} weeks</span>
                </div>
              </div>

              <p className="text-[11px] text-[#71717a] font-sans italic pt-2">
                Based on a typical £2,250 single-workflow setup tier.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Breakdown: What's Included in Setup vs Ongoing Maintenance */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          What every engagement includes
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-7 rounded-2xl bg-[#0f131a] border border-[#1e232f]">
            <h4 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#a3e635]" />
              <span>What’s Included in Initial Setup</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#d1d5db]">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#a3e635] shrink-0 mt-0.5" />
                <span>End-to-end technical discovery and API scoping</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#a3e635] shrink-0 mt-0.5" />
                <span>Custom workflow architecture & data transformation code</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#a3e635] shrink-0 mt-0.5" />
                <span>Defensive error handling and human fallback routes</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#a3e635] shrink-0 mt-0.5" />
                <span>Full sandbox testing with real historic data</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#a3e635] shrink-0 mt-0.5" />
                <span>Team walkthrough, video training, and 14-day hypercare</span>
              </li>
            </ul>
          </div>

          <div className="p-7 rounded-2xl bg-[#0f131a] border border-[#1e232f]">
            <h4 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#86efac]" />
              <span>What Ongoing Maintenance Covers</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#d1d5db]">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#a3e635] shrink-0 mt-0.5" />
                <span>24/7 runtime uptime and error alert monitoring</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#a3e635] shrink-0 mt-0.5" />
                <span>Prompt fine-tuning as supplier invoices or customer questions evolve</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#a3e635] shrink-0 mt-0.5" />
                <span>Software API version updates (when HubSpot, Xero, etc. update APIs)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#a3e635] shrink-0 mt-0.5" />
                <span>Dedicated Slack/Teams channel for prompt technical assistance</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#a3e635] shrink-0 mt-0.5" />
                <span>Monthly operational report detailing tasks processed & hours saved</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h4 className="text-xl font-bold text-white">Need a custom scope or have unique requirements?</h4>
        <p className="text-xs sm:text-sm text-[#9ca3af] mt-2">
          We’re always happy to review your current processes and provide an honest estimate with zero sales pressure.
        </p>
        <button
          onClick={() => onNavigate('contact')}
          className="mt-6 px-8 py-3.5 rounded-xl font-semibold text-xs bg-[#a3e635] text-[#090b0e] hover:bg-[#b8f542] transition-colors inline-flex items-center gap-2 shadow-lg"
        >
          <span>Get an Estimate</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
