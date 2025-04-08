import type { ComponentType } from 'svelte';
import type { Icon } from 'lucide-svelte';

export interface Visualization {
  id: string;
  icon: ComponentType<Icon>;
  title: string;
  description: string;
  position: 'left' | 'right';
} 