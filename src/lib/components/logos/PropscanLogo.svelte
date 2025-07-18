<script>
    // Simple props with sensible defaults
    export let showIcon = true;
    export let showText = true;
    export let className = '';
</script>

  <div class={`flex items-center gap-1 ${className}`}>
    {#if showText}
      <span class="font-medium text-black text-lg">
        propscan
      </span>
    {/if}
    
    {#if showIcon}
      <img src="/propscan-icon.svg" alt="PropScan Icon" 
        class="inline-block h-4 w-4" 
      />
    {/if}
  </div>