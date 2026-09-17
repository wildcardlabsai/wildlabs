import React, { useState } from 'react';
import { PageId } from '../types';
import { FAQ } from '../components/FAQ';
import { 
  Search, 
  Layers, 
  Cpu, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Sparkles,
  Lock,
  Workflow
} from 'lucide-react';

interface HowItWorksPageProps {
  onNavigate: (page: PageId) => void;
}

const FOUR_STEPS = [
  {
    step: '01',
    title: 'Discover',
    tagline: 'Audit the friction & calculate the ROI',
    duration: 'Week 1',
    icon: Search,
    description: 'We meet with you and your operational team to observe where manual time is leaking. We review your current software stack, map data inputs, identify repetitive manual bottlenecks, and provide an objective calculation of potential time savings.',
    deliverables: [
      'Comprehensive process map of current manual steps',
      'Software API feasibility & data schema assessment',
      'Clear project statement of work with fixed timeline & costs',
      'Target ROI & weekly hours saved projection'
    ],
    clientInvolvement: 'One 45-minute discovery session + access to sample process documents.',
  },
  {
    step: '02',
    title: 'Design',
    tagline: 'Architect the workflow & set the guardrails',
    duration: 'Week 2',
    icon: Layers,
    description: 'We design the automated blueprint around the way your business actually operates. This includes establishing validation rules, data transformation logic, error-handling catchments, and explicit human-in-the-loop approval thresholds.',
    deliverables: [
      'Interactive architecture diagram of data flow',
      'Security & permission scoping (UK GDPR compliant)',
      'Human-in-the-loop review criteria & fallback protocols',
      'Sandbox testing environment setup'
    ],
    clientInvolvement: '30-minute review to approve the workflow blueprint and logic rules.',
  },
  {
    step: '03',
    title: 'Build',
    tagline: 'Engineer, test & deploy the automation',
    duration: 'Weeks 3–4',
    icon: Cpu,
    description: 'Our UK engineering team builds the custom API connections, configures AI parsing models, and stresses-tests edge cases with real historical data. We run parallel dry runs before deploying the workflow into your live environment.',
    deliverables: [
      'Production-grade workflow orchestration deployment',
      'Defensive error logging & proactive alert routing',
      'Team walkthrough & concise operational handover video',
      '14-day intensive hypercare monitoring post-launch'
    ],
    clientInvolvement: 'Zero engineering effort; 20-minute team walkthrough before go-live.',
  },
  {
    step: '04',
    title: 'Improve',
    tagline: 'Monitor, fine-tune & scale capability',
    duration: 'Ongoing',
    icon: TrendingUp,
    description: 'Good automation runs quietly, but your business evolves. We continuously monitor execution logs, fine-tune parsing confidence as document layouts shift, and suggest new automation opportunities as your volume grows.',
    deliverables: [
      'Monthly execution uptime and hours-saved reporting',
      'Continuous prompt & model fine-tuning for edge cases',
      'Quarterly workflow expansion roadmap',
      'Direct Slack/Teams escalation channel for your team'
    ],
    clientInvolvement: 'Asynchronous updates and optional monthly progress touchpoints.',
  },
];

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onNavigate }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const activeStep = FOUR_STEPS[activeStepIndex];

  return (
    <div className="w-full pt-32 pb-24">
      {/* ============================================================ */}
      {/* 1. HERO SECTION */}
      {/* ============================================================ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161f13] border border-[#27381b] text-xs text-[#a3e635] font-mono font-semibold mb-6">
            <span>Implementation Methodology</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#f4f4f2] leading-tight">
            Simple for you.{' '}
            <span className="text-[#a3e635]">Powerful behind the scenes.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#9ca3af] leading-relaxed">
            You don’t need an internal engineering department to benefit from enterprise-grade automation. We handle the discovery, architecture, coding, and maintenance so your team experiences purely the time saved.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#a3e635] text-[#090b0e] hover:bg-[#b8f542] transition-colors inline-flex items-center gap-2"
            >
              <span>Schedule Initial Discovery</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('pricing')}
              className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#13161c] hover:bg-[#1c222c] text-white border border-[#212734] transition-colors"
            >
              <span>View Scopes & Timelines</span>
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. DETAILED 4-STEP TIMELINE */}
      {/* ============================================================ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        {/* Step Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {FOUR_STEPS.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-2xl text-left border transition-all ${
                  isActive
                    ? 'bg-[#151a24] border-[#a3e635] shadow-[0_0_20px_rgba(163,230,53,0.1)]'
                    : 'bg-[#0f131a] border-[#1e232e] hover:border-[#2f3747]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`font-mono text-sm font-bold ${
                      isActive ? 'text-[#a3e635]' : 'text-[#71717a]'
                    }`}
                  >
                    {step.step}
                  </span>
                  <span className="text-[10px] font-mono text-[#71717a] px-2 py-0.5 rounded bg-[#171b24]">
                    {step.duration}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mt-1">{step.title}</h4>
                <p className="text-xs text-[#9ca3af] mt-0.5 line-clamp-1">{step.tagline}</p>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detail Panel */}
        <div className="rounded-3xl bg-[#10141a] border border-[#212836] p-7 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-7 space-y-5">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#a3e635] uppercase tracking-wider mb-2">
                  <span>STAGE {activeStep.step}</span>
                  <span>•</span>
                  <span>{activeStep.duration}</span>
                </div>
                <h3 className="text-3xl font-extrabold text-white">{activeStep.title}</h3>
                <p className="text-sm font-medium text-[#d4d4d8] mt-1">{activeStep.tagline}</p>
              </div>

              <p className="text-sm sm:text-base text-[#9ca3af] leading-relaxed">
                {activeStep.description}
              </p>

              <div className="pt-2">
                <span className="text-xs font-mono uppercase text-[#a3e635] font-bold block mb-3">
                  Tangible Deliverables in Stage {activeStep.step}:
                </span>
                <div className="space-y-2.5">
                  {activeStep.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#d1d5db]">
                      <CheckCircle2 className="w-4 h-4 text-[#a3e635] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Client Effort & Safeguard Card */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-[#090b0e] border border-[#1b222f] p-6 space-y-6">
              <div className="space-y-5">
                <div className="p-4 rounded-xl bg-[#131722] border border-[#202738]">
                  <span className="text-xs font-mono uppercase text-[#a3e635] font-bold block mb-1">
                    Your Time Requirement
                  </span>
                  <p className="text-xs text-[#d1d5db] leading-relaxed">
                    {activeStep.clientInvolvement}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#121620] border border-[#1f2536]">
                  <span className="text-xs font-mono uppercase text-[#86efac] font-bold block mb-1">
                    Risk & Security Safeguard
                  </span>
                  <p className="text-xs text-[#9ca3af] leading-relaxed">
                    All stages use isolated testing environments before anything writes to live client records. Zero downtime or operational disruption.
                  </p>
                </div>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-3.5 rounded-xl font-semibold text-xs bg-[#a3e635] text-[#090b0e] hover:bg-[#b8f542] transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <span>Book Stage 01 Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. FULL FAQ ACCORDION SECTION */}
      {/* ============================================================ */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center mb-14">
          <span className="font-mono text-xs font-semibold text-[#a3e635] uppercase tracking-wider">
            Common Questions
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f4f4f2] mt-3">
            Everything you need to know
          </h2>
          <p className="text-sm sm:text-base text-[#9ca3af] mt-3">
            Honest answers about technology, integrations, timelines, and security.
          </p>
        </div>

        <FAQ />

        <div className="mt-14 p-6 rounded-2xl bg-[#0e1117] border border-[#1d232e] text-center">
          <h4 className="text-base font-bold text-white">Have a specific question about your software?</h4>
          <p className="text-xs text-[#9ca3af] mt-1">
            Send us your current tools and workflow description for a quick feasibility confirmation.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="mt-4 px-5 py-2.5 rounded-xl font-semibold text-xs bg-[#181d27] hover:bg-[#232938] text-[#a3e635] border border-[#2a3446] transition-colors inline-flex items-center gap-1.5"
          >
            <span>Ask an Engineer</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
