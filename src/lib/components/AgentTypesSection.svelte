<script lang="ts">
  import { fade } from 'svelte/transition';
  import { ArrowUpRight } from 'lucide-svelte';
  import AgentArchitectureDiagram from './AgentArchitectureDiagram.svelte';
  const agentTypes = [
    {
      key: 'monolithic',
      label: 'Monolithic Agents',
      description: 'A single, unified AI system designed to handle complex tasks independently.',
      features: [
        'Simplified deployment with a single, unified system',
        'Streamlined development for complex, singular tasks',
        'Consistent performance with integrated functionality',
      ]
    },
    {
      key: 'microagents',
      label: 'Modular Microagents',
      description: 'A collection of specialized, small, specialized AI components that collaborate to perform flexible, targeted functions.',
      features: [
        'Task-specific agents for granular control',
        'Easy to update, replace, or scale individual modules',
        'Enhanced resilience with independent, fault-tolerant modules'
      ]
    },
    {
      key: 'workflows',
      label: 'Workflows',
      description: 'AI-powered workflows that automate and coordinate multi-step business processes, performing actions without manual effort.',
      features: [
        'Streamline repetitive tasks by automating sequential processes',
        'Improve accuracy by reducing manual errors in task execution',
        'Enhance efficiency with predefined rules and minimal human intervention',
      ]
    }
  ];
  let selected = agentTypes[0].key;
  $: current = agentTypes.find(a => a.key === selected) || agentTypes[0];
  let visibleKey = current ? current.key : agentTypes[0].key;
  $: if (current && current.key !== visibleKey) {
    visibleKey = current.key;
  }
</script>

<section class="w-full bg-neutral-50 py-10 my-24">
  <div class="max-w-7xl mx-auto px-4">
    <div class="text-center space-y-12 mb-12">
        <p class="text-base md:text-lg text-neutral-400 font-light font-orbitron tracking-wide">WHAT WE BUILD</p>
      <h2 class="text-3xl md:text-5xl font-light mb-2 text-neutral-900">AI Agents, Any Architecture</h2>
    </div>
    <div class="flex justify-center gap-2 mb-20 flex-wrap">
      {#each agentTypes as agent}
        <button
          class="px-3 py-2 rounded-full transition font-regular text-sm focus:outline-none
            {selected === agent.key ? 'bg-white border-neutral-300 text-neutral-900' : 'bg-neutral-100 border-transparent text-neutral-500 hover:text-black'}"
          on:click={() => selected = agent.key}
        >
          {agent.label}
        </button>
      {/each}
    </div>
    <div class="flex flex-col md:flex-row items-stretch gap-0 transition-all duration-300 bg-white rounded-2xl shadow overflow-hidden min-h-[300px] md:min-h-[450px] relative">
      <div class="md:flex-[1.3] flex-1 min-w-0 p-6 md:p-16 flex flex-col justify-center"
        in:fade={{ duration: 250 }} out:fade={{ duration: 250 }}>
        {#if current && visibleKey === current.key}
          <h3 class="text-2xl md:text-3xl font-regular mb-10 text-neutral-800">{current.label}</h3>
          <p class="text-base md:text-lg text-neutral-600 font-light mb-10">{current.description}</p>
          <ul class="space-y-2 mb-8">
            {#each current.features as feature}
              <li class="flex items-start gap-2 text-neutral-600 text-base md:text-md font-light">
                <svg class="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                <span>{feature}</span>
              </li>
            {/each}
          </ul>
          <a 
            href="/news/blog/agent-architectures" 
            class="px-2 inline-flex items-center gap-2 text-neutral-700 hover:text-neutral-900 font-medium text-sm transition-colors duration-200"
          >
            Learn more
            <ArrowUpRight class="w-4 h-4" />
          </a>
        {/if}
      </div>
      <div class="flex-1 min-w-[220px] relative p-8 md:p-12 flex items-center justify-center">
        <div class="absolute inset-0 z-0">
          <img src="/gggrain (1).svg" alt="" class="w-full h-full object-cover" />
        </div>
        <div class="relative z-10 w-5/6 h-5/6 flex items-center justify-center">
          <AgentArchitectureDiagram type={selected as 'monolithic' | 'microagents' | 'workflows'} />
        </div>
      </div>
    </div>
  </div>
</section> 