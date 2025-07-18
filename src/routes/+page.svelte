<script lang="ts">
  import HeroBackground2 from '$lib/components/HeroBackground2.svelte';
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import BentoGrid from '$lib/components/BentoGrid.svelte';
  import FaqSection from '$lib/components/FaqSection.svelte';
  import AgentTypesSection from '$lib/components/AgentTypesSection.svelte';
  import CTA from '$lib/components/CTA.svelte';
  import BrandFooter from '$lib/components/BrandFooter.svelte';
  import ProjectLogos from '$lib/components/ProjectLogos.svelte';
  
  let mounted = false;
  
  onMount(() => {
    mounted = true;
  });
</script>

<!-- PAGE BACKGROUND -->
<div class="bg-neutral-50 min-h-screen overflow-x-hidden">
  
  <!-- HERO SECTION -->
  <section id="hero" class="flex justify-center relative py-5">
    <div class="container mx-auto max-w-7xl flex flex-col items-center justify-center px-4">
      
      <!-- Image and Content Wrapper -->
      {#if mounted}
        <div 
          in:fade={{ duration: 1000, delay: 0 }}
          class="w-full max-w-7xl flex flex-col items-center justify-center gap-8 bg-white rounded-3xl shadow-md border border-[#ececec] relative overflow-hidden min-h-[575px]"
        >
          <HeroBackground2 />
          <!-- Content on top of SVG -->
          <div class="max-w-3xl relative z-10 flex flex-col items-center justify-center gap-8 py-20 md:py-28 w-full px-4 md:px-0">
            <h1 
              in:fly={{ y: 30, duration: 800, delay: 200 }}
              class="text-4xl px-2 md:px-0 leading-normal md:text-6xl md:leading-tight tracking-wide text-white text-center font-orbitron font-regular"
            >
              Custom AI Agents That Work 24/7/365
            </h1>
            <h2 
              in:fly={{ y: 30, duration: 800, delay: 400 }}
              class="text-base md:text-xl tracking-normal text-white text-center max-w-3xl px-2 md:px-10 opacity-90"
            >
              Auriel builds AI agents, workflows, and observability tools to help businesses cut costs, boost revenue, and perform better.
            </h2>
            <a 
              in:fly={{ y: 30, duration: 800, delay: 600 }}
              href="/get-started" 
              class="bg-white text-sm text-neutral-900 font-medium py-3.5 px-7 rounded-lg border border-neutral-200 shadow-sm hover:bg-neutral-100 transition-all duration-200 flex items-center gap-2"
              >
              Explore Our Work
            </a>
          </div>
        </div>
      {/if}
    </div>
  </section>

  <ProjectLogos />
  <BentoGrid />
  <AgentTypesSection />
  <CTA />
  <FaqSection />
  <BrandFooter />

</div>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
  :global(.container) {
    @apply mx-auto;
  }

  /* Custom Scrollbar Styles */
  :global(*::-webkit-scrollbar) {
    width: 10px;
    height: 10px;
  }

  :global(*::-webkit-scrollbar-track) {
    background: #f5f5f5;
    border-radius: 5px;
  }

  :global(*::-webkit-scrollbar-thumb) {
    background: #d4d4d4;
    border-radius: 5px;
    border: 2px solid #f5f5f5;
  }

  :global(*::-webkit-scrollbar-thumb:hover) {
    background: #a3a3a3;
  }

  /* Firefox */
  :global(*) {
    scrollbar-width: thin;
    scrollbar-color: #d4d4d4 #f5f5f5;
  }
</style>