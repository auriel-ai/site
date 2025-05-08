<script lang="ts">
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { Button } from "$lib/components/ui/button";
  import { Github, Star } from 'lucide-svelte'; // Icons for tools and Star icon

  let isLoaded = false;
  let starCounts: Record<string, number> = {};

  onMount(async () => {
    isLoaded = true;
    
    // Fetch star counts for each tool with a GitHub URL
    for (const tool of toolList) {
      if (tool.githubUrl) {
        try {
          const repoPath = new URL(tool.githubUrl).pathname.substring(1); // Remove leading slash
          const response = await fetch(`https://api.github.com/repos/${repoPath}`);
          if (response.ok) {
            const data = await response.json();
            starCounts[tool.id] = data.stargazers_count;
          }
        } catch (error) {
          console.error(`Failed to fetch star count for ${tool.name}:`, error);
        }
      }
    }
  });

  // Define Tool type
  type Tool = {
    id: string;
    name: string;
    tagline: string;
    description: string;
    features: string[]; // Key features
    githubUrl?: string;
  };

  const toolList: Tool[] = [
    {
      id: 'agentlens',
      name: 'AgentLens',
      tagline: "See your agent's future before it fails.",
      description: 'A lightweight, open-source Python package to record, replay, and analyze AI agent runs offline. Debug faster, save API credits.',
      features: ['Offline Replay', 'Failure Analysis', 'Cost Tracking'],
      githubUrl: 'https://github.com/auriel-ai/agentlens'
    }
    // Add more tools here later
  ];

</script>

<div
  in:fade={{ duration: 300, delay: 150 }}
  class="container mx-auto max-w-7xl px-6 py-24 md:py-32 lg:py-40 relative"
>
  <div class="absolute inset-0 bg-gradient-radial from-purple-600/10 via-transparent to-transparent opacity-20 blur-3xl pointer-events-none"></div>

  <h1 class="text-3xl md:text-4xl font-orbitron tracking-wider text-neutral-100 text-center mb-8 md:mb-12 relative">
    Our Devtools
  </h1>
  
  <div class="text-neutral-300 text-center leading-relaxed mb-12 md:mb-20 max-w-3xl mx-auto">
    <p>
      We build and maintain open-source observability tools designed to help developers monitor, debug, and optimize their LLM applications and AI agents, in both development and production.
    </p>
  </div>
  
  <!-- Tool Card Grid -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
    {#each toolList as tool (tool.id)}
      <div class="bg-neutral-900/70 border border-neutral-800 rounded-lg p-6 flex flex-col backdrop-blur-sm transition-all hover:border-purple-500/60 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] group">
        <!-- Icon and Name -->
        <div class="flex items-center mb-4"> 
          <h2 class="text-xl font-orbitron text-neutral-100 truncate">{tool.name}</h2> 
        </div>

        <!-- Tagline -->
        <p class="text-sm text-purple-300/90 italic mb-4">{tool.tagline}</p>

        <!-- Description -->
        <p class="text-sm text-neutral-300 mb-5 flex-grow">{tool.description}</p>

        <!-- Features & Link -->
        <div class="mt-auto">
          <!-- Feature Tags -->
          <div class="flex flex-wrap gap-2 mb-8">
            {#each tool.features as feature}
              <span class="text-xs bg-neutral-700 text-neutral-300 px-2.5 py-1 rounded font-medium">{feature}</span>
            {/each}
          </div>
          <!-- GitHub Link -->
          {#if tool.githubUrl && tool.githubUrl !== '#'}
            <div class="flex gap-2">
              <Button 
                href={tool.githubUrl}
                target="_blank"
                variant="outline"
                size="sm"
                class="flex-grow border-purple-500/80 bg-transparent hover:bg-purple-500/10 text-purple-300 hover:text-purple-200 group-hover:border-purple-400"
              >
                <div class="flex items-center gap-2">
                  <Github class="w-4 h-4" />
                  <span>View on GitHub</span>
                </div>
              </Button>
              
              {#if starCounts[tool.id]}
                <a
                  href={`${tool.githubUrl}/stargazers`}
                  target="_blank"
                  class="inline-flex items-center gap-1 py-1 px-2.5 border border-neutral-700 rounded-md bg-neutral-900 hover:bg-neutral-800 hover:border-neutral-600 transition-colors"
                >
                  <Star class="w-3.5 h-3.5 fill-yellow-300 text-yellow-300" />
                  <span class="text-xs font-semibold text-neutral-300">{starCounts[tool.id] >= 1000 ? `${(starCounts[tool.id] / 1000).toFixed(1)}K` : starCounts[tool.id]}</span>
                </a>
              {/if}
            </div>
          {:else}
             <Button 
              disabled
              variant="outline"
              size="sm"
              class="w-full border-neutral-700 bg-transparent text-neutral-500 gap-2 cursor-not-allowed"
            >
              <Github class="w-4 h-4" />
              GitHub (Coming Soon)
            </Button>
          {/if}
        </div>
      </div>
    {/each}

    <!-- Placeholder cards logic -->
    {#if toolList.length > 0 && toolList.length < 3}
      {#each { length: 3 - toolList.length } as _, i}
        <div class="border-2 border-dashed border-neutral-800 rounded-lg p-6 flex items-center justify-center opacity-60">
          <span class="text-sm text-neutral-600 italic">More tools in development...</span>
        </div>
      {/each}
    {/if}

  </div>

</div>

<style>
  .bg-gradient-radial {
    background-image: radial-gradient(var(--tw-gradient-stops));
  }
</style> 