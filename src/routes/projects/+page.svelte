<script lang="ts">
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { derived, writable } from 'svelte/store';
  import { Button } from "$lib/components/ui/button";
  import * as AlertDialog from "$lib/components/ui/alert-dialog";
  import { ExternalLink, Github, Star } from 'lucide-svelte';

  let isLoaded = false;
  const selectedProject = writable<Project | null>(null);
  let starCounts: Record<string, number> = {};

  // Derived state for dialog open status
  const isDialogOpen = derived(selectedProject, ($selectedProject: Project | null) => $selectedProject !== null);

  onMount(async () => {
    isLoaded = true;
    
    // Fetch star counts for projects with GitHub URLs
    for (const project of projectList) {
      if (project.githubUrl) {
        try {
          const repoPath = new URL(project.githubUrl).pathname.substring(1);
          const response = await fetch(`https://api.github.com/repos/${repoPath}`);
          if (response.ok) {
            const data = await response.json();
            starCounts[project.id] = data.stargazers_count;
          }
        } catch (error) {
          console.error(`Failed to fetch star count for ${project.title}:`, error);
        }
      }
    }
  });

  // Define Project type
  type Project = {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    capabilities: string[];
    icon: string;
    categoryTags: string[];
    projectType: 'agent' | 'tool';
    websiteUrl?: string;
    githubUrl?: string;
  };

  let projectList: Project[] = [
    {
      id: 'propscan-agent', 
      title: 'Propscan',
      description: 'An AI agent for property investors that aggregates data and analyzes profitability.',
      fullDescription: 'Analyze deals faster with AI-powered analysis, without spending hours on manual research. Propscan offers intelligent property analysis at scale.',
      capabilities: [
        'AI property analysis', 
        'Real estate deal screening', 
        'Automated research',
        'Market data integrations'
      ],
      icon: 'https://propscan.uk/propscan-icon.svg',
      categoryTags: ['Real Estate', 'Data', 'Analysis'],
      projectType: 'agent',
      websiteUrl: 'https://propscan.uk/',
      githubUrl: undefined
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
      projectType: 'agent',
      websiteUrl: 'https://samfire.uk',
      githubUrl: undefined
    },
    {
      id: 'agentlens',
      title: 'AgentLens',
      description: "See your agent's future before it fails. A lightweight, open-source Python package to record, replay, and analyze AI agent runs offline.",
      fullDescription: 'AgentLens is a lightweight, open-source Python package designed to record, replay, and analyze AI agent runs offline. Debug faster and save API credits with comprehensive observability tools for your LLM applications and AI agents.',
      capabilities: [
        'Offline Replay',
        'Failure Analysis', 
        'Cost Tracking',
        'Agent Debugging',
        'Performance Monitoring'
      ],
      icon: '🔍',
      categoryTags: ['DevTools', 'Observability', 'Open Source'],
      projectType: 'tool',
      websiteUrl: undefined,
      githubUrl: 'https://github.com/auriel-ai/agentlens'
    },
    {
      id: 'agent-alchemy',
      title: 'Agent Alchemy',
      description: 'A developer support network for building and monetizing AI agents with community resources.',
      fullDescription: 'Agent Alchemy is our developer support network that provides everything you need to build and monetize AI agents. From basic concepts to practical implementation, best practices, and working with the latest tools - all in one community platform.',
      capabilities: [
        'Community learning resources',
        'Best practices sharing',
        'Code examples and tutorials',
        'Networking with developers',
        'Monetization strategies'
      ],
      icon: '⚗️',
      categoryTags: ['Community', 'Education', 'Networking'],
      projectType: 'tool',
      websiteUrl: 'https://network.auriel.tech',
      githubUrl: undefined
    }
  ];
</script>

<div
  in:fade={{ duration: 300, delay: 150 }}
  class="container mx-auto max-w-7xl px-6 py-24 md:py-32 lg:py-40 relative"
