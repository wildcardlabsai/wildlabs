import React, { useState } from 'react';
import { PageId, ResourceArticle } from '../types';
import { ARTICLES_DATA } from '../data/content';
import { ArticleCard } from '../components/ArticleCard';
import { ArticleModal } from '../components/ArticleModal';
import { BookOpen, Search, ArrowRight, Sparkles } from 'lucide-react';

interface ResourcesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<ResourceArticle | null>(null);

  const categories = ['All', 'Guides', 'AI Employees', 'Strategy', 'Workflows'];

  const filteredArticles = ARTICLES_DATA.filter((item) => {
    if (selectedCategory !== 'All' && item.category !== selectedCategory) {
      return false;
    }
    if (!searchQuery.trim()) return true;
    return (
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.keyTakeaway.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="w-full pt-32 pb-24">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161f13] border border-[#27381b] text-xs text-[#a3e635] font-mono font-semibold mb-6">
            <span>Knowledge & Practical Guides</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#f4f4f2] leading-tight">
            The Wildcard Labs <span className="text-[#a3e635]">Resource Hub.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#9ca3af] leading-relaxed">
            Pragmatic guides, workflow blueprints, and clear thinking on how modern businesses eliminate manual administration without overcomplicating their technology stack.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-[#1b202a]">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#a3e635] text-[#090b0e] font-semibold'
                    : 'bg-[#10131a] text-[#9ca3af] hover:text-white hover:bg-[#161a22] border border-[#1e232e]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-3.5 h-3.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#71717a]" />
            <input
              type="text"
              placeholder="Search articles or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#10141a] border border-[#1e2430] rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-[#71717a] focus:outline-none focus:border-[#a3e635]"
            />
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredArticles.length === 0 ? (
          <div className="py-16 text-center text-sm text-[#71717a]">
            No guides found matching your search. Try adjusting the category or search keywords.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onRead={(art) => setActiveArticle(art)}
              />
            ))}
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-[#0f131a] border border-[#1f242f] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="text-xl font-bold text-white">Have a specific process in mind?</h4>
            <p className="text-xs sm:text-sm text-[#9ca3af] mt-1.5 leading-relaxed">
              We can review your existing spreadsheet, email, or CRM workflow and produce a bespoke feasibility outline within 24 hours.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3.5 rounded-xl font-semibold text-xs bg-[#a3e635] text-[#090b0e] hover:bg-[#b8f542] transition-colors shrink-0 inline-flex items-center gap-2"
          >
            <span>Request Process Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Full Article Reading Modal */}
      <ArticleModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
        onContactClick={() => {
          setActiveArticle(null);
          onNavigate('contact');
        }}
      />
    </div>
  );
};
