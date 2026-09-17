export type PageId =
  | 'home'
  | 'what-we-automate'
  | 'solutions'
  | 'ai-employees'
  | 'how-it-works'
  | 'about'
  | 'resources'
  | 'pricing'
  | 'contact';

export interface NavItem {
  label: string;
  page: PageId;
  badge?: string;
}

export interface ServiceCardItem {
  id: string;
  number: string;
  title: string;
  description: string;
  category: string;
  iconName: string;
  points: string[];
}

export interface AIEmployeeItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  whatItDoes: string;
  whatItConnectsTo: string[];
  tasksHandled: string[];
  whenItRuns: string;
  humanResponsibility: string;
  sampleTrigger: string;
  sampleOutput: string;
}

export interface ResourceArticle {
  id: string;
  title: string;
  readTime: string;
  category: 'Guides' | 'Strategy' | 'Workflows' | 'AI Employees';
  summary: string;
  content: string[];
  keyTakeaway: string;
  publishedDate: string;
}

export interface PricingTier {
  id: string;
  name: string;
  target: string;
  indicativePrice: string;
  tagline: string;
  description: string;
  features: string[];
  idealFor: string;
  timeline: string;
  popular?: boolean;
}

export interface WorkflowNode {
  step: number;
  label: string;
  sublabel: string;
  system: string;
  icon: string;
  status: 'pending' | 'processing' | 'completed';
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export type LegalModalType = 'privacy' | 'terms' | 'cookies' | null;
