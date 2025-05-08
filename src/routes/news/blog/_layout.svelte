<script>
  import { fade } from 'svelte/transition';
  
  // The mdsvex layout receives these props
  export let title;
  export let date;
  export let author = "Auriel Team";
</script>

<div 
  in:fade={{ duration: 300, delay: 150 }}
  class="container mx-auto max-w-3xl px-6 lg:px-4 py-32 lg:py-36 relative"
>
  <div class="absolute inset-0 bg-gradient-radial from-cyan-500/10 to-transparent opacity-20 blur-3xl pointer-events-none"></div>
  
  <!-- Back Link -->
  <div class="mb-8">
    <a href="/news" class="flex items-center text-neutral-400 hover:text-cyan-400 transition-colors text-sm">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="m15 18-6-6 6-6"/></svg>
      Back to News
    </a>
  </div>
  
  <!-- Article Header -->
  <header class="mb-10">
    <div class="flex items-center gap-2 mb-4">
      <div class="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path><path d="M18 14h-8"></path><path d="M15 18h-5"></path><path d="M10 6h8v4h-8V6Z"></path></svg>
      </div>
      <span class="text-xs text-emerald-400 uppercase tracking-wider font-medium">Blog</span>
    </div>
    
    <h1 class="text-3xl lg:text-4xl font-orbitron text-white mb-4">
      {title}
    </h1>
    
    <div class="flex items-center gap-3 text-sm text-neutral-500">
      <span>By {author}</span>
      <span class="text-neutral-600">•</span>
      <span>{date}</span>
    </div>
  </header>
  
  <!-- Article Content - Markdown gets inserted here -->
  <article class="prose prose-invert prose-cyan max-w-none">
    <!-- Markdown content from the .md file gets injected here -->
    <slot />
  </article>
</div>

<style>
  .bg-gradient-radial {
    background-image: radial-gradient(var(--tw-gradient-stops));
  }
  
  /* Basic styling for the prose content */
  :global(.prose) {
    color: rgb(212, 212, 212);
    max-width: 65ch;
    font-size: 1rem;
    line-height: 1.75;
  }
  
  :global(.prose h1) {
    color: white;
    font-weight: 700;
    font-size: 2.25em;
    margin-top: 0;
    margin-bottom: 0.8888889em;
    line-height: 1.1111111;
    font-family: 'Orbitron', sans-serif;
  }
  
  :global(.prose h2) {
    color: white;
    font-weight: 600;
    margin-top: 2em;
    margin-bottom: 1em;
    font-family: 'Orbitron', sans-serif;
    font-size: 1.5em;
    line-height: 1.3333333;
  }
  
  :global(.prose p) {
    margin-top: 1.25em;
    margin-bottom: 1.25em;
  }
  
  :global(.prose a) {
    color: rgb(34, 211, 238);
    text-decoration: underline;
    font-weight: 500;
  }
  
  :global(.prose blockquote) {
    font-style: italic;
    color: rgb(176, 176, 176);
    border-left-width: 4px;
    border-left-color: rgb(45, 55, 72);
    padding-left: 1.5rem;
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
    color: theme('colors.neutral.300');
    line-height: 1.75;
    margin-bottom: 2rem;
  }
</style> 