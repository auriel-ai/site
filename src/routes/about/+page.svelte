<script lang="ts">
  import { fade } from 'svelte/transition';
  import { Button } from "$lib/components/ui/button";
</script>

<div 
  in:fade={{ duration: 300, delay: 150 }}
  class="container mx-auto max-w-3xl px-6 lg:px-0 py-32 lg:py-40 relative"
>
  <div class="absolute inset-0 bg-gradient-radial from-cyan-500/10 to-transparent opacity-20 blur-3xl pointer-events-none"></div>
  
  <h2 class="text-lg lg:text-xl font-orbitron tracking-wider text-cyan-400 text-center mb-4 lg:mb-10 relative">
    OUR FOCUS
  </h2>

  <h1 class="text-3xl font-orbitron tracking-wider text-neutral-100 text-center mb-10 lg:mb-14 relative">
    AI Agent Development & Tooling
  </h1>
  
  <div class="space-y-8 text-neutral-300 leading-relaxed px-4 lg:px-0 relative backdrop-blur-sm">
    <p class="text-lg">
      We operate at the intersection of specialized AI agent development and the open-source tooling required to make them reliable and efficient. We believe powerful AI workflows requires both sophisticated microagents and transparent observability.
    </p>

    <div>
       <h3 class="text-xl font-medium text-cyan-400 mb-3">Open-Source Observability Tools</h3>
       <p>
         We create lightweight, <span class="font-semibold">open-source developer tools</span> 
         focused on the practical challenges of building with LLMs. Tools like 
         <a href="/tooling#clairvoyance" class="underline hover:text-cyan-300">Clairvoyance</a> 
         provide essential capabilities for offline debugging, performance analysis, 
         and cost tracking, enabling faster iteration and more robust agent deployment.
       </p>
    </div>

    <div>
      <h3 class="text-xl font-medium text-cyan-400 mb-3">MicroAgent Development</h3>
      <p>
        We design and build highly specialized <span class="font-semibold">MicroAgents</span>—modular AI components focused on specific tasks. Like microservices, they offer flexibility, allowing businesses to deploy standalone agents or combine them into powerful, scalable systems tailored to unique needs.
      </p>
    </div>

    <div>
       <h3 class="text-xl font-medium text-cyan-400 mb-3">Engagement Models</h3>
       <p>
         Developers can leverage our freely available 
         <span class="font-semibold">Open-Source Tooling</span> to enhance their own agent 
         development and monitoring workflows. Additionally, we partner with 
         select businesses through <span class="font-semibold">Forward-Deployed Services</span>, 
         where our team works directly with yours to design, build, integrate, 
         and optimize custom MicroAgent solutions into your workflows.
       </p>
    </div>

    <div class="pt-8 flex justify-center">
      <Button 
        variant="outline"
        size="lg"
        href="/enquire"
        class="border-cyan-500 bg-transparent hover:bg-cyan-500/10 text-cyan-400 hover:text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all font-orbitron tracking-wider"
      >
        Contact Us >>
      </Button>
    </div>

  </div>
</div>

<style>
  .bg-gradient-radial {
    background-image: radial-gradient(var(--tw-gradient-stops));
  }
</style> 