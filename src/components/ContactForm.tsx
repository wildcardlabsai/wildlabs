import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  ShieldCheck, 
  Mail, 
  Building2,
  Users,
  Sparkles
} from 'lucide-react';

interface ContactFormProps {
  initialIntent?: string;
  onSuccess?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialIntent = 'I have a process in mind' }) => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    businessActivity: '',
    processToAutomate: '',
    teamSize: '10–25 people',
    intent: initialIntent,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your full name.';
    if (!formData.businessName.trim()) errs.businessName = 'Please enter your company name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your work email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.businessActivity.trim()) {
      errs.businessActivity = 'Please briefly describe what your business does.';
    }
    if (!formData.processToAutomate.trim()) {
      errs.processToAutomate = 'Please describe the task or process that takes up time.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="p-8 sm:p-10 rounded-2xl bg-[#0f131a] border border-[#1e2532] text-center shadow-xl animate-in zoom-in-95 duration-300">
        <div className="w-14 h-14 rounded-full bg-[#172412] border border-[#2b421a] text-[#a3e635] mx-auto flex items-center justify-center mb-5">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white">We’ve received your enquiry</h3>
        <p className="text-sm text-[#a1a1aa] mt-3 max-w-md mx-auto leading-relaxed">
          Thank you, <strong className="text-white">{formData.name}</strong>. A senior UK automation architect from Wildcard Labs will review your workflow outline and respond within one business day.
        </p>

        <div className="mt-8 p-4 rounded-xl bg-[#141822] border border-[#1f2636] max-w-md mx-auto text-left text-xs space-y-2">
          <span className="font-mono text-[#a3e635] uppercase font-semibold block">Next Steps:</span>
          <p className="text-[#d1d5db]">
            1. We review the feasibility and integration APIs of your current software stack.
          </p>
          <p className="text-[#d1d5db]">
            2. We prepare an objective feasibility summary and indicative time-saving estimate.
          </p>
          <p className="text-[#d1d5db]">
            3. A short 20-minute video walkthrough to discuss architecture — no sales pressure.
          </p>
        </div>

        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              businessName: '',
              email: '',
              businessActivity: '',
              processToAutomate: '',
              teamSize: '10–25 people',
              intent: 'I have a process in mind',
            });
          }}
          className="mt-8 text-xs text-[#a3e635] hover:underline font-medium"
        >
          Submit another process outline
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-[#0f131a] border border-[#1e2532] shadow-xl">
      <div className="space-y-4">
        {/* Row 1: Name & Business Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#d4d4d8] mb-1.5">
              Your Name <span className="text-[#a3e635]">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Eleanor Wright"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full px-3.5 py-2.5 rounded-xl bg-[#141822] border text-sm text-[#f4f4f2] placeholder-[#71717a] focus:outline-none transition-colors ${
                errors.name ? 'border-red-500' : 'border-[#232a3a] focus:border-[#a3e635]'
              }`}
            />
            {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#d4d4d8] mb-1.5">
              Business Name <span className="text-[#a3e635]">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Apex Logistics Ltd"
              value={formData.businessName}
              onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
              className={`w-full px-3.5 py-2.5 rounded-xl bg-[#141822] border text-sm text-[#f4f4f2] placeholder-[#71717a] focus:outline-none transition-colors ${
                errors.businessName ? 'border-red-500' : 'border-[#232a3a] focus:border-[#a3e635]'
              }`}
            />
            {errors.businessName && <p className="text-xs text-red-400 mt-1">{errors.businessName}</p>}
          </div>
        </div>

        {/* Row 2: Work Email & Team Size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#d4d4d8] mb-1.5">
              Work Email <span className="text-[#a3e635]">*</span>
            </label>
            <input
              type="email"
              placeholder="e.g. eleanor@apexlogistics.co.uk"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full px-3.5 py-2.5 rounded-xl bg-[#141822] border text-sm text-[#f4f4f2] placeholder-[#71717a] focus:outline-none transition-colors ${
                errors.email ? 'border-red-500' : 'border-[#232a3a] focus:border-[#a3e635]'
              }`}
            />
            {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#d4d4d8] mb-1.5">
              Approximate Team Size
            </label>
            <select
              value={formData.teamSize}
              onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#141822] border border-[#232a3a] text-sm text-[#f4f4f2] focus:outline-none focus:border-[#a3e635]"
            >
              <option value="1–9 people">1–9 people (Founder / Boutique)</option>
              <option value="10–25 people">10–25 people (Growing Team)</option>
              <option value="26–75 people">26–75 people (Scale-Up / SME)</option>
              <option value="75+ people">75+ people (Mid-Market / Enterprise)</option>
            </select>
          </div>
        </div>

        {/* What does your business do? */}
        <div>
          <label className="block text-xs font-semibold text-[#d4d4d8] mb-1.5">
            What does your business do? <span className="text-[#a3e635]">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Commercial property management consultancy managing 140 properties across the South East"
            value={formData.businessActivity}
            onChange={(e) => setFormData({ ...formData, businessActivity: e.target.value })}
            className={`w-full px-3.5 py-2.5 rounded-xl bg-[#141822] border text-sm text-[#f4f4f2] placeholder-[#71717a] focus:outline-none transition-colors ${
              errors.businessActivity ? 'border-red-500' : 'border-[#232a3a] focus:border-[#a3e635]'
            }`}
          />
          {errors.businessActivity && <p className="text-xs text-red-400 mt-1">{errors.businessActivity}</p>}
        </div>

        {/* What would you like to automate? */}
        <div>
          <label className="block text-xs font-semibold text-[#d4d4d8] mb-1.5">
            What process takes too much manual time? <span className="text-[#a3e635]">*</span>
          </label>
          <textarea
            rows={3}
            placeholder="e.g. When contractor invoices come in by email, our team manually keys line items into Xero and matches them to job sheets in Airtable. Takes ~15 hours weekly."
            value={formData.processToAutomate}
            onChange={(e) => setFormData({ ...formData, processToAutomate: e.target.value })}
            className={`w-full px-3.5 py-2.5 rounded-xl bg-[#141822] border text-sm text-[#f4f4f2] placeholder-[#71717a] focus:outline-none transition-colors ${
              errors.processToAutomate ? 'border-red-500' : 'border-[#232a3a] focus:border-[#a3e635]'
            }`}
          />
          {errors.processToAutomate && <p className="text-xs text-red-400 mt-1">{errors.processToAutomate}</p>}
        </div>

        {/* Intent Dropdown */}
        <div>
          <label className="block text-xs font-semibold text-[#d4d4d8] mb-1.5">
            How far along are you?
          </label>
          <select
            value={formData.intent}
            onChange={(e) => setFormData({ ...formData, intent: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#141822] border border-[#232a3a] text-sm text-[#f4f4f2] focus:outline-none focus:border-[#a3e635]"
          >
            <option value="Just exploring">Just exploring what automation can do</option>
            <option value="I have a process in mind">I have a specific process in mind</option>
            <option value="I need several processes automated">I need several connected processes automated</option>
            <option value="I’m interested in AI employees">I’m interested in deploying dedicated AI Employees</option>
          </select>
        </div>

        {/* Submit button */}
        <div className="pt-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm bg-[#a3e635] hover:bg-[#b8f542] text-[#090b0e] flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Reviewing outline...</span>
            ) : (
              <>
                <span>Start the Conversation</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

        {/* Privacy reassurance */}
        <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-[#71717a]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#86efac]" />
          <span>Strict UK GDPR compliance • No sales pressure • Direct engineer reply</span>
        </div>
      </div>
    </form>
  );
};
