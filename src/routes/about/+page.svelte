<script lang="ts">
  import { fade } from 'svelte/transition';
  import { Button } from "$lib/components/ui/button";
</script>

<div 
  in:fade={{ duration: 300, delay: 150 }}
  class="container mx-auto max-w-2xl px-6 lg:px-0 py-32 lg:py-40"
>
  <h2 class="text-lg lg:text-xl font-orbitron tracking-wider text-neutral-900 text-center mb-4 lg:mb-10">
    OUR MISSION
  </h2>

  <h1 class="text-3xl lg:text-5xl font-orbitron tracking-wider text-neutral-900 text-center mb-10 lg:mb-14">
    Help Startups Boost Metrics With Data
  </h1>
  
  <div class="space-y-6 text-neutral-700 leading-relaxed px-4 lg:px-0">
    <p>
      Auriel Analytics helps startups make smarter decisions by transforming complex data into actionable intelligence that can be used to boost their metrics and KPIs.
    </p>

    <p>
      At the heart of our approach is <a href="/clairvoyance" class="text-blue-500 hover:text-blue-600 font-medium">Clairvoyance</a>, our open-source BI tool that transforms raw data into actionable insights through custom ontologies, semantic knowledge graphs, and tailored dashboards, helping startups break down data silos and make more informed data-driven decisions.
    </p>

    <p>
      We believe that data insights should be accessible to every startup, which is why we've made Clairvoyance open-source and entirely free to get started with. But for startups seeking a more tailored solution, we build bespoke Clairvoyance instances. Our team works closely with you to define core KPIs, create custom ontologies, and design analytics dashboards that align perfectly with your business goals - helping you make sense of your customer data and product analytics.
    </p>

    <div class="flex justify-center">
      <Button 
        variant="default"
        size="lg"
        href="/enquire"
        class="mt-14 bg-neutral-900 hover:bg-neutral-800 font-orbitron tracking-wider"
      >
        WORK WITH US >>
      </Button>
    </div>
  </div>
</div> 