>
  <div class="absolute inset-0 bg-gradient-radial from-amber-500/10 to-transparent opacity-20 blur-3xl pointer-events-none"></div>

  <h1 class="text-3xl md:text-4xl font-orbitron tracking-wider text-neutral-100 text-center mb-8 md:mb-12 relative">
    Our Projects
  </h1>
  
  <div class="text-neutral-300 text-center leading-relaxed mb-12 md:mb-20 max-w-3xl mx-auto">
    <p>
      We develop highly specialized AI agents, workflows and open-source tools. Our projects range from domain-specific AI assistants to developer tools designed to help build better LLM applications.
    </p>
  </div>
  
  <!-- Project Card Grid -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20 md:mb-24">
    {#each projectList as project (project.id)}
      <div 
        class="bg-slate-800/60 border border-slate-700 rounded-lg p-6 flex flex-col backdrop-blur-sm hover:border-white transition-all hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] group cursor-pointer" 
        on:click={() => selectedProject.set(project)}
        role="button" 
        tabindex="0"
        on:keydown={(e) => { if (e.key === 'Enter' || e.key === ' ') selectedProject.set(project); }}
      >
        <div class="flex justify-between items-start mb-4">
          <div class="bg-slate-700 p-3 rounded-lg group-hover:bg-amber-500/10 transition-all">
            {#if project.icon.startsWith('http')}
              <img src={project.icon} alt="{project.title} icon" class="w-8 h-8 object-contain" /> 
            {:else}
              <span class="text-2xl">{project.icon}</span>
            {/if}
          </div>
          <span class="text-xs bg-slate-600 text-neutral-300 px-2 py-1 rounded font-medium">
            {project.projectType === 'agent' ? 'AGENT' : 'TOOL'}
          </span>
        </div>
        <h3 class="text-lg font-orbitron text-neutral-100 mb-2">{project.title}</h3>
        <p class="text-sm text-neutral-400 mb-4 flex-grow">{project.description}</p>
        <div class="flex flex-wrap gap-2 mt-auto">
          {#each project.categoryTags as tag}
             <span class="text-xs bg-slate-600 text-neutral-300 px-2.5 py-1 rounded font-medium">{tag}</span>
          {/each}
        </div>
      </div>
    {/each}

    <!-- Placeholder cards logic -->
    {#if projectList.length > 0 && projectList.length < 3}
      {#each { length: 3 - projectList.length } as _, i}
        <div class="border-2 border-dashed border-slate-700 rounded-lg p-6 flex items-center justify-center min-h-[280px] opacity-60">
          <span class="text-sm text-neutral-600 italic">More projects in development...</span>
        </div>
      {/each}
    {/if}
  </div>

  <!-- Custom Project Development Section -->
  <div class="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-lg border border-slate-600 p-8 lg:p-12 relative overflow-hidden">
    <div class="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full filter blur-3xl"></div>
    <div class="relative z-10">
      <h3 class="text-2xl font-orbitron text-white mb-4">Want to build a project together?</h3>
      <p class="text-neutral-300 mb-6 max-w-xl">
        Send us a job post or idea and we will build a custom workflow for it.
      </p>
      <div class="flex flex-wrap gap-4">
        <a 
        href="/enquire" 
        class="bg-white text-black font-orbitron font-medium py-3 px-5 rounded-full hover:bg-gray-100 transition-all duration-300"
        >
        Let's Talk
      </a>

      </div>
    </div>
  </div>
</div>

<!-- Project Detail Dialog -->
{#if $selectedProject}
  {@const project = $selectedProject}
  <AlertDialog.Root open={$isDialogOpen} onOpenChange={(open) => { if (!open) selectedProject.set(null); }}>
    <AlertDialog.Overlay />
    <AlertDialog.Content class="bg-slate-800 border-slate-700 text-neutral-200 max-w-2xl p-0 overflow-hidden">
      <!-- Header Section -->
      <div class="p-8 md:p-10 bg-slate-700/50 border-b border-slate-600">
        <div class="flex items-start gap-6 mb-4">
          <!-- Icon -->
          <div class="bg-slate-600 p-3 rounded-lg mt-1 flex-shrink-0">
            {#if project.icon.startsWith('http')}
              <img src={project.icon} alt="{project.title} icon" class="w-10 h-10 object-contain" />
            {:else}
              <span class="text-3xl">{project.icon}</span>
            {/if}
          </div>
          <!-- Title, Tags, Links -->
          <div class="flex-grow">
            <AlertDialog.Title class="text-2xl font-orbitron text-neutral-100 mb-3">{project.title}</AlertDialog.Title>
            <!-- Tags/Subtitle -->
            <div class="flex flex-wrap items-center gap-2 mb-5">
              <span class="text-xs bg-slate-600 text-neutral-300 px-2 py-0.5 rounded font-medium">
                {project.projectType === 'agent' ? 'AGENT' : 'TOOL'}
              </span>
              {#each project.categoryTags as tag}
                 <span class="text-xs bg-slate-600 text-neutral-300 px-2 py-0.5 rounded font-medium">{tag}</span>
              {/each}
            </div>
             <!-- Links -->
             <div class="flex flex-wrap items-center gap-4 text-sm text-neutral-400">
               {#if project.websiteUrl && project.websiteUrl !== '#'}
                 <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 hover:text-white transition-colors">
                   <ExternalLink class="w-4 h-4" />
                   Visit Website
                 </a>
               {/if}
               {#if project.githubUrl && project.githubUrl !== '#'}
                 <div class="flex items-center gap-2">
                   <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 hover:text-white transition-colors">
                     <Github class="w-4 h-4" />
                     GitHub
                   </a>
                   {#if starCounts[project.id]}
                     <a
                       href={`${project.githubUrl}/stargazers`}
                       target="_blank"
                       class="inline-flex items-center gap-1 py-1 px-2.5 border border-slate-600 rounded-md bg-slate-700 hover:bg-slate-600 hover:border-slate-500 transition-colors"
                     >
                       <Star class="w-3.5 h-3.5 fill-yellow-300 text-yellow-300" />
                       <span class="text-xs font-semibold text-neutral-300">{starCounts[project.id] >= 1000 ? `${(starCounts[project.id] / 1000).toFixed(1)}K` : starCounts[project.id]}</span>
                     </a>
                   {/if}
                 </div>
               {/if}
            </div>
          </div>
        </div>
      </div>
      
      <!-- Body Section -->
      <div class="p-8 md:p-10">
         <AlertDialog.Description class="text-base text-neutral-300 leading-relaxed mb-6">
           {project.fullDescription}
         </AlertDialog.Description>
         
         <!-- Key Capabilities List -->
         <h4 class="text-md font-semibold text-neutral-200 mb-3">Key Capabilities:</h4>
         <ul class="list-disc pl-5 text-sm text-neutral-300 space-y-1.5">
           {#each project.capabilities as capability}
             <li>{capability}</li>
           {/each}
         </ul>
      </div>

      <!-- Footer -->
      <AlertDialog.Footer class="p-6 pt-4 border-t border-slate-600 bg-slate-700/50 sm:justify-end">
         <AlertDialog.Cancel 
           class="bg-slate-600 border-slate-500 hover:bg-slate-500 text-neutral-200 hover:text-white"
         >Close</AlertDialog.Cancel>
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