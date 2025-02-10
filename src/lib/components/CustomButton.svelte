<script lang="ts">
  export let onClick: () => void = () => {};
</script>

<button
  on:click={onClick}
  class="bg-transparent border border-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white px-8 py-2 rounded transition-colors"
>
  <slot />
</button> 