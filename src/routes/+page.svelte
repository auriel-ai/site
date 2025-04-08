<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import HeroSection from '$lib/components/sections/HeroSection.svelte';
  import GetStartedSection from '$lib/components/sections/GetStartedSection.svelte';
  import FeaturesSection from '$lib/components/sections/FeaturesSection.svelte';
  import VisualizationSection from '$lib/components/sections/VisualizationSection.svelte';
  import ArchitectureSection from '$lib/components/sections/ArchitectureSection.svelte';
  import FAQSection from '$lib/components/sections/FAQSection.svelte';
  import { visualizations } from '$lib/data/visualizations';
  
  let isPageLoaded = false;
  let activeSection = 'hero';
  let animatedSections = new Set<string>(['hero']);
  
  // Initialize IntersectionObserver on mount
  onMount(() => {
    isPageLoaded = true;
    
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          activeSection = id;
          // Only add hero to animated sections - keep other sections static
          if (id === 'hero') {
            animatedSections.add(id);
            // Force svelte to update the set
            animatedSections = new Set(animatedSections);
          }
        }
      });
    }, options);
    
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  });

  // Always return false for non-hero sections
  $: hasAnimated = (sectionId: string) => sectionId === 'hero' && animatedSections.has(sectionId);
</script>

<svelte:head>
  <title>Auriel Analytics</title>
  <meta name="description" content="Auriel Analytics - AI Agent Observability" />
</svelte:head>

<div class="bg-neutral-950 text-neutral-200 min-h-screen overflow-x-hidden">
  <HeroSection {isPageLoaded} {activeSection} />
  
  <GetStartedSection 
    {isPageLoaded} 
    {activeSection} 
    shouldAnimate={false} 
  />

  {#each visualizations as vis, index}
  <VisualizationSection 
    {isPageLoaded} 
    {activeSection}
    visualization={vis}
    shouldAnimate={false}
  />
  
  <!-- Add spacing between visualization sections but not after the last one -->
  {#if index < visualizations.length - 1}
    <div class="h-5"></div>
  {/if}
{/each}
  
  <FeaturesSection 
    {isPageLoaded} 
    {activeSection} 
    shouldAnimate={false} 
  />
  
  <ArchitectureSection 
    {isPageLoaded} 
    {activeSection} 
    shouldAnimate={false} 
  />
  
  <FAQSection 
    {isPageLoaded} 
    {activeSection} 
    shouldAnimate={false} 
  />
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
  
  :global(.animate-fade-in) {
    animation: fadeIn 0.8s ease-out forwards;
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
  
  :global(.animate-slide-up-4) {
    animation: slideUp 0.8s ease-out forwards;
    animation-delay: 0.4s;
    opacity: 0;
  }
  
  :global(.animate-slide-up-5) {
    animation: slideUp 0.8s ease-out forwards;
    animation-delay: 0.5s;
    opacity: 0;
  }
  
  :global(.animate-slide-up-6) {
    animation: slideUp 0.8s ease-out forwards;
    animation-delay: 0.6s;
    opacity: 0;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
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
  
  /* Gradient backgrounds */
  :global(.bg-gradient-radial) {
    background-image: radial-gradient(var(--tw-gradient-stops));
  }
</style>