<script lang="ts">
  import TowerVisualization from '$lib/components/TowerVisualization.svelte';

  // Props
  export let isPageLoaded = false;
  export let activeSection = '';
  export let shouldAnimate = false;
</script>

<section id="architecture" class="py-16 md:py-20 lg:py-24 xl:py-28 relative overflow-hidden">
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute right-0 top-1/3 w-[400px] h-[400px] bg-gradient-radial from-cyan-950/10 to-transparent opacity-30 blur-3xl"></div>
  </div>

  <div class="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
    <h2 
      class={`text-xl md:text-2xl lg:text-3xl font-orbitron text-center mb-10 md:mb-12 lg:mb-16 text-cyan-400 ${isPageLoaded && shouldAnimate ? 'animate-fade-in' : ''}`}
    >
      Modular Architecture
    </h2>
    <div 
      class={`max-w-xl md:max-w-4xl lg:max-w-6xl mx-auto ${isPageLoaded && shouldAnimate ? 'animate-fade-in' : ''}`}
    >
      <TowerVisualization />
    </div>
  </div>
</section> 