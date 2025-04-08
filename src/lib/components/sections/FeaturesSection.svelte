<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import { 
    FileJson, 
    ChartNetwork, 
    Grid2X2, 
    ChartNoAxesCombined, 
    Bot, 
    NotebookText
  } from 'lucide-svelte';

  // Props
  export let isPageLoaded = false;
  export let activeSection = '';
  export let shouldAnimate = false;

  // Features
  const features = [
    {
      icon: FileJson,
      title: 'Agent-Specific Ontologies',
      description: 'Define your AI agents behavior patterns, expected outcomes, and failure modes with customizable ontologies. Map the relationships between prompts, responses, and performance metrics to create a complete picture of your operations.'
    },
    {
      icon: ChartNetwork,
      title: 'Behavioral Visualization',
      description: 'See how your agents actually behave in production through intuitive knowledge graphs. Identify patterns, anomalies, and edge cases that might be invisible in logs alone, giving you unprecedented visibility into complex AI systems.'
    },
    {
      icon: Grid2X2,
      title: 'Comprehensive Data Collection',
      description: 'Capture every aspect of your agents operations with built-in collectors for prompts, completions, context, tokens, latency, and user interactions.'
    },
    {
      icon: ChartNoAxesCombined,
      title: 'Performance Metrics Dashboard',
      description: 'Track critical agent metrics like response quality, hallucination rates, token efficiency, and latency through customizable dashboards. Compare performance across versions to precisely measure the impact of your optimizations.'
    },
    {
      icon: Bot,
      title: 'Agent Interrogation',
      description: 'Ask natural language questions about your agents performance and behavior. Our AI-powered interface lets you explore your data without complex queries, making observability accessible to your entire team.'
    },
    {
      icon: NotebookText,
      title: 'Deep Analysis Notebooks',
      description: 'Use interactive notebooks for advanced analysis when you need to dive deeper. Perform complex queries, build custom visualizations, and create shareable reports that connect technical improvements to business outcomes.'
    }
  ];
</script>

<section id="features" class="py-16 md:py-20 lg:py-24 xl:py-28 relative">
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute left-0 bottom-0 w-full h-[300px] bg-gradient-to-t from-cyan-950/10 to-transparent opacity-20 blur-3xl"></div>
  </div>

  <div class="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
    <h2 
      class={`text-xl md:text-2xl lg:text-3xl font-orbitron tracking-wider text-cyan-400 text-center mb-10 md:mb-12 lg:mb-16 ${isPageLoaded && shouldAnimate ? 'animate-fade-in' : ''}`}
    >
      Features
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto">
      {#each features as feature, i}
        <Card.Root 
          class={`border-neutral-800 bg-neutral-900/50 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.1)] hover:-translate-y-1 ${
            isPageLoaded && shouldAnimate && i % 3 === 0 ? 'animate-slide-up-1' : 
            isPageLoaded && shouldAnimate && i % 3 === 1 ? 'animate-slide-up-2' : 
            isPageLoaded && shouldAnimate && i % 3 === 2 ? 'animate-slide-up-3' : ''
          }`}
        >
          <Card.Header class="space-y-0 p-4 md:p-5 lg:p-6">
            <div class="flex items-center gap-3 md:gap-4">
              <div class="icon text-cyan-400 transition-colors duration-300 hover:text-cyan-300 flex-shrink-0">
                <svelte:component this={feature.icon} size={22} strokeWidth={1.5} />
              </div>
              <Card.Title class="text-base lg:text-lg font-normal text-neutral-200">{feature.title}</Card.Title>
            </div>
          </Card.Header>
          <Card.Content class="p-4 md:p-5 lg:p-6 pt-0">
            <Card.Description class="text-sm lg:text-base text-neutral-400 font-light leading-relaxed">
              {feature.description}
            </Card.Description>
          </Card.Content>
        </Card.Root>
      {/each}
    </div>
  </div>
</section> 