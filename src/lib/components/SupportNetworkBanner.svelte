<script lang="ts">
  import { onMount } from 'svelte';
  
  let isVisible = false;
  
  onMount(() => {
    // Small delay to ensure DOM is ready, then make visible
    setTimeout(() => {
      isVisible = true;
    }, 100);
  });
</script>

<a
  href="https://network.auriel.tech" 
  target="_blank" 
  rel="noopener noreferrer"
  class="inline-flex items-center mx-auto mt-8 px-4 py-2 rounded-full border border-cyan-400/40 bg-gradient-to-r from-cyan-900/40 to-neutral-900/70 shadow-lg backdrop-blur-md text-white/90 font-medium text-base md:text-lg transition-all cursor-pointer hover:bg-cyan-900/60 hover:border-cyan-300 hover:scale-105 focus:outline-none focus:ring-1 focus:ring-cyan-400 {isVisible ? 'banner-visible' : 'banner-hidden'}"
  aria-live="polite"
>
  <svg class="w-5 h-5 text-cyan-300 mr-3 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 16v-4m0-4h.01" />
  </svg>
  <span class="text-center text-sm tracking-wide">
    Our developer support network is on the way! Sign up for updates.
  </span>
</a>

<style>
  .banner-hidden {
    opacity: 0;
    transform: translateY(10px);
    visibility: hidden;
  }
  
  .banner-visible {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
    transition: opacity 0.8s ease-out, transform 0.8s ease-out, visibility 0s;
  }
</style> 