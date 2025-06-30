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

<section class="w-full bg-neutral-50 my-20">
  <div class="max-w-7xl mx-auto">
    <div class="text-center space-y-12 mb-12 max-w-2xl mx-auto">
      <p class="text-lg text-neutral-400 font-light font-orbitron tracking-wide">READY TO SCALE</p>
      <h2 class="text-5xl font-light mb-2 text-neutral-900">Transform Any Job Posting Into a 24/7 AI Agent</h2>
      <p class="text-neutral-600 text-lg font-light">Stop hiring for repetitive tasks. Send us a job posting and we'll build a custom AI agent that works around the clock, never takes breaks, and scales instantly.</p>
    </div>
    <div class="flex justify-center gap-2 mb-40 flex-wrap">
      <button 
        on:click={() => isPopupOpen = true}
        class="bg-white border-neutral-300 text-neutral-900 px-6 py-3 rounded-full transition text-sm focus:outline-none flex items-center gap-2 hover:bg-neutral-50 hover:border-neutral-400">
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