<script lang="ts">
	import { Toaster as Sonner, type ToasterProps as SonnerProps } from "svelte-sonner";
	import { mode } from "mode-watcher";

	let restProps: SonnerProps = $props();

	const toastClasses = {
		toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg font-orbitron tracking-wider",
		description: "group-[.toast]:text-neutral-700 text-xs leading-relaxed",
		actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
		cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
	};

	const toastStyle = "--font-sans: 'Space Grotesk', sans-serif;";
</script>

<Sonner
	theme={$mode}
	class="toaster group"
	toastOptions={{
		classes: toastClasses,
		style: toastStyle
	}}
	{...restProps}
/>
