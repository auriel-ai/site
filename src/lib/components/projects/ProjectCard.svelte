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
  on:keydown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}
>
  <div class="flex justify-between items-start mb-4">
    <div class="bg-neutral-100 p-3 rounded-lg group-hover:bg-neutral-200 transition-all">
      {#if project.icon === 'logo'}
        <LogoIcon size="w-8 h-8" class_="stroke-neutral-900" />
      {:else if project.icon.startsWith('http')}
        <img src={project.icon} alt="{project.title} icon" class="w-8 h-8 object-contain" /> 
      {:else}
        <span class="text-2xl">{project.icon}</span>
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
  <h3 class="text-xl font-medium text-neutral-900 group-hover:text-neutral-700 mb-2">{project.title}</h3>
  <p class="text-neutral-600 text-sm line-clamp-2 mb-4">{project.description}</p>
  <div class="flex flex-wrap gap-2 mt-10">
    {#each project.categoryTags as tag}
       <span class="text-xs bg-neutral-100 text-neutral-600 px-2.5 py-1 rounded-full font-medium">{tag}</span>
    {/each}
  </div>
</div> 