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
    component?: 'propscan' | 'sam' | 'support-network' | 'pulse' | 'sync';
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
    description: 'An AI assistant for property investors that creates comprehensive investment reports in seconds.',
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
      'An AI-Powered Onboarding Assistant for Scaling Startups.',
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
    categoryTags: ['Enterprise', 'L&D', 'EdTech', 'Open Source'],
    projectType: 'agent',
    websiteUrl: 'https://getsam.co',
    githubUrl: undefined
  },
  {
    id: 'pulse',
    title: 'Pulse',
    description:
      'AI-powered telemetry for motorsport teams.',
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
    websiteUrl: 'https://getpulse.racing',
    githubUrl: undefined
  },
  {
    id: 'sync',
    title: 'Sync',
    description: 'Predictive player management platform to help football clubs manage player load and welfare.',
    fullDescription: 'Sync is an intelligent operating system designed to help football clubs manage player load and welfare by leveraging predictive analysis. It aggregates vast player data, medical reports, physio metrics, training loads and performance stats to preempt outcomes like injuries, optimize load management, and ensure player welfare, ultimately driving consistent, long-term performance output.',
    capabilities: [
      'Injury Risk Prevention',
      'Load Management Optimization',
      'Player Welfare Monitoring',
      'Performance Analytics'
    ],
    logo: {
      component: 'sync',
      includesTitle: true
    },
    categoryTags: ['Sports', 'Analytics', 'Health', 'Performance'],
    projectType: 'agent',
    websiteUrl: 'https://sync.football',
    githubUrl: undefined
  },
  {
    id: 'support-network',
    title: "Auriel's Support Network",
    description: 'A support network for developers building and monetizing AI agents and workflows.',
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
    description: "A lightweight, open-source Python package to record, replay, and analyze AI agent runs locally.",
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