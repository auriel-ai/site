<script lang="ts">
  import HeroBackground2 from '$lib/components/HeroBackground2.svelte';
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import BentoGrid from '$lib/components/BentoGrid.svelte';
  import FaqSection from '$lib/components/FaqSection.svelte';
  import AgentTypesSection from '$lib/components/AgentTypesSection.svelte';
  import CTA from '$lib/components/CTA.svelte';
  import BrandFooter from '$lib/components/BrandFooter.svelte';
  
  let mounted = false;
  
  onMount(() => {
    mounted = true;
  });
</script>

<!-- PAGE BACKGROUND -->
<div class="bg-neutral-50 min-h-screen overflow-x-hidden">
  
  <!-- HERO SECTION -->
  <section id="hero" class="min-h-[70vh] flex justify-center relative">
    <div class="container mx-auto max-w-7xl flex flex-col items-center justify-center min-h-[70vh]">
      
      <!-- Image and Content Wrapper -->
      {#if mounted}
        <div 
          in:fade={{ duration: 1000, delay: 0 }}
          class="w-full max-w-7xl flex flex-col items-center justify-center gap-8 bg-white rounded-3xl shadow-md border border-[#ececec] relative overflow-hidden min-h-[500px]"
        >
          <HeroBackground2 />
          <!-- Content on top of SVG -->
          <div class="max-w-3xl relative z-10 flex flex-col items-center justify-center gap-8 py-28 w-full">
            <h1 
              in:fly={{ y: 30, duration: 800, delay: 200 }}
              class="text-3xl leading-normal md:text-6xl md:leading-tight tracking-wide text-white text-center"
            >
              Custom AI Agents That Work 24/7/365
            </h1>
            <h2 
              in:fly={{ y: 30, duration: 800, delay: 400 }}
              class="text-lg md:text-2xl font-light tracking-wide text-white text-center max-w-3xl"
            >
              Auriel builds AI agents, workflows, and observability tools to help businesses cut costs, boost revenue, and streamline operations.
            </h2>
            <a 
              in:fly={{ y: 30, duration: 800, delay: 600 }}
              href="/get-started" 
              class="bg-white text-sm text-neutral-900 font-normal py-3 px-6 rounded-full border border-[#ececec] shadow-sm hover:bg-neutral-100 hover:border-neutral-300 transition-all duration-200 flex items-center"
            >
              Get Started
            </a>
          </div>
        </div>
      {/if}
    </div>
  </section>

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
  :global(body) {
    @apply bg-[#f7f9f8];
  }
  :global(.container) {
    @apply mx-auto;
  }
</style>