<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  // Props
  export let isPageLoaded = false;
  export let activeSection = 'hero';

  // Animation constants
  export let FADE_DURATION = 300;
  export let FADE_DELAY = 150;

  // Animation Control
  let hasAnimated = false;
  
  onMount(() => {
    // Set hasAnimated to true after a short delay
    setTimeout(() => {
      hasAnimated = true;
    }, 1500);
  });

  // Navigation
  const navigationLinks = [
    {
      href: '/start',
      text: 'SELF HOST >>',
      variant: 'light'
    },
    {
      href: '/enquire',
      text: 'WORK WITH US >>',
      variant: 'accent'
    }
  ] as const;

  const getButtonClass = (variant: 'light' | 'accent') => {
    const baseClass = 'px-8 py-3 rounded transition-all font-orbitron text-sm lg:text-base flex items-center gap-2';
    const variantClass = variant === 'light'
      ? 'bg-neutral-800/40 backdrop-blur-sm border border-neutral-700 hover:bg-neutral-800/60 text-neutral-300 hover:text-neutral-100 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]'
      : 'bg-transparent border border-cyan-500 hover:bg-cyan-500/10 text-cyan-400 hover:text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]';
    
    return `${baseClass} ${variantClass}`;
  };

  // Scroll to section function
  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<section id="hero" class="py-16 md:py-20 lg:py-28 xl:py-32 2xl:py-40 relative min-h-[90vh] md:min-h-[90vh] flex items-center">
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-cyan-950/20 to-transparent opacity-40"></div>
    <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[200%] h-[400px] bg-gradient-radial from-cyan-500/10 to-transparent opacity-30 blur-3xl"></div>
    <div class="absolute top-1/3 left-0 w-16 h-[800px] bg-gradient-to-r from-cyan-500/5 to-transparent rotate-[20deg] blur-3xl"></div>
    <div class="absolute top-1/4 right-0 w-16 h-[800px] bg-gradient-to-l from-cyan-500/5 to-transparent rotate-[-20deg] blur-3xl"></div>
  </div>

  <div class="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
    <div class="flex items-center justify-center">
      <div class="flex flex-col items-center relative w-full">
        <!-- Main heading -->
        {#if !hasAnimated && isPageLoaded}
          <h1 
            class="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-neutral-100 font-orbitron tracking-wider text-center max-w-[95%] md:max-w-[90%] lg:max-w-3xl xl:max-w-4xl"
            in:fly={{ y: 20, duration: 800, delay: FADE_DELAY + 200 }}
          >
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">OBSERVE</span> AND <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">OPTIMIZE</span> YOUR AI AGENTS TO BOOST PERFORMANCE
          </h1>
          
          <!-- Subheading -->
          <h2 
            class="text-base md:text-lg lg:text-xl text-neutral-300 text-center mt-4 md:mt-6 mb-6 md:mb-8 lg:mb-10 max-w-xl md:max-w-2xl mx-auto relative leading-relaxed"
            in:fly={{ y: 20, duration: 800, delay: FADE_DELAY + 400 }}
          >
            Clairvoyance Is Our Open-Source AI Agent Observability Tool
          </h2>
          
          <!-- Navigation buttons -->
          <div 
            class="flex flex-wrap justify-center gap-3 md:gap-4 mt-4 md:mt-6 lg:mt-8"
            in:fly={{ y: 20, duration: 800, delay: FADE_DELAY + 600 }}
          >
            {#each navigationLinks as { href, text, variant }, i}
              <a {href} class={getButtonClass(variant)}>
                {text}
              </a>
            {/each}
          </div>
        {:else}
          <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-neutral-100 font-orbitron tracking-wider text-center max-w-[95%] md:max-w-[90%] lg:max-w-3xl xl:max-w-4xl">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">OBSERVE</span> AND <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">OPTIMIZE</span> YOUR AI AGENTS TO BOOST PERFORMANCE
          </h1>
          
          <h2 class="text-base md:text-lg lg:text-xl text-neutral-300 text-center mt-4 md:mt-6 mb-6 md:mb-8 lg:mb-10 max-w-xl md:max-w-2xl mx-auto relative leading-relaxed">
            Clairvoyance Is Our Open-Source AI Agent Observability Tool
          </h2>
          
          <div class="flex flex-wrap justify-center gap-3 md:gap-4 mt-4 md:mt-6 lg:mt-8">
            {#each navigationLinks as { href, text, variant }, i}
              <a {href} class={getButtonClass(variant)}>
                {text}
              </a>
            {/each}
          </div>
        {/if}
        
        <!-- Scroll indicator -->
        {#if !hasAnimated && isPageLoaded}
          <div 
            class="absolute bottom-0 left-0 right-0 flex justify-center items-center pointer-events-none hidden lg:flex"
            style="bottom: -120px;"
            in:fade={{ duration: 1200, delay: 1200 }}
          >
            <button 
              on:click={() => scrollToSection('get-started')}
              class="animate-bounce rounded-full p-2 bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm text-neutral-400 hover:text-cyan-400 transition-colors pointer-events-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </button>
          </div>
        {:else}
          <div 
            class="absolute bottom-0 left-0 right-0 flex justify-center items-center pointer-events-none hidden lg:flex"
            style="bottom: -120px;"
          >
            <button 
              on:click={() => scrollToSection('get-started')}
              class="animate-bounce rounded-full p-2 bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm text-neutral-400 hover:text-cyan-400 transition-colors pointer-events-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </button>
          </div>
        {/if}
      </div>
    </div>
  </div>
</section> 