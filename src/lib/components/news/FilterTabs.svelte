<script lang="ts">
  import type { ArticleCategory } from '$lib/data/news';
  
  export let selectedCategory: 'All' | ArticleCategory;
  
  const categories: ('All' | ArticleCategory)[] = ['All', 'Blog', 'Press', 'Case Study'];
</script>

<div class="flex justify-start gap-3 mt-5 mb-2">
  {#each categories as category}
    <button 
      class="text-sm px-4 py-2 rounded-full border border-neutral-200 bg-white text-neutral-700 font-medium transition-colors focus:outline-none {selectedCategory === category ? 'ring-1 ring-neutral-800' : 'hover:bg-neutral-100'}"
      on:click={() => selectedCategory = category}
    >
      {category === 'Case Study' ? 'Case Studies' : category}
    </button>
  {/each}
</div> 