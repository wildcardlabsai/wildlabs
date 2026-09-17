import React from 'react';
import { ResourceArticle } from '../types';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

interface ArticleCardProps {
  article: ResourceArticle;
  onRead: (article: ResourceArticle) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, onRead }) => {
  return (
    <div
      id={`article-${article.id}`}
      onClick={() => onRead(article)}
      className="group p-6 rounded-2xl bg-[#10131a] hover:bg-[#141822] border border-[#1e2430] hover:border-[#333d50] flex flex-col justify-between cursor-pointer transition-all duration-300 shadow-md hover:-translate-y-0.5"
    >
      <div>
        {/* Category & read time */}
        <div className="flex items-center justify-between text-xs text-[#71717a] mb-3">
          <span className="px-2.5 py-0.5 rounded-full bg-[#171c26] text-[#a3e635] font-mono font-medium text-[11px] border border-[#252e3e]">
            {article.category}
          </span>
          <span className="flex items-center gap-1 font-mono text-[11px]">
            <Clock className="w-3 h-3 text-[#71717a]" />
            {article.readTime}
          </span>
        </div>

        <h3 className="text-lg font-bold text-[#f4f4f2] group-hover:text-white transition-colors leading-snug">
          {article.title}
        </h3>

        <p className="text-xs sm:text-sm text-[#9ca3af] mt-2.5 line-clamp-3 leading-relaxed">
          {article.summary}
        </p>

        {/* Key Takeaway snippet */}
        <div className="mt-4 p-3 rounded-lg bg-[#141822] border border-[#202736] text-xs text-[#d1d5db]">
          <span className="text-[10px] font-mono uppercase text-[#a3e635] font-semibold block mb-0.5">
            Key Principle:
          </span>
          <p className="italic leading-tight text-[#a1a1aa]">&ldquo;{article.keyTakeaway}&rdquo;</p>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-[#181d27] flex items-center justify-between text-xs text-[#71717a]">
        <span className="font-mono text-[11px]">{article.publishedDate}</span>
        <div className="inline-flex items-center gap-1 font-semibold text-[#a3e635] group-hover:translate-x-1 transition-transform">
          <span>Read guide</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};
