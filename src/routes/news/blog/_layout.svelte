<script>
  import { fade } from 'svelte/transition';
  import { ArrowLeft } from 'lucide-svelte';
  import { authors, aurielTeam } from '$lib/data/authors';
  import LogoIcon from '$lib/components/LogoIcon.svelte';
  
  // The mdsvex layout receives these props
  export let title;
  export let date;
  export let author = "Auriel Team";
  export let description = "";
  export let category = "Blog";
  export let company = ""; // For case studies
</script>

<div 
  in:fade={{ duration: 300, delay: 150 }}
  class="container mx-auto max-w-4xl px-4 py-8"
>
  <!-- Back Link -->
  <div class="mb-12">
    <a href="/news" class="flex items-center text-neutral-600 hover:text-neutral-900 transition-colors text-xs font-orbitron tracking-widest">
      <ArrowLeft class="mr-2" size={16} />
      BACK TO THE MAIN BLOG
    </a>
  </div>

  <!-- Article Header -->
  <div class="mb-10 space-y-5">
    <!-- Category Badge -->
    <div class="flex items-center gap-2">
      <div class="w-5 h-5 rounded-full flex items-center justify-center {
        category === 'Blog' ? 'bg-emerald-50 text-emerald-600' :
        category === 'Press' ? 'bg-blue-50 text-blue-600' :
        'bg-amber-50 text-amber-600'
      }">
        {#if category === 'Blog'}
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path><path d="M18 14h-8"></path><path d="M15 18h-5"></path><path d="M10 6h8v4h-8V6Z"></path></svg>
        {:else if category === 'Press'}
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path><path d="M16 13H8"></path><path d="M16 17H8"></path><path d="M10 9H8"></path></svg>
        {:else}
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h20"></path><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path><path d="m7 21 5-5 5 5"></path></svg>
        {/if}
      </div>
      <span class="text-xs tracking-wider font-medium {
        category === 'Blog' ? 'text-emerald-600' :
        category === 'Press' ? 'text-blue-600' :
        'text-amber-600'
      }">{category}</span>
    </div>

    <!-- Date -->
    <div class="text-neutral-400 text-sm tracking-wide font-mono">{date}</div>

    <!-- Title -->
    <h1 class="text-5xl font-semibold text-neutral-900 tracking-tight leading-tight">
      {title}
    </h1>

    <!-- Description -->
    {#if description}
      <p class="text-md text-neutral-600 font-light leading-relaxed max-w-3xl">
        {description}
      </p>
    {/if}

    <!-- Author and Read Time -->
    <div class="flex items-center gap-4 text-sm text-neutral-600 pt-2">
      <div class="flex items-center gap-2">
        {#if authors[author]?.avatar}
          <img 
            src={authors[author].avatar} 
            alt={authors[author].name}
            class="w-12 h-12 rounded-full object-cover"
          />
        {:else if author === "Auriel Blog" || author === "Case Study"}
          <div class="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center">
            <LogoIcon size="w-5 h-5" class_="!stroke-neutral-50" />
          </div>
        {:else}
          <div class="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center text-xs font-medium">
            {author[0]}
          </div>
        {/if}
        <div class="space-y-1">
          <span class="font-light text-neutral-800">
            <span>Posted By</span> {authors[author]?.name || (author === "Auriel Blog" || author === "Case Study" ? aurielTeam.name : author)}
          </span>
        </div>
      </div>
      <span class="text-neutral-400">•</span>
      <span class="font-light">1 minutes read</span>
    </div>
  </div>

  <!-- Content Separator -->
  <div class="w-full h-px bg-neutral-200 mb-16"></div>
  
  <!-- Article Content -->
  <article class="article-content mb-40">
    <slot />
  </article>
</div>

<style>
  /* Base article content styles */
  :global(.article-content) {
    color: #374151;
    font-size: 1rem;
    line-height: 1.75;
    font-family: 'Inter', sans-serif;
    max-width: 90ch;
  }

  /* Headings */
  :global(.article-content h1) {
    color: #111827;
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.2;
    margin: 2.5rem 0 1.25rem;
  }

  :global(.article-content h2) {
    color: #111827;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.3;
    margin: 2rem 0 1rem;
  }

  :global(.article-content h3) {
    color: #111827;
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.4;
    margin: 1.5rem 0 0.75rem;
  }

  /* Paragraphs */
  :global(.article-content p) {
    margin: 1rem 0;
    font-weight: 300;
  }

  /* Lists */
  :global(.article-content ul),
  :global(.article-content ol) {
    margin: 1rem 0;
    padding-left: 1.25rem;
  }

  :global(.article-content ul) {
    list-style-type: disc;
  }

  :global(.article-content ol) {
    list-style-type: decimal;
  }

  :global(.article-content li) {
    margin: 0.5rem 0;
    font-weight: 300;
  }

  /* Links */
  :global(.article-content a) {
    color: #2563eb;
    text-decoration: none;
    border-bottom: 1px solid #93c5fd;
    transition: border-color 0.2s ease;
  }

  :global(.article-content a:hover) {
    border-color: #2563eb;
  }

  /* Blockquotes */
  :global(.article-content blockquote) {
    margin: 1.5rem 0;
    padding: 0.75rem 1.25rem;
    border-left: 3px solid #e5e7eb;
    background: #f8fafc;
    color: #4b5563;
    font-style: italic;
    font-weight: 300;
  }

  /* Code blocks */
  :global(.article-content pre) {
    margin: 1.5rem 0;
    padding: 1rem;
    background: #1e293b;
    border-radius: 0.375rem;
    overflow-x: auto;
  }

  :global(.article-content code) {
    font-family: ui-monospace, monospace;
    font-size: 0.875em;
  }

  :global(.article-content :not(pre) > code) {
    background: #f1f5f9;
    color: #0f172a;
    padding: 0.2em 0.4em;
    border-radius: 0.25rem;
    font-size: 0.875em;
  }

  /* Images */
  :global(.article-content img) {
    margin: 1.5rem 0;
    max-width: 100%;
    height: auto;
    border-radius: 0.375rem;
  }

  /* Tables */
  :global(.article-content table) {
    width: 100%;
    margin: 1.5rem 0;
    border-collapse: collapse;
    font-size: 0.875rem;
  }

  :global(.article-content th),
  :global(.article-content td) {
    padding: 0.625rem;
    border: 1px solid #e5e7eb;
    text-align: left;
  }

  :global(.article-content th) {
    background: #f8fafc;
    font-weight: 500;
  }

  /* Horizontal rule */
  :global(.article-content hr) {
    margin: 2rem 0;
    border: 0;
    border-top: 1px solid #e5e7eb;
  }
</style> 