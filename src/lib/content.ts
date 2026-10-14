export const site = {
  name: 'Kenneth Espiritu',
  role: 'Automation & Systems Engineer',
  location: 'Manila, Philippines',
  email: 'kennethespiritu8921@gmail.com',
  github: 'https://github.com/kcespiritu',
  githubLabel: 'github.com/kcespiritu',
  linkedin: 'https://linkedin.com/in/kcsp2',
  linkedinLabel: 'linkedin.com/in/kcsp2',
  url: 'https://sp-website-orcin.vercel.app',
  claim: 'I build systems where hardware, backend, and AI have to actually work together.',
  intro:
    'Automation engineer and full-stack developer. Chemical engineering background, self-taught in software. I take things from a first sketch to deployed and running.',
  availability: 'Available for a scoped project, or a remote role'
};

export const focus = [
  { label: 'Focus', value: 'Automation · Full-stack · Embedded' },
  { label: 'Platforms', value: 'n8n, Xano, Next.js, Node, Python' },
  { label: 'Infrastructure', value: 'Linux, Docker, self-hosted, Raspberry Pi' }
];

export type Spec = { label: string; value: string };

export type Project = {
  name: string;
  kind: string;
  summary: string;
  detail: string;
  specs: Spec[];
  stack: string[];
  link?: { label: string; href: string };
};

// Order matters: the lead project is the one a reader matches against what they
// are hiring for. Automation first, because that is the work being sold.
export const flagship: Project[] = [
  {
    name: 'BrightData Social Scraper',
    kind: 'n8n workflow',
    summary: 'A multi-model pipeline that runs itself: scrape, research, write, deliver.',
    detail:
      "Scrapes trending stories through BrightData, enriches each one with Perplexity research, generates content angles with an LLM and emails an HTML digest. Credentials are externalized to n8n's credential manager so the workflow ships without secrets.",
    specs: [
      { label: 'Source', value: 'BrightData custom collector' },
      { label: 'Enrichment', value: 'Perplexity research pass' },
      { label: 'Generation', value: 'LLM content angles' },
      { label: 'Delivery', value: 'HTML digest, optional email' }
    ],
    stack: ['n8n', 'BrightData', 'Perplexity', 'LLM APIs'],
    link: { label: 'Repository', href: 'https://github.com/kcespiritu/brightdatascraper' }
  },
  {
    name: 'EcoConnect',
    kind: 'Reverse-vending kiosk',
    summary: 'A bottle-recycling kiosk that runs its own Wi-Fi network.',
    detail:
      'Users join the kiosk hotspot, land on a captive portal, deposit bottles and earn rewards. I wrote the backend that runs detection, sessions and reward logic, the integration layer that reads the IR sensor and drives the servo, and the interface the kiosk display talks to.',
    specs: [
      { label: 'Context', value: 'Hired technical support for a university thesis team' },
      { label: 'Scope', value: 'Backend, hardware integration, frontend-backend interface' },
      { label: 'Hardware', value: 'Servo barrier gate on a Wemos D1 R2 (ESP8266), driven over serial' },
      { label: 'Device', value: 'Raspberry Pi: Node service, SQLite, IR input on GPIO17' },
      { label: 'Operations', value: 'systemd units, mock-hardware test mode' }
    ],
    stack: ['ESP8266', 'Raspberry Pi', 'Node.js', 'SQLite', 'Networking', 'systemd'],
    link: { label: 'Repository', href: 'https://github.com/kcespiritu/eco-connect-master' }
  },
  {
    name: 'LeadExtract',
    kind: 'Chrome extension',
    summary: 'Lead capture that runs entirely on-device.',
    detail:
      "Pulls name, role, company and email out of any page using Chrome's built-in Gemini Nano model. Nothing leaves the machine: no API calls, no telemetry, leads stored locally. Built against the experimental Prompt API while it was still flag-gated in Canary.",
    specs: [
      { label: 'Model', value: 'Chrome built-in AI (Gemini Nano)' },
      { label: 'Interface', value: 'Content script, popup, CSV export' },
      { label: 'Privacy', value: 'On-device inference, local storage only' }
    ],
    stack: ['JavaScript', 'Chrome Extensions', 'On-device AI'],
    link: { label: 'Repository', href: 'https://github.com/kcespiritu/LeadExtract' }
  }
];

