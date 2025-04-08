<script lang="ts">
  import NetworkVisualization from '$lib/components/NetworkVisualization.svelte';
  import ClairvoyanceVisualization from '$lib/components/ClairvoyanceVisualization.svelte';
  import { Eye, Brain } from 'lucide-svelte';
  import type { Visualization } from '$lib/types';

  // Props
  export let isPageLoaded = false;
  export let activeSection = '';
  export let visualization: Visualization;
  export let shouldAnimate = false;

  // Map visualization IDs to components
  const visualizationComponents = {
    'network-visualization': NetworkVisualization,
    'neural-visualization': ClairvoyanceVisualization
  };

  // Visualization Descriptions
  const visualizations = [
    {
      id: 'network-visualization',
      icon: Eye,
      title: 'Real-time Knowledge Graph Analysis',
      description: 'Explore agent relationships and knowledge structures through dynamic, interactive network visualization. Identify patterns and connections that drive performance.',
      component: NetworkVisualization,
      position: 'right', // Visualization on the right
    },
    {
      id: 'neural-visualization',
      icon: Brain,
      title: 'Neural Activity Visualization',
      description: 'Watch activation patterns unfold in real-time as your AI agents process information. Identify high-activity regions and optimize neural pathways for improved performance.',
      component: ClairvoyanceVisualization,
      position: 'left', // Visualization on the left
    }
  ];
</script>

<section id={visualization.id} class="py-16 md:py-20 lg:py-24 xl:py-28 relative">
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute {visualization.position === 'right' ? 'left-0' : 'right-0'} top-1/3 w-[400px] h-[400px] bg-gradient-radial from-cyan-950/10 to-transparent opacity-30 blur-3xl"></div>
  </div>

  <div class="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
    <div class="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-12 items-center max-w-6xl mx-auto">
      <!-- Text Content - Order changes based on position -->
      <div class="lg:w-1/2 order-2 lg:order-{visualization.position === 'right' ? '1' : '2'}">
        <div class={`${isPageLoaded && shouldAnimate ? 'animate-fade-in' : ''}`}>
          <div class="flex items-center gap-3 mb-3">
            <div class="icon text-cyan-400 flex-shrink-0">
              <svelte:component this={visualization.icon} size={24} strokeWidth={1.5} />
            </div>
            <h3 class="text-xl lg:text-2xl font-orbitron text-neutral-100">{visualization.title}</h3>
          </div>
          
          <p class="text-neutral-400 leading-relaxed">
            {visualization.description}
          </p>
        </div>
      </div>
      
      <!-- Visualization - Order changes based on position -->
      <div class="lg:w-1/2 order-1 lg:order-{visualization.position === 'right' ? '2' : '1'}">
        <div 
          class={`w-full h-[350px] sm:h-[400px] md:h-[450px] border border-neutral-800 rounded-lg overflow-hidden bg-neutral-900/30 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.1)] flex items-center justify-center ${isPageLoaded && shouldAnimate ? 'animate-fade-in' : ''}`}
        >
          <div class="w-full h-full flex items-center justify-center">
            {#if visualization.id === 'network-visualization'}
              <NetworkVisualization />
            {:else if visualization.id === 'neural-visualization'}
              <ClairvoyanceVisualization />
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{#each visualizations as vis}
  <!-- Section Divider - Only add between sections, not after the last one -->
  {#if vis.id !== visualizations[visualizations.length - 1].id}
    <div class="h-5"></div>
  {/if}
{/each} 