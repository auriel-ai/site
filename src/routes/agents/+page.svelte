<script lang="ts">
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { derived, writable } from 'svelte/store';
  import { Button } from "$lib/components/ui/button";
  import * as AlertDialog from "$lib/components/ui/alert-dialog";
  import { ExternalLink, Github } from 'lucide-svelte'; // Example icons for links

  let isLoaded = false;
  const selectedAgent = writable<Agent | null>(null);

  // Derived state for dialog open status
  const isDialogOpen = derived(selectedAgent, ($selectedAgent: Agent | null) => $selectedAgent !== null);

  onMount(() => {
    isLoaded = true;
  });

  // Define Agent type
  type Agent = {
    id: string;
    title: string;
    description: string; // Short description for card
    fullDescription: string; // Longer description for dialog
    capabilities: string[];
    icon: string;
    categoryTags: string[]; // New field for broader tags
    websiteUrl?: string; // Optional URL
    githubUrl?: string; // Optional URL
  };

  let agentList: Agent[] = [
    {
      id: 'propscan-agent', 
      title: 'Propscan',
      description: 'An AI agent for property investors that aggregates data and analyzes profitability.',
      fullDescription: 'Analyze deals faster with AI-powered analysis, without spending hours on manual research. Propscan offers intelligent property analysis at scale.',
      capabilities: [
        'AI property analysis', 
        'Real estate deal screening', 
        'Automated research',
        'Market data integrations' // Capabilities
      ],
      icon: 'https://propscan.uk/propscan-icon.svg',
      categoryTags: ['Real Estate', 'Data', 'Analysis'], // Tags
      websiteUrl: 'https://propscan.uk/',
      githubUrl: undefined // No GitHub URL provided
    },
    {
      id: 'sam-agent',
      title: 'SAM',
      description: 'An AI assistant for UK firefighters in training to help them ace their operational training phase.',
      fullDescription: 'SAM helps British Fire and Rescue Service trainees master skills, prepare for assessments, and build confidence throughout their operational training course. It provides specialized guidance on equipment, protocols, and study materials for any British Fire and Rescue Service.',
      capabilities: [
        'Training protocol guidance',
        'Equipment information',
        'Study material assistance',
        'Assessment preparation',
        'Operational training support'
      ],
      icon: 'https://samfire.uk/favicon.svg',
      categoryTags: ['Emergency Services', 'Training', 'Education'],
      websiteUrl: 'https://samfire.uk',
      githubUrl: undefined // No GitHub URL provided
    }
  ];

  // $: console.log($selectedAgent); // Use $ prefix for store value

</script>

<div
  in:fade={{ duration: 300, delay: 150 }}
  class="container mx-auto max-w-7xl px-6 py-24 md:py-32 lg:py-40 relative"
