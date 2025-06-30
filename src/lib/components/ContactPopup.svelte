<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { X } from 'lucide-svelte';
  import { onMount } from 'svelte';

  export let isOpen = false;
  export let onClose: () => void;
  export let formId = 'sb7xbw2f'; // Default to contact form

  let iframeLoaded = false;

  // Determine if this is the project request form
  $: isProjectForm = formId === 'lyjf2sfh';

  onMount(() => {
    // Load the YouForm script
    const script = document.createElement('script');
    script.src = 'https://app.youform.com/widgets/widget.js';
    script.async = true;
    document.head.appendChild(script);
  });

  function handleBackdropClick(e: MouseEvent) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  function handleEscape(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      onClose();
    }
  }
</script>

<svelte:window on:keydown={handleEscape}/>

{#if isOpen}
  <div 
    class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    on:click={handleBackdropClick}
    transition:fade={{ duration: 200 }}
  >
    <div 
      class="bg-white rounded-2xl w-full relative {isProjectForm ? 'max-w-3xl' : 'max-w-lg'}"
      transition:fly={{ y: 20, duration: 200 }}
    >
      <button 
        on:click={onClose}
        class="absolute right-4 top-4 text-neutral-500 hover:text-black transition-colors z-50"
      >
        <X size={20} />
      </button>

      <div class="w-full h-[600px] overflow-hidden rounded-2xl">
        <iframe
          src="https://app.youform.com/forms/{formId}"
          width="100%"
          height="100%"
          frameborder="0"
          title="Contact Form"
          class="w-full h-full"
        ></iframe>
      </div>
    </div>
  </div>
{/if}

<style>
  /* Prevent body scroll when modal is open */
  :global(body:has(.fixed)) {
    overflow: hidden;
  }
</style> 