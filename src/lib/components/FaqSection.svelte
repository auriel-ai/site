<script lang="ts">
  import { slide } from 'svelte/transition';
  // Custom FAQ data
  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We design and build custom AI agents and automated workflows tailored to unique business needs. Our agents automate tasks 24/7 using advanced machine learning and natural language understanding, helping you streamline operations, reduce costs, and unlock new growth.'
    },
    {
      question: 'What results can I expect?',
      answer: 'Businesses typically experience lower operational costs, higher productivity, greater efficiency, and actionable insights that help to drive real business growth.'
    },
    {
      question: 'Will my team need training?',
      answer: 'Our solutions are designed to be intuitive and easy to use, so your team can get started with minimal training. If you need ongoing support or maintenance for your agents after setup, we can help.'
    },
    {
      question: 'What industries do you typically work with?',
      answer: 'We work with organizations of all sizes—from startups to established businesses—across technology, healthcare, finance, retail, hospitality, and more.'
    }
  ];
  let openIndex: number | null = null;
  function toggle(index: number) {
    openIndex = openIndex === index ? null : index;
  }
</script>

<div class="w-full max-w-7xl mx-auto py-10 px-4">
  <div class="rounded-2xl overflow-hidden bg-white shadow flex flex-col md:flex-row items-stretch">
    <!-- Left: SVG background, fills column -->
    <div class="relative flex-1 min-h-[340px] md:min-h-[440px]">
      <img src="/gggrain.svg" alt="" class="absolute inset-0 w-full h-full object-cover" />
    </div>
    <!-- Right: Custom FAQ Accordion -->
    <div class="flex-1 px-6 py-10 md:p-20 flex flex-col justify-center">
      <h2 class="text-3xl md:text-5xl font-regular text-neutral-900 font-sans mb-10">Questions? Answered.</h2>
      <div class="space-y-2">
        {#each faqs as faq, i}
          <div
            class="border-b border-neutral-200 cursor-pointer select-none px-0 md:px-2"
            on:click={() => toggle(i)}
            tabindex="0"
            on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && toggle(i)}
            aria-expanded={openIndex === i}
            aria-controls={`faq-answer-${i}`}
          >
            <div class="flex items-center justify-between py-5">
              <span class="font-medium text-neutral-700 text-lg">{faq.question}</span>
              <span class="ml-4 flex items-center justify-center">
                <svg
                  class="w-5 h-5 text-neutral-900 transition-transform duration-200"
                  style="transform: rotate({openIndex === i ? 45 : 0}deg);"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </span>
            </div>
            {#if openIndex === i}
              <div
                class="text-neutral-500 text-md font-light pb-5 pl-0 md:pl-1 pr-4 md:pr-8"
                id={`faq-answer-${i}`}
                transition:slide
              >
                {faq.answer}
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </div>
</div> 