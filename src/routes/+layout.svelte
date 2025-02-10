<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
	import { page } from '$app/stores';
	
	// Props
	let { children } = $props();
	
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

<div class="flex min-h-screen flex-col bg-gradient-to-b from-white via-neutral-100 to-white">
	<Header />
	
	<main class="flex flex-1">
		{@render children()}
	</main>
	
	<Footer />
</div>
