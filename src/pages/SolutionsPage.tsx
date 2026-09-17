import React from 'react';
import { PageId } from '../types';
import { 
  Bot, 
  Workflow as WorkflowIcon, 
  FileSearch, 
  MessageSquare, 
  TrendingUp, 
  Layers, 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  ArrowUpRight,
  Code2,
  BrainCircuit,
  Layout
} from 'lucide-react';

interface SolutionsPageProps {
  onNavigate: (page: PageId) => void;
}

interface SolutionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  keyPoints: string[];
  targetDepartment: string;
  deliveryTime: string;
  destinationPage: PageId;
}

const SOLUTIONS: SolutionItem[] = [
  {
    id: 'ai-employees',
    title: 'AI Employees',
    subtitle: 'Digital workers designed around specific business processes.',
    description: 'Persistent autonomous agents that handle defined operational roles 24/7. Equipped with API tool access, strict boundary rules, and seamless human escalation.',
    icon: Bot,
    keyPoints: [
      'Autonomous lead qualification and CRM enrichment',
      'Continuous paperwork parsing and accounting verification',
      'Defensive guardrails with human review gates'
    ],
    targetDepartment: 'Across All Departments',
    deliveryTime: '4–6 weeks',
    destinationPage: 'ai-employees',
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation',
    subtitle: 'Connect systems and automate multi-step processes.',
    description: 'Custom orchestration layers that eliminate manual handoffs between CRM, accounting, spreadsheets, email, and internal databases.',
    icon: WorkflowIcon,
    keyPoints: [
      'Multi-system data synchronisation without human copy-pasting',
      'Defensive error logging and automated retry mechanisms',
      'Built around the software tools you already use'
    ],
    targetDepartment: 'Operations & IT',
    deliveryTime: '2–4 weeks',
    destinationPage: 'how-it-works',
  },
  {
    id: 'document-processing',
    title: 'AI Document Processing',
    subtitle: 'Extract, understand and move information from documents.',
    description: 'Turn unstructured PDF invoices, purchase orders, statements, and delivery notes into clean structured database records with zero fragile OCR templates.',
    icon: FileSearch,
    keyPoints: [
      'Adapts dynamically to changing supplier invoice layouts',
      'Three-way matching against purchase orders and bank records',
      'Direct integration with Xero, QuickBooks, Sage, and ERPs'
    ],
    targetDepartment: 'Finance & Compliance',
    deliveryTime: '2–3 weeks',
    destinationPage: 'what-we-automate',
  },
  {
    id: 'customer-automation',
    title: 'Customer Automation',
    subtitle: 'Automate routine enquiries, follow-ups and communications.',
    description: 'Instant answers to tracking queries, account modifications, and frequent support tickets drawing from your live operational data.',
    icon: MessageSquare,
    keyPoints: [
      'Sub-60 second resolution on routine customer questions',
      'Prepares drafted contextual replies for complex tickets',
      'Zero robotic generic chatbot feeling — natural British phrasing'
    ],
    targetDepartment: 'Customer Service & Support',
    deliveryTime: '3–4 weeks',
    destinationPage: 'what-we-automate',
  },
  {
    id: 'sales-automation',
    title: 'Sales Automation',
    subtitle: 'Capture, qualify and follow up leads.',
    description: 'Respond to new commercial enquiries in minutes. Automatically enrich prospect profiles with company records and book meetings directly onto rep calendars.',
    icon: TrendingUp,
    keyPoints: [
      'Immediate qualification before competitors even open the email',
      'Automated company background research and deal sizing',
      'Calendar link dispatch tailored to account tier'
    ],
    targetDepartment: 'Commercial & Sales Teams',
    deliveryTime: '2–3 weeks',
    destinationPage: 'what-we-automate',
  },
  {
    id: 'operations-automation',
    title: 'Operations Automation',
    subtitle: 'Remove repetitive internal processes.',
    description: 'Orchestrate client onboarding, task generation, compliance document gathering, and employee handover procedures without missing a beat.',
    icon: Layers,
    keyPoints: [
      'Instant project workspace and folder provisioning upon signature',
      'Automated client milestone check-ins and asset requests',
      'Unified cross-department reporting without manual spreadsheets'
    ],
    targetDepartment: 'Operations & Leadership',
    deliveryTime: '3–5 weeks',
    destinationPage: 'what-we-automate',
  },

  {
    id: 'software-development',
    title: 'Software Development',
    subtitle: 'Bespoke web applications and platforms.',
    description: 'Custom SaaS platforms, internal portals, and high-performance business applications engineered for your exact scale.',
    icon: Code2,
    keyPoints: [
      'Full-stack architecture using modern frameworks',
      'Legacy system modernization and API engineering',
      'Secure, scalable, cloud-native deployments'
    ],
    targetDepartment: 'Custom Engineering',
    deliveryTime: '8–12 weeks',
    destinationPage: 'contact',
  },
  {
    id: 'ai-integrations',
    title: 'AI Integrations',
    subtitle: 'Embed generative AI into your workflows.',
    description: 'We connect cutting-edge LLMs directly to your business data to enable natural language querying and automated task execution.',
    icon: BrainCircuit,
    keyPoints: [
      'Custom AI agents grounded in your company data',
      'Intelligent document summarization and extraction',
      'Seamless API connections to OpenAI, Gemini, etc.'
    ],
    targetDepartment: 'Artificial Intelligence',
    deliveryTime: '4–8 weeks',
    destinationPage: 'contact',
  },
  {
    id: 'web-design',
    title: 'Web Design',
    subtitle: 'High-performance, conversion-focused websites.',
    description: 'Beautiful, modern web experiences designed to establish trust, capture leads, and perform flawlessly across all devices.',
    icon: Layout,
    keyPoints: [
      'Tailored UX/UI aligned with brand identity',
      'High conversion-rate optimization architectures',
      'Lightning-fast load times and SEO fundamentals'
    ],
    targetDepartment: 'Digital Presence',
    deliveryTime: '4–6 weeks',
    destinationPage: 'contact',
  },
];

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full pt-32 pb-24">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161a22] border border-[#242b38] text-xs text-[#a3e635] font-mono font-semibold mb-6">
            <span>Solution Architectures</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#f4f4f2] leading-tight">
            Automation built around{' '}
            <span className="text-[#a3e635]">your business.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#9ca3af] leading-relaxed">
            We don’t sell a rigid off-the-shelf software platform you have to bend your company into. We engineer bespoke automation solutions around the exact software and operational processes you already rely on.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#a3e635] text-[#090b0e] hover:bg-[#b8f542] transition-colors inline-flex items-center gap-2"
            >
              <span>Scope Your Solution</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('pricing')}
              className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#13161c] hover:bg-[#1b202a] text-white border border-[#222734] transition-colors"
            >
              <span>Indicative Pricing</span>
            </button>
          </div>
        </div>
      </div>

      {/* Solutions Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {SOLUTIONS.map((sol) => {
            const Icon = sol.icon;
            return (
              <div
                key={sol.id}
                id={`solution-${sol.id}`}
                className="p-7 rounded-3xl bg-[#0f131a] hover:bg-[#131722] border border-[#1e2430] hover:border-[#333e54] flex flex-col justify-between transition-all duration-300 shadow-lg group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-2xl bg-[#161a22] group-hover:bg-[#192215] text-[#a3e635] border border-[#242b38] group-hover:border-[#354c1f] transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-[#71717a] px-2.5 py-1 rounded bg-[#151922] border border-[#202632]">
                      {sol.deliveryTime}
                    </span>
                  </div>

                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#a3e635] font-bold block mb-1">
                    {sol.targetDepartment}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-white">
                    {sol.title}
                  </h3>
                  <p className="text-xs font-medium text-[#d4d4d8] mt-1.5 leading-snug">
                    {sol.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[#9ca3af] mt-3 leading-relaxed">
                    {sol.description}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-[#1a1f28] pt-4">
                    {sol.keyPoints.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#d1d5db]">
                        <Check className="w-3.5 h-3.5 text-[#a3e635] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 pt-4 border-t border-[#181d26] flex items-center justify-between">
                  <button
                    onClick={() => onNavigate(sol.destinationPage)}
                    className="text-xs font-semibold text-[#a3e635] hover:underline inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Explore details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onNavigate('contact')}
                    className="text-xs font-medium text-[#71717a] hover:text-white transition-colors"
                  >
                    Book scope
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-[#11151d] border border-[#212836] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="text-xl font-bold text-white">Not sure which architecture fits your setup?</h4>
            <p className="text-xs sm:text-sm text-[#9ca3af] mt-2 leading-relaxed">
              Most businesses start with a single high-friction process (such as customer enquiry handling or supplier invoice extraction) and expand once early ROI is proven.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3.5 rounded-xl font-semibold text-xs bg-[#a3e635] text-[#090b0e] hover:bg-[#b8f542] transition-colors shrink-0 flex items-center gap-2"
          >
            <span>Request Workflow Evaluation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
