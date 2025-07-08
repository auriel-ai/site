<script lang="ts">
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { ArrowRight } from 'lucide-svelte';
  import { projects, type Project } from '$lib/stores/projects';
  import ProjectDialog from '$lib/components/projects/ProjectDialog.svelte';
  import ContactPopup from '$lib/components/ContactPopup.svelte';
  import ProjectCard from '$lib/components/projects/ProjectCard.svelte';
  import ProjectFilter from '$lib/components/projects/ProjectFilter.svelte';

  let isLoaded = false;
  let isPopupOpen = false;
  const selectedProject = writable<Project | null>(null);
  let starCounts: Record<string, number> = {};
  let selectedFilter: 'All' | 'Agents' | 'Tools' = 'All';

  $: filteredProjects = projects.filter((project) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Agents') return project.projectType === 'agent';
    if (selectedFilter === 'Tools') return project.projectType === 'tool';
    return true;
  });

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
<ContactPopup isOpen={isPopupOpen} onClose={() => (isPopupOpen = false)} formId="lyjf2sfh" />

<div in:fade={{ duration: 300, delay: 150 }} class="container mx-auto max-w-7xl px-4 py-8 md:px-10">
	<!-- Page Header -->
	<div class="mb-10 space-y-4 md:mb-12 md:space-y-5">
		<h1
			class="font-orbitron text-center text-4xl font-semibold text-neutral-900 md:text-left md:text-4xl"
		>
			Projects
		</h1>
		<p
			class="max-w-2xl text-center font-light leading-relaxed text-neutral-600 md:text-left md:text-lg"
		>
			A collection of agents and tools we've built
		</p>
	</div>

	<!-- Filter Component -->
	<ProjectFilter bind:selectedFilter />

	<!-- Project Card Grid -->
	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 pb-40 md:pb-60">
		{#each filteredProjects as project (project.id)}
			<ProjectCard {project} onClick={() => selectedProject.set(project)} />
		{/each}
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