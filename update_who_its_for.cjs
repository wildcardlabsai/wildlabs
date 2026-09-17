const fs = require('fs');
let content = fs.readFileSync('src/data/content.ts', 'utf8');

const updatedCards = `export const WHO_ITS_FOR_CARDS = [
  {
    title: 'Small Businesses',
    badge: '1–15 People',
    desc: 'Punch above your weight. Automate customer intake, establish a professional digital presence, and build internal tools to grow without immediate payroll overhead.',
    metric: 'Scale revenue without proportional headcount'
  },
  {
    title: 'Growing Companies',
    badge: '15–75 People',
    desc: 'Remove cross-departmental bottlenecks. Modernize legacy systems into fast, cloud-native architecture and connect disjointed SaaS tools via intelligent APIs.',
    metric: 'Enterprise-grade custom infrastructure'
  },
  {
    title: 'Operations Teams',
    badge: 'Department Focus',
    desc: 'Eliminate duplicate data entry, ensure compliance records are filed consistently, and automate client onboarding from signed agreement to kickoff.',
    metric: 'Zero-error document and data transfer'
  },
  {
    title: 'Sales & Marketing',
    badge: 'Commercial',
    desc: 'Respond to leads in seconds. Deploy high-conversion web design, enrich inbound enquiries with AI, and auto-book discovery calls so reps focus purely on pitching.',
    metric: 'Optimized inbound conversion funnels'
  },
  {
    title: 'Customer Service',
    badge: 'Client Care',
    desc: 'Implement intelligent RAG pipelines and AI chatbots to resolve 60%+ of routine operational tickets instantly while equipping human agents with precise context.',
    metric: 'Sub-90 second resolution on transactional enquiries'
  },
  {
    title: 'Consultancies & Agencies',
    badge: 'Professional Services',
    desc: 'Free up billable hours. Build bespoke client-facing portals, automate proposal signatures, and engineer secure infrastructure that sets you apart from competitors.',
    metric: 'Reclaim 8+ billable hours every week'
  }
];`;

const startIndex = content.indexOf('export const WHO_ITS_FOR_CARDS = [');
if (startIndex !== -1) {
  content = content.substring(0, startIndex) + updatedCards;
  fs.writeFileSync('src/data/content.ts', content);
  console.log('Successfully updated WHO_ITS_FOR_CARDS');
} else {
  console.log('Failed to find WHO_ITS_FOR_CARDS');
}
