import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Inbox, 
  Cpu, 
  FileSearch, 
  Database, 
  SendHorizontal, 
  BellRing, 
  CheckCircle2, 
  Play, 
  Pause,
  ArrowRight,
  Zap,
  RefreshCcw
} from 'lucide-react';

interface WorkflowNodeData {
  id: number;
  label: string;
  sublabel: string;
  system: string;
  icon: React.ElementType;
  detail: string;
  metric: string;
}

const NODES: WorkflowNodeData[] = [
  {
    id: 1,
    label: 'Customer Enquiry',
    sublabel: 'Inbound message received',
    system: 'Email / Webform',
    icon: Inbox,
    detail: 'Enquiry arrives from website at 19:42 outside office hours.',
    metric: '0.0s elapsed',
  },
  {
    id: 2,
    label: 'AI Understands Request',
    sublabel: 'Semantic intent & priority',
    system: 'Wildcard Labs Language Engine',
    icon: Cpu,
    detail: 'Classified as high-intent commercial enquiry for workflow automation.',
    metric: '+0.8s elapsed',
  },
  {
    id: 3,
    label: 'Information Extracted',
    sublabel: 'Key entities parsed',
    system: 'Structured Data Parser',
    icon: FileSearch,
    detail: 'Company: Leeds Retailers Ltd | Team: 24 | Pain: Invoice matching.',
    metric: '+1.4s elapsed',
  },
  {
    id: 4,
    label: 'System Updates CRM',
    sublabel: 'Deal & contact created',
    system: 'HubSpot / Salesforce',
    icon: Database,
    detail: 'Deal created in "Qualified Discovery" stage with verified company data.',
    metric: '+2.1s elapsed',
  },
  {
    id: 5,
    label: 'Customer Receives Response',
    sublabel: 'Contextual intro sent',
    system: 'Google Workspace',
    icon: SendHorizontal,
    detail: 'Bespoke email dispatched with senior engineer calendar availability.',
    metric: '+2.9s elapsed',
  },
  {
    id: 6,
    label: 'Team Gets Notified',
    sublabel: 'Actionable brief shared',
    system: 'Slack / Teams',
    icon: BellRing,
    detail: 'Sales director alerted with full summary and pre-meeting dossier.',
    metric: 'Complete in 3.4s',
  },
];

export const Workflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev >= NODES.length ? 1 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const currentNode = NODES[activeStep - 1];

  return (
    <div className="w-full rounded-2xl bg-[#0e1117] border border-[#1f242f] p-5 sm:p-8 shadow-2xl relative overflow-hidden">
      {/* Background kinetic grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Header bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#1b202a]">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#182012] border border-[#2c3d18] text-xs font-medium text-[#a3e635]">
            <span className="w-2 h-2 rounded-full bg-[#a3e635] animate-pulse" />
            Live Workflow Simulation
          </div>
          <span className="text-sm font-medium text-[#e4e4e7]">
            One process. Multiple actions. Zero manual chasing.
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#161a22] hover:bg-[#1e232e] text-xs font-medium text-[#d4d4d8] border border-[#242b38] transition-colors"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-[#a3e635]" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-[#a3e635]" />
                <span>Run</span>
              </>
            )}
          </button>
          <button
            onClick={() => { setActiveStep(1); setIsPlaying(true); }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#161a22] hover:bg-[#1e232e] text-xs font-medium text-[#d4d4d8] border border-[#242b38] transition-colors"
          >
            <RefreshCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>
      </div>

      {/* Node Chain visual */}
      <div className="relative z-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          
          {NODES.map((node, index) => {
            const Icon = node.icon;
            const isActive = activeStep === node.id;
            const isCompleted = activeStep > node.id;

            return (
              <div key={node.id} className="relative">
                {/* Connecting lines (Desktop lg: 3 columns) */}
                {index !== NODES.length - 1 && index % 3 !== 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 w-6 h-[2px] bg-[#1a1f2c] -translate-y-1/2 z-0">
                    <motion.div
                      className="h-full bg-[#a3e635]"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isCompleted ? 1 : 0 }}
                      style={{ originX: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                  </div>
                )}

                {/* Connecting lines (Tablet md: 2 columns) */}
                {index !== NODES.length - 1 && index % 2 !== 1 && (
                  <div className="hidden md:block lg:hidden absolute top-1/2 -right-6 w-6 h-[2px] bg-[#1a1f2c] -translate-y-1/2 z-0">
                    <motion.div
                      className="h-full bg-[#a3e635]"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isCompleted ? 1 : 0 }}
                      style={{ originX: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                  </div>
                )}
                
                {/* Mobile vertical line */}
                {index !== NODES.length - 1 && (
                  <div className="md:hidden absolute -bottom-6 left-8 w-[2px] h-6 bg-[#1a1f2c] z-0">
                     <motion.div
                        className="w-full bg-[#a3e635]"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: isCompleted ? 1 : 0 }}
                        style={{ originY: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      />
                  </div>
                )}

                <motion.div
                  onClick={() => {
                    setActiveStep(node.id);
                    setIsPlaying(false);
                  }}
                  animate={{
                    borderColor: isActive ? '#a3e635' : isCompleted ? '#252c3b' : '#1a1f2c',
                    backgroundColor: isActive ? '#151a24' : isCompleted ? '#10131a' : '#0d1017',
                    scale: isActive ? 1.02 : 1,
                  }}
                  className={`group relative p-5 rounded-2xl cursor-pointer transition-all duration-300 border text-left z-10 ${
                    isActive ? 'shadow-[0_0_30px_rgba(163,230,53,0.15)]' : ''
                  }`}
                >
                  {/* Subtle glowing animated border on active */}
                  {isActive && (
                    <motion.div
                      layoutId="activeGlow"
                      className="absolute inset-0 rounded-2xl border border-[#a3e635] pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  )}

                  {/* Top line with step and status indicator */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`text-xs font-mono px-2 py-0.5 rounded ${
                          isActive
                            ? 'bg-[#a3e635] text-[#090b0e] font-bold'
                            : isCompleted
                            ? 'bg-[#1a2318] text-[#86efac] font-medium'
                            : 'bg-[#191e29] text-[#71717a]'
                        }`}
                      >
                        0{node.id}
                      </span>
                      <span className="text-xs font-mono text-[#71717a]">{node.system}</span>
                    </div>

                    {isCompleted ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring" }}
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#86efac]" />
                      </motion.div>
                    ) : isActive ? (
                      <span className="flex h-2.5 w-2.5 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a3e635] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#a3e635]"></span>
                      </span>
                    ) : null}
                  </div>

                  {/* Node Title & Description */}
                  <div className="flex items-start gap-3 mt-3">
                    <div
                      className={`p-2.5 rounded-xl shrink-0 transition-colors duration-300 ${
                        isActive
                          ? 'bg-[#1b2314] text-[#a3e635]'
                          : isCompleted
                          ? 'bg-[#141a22] text-[#86efac]'
                          : 'bg-[#131720] text-[#52525b]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold leading-tight transition-colors ${
                        isActive ? 'text-white' : 'text-[#f4f4f2] group-hover:text-white'
                      }`}>
                        {node.label}
                      </h4>
                      <p className="text-xs text-[#9ca3af] mt-1.5 leading-snug">
                        {node.sublabel}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Live status inspection box */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 mt-2 p-5 rounded-xl bg-[#0a0c10] border border-[#1d222d] flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#141b11] border border-[#283818] flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5 text-[#a3e635]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#a3e635] font-bold">
                  Processing Step {currentNode.id}/{NODES.length}
                </span>
                <span className="text-[#52525b]">•</span>
                <span className="text-xs font-mono text-[#9ca3af]">{currentNode.metric}</span>
              </div>
              <p className="text-sm text-[#e4e4e7] mt-1 font-medium">
                {currentNode.detail}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
            <button
              onClick={() => {
                setActiveStep((prev) => (prev <= 1 ? NODES.length : prev - 1));
                setIsPlaying(false);
              }}
              className="px-3 py-1.5 text-xs font-medium rounded-lg bg-[#161a22] hover:bg-[#202632] text-[#d4d4d8] border border-[#242c3b] transition-colors"
            >
              Previous
            </button>
            <button
              onClick={() => {
                setActiveStep((prev) => (prev >= NODES.length ? 1 : prev + 1));
                setIsPlaying(false);
              }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold rounded-lg bg-[#a3e635] hover:bg-[#bbf246] text-[#090b0e] transition-colors"
            >
              <span>Next Step</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Visual bottom banner */}
      <div className="relative z-10 mt-6 pt-4 border-t border-[#161b24] flex flex-wrap items-center justify-between text-xs text-[#71717a]">
        <span>Wildcard Labs Orchestration Core • Intelligent event-driven execution</span>
        <span className="text-[#a3e635] font-medium">End-to-end execution speed: ~3.4 seconds</span>
      </div>
    </div>
  );
};
