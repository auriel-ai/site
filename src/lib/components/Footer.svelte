<script lang="ts">
	import LogoIcon from './LogoIcon.svelte';
	import { Github, ExternalLink } from 'lucide-svelte';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	
	let sentinelElement: HTMLElement;
	let isVisible = false;
	
	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						isVisible = true;
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1 }
		);
		
		if (sentinelElement) {
			observer.observe(sentinelElement);
		}
		
		return () => {
			if (sentinelElement) {
				observer.unobserve(sentinelElement);
			}
		};
	});
</script>

<!-- Sentinel element to trigger footer animation -->
<div bind:this={sentinelElement} class="h-1"></div>

{#if isVisible}
	<footer 
		in:fly={{ y: 50, duration: 800 }}
		class="bg-white border-t border-neutral-100 text-neutral-700 py-8"
	>
		<div class="container mx-auto max-w-7xl px-6 flex flex-col md:flex-row md:justify-between md:items-center gap-y-4">
			<!-- Left: Logo and company info -->
			<div class="flex items-center gap-3 justify-center">
				<LogoIcon size="w-6 h-6" class_="stroke-neutral-700" />
				<span class="text-xs text-center">Auriel Analytics Ltd. 11502141. All rights reserved.</span>
			</div>
			<!-- Right: Links -->
			<div class="flex gap-6 text-xs items-center justify-center">
				<a
					href="/terms"
					class="relative text-neutral-700 hover:text-black transition-colors duration-200 group no-underline"
					aria-label="Terms of Service"
				>
					<span class="inline-block">Terms</span>
				</a>
				<a
					href="/privacy"
					class="relative text-neutral-700 hover:text-black transition-colors duration-200 group no-underline"
					aria-label="Privacy Policy"
				>
					<span class="inline-block">Privacy</span>
				</a>
				<a
					href="https://github.com/auriel-ai"
					target="_blank"
					rel="noopener noreferrer"
					class="text-neutral-700 hover:text-black transition-colors duration-200 flex items-center gap-1 group"
					aria-label="Auriel GitHub"
				>
					<Github size={18} class="group-hover:scale-110 transition-transform duration-200" />
					<ExternalLink size={14} class="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
				</a>
			</div>
		</div>
	</footer>
{/if} 