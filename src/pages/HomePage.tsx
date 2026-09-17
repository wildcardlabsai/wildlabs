import React from 'react';
import { motion } from 'motion/react';
import { PageId } from '../types';
import { Workflow } from '../components/Workflow';
import { ServiceCard } from '../components/ServiceCard';
import { IntegrationGrid } from '../components/IntegrationGrid';
import { AIEmployeeCard } from '../components/AIEmployeeCard';
import { 
  SERVICES_DATA, 
  AI_EMPLOYEES_DATA, 
  PROBLEM_CARDS, 
  WHO_ITS_FOR_CARDS 
} from '../data/content';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Check, 
  X, 
  Clock, 
  TrendingUp, 
  Cpu, 
  Sparkles,
  CopyCheck,
  MailCheck,
  TableProperties,
  FileText,
  Keyboard,
  PieChart,
  Layers,
  ShieldCheck,
  Layout,
  Code2,
  BrainCircuit
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

const PROBLEM_ICON_MAP: Record<string, React.ElementType> = {
  Layout,
  Code2,
  BrainCircuit,
  CopyCheck,
  Clock,
  MailCheck,
  TableProperties,
  FileText,
  Keyboard,
  TrendingUp,
  PieChart,
  Layers,
};

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* ============================================================ */}
      {/* 1. HERO SECTION */}
      {/* ============================================================ */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        {/* Subtle geometric background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#9ee82b]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Top pill tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#13171f] border border-[#232936] text-xs text-[#d1d5db] mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#a3e635] animate-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#a3e635] font-semibold">
                Software, AI & Automation
              </span>
              <span className="text-[#52525b]">•</span>
              <span className="text-[#9ca3af]">UK Technology Consultancy</span>
            </div>

            {/* Large headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#f4f4f2] leading-[1.08]">
              Engineering your digital{' '}
              <span className="text-[#a3e635] inline-block underline decoration-[#a3e635]/30 decoration-wavy underline-offset-8">
                infrastructure.
              </span>
            </h1>

            {/* Supporting copy */}
            <p className="mt-7 text-lg sm:text-xl text-[#9ca3af] max-w-2xl mx-auto leading-relaxed">
              Wildcard Labs builds bespoke software, intelligent AI integrations, high-performance web design, and seamless automation to help your business scale without increasing overhead.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                id="hero-cta-primary"
                onClick={() => onNavigate('what-we-automate')}
                className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-sm bg-[#a3e635] text-[#090b0e] hover:bg-[#b8f542] transition-all duration-200 shadow-[0_4px_25px_rgba(163,230,53,0.25)] flex items-center justify-center gap-2"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-cta-secondary"
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-sm bg-[#141820] hover:bg-[#1c222e] text-[#f4f4f2] border border-[#232936] transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Talk to Wildcard Labs</span>
                <ArrowUpRight className="w-4 h-4 text-[#a3e635]" />
              </button>
            </div>
          </div>

          {/* Distinctive Visual Beside/Below Hero: Interactive Automated Workflow */}
          <div className="mt-16 sm:mt-20 max-w-5xl mx-auto">
            <Workflow />
          </div>
        </div>
      </motion.section>

      {/* ============================================================ */}
      {/* 2. TRUST STRIP */}
      {/* ============================================================ */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-8 border-y border-[#161a23] bg-[#0b0d12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <p className="text-sm font-medium text-[#d1d5db] text-center lg:text-left">
              Built for businesses that are tired of doing things manually.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
              {[
                'Sales',
                'Customer Service',
                'Operations',
                'Finance',
                'Admin',
                'Marketing',
                'HR'
              ].map((category) => (
                <span
                  key={category}
                  className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#13161c] text-[#a1a1aa] border border-[#1f242d]"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ============================================================ */}
      {/* 3. SECTION — THE PROBLEM */}
      {/* ============================================================ */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-24 sm:py-32 bg-[#090b0e] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-semibold text-[#a3e635] uppercase tracking-wider">
              The Real Cost of Digital Friction
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f4f4f2] mt-3 leading-tight">
              Bad infrastructure is expensive. Even when nobody sends an invoice.
            </h2>
            <p className="text-base sm:text-lg text-[#9ca3af] mt-4 leading-relaxed">
              When teams rely on fragmented SaaS tools, outdated websites, or spend hours re-typing information, you aren't just losing time—you are stalling growth and frustrating your best people.
            </p>
          </div>

          {/* 9 Problem Cards */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROBLEM_CARDS.map((card, idx) => {
              const Icon = PROBLEM_ICON_MAP[card.icon] || Layers;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#10131a] border border-[#1b202a] hover:border-[#2b3343] transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#161a22] border border-[#232936] flex items-center justify-center text-[#e4e4e7] mb-4">
                      <Icon className="w-5 h-5 text-[#a3e635]" />
                    </div>
                    <h3 className="text-base font-bold text-[#f4f4f2]">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#9ca3af] mt-2 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Closing Statement */}
          <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#11141c] border border-[#212735] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="max-w-2xl">
              <p className="text-lg sm:text-xl font-bold text-white leading-snug">
                If your team does the same task repeatedly, there’s a good chance it can be automated.
              </p>
              <p className="text-xs text-[#71717a] mt-1">
                We perform an initial feasibility review of your tools at zero obligation.
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#a3e635] text-[#090b0e] hover:bg-[#b8f542] font-semibold text-xs transition-colors shrink-0"
            >
              <span>Explore Feasibility</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.section>

      {/* ============================================================ */}
      {/* 4. SECTION — WHAT WE AUTOMATE */}
      {/* ============================================================ */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-24 sm:py-32 bg-[#0c0e13] border-t border-[#161a23]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-semibold text-[#a3e635] uppercase tracking-wider">
                Services & Capabilities
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f4f4f2] mt-3 leading-tight">
                We automate the work behind the work.
              </h2>
              <p className="text-base text-[#9ca3af] mt-3 leading-relaxed">
                Six dedicated areas where custom AI workflows and API automation consistently reclaim tens of hours each week.
              </p>
            </div>

            <button
              onClick={() => onNavigate('what-we-automate')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#a3e635] hover:underline self-start md:self-end"
            >
              <span>View detailed breakdowns</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 6 Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((service) => (
              <ServiceCard
                key={service.id}
                item={service}
                onExplore={() => onNavigate('what-we-automate')}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* ============================================================ */}
      {/* 5. SECTION — BEFORE / AFTER COMPARISON */}
      {/* ============================================================ */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-24 sm:py-32 bg-[#090b0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs font-semibold text-[#a3e635] uppercase tracking-wider">
              Measurable Transformation
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f4f4f2] mt-3 leading-tight">
              From hours of admin to an automated workflow.
            </h2>
            <p className="text-base text-[#9ca3af] mt-4">
              Here is what happens when a single common operational process is transformed by Wildcard Labs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Left Card: BEFORE */}
            <div className="rounded-2xl p-7 sm:p-8 bg-[#111319] border border-[#232630] flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-[#251818] border-b border-l border-[#4a2626] rounded-bl-xl text-xs font-mono text-red-400 font-bold uppercase">
                Manual Workflow
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-red-950/50 border border-red-800/40 text-red-400 flex items-center justify-center font-bold text-xs">
                    <X className="w-4 h-4" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#f4f4f2]">BEFORE</h3>
                </div>

                <div className="space-y-3 font-mono text-xs text-[#a1a1aa]">
                  <div className="p-3 rounded-xl bg-[#161820] border border-[#222633] text-white font-medium">
                    New enquiry arrives
                  </div>
                  <div className="flex items-center gap-2 pl-3 text-red-400/80">
                    <span>→</span> <span>Employee reads email in inbox</span>
                  </div>
                  <div className="flex items-center gap-2 pl-3 text-red-400/80">
                    <span>→</span> <span>Copies customer details</span>
                  </div>
                  <div className="flex items-center gap-2 pl-3 text-red-400/80">
                    <span>→</span> <span>Opens CRM</span>
                  </div>
                  <div className="flex items-center gap-2 pl-3 text-red-400/80">
                    <span>→</span> <span>Creates customer record manually</span>
                  </div>
                  <div className="flex items-center gap-2 pl-3 text-red-400/80">
                    <span>→</span> <span>Sends manual response email</span>
                  </div>
                  <div className="flex items-center gap-2 pl-3 text-red-400/80">
                    <span>→</span> <span>Adds follow-up reminder in calendar</span>
                  </div>
                  <div className="flex items-center gap-2 pl-3 text-red-400/80">
                    <span>→</span> <span>Updates tracker spreadsheet</span>
                  </div>
                  <div className="flex items-center gap-2 pl-3 text-red-400/80">
                    <span>→</span> <span>Tells sales team in chat</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-[#1c1f28] flex items-center justify-between">
                <span className="text-xs text-[#71717a]">Estimated time per enquiry:</span>
                <span className="font-mono text-sm font-bold text-red-400">15–20 minutes</span>
              </div>
            </div>

            {/* Right Card: WITH WILDCARD LABS */}
            <div className="rounded-2xl p-7 sm:p-8 bg-[#10141a] border-2 border-[#a3e635] shadow-[0_0_35px_rgba(163,230,53,0.15)] flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-[#172512] border-b border-l border-[#2e4719] rounded-bl-xl text-xs font-mono text-[#a3e635] font-bold uppercase">
                Intelligent Automation
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-[#182512] border border-[#2b441a] text-[#a3e635] flex items-center justify-center font-bold text-xs">
                    <Check className="w-4 h-4" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">WITH WILDCARD LABS</h3>
                </div>

                <div className="space-y-3 font-mono text-xs text-[#d1d5db]">
                  <div className="p-3 rounded-xl bg-[#161c24] border border-[#283244] text-white font-medium">
                    New enquiry arrives
                  </div>
                  <div className="flex items-center gap-2 pl-3 text-[#a3e635]">
                    <span>→</span> <span>AI understands intent & context</span>
                  </div>
                  <div className="flex items-center gap-2 pl-3 text-[#a3e635]">
                    <span>→</span> <span>Customer information extracted</span>
                  </div>
                  <div className="flex items-center gap-2 pl-3 text-[#a3e635]">
                    <span>→</span> <span>CRM updated & enriched</span>
                  </div>
                  <div className="flex items-center gap-2 pl-3 text-[#a3e635]">
                    <span>→</span> <span>Response prepared/sent with calendar</span>
                  </div>
                  <div className="flex items-center gap-2 pl-3 text-[#a3e635]">
                    <span>→</span> <span>Automated follow-up created</span>
                  </div>
                  <div className="flex items-center gap-2 pl-3 text-[#a3e635]">
                    <span>→</span> <span>Team notified with complete brief</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-[#1c2432] flex items-center justify-between">
                <span className="text-xs text-[#a1a1aa]">Estimated human involvement:</span>
                <span className="font-mono text-sm font-bold text-[#a3e635]">Minutes, not hours.</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ============================================================ */}
      {/* 6. SECTION — HOW IT WORKS */}
      {/* ============================================================ */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-24 sm:py-32 bg-[#0c0e13] border-t border-[#161a23]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs font-semibold text-[#a3e635] uppercase tracking-wider">
              Straightforward Methodology
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f4f4f2] mt-3 leading-tight">
              Digital solutions without the headache.
            </h2>
            <p className="text-base text-[#9ca3af] mt-4">
              We manage the end-to-end technical build, whether it is custom software, web design, or a complex AI integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Step 01 */}
            <div className="p-7 rounded-2xl bg-[#10131a] border border-[#1b202a] flex flex-col justify-between">
              <div>
                <span className="font-mono text-2xl font-black text-[#a3e635]">01</span>
                <h3 className="text-xl font-bold text-white mt-4">Find the work</h3>
                <p className="text-sm text-[#9ca3af] mt-3 leading-relaxed">
                  We identify repetitive processes that are costing your team time, map the data inputs, and calculate the exact return on investment.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#171b23] text-xs font-mono text-[#71717a]">
                Outcome: Clear feasibility scope & timeline
              </div>
            </div>

            {/* Step 02 */}
            <div className="p-7 rounded-2xl bg-[#10131a] border border-[#1b202a] flex flex-col justify-between">
              <div>
                <span className="font-mono text-2xl font-black text-[#a3e635]">02</span>
                <h3 className="text-xl font-bold text-white mt-4">Build the workflow</h3>
                <p className="text-sm text-[#9ca3af] mt-3 leading-relaxed">
                  We connect your existing tools and create an automated process around the way your business actually works, with human approval checkpoints.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#171b23] text-xs font-mono text-[#71717a]">
                Outcome: Secure end-to-end API integration
              </div>
            </div>

            {/* Step 03 */}
            <div className="p-7 rounded-2xl bg-[#10131a] border border-[#1b202a] flex flex-col justify-between">
              <div>
                <span className="font-mono text-2xl font-black text-[#a3e635]">03</span>
                <h3 className="text-xl font-bold text-white mt-4">Let it run</h3>
                <p className="text-sm text-[#9ca3af] mt-3 leading-relaxed">
                  Your automation handles the repetitive work quietly in the background while your team focuses on the things that actually need people.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#171b23] text-xs font-mono text-[#71717a]">
                Outcome: 24/7 reliability with hypercare
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('how-it-works')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#141822] hover:bg-[#1c2230] text-sm font-semibold text-white border border-[#242c3c] transition-all"
            >
              <span>See How It Works in Detail</span>
              <ArrowRight className="w-4 h-4 text-[#a3e635]" />
            </button>
          </div>
        </div>
      </motion.section>

      {/* ============================================================ */}
      {/* 7. SECTION — AI EMPLOYEES */}
      {/* ============================================================ */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-24 sm:py-32 bg-[#090b0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="font-mono text-xs font-semibold text-[#a3e635] uppercase tracking-wider">
              Autonomous Digital Workers
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f4f4f2] mt-3 leading-tight">
              Think of it as adding another member to the team.
            </h2>
            <p className="text-base sm:text-lg text-[#9ca3af] mt-4 leading-relaxed">
              Wildcard Labs can create specialised AI-powered workers that handle defined business processes around the clock — not cartoon chatbots, but sophisticated workflow agents with strict boundary rules.
            </p>
          </div>

          {/* 4 AI Employee Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {AI_EMPLOYEES_DATA.slice(0, 4).map((worker) => (
              <AIEmployeeCard
                key={worker.id}
                employee={worker}
                onSelect={() => onNavigate('ai-employees')}
              />
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-[#0f131a] border border-[#1f242f]">
            <p className="text-sm text-[#d1d5db]">
              <strong className="text-white">Boundary Principle:</strong> AI employees don’t replace judgement, relationships or responsibility. They handle the repetitive work around them.
            </p>
            <button
              onClick={() => onNavigate('ai-employees')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#a3e635] text-[#090b0e] hover:bg-[#b8f542] font-semibold text-xs transition-colors shrink-0"
            >
              <span>Explore AI Employees</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </motion.section>

      {/* ============================================================ */}
      {/* 8. SECTION — INTEGRATIONS */}
      {/* ============================================================ */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-24 sm:py-32 bg-[#0c0e13] border-t border-[#161a23]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs font-semibold text-[#a3e635] uppercase tracking-wider">
              Universal Connectivity
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f4f4f2] mt-3 leading-tight">
              Your software. Connected.
            </h2>
            <p className="text-base text-[#9ca3af] mt-4 leading-relaxed">
              Wildcard Labs works around the systems your business already uses rather than forcing you to replace everything.
            </p>
          </div>

          <IntegrationGrid />
        </div>
      </motion.section>

      {/* ============================================================ */}
      {/* 9. SECTION — RESULTS (High-Impact Dark Section) */}
      {/* ============================================================ */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-24 sm:py-32 bg-[#07080b] border-y border-[#181c26] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs font-semibold text-[#a3e635] uppercase tracking-wider">
              Pragmatic Business Outcomes
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f4f4f2] mt-3 leading-tight">
              The goal isn’t just technology. It’s business velocity.
            </h2>
            <p className="text-base text-[#9ca3af] mt-4 leading-relaxed">
              From bespoke platforms to high-conversion websites, our engineering translates directly into measurable business outcomes:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-[#0e1117] border border-[#1c222e]">
              <div className="text-5xl sm:text-6xl font-black text-[#a3e635] font-mono">
                10+ hrs
              </div>
              <h3 className="text-lg font-bold text-white mt-4">
                Potential weekly admin saved
              </h3>
              <p className="text-xs sm:text-sm text-[#9ca3af] mt-2 leading-relaxed">
                By eliminating copy-pasting between inboxes, accounting tools, and project management trackers.
              </p>
              <span className="text-[11px] font-mono text-[#52525b] mt-4 block">
                Typical opportunity per operational team
              </span>
            </div>

            <div className="p-8 rounded-2xl bg-[#0e1117] border border-[#1c222e]">
              <div className="text-5xl sm:text-6xl font-black text-[#a3e635] font-mono">
                24/7
              </div>
              <h3 className="text-lg font-bold text-white mt-4">
                Automated processing
              </h3>
              <p className="text-xs sm:text-sm text-[#9ca3af] mt-2 leading-relaxed">
                Customer enquiries qualified, invoices triaged, and handoffs executed outside normal office hours.
              </p>
              <span className="text-[11px] font-mono text-[#52525b] mt-4 block">
                Zero queue backlog on Monday mornings
              </span>
            </div>

            <div className="p-8 rounded-2xl bg-[#0e1117] border border-[#1c222e]">
              <div className="text-5xl sm:text-6xl font-black text-[#a3e635] font-mono">
                1 workflow
              </div>
              <h3 className="text-lg font-bold text-white mt-4">
                Replacing multiple manual steps
              </h3>
              <p className="text-xs sm:text-sm text-[#9ca3af] mt-2 leading-relaxed">
                Connecting CRM, email, accounting, and messaging so information flows without human intervention.
              </p>
              <span className="text-[11px] font-mono text-[#52525b] mt-4 block">
                Zero duplicate data entry
              </span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ============================================================ */}
      {/* 10. SECTION — WHO IT'S FOR */}
      {/* ============================================================ */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-24 sm:py-32 bg-[#090b0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="font-mono text-xs font-semibold text-[#a3e635] uppercase tracking-wider">
              Organisational Fit
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f4f4f2] mt-3 leading-tight">
              Built for businesses that have outgrown manual processes.
            </h2>
            <p className="text-base text-[#9ca3af] mt-4 leading-relaxed">
              You don’t need a huge IT department. You just need a process worth improving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHO_ITS_FOR_CARDS.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#10131a] border border-[#1b202a] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-[#161a22] text-[#a3e635] border border-[#242c3b]">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#171b24] flex items-center gap-2 text-xs font-mono text-[#86efac]">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{item.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ============================================================ */}
      {/* 11. FINAL CTA SECTION */}
      {/* ============================================================ */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-24 sm:py-32 bg-[#0d1017] border-t border-[#1b202a] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="font-mono text-xs font-semibold text-[#a3e635] uppercase tracking-wider">
            Start An Initial Review
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#f4f4f2] mt-4 leading-tight">
            Tell us what your team does manually.{' '}
            <span className="text-[#a3e635]">We’ll show you what could disappear.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[#9ca3af] max-w-2xl mx-auto leading-relaxed">
            No complicated pitch. No AI buzzwords. Just a look at where automation could save your business time.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm bg-[#a3e635] text-[#090b0e] hover:bg-[#b8f542] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('solutions')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm bg-[#141822] hover:bg-[#1d222e] text-[#f4f4f2] border border-[#242a38] transition-all"
            >
              <span>Explore Solutions</span>
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#71717a]">
            <ShieldCheck className="w-4 h-4 text-[#86efac]" />
            <span>UK-based engineering team • No software replacement needed</span>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
