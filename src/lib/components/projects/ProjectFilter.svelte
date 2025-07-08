<script lang="ts">
	export let selectedFilter: 'All' | 'Agents' | 'Tools';

	const filters: ('All' | 'Agents' | 'Tools')[] = ['All', 'Agents', 'Tools'];
</script>

<div class="mb-8 flex justify-center gap-3 md:justify-start">
	{#each filters as filter}
		<button
			class="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition-colors focus:outline-none {selectedFilter ===
			filter
				? 'ring-1 ring-neutral-800'
				: 'hover:bg-neutral-100'}"
			on:click={() => (selectedFilter = filter)}
		>
			{filter}
		</button>
	{/each}
</div> 