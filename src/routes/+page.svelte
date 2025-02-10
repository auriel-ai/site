<script lang="ts">
  import { fade } from 'svelte/transition';
  import NetworkVisualization from '$lib/components/NetworkVisualization.svelte';

  const FADE_DURATION = 300;
  const FADE_DELAY = 150;

  const navigationLinks = [
    {
      href: '/clairvoyance',
      text: 'SEE HOW >>',
      variant: 'light'
    },
    {
      href: '/enquire',
      text: 'WORK WITH US >>',
      variant: 'dark'
    }
  ] as const;

  const getButtonClass = (variant: 'light' | 'dark') => {
    const baseClass = 'px-8 py-2 rounded transition-colors font-orbitron text-sm lg:text-base';
    const variantClass = variant === 'light'
      ? 'bg-white border border-neutral-200 hover:bg-neutral-50 text-neutral-800 hover:text-neutral-900 shadow-sm'
      : 'bg-neutral-900 border border-neutral-900 hover:bg-neutral-800 text-white shadow-md';
    
    return `${baseClass} ${variantClass}`;
  };
</script>

<main class="container mx-auto px-4 py-32 lg:py-40">
  <div class="flex h-full w-full items-center justify-center -mt-20 lg:-mt-28">
    <div 
      in:fade={{ duration: FADE_DURATION, delay: FADE_DELAY }}
      class="flex flex-col items-center"
    >
      <NetworkVisualization />
      
      <h1 class="text-2xl lg:text-4xl text-neutral-800 font-orbitron tracking-wider text-center -mt-24 lg:-mt-32 max-w-[90%] lg:max-w-3xl">
        HELPING STARTUPS ANALYZE DATA TO BOOST METRICS
      </h1>
      
      <nav class="flex gap-4 mt-10">
        {#each navigationLinks as { href, text, variant }}
          <a {href} class={getButtonClass(variant)}>
            {text}
          </a>
        {/each}
      </nav>
    </div>
  </div>
</main>