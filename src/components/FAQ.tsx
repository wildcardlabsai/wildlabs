import React, { useState } from 'react';
import { FAQS_DATA } from '../data/content';
import { ChevronDown } from 'lucide-react';

interface FAQProps {
  limit?: number;
}

export const FAQ: React.FC<FAQProps> = ({ limit }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = limit ? FAQS_DATA.slice(0, limit) : FAQS_DATA;

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full divide-y divide-[#1b202a] border-y border-[#1b202a]">
      {items.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className="py-4 sm:py-5 transition-colors">
            <button
              id={`faq-btn-${idx}`}
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between gap-4 text-left py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#a3e635] rounded-md"
              aria-expanded={isOpen}
            >
              <span className="text-base sm:text-lg font-semibold text-[#f4f4f2] hover:text-white transition-colors">
                {faq.question}
              </span>
              <div
                className={`p-1.5 rounded-lg shrink-0 transition-transform duration-200 ${
                  isOpen ? 'bg-[#1b2513] text-[#a3e635] rotate-180' : 'bg-[#141820] text-[#71717a]'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="pt-3 pb-1 text-sm text-[#9ca3af] leading-relaxed animate-in fade-in duration-200">
                <p className="max-w-3xl">{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
