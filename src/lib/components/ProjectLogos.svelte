<script lang="ts">
  import PropscanLogo from './logos/PropscanLogo.svelte';
  import SamLogo from './logos/SamLogo.svelte';
  import PulseLogo from './logos/PulseLogo.svelte';
  import SyncLogo from './logos/SyncLogo.svelte';
  import { projects } from '$lib/stores/projects';

  // Get the URLs for each project
  const propscanUrl = projects.find(p => p.id === 'propscan-agent')?.websiteUrl;
  const samUrl = projects.find(p => p.id === 'sam-agent')?.websiteUrl;
  const pulseUrl = projects.find(p => p.id === 'pulse')?.websiteUrl;
  const syncUrl = projects.find(p => p.id === 'sync')?.websiteUrl;
</script>

<section class="w-full py-10">
  <div class="container max-w-7xl mx-auto px-4">
    <!-- Section Title -->
    <div class="text-center space-y-12 mb-20">
      <p class="font-orbitron text-base md:text-lg text-neutral-400 font-light tracking-wide">The Creators Of</p>
    </div>

    <!-- Logo Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
      <a href={propscanUrl} target="_blank" rel="noopener noreferrer" 
        class="transition-opacity hover:opacity-70 logo-filter">
        <PropscanLogo />
      </a>

      <a href={samUrl} target="_blank" rel="noopener noreferrer"
      class="transition-opacity hover:opacity-70 logo-filter">
      <SamLogo />
      </a>
      
      <a href={pulseUrl} target="_blank" rel="noopener noreferrer"
        class="transition-opacity hover:opacity-70 logo-filter">
        <PulseLogo />
      </a>
      
      <a href={syncUrl} target="_blank" rel="noopener noreferrer"
        class="transition-opacity hover:opacity-70 logo-filter">
        <SyncLogo />
      </a>
    </div>
  </div>
</section>

<style>
  :global(.logo-filter) {
    filter: brightness(0) saturate(100%) invert(20%) sepia(10%) saturate(100%) hue-rotate(0deg) brightness(95%) contrast(95%);
  }
  :global(.logo-filter img) {
    filter: brightness(0) saturate(100%) invert(20%) sepia(10%) saturate(100%) hue-rotate(0deg) brightness(95%) contrast(95%);
  }
  :global(.logo-filter span) {
    @apply text-neutral-800;
  }
</style> 