export type EarlierProject = {
  title: string;
  org: string;
  description: string;
  tags: string[];
  link?: string;
};

export const earlier: EarlierProject[] = [
  {
    title: 'AI Automation Consultant & Trainer',
    org: 'Intrinsic Behavioral',
    description:
      'Ran workshops and consulting sessions for teams adopting AI agents and automation. Covered integration strategy, workflow design and day-to-day use of the tools.',
    tags: ['AI', 'Automation', 'Copilot Studio', 'PowerApps', 'Training']
  },
  {
    title: 'Project Manager & QA Coordinator',
    org: 'Able AI',
    description:
      'Ran task pipelines, QA and coordination for a web app build, keeping delivery and stakeholder expectations aligned.',
    tags: ['Project Management', 'QA', 'Scrum', 'Agile'],
    link: 'https://able-ai-mvp-able-ai-team.vercel.app/'
  },
  {
    title: 'IT Support & Systems Technician',
    org: 'ORION Studios',
    description:
      'Assembled and maintained custom systems, handled troubleshooting and performance work, and provided end-to-end technical support.',
    tags: ['Hardware', 'Systems', 'Diagnostics']
  },
  {
    title: 'Home Server Infrastructure',
    org: 'Personal',
    description:
      'Self-hosted servers for web, media and automation. Containerized services, network configuration and monitoring, running continuously.',
    tags: ['Linux', 'Docker', 'Networking', 'Self-hosting']
  }
];

// Buyable offers, not skill categories. "Automation engineer" is a category; a
// fixed-scope engagement is something a client can actually say yes to.
export const services = [
  {
    title: 'Automation build',
    body: 'A process that eats hours every week, mapped and rebuilt in n8n or Xano. Handed over running, with the failure paths handled.'
  },
  {
    title: 'AI integration',
    body: 'An LLM step added to something you already run: extract, classify, draft, summarise. Guardrails included, because real data is messy.'
  },
  {
    title: 'Systems and wiring',
    body: 'Two systems that do not talk to each other, an internal tool nobody wants to own, or infrastructure that keeps falling over.'
  }
];

export const howItWorks = [
  { step: 'Step 01', title: 'Short call', body: 'What the process is, and what it costs you today.' },
  { step: 'Step 02', title: 'Scope and price', body: 'Fixed, in writing, before anything starts.' },
  { step: 'Step 03', title: 'Build and hand over', body: 'Running, documented, and yours to keep.' }
];

export const skillGroups = [
  {
    title: 'Languages & frameworks',
    items: ['TypeScript', 'JavaScript', 'Python', 'Node.js', 'React', 'Next.js', 'Tailwind CSS']
  },
  {
    title: 'Automation & AI',
    items: ['n8n', 'Xano', 'OpenAI API', 'Gemini API', 'LLM agents', 'RAG', 'Copilot Studio', 'PowerApps']
  },
  {
    title: 'Systems & data',
    items: ['Linux', 'Docker', 'Bash', 'Networking', 'PostgreSQL', 'Supabase', 'SQLite', 'REST APIs']
  },
  {
    title: 'Practice',
    items: ['Project management', 'QA', 'Documentation', 'Scrum', 'Technical training']
  }
];

export const about = [
  'I am a Chemical Engineering graduate from UP Diliman, and a licensed board passer. I moved into software after graduating, and that background is the reason I tend to care about the process a system has to survive rather than only the code inside it.',
  'I work across automation and full-stack: low-code platforms like n8n and Xano where they genuinely fit, and Next.js, Node or Python where they do not. Most of my work has been connecting systems that were never designed to talk to each other.',
  'I also run my own infrastructure: self-hosted servers, containers, networking. It is usually the reason I get asked to fix things that are supposed to already work.'
];
