import type { ComponentType } from 'svelte';
import { Eye, Brain } from 'lucide-svelte';

export interface Visualization {
  id: string;
  icon: any;
  title: string;
  description: string;
  position: 'left' | 'right';
}

export const visualizations: Visualization[] = [
  {
    id: 'network-visualization',
    icon: Eye,
    title: 'Real-time Knowledge Graph Analysis',
    description: 'Explore agent relationships and knowledge structures through dynamic, interactive network visualization. Identify patterns and connections that drive performance.',
    position: 'right', // Visualization on the right
  },
  {
    id: 'neural-visualization',
    icon: Brain,
    title: 'Neural Activity Visualization',
    description: 'Watch activation patterns unfold in real-time as your AI agents process information. Identify high-activity regions and optimize neural pathways for improved performance.',
    position: 'left', // Visualization on the left
  }
]; 