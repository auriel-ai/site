<script lang="ts">
  export let data;
</script>

<!-- The content is rendered by the mdsvex layout -->
<svelte:component this={data.content} {...data} /> 