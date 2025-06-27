<script>
  import { fade } from 'svelte/transition';
  
  // The mdsvex layout receives these props
  export let title;
  export let date;
  export let company = "";
  export let author = "Auriel Team";
</script>

<div 
  in:fade={{ duration: 300, delay: 150 }}
  class="container mx-auto max-w-3xl px-4 py-16 bg-[#f7f9f8]"
>
  <!-- Back Link -->
  <div class="mb-8">
    <a href="/news" class="flex items-center text-neutral-500 hover:text-neutral-900 transition-colors text-sm">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="m15 18-6-6 6-6"/></svg>
      Back to News
    </a>
  </div>
  
  <!-- Article Header -->
  <header class="mb-10">
    <div class="flex items-center gap-2 mb-4">
      <div class="w-5 h-5 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h20"></path><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path><path d="m7 21 5-5 5 5"></path></svg>
      </div>
      <span class="text-xs text-amber-600 uppercase tracking-wider font-medium">Case Study</span>
    </div>
    
    <h1 class="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
      {title}
    </h1>
    
    <div class="flex items-center gap-3 text-sm text-neutral-500">
      {#if company}
        <span>{company}</span>
        <span class="text-neutral-400">•</span>
      {/if}
      <span>By {author}</span>
      <span class="text-neutral-400">•</span>
      <span>{date}</span>
    </div>
  </header>
  
  <!-- Article Content - Markdown gets inserted here -->
  <article class="prose max-w-none">
    <!-- Markdown content from the .md file gets injected here -->
    <slot />
  </article>
</div>

<style>
  :global(.prose) {
    color: #232323;
    max-width: 65ch;
    font-size: 1rem;
    line-height: 1.75;
    font-family: 'Inter', sans-serif;
  }
  
  :global(.prose h1) {
    color: #18181b;
    font-weight: 700;
    font-size: 2.25em;
    margin-top: 0;
    margin-bottom: 0.8888889em;
    line-height: 1.1111111;
    font-family: 'Inter', sans-serif;
  }
  
  :global(.prose h2) {
    color: #232323;
    font-weight: 600;
    margin-top: 2em;
    margin-bottom: 1em;
    font-family: 'Inter', sans-serif;
    font-size: 1.5em;
    line-height: 1.3333333;
  }
  
  :global(.prose p) {
    margin-top: 1.25em;
    margin-bottom: 1.25em;
  }
  
  :global(.prose a) {
    color: #2563eb;
    text-decoration: underline;
    font-weight: 500;
  }
  
  :global(.prose blockquote) {
    font-style: italic;
    color: #666;
    border-left-width: 4px;
    border-left-color: #e5e7eb;
    padding-left: 1.5rem;
    background: #f3f4f6;
  }
  
  :global(.prose ul), :global(.prose ol) {
    padding-left: 1.625em;
  }
  
  :global(.prose li) {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }
  
  article :global(.lead) {
    font-size: 1.125rem;
    color: #52525b;
    line-height: 1.75;
    margin-bottom: 2rem;
  }
</style> 