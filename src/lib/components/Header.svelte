<script lang="ts">
  import Logo from './Logo.svelte';
  import LogoIcon from './LogoIcon.svelte';
  import { Plus, X } from 'lucide-svelte';
  import { fade, fly } from 'svelte/transition';
  
  let isClairvoyanceOpen = false;
  let isMobileMenuOpen = false;
  let isMobileClairvoyanceOpen = false;

  function handleNavClick() {
    isMobileMenuOpen = false;
    isMobileClairvoyanceOpen = false;
  }
</script>

<header 
  class="fixed top-0 left-0 right-0 z-40 py-6 px-6 {isMobileMenuOpen ? 'bg-slate-800 border-transparent' : 'bg-slate-900/80 border-slate-700'} backdrop-blur-md border-b"
>
  <nav class="container mx-auto max-w-6xl flex items-center justify-between relative">
    <!-- Logo container -->
    <div class="absolute left-0 top-1/2 -translate-y-1/2 z-50">
      {#if isMobileMenuOpen}
        <LogoIcon size="w-8 h-8" class_="stroke-white" />
      {:else}
        <Logo />
      {/if}
    </div>

    <!-- Desktop Navigation -->
    <div class="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">

      <a 
        href="https://solutions.auriel.tech"
        target="_blank"
        class="nav-link text-neutral-100 hover:text-white font-orbitron tracking-wider text-sm relative group"
      >
        <span>SERVICES</span>
        <span class="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
      </a>

      <a 
        href="/projects"
        class="nav-link text-neutral-100 hover:text-white font-orbitron tracking-wider text-sm relative group"
      >
        <span>PROJECTS</span>
        <span class="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
      </a>
      
      <a 
        href="/news"
        class="nav-link text-neutral-100 hover:text-white font-orbitron tracking-wider text-sm relative group"
      >
        <span>NEWS</span>
        <span class="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
      </a>
    </div>

    <!-- Enquire Button -->
    <div class="ml-auto">
      <a 
          href="/get-started"
          class="bg-white text-black font-orbitron font-medium py-3 px-5 rounded-full hover:bg-gray-100 transition-all duration-300"
          >
          GET STARTED
      </a>
    </div>

    <!-- Mobile Menu Trigger -->
    <button
      class="lg:hidden w-10 h-10 rounded-full border border-neutral-700 ml-auto flex items-center justify-center {isMobileMenuOpen ? 'border-white bg-white/10' : ''} transition-all"
      on:click={() => isMobileMenuOpen = !isMobileMenuOpen}
    >
      <div class="relative w-5 h-5">
        <div class="absolute inset-0 transition-opacity duration-300" class:opacity-0={isMobileMenuOpen}>
          <Plus 
            size={20} 
            class="text-neutral-300" 
          />
        </div>
        <div class="absolute inset-0 transition-opacity duration-300" class:opacity-0={!isMobileMenuOpen}>
          <X 
            size={20} 
            class="text-white" 
          />
        </div>
      </div>
    </button>
  </nav>
</header>

<!-- Mobile Navigation Menu -->
{#if isMobileMenuOpen}
  <div
    class="fixed inset-0 z-30 bg-slate-800/95 backdrop-blur-md pt-5"
    transition:fly={{ y: -100, duration: 300 }}
  >
    <div class="container mx-auto px-6 py-20">
      <div class="flex flex-col gap-6">
        
        <a 
          href="https://solutions.auriel.tech"
          target="_blank"
          on:click={handleNavClick}
          class="text-neutral-300 hover:text-white font-orbitron tracking-wider text-lg py-4 border-b border-neutral-800 transition-colors"
        >
          SERVICES
        </a>

        <a 
          href="/projects"
          on:click={handleNavClick}
          class="text-neutral-300 hover:text-white font-orbitron tracking-wider text-lg py-4 border-b border-neutral-800 transition-colors"
        >
          PROJECTS
        </a>

        <a 
          href="/news"
          on:click={handleNavClick}
          class="text-neutral-300 hover:text-white font-orbitron tracking-wider text-lg py-4 border-b border-neutral-800 transition-colors"
        >
          NEWS
        </a>

        <a 
          href="/get-started"
          on:click={handleNavClick}
          class="text-white hover:text-neutral-300 font-orbitron tracking-wider text-lg py-4 border-b border-neutral-800 transition-colors"
        >
          GET STARTED
        </a>
      </div>
    </div>
  </div>
{/if}

<style>
  /* Close dropdown when clicking outside */
  :global(body:has(.relative button[aria-expanded="true"])) {
    pointer-events: none;
  }
  .relative {
    pointer-events: auto;
  }
</style> 