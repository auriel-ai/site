<!-- src/lib/components/logos/SamLogo.svelte -->
<script lang="ts">
	export let size: 'sm' | 'md' | 'lg' | 'xl' = 'md';

	const sizeStyles = {
		sm: { text: 'text-3xl' },
		md: { text: 'text-4xl' },
		lg: { text: 'text-5xl' },
		xl: { text: 'text-6xl' }
	};
</script>

<div class="flex items-center">
	<span class="font-playwrite-au font-medium {sizeStyles[size].text}">Sam</span>
</div> 