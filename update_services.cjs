const fs = require('fs');
let content = fs.readFileSync('src/data/content.ts', 'utf8');

const newServices = `  {
    id: 'software-development',
    number: '07',
    title: 'Software & Platform Development',
    category: 'Custom Engineering',
    iconName: 'Code2',
    description: 'Bespoke web applications, SaaS platforms, and internal tools engineered for scale.',
    points: [
      'Full-stack development using modern, reliable frameworks',
      'Custom internal portals, dashboards, and operational platforms',
      'Scalable cloud architecture and secure API development',
      'Legacy system modernization and custom feature engineering'
    ],
  },
  {
    id: 'ai-integrations',
    number: '08',
    title: 'AI Integrations',
    category: 'Artificial Intelligence',
    iconName: 'BrainCircuit',
    description: 'Embed powerful generative AI and machine learning capabilities into your existing tools.',
    points: [
      'Integration of LLMs (like Gemini, OpenAI) into business workflows',
      'Custom knowledge base chat tools for internal documentation',
      'Intelligent routing, document summarization, and data extraction',
      'Seamless connection with your proprietary data and CRMs'
    ],
  },
  {
    id: 'web-design',
    number: '09',
    title: 'Web Design',
    category: 'Digital Presence',
    iconName: 'Layout',
    description: 'High-performance, beautifully designed websites that drive conversion and establish trust.',
    points: [
      'Modern, responsive web design tailored to your brand identity',
      'Conversion-rate optimized user experiences (UX/UI)',
      'High-performance front-end architecture and SEO fundamentals',
      'Content management system (CMS) setup and ongoing support'
    ],
  }
`;

const parts = content.split('export const AI_EMPLOYEES_DATA');
let firstPart = parts[0];
const lastBracketIndex = firstPart.lastIndexOf('];');
if (lastBracketIndex !== -1) {
  firstPart = firstPart.substring(0, lastBracketIndex) + newServices + '];\n\n';
  fs.writeFileSync('src/data/content.ts', firstPart + 'export const AI_EMPLOYEES_DATA' + parts[1]);
  console.log('Successfully added new services via split');
} else {
  console.log('Could not find injection point');
}
