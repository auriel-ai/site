<script>
	import LogoIcon from './LogoIcon.svelte';
	import { Github } from 'lucide-svelte';
</script>

<footer class="bg-white border-t border-neutral-100 text-neutral-700 py-8">
	<div class="container mx-auto max-w-7xl px-6 flex flex-col md:flex-row md:justify-between md:items-center gap-6">
		<!-- Left: Logo and company info -->
		<div class="flex items-center gap-3">
			<LogoIcon size="w-6 h-6" class_="stroke-neutral-700" />
			<span class="text-xs">Auriel Analytics Ltd. 11502141. All rights reserved.</span>
		</div>
		<!-- Right: Links -->
		<div class="flex gap-6 text-xs items-center">
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
				class="text-neutral-700 hover:text-black transition-colors duration-200 flex items-center"
				aria-label="Auriel GitHub"
			>
				<Github size={16} />
			</a>
		</div>
	</div>
</footer> 