<script lang="ts">
  export let size = "text-xl";
</script>

<a href="/" class="flex items-center gap-2 group">
  <svg 
    viewBox="0 0 24 24" 
    class="w-8 h-8 fill-none stroke-neutral-100 stroke-[2.5] group-hover:stroke-cyan-400 transition-colors"
  >
    <!-- Bow - two straight angled lines -->
    <path d="M 5,18 L 12,4 L 19,18" stroke-linecap="square" />
    
    <!-- Arrow shaft and head -->
    <path d="M 12,20 L 12,6 M 7,11 L 12,6 L 17,11" stroke-linecap="butt" stroke-linejoin="miter" />
  </svg>

  <span class="{size} font-orbitron font-bold tracking-wider text-neutral-100 group-hover:text-cyan-400 transition-colors">
    AURIEL
  </span>
</a> 