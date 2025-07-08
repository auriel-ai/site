<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { X } from 'lucide-svelte';
  import { onMount, tick, onDestroy } from 'svelte';
  import { portal } from '$lib/actions/portal';

  export let isOpen = false;
  export let onClose: () => void;
  export let formId = 'sb7xbw2f'; // Default to contact form

  // Determine if this is the project request form
  $: isProjectForm = formId === 'lyjf2sfh';

  $: {
    if (typeof document !== 'undefined') {
      if (isOpen) {
        document.body.classList.add('popup-open');
      } else {
        document.body.classList.remove('popup-open');
      }
    }
  }

  onMount(() => {
    // Load the YouForm script
    const script = document.createElement('script');
    script.src = 'https://app.youform.com/widgets/widget.js';
    script.async = true;
    document.head.appendChild(script);
  });

  onDestroy(() => {
    if (typeof document !== 'undefined') {
      document.body.classList.remove('popup-open');
    }
  });

  async function handleClose() {
    if (onClose) {
      onClose();
    }
  }

  function handleBackdropClick(e: MouseEvent) {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  }

  function handleEscape(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      handleClose();
    }
  }
</script>

<svelte:window on:keydown={handleEscape} />

{#if isOpen}
  <div
    use:portal
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
    on:click={handleBackdropClick}
    transition:fade={{ duration: 200 }}
    role="dialog"
    aria-modal="true"
  >
    <div
      class="relative w-full rounded-2xl bg-white {isProjectForm ? 'max-w-3xl' : 'max-w-lg'}"
      transition:fly={{ y: 20, duration: 200 }}
    >
      <button
        on:click={handleClose}
        class="absolute right-4 top-4 text-neutral-500 transition-colors hover:text-black"
      >
        <X size={20} />
      </button>

      <div class="h-[600px] w-full overflow-hidden rounded-2xl">
        <iframe
          src="https://app.youform.com/forms/{formId}"
          width="100%"
          height="100%"
          frameborder="0"
          title="Contact Form"
          class="h-full w-full"
        ></iframe>
      </div>
    </div>
  </div>
{/if}

<style>
  /* Prevent body scroll when modal is open */
  :global(body.popup-open) {
    overflow: hidden;
  }
</style> 