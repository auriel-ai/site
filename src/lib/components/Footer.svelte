<script>
	import LogoIcon from './LogoIcon.svelte';
	import { Github } from 'lucide-svelte';

	const legalLinks = [
		{ name: 'Legal', href: '/legal' },
	];
</script>

<footer class="bg-slate-800/80 backdrop-blur-md border-t border-slate-700 text-neutral-400 py-5 relative">
	<div class="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-30 pointer-events-none"></div>
	<div class="container mx-auto max-w-6xl px-6 lg:px-4 relative z-10">
		<div class="flex flex-col lg:flex-row lg:justify-between lg:items-center items-center gap-4 lg:gap-0">
			<div class="flex flex-col lg:flex-row items-center lg:gap-8 text-center lg:text-left">
				<LogoIcon size="w-6 h-6" class_="stroke-neutral-400 hover:stroke-white transition-colors" />
				<div class="text-xs space-y-0.5 mt-3 lg:mt-0">
					<p>Auriel Analytics Ltd. 11502141. All rights reserved.</p>
				</div>
			</div>
			<div class="flex gap-6 text-xs">
				{#each legalLinks as { name, href }}
					<a 
						{href}
						class="nav-link hover:text-white transition-colors duration-300 relative group"
					>
						<span>{name}</span>
						<span class="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
					</a>
				{/each}
				<a 
					href="https://github.com/auriel-ai" 
					target="_blank" 
					rel="noopener noreferrer"
					class="hover:text-white transition-colors duration-300 flex items-center"
				>
					<Github size={16} />
				</a>
			</div>
		</div>
	</div>
</footer> 