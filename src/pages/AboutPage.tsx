import React from 'react';
import { PageId } from '../types';
import { 
  Check, 
  ShieldCheck, 
  HeartHandshake, 
  Sparkles, 
  ArrowRight, 
  Compass, 
  Cpu, 
  Target, 
  MapPin 
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const values = [
    {
      title: 'Practical',
      tagline: 'We automate real problems, not buzzwords.',
      desc: 'We don’t pitch artificial intelligence because it sounds sophisticated. We examine where your team loses hours each week, and build the cleanest, most reliable way to make that work disappear.',
    },
    {
      title: 'Human',
      tagline: 'People stay in control where judgement matters.',
      desc: 'Automation should liberate human potential, not sideline human expertise. We design systems with clear boundaries, transparent logs, and intuitive approval gates whenever high-consequence decisions occur.',
    },
    {
      title: 'Simple',
      tagline: 'Complex technology should feel simple to use.',
      desc: 'If an automation requires a 40-page manual or forces your team to change how they work, it has failed. We build automation that operates natively within the software you already use.',
    },
    {
      title: 'Useful',
      tagline: 'Every automation should have a measurable reason to exist.',
      desc: 'Before writing a line of code, we calculate the time saved, error rate reduction, or speed gain. If a process doesn’t have a clear operational return on investment, we won’t build it.',
    },
  ];

  return (
    <div className="w-full pt-32 pb-24">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161f13] border border-[#27381b] text-xs text-[#a3e635] font-mono font-semibold mb-6">
            <span>Our Philosophy</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#f4f4f2] leading-[1.1]">
            We’re here to make business software do more of the{' '}
            <span className="text-[#a3e635]">boring stuff.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#9ca3af] leading-relaxed">
            Most modern companies own 10 to 30 software subscriptions, yet their employees still spend hours every week acting as human bridges between them — re-typing data, updating spreadsheets, and chasing status updates.
          </p>
        </div>
      </div>

      {/* Philosophy Statement Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0f131a] border border-[#1f2430]">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Technology should make work simpler, not create another system people have to learn.
            </h3>
            <p className="text-sm text-[#9ca3af] leading-relaxed">
              Every year, software companies launch shiny new all-in-one platforms promising to solve company chaos. In reality, they just add another browser tab your team has to keep updated.
            </p>
            <p className="text-sm text-[#9ca3af] mt-4 leading-relaxed">
              Wildcard Labs takes the opposite approach: we connect the tools you already have. We wire the data pipelines and build the background logic so information moves automatically without human friction.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-[#0f131a] border border-[#1f2430]">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Good automation works quietly in the background.
            </h3>
            <p className="text-sm text-[#9ca3af] leading-relaxed">
              The best technology is invisible. It’s the customer email that gets answered in 90 seconds on a Sunday evening; the supplier invoice that matches to a purchase order and drafts in Xero while you sleep; the new client project board created within seconds of contract sign-off.
            </p>
            <p className="text-sm text-[#9ca3af] mt-4 leading-relaxed">
              When automation works properly, your business runs faster, cleaner, and with far less operational stress.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-3xl mb-14">
          <span className="font-mono text-xs font-semibold text-[#a3e635] uppercase tracking-wider">
            Our Principles
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f4f4f2] mt-3">
            What guides our work
          </h2>
          <p className="text-sm sm:text-base text-[#9ca3af] mt-3">
            Four commitments we make on every single client workflow deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((val) => (
            <div
              key={val.title}
              className="p-7 sm:p-8 rounded-3xl bg-[#0e1117] border border-[#1e232e] hover:border-[#2d3646] transition-all"
            >
              <span className="font-mono text-xs font-bold text-[#a3e635] uppercase tracking-wider">
                Value Principle
              </span>
              <h3 className="text-2xl font-extrabold text-white mt-2">{val.title}</h3>
              <p className="text-sm font-semibold text-[#d4d4d8] mt-1">{val.tagline}</p>
              <p className="text-xs sm:text-sm text-[#9ca3af] mt-3 leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* UK Positioning & Data Standards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#11151e] border border-[#212838] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#a3e635]">
              <MapPin className="w-4 h-4" />
              <span>UK Technology Engineering</span>
            </div>
            <h3 className="text-2xl font-bold text-white">Built for UK business operations</h3>
            <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
              We operate strictly under UK data protection legislation (UK GDPR & DPA 2018). We partner with UK businesses that need practical, dependable automation without corporate buzzwords or foreign offshore handoffs.
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3.5 rounded-xl font-semibold text-xs bg-[#a3e635] text-[#090b0e] hover:bg-[#b8f542] transition-colors shrink-0 inline-flex items-center gap-2"
          >
            <span>Talk to Wildcard Labs</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
