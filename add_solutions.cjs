const fs = require('fs');
let content = fs.readFileSync('src/pages/SolutionsPage.tsx', 'utf8');

// Add imports if they don't exist
content = content.replace(
  'ArrowUpRight\n} from \'lucide-react\';',
  'ArrowUpRight,\n  Code2,\n  BrainCircuit,\n  Layout\n} from \'lucide-react\';'
);

const newSolutions = `  {
    id: 'software-development',
    title: 'Software Development',
    subtitle: 'Bespoke web applications and platforms.',
    description: 'Custom SaaS platforms, internal portals, and high-performance business applications engineered for your exact scale.',
    icon: Code2,
    keyPoints: [
      'Full-stack architecture using modern frameworks',
      'Legacy system modernization and API engineering',
      'Secure, scalable, cloud-native deployments'
    ],
    targetDepartment: 'Custom Engineering',
    deliveryTime: '8–12 weeks',
    destinationPage: 'contact',
  },
  {
    id: 'ai-integrations',
    title: 'AI Integrations',
    subtitle: 'Embed generative AI into your workflows.',
    description: 'We connect cutting-edge LLMs directly to your business data to enable natural language querying and automated task execution.',
    icon: BrainCircuit,
    keyPoints: [
      'Custom AI agents grounded in your company data',
      'Intelligent document summarization and extraction',
      'Seamless API connections to OpenAI, Gemini, etc.'
    ],
    targetDepartment: 'Artificial Intelligence',
    deliveryTime: '4–8 weeks',
    destinationPage: 'contact',
  },
  {
    id: 'web-design',
    title: 'Web Design',
    subtitle: 'High-performance, conversion-focused websites.',
    description: 'Beautiful, modern web experiences designed to establish trust, capture leads, and perform flawlessly across all devices.',
    icon: Layout,
    keyPoints: [
      'Tailored UX/UI aligned with brand identity',
      'High conversion-rate optimization architectures',
      'Lightning-fast load times and SEO fundamentals'
    ],
    targetDepartment: 'Digital Presence',
    deliveryTime: '4–6 weeks',
    destinationPage: 'contact',
  },
`;

const insertIndex = content.lastIndexOf('];\n\nexport const SolutionsPage');
if (insertIndex !== -1) {
  content = content.substring(0, insertIndex) + '\n' + newSolutions + content.substring(insertIndex);
  fs.writeFileSync('src/pages/SolutionsPage.tsx', content);
  console.log('Successfully added new solutions');
} else {
  console.log('Failed to find injection point');
}
