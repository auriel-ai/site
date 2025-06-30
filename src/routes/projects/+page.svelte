<script lang="ts">
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { ArrowRight } from 'lucide-svelte';
  import LogoIcon from '$lib/components/LogoIcon.svelte';
  import { projects, type Project } from '$lib/stores/projects';
  import ProjectDialog from '$lib/components/projects/ProjectDialog.svelte';
  import ContactPopup from '$lib/components/ContactPopup.svelte';
  import ProjectCard from '$lib/components/projects/ProjectCard.svelte';

  let isLoaded = false;
  let isPopupOpen = false;
  const selectedProject = writable<Project | null>(null);
  let starCounts: Record<string, number> = {};

  onMount(async () => {
    isLoaded = true;
    
    // Fetch star counts for projects with GitHub URLs
    for (const project of projects) {
      if (project.githubUrl) {
        try {
          const repoPath = project.githubUrl.replace('https://github.com/', '');
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
</script>

<!-- Contact Popup -->
<ContactPopup 
  isOpen={isPopupOpen}
  onClose={() => isPopupOpen = false}
  formId="lyjf2sfh"
/>

<div
  in:fade={{ duration: 300, delay: 150 }}
  class="container mx-auto max-w-7xl px-4 py-8"
>
  <!-- Page Header -->
  <div class="mb-10 md:mb-12 space-y-4 md:space-y-5">
    <h1 class="text-3xl md:text-4xl font-medium text-neutral-900 text-left">
      Projects
    </h1>
    <p class="text-base md:text-lg text-neutral-600 leading-relaxed max-w-2xl font-light">
      A collection of AI agents and tools we've built to solve real problems.
    </p>
  </div>

  <!-- Project Card Grid -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
    {#each projects as project (project.id)}
      <ProjectCard 
        {project} 
        onClick={() => selectedProject.set(project)} 
      />
    {/each}
    <!-- Placeholder cards logic -->
    {#if projects.length > 0 && projects.length < 3}
      {#each { length: 3 - projects.length } as _, i}
        <div class="border-2 border-dashed border-neutral-200 rounded-lg p-6 flex items-center justify-center min-h-[220px] opacity-60 bg-white">
          <span class="text-sm text-neutral-400 italic">More projects in development...</span>
        </div>
      {/each}
    {/if}
  </div>

  <!-- Custom Project Development Section -->
  <div class="bg-white rounded-lg border border-neutral-200 p-6 md:p-8 lg:p-12 mt-10 mb-20 md:mb-40">
    <h3 class="text-lg md:text-xl font-medium text-neutral-900 mb-3 md:mb-4">Submit a project request</h3>
    <p class="text-base text-neutral-600 mb-6 font-light leading-relaxed">
      Send us a job post or tell us about an idea and we will build a custom agent/workflow for it.
    </p>
    <div class="flex max-w-lg">
      <button 
        on:click={() => isPopupOpen = true}
        class="bg-white text-sm text-neutral-900 font-normal py-2 px-5 rounded-full border border-neutral-200 hover:border-neutral-400 transition-all duration-300 flex items-center gap-2"
      >
        Request A Project
        <ArrowRight size={18} class="ml-1" />
      </button>
    </div>
  </div>
</div>

<!-- Project Dialog -->
{#if $selectedProject}
  <ProjectDialog
    project={$selectedProject}
    starCount={starCounts[$selectedProject.id]}
    open={!!$selectedProject}
    onOpenChange={(open) => !open && selectedProject.set(null)}
  />
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