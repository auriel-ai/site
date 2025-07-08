<!-- src/lib/components/Logo.svelte -->
<script lang="ts">
  // Props could be added later for size, color, etc.
</script>

<div class="flex items-center gap-3">
  <!-- Favicon as logo icon -->
  <img 
    src="/favicon.svg" 
    alt="SAM Logo icon" 
    class="w-6 h-6" 
  />

  <div class="flex items-center gap-1.5">
    <span class="text-xl font-bold font-display text-white bg-red-600 px-1.5 py-0.5 rounded">
      S
    </span>
    <span class="text-xl font-bold font-display text-white bg-red-600 px-1.5 py-0.5 rounded">
      A
    </span>
    <span class="text-xl font-bold font-display text-white bg-red-600 px-1.5 py-0.5 rounded">
      M
    </span>
  </div>
</div> 