>
  <div class="absolute inset-0 bg-gradient-radial from-green-500/10 to-transparent opacity-20 blur-3xl pointer-events-none"></div>

  
  <h1 class="text-3xl md:text-4xl font-orbitron tracking-wider text-neutral-100 text-center mb-8 md:mb-12 relative">
    Our Agents
  </h1>
  
  <div class="text-neutral-300 text-center leading-relaxed mb-12 md:mb-20 max-w-3xl mx-auto">
    <p>
      We develop highly specialized AI Agents that excel at specific tasks. Our agents are made up of modular components that can operate independently or work together as part of larger systems.
    </p>
  </div>
  
  <!-- Agent Card Grid -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20 md:mb-24">
    {#each agentList as agent (agent.id)}
      <!-- Use direct hover: prefix for border change -->
      <div 
        class="bg-neutral-900/60 border border-neutral-800 rounded-lg p-6 flex flex-col backdrop-blur-sm hover:border-green-500 transition-all hover:shadow-[0_0_25px_rgba(74,222,128,0.2)] group cursor-pointer" 
        on:click={() => selectedAgent.set(agent)}
        role="button" 
        tabindex="0"
        on:keydown={(e) => { if (e.key === 'Enter' || e.key === ' ') selectedAgent.set(agent); }}
      >
        <div class="flex justify-between items-start mb-4">
          <div class="bg-neutral-800 p-3 rounded-lg group-hover:bg-green-500/10 transition-all">
            <!-- Conditional Icon Rendering -->
            {#if agent.icon.startsWith('http')}
              <img src={agent.icon} alt="{agent.title} icon" class="w-8 h-8 object-contain" /> 
            {:else}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-green-400 transition-colors group-hover:text-green-300">
                <path d={agent.icon} />
              </svg>
            {/if}
          </div>
           <!-- Placeholder for potential top-right element -->
        </div>
        <h3 class="text-lg font-orbitron text-neutral-100 mb-2">{agent.title}</h3>
        <p class="text-sm text-neutral-400 mb-4 flex-grow">{agent.description}</p>
        <div class="flex flex-wrap gap-2 mt-auto">
          {#each agent.categoryTags as tag}
             <!-- Adjusted tag background -->
             <span class="text-xs bg-neutral-700 text-neutral-300 px-2.5 py-1 rounded font-medium">{tag}</span>
          {/each}
        </div>
      </div>
    {/each}

    <!-- Placeholder cards logic -->
    {#if agentList.length > 0 && agentList.length < 3}
      {#each { length: 3 - agentList.length } as _, i}
        <div class="border-2 border-dashed border-neutral-800 rounded-lg p-6 flex items-center justify-center min-h-[280px] opacity-60">
          <span class="text-sm text-neutral-600 italic">More agents in development...</span>
        </div>
      {/each}
    {/if}
  </div>

  
  <!-- Existing Custom Agent Development Section (Optional) -->
  <div class="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 rounded-lg border border-neutral-700 p-8 lg:p-12 relative overflow-hidden">
    <div class="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full filter blur-3xl"></div>
    <div class="relative z-10">
      <h3 class="text-2xl font-orbitron text-white mb-4">Want to build an agent together?</h3>
      <p class="text-neutral-300 mb-6 max-w-xl">
        Send us a job posting or idea and we will build a custom agent for it.
      </p>
      <div class="flex flex-wrap gap-4">
        <Button
          variant="default"
          size="lg"
          href="/enquire" 
          class="bg-green-500 hover:bg-green-600 text-neutral-950 flex items-center gap-2 font-orbitron tracking-wider"
        >
          Let's talk
        </Button>
      </div>
    </div>
  </div>
</div>

<!-- Agent Detail Dialog -->
{#if $selectedAgent}
  {@const agent = $selectedAgent}
  <AlertDialog.Root open={$isDialogOpen} onOpenChange={(open) => { if (!open) selectedAgent.set(null); }}>
    <AlertDialog.Overlay />
    <AlertDialog.Content class="bg-neutral-950 border-neutral-800 text-neutral-200 max-w-2xl p-0 overflow-hidden">
      <!-- Header Section - Adjusted padding -->
      <div class="p-8 md:p-10 bg-neutral-900/50 border-b border-neutral-800">
        <div class="flex items-start gap-6 mb-4">
          <!-- Icon - Conditional Rendering -->
          <div class="bg-neutral-800 p-3 rounded-lg mt-1 flex-shrink-0">
            {#if agent.icon.startsWith('http')}
              <img src={agent.icon} alt="{agent.title} icon" class="w-10 h-10 object-contain" />
            {:else}
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 text-green-400">
                 <path d={agent.icon} />
              </svg>
            {/if}
          </div>
          <!-- Title, Tags, Links -->
          <div class="flex-grow">
            <!-- Added mb-3 -->
            <AlertDialog.Title class="text-2xl font-orbitron text-neutral-100 mb-3">{agent.title}</AlertDialog.Title>
            <!-- Tags/Subtitle - Added mb-4 -->
            <div class="flex flex-wrap items-center gap-2 mb-5">
              {#each agent.categoryTags as tag}
                 <!-- Adjusted tag background -->
                 <span class="text-xs bg-neutral-700 text-neutral-300 px-2 py-0.5 rounded font-medium">{tag}</span>
              {/each}
               <!-- Add other subtitles if needed -->
            </div>
             <!-- Links -->
             <div class="flex flex-wrap items-center gap-4 text-sm text-neutral-400">
               {#if agent.websiteUrl && agent.websiteUrl !== '#'}
                 <!-- Adjusted link hover color -->
                 <a href={agent.websiteUrl} target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 hover:text-green-300 transition-colors">
                   <ExternalLink class="w-4 h-4" />
                   Visit Website
                 </a>
               {/if}
               {#if agent.githubUrl && agent.githubUrl !== '#'}
                 <!-- Adjusted link hover color -->
                 <a href={agent.githubUrl} target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 hover:text-green-300 transition-colors">
                   <Github class="w-4 h-4" />
                   GitHub
                 </a>
               {/if}
               <!-- Add other links like Share, Add to List if needed -->
            </div>
          </div>
        </div>
      </div>
      
      <!-- Body Section - Adjusted padding and text size -->
      <div class="p-8 md:p-10">
         <AlertDialog.Description class="text-base text-neutral-300 leading-relaxed mb-6">
           {agent.fullDescription}
         </AlertDialog.Description>
         
         <!-- Added Key Capabilities List -->
         <h4 class="text-md font-semibold text-neutral-200 mb-3">Key Capabilities:</h4>
         <ul class="list-disc pl-5 text-sm text-neutral-300 space-y-1.5">
           {#each agent.capabilities as capability}
             <li>{capability}</li>
           {/each}
         </ul>
      </div>

      <!-- Footer - Added pt-4 -->
      <AlertDialog.Footer class="p-6 pt-4 border-t border-neutral-800 bg-neutral-900/50 sm:justify-end">
         <AlertDialog.Cancel 
           class="bg-neutral-700 border-neutral-600 hover:bg-neutral-600 text-neutral-200 hover:text-white"
         >Close</AlertDialog.Cancel>
         <!-- <AlertDialog.Action>Continue</AlertDialog.Action> -->
      </AlertDialog.Footer>
    </AlertDialog.Content>
  </AlertDialog.Root>
{/if}

<style>
  .bg-gradient-radial {
    background-image: radial-gradient(var(--tw-gradient-stops));
  }
  
  :global(.animate-fade-in) {
    animation: fadeIn 0.8s ease-out forwards;
    opacity: 0;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style> 