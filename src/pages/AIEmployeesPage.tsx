import React, { useState } from 'react';
import { PageId, AIEmployeeItem } from '../types';
import { AI_EMPLOYEES_DATA } from '../data/content';
import { AIEmployeeCard } from '../components/AIEmployeeCard';
import { 
  Bot, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Sliders, 
  Layers, 
  Cpu, 
  Clock, 
  Users,
  Sparkles,
  Lock,
  Loader2
} from 'lucide-react';

interface AIEmployeesPageProps {
  onNavigate: (page: PageId) => void;
}

export const AIEmployeesPage: React.FC<AIEmployeesPageProps> = ({ onNavigate }) => {
  const [activeAssistantId, setActiveAssistantId] = useState<string>('lead-assistant');

  // Interactive Configurator State
  const [customRole, setCustomRole] = useState('Inbound Operations Specialist');
  const [triggerEvent, setTriggerEvent] = useState('Email with attachment arrives');
  const [approvalThreshold, setApprovalThreshold] = useState('Flag items > £500 for human 1-click approval');
  const [configuredSuccess, setConfiguredSuccess] = useState(false);

  // AI Scenario Tester State
  const [scenarioInput, setScenarioInput] = useState('');
  const [scenarioResult, setScenarioResult] = useState<string | null>(null);
  const [isScenariLoading, setIsScenarioLoading] = useState(false);

  const handleTestScenario = async () => {
    if (!scenarioInput.trim()) return;
    setIsScenarioLoading(true);
    setScenarioResult(null);
    try {
      const res = await fetch('/api/scenario', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ scenario: scenarioInput })
      });
      const data = await res.json();
      if (data.result) {
        setScenarioResult(data.result);
      } else {
        setScenarioResult("Failed to generate response. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setScenarioResult("An error occurred while processing the scenario.");
    } finally {
      setIsScenarioLoading(false);
    }
  };

  const selectedAssistant = AI_EMPLOYEES_DATA.find((a) => a.id === activeAssistantId) || AI_EMPLOYEES_DATA[0];

  return (
    <div className="w-full pt-32 pb-24">
      {/* ============================================================ */}
      {/* 1. HERO SECTION */}
      {/* ============================================================ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161f13] border border-[#28381c] text-xs text-[#a3e635] font-mono font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-[#a3e635] animate-pulse" />
            <span>Autonomous Operational Agents</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#f4f4f2] leading-[1.1]">
            Meet the new kind of{' '}
            <span className="text-[#a3e635]">employee.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#d1d5db] font-medium leading-relaxed max-w-3xl">
            AI workers designed to handle the repetitive jobs your team shouldn’t have to.
          </p>

          <p className="mt-4 text-sm sm:text-base text-[#9ca3af] leading-relaxed max-w-3xl">
            An AI employee is not a gimmick or a chatbot with an avatar. It is a persistent, headless software worker with permissioned access to your tools. It listens for business events, queries databases, formats documents, executes workflows, and alerts colleagues when human judgement is needed.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-7 py-3.5 rounded-xl font-semibold text-sm bg-[#a3e635] text-[#090b0e] hover:bg-[#b8f542] transition-colors inline-flex items-center gap-2 shadow-lg"
            >
              <span>Build an AI Employee</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('pricing')}
              className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#13161c] hover:bg-[#1c222c] text-white border border-[#212734] transition-colors"
            >
              <span>Deployment Scopes</span>
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. THE CORE BOUNDARY PRINCIPLE (Crucial Callout) */}
      {/* ============================================================ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="p-7 sm:p-9 rounded-3xl bg-[#111620] border-2 border-[#2b394e] shadow-xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#182312] border border-[#2e451b] flex items-center justify-center text-[#a3e635] shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-[#a3e635] font-bold tracking-wider block mb-1">
                  The Wildcard Labs Operating Standard
                </span>
                <p className="text-lg sm:text-xl font-bold text-white leading-snug">
                  AI employees don’t replace judgement, relationships or responsibility. They handle the repetitive work around them.
                </p>
                <p className="text-xs sm:text-sm text-[#9ca3af] mt-2 max-w-2xl leading-relaxed">
                  Every AI employee is deployed with hard failure boundaries, deterministic validation gates, and human approval checkpoints for sensitive decisions.
                </p>
              </div>
            </div>

            <div className="shrink-0 px-4 py-3 rounded-xl bg-[#090b0e] border border-[#1e2533] text-xs font-mono text-[#a1a1aa] flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#86efac]" />
              <span>Permissioned & Audited</span>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. DETAILED VISUAL EXAMPLES (All 5 Roles) */}
      {/* ============================================================ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-mono text-xs font-semibold text-[#a3e635] uppercase tracking-wider">
            Standard Digital Worker Profiles
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f4f4f2] mt-3">
            Five specialized roles ready for configuration
          </h2>
          <p className="text-sm sm:text-base text-[#9ca3af] mt-3">
            Click on any worker below to inspect their operating parameters, system connectors, and human team boundaries.
          </p>
        </div>

        {/* Worker Selector Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {AI_EMPLOYEES_DATA.map((worker) => (
            <button
              key={worker.id}
              onClick={() => setActiveAssistantId(worker.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeAssistantId === worker.id
                  ? 'bg-[#a3e635] text-[#090b0e] shadow-md'
                  : 'bg-[#10131a] text-[#9ca3af] hover:text-white hover:bg-[#171b23] border border-[#1e2430]'
              }`}
            >
              {worker.title}
            </button>
          ))}
        </div>

        {/* Deep Spec Panel for Active Worker */}
        <div className="rounded-3xl bg-[#0e1218] border border-[#1f2635] p-7 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Specs */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#a3e635] mb-1">
                  <span>ROLE SPECIFICATION</span>
                  <span>•</span>
                  <span>{selectedAssistant.whenItRuns}</span>
                </div>
                <h3 className="text-3xl font-extrabold text-white">
                  {selectedAssistant.title}
                </h3>
                <p className="text-sm font-semibold text-[#d4d4d8] mt-1">
                  {selectedAssistant.tagline}
                </p>
                <p className="text-sm text-[#9ca3af] mt-3 leading-relaxed">
                  {selectedAssistant.whatItDoes}
                </p>
              </div>

              {/* What It Connects To */}
              <div>
                <span className="text-xs font-mono text-[#71717a] uppercase tracking-wider block mb-2 font-bold">
                  What It Connects To:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedAssistant.whatItConnectsTo.map((c, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-[#141922] border border-[#232b3a] text-xs text-[#f4f4f2] font-mono"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* What Tasks It Handles */}
              <div>
                <span className="text-xs font-mono text-[#a3e635] uppercase tracking-wider block mb-2 font-bold">
                  What Tasks It Handles Autonomously:
                </span>
                <div className="space-y-2">
                  {selectedAssistant.tasksHandled.map((t, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#d1d5db]">
                      <CheckCircle2 className="w-4 h-4 text-[#a3e635] shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Card: Operating Schedule & Boundaries */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-[#090b0e] border border-[#1b222f] p-6 space-y-6">
              <div className="space-y-4">
                {/* Operating Hours */}
                <div className="p-4 rounded-xl bg-[#121620] border border-[#1e2534]">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#a3e635] font-bold uppercase mb-1">
                    <Clock className="w-4 h-4" />
                    <span>When It Runs</span>
                  </div>
                  <p className="text-xs text-[#d1d5db]">{selectedAssistant.whenItRuns}</p>
                </div>

                {/* Human Responsibility */}
                <div className="p-4 rounded-xl bg-[#151c14] border border-[#28381e]">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#86efac] font-bold uppercase mb-1">
                    <Users className="w-4 h-4" />
                    <span>Human Team Remains Responsible For</span>
                  </div>
                  <p className="text-xs text-[#d1d5db] leading-relaxed">
                    {selectedAssistant.humanResponsibility}
                  </p>
                </div>

                {/* Scenario Snapshot */}
                <div className="p-4 rounded-xl bg-[#11141b] border border-[#1e232e] text-xs">
                  <span className="text-[10px] font-mono text-[#71717a] uppercase block mb-1 font-bold">
                    Sample Inbound Scenario:
                  </span>
                  <p className="text-white italic">&ldquo;{selectedAssistant.sampleTrigger}&rdquo;</p>
                  <span className="text-[10px] font-mono text-[#a3e635] uppercase block mt-3 mb-1 font-bold">
                    System Execution:
                  </span>
                  <p className="text-[#a1a1aa]">{selectedAssistant.sampleOutput}</p>
                </div>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-3.5 rounded-xl font-semibold text-xs bg-[#a3e635] text-[#090b0e] hover:bg-[#b8f542] transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <span>Deploy {selectedAssistant.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Grid of all 5 cards for quick comparison */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AI_EMPLOYEES_DATA.map((worker) => (
            <AIEmployeeCard
              key={worker.id}
              employee={worker}
              onSelect={() => onNavigate('contact')}
            />
          ))}
        </div>
      </div>

      {/* ============================================================ */}
      {/* 4. INTERACTIVE BUILDER DEMO / SCOPING SANDBOX */}
      {/* ============================================================ */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0f131a] border border-[#222836] shadow-xl">
          <div className="max-w-2xl mb-8">
            <span className="font-mono text-xs font-semibold text-[#a3e635] uppercase tracking-wider">
              Interactive Blueprint
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              Configure your ideal AI Employee
            </h3>
            <p className="text-xs sm:text-sm text-[#9ca3af] mt-2">
              Test how custom roles, trigger conditions, and human approval rules fit together before we write any code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-xs font-semibold text-[#d4d4d8] mb-2">
                1. Target Role Title
              </label>
              <input
                type="text"
                value={customRole}
                onChange={(e) => setCustomRole(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#141822] border border-[#232938] text-xs text-white focus:outline-none focus:border-[#a3e635]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#d4d4d8] mb-2">
                2. Operational Trigger
              </label>
              <select
                value={triggerEvent}
                onChange={(e) => setTriggerEvent(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#141822] border border-[#232938] text-xs text-white focus:outline-none focus:border-[#a3e635]"
              >
                <option value="Email with attachment arrives">Supplier PDF attachment arrives in finance inbox</option>
                <option value="Web enquiry form submitted">New high-intent lead form submitted on website</option>
                <option value="Contract signed in DocuSign">Client agreement electronically signed</option>
                <option value="Nightly database batch sweep">Scheduled 6:00 AM cross-platform data sweep</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-xs font-semibold text-[#d4d4d8] mb-2">
              3. Human Approval Gate Rule
            </label>
            <input
              type="text"
              value={approvalThreshold}
              onChange={(e) => setApprovalThreshold(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#141822] border border-[#232938] text-xs text-white focus:outline-none focus:border-[#a3e635]"
            />
          </div>

          {/* Blueprint Result Card */}
          <div className="p-5 rounded-2xl bg-[#090b0e] border border-[#1c232f] text-xs space-y-2 mb-6 font-mono">
            <div className="flex items-center justify-between pb-2 border-b border-[#181f2a]">
              <span className="text-[#a3e635] font-bold uppercase">Wildcard Labs Blueprint Spec:</span>
              <span className="text-[10px] text-[#71717a]">Ready for scoping</span>
            </div>
            <p className="text-[#d1d5db]">
              <strong className="text-white">Role:</strong> {customRole}
            </p>
            <p className="text-[#d1d5db]">
              <strong className="text-white">Trigger:</strong> {triggerEvent}
            </p>
            <p className="text-[#86efac]">
              <strong className="text-white">Guardrail:</strong> {approvalThreshold}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#71717a]">
              We configure tailored digital workers in 2–4 weeks.
            </span>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-xs bg-[#a3e635] text-[#090b0e] hover:bg-[#b8f542] transition-colors flex items-center justify-center gap-2"
            >
              <span>Discuss Building This Worker</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
      {/* ============================================================ */}
      {/* 5. AI SCENARIO TESTER (GEMINI INTEGRATION) */}
      {/* ============================================================ */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0b0e13] border border-[#222836] shadow-xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-[#a3e635] opacity-[0.03] rounded-full blur-[80px]" />
          
          <div className="max-w-2xl mb-8 relative z-10">
            <span className="font-mono text-xs font-semibold text-[#a3e635] uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              Live AI Capabilities Tester
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              Test a hypothetical scenario
            </h3>
            <p className="text-xs sm:text-sm text-[#9ca3af] mt-2">
              Describe a messy, repetitive business process or inbound request. See exactly how Wildcard Labs's AI would handle it autonomously.
            </p>
          </div>

          <div className="relative z-10 space-y-4">
            <textarea
              value={scenarioInput}
              onChange={(e) => setScenarioInput(e.target.value)}
              placeholder="e.g. A new enterprise client emails our generic 'hello@' inbox asking for a quote on our premium tier, but they forgot to include their team size or location..."
              className="w-full px-4 py-4 rounded-xl bg-[#141822] border border-[#232938] text-sm text-white focus:outline-none focus:border-[#a3e635] resize-none h-32"
            />
            
            <button
              onClick={handleTestScenario}
              disabled={isScenariLoading || !scenarioInput.trim()}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-xs bg-[#a3e635] text-[#090b0e] hover:bg-[#b8f542] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
            >
              {isScenariLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Analyzing Scenario...</span>
                </>
              ) : (
                <>
                  <Bot className="w-4 h-4" />
                  <span>See How Wildcard Labs Handles It</span>
                </>
              )}
            </button>

            {/* AI Response Output */}
            {scenarioResult && (
              <div className="mt-6 p-6 rounded-2xl bg-[#0f131a] border border-[#1c232f] relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#a3e635] rounded-l-2xl" />
                <div className="flex items-center gap-2 mb-3 text-[#a3e635] font-mono text-xs font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" />
                  Automated Resolution Plan
                </div>
                <div className="text-sm text-[#d1d5db] leading-relaxed whitespace-pre-wrap">
                  {scenarioResult}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};
