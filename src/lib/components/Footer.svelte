<script>
	import LogoIcon from './LogoIcon.svelte';
	import { Github } from 'lucide-svelte';

	const legalLinks = [
		{ name: 'Legal', href: '/legal' },
	];
</script>

<footer class="bg-neutral-50 backdrop-blur-sm border-t border-neutral-200 text-neutral-400 py-5">
	<div class="container mx-auto max-w-7xl px-6 lg:px-4">
		<div class="flex flex-col lg:flex-row lg:justify-between lg:items-center items-center gap-4 lg:gap-0">
			<div class="flex flex-col lg:flex-row items-center lg:gap-8 text-center lg:text-left">
				<LogoIcon size="w-6 h-6" class_="stroke-neutral-400 hover:stroke-neutral-600" />
				<div class="text-xs space-y-0.5 mt-3 lg:mt-0">
					<p>Auriel Analytics Ltd. 11502141. All rights reserved.</p>
				</div>
			</div>
			<div class="flex gap-6 text-xs">
				{#each legalLinks as { name, href }}
					<a 
						{href}
						class="nav-link hover:text-neutral-600 transition-colors duration-300"
					>
						{name}
					</a>
				{/each}
				<a 
					href="https://github.com/Auriel-Analytics" 
					target="_blank" 
					rel="noopener noreferrer"
					class="hover:text-neutral-600 transition-colors duration-300 flex items-center"
				>
					<Github size={16} />
				</a>
			</div>
		</div>
	</div>
</footer> 