<script lang="ts">
  import { fade } from 'svelte/transition';
  import { Button } from "$lib/components/ui/button";
</script>

<div 
  in:fade={{ duration: 300, delay: 150 }}
  class="container mx-auto max-w-2xl px-6 lg:px-0 py-32 lg:py-40 relative"
>
  <div class="absolute inset-0 bg-gradient-radial from-cyan-500/10 to-transparent opacity-20 blur-3xl pointer-events-none"></div>
  
  <h2 class="text-lg lg:text-xl font-orbitron tracking-wider text-cyan-400 text-center mb-4 lg:mb-10 relative">
    OUR MISSION
  </h2>

  <h1 class="text-3xl font-orbitron tracking-wider text-neutral-100 text-center mb-10 lg:mb-14 relative">
    Help AI Agents Boost Performance
  </h1>
  
  <div class="space-y-6 text-neutral-300 leading-relaxed px-4 lg:px-0 relative backdrop-blur-sm">
    <p>
      Auriel Analytics empowers AI development teams to observe their agents' behavior and optimize performance through comprehensive data analysis and visualization.
    </p>

    <p>
      At the heart of our approach is <a href="/clairvoyance" class="text-cyan-400 hover:text-cyan-300 font-medium">Clairvoyance</a>, our open-source observability platform that transforms raw agent data into actionable insights through custom ontologies, semantic knowledge graphs, and tailored dashboards, helping teams understand exactly how their AI agents operate and where to improve.
    </p>

    <p>
      We believe that AI observability should be accessible to every development team, which is why we've made Clairvoyance open-source and entirely free to get started with. For teams seeking a more tailored solution, we build bespoke Clairvoyance instances that bridge technical metrics to business outcomes. Our team works closely with you to define key performance indicators, create agent-specific ontologies, and design observability dashboards that reveal the true behavior of your AI systems - helping you move from raw logs to optimized agents with measurable impact.
    </p>

    <div class="flex justify-center">
      <Button 
        variant="outline"
        size="lg"
        href="/enquire"
        class="mt-14 border-cyan-500 bg-transparent hover:bg-cyan-500/10 text-cyan-400 hover:text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all font-orbitron tracking-wider"
      >
        WORK WITH US >>
      </Button>
    </div>
  </div>
</div>

<style>
  .bg-gradient-radial {
    background-image: radial-gradient(var(--tw-gradient-stops));
  }
</style> 