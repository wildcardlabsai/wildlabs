import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  UserCheck, 
  MessageSquare, 
  FileText, 
  FileSpreadsheet, 
  GitMerge, 
  BarChart3, 
  Mail, 
  Bot, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Zap,
  ArrowUpRight, Code2, BrainCircuit, Layout
} from 'lucide-react';

interface WhatWeAutomatePageProps {
  onNavigate: (page: PageId) => void;
}

interface AutomateCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  problem: string;
  whatWildcardLabsDoes: string[];
  exampleWorkflow: {
    trigger: string;
    steps: string[];
    outcome: string;
  };
  businessBenefit: string;
  benefitStat: string;
}

const AUTOMATE_SECTIONS: AutomateCategory[] = [
  {
    id: 'software-development',
    title: 'Software Development',
    icon: Code2,
    problem: 'Off-the-shelf software rarely fits complex business logic, forcing teams to rely on messy spreadsheets, fragmented tools, and manual data synchronization.',
    whatWildcardLabsDoes: [
      'Engineer bespoke web applications and SaaS platforms tailored to your operational needs',
      'Modernize legacy systems into fast, cloud-native architecture',
      'Build custom internal portals, vendor dashboards, and client-facing applications',
      'Develop secure, scalable APIs to connect disjointed systems'
    ],
    exampleWorkflow: {
      trigger: 'Client requires a custom B2B inventory management platform.',
      steps: [
        'Architect secure, scalable database structure and authentication',
        'Develop responsive frontend dashboard using React and Tailwind',
        'Build robust backend APIs for real-time stock synchronization',
        'Deploy on cloud infrastructure with automated testing and CI/CD'
      ],
      outcome: 'A centralized, high-performance platform eliminating spreadsheet reliance.'
    },
    businessBenefit: 'Own your digital infrastructure, remove software licensing bloat, and unlock operational scale that off-the-shelf tools cannot provide.',
    benefitStat: 'Limitless custom scalability',
  },
  {
    id: 'ai-integrations',
    title: 'AI Integrations',
    icon: BrainCircuit,
    problem: 'Companies sit on mountains of unstructured data—PDFs, historical emails, support tickets—but lack the technical capability to extract value or query it efficiently.',
    whatWildcardLabsDoes: [
      'Connect state-of-the-art LLMs (Gemini, OpenAI) directly to your proprietary company data',
      'Build internal AI chatbots that can instantly retrieve answers from company wikis and policies',
      'Develop intelligent document processing tools to extract structured data from messy PDFs',
      'Implement AI-driven routing and summarization for customer support tickets'
    ],
    exampleWorkflow: {
      trigger: 'Customer service team receives 50-page complex technical manual.',
      steps: [
        'Custom RAG (Retrieval-Augmented Generation) pipeline ingests the document',
        'Employees chat with the AI assistant to instantly query specific technical specs',
        'AI provides natural language answers with exact page citations',
        'Assistant drafts formatted email responses to client queries based on the manual'
      ],
      outcome: 'Technical answers retrieved in seconds instead of hours of manual searching.'
    },
    businessBenefit: 'Unlock the value of unstructured data, drastically reduce research time, and empower your team with intelligent assistance.',
    benefitStat: '10x faster information retrieval',
  },
  {
    id: 'web-design',
    title: 'Web Design',
    icon: Layout,
    problem: 'Outdated, slow-loading websites fail to establish trust, actively hurt conversion rates, and frustrate prospective clients trying to understand your value.',
    whatWildcardLabsDoes: [
      'Design modern, visually striking user interfaces (UI) aligned with your brand identity',
      'Engineer lightning-fast, high-performance frontend architecture (React, Next.js)',
      'Optimize user journeys (UX) specifically for higher lead conversion',
      'Implement technical SEO fundamentals and responsive mobile-first layouts'
    ],
    exampleWorkflow: {
      trigger: 'Visitor lands on your company website from a Google search.',
      steps: [
        'Site loads instantly (< 1 second) with seamless entrance animations',
        'Clear value proposition and social proof establish immediate trust',
        'Intuitive navigation guides the user to tailored service pages',
        'High-converting lead capture form seamlessly syncs directly to your CRM'
      ],
      outcome: 'Higher trust, longer engagement, and a significant increase in qualified inbound leads.'
    },
    businessBenefit: 'Turn your digital storefront into a high-performance asset that drives revenue and elevates brand perception.',
    benefitStat: 'Optimized conversion rates',
  },
  {
    id: 'lead-sales',
    title: 'Lead & Sales Automation',
    icon: UserCheck,
    problem: 'Inbound sales enquiries wait hours or days for replies. Sales reps spend up to 40% of their working hours manually qualifying leads, checking Companies House, copy-pasting into CRM, and sending scheduling emails.',
    whatWildcardLabsDoes: [
      'Ingest enquiries from web forms, shared inboxes, and phone transcripts within 60 seconds',
      'Enrich leads automatically with company size, industry, revenue estimates, and key stakeholders',
      'Intelligently score lead urgency and assign to the exact account executive with pre-researched notes',
      'Send custom calendar booking invites based on real-time availability and deal size'
    ],
    exampleWorkflow: {
      trigger: 'Prospect submits form on your website requesting a consultation.',
      steps: [
        'AI parses intent, requirements, and budget constraints',
        'Looks up company registration number and director records',
        'Creates deal in HubSpot/Salesforce with enriched intelligence',
        'Dispatches tailored email with direct booking link to the appropriate senior consultant'
      ],
      outcome: 'Lead received, enriched, and booked in under 3 minutes — zero sales rep clerical effort.'
    },
    businessBenefit: '5x faster lead response time, zero lost pipeline over weekends, and sales teams focused 100% on pitching and closing.',
    benefitStat: 'Sub-3 min response latency',
  },
  {
    id: 'customer-service',
    title: 'Customer Service Automation',
    icon: MessageSquare,
    problem: 'Support teams drown in the same 10 routine transactional questions: "Where is my order?", "Can I change my delivery address?", "How do I get an invoice copy?", creating backlog and delaying urgent client escalations.',
    whatWildcardLabsDoes: [
      'Understand natural customer phrasing, sentiment, and account context without frustrating chatbot trees',
      'Query your live database or ERP to provide accurate, real-time answers (order status, tracking, account balance)',
      'Prepare one-click draft replies for human agents when complex situations or complaints occur',
      'Seamlessly escalate to the right team member with full history and suggested resolution'
    ],
    exampleWorkflow: {
      trigger: 'Client emails support asking to change shipment delivery destination.',
      steps: [
        'AI retrieves client order ID and checks warehouse status API',
        'Validates order is not yet packed or dispatched',
        'Updates delivery address in logistics carrier system',
        'Sends friendly confirmation to client and leaves audit note in CRM'
      ],
      outcome: 'Client query resolved in 45 seconds without consuming agent time.'
    },
    businessBenefit: '60%+ reduction in routine ticket volume, immediate client satisfaction, and human agents focused on relationship-critical interactions.',
    benefitStat: '60% routine ticket deflection',
  },
  {
    id: 'admin-data-entry',
    title: 'Admin Automation',
    icon: FileText,
    problem: 'Staff re-keying customer information between spreadsheets, billing software, and operational databases. Typos result in failed payments, missing shipments, and countless hours auditing mismatches.',
    whatWildcardLabsDoes: [
      'Bridge disconnected software tools without requiring expensive enterprise migration projects',
      'Synchronise master customer records, address changes, and billing details across all platforms',
      'Validate data formatting and tax IDs before writing to accounting systems',
      'Eliminate manual copy-pasting between legacy desktop software and cloud web applications'
    ],
    exampleWorkflow: {
      trigger: 'Client signs onboarding form or changes bank details.',
      steps: [
        'Data parsed and verified against existing account records',
        'Cross-system validation (checks VAT number validity)',
        'Simultaneously updates billing platform, ERP, and CRM',
        'Logs timestamped audit record for compliance'
      ],
      outcome: 'Master database updated across 3 software tools with zero manual typing.'
    },
    businessBenefit: 'Eliminates administrative backlog, removes human transposition errors, and saves 8–15 staff hours per week.',
    benefitStat: 'Zero transposition errors',
  },
  {
    id: 'document-processing',
    title: 'Document Automation',
    icon: FileSpreadsheet,
    problem: 'Receiving hundreds of supplier invoices, bills of lading, delivery notes, and purchase orders in varying PDF formats. Staff spend days opening files and manually entering numbers into accounting software.',
    whatWildcardLabsDoes: [
      'Extract tabular data, line items, VAT numbers, dates, and amounts from any document layout',
      'No rigid coordinate templates required — our semantic models adapt to changing supplier layouts',
      'Automatically match incoming invoices against approved purchase orders and delivery confirmations',
      'Draft bills in Xero, QuickBooks, or SAP ready for single-click human sign-off'
    ],
    exampleWorkflow: {
      trigger: 'Supplier sends PDF invoice to accounts payable inbox.',
      steps: [
        'Document vision parser extracts supplier details and 18 line items',
        'Cross-checks total against approved purchase order #7419',
        'Pre-populates draft bill in Xero with exact tax codes',
        'Sends interactive approval button in Slack/Teams to Finance Director'
      ],
      outcome: 'Invoice processed, matched, and ready for payment in 15 seconds.'
    },
    businessBenefit: 'Cut invoice processing costs by up to 80%, catch supplier overcharging automatically, and eliminate late payment penalties.',
    benefitStat: '80% processing cost reduction',
  },
  {
    id: 'operations-automation',
    title: 'Operations Automation',
    icon: GitMerge,
    problem: 'Project kickoffs and operational handovers stall in employee inboxes. When a deal closes, creating project boards, assigning team members, and sending client kickoff packs takes days of manual coordination.',
    whatWildcardLabsDoes: [
      'Trigger multi-step operational chains the moment milestone criteria are satisfied',
      'Generate templated client workspaces, shared drives, and project tracking boards instantly',
      'Coordinate cross-departmental handoffs between sales, onboarding, legal, and billing',
      'Send proactive reminders to clients for missing onboarding deliverables'
    ],
    exampleWorkflow: {
      trigger: 'Client signs electronic agreement on DocuSign.',
      steps: [
        'Generates dedicated client folder in Google Drive/SharePoint with correct permissions',
        'Creates Asana/Monday.com project board with 24 milestone tasks assigned to team leads',
        'Creates billing profile in accounting system and sets up retainer schedule',
        'Sends personalized welcome package with kickoff questionnaire to client'
      ],
      outcome: 'Client onboarded and operational kickoff ready within 2 minutes of contract signature.'
    },
    businessBenefit: 'Flawless client onboarding experience, zero dropped handoffs, and instant operational velocity for growing teams.',
    benefitStat: 'Instant client onboarding',
  },
  {
    id: 'reporting-automation',
    title: 'Reporting Automation',
    icon: BarChart3,
    problem: 'Managers wasting Friday afternoons exporting CSV files from 4 different systems, manually cleaning data in Excel, and building pivot tables for executive meetings that are outdated by Monday morning.',
    whatWildcardLabsDoes: [
      'Automatically extract and aggregate metrics from CRM, accounting, web analytics, and operational databases',
      'Reconcile conflicting metrics and detect data anomalies or unexpected variances',
      'Generate clear, plain-English executive briefings highlighting what requires leadership attention',
      'Deliver automated weekly digests directly to leadership inboxes or executive Slack channels'
    ],
    exampleWorkflow: {
      trigger: 'Scheduled execution every Monday at 6:30 AM.',
      steps: [
        'Pulls weekly sales revenue from Stripe, pipeline from HubSpot, and costs from Xero',
        'Computes gross margin and compares against quarterly forecast targets',
        'Highlights top 3 anomalies (e.g., unexpected variance in marketing ad spend)',
        'Formats clean executive brief and dispatches to directors'
      ],
      outcome: 'Leadership begins Monday with accurate, unified figures without anyone working late Friday.'
    },
    businessBenefit: 'Save 4–8 hours of managerial time weekly and make confident decisions based on real-time data instead of stale spreadsheets.',
    benefitStat: '4–8 hrs saved per manager/wk',
  },
  {
    id: 'marketing-automation',
    title: 'Marketing Automation',
    icon: Mail,
    problem: 'Generic email blasts that ignore customer behaviour. Content published inconsistently because syndicating case studies, newsletters, and social updates across platforms takes hours of manual formatting.',
    whatWildcardLabsDoes: [
      'Trigger hyper-personalised lifecycle emails based on actual customer product usage and milestones',
      'Repurpose approved case studies and long-form insights into multi-channel formats automatically',
      'Synchronise marketing audience segments dynamically between your database and ad platforms',
      'Monitor brand sentiment and competitor mentions across public web sources'
    ],
    exampleWorkflow: {
      trigger: 'Customer completes 30 days of active service with high engagement score.',
      steps: [
        'Calculates customized ROI report showing client their exact operational savings',
        'Generates bespoke quarterly check-in draft email from their assigned account director',
        'Prompts account director for 1-click review and approval before dispatch'
      ],
      outcome: 'Meaningful, high-value client retention touchpoint sent at the optimal psychological moment.'
    },
    businessBenefit: 'Higher customer retention, automated referral triggers, and consistent brand presence without full-time marketing overhead.',
    benefitStat: '3x higher review response rate',
  },
  {
    id: 'ai-employees-section',
    title: 'AI Employees',
    icon: Bot,
    problem: 'Hiring full-time administrative staff to handle high-frequency, low-variance digital tasks is expensive, slow to recruit, and difficult to manage during volume surges.',
    whatWildcardLabsDoes: [
      'Deploy autonomous, persistent digital workers configured around defined business processes',
      'Equip AI employees with tool-calling capabilities across your email, databases, and business software',
      'Enforce explicit operational guardrails and human review thresholds for high-stakes decisions',
      'Maintain an unbroken audit trail of every decision, lookup, and action performed'
    ],
    exampleWorkflow: {
      trigger: 'Operational tasks arrive 24 hours a day across channels.',
      steps: [
        'AI employee ingests task, validates permissions, and retrieves necessary records',
        'Executes multi-step process across connected software tools',
        'Applies safety guardrails and routes edge cases to designated human colleagues',
        'Logs detailed execution record and confirms completion'
      ],
      outcome: 'A dedicated operational worker that never sleeps, never forgets a step, and scales infinitely.'
    },
    businessBenefit: 'Double operational capacity without adding administrative payroll, with 24/7 reliability and complete compliance control.',
    benefitStat: '24/7 operational coverage',
  },
];

export const WhatWeAutomatePage: React.FC<WhatWeAutomatePageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<string>('lead-sales');

  const selectedCategory = AUTOMATE_SECTIONS.find((s) => s.id === activeTab) || AUTOMATE_SECTIONS[0];

  return (
    <div className="w-full pt-32 pb-24">
      {/* ============================================================ */}
      {/* 1. HERO SECTION */}
      {/* ============================================================ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161a22] border border-[#242b38] text-xs text-[#a3e635] font-mono font-semibold mb-6">
            <span>Capabilities & Workflow Scope</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#f4f4f2] leading-[1.1]">
            Engineering your digital{' '}
            <span className="text-[#a3e635]">infrastructure.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#9ca3af] leading-relaxed max-w-3xl">
            From bespoke software development and high-conversion web design, to intelligent AI integrations and business automation. We build the digital tools that help your business scale without increasing overhead.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#a3e635] text-[#090b0e] hover:bg-[#b8f542] transition-colors inline-flex items-center gap-2"
            >
              <span>Audit Your Processes</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('pricing')}
              className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#13161c] hover:bg-[#1c222c] text-white border border-[#212734] transition-colors"
            >
              <span>View Indicative Pricing</span>
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. INTERACTIVE CATEGORY SELECTOR / EXPLORER */}
      {/* ============================================================ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="p-2 rounded-2xl bg-[#0e1117] border border-[#1d232e] mb-10 overflow-x-auto scrollbar-none flex items-center gap-1.5">
          {AUTOMATE_SECTIONS.map((sec) => {
            const Icon = sec.icon;
            const isActive = activeTab === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => setActiveTab(sec.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap flex items-center gap-2 transition-all ${
                  isActive
                    ? 'bg-[#a3e635] text-[#090b0e] shadow-md'
                    : 'text-[#9ca3af] hover:text-white hover:bg-[#151922]'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{sec.title}</span>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Box for Active Category */}
        <div className="rounded-3xl bg-[#10141a] border border-[#212836] p-7 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column (The Problem & What Wildcard Labs Does) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#a3e635] uppercase tracking-wider mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#a3e635]" />
                  <span>Workflow Architecture</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedCategory.title}
                </h2>
              </div>

              {/* The Problem Box */}
              <div className="p-5 rounded-2xl bg-[#171b24] border border-[#28303f]">
                <div className="flex items-center gap-2 text-xs font-bold font-mono text-red-400 uppercase tracking-wider mb-2">
                  <AlertCircle className="w-4 h-4 text-red-400" />
                  <span>The Manual Problem</span>
                </div>
                <p className="text-sm text-[#d1d5db] leading-relaxed">
                  {selectedCategory.problem}
                </p>
              </div>

              {/* What Wildcard Labs Automates */}
              <div>
                <h4 className="text-sm font-mono uppercase tracking-wider text-[#a3e635] font-bold mb-3">
                  What Wildcard Labs Automates:
                </h4>
                <div className="space-y-2.5">
                  {selectedCategory.whatWildcardLabsDoes.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-[#d4d4d8]">
                      <CheckCircle2 className="w-4 h-4 text-[#a3e635] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Benefit */}
              <div className="pt-4 border-t border-[#1c222e] flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#71717a] uppercase font-mono block">Direct Business Benefit:</span>
                  <p className="text-sm font-semibold text-white mt-0.5">{selectedCategory.businessBenefit}</p>
                </div>
              </div>
            </div>

            {/* Right Column: Live Example Workflow Simulation */}
            <div className="lg:col-span-5 rounded-2xl bg-[#090b0e] border border-[#1e2533] p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#1b222d] mb-4">
                  <span className="text-xs font-mono text-[#a3e635] uppercase font-bold flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Real-World Workflow Example</span>
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#161c24] text-[#86efac]">
                    {selectedCategory.benefitStat}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#121620] border border-[#202736] text-xs text-[#d1d5db] mb-4">
                  <span className="text-[10px] font-mono uppercase text-[#71717a] block mb-1">Inbound Event:</span>
                  <p className="italic text-white">&ldquo;{selectedCategory.exampleWorkflow.trigger}&rdquo;</p>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <span className="text-[10px] uppercase tracking-wider text-[#71717a] block">
                    Automated Actions Executed:
                  </span>
                  {selectedCategory.exampleWorkflow.steps.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2.5 text-[#a1a1aa]">
                      <span className="w-5 h-5 rounded-md bg-[#161b24] text-[#a3e635] text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-[#263142]">
                        0{sIdx + 1}
                      </span>
                      <span className="leading-snug text-[#d1d5db]">{step}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 p-3 rounded-xl bg-[#141d11] border border-[#26381a] text-xs text-[#a3e635]">
                  <strong className="block text-[10px] uppercase font-mono mb-0.5 text-white">Net Operational Result:</strong>
                  {selectedCategory.exampleWorkflow.outcome}
                </div>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="mt-6 w-full py-3 rounded-xl font-semibold text-xs bg-[#a3e635] text-[#090b0e] hover:bg-[#b8f542] transition-colors flex items-center justify-center gap-2"
              >
                <span>Automate This Specific Process</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. ALL 8 DETAILED SECTIONS IN FULL DETAIL */}
      {/* ============================================================ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold text-[#a3e635] uppercase tracking-wider">
            Comprehensive Directory
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f4f4f2] mt-3">
            Every operational area we streamline
          </h2>
          <p className="text-sm sm:text-base text-[#9ca3af] mt-3">
            Explore the exact architecture, challenges, and measurable outcomes for each capability.
          </p>
        </div>

        <div className="space-y-12">
          {AUTOMATE_SECTIONS.map((section, idx) => {
            const Icon = section.icon;
            return (
              <div
                key={section.id}
                id={`detail-${section.id}`}
                className="p-7 sm:p-9 rounded-3xl bg-[#0d1016] border border-[#1e232e] hover:border-[#2a3443] transition-all"
              >
                <div className="flex flex-col lg:flex-row items-start justify-between gap-6 pb-6 border-b border-[#181d27]">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-[#151922] text-[#a3e635] border border-[#232938] shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-[#a3e635]">0{idx + 1}</span>
                        <span className="text-[#52525b]">•</span>
                        <span className="font-mono text-xs text-[#71717a] uppercase">Capability Spec</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mt-1">{section.title}</h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-[#162012] border border-[#26371c] text-xs font-mono text-[#a3e635]">
                      {section.benefitStat}
                    </span>
                    <button
                      onClick={() => onNavigate('contact')}
                      className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#181d27] hover:bg-[#232938] text-white border border-[#273041] transition-colors"
                    >
                      Scope This
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-xs sm:text-sm">
                  <div>
                    <h4 className="font-mono text-xs uppercase text-red-400 font-bold mb-2">
                      The Pain Point
                    </h4>
                    <p className="text-[#9ca3af] leading-relaxed">{section.problem}</p>
                  </div>

                  <div>
                    <h4 className="font-mono text-xs uppercase text-[#a3e635] font-bold mb-2">
                      Automated Solution
                    </h4>
                    <ul className="space-y-2 text-[#d1d5db]">
                      {section.whatWildcardLabsDoes.slice(0, 3).map((w, wIdx) => (
                        <li key={wIdx} className="flex items-start gap-2">
                          <span className="text-[#a3e635] font-bold mt-0.5">•</span>
                          <span>{w}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-mono text-xs uppercase text-white font-bold mb-2">
                      Commercial Outcome
                    </h4>
                    <p className="text-[#9ca3af] leading-relaxed">{section.businessBenefit}</p>
                    <div className="mt-4 pt-3 border-t border-[#171c25]">
                      <button
                        onClick={() => onNavigate('contact')}
                        className="text-xs font-semibold text-[#a3e635] hover:underline flex items-center gap-1"
                      >
                        <span>Request technical breakdown</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
