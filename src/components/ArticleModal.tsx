import React from 'react';
import { ResourceArticle } from '../types';
import { X, Clock, Calendar, BookmarkCheck, ArrowRight } from 'lucide-react';

interface ArticleModalProps {
  article: ResourceArticle | null;
  onClose: () => void;
  onContactClick: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose, onContactClick }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in">
      <div className="bg-[#0f1218] border border-[#222937] rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1c222e] bg-[#131720]">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-0.5 rounded-full bg-[#182112] text-[#a3e635] font-mono text-xs font-semibold border border-[#2b3d1b]">
              {article.category}
            </span>
            <span className="text-xs text-[#71717a] font-mono flex items-center gap-1">
              <Clock className="w-3 h-3" /> {article.readTime}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#9ca3af] hover:text-white hover:bg-[#1e2432] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#d1d5db]">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#f4f4f2] leading-tight">
              {article.title}
            </h2>
            <p className="text-xs text-[#71717a] font-mono mt-2">
              Published {article.publishedDate} • UK Business Operations Advisory
            </p>
          </div>

          {/* Key takeaway card */}
          <div className="p-4 rounded-xl bg-[#141923] border border-[#222b3c] flex items-start gap-3">
            <BookmarkCheck className="w-5 h-5 text-[#a3e635] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-mono uppercase text-[#a3e635] font-bold block mb-1">
                Executive Takeaway
              </span>
              <p className="text-sm font-medium text-[#f4f4f2]">{article.keyTakeaway}</p>
            </div>
          </div>

          {/* Body paragraphs */}
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#d4d4d8]">
            {article.content.map((p, idx) => (
              <p key={idx} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-8 p-5 rounded-xl bg-[#141a13] border border-[#27381a] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-white">Want to apply this in your business?</h4>
              <p className="text-xs text-[#a1a1aa] mt-0.5">
                We can audit your workflows and show you exactly what can be automated.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onContactClick();
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-[#a3e635] text-[#090b0e] hover:bg-[#b8f542] shrink-0 transition-colors"
            >
              <span>Talk to Wildcard Labs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-[#1c222e] bg-[#121620] flex items-center justify-between text-xs text-[#71717a]">
          <span>Wildcard Labs Operations Library</span>
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg bg-[#1a202c] hover:bg-[#232b3c] text-white transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
