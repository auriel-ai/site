<script>
  import { ArrowRight } from 'lucide-svelte';
  import ContactPopup from './ContactPopup.svelte';

  let isPopupOpen = false;
</script>

<ContactPopup 
  isOpen={isPopupOpen}
  onClose={() => isPopupOpen = false}
  formId="lyjf2sfh"
/>

<section class="w-full bg-neutral-50 py-10">
  <div class="max-w-7xl mx-auto px-4">
    <div class="text-center space-y-12 mb-12 max-w-2xl mx-auto">
      <p class="font-orbitron text-base md:text-lg text-neutral-400 font-light tracking-wide">Ready To Scale?</p>
      <h2 class="text-3xl md:text-5xl font-regular text-neutral-900 font-sans leading-snug px-2 md:px-0">Transform Any Job Posting Into a 24/7 AI Agent</h2>
      <p class="text-base md:text-lg text-neutral-600 font-light">Stop hiring for repetitive tasks. Send us a job posting and we'll build a custom AI agent that works around the clock, never takes breaks, and scales instantly.</p>
    </div>
    <div class="flex justify-center gap-2 mb-10 flex-wrap">
      <button 
        on:click={() => isPopupOpen = true}
        class="bg-white text-sm text-neutral-900 font-normal py-2 px-5 rounded-lg border border-neutral-200 shadow-sm hover:bg-neutral-100 transition-all duration-200 flex items-center gap-2">
        Request A Custom Agent
        <ArrowRight class="w-4 h-4"/>
      </button>
    </div>
  </div>
</section>

<style>
  :global(.font-orbitron) {
    font-family: 'Orbitron', sans-serif;
  }
</style> 