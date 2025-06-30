<script lang="ts">
  import { fade } from 'svelte/transition';
  import type { Article, ArticleCategory } from '$lib/data/news';
  import FilterTabs from '$lib/components/news/FilterTabs.svelte';
  import ArticleCard from '$lib/components/news/ArticleCard.svelte';
  import EmptyState from '$lib/components/news/EmptyState.svelte';
  
  export let data;
  
  let articles: Article[] = data.articles;
  let selectedCategory: 'All' | ArticleCategory = 'All';
  
  $: filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);
</script>

<div 
  in:fade={{ duration: 300, delay: 150 }}
  class="container mx-auto max-w-7xl px-4 py-8 pb-40 md:pb-60"
>
  <!-- Page Header -->
  <div class="mb-10 md:mb-12 space-y-4 md:space-y-5">
    <h1 class="text-3xl md:text-4xl font-medium text-neutral-900 text-left">
      News
    </h1>
    <p class="text-base md:text-lg text-neutral-600 leading-relaxed max-w-2xl font-light">
      Compiled notes from the team
    </p>
  </div>

  <!-- Filter Tabs -->
  <FilterTabs bind:selectedCategory />

  <!-- Articles Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-10">
    {#if filteredArticles.length === 0}
      <EmptyState />
    {:else}
      {#each filteredArticles as article}
        <ArticleCard {article} />
      {/each}
    {/if}
  </div>
</div>

<style>
  /* Optional: line-clamp utility if not using Tailwind's line-clamp plugin */
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style> 