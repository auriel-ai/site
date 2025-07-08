<script lang="ts">
  import PropscanLogo from '$lib/components/logos/PropscanLogo.svelte';
  import SamLogo from '$lib/components/logos/SamLogo.svelte';
  import SupportNetworkLogo from '$lib/components/logos/SupportNetworkLogo.svelte';
  import type { Project } from '$lib/stores/projects';
  
  export let project: Project;
  
  export let onClick: () => void;
</script>

<div 
  class="bg-white rounded-lg p-6 h-full border border-neutral-200 transition-all duration-300 hover:border-neutral-400 group cursor-pointer" 
  on:click={onClick}
  role="button" 
  tabindex="0"
  on:keydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } }}
  aria-label="{project.title} - {project.projectType} project"
>
  <div class="flex flex-col h-full">
    <div class="flex-grow space-y-6">
      <div class="flex justify-between items-start">
        <div class="p-4 rounded-xl">
          {#if project.logo?.component === 'propscan'}
            <PropscanLogo showIcon={true} showText={true} className="h-8" />
          {:else if project.logo?.component === 'sam'}
            <SamLogo />
          {:else if project.logo?.component === 'support-network'}
            <SupportNetworkLogo />
          {:else if project.logo?.src}
            <img 
              src={project.logo.src}
              alt={`${project.title} logo`}
              width={project.logo.width} 
              height={project.logo.height}
              class="h-8 w-auto object-contain" 
              loading="lazy"
            />
          {:else}
            <div class="h-8 flex items-center">
              <span class="text-lg font-orbitron font-medium text-neutral-900">{project.title}</span>
            </div>
          {/if}
        </div>
        <span class="text-xs px-2.5 py-0.5 rounded-full font-medium {
          project.projectType === 'agent' 
            ? 'bg-emerald-50 text-emerald-700' 
            : 'bg-purple-50 text-purple-700'
        }">
          {project.projectType[0].toUpperCase() + project.projectType.slice(1)}
        </span>
      </div>
      
      <p class="text-neutral-700 text-sm font-light line-clamp-2">
        {project.description}
      </p>
    </div>

    <div class="flex flex-wrap gap-2 mt-10">
      {#each project.categoryTags as tag}
        <span class="text-xs bg-neutral-100 text-neutral-600 px-2.5 py-1 rounded-full font-medium">{tag}</span>
      {/each}
    </div>
  </div>
</div> 