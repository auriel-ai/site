<script lang="ts">
  import { fade } from 'svelte/transition';
</script>

<div 
  in:fade={{ duration: 300, delay: 150 }}
  class="mx-auto max-w-2xl px-4 py-40 text-center"
  style="display: flex; justify-content: center; align-items: center; height: 100vh;"
>
  <div class="relative">
    <div class="absolute -inset-10 bg-gradient-radial from-cyan-500/10 to-transparent opacity-30 blur-3xl pointer-events-none"></div>
    <h1 class="text-4xl font-orbitron tracking-wider text-cyan-400 mb-4 relative">
      404
    </h1>
    <p class="text-neutral-300 mb-8 relative">
      The page you're looking for doesn't exist.
    </p>
    <a href="/" class="px-6 py-2 rounded text-sm font-orbitron bg-transparent border border-cyan-500 hover:bg-cyan-500/10 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all relative">
      GO HOME
    </a>
  </div>
</div>

<style>
  .bg-gradient-radial {
    background-image: radial-gradient(var(--tw-gradient-stops));
  }
</style> 