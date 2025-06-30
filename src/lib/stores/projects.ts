export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  capabilities: string[];
  icon: string;
  categoryTags: string[];
  projectType: 'agent' | 'tool';
  websiteUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'propscan-agent', 
    title: 'Propscan',
    description: 'An AI agent for property investors that aggregates data and analyzes profitability.',
    fullDescription: 'Analyze deals faster with AI-powered analysis, without spending hours on manual research. Propscan offers intelligent property analysis at scale.',
    capabilities: [
      'AI property analysis', 
      'Real estate deal screening', 
      'Automated research',
      'Market data integrations'
    ],
    icon: 'https://propscan.uk/propscan-icon.svg',
    categoryTags: ['Real Estate', 'Data', 'Analysis'],
    projectType: 'agent',
    websiteUrl: 'https://propscan.uk/',
    githubUrl: undefined
  },
  {
    id: 'sam-agent',
    title: 'SAM',
    description: 'An AI assistant for UK firefighters in training to help them ace their operational training phase.',
    fullDescription: 'SAM helps British Fire and Rescue Service trainees master skills, prepare for assessments, and build confidence throughout their operational training course. It provides specialized guidance on equipment, protocols, and study materials for any British Fire and Rescue Service.',
    capabilities: [
      'Training protocol guidance',
      'Equipment information',
      'Study material assistance',
      'Assessment preparation',
      'Operational training support'
    ],
    icon: 'https://samfire.uk/favicon.svg',
    categoryTags: ['Emergency Services', 'Training', 'Education'],
    projectType: 'agent',
    websiteUrl: 'https://samfire.uk',
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
    icon: 'logo',
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
    icon: '🔍',
    categoryTags: ['DevTools', 'Observability', 'Open Source'],
    projectType: 'tool',
    websiteUrl: undefined,
    githubUrl: 'https://github.com/auriel-ai/agentlens'
  }
]; 