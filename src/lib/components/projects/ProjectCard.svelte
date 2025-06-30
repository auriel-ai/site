<script lang="ts">
  import LogoIcon from '$lib/components/LogoIcon.svelte';
  
  export let project: {
    id: string;
    title: string;
    description: string;
    icon: string;
    projectType: 'agent' | 'tool';
    categoryTags: string[];
  };
  
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
        <div class="bg-neutral-100 p-4 rounded-xl group-hover:bg-neutral-200 transition-all">
          {#if project.icon === 'logo'}
            <LogoIcon size="w-10 h-10" class_="stroke-neutral-900" />
          {:else if project.icon.startsWith('http')}
            <img src={project.icon} alt="" aria-hidden="true" class="w-10 h-10 object-contain" /> 
          {:else}
            <div class="w-10 h-10 bg-gradient-to-br from-neutral-900 to-neutral-700 rounded-lg flex items-center justify-center">
              <span class="text-2xl text-white font-medium" aria-hidden="true">{project.icon[0].toUpperCase()}</span>
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
      
      <h3 class="text-xl font-medium text-neutral-900 group-hover:text-neutral-700">
        {project.title}
      </h3>
      
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