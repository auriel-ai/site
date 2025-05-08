<script lang="ts">
  import { onMount } from 'svelte';
  import { Button } from "$lib/components/ui/button";
  import SupportNetworkBanner from '$lib/components/SupportNetworkBanner.svelte';
  
  let isPageLoaded = false;
  
  onMount(() => {
    isPageLoaded = true;
  });
</script>

<div class="bg-neutral-950 text-neutral-200 min-h-screen overflow-x-hidden">  
  <!-- Hero Section -->
  <section id="hero" class="min-h-screen flex items-center justify-center relative overflow-hidden">
    <div class="container mx-auto max-w-6xl px-6 py-20 relative z-10">
      <!-- Support Network Banner -->
      <div class="w-full flex justify-center mb-12">
        <SupportNetworkBanner />
      </div>

      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-orbitron text-white leading-tight mb-6 animate-slide-up-1">
          Open source
          <span class="text-cyan-400">observability tooling</span> and 
          <span class="text-cyan-400">AI agent</span> development
        </h1>
        
        <p class="text-xl font-light text-neutral-300 mb-10 max-w-3xl mx-auto animate-slide-up-2">
          We build open-source tools to monitor and optimize LLM applications, and develop modular AI Agents for specialized business needs.
        </p>
        
        <div class="flex flex-wrap gap-6 justify-center animate-slide-up-3">
          <a 
            href="/get-started" 
            class="bg-transparent border border-cyan-500 hover:bg-cyan-500/10 text-cyan-400 px-8 py-2 rounded transition-all shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] font-orbitron text-sm lg:text-base"
          >
            GET STARTED &gt;&gt;
          </a>
        </div>
      </div>
    </div>
    
    <!-- Decorative Background Elements -->
    <div class="absolute inset-0 z-0 opacity-20">
      <div class="absolute top-1/4 right-1/3 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl"></div>
      <div class="absolute bottom-1/3 left-1/4 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl"></div>
    </div>
  </section>

</div>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
  
  :global(body) {
    @apply bg-neutral-950;
  }
  
  :global(.container) {
    @apply mx-auto;
  }
  
  :global(.animate-slide-up-1) {
    animation: slideUp 0.8s ease-out forwards;
    animation-delay: 0.1s;
    opacity: 0;
  }
  
  :global(.animate-slide-up-2) {
    animation: slideUp 0.8s ease-out forwards;
    animation-delay: 0.2s;
    opacity: 0;
  }
  
  :global(.animate-slide-up-3) {
    animation: slideUp 0.8s ease-out forwards;
    animation-delay: 0.3s;
    opacity: 0;
  }
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Custom scrollbar styling */
  :global(::-webkit-scrollbar) {
    width: 8px;
  }
  
  :global(::-webkit-scrollbar-track) {
    background: #0a0a0a;
  }
  
  :global(::-webkit-scrollbar-thumb) {
    background: #333;
    border-radius: 4px;
  }
  
  :global(::-webkit-scrollbar-thumb:hover) {
    background: #555;
  }
</style>