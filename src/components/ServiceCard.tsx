import React from 'react';
import { 
  UserCheck, 
  MessageSquareText, 
  Database, 
  FileSpreadsheet, 
  GitMerge, 
  BarChart3, 
  ArrowRight,
  Code2,
  BrainCircuit,
  Layout
} from 'lucide-react';
import { ServiceCardItem } from '../types';

interface ServiceCardProps {
  item: ServiceCardItem;
  onExplore: (id: string) => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  UserCheck,
  MessageSquareText,
  Database,
  FileSpreadsheet,
  GitMerge,
  BarChart3,
  Code2,
  BrainCircuit,
  Layout,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ item, onExplore }) => {
  const Icon = ICON_MAP[item.iconName] || Database;

  return (
    <div 
      id={`service-card-${item.id}`}
      onClick={() => onExplore(item.id)}
      className="group relative p-7 rounded-2xl bg-[#11141b] hover:bg-[#151922] border border-[#1f242f] hover:border-[#384357] transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-0.5"
    >
      {/* Top row: Number and minimal icon */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[#171b23] text-[#a3e635] border border-[#252d3c]">
            {item.number}
          </span>
          <div className="p-2 rounded-xl bg-[#161a23] group-hover:bg-[#1a2215] text-[#9ca3af] group-hover:text-[#a3e635] border border-[#242b38] group-hover:border-[#374e20] transition-colors">
            <Icon className="w-5 h-5" />
          </div>
        </div>

        <span className="text-[11px] uppercase tracking-wider font-mono text-[#71717a] block mb-1">
          {item.category}
        </span>
        <h3 className="text-xl font-bold text-[#f4f4f2] group-hover:text-white transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-[#9ca3af] mt-2.5 leading-relaxed">
          {item.description}
        </p>

        {/* Feature bullets */}
        <ul className="mt-5 space-y-2 border-t border-[#1c222c] pt-4">
          {item.points.slice(0, 2).map((pt, idx) => (
            <li key={idx} className="text-xs text-[#a1a1aa] flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] mt-1.5 shrink-0" />
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom link: Explore -> */}
      <div className="pt-6 mt-4 border-t border-[#1a1f29] flex items-center justify-between">
        <span className="text-xs font-medium text-[#71717a] group-hover:text-[#a3e635] transition-colors">
          Read architecture
        </span>
        <div className="inline-flex items-center gap-1 text-xs font-semibold text-[#a3e635] group-hover:translate-x-1 transition-transform">
          <span>Explore</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};
