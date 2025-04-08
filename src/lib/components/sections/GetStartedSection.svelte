<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import { Github } from 'lucide-svelte';

  // Props
  export let isPageLoaded = false;
  export let activeSection = '';
  export let shouldAnimate = false;
</script>

<section id="get-started" class="py-16 md:py-20 lg:py-24 xl:py-28 relative">
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute left-0 top-1/4 w-[600px] h-[600px] bg-gradient-radial from-cyan-950/10 to-transparent opacity-30 blur-3xl"></div>
  </div>

  <div class="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
    <h2 
      class={`text-xl md:text-2xl lg:text-3xl font-orbitron text-center mb-10 md:mb-12 lg:mb-16 text-cyan-400 ${isPageLoaded && shouldAnimate ? 'animate-fade-in' : ''}`}
    >
      Get Started With Clairvoyance
    </h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8 max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto">
      <Card.Root 
        class={`border-neutral-800 hover:border-cyan-500/50 bg-neutral-900/50 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:-translate-y-1 group py-5 ${isPageLoaded && shouldAnimate ? 'animate-slide-up-1' : ''}`}
      >
        <Card.Header class="pt-5 pb-0 px-4 md:px-6">
          <div class="flex items-center justify-center w-full">
            <a 
              href="https://github.com/" 
              class="bg-neutral-800 border border-neutral-700 hover:bg-neutral-800/60 text-cyan-400 hover:text-cyan-300 hover:border-cyan-500/50 group-hover:scale-110 transition-all duration-300 py-2 px-4 md:px-5 rounded inline-flex items-center gap-2"
            >
              <Github class="w-5 h-5" />
              <span class="font-medium font-orbitron">Star on GitHub</span>
            </a>
          </div>
          <Card.Description class="text-neutral-400 text-sm leading-relaxed pt-5 text-center">
            Free and open-source observability engine with flexible deployment options.
          </Card.Description>
        </Card.Header>
      </Card.Root>

      <Card.Root 
        class={`border-neutral-800 hover:border-cyan-500/50 bg-neutral-900/50 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:-translate-y-1 group ${isPageLoaded && shouldAnimate ? 'animate-slide-up-2' : ''}`}
      >
        <Card.Header class="pt-8 md:pt-10 px-4 md:px-6">
          <code class="bg-neutral-800/60 px-3 py-3 rounded-lg font-mono text-xs block text-center text-cyan-400 overflow-x-auto whitespace-nowrap">
            curl -sSL install.auriel.tech | bash
          </code>
          <Card.Description class="text-neutral-400 text-sm leading-relaxed pt-5 text-center">
            Get started in seconds with our one-line installation script.
          </Card.Description>
        </Card.Header>
      </Card.Root>

      <Card.Root 
        class={`pb-8 md:pb-10 border-neutral-800 hover:border-cyan-500/50 bg-neutral-900/50 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:-translate-y-1 group ${isPageLoaded && shouldAnimate ? 'animate-slide-up-3' : ''}`}
      >
        <Card.Header class="pt-8 md:pt-10 px-4 md:px-6">
          <div class="flex flex-wrap gap-2 items-center justify-center">
            <span class="text-cyan-400 font-medium text-lg">Connect Everything</span> 
          </div>
          <Card.Description class="text-neutral-400 text-sm leading-relaxed pt-5 text-center">
            Built-in connectors for your databases, warehouses and APIs off the bat.
          </Card.Description>
        </Card.Header>
      </Card.Root>
    </div>
  </div>
</section> 