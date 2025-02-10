<script lang="ts">
  import { fade } from 'svelte/transition';
</script>

<div 
  in:fade={{ duration: 300, delay: 150 }}
  class="mx-auto max-w-2xl px-4 py-40 text-center"
  style="display: flex; justify-content: center; align-items: center; height: 100vh;"
>
  <div>
    <h1 class="text-4xl font-orbitron tracking-wider text-neutral-900 mb-4">
      404
    </h1>
    <p class="text-neutral-700 mb-8">
      The page you're looking for doesn't exist.
    </p>
  </div>
</div> 