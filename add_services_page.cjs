const fs = require('fs');
let content = fs.readFileSync('src/pages/WhatWeAutomatePage.tsx', 'utf8');

content = content.replace('What could your business stop doing', 'Engineering your digital');
content = content.replace('<span className="text-[#a3e635]">manually?</span>', '<span className="text-[#a3e635]">infrastructure.</span>');
content = content.replace('Automation isn’t about replacing people. It’s about removing repetitive, low-value work so people can spend more time on strategic, creative, and customer-facing work that actually moves your business forward.', 'From bespoke software development and high-conversion web design, to intelligent AI integrations and business automation. We build the digital tools that help your business scale without increasing overhead.');

content = content.replace('AutomateCategory[] = [', `AutomateCategory[] = [
  {
    id: 'software-development',
    title: 'Software Development',
    icon: Code2,
    problem: 'Off-the-shelf software rarely fits complex business logic, forcing teams to rely on messy spreadsheets, fragmented tools, and manual data synchronization.',
    whatWildcardLabsDoes: [
      'Engineer bespoke web applications and SaaS platforms tailored to your operational needs',
      'Modernize legacy systems into fast, cloud-native architecture',
      'Build custom internal portals, vendor dashboards, and client-facing applications',
      'Develop secure, scalable APIs to connect disjointed systems'
    ],
    exampleWorkflow: {
      trigger: 'Client requires a custom B2B inventory management platform.',
      steps: [
        'Architect secure, scalable database structure and authentication',
        'Develop responsive frontend dashboard using React and Tailwind',
        'Build robust backend APIs for real-time stock synchronization',
        'Deploy on cloud infrastructure with automated testing and CI/CD'
      ],
      outcome: 'A centralized, high-performance platform eliminating spreadsheet reliance.'
    },
    businessBenefit: 'Own your digital infrastructure, remove software licensing bloat, and unlock operational scale that off-the-shelf tools cannot provide.',
    benefitStat: 'Limitless custom scalability',
  },
  {
    id: 'ai-integrations',
    title: 'AI Integrations',
    icon: BrainCircuit,
    problem: 'Companies sit on mountains of unstructured data—PDFs, historical emails, support tickets—but lack the technical capability to extract value or query it efficiently.',
    whatWildcardLabsDoes: [
      'Connect state-of-the-art LLMs (Gemini, OpenAI) directly to your proprietary company data',
      'Build internal AI chatbots that can instantly retrieve answers from company wikis and policies',
      'Develop intelligent document processing tools to extract structured data from messy PDFs',
      'Implement AI-driven routing and summarization for customer support tickets'
    ],
    exampleWorkflow: {
      trigger: 'Customer service team receives 50-page complex technical manual.',
      steps: [
        'Custom RAG (Retrieval-Augmented Generation) pipeline ingests the document',
        'Employees chat with the AI assistant to instantly query specific technical specs',
        'AI provides natural language answers with exact page citations',
        'Assistant drafts formatted email responses to client queries based on the manual'
      ],
      outcome: 'Technical answers retrieved in seconds instead of hours of manual searching.'
    },
    businessBenefit: 'Unlock the value of unstructured data, drastically reduce research time, and empower your team with intelligent assistance.',
    benefitStat: '10x faster information retrieval',
  },
  {
    id: 'web-design',
    title: 'Web Design',
    icon: Layout,
    problem: 'Outdated, slow-loading websites fail to establish trust, actively hurt conversion rates, and frustrate prospective clients trying to understand your value.',
    whatWildcardLabsDoes: [
      'Design modern, visually striking user interfaces (UI) aligned with your brand identity',
      'Engineer lightning-fast, high-performance frontend architecture (React, Next.js)',
      'Optimize user journeys (UX) specifically for higher lead conversion',
      'Implement technical SEO fundamentals and responsive mobile-first layouts'
    ],
    exampleWorkflow: {
      trigger: 'Visitor lands on your company website from a Google search.',
      steps: [
        'Site loads instantly (< 1 second) with seamless entrance animations',
        'Clear value proposition and social proof establish immediate trust',
        'Intuitive navigation guides the user to tailored service pages',
        'High-converting lead capture form seamlessly syncs directly to your CRM'
      ],
      outcome: 'Higher trust, longer engagement, and a significant increase in qualified inbound leads.'
    },
    businessBenefit: 'Turn your digital storefront into a high-performance asset that drives revenue and elevates brand perception.',
    benefitStat: 'Optimized conversion rates',
  },`);

// Need to import Code2, BrainCircuit, Layout in WhatWeAutomatePage.tsx
content = content.replace("import {\n  UserCheck,\n  MessageSquareText,\n  Database,\n  FileSpreadsheet,\n  GitMerge,\n  BarChart3,\n  Mail,\n  Bot,\n  CheckCircle2,\n  ArrowRight\n} from 'lucide-react';", "import {\n  UserCheck,\n  MessageSquareText,\n  Database,\n  FileSpreadsheet,\n  GitMerge,\n  BarChart3,\n  Mail,\n  Bot,\n  CheckCircle2,\n  ArrowRight,\n  Code2,\n  BrainCircuit,\n  Layout\n} from 'lucide-react';");

fs.writeFileSync('src/pages/WhatWeAutomatePage.tsx', content);
