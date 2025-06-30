<script lang="ts">
  import * as AlertDialog from "$lib/components/ui/alert-dialog";
  import { ExternalLink, Github, Star, X } from 'lucide-svelte';
  import LogoIcon from '$lib/components/LogoIcon.svelte';
  import { onDestroy } from 'svelte';
  
  export let project: {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    capabilities: string[];
    icon: string;
    projectType: 'agent' | 'tool';
    categoryTags: string[];
    websiteUrl?: string;
    githubUrl?: string;
  };
  export let starCount: number | undefined = undefined;
  export let open: boolean;
  export let onOpenChange: (open: boolean) => void;

  // Clean up any scroll locks when the component is destroyed
  onDestroy(() => {
    document.body.style.removeProperty('overflow');
    document.body.style.removeProperty('padding-right');
  });

  function handleOpenChange(isOpen: boolean) {
    if (!isOpen) {
      // Small delay to let the animation finish
      setTimeout(() => {
        document.body.style.removeProperty('overflow');
        document.body.style.removeProperty('padding-right');
      }, 200);
    }
    onOpenChange(isOpen);
  }
</script>

<AlertDialog.Root {open} onOpenChange={handleOpenChange}>
  <AlertDialog.Overlay />
  <AlertDialog.Content class="bg-white border border-neutral-200 text-neutral-900 max-w-2xl p-0 overflow-hidden rounded-xl shadow-xl">
    <!-- Close Button -->
    <button 
      class="absolute right-4 top-4 z-10 p-2 rounded-full hover:bg-neutral-100 transition-colors"
      on:click={() => handleOpenChange(false)}
    >
      <X class="w-5 h-5 text-neutral-500" />
    </button>

    <!-- Header Section -->
    <div class="p-8 md:p-10 bg-neutral-50 border-b border-neutral-200">
      <div class="flex items-start gap-6">
        <!-- Icon -->
        <div class="bg-neutral-100 p-3 rounded-lg mt-1 flex-shrink-0">
          {#if project.icon === 'logo'}
            <LogoIcon size="w-10 h-10" class_="stroke-neutral-900" />
          {:else if project.icon.startsWith('http')}
            <img src={project.icon} alt="{project.title} icon" class="w-10 h-10 object-contain" />
          {:else}
            <span class="text-3xl">{project.icon}</span>
          {/if}
        </div>
        <!-- Title, Tags, Links -->
        <div class="flex-grow">
          <AlertDialog.Title class="text-2xl font-semibold text-neutral-900 mb-3">{project.title}</AlertDialog.Title>
          <!-- Tags/Subtitle -->
          <div class="flex flex-wrap items-center gap-2 mb-5">
            {#each project.categoryTags as tag}
               <span class="text-xs bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded font-medium border border-neutral-200">{tag}</span>
            {/each}
          </div>
           <!-- Links -->
           <div class="flex flex-wrap items-center gap-4 text-sm text-neutral-500 mt-5">
             {#if project.websiteUrl && project.websiteUrl !== '#'}
               <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 hover:text-neutral-900 transition-colors">
                 <ExternalLink class="w-4 h-4" />
                 Visit Website
               </a>
             {/if}
             {#if project.githubUrl && project.githubUrl !== '#'}
               <div class="flex items-center gap-2">
                 <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 hover:text-neutral-900 transition-colors">
                   <Github class="w-4 h-4" />
                   GitHub
                 </a>
                 {#if starCount}
                   <a
                     href={`${project.githubUrl}/stargazers`}
                     target="_blank"
                     class="inline-flex items-center gap-1 py-1 px-2.5 border border-neutral-200 rounded-md bg-neutral-100 hover:bg-neutral-200 hover:border-neutral-300 transition-colors"
                   >
                     <Star class="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                     <span class="text-xs font-semibold text-neutral-700">{starCount >= 1000 ? `${(starCount / 1000).toFixed(1)}K` : starCount}</span>
                   </a>
                 {/if}
               </div>
             {/if}
          </div>
        </div>
      </div>
    </div>
    <!-- Body Section -->
    <div class="px-10 py-5 pb-20">
      <div class="max-w-none">
        <p class="text-neutral-600 text-md mb-8">{project.fullDescription}</p>
        <h4 class="text-lg font-medium text-neutral-900 mb-4">Capabilities</h4>
        <ul class="list-none p-0 space-y-2">
          {#each project.capabilities as capability}
            <li class="flex items-center gap-2 text-neutral-600 font-light">
              <svg class="w-5 h-5 text-emerald-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              {capability}
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </AlertDialog.Content>
</AlertDialog.Root> 