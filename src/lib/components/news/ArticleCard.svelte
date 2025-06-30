<script lang="ts">
  import type { Article } from '$lib/data/news';
  import { aurielTeam, authors } from '$lib/data/authors';
  import LogoIcon from '$lib/components/LogoIcon.svelte';
  
  export let article: Article;
  
  function getArticleUrl(article: Article): string {
    if (article.category === 'Press' && article.url) {
      return article.url;
    }
    return `/news/blog/${article.slug}`;
  }
</script>

<a 
  href={getArticleUrl(article)} 
  class="group" 
  target={article.category === 'Press' ? '_blank' : undefined} 
  rel={article.category === 'Press' ? 'noopener noreferrer' : undefined}
>
  <div class="bg-white rounded-lg p-6 h-full border border-neutral-200 transition-all duration-300 hover:border-neutral-400">
    <article class="flex flex-col h-full">
      <div class="space-y-4 flex-grow">
        <!-- Category Badge -->
        <div class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium {
          article.category === 'Blog' ? 'bg-emerald-50 text-emerald-700' :
          article.category === 'Press' ? 'bg-blue-50 text-blue-700' :
          'bg-purple-50 text-purple-700'
        }">
          {article.category}
        </div>
        
        <h2 class="text-xl font-medium text-neutral-900 group-hover:text-neutral-700">
          {article.title}
        </h2>
        
        {#if article.description}
          <p class="text-neutral-700 line-clamp-2 text-sm font-light">
            {article.description}
          </p>
        {/if}
      </div>

      <div class="mt-10 flex items-center gap-3 text-sm text-neutral-600">
        {#if authors[article.author]?.avatar}
          <img 
            src={authors[article.author].avatar} 
            alt={authors[article.author].name}
            class="w-8 h-8 rounded-full object-cover"
          />
        {:else if article.author === "Auriel Blog" || article.author === "Case Study"}
          <div class="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center">
            <LogoIcon size="w-5 h-5" class_="!stroke-neutral-50" />
          </div>
        {:else}
          <div class="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-xs font-medium">
            {article.author[0]}
          </div>
        {/if}
        <div class="flex flex-col">
          <span class="text-neutral-900">
            {authors[article.author]?.name || 
              (article.author === "Auriel Blog" || article.author === "Case Study" 
                ? aurielTeam.name 
                : article.author)}
          </span>
          <div class="flex items-center gap-2 text-neutral-500">
            <span>{article.date}</span>
            {#if article.readingTime}
              <span class="text-neutral-300">•</span>
              <span>{article.readingTime}</span>
            {/if}
          </div>
        </div>
        {#if article.category === 'Press'}
          <span class="ml-auto text-xs flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            External link
          </span>
        {/if}
      </div>
    </article>
  </div>
</a> 