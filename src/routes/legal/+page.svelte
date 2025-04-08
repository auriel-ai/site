<script lang="ts">
  import { fade } from 'svelte/transition';
  import { Button } from "$lib/components/ui/button";
</script>

<div 
  in:fade={{ duration: 300, delay: 150 }}
  class="container mx-auto max-w-2xl px-6 lg:px-4 py-28 lg:py-40 relative"
>
  <div class="absolute inset-0 bg-gradient-radial from-cyan-500/5 to-transparent opacity-30 blur-3xl pointer-events-none"></div>
  
  <h1 class="text-2xl lg:text-4xl font-orbitron tracking-wider text-cyan-400 text-center mb-14 lg:mb-20 relative">
    Legal
  </h1>

  <div class="relative">
    <a href="/legal/privacy" class="group block py-6 lg:py-8">
      <div class="flex items-center justify-between gap-4">
        <p class="text-base lg:text-lg font-light text-neutral-300 group-hover:text-cyan-400 group-hover:underline underline-offset-2 shrink-0 transition-colors">Privacy Policy</p>
        <div class="h-[1px] w-full bg-neutral-800"></div>
        <Button variant="ghost" size="icon" class="group-hover:bg-neutral-800/60 text-neutral-400 group-hover:text-cyan-400 shrink-0 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </Button>
      </div>
    </a>

    <a href="/legal/terms" class="group block py-6 lg:py-8">
      <div class="flex items-center justify-between gap-4">
        <p class="text-base lg:text-lg font-light text-neutral-300 group-hover:text-cyan-400 group-hover:underline underline-offset-2 shrink-0 transition-colors">Terms of Service</p>
        <div class="h-[1px] w-full bg-neutral-800"></div>
        <Button variant="ghost" size="icon" class="group-hover:bg-neutral-800/60 text-neutral-400 group-hover:text-cyan-400 shrink-0 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </Button>
      </div>
    </a>

    <a href="/legal/license" class="group block py-6 lg:py-8">
      <div class="flex items-center justify-between gap-4">
        <p class="text-base lg:text-lg font-light text-neutral-300 group-hover:text-cyan-400 group-hover:underline underline-offset-2 shrink-0 transition-colors">Open Source License</p>
        <div class="h-[1px] w-full bg-neutral-800"></div>
        <Button variant="ghost" size="icon" class="group-hover:bg-neutral-800/60 text-neutral-400 group-hover:text-cyan-400 shrink-0 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </Button>
      </div>
    </a>
  </div>
</div>

<style>
  .bg-gradient-radial {
    background-image: radial-gradient(var(--tw-gradient-stops));
  }
</style> 