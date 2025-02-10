<script lang="ts">
  export let size = "w-8 h-8";
  export let class_ = "";
</script>

<a href="/" class="block">
  <svg 
    viewBox="0 0 24 24" 
    class="{size} fill-none stroke-neutral-900 stroke-[2.5] transition-colors {class_}"
  >
    <!-- Bow - two straight angled lines -->
    <path d="M 5,18 L 12,4 L 19,18" stroke-linecap="square" />
    
    <!-- Arrow shaft and head -->
    <path d="M 12,20 L 12,6 M 7,11 L 12,6 L 17,11" stroke-linecap="butt" stroke-linejoin="miter" />
  </svg>
</a> 