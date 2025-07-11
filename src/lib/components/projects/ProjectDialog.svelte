<script lang="ts">
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	import { ExternalLink, Github, Star, X } from 'lucide-svelte';
	import { onDestroy, setContext } from 'svelte';
	import PropscanLogo from '$lib/components/logos/PropscanLogo.svelte';
	import SamLogo from '$lib/components/logos/SamLogo.svelte';
	import SupportNetworkLogo from '$lib/components/logos/SupportNetworkLogo.svelte';
	import PulseLogo from '$lib/components/logos/PulseLogo.svelte';
	import type { Project } from '$lib/stores/projects';

	export let project: Project;
	export let starCount: number | undefined = undefined;
	export let open: boolean;
	export let onOpenChange: (open: boolean) => void;

	// Set context for header background
	$: setContext('hideHeaderBackground', open);

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
	<AlertDialog.Content
		class="bg-[#f7f9f8]/95 backdrop-blur-md border border-neutral-200 text-neutral-900 max-w-2xl p-0 overflow-hidden rounded-xl shadow-xl"
	>
		<!-- Close Button -->
		<button
			class="absolute right-4 top-4 z-10 p-2 rounded-full hover:bg-neutral-100 transition-colors"
			on:click={() => handleOpenChange(false)}
		>
			<X class="w-5 h-5 text-neutral-500" />
		</button>

		<!-- Header Section -->
		<div class="p-8 md:py-6 md:px-10 bg-white/50 border-b border-neutral-200">
			<div class="flex flex-col items-start gap-5">
				<!-- Logo and Title Row -->
				<div class="flex items-center gap-4">
					{#if project.logo}
						<div class="bg-neutral-100 px-2 rounded-lg flex-shrink-0">
							{#if project.logo.component === 'propscan'}
								<PropscanLogo showIcon={true} showText={true} className="h-10" />
							{:else if project.logo.component === 'sam'}
								<SamLogo />
							{:else if project.logo.component === 'support-network'}
								<SupportNetworkLogo />
							{:else if project.logo.component === 'pulse'}
								<div class="bg-neutral-900 rounded-lg px-3 py-2">
									<PulseLogo size="md" />
								</div>
							{:else if project.logo.src}
								<img
									src={project.logo.src}
									alt="{project.title} logo"
									class="h-10 w-auto object-contain"
								/>
							{/if}
						</div>
					{/if}

					<!-- Show title unless the logo component already includes it -->
					{#if !project.logo?.includesTitle}
						<h3 class="text-2xl font-semibold text-neutral-900 font-orbitron">{project.title}</h3>
					{/if}
				</div>

				<!-- Tags and Links Container -->
				<div class="w-full pl-1">
					<!-- Tags -->
					<div class="flex flex-wrap items-center gap-2 mb-5">
						{#each project.categoryTags as tag}
							<span
								class="text-xs bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded font-medium border border-neutral-200"
								>{tag}</span
							>
						{/each}
					</div>
					<!-- Links -->
					<div class="flex flex-wrap items-center gap-4 text-sm text-neutral-500">
						{#if project.websiteUrl && project.websiteUrl !== '#'}
							<a
								href={project.websiteUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="flex items-center gap-1.5 hover:text-neutral-900 transition-colors"
							>
								<ExternalLink class="w-4 h-4" />
								Visit Website
							</a>
						{/if}
						{#if project.githubUrl && project.githubUrl !== '#'}
							<div class="flex items-center gap-2">
								<a
									href={project.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="flex items-center gap-1.5 hover:text-neutral-900 transition-colors"
								>
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
										<span class="text-xs font-semibold text-neutral-700"
											>{starCount >= 1000 ? `${(starCount / 1000).toFixed(1)}K` : starCount}</span
										>
									</a>
								{/if}
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
		<!-- Body Section -->
		<div class="px-10 py-5 pb-10">
			<div class="max-w-none space-y-8">
				<!-- Overview -->
				<div>
					<h4 class="text-sm uppercase text-neutral-400 mb-3">Overview</h4>
					<p class="text-neutral-600 leading-relaxed text-sm">
						{project.fullDescription}
					</p>
				</div>

				<!-- Capabilities -->
				<div>
					<h4 class="text-sm uppercase text-neutral-400 mb-3">Capabilities</h4>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
						{#each project.capabilities as capability}
							<div class="flex items-start gap-3 p-3 rounded-lg bg-neutral-50 border border-neutral-100">
								<svg
									class="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<polyline points="20 6 9 17 4 12"></polyline>
								</svg>
								<span class="text-neutral-700 text-sm">{capability}</span>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</AlertDialog.Content>
</AlertDialog.Root> 