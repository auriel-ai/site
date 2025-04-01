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

  <h1 class="text-3xl font-orbitron tracking-wider text-neutral-900 text-center mb-10 lg:mb-14">
    Help AI Agents Boost Performance
  </h1>
  
  <div class="space-y-6 text-neutral-700 leading-relaxed px-4 lg:px-0">
    <p>
      Auriel Analytics empowers AI development teams to observe their agents' behavior and optimize performance through comprehensive data analysis and visualization.
    </p>

    <p>
      At the heart of our approach is <a href="/clairvoyance" class="text-blue-500 hover:text-blue-600 font-medium">Clairvoyance</a>, our open-source observability platform that transforms raw agent data into actionable insights through custom ontologies, semantic knowledge graphs, and tailored dashboards, helping teams understand exactly how their AI agents operate and where to improve.
    </p>

    <p>
      We believe that AI observability should be accessible to every development team, which is why we've made Clairvoyance open-source and entirely free to get started with. For teams seeking a more tailored solution, we build bespoke Clairvoyance instances that bridge technical metrics to business outcomes. Our team works closely with you to define key performance indicators, create agent-specific ontologies, and design observability dashboards that reveal the true behavior of your AI systems - helping you move from raw logs to optimized agents with measurable impact.
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