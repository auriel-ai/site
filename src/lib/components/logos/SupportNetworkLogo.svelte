<!-- src/lib/components/logos/SupportNetworkLogo.svelte -->
<script lang="ts">
	import AurielLogo from '../Logo.svelte';
	export let size: 'sm' | 'md' | 'lg' | 'xl' = 'md';

	const sizeClasses = {
		sm: 'text-xs',
		md: 'text-sm',
		lg: 'text-base',
		xl: 'text-lg'
	};
</script>

<div class="flex flex-col items-center justify-center gap-1">
	<AurielLogo />
	<div class="relative">
		<span class="relative z-10 font-medium text-neutral-800 {sizeClasses[size]}">
			Support Network
		</span>
		<div class="absolute -inset-x-1 inset-y-0 bg-amber-200/50 transform -rotate-2 z-0 rounded-sm"></div>
	</div>
</div> 