import {
  ServiceCardItem,
  AIEmployeeItem,
  ResourceArticle,
  PricingTier,
  FAQItem,
} from '../types';

export const SERVICES_DATA: ServiceCardItem[] = [
  {
    id: 'lead-management',
    number: '01',
    title: 'Lead Management',
    category: 'Sales & Inbound',
    iconName: 'UserCheck',
    description: 'Capture, qualify, route and follow up leads automatically across every inbound channel.',
    points: [
      'Ingests enquiries from website forms, emails, and shared inboxes within seconds',
      'Enriches lead profiles with company data and scores qualification readiness',
      'Routes qualified opportunities directly to the right account manager with context',
      'Schedules calendar invites and drafts tailored, human-reviewable introduction notes'
    ],
  },
  {
    id: 'customer-communication',
    number: '02',
    title: 'Customer Communication',
    category: 'Client Services',
    iconName: 'MessageSquareText',
    description: 'AI-assisted responses, enquiry handling, follow-ups and notifications without generic chatbot feel.',
    points: [
      'Classifies inbound emails by intent, urgency, and customer tier',
      'Drafts context-aware replies drawing from internal documentation and order records',
      'Sends proactive status updates on project milestones and shipping delays',
      'Flags frustrated or complex client messages for immediate senior human review'
    ],
  },
  {
    id: 'admin-data-entry',
    number: '03',
    title: 'Admin & Data Entry',
    category: 'Back Office',
    iconName: 'Database',
    description: 'Extract information from emails, forms and documents and move it where it needs to go.',
    points: [
      'Replaces manual copy-pasting between legacy desktop software and cloud tools',
      'Cross-checks supplier details, invoice line items, and bank transaction references',
      'Synchronises customer address changes and billing records across ERP and CRM',
      'Eliminates duplicate entry and human transposition typos across systems'
    ],
  },
  {
    id: 'documents-processing',
    number: '04',
    title: 'Documents & Processing',
    category: 'Compliance & Finance',
    iconName: 'FileSpreadsheet',
    description: 'Turn repetitive document-based processes into automated workflows with zero fragile templates.',
    points: [
      'Parses PDF quotes, purchase orders, statements, and delivery notes reliably',
      'Extracts structured table data regardless of differing vendor invoice layouts',
      'Pre-populates signature packages and compliance verification bundles',
      'Archives indexed searchable records directly into secure cloud document stores'
    ],
  },
  {
    id: 'internal-operations',
    number: '05',
    title: 'Internal Operations',
    category: 'Team Workflows',
    iconName: 'GitMerge',
    description: 'Connect the tools your team already uses and remove repetitive steps from daily handovers.',
    points: [
      'Automates client onboarding check-lists, contract sign-offs, and folder creation',
      'Synchronises project management tasks with billable time tracking entries',
      'Orchestrates cross-departmental approval chains across Slack, Teams, or email',
      'Removes daily morning status meetings with automated asynchronous daily recaps'
    ],
  },
  {
    id: 'reporting-insights',
    number: '06',
    title: 'Reporting & Insights',
    category: 'Management Intelligence',
    iconName: 'BarChart3',
    description: 'Automatically collect information and produce useful reports without manual spreadsheet work.',
    points: [
      'Pulls weekly sales numbers, pipeline changes, and operational metrics into one digest',
      'Generates executive Monday morning email briefs without late Friday pivot tables',
      'Monitors customer churn indicators, service response SLAs, and inventory thresholds',
      'Delivers concise summaries highlighting anomalies that require team intervention'
    ],
  },
  {
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
];

export const AI_EMPLOYEES_DATA: AIEmployeeItem[] = [
  {
    id: 'lead-assistant',
    title: 'The Lead Assistant',
    tagline: 'Captures and qualifies new enquiries.',
    description: 'Monitors inbound contact points, gathers missing discovery details, verifies company fit, and schedules introductory calls directly into your team calendars.',
    whatItDoes: 'Monitors inboxes and web forms, reviews company size and sector fit, drafts initial responses, and books qualifying discovery calls directly with the right commercial lead.',
    whatItConnectsTo: ['HubSpot / Salesforce', 'Google Workspace / Microsoft 365', 'Calendly / SavvyCal', 'Companies House API', 'Slack / Teams'],
    tasksHandled: [
      'Instant enquiry acknowledgement within 90 seconds',
      'Firmographic data enrichment (employee count, industry, location)',
      'Intelligent intent scoring based on budget and requirements',
      'Automated calendar scheduling link dispatch with contextual prep notes',
      'CRM contact creation and deal stage assignment'
    ],
    whenItRuns: 'Continuously, 24 hours a day, 7 days a week, 365 days a year.',
    humanResponsibility: 'Conducting the discovery meeting, building interpersonal rapport, negotiating commercial terms, and closing agreements.',
    sampleTrigger: 'New web enquiry form submitted at 8:42pm on a Sunday.',
    sampleOutput: 'Enquiry enriched with LinkedIn/Companies House data; qualified tier-1 prospect booked for Tuesday 10am; CRM opportunity logged and sales lead notified in Slack with talking points.'
  },
  {
    id: 'admin-assistant',
    title: 'The Admin Assistant',
    tagline: 'Processes documents and updates systems.',
    description: 'Handles daily paperwork triage, invoice and PO parsing, compliance document auditing, and cross-system database updates without manual typing.',
    whatItDoes: 'Reads inbound attachments, extracts structured line items, updates financial and operations software, and verifies records against existing database records.',
    whatItConnectsTo: ['Xero / QuickBooks', 'Google Drive / SharePoint', 'ERP systems', 'Airtable / PostgreSQL', 'Shared Operations Inboxes'],
    tasksHandled: [
      'Vendor invoice extraction (amounts, VAT numbers, dates, line items)',
      'Three-way matching against purchase orders and receiving slips',
      'Document rename, categorisation, and folder filing rules',
      'Employee expense receipt validation and policy compliance checks',
      'Batch data hygiene and duplicate record merging'
    ],
    whenItRuns: 'Real-time on arrival of documents or scheduled batch sweeps (e.g., hourly).',
    humanResponsibility: 'Final financial approval for payments above preset thresholds and resolving flagged discrepancies.',
    sampleTrigger: 'Supplier sends PDF invoice with non-standard layout to finance@company.co.uk.',
    sampleOutput: 'Extracted 14 line items with 100% field confidence; matched to PO #8492; drafted bill in Xero awaiting 1-click director sign-off.'
  },
  {
    id: 'customer-assistant',
    title: 'The Customer Assistant',
    tagline: 'Handles routine customer questions and follow-ups.',
    description: 'Resolves frequent transactional enquiries, order tracking requests, policy lookups, and account updates while seamlessly escalating complex cases to people.',
    whatItDoes: 'Acts as first-line operational support, answering repetitive questions by retrieving live data from databases, while drafting proposed replies for edge cases.',
    whatItConnectsTo: ['Zendesk / Freshdesk / Help Scout', 'Shopify / WooCommerce / Custom DB', 'Stripe / GoCardless', 'Knowledge Base & SOP Docs'],
    tasksHandled: [
      'Order dispatch status lookups and tracking link dissemination',
      'Refund and cancellation policy questions handled with empathy',
      'Subscription change requests and billing address modifications',
      'Collation of ticket details before passing to senior specialists',
      'Post-resolution satisfaction check-ins and feedback logging'
    ],
    whenItRuns: '24/7 with zero hold times and sub-two-minute response latency.',
    humanResponsibility: 'Handling high-value account disputes, sensitive complaints, technical debugging, and personal relationship management.',
    sampleTrigger: 'Client asks "Has shipment UK-9912 departed the depot yet and can we add an extra pallet?"',
    sampleOutput: 'System looked up dispatch API: shipment leaves at 4:30pm; answered dispatch query; alerted warehouse supervisor in Slack to confirm if pallet addition is physically possible.'
  },
  {
    id: 'operations-assistant',
    title: 'The Operations Assistant',
    tagline: 'Moves information between systems and keeps processes moving.',
    description: 'The glue between disparate business tools. Listens for project handoffs, triggers onboarding workflows, updates trackers, and alerts teams to bottlenecks.',
    whatItDoes: 'Coordinates multi-step internal procedures that normally stall in someone’s inbox, ensuring handoffs occur instantly with complete documentation.',
    whatItConnectsTo: ['Asana / ClickUp / Monday.com', 'Slack / Microsoft Teams', 'Google Docs / Notion', 'DocuSign / PandaDoc'],
    tasksHandled: [
      'Triggering client onboarding pipeline immediately after contract signature',
      'Generating shared Google Drive or OneDrive folder architectures with permissions',
      'Creating kickoff task templates tailored to client service tier',
      'Chasing pending client deliverables with polite automated reminders',
      'Weekly operational bottleneck alerting for team leads'
    ],
    whenItRuns: 'Event-driven (instantly when a status changes) or on cron schedules.',
    humanResponsibility: 'Delivering the core professional service, managing client strategy, and creative problem solving.',
    sampleTrigger: 'Client e-signs contract on DocuSign.',
    sampleOutput: 'Created Asana project with 18 milestone subtasks; provisioned client shared portal; generated kickoff brief; invited team members to dedicated Slack channel.'
  },
  {
    id: 'data-assistant',
    title: 'The Data Assistant',
    tagline: 'Collates disparate sources and delivers actionable intelligence.',
    description: 'Eliminates Friday afternoon spreadsheet crunching. Connects marketing, sales, finance, and operations data to assemble clear, human-readable executive summaries.',
    whatItDoes: 'Aggregates metrics from 5+ disparate platforms, detects unusual variance or anomalies, and formats clean Monday briefings ready for leadership.',
    whatItConnectsTo: ['PostgreSQL / BigQuery', 'Stripe / Banking feeds', 'Google Analytics / Ads', 'Spreadsheets & CSV feeds', 'Email & Slack Digests'],
    tasksHandled: [
      'Weekly cross-department KPI aggregation without manual VLOOKUPs',
      'Cash flow projection updates based on pending payables and receivables',
      'Anomaly detection (e.g. unexpected drop in daily lead volume or payment failure spike)',
      'Customer churn warning triggers when account engagement drops',
      'Clean Markdown executive briefs delivered straight to your inbox'
    ],
    whenItRuns: 'Nightly and scheduled weekly reporting cycles (e.g. 7:00am Mondays).',
    humanResponsibility: 'Strategic decision-making, resource allocation, and choosing what business priorities to address.',
    sampleTrigger: 'Monday 6:00 AM weekly reporting run.',
    sampleOutput: 'Executive brief generated: highlighted +14% WoW pipeline growth, flagged 2 overdue enterprise invoices totalling £18,400, and summarised team billable hours.'
  },
];

export const FAQS_DATA: FAQItem[] = [
  {
    question: 'Do I need to change my software or migrate to a new platform?',
    answer: 'No. Wildcard Labs builds workflows around the tools your business already uses every day—whether that is Xero, HubSpot, Google Workspace, Microsoft 365, Slack, or an industry-specific system. We connect your existing software using secure APIs and webhooks. You do not need to retrain your team on a complicated new platform.',
  },
  {
    question: 'How long does automation take to design and implement?',
    answer: 'A single high-impact workflow (such as an automated lead capture and qualification system or invoice processing pipeline) typically takes 2 to 3 weeks from discovery to go-live. Multi-department transformations or multi-agent AI employee deployments usually roll out in phases over 4 to 8 weeks, ensuring zero disruption to your daily operations.',
  },
  {
    question: 'Can automation work with messy spreadsheets and manual files?',
    answer: 'Yes. In fact, spreadsheets are one of our most common automation touchpoints. We build automations that ingest Excel and Google Sheets data, validate formatting, catch errors before they propagate, and either update the sheet automatically or migrate the data seamlessly into a structured database.',
  },
  {
    question: 'Can you connect multiple systems that do not have native integrations?',
    answer: 'Yes. Most modern business tools have REST APIs or webhook support. Where native direct connectors do not exist, we build custom bridge logic, handle data transformations, manage rate limits, and ensure secure, reliable data exchange between all your systems.',
  },
  {
    question: 'Can humans approve actions before anything happens?',
    answer: 'Absolutely. We design automations with explicit "Human-in-the-Loop" checkpoints whenever financial transactions, sensitive client communications, or high-consequence decisions are involved. For example, an AI Employee can parse an invoice and prepare the entry, but send a one-click approval prompt to your finance director in Slack before posting to the general ledger.',
  },
  {
    question: 'What happens when something goes wrong or an unexpected error occurs?',
    answer: 'All Wildcard Labs workflows are built with defensive error handling, automated retry queues, and proactive alerts. If a third-party API is temporarily unreachable or an unrecognised document format arrives, the system safely pauses that single item, routes it to a designated team member with the error context, and leaves the rest of the workflow running uninterrupted.',
  },
  {
    question: 'Can automations be changed later as our business evolves?',
    answer: 'Yes. We document every workflow thoroughly and build modular architectures. As your business grows, introduces new products, or changes software providers, workflows can be updated, expanded, or re-pointed quickly without starting from scratch.',
  },
  {
    question: 'Where is our company data processed, and is it secure?',
    answer: 'Security and privacy are non-negotiable. We operate under strict UK GDPR compliance. Your business data is never used to train public AI foundation models. Connections use enterprise-grade end-to-end encryption (TLS 1.3 / AES-256), and credentials are held in dedicated secure key management stores.',
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'start',
    name: 'START',
    target: 'Single Process Automation',
    indicativePrice: 'From £1,800',
    tagline: 'For one straightforward, high-friction process costing your team hours every week.',
    description: 'Ideal for businesses making their first step into practical automation. We identify the single most painful repetitive bottleneck and replace it with an automated workflow.',
    features: [
      '1 dedicated automated workflow (e.g. Lead Qualification or Invoice Extraction)',
      'Connection between up to 3 core systems (e.g. Web Form + CRM + Email)',
      'Full error-handling and fallback alerting',
      'Interactive testing and team walk-through',
      '14 days post-launch hypercare and fine-tuning',
      'Complete workflow documentation and architecture diagram'
    ],
    idealFor: 'Businesses losing 5–10 hours per week on a single manual handover.',
    timeline: '2–3 weeks to deployment',
    popular: false,
  },
  {
    id: 'grow',
    name: 'GROW',
    target: 'Connected Department Workflows',
    indicativePrice: 'From £4,200',
    tagline: 'For multiple connected workflows that streamline an entire operational area.',
    description: 'Designed for growing businesses looking to connect departments, deploy AI document processing, and eliminate cross-system data silos.',
    features: [
      '3 to 5 interconnected workflows across a key function',
      'Integration across 5+ business systems (CRM, ERP, Billing, Messaging)',
      'AI-powered document or customer communication processing',
      'Human-in-the-loop approval checkpoints (Slack/Teams/Email)',
      'Custom error-logging dashboard and alerting',
      '30 days post-launch support and quarterly workflow optimisation review'
    ],
    idealFor: 'Established companies with 10–50 staff where handoffs frequently bottleneck.',
    timeline: '4–6 weeks phased rollout',
    popular: true,
  },
  {
    id: 'scale',
    name: 'SCALE',
    target: 'End-to-End Operational Transformation',
    indicativePrice: 'Custom Scoped',
    tagline: 'For businesses building automated operations and deploying dedicated AI Employees.',
    description: 'Comprehensive workflow engineering, custom AI Employees, and multi-system orchestration designed to support scale without proportional headcount growth.',
    features: [
      'Comprehensive company-wide process audit & opportunity map',
      'Deployment of tailored AI Employees (Lead, Admin, Customer, Ops)',
      'Deep custom API bridges & legacy system connectivity',
      'Advanced fallback architecture & compliance logging (UK GDPR)',
      'Dedicated Slack/Teams engineering channel & ongoing SLA',
      'Continuous workflow monitoring and monthly feature enhancements'
    ],
    idealFor: 'Growing companies scaling revenue rapidly who need operational elasticity.',
    timeline: '6–10 weeks enterprise delivery',
    popular: false,
  },
];

export const ARTICLES_DATA: ResourceArticle[] = [
  {
    id: '10-processes-to-automate',
    title: '10 Business Processes You Can Automate This Week',
    readTime: '6 min read',
    category: 'Guides',
    publishedDate: 'March 2026',
    summary: 'A pragmatic audit of the 10 most common admin bottlenecks UK businesses waste 15+ hours on every single week, and how to eliminate them.',
    keyTakeaway: 'Start with high-volume, low-variability tasks where data is already structured (like new customer setup or invoice matching).',
    content: [
      'Most businesses believe automation requires months of planning and massive software overhauls. In reality, the most valuable automations are small, self-contained loops that remove daily friction.',
      '1. New Customer Setup: Automatically create folders, provision accounts, and generate kickoff checklists the moment a proposal is signed.',
      '2. Inbound Lead Enrichment: Look up company details on Companies House and LinkedIn before notifying the sales lead.',
      '3. Invoice-to-Accounting Sync: Stop keying PDF numbers into Xero manually. Modern vision models extract line items with 99%+ accuracy.',
      '4. Calendar Scheduling Handoffs: Eliminate the four-email back-and-forth by triggering smart booking links with contextual agenda items.',
      '5. Contract Expiry & Renewal Alerts: Set automated monitors that warn account managers 90 days before agreement expiry.',
      '6. Cross-Platform Address & Contact Updates: Keep ERP, CRM, and billing addresses in continuous harmony.',
      '7. Weekly Sales Performance Digests: Replace manual spreadsheet collation with a Friday 5pm automated summary.',
      '8. Supplier Onboarding & Compliance Verification: Validate insurance certificates and VAT numbers automatically upon upload.',
      '9. Customer Satisfaction Surveys: Trigger contextual feedback requests 48 hours after project completion.',
      '10. Team Out-of-Office Coverage: Reassign active support tickets and forward urgent alerts automatically when a team member marks leave.'
    ]
  },
  {
    id: 'what-is-an-ai-employee',
    title: 'What Is an AI Employee? (And What It Isn’t)',
    readTime: '5 min read',
    category: 'AI Employees',
    publishedDate: 'February 2026',
    summary: 'Cutting through the marketing hyperbole: how modern autonomous workers actually interface with your software, databases, and human team.',
    keyTakeaway: 'An AI Employee is not a magical sentient brain; it is an intelligent, persistent workflow agent with tool-calling capabilities and explicit boundary rules.',
    content: [
      'The term "AI Employee" is often misused to describe simple chatbots that sit in the bottom corner of a website. That is not what an AI employee is.',
      'At Wildcard Labs, we define an AI Employee as a persistent software agent with three distinct capabilities:',
      '1. Context Awareness: It understands business rules, client history, and procedural guidelines, rather than just matching keywords.',
      '2. Tool Execution: It has permissioned access to your internal software APIs—it can query databases, create records, prepare emails, and dispatch notifications.',
      '3. Bounded Autonomy: It operates within strictly defined guardrails. When an input falls outside normal parameters, it pauses and asks a human colleague for guidance.',
      'Crucially, AI employees do not replace human judgement, leadership, or relationship building. They handle the repetitive cognitive heavy lifting so your human team can focus on what actually requires empathy and high-stakes problem solving.'
    ]
  },
  {
    id: '5-signs-of-manual-admin',
    title: '5 Signs Your Business Has Too Much Manual Admin',
    readTime: '4 min read',
    category: 'Strategy',
    publishedDate: 'January 2026',
    summary: 'Subtle operational symptoms that signal your team is spending more time acting as human copy-paste bridges than doing their actual jobs.',
    keyTakeaway: 'If your best people spend the first 90 minutes of every day "catching up on admin", you have a structural process problem, not an effort problem.',
    content: [
      'Manual work creeps into a business slowly. When you are small, copy-pasting an address from an email into an invoice takes 45 seconds. But as volume multiplies, that 45 seconds becomes a 20-hour weekly drain across the business.',
      'Here are five unmistakable symptoms:',
      '1. The "Human API": Two software systems that do not talk to each other, bridged by an employee retyping data between browser tabs.',
      '2. "Did you follow up with...?" meetings: Daily standups spent checking if basic administrative steps were executed.',
      '3. Information Stored in Inboxes: Critical business data trapped in individual employees’ personal email inboxes rather than structured systems.',
      '4. Monday Morning Spreadsheet Crunch: Senior managers spending Friday afternoons or Sunday evenings manually pulling CSV files for leadership meetings.',
      '5. Scaling Pain: Winning 30% more clients requires hiring 30% more administrative headcount just to manage the paperwork.'
    ]
  },
  {
    id: 'ai-vs-traditional-automation',
    title: 'AI Automation vs Traditional Automation: What Changed?',
    readTime: '7 min read',
    category: 'Workflows',
    publishedDate: 'January 2026',
    summary: 'Why traditional rule-based automations broke whenever a customer emailed a question, and how modern language models solve the rigidity problem.',
    keyTakeaway: 'Traditional automation requires perfectly formatted inputs; AI automation handles unstructured human language, messy documents, and varying layouts gracefully.',
    content: [
      'Traditional automation (tools like basic Zapier or legacy RPA) has existed for years. It works well when conditions are binary: "If row added to Google Sheet, send Slack message".',
      'The limitation of traditional automation has always been fragility. The moment a customer submits a free-text form with a typo, or a supplier changes their invoice layout by two pixels, the automation crashes.',
      'AI-powered automation changes the paradigm completely:',
      '1. Understanding Unstructured Data: AI can read an email written in conversational English, understand that the sender wants to reschedule a delivery, extract their postcode, and find their order number.',
      '2. Robust Document Parsing: Instead of fragile coordinate-based OCR templates, modern models understand semantic relationships (e.g. knowing that "Total Due", "Amount Payable", and "Balance" represent the same concept).',
      '3. Intelligent Routing: Categorising complex customer tickets by emotional tone, urgency, and topic without having to write 500 brittle IF/THEN conditions.',
      'The result is automation that bends without breaking.'
    ]
  },
  {
    id: 'find-first-automation-opportunity',
    title: 'How to Find Your First Automation Opportunity',
    readTime: '5 min read',
    category: 'Guides',
    publishedDate: 'December 2025',
    summary: 'A step-by-step audit framework to identify the highest ROI automation project in your business without overwhelming your staff.',
    keyTakeaway: 'Target the task that is high-frequency, repeatable, and universally disliked by your team. Early momentum creates enthusiasm for broader adoption.',
    content: [
      'When business owners decide to automate, they often attempt to tackle their most complex, high-risk process first. This is usually a mistake.',
      'To choose your ideal first project, score your daily business processes against three simple criteria:',
      '1. Frequency: Does this task happen multiple times a day or week?',
      '2. Consistency: Are the rules governing this task 80%+ consistent across instances?',
      '3. Team Frustration: Is this a task your team actively dreads or postpones?',
      'When you find a process that scores high on all three, that is your beachhead. Automating it delivers immediate, tangible time savings, proves the concept to your team, and establishes the technical infrastructure for subsequent workflows.'
    ]
  },
  {
    id: 'human-in-the-loop-safeguard',
    title: 'The Human-in-the-Loop Safeguard: Why Pure Autonomy Is a Mistake',
    readTime: '6 min read',
    category: 'Strategy',
    publishedDate: 'November 2025',
    summary: 'Why the safest, most reliable enterprise automations always include human review gates for high-stakes decisions.',
    keyTakeaway: 'The goal of automation is not zero human involvement; it is zero human drudgery. Let software do the 95% preparation; let humans provide the 5% judgement.',
    content: [
      'A common fear among business leaders is that an automated system will go rogue—sending an inappropriate email to an important client, or approving an incorrect invoice payment.',
      'At Wildcard Labs, we solve this with Human-in-the-Loop (HITL) architecture:',
      'Instead of allowing an AI agent to execute high-stakes actions directly, the agent performs 95% of the groundwork:',
      'It collects the background data, drafts the exact response, checks the accounting codes, and presents a finished package to a human manager.',
      'The manager receives an interactive card in Slack or Teams with two buttons: [Approve & Send] or [Edit Draft].',
      'This reduces a 20-minute manual task to a 5-second review, while maintaining 100% human accountability.'
    ]
  }
];

export const PROBLEM_CARDS = [
  {
    title: 'Outdated Web Design',
    desc: 'Websites that look like they were built 10 years ago, frustrating users and actively hurting your conversion rates.',
    icon: 'Layout',
  },
  {
    title: 'Rigid Off-The-Shelf Software',
    desc: 'Forcing your unique business processes into restrictive SaaS tools because you lack custom development.',
    icon: 'Code2',
  },
  {
    title: 'Hidden Unstructured Data',
    desc: 'Sitting on mountains of PDFs and emails without the AI capability to query, extract, or make sense of the data.',
    icon: 'BrainCircuit',
  },
  {
    title: 'Copying data between systems',
    desc: 'Taking customer information from an email and manually re-entering it into a CRM, spreadsheet, or invoicing tool.',
    icon: 'CopyCheck',
  },
  {
    title: 'Chasing enquiries & quotes',
    desc: 'Letting warm commercial leads go cold because someone did not have time to send a follow-up email.',
    icon: 'Clock',
  },
  {
    title: 'Sending repetitive emails',
    desc: 'Typing the same onboarding instructions, booking confirmations, or status updates dozens of times a week.',
    icon: 'MailCheck',
  },
  {
    title: 'Updating spreadsheets',
    desc: 'Manually consolidating CSV exports every Friday afternoon just to know where projects or sales stand.',
    icon: 'TableProperties',
  },
  {
    title: 'Processing documents',
    desc: 'Opening PDF invoices, delivery notes, and purchase orders to manually transcribe amounts and dates.',
    icon: 'FileText',
  },
  {
    title: 'Re-keying customer information',
    desc: 'Creating human errors and address typos that lead to failed deliveries or incorrect invoice billing.',
    icon: 'Keyboard',
  },
  {
    title: 'Following up leads',
    desc: 'Losing high-value opportunities simply because team members were overwhelmed with operational admin.',
    icon: 'TrendingUp',
  },
  {
    title: 'Creating reports',
    desc: 'Spending hours preparing static reports that are already outdated by the time they are presented.',
    icon: 'PieChart',
  },
  {
    title: 'Moving information between software',
    desc: 'Acting as a human bridge between legacy desktop applications and modern cloud business tools.',
    icon: 'Layers',
  },
];

export const INTEGRATION_CATEGORIES = [
  {
    category: 'CRM',
    tools: ['HubSpot', 'Salesforce', 'Pipedrive', 'Zoho CRM', 'Attio']
  },
  {
    category: 'Email & Calendar',
    tools: ['Google Workspace', 'Microsoft 365', 'Outlook', 'Gmail', 'Calendly']
  },
  {
    category: 'Spreadsheets & DBs',
    tools: ['Google Sheets', 'Excel', 'Airtable', 'PostgreSQL', 'Notion']
  },
  {
    category: 'Accounting & Finance',
    tools: ['Xero', 'QuickBooks Online', 'Sage', 'Stripe', 'GoCardless']
  },
  {
    category: 'Forms & Surveys',
    tools: ['Typeform', 'Tally', 'Jotform', 'Google Forms', 'Webflow Forms']
  },
  {
    category: 'Documents & Signatures',
    tools: ['DocuSign', 'PandaDoc', 'Adobe Sign', 'Google Drive', 'SharePoint']
  },
  {
    category: 'Team Communication',
    tools: ['Slack', 'Microsoft Teams', 'WhatsApp Business', 'Twilio SMS']
  },
  {
    category: 'Project Management',
    tools: ['Asana', 'Monday.com', 'ClickUp', 'Jira', 'Trello']
  }
];

export const WHO_ITS_FOR_CARDS = [
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
];