<script lang="ts">
  import { fade } from 'svelte/transition';
  import type { Article, ArticleCategory } from '$lib/data/news';
  
  export let data;
  let articles: Article[] = data.articles;
  
  let selectedFilter: 'All' | ArticleCategory = 'All';
  
  $: filteredArticles = selectedFilter === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedFilter);

  // Helper function to determine article URL
  function getArticleUrl(article: Article): string {
    // For press, use the external URL
    if (article.category === 'Press' && article.url) {
      return article.url;
    }
    
    // For blog and case study, use internal routing
    return `/news/${article.category.toLowerCase().replace(' ', '-')}/${article.slug}`;
  }
</script>

<div 
  in:fade={{ duration: 300, delay: 150 }}
  class="container mx-auto max-w-2xl px-6 lg:px-4 py-32 lg:py-36 relative"
>
  <div class="absolute inset-0 bg-gradient-radial from-amber-500/10 to-transparent opacity-20 blur-3xl pointer-events-none"></div>
  
  <!-- Page Header -->
  <div class="relative mb-16">
    <h1 class="text-4xl font-orbitron tracking-wider text-neutral-100 mb-10 text-left">
      News
    </h1>
  
    <!-- Filter Tabs -->
    <div class="flex justify-start gap-5 mb-2">
      <button 
        class="text-sm transition-colors {selectedFilter === 'All' ? 'text-white' : 'text-neutral-400 hover:text-neutral-200'}"
        on:click={() => selectedFilter = 'All'}
      >
        <div class="flex items-center gap-2">
          <div class="w-4 h-4 rounded-sm flex items-center justify-center border border-neutral-700 {selectedFilter === 'All' ? 'bg-amber-900/50 border-amber-500' : ''}">
            {#if selectedFilter === 'All'}
              <div class="w-2 h-2 bg-amber-400 rounded-sm"></div>
            {/if}
          </div>
          All
        </div>
      </button>
      <button 
        class="text-sm transition-colors {selectedFilter === 'Blog' ? 'text-white' : 'text-neutral-400 hover:text-neutral-200'}"
        on:click={() => selectedFilter = 'Blog'}
      >
        <div class="flex items-center gap-2">
          <div class="w-4 h-4 rounded-sm flex items-center justify-center border border-neutral-700 {selectedFilter === 'Blog' ? 'bg-amber-900/50 border-amber-500' : ''}">
            {#if selectedFilter === 'Blog'}
              <div class="w-2 h-2 bg-amber-400 rounded-sm"></div>
            {/if}
          </div>
          Blog
        </div>
      </button>
      <button 
        class="text-sm transition-colors {selectedFilter === 'Press' ? 'text-white' : 'text-neutral-400 hover:text-neutral-200'}"
        on:click={() => selectedFilter = 'Press'}
      >
        <div class="flex items-center gap-2">
          <div class="w-4 h-4 rounded-sm flex items-center justify-center border border-neutral-700 {selectedFilter === 'Press' ? 'bg-amber-900/50 border-amber-500' : ''}">
            {#if selectedFilter === 'Press'}
              <div class="w-2 h-2 bg-amber-400 rounded-sm"></div>
            {/if}
          </div>
          Press
        </div>
      </button>
      <button 
        class="text-sm transition-colors {selectedFilter === 'Case Study' ? 'text-white' : 'text-neutral-400 hover:text-neutral-200'}"
        on:click={() => selectedFilter = 'Case Study'}
      >
        <div class="flex items-center gap-2">
          <div class="w-4 h-4 rounded-sm flex items-center justify-center border border-neutral-700 {selectedFilter === 'Case Study' ? 'bg-amber-900/50 border-amber-500' : ''}">
            {#if selectedFilter === 'Case Study'}
              <div class="w-2 h-2 bg-amber-400 rounded-sm"></div>
            {/if}
          </div>
          Case Studies
        </div>
      </button>
    </div>
  </div>
  
  <!-- Articles Timeline -->
  <div class="relative mx-auto">
    <!-- Timeline vertical line -->
    <div class="absolute left-[22px] top-2 bottom-0 w-px bg-neutral-800"></div>
    
    <div class="space-y-14">
      {#each filteredArticles as article, i}
        <div class="relative pl-16">
          <!-- Category Icon -->
          <div class="absolute left-0 top-0">
            {#if article.category === 'Blog'}
              <div class="w-11 h-11 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-neutral-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path><path d="M18 14h-8"></path><path d="M15 18h-5"></path><path d="M10 6h8v4h-8V6Z"></path></svg>
              </div>
            {:else if article.category === 'Press'}
              <div class="w-11 h-11 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-neutral-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path><path d="M15 5v14"></path></svg>
              </div>
            {:else}
              <div class="w-11 h-11 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-neutral-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 5H6a3 3 0 0 0-3 3v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8a3 3 0 0 0-3-3Z"></path><path d="M17 13h.01"></path><path d="M12 13h.01"></path><path d="M7 13h.01"></path><path d="M7 9h.01"></path><path d="M22 9a6 6 0 0 0-10.712-3.714M2 9h.01"></path><path d="M22 5V3a1 1 0 0 0-1-1h-3"></path><path d="M18 20v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6"></path></svg>
              </div>
            {/if}
          </div>
          
          <!-- Article Content -->
          <a 
            href={getArticleUrl(article)} 
            class="group block"
            target={article.category === 'Press' ? '_blank' : undefined}
            rel={article.category === 'Press' ? 'noopener noreferrer' : undefined}
          >
            <div class="flex flex-col">
              <!-- Title with different sizes based on featured status -->
              <h3 class="{article.featured ? 'text-2xl font-medium' : 'text-xl font-normal'} text-white group-hover:underline transition-colors mb-2">
                {article.title}
              </h3>
              
              <!-- Author and date -->
              <div class="flex items-center gap-3 text-sm text-neutral-500">
                <span>By {article.author}</span>
                <span class="text-neutral-600">•</span>
                <span>{article.date}</span>
                {#if article.category === 'Press'}
                  <span class="text-neutral-600">•</span>
                  <span class="text-xs flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    External link
                  </span>
                {/if}
              </div>
            </div>
          </a>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .bg-gradient-radial {
    background-image: radial-gradient(var(--tw-gradient-stops));
  }
  
  /* Optional: line-clamp utility if not using Tailwind's line-clamp plugin */
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style> 