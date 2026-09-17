import React, { useState } from 'react';
import { AIEmployeeItem } from '../types';
import { 
  UserCheck, 
  FileText, 
  Headphones, 
  GitPullRequest, 
  BarChart, 
  Check, 
  Clock, 
  ShieldAlert, 
  Sparkles,
  ArrowRight,
  Sliders
} from 'lucide-react';

interface AIEmployeeCardProps {
  employee: AIEmployeeItem;
  onSelect?: (employee: AIEmployeeItem) => void;
  expanded?: boolean;
}

const ICON_MAP: Record<string, React.ElementType> = {
  'lead-assistant': UserCheck,
  'admin-assistant': FileText,
  'customer-assistant': Headphones,
  'operations-assistant': GitPullRequest,
  'data-assistant': BarChart,
};

export const AIEmployeeCard: React.FC<AIEmployeeCardProps> = ({ employee, onSelect, expanded = false }) => {
  const [showDemo, setShowDemo] = useState(false);
  const Icon = ICON_MAP[employee.id] || UserCheck;

  return (
    <div
      id={`ai-worker-${employee.id}`}
      className="p-6 sm:p-7 rounded-2xl bg-[#0f131a] hover:bg-[#131722] border border-[#1e2430] hover:border-[#323d52] transition-all duration-300 flex flex-col justify-between shadow-lg"
    >
      <div>
        {/* Worker Badge & Active Status */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-[#171d27] text-[#a3e635] border border-[#263142]">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#a3e635] font-semibold block">
                Digital Worker Spec
              </span>
              <h3 className="text-xl font-bold text-white leading-tight">
                {employee.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#162112] text-[#a3e635] border border-[#2b3e1c] text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] animate-pulse" />
            <span>24/7 Active</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm font-medium text-[#d4d4d8] mt-2 mb-3">
          {employee.tagline}
        </p>

        <p className="text-xs text-[#9ca3af] leading-relaxed mb-4">
          {employee.description}
        </p>

        {/* Systems Connected */}
        <div className="mb-4">
          <span className="text-[11px] font-mono text-[#71717a] uppercase tracking-wider block mb-1.5">
            Systems Connected:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {employee.whatItConnectsTo.map((sys, idx) => (
              <span
                key={idx}
                className="text-[11px] px-2 py-0.5 rounded-md bg-[#161a22] text-[#d1d5db] border border-[#232936]"
              >
                {sys}
              </span>
            ))}
          </div>
        </div>

        {/* Tasks Handled (3 key tasks) */}
        <div className="space-y-2 border-t border-[#1a1f29] pt-3 mb-4">
          <span className="text-[11px] font-mono text-[#71717a] uppercase tracking-wider block mb-1">
            Automated Responsibilities:
          </span>
          {employee.tasksHandled.slice(0, 3).map((task, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-[#d1d5db]">
              <Check className="w-3.5 h-3.5 text-[#a3e635] shrink-0 mt-0.5" />
              <span>{task}</span>
            </div>
          ))}
        </div>

        {/* Human Team Responsibility Boundary */}
        <div className="p-3 rounded-xl bg-[#141820] border border-[#202734] mb-4">
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#f4f4f2] mb-1">
            <ShieldAlert className="w-3.5 h-3.5 text-[#86efac]" />
            <span>Human Team Remains Responsible For:</span>
          </div>
          <p className="text-xs text-[#9ca3af] leading-relaxed">
            {employee.humanResponsibility}
          </p>
        </div>

        {/* Interactive Sample Simulation Toggle */}
        {showDemo && (
          <div className="mt-3 p-3.5 rounded-xl bg-[#090b0e] border border-[#1f2735] text-xs space-y-2 animate-in fade-in">
            <div>
              <span className="text-[10px] font-mono text-[#a3e635] uppercase font-bold">Inbound Trigger:</span>
              <p className="text-[#d1d5db] mt-0.5">{employee.sampleTrigger}</p>
            </div>
            <div className="pt-2 border-t border-[#171d27]">
              <span className="text-[10px] font-mono text-[#86efac] uppercase font-bold">Autonomous Execution:</span>
              <p className="text-[#9ca3af] mt-0.5">{employee.sampleOutput}</p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom action controls */}
      <div className="mt-4 pt-3 border-t border-[#191e28] flex items-center justify-between">
        <button
          onClick={() => setShowDemo(!showDemo)}
          className="text-xs font-mono text-[#a3e635] hover:underline flex items-center gap-1"
        >
          <Sliders className="w-3 h-3" />
          <span>{showDemo ? 'Hide sample output' : 'View live scenario'}</span>
        </button>

        {onSelect && (
          <button
            onClick={() => onSelect(employee)}
            className="inline-flex items-center gap-1 text-xs font-semibold text-white hover:text-[#a3e635] transition-colors"
          >
            <span>Deploy Spec</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
