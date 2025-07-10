export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  capabilities: string[];
  logo?: {
    src?: string;
    width?: number;
    height?: number;
    darkMode?: string;
    component?: 'propscan' | 'sam' | 'support-network' | 'pulse';
    includesTitle?: boolean;
  };
  projectType: 'agent' | 'tool';
  categoryTags: string[];
  websiteUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'propscan-agent', 
    title: 'Propscan',
    description: 'The analytical AI assistant for property investors. Analyse any property deal in seconds.',
    fullDescription: 'Propscan enables property investors to transform Rightmove listings into comprehensive investment reports in seconds. It instantly analyzes property data, market trends, and risk factors to provides investors a complete investment picture in one place. This way, hours of manual research and data aggregation can be automated by AI in seconds',
    capabilities: [
      'AI property analysis', 
      'Real estate deal screening', 
      'Automated research',
      'Market data integrations'
    ],
    logo: {
      component: 'propscan',
      includesTitle: true,
    },
    categoryTags: ['Real Estate', 'Data', 'Analysis'],
    projectType: 'agent',
    websiteUrl: 'https://propscan.uk/',
    githubUrl: undefined
  },
  {
    id: 'sam-agent',
    title: 'SAM',
    description:
      'The future of enterprise learning. An AI-powered learning experience platform for modern teams.',
    fullDescription:
      "SAM is the future of enterprise learning and development. It's a personal AI tutor for enterprise-grade employee training and upskilling. SAM provides a modern learning experience for employers to onboard and train new hires, and help employees brush up on enterprise-level SOPs, compliance, and more.",
    capabilities: [
      'Personalized AI Tutoring',
      'Employee Onboarding',
      'Corporate Training',
      'Compliance & SOPs',
      'Upskilling & Reskilling'
    ],
    logo: {
      component: 'sam',
      includesTitle: true
    },
    categoryTags: ['Enterprise', 'L&D', 'EdTech', 'AI'],
    projectType: 'agent',
    websiteUrl: 'https://samfire.uk',
    githubUrl: undefined
  },
  {
    id: 'pulse',
    title: 'Pulse',
    description:
      'Pulse is an AI-powered observability platform for motorsport teams to monitor telemetry, predict failures, and optimize race strategy.',
    fullDescription:
      'Pulse provides motorsport teams with an AI-powered observability platform that monitors real-time telemetry, predicts potential failures, and optimizes race strategies. Beyond traditional telemetry monitoring, Pulse uses machine learning to predict failures with high accuracy, reducing unplanned pit stops, and leverages decision-tree models to suggest optimal race strategies, enhancing team performance and competitiveness.',
    capabilities: [
      'Predictive Failure Detection',
      'Real-Time Anomaly Alerts',
      'AI Race Strategy Optimization',
      'Telemetry Visualization',
      'Hands-Free Voice Queries'
    ],
    logo: {
      component: 'pulse',
      includesTitle: true
    },
    categoryTags: ['Motorsport', 'Telemetry', 'Observability'],
    projectType: 'agent',
    websiteUrl: undefined,
    githubUrl: undefined
  },
  {
    id: 'support-network',
    title: "Auriel's Support Network",
    description: 'A developer support network for building and monetizing AI agents with community resources.',
    fullDescription: "Auriel's Support Network is our developer support network that provides everything you need to build and monetize AI agents. From basic concepts to practical implementation, best practices, and working with the latest tools - all in one community platform.",
    capabilities: [
      'Community learning resources',
      'Best practices sharing',
      'Code examples and tutorials',
      'Networking with developers',
      'Monetization strategies'
    ],
    logo: {
      component: 'support-network',
      includesTitle: true
    },
    categoryTags: ['Community', 'Resources', 'Networking'],
    projectType: 'tool',
    websiteUrl: 'https://network.auriel.tech',
    githubUrl: undefined
  },
  {
    id: 'agentlens',
    title: 'Agent Lens',
    description: "See your agent's future before it fails. A lightweight, open-source Python package to record, replay, and analyze AI agent runs offline.",
    fullDescription: 'Agent Lens is a lightweight, open-source Python package designed to record, replay, and analyze AI agent runs offline. Debug faster and save API credits with comprehensive observability tools for your LLM applications and AI agents.',
    capabilities: [
      'Offline Replay',
      'Failure Analysis', 
      'Cost Tracking',
      'Agent Debugging',
      'Performance Monitoring'
    ],
    categoryTags: ['DevTools', 'Observability', 'Open Source'],
    projectType: 'tool',
    websiteUrl: undefined,
    githubUrl: 'https://github.com/auriel-ai/agentlens'
  }
]; 