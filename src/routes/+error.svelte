<script lang="ts">
  import { fade } from 'svelte/transition';
</script>

<div 
  in:fade={{ duration: 300, delay: 150 }}
  class="bg-[#f7f9f8] flex items-center justify-center min-h-[60vh] px-4"
>
  <div class="text-center">
    <h1 class="text-7xl font-bold text-neutral-900 mb-4">
      404
    </h1>
    <p class="text-lg text-neutral-600 mb-6">
      Page not found
    </p>
  </div>
</div>