<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
	import { page } from '$app/stores';
	
	// Props
	let { children } = $props();
	
	// Check if we're on the explore route
	const isGetStartedPage = $derived($page.url.pathname.startsWith('/explore'));
	
	// Font configuration
	const fonts = [
		{
			rel: 'preconnect',
			href: 'https://fonts.googleapis.com'
		},
		{
			rel: 'preconnect',
			href: 'https://fonts.gstatic.com',
			crossorigin: 'anonymous'
		},
		{
			rel: 'stylesheet',
			href: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600&display=swap'
		}
	] as const;
</script>

<svelte:head>
	{#each fonts as font}
		<link {...font} />
	{/each}
</svelte:head>

<Toaster />

{#if isGetStartedPage}
	<!-- For explore route, render just the content with no layout -->
	{@render children()}
{:else}
	<!-- For all other routes, render the full layout -->
	<div class="flex min-h-screen flex-col bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
		<Header />
		
		<main class="flex flex-1 relative">
			<div class="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
			<div class="w-full z-10">
				{@render children()}
			</div>
		</main>
		
		<Footer />
	</div>
{/if}

<style>
	.bg-grid-pattern {
		background-image: 
			linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
			linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
		background-size: 20px 20px;
	}
</style>
