import React, { useState } from 'react';
import { INTEGRATION_CATEGORIES } from '../data/content';
import { 
  Workflow, 
  Layers, 
  Check, 
  Search,
  Plus
} from 'lucide-react';

export const IntegrationGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const allCategories = ['All', ...INTEGRATION_CATEGORIES.map((c) => c.category)];

  const filteredCategories = INTEGRATION_CATEGORIES.filter((cat) => {
    if (selectedCategory !== 'All' && cat.category !== selectedCategory) {
      return false;
    }
    if (!searchTerm.trim()) return true;
    return (
      cat.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.tools.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div className="w-full">
      {/* Category selector pill bar & search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#a3e635] text-[#090b0e] font-semibold shadow-sm'
                  : 'bg-[#141820] text-[#9ca3af] hover:text-[#f4f4f2] hover:bg-[#1a202b] border border-[#212734]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search tool */}
        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#71717a]" />
          <input
            type="text"
            placeholder="Search systems (e.g. Xero, HubSpot)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#12151c] border border-[#212734] rounded-xl pl-9 pr-3 py-1.5 text-xs text-[#f4f4f2] placeholder-[#71717a] focus:outline-none focus:border-[#a3e635]"
          />
        </div>
      </div>

      {/* Grid of integration tiles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredCategories.map((group) => (
          <div
            key={group.category}
            className="p-5 rounded-xl bg-[#10131a] border border-[#1e232e] hover:border-[#2f3849] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-medium text-[#a3e635] uppercase tracking-wider">
                  {group.category}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#171b24] text-[#71717a]">
                  REST / Webhooks
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-2">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#151922] border border-[#232a37] text-xs text-[#d1d5db]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#344258]" />
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#181d26] text-[11px] text-[#71717a] flex items-center justify-between">
              <span>Supported via API</span>
              <Check className="w-3.5 h-3.5 text-[#86efac]" />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom guarantee & notice */}
      <div className="mt-8 p-4 rounded-xl bg-[#0e1117] border border-[#1b202a] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9ca3af]">
        <div className="flex items-center gap-2.5 text-center sm:text-left">
          <div className="p-1.5 rounded-md bg-[#182213] text-[#a3e635] shrink-0">
            <Plus className="w-3.5 h-3.5" />
          </div>
          <span>
            <strong className="text-white font-medium">Have bespoke or legacy software?</strong> More connections can be added around your existing workflow using custom secure bridges.
          </span>
        </div>
        <span className="text-[11px] font-mono text-[#71717a] shrink-0">
          Zero software replacement required
        </span>
      </div>
    </div>
  );
};
