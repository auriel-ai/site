<script>
  import Logo from './Logo.svelte';
  import LogoIcon from './LogoIcon.svelte';
  import { ChevronDown, Plus, X } from 'lucide-svelte';
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
  class="fixed top-0 left-0 right-0 z-40 py-4 px-6 {isMobileMenuOpen ? 'bg-neutral-900 border-transparent' : 'bg-neutral-950/80 border-neutral-800'} backdrop-blur-md border-b"
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
        href="/about"
        class="nav-link text-neutral-400 hover:text-cyan-400 font-orbitron tracking-wider text-sm relative group"
      >
        <span>ABOUT</span>
        <span class="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
    </a>
      
      <a 
        href="/tooling"
        class="nav-link text-neutral-400 hover:text-cyan-400 font-orbitron tracking-wider text-sm relative group"
      >
        <span>TOOLING</span>
        <span class="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
      </a>

      <a 
      href="/agents"
      class="nav-link text-neutral-400 hover:text-cyan-400 font-orbitron tracking-wider text-sm relative group"
    >
      <span>AGENTS</span>
      <span class="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
    </a>

    </div>

    <!-- Enquire Button -->
    <div class="ml-auto">
      <a 
          href="/enquire"
          class="bg-transparent border border-cyan-500 hover:bg-cyan-500/10 text-cyan-400 px-8 py-2 rounded transition-all shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] font-orbitron text-sm lg:text-base hidden lg:flex"
      >
          CONTACT US &gt;&gt;
      </a>
    </div>

    <!-- Mobile Menu Trigger -->
    <button
      class="lg:hidden w-10 h-10 rounded-full border border-neutral-700 ml-auto flex items-center justify-center {isMobileMenuOpen ? 'border-cyan-500 bg-cyan-500/10' : ''} transition-all"
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
            class="text-cyan-400" 
          />
        </div>
      </div>
    </button>
  </nav>
</header>

<!-- Mobile Navigation Menu -->
{#if isMobileMenuOpen}
  <div
    class="fixed inset-0 z-30 bg-neutral-900/95 backdrop-blur-md pt-5"
    transition:fly={{ y: -100, duration: 300 }}
  >
    <div class="container mx-auto px-6 py-20">
      <div class="flex flex-col gap-6">
        <a 
          href="/about"
          on:click={handleNavClick}
          class="text-neutral-300 hover:text-cyan-400 font-orbitron tracking-wider text-lg py-4 border-b border-neutral-800 transition-colors"
        >
          ABOUT
        </a>
        
        <a 
          href="/agents"
          on:click={handleNavClick}
          class="text-neutral-300 hover:text-cyan-400 font-orbitron tracking-wider text-lg py-4 border-b border-neutral-800 transition-colors"
        >
          AGENTS
        </a>
        
        <a 
          href="/tooling"
          on:click={handleNavClick}
          class="text-neutral-300 hover:text-cyan-400 font-orbitron tracking-wider text-lg py-4 border-b border-neutral-800 transition-colors"
        >
          TOOLING
        </a>

        <a 
          href="/"
          class="text-neutral-300 hover:text-cyan-400 font-orbitron tracking-wider text-lg py-4 border-b border-neutral-800 transition-colors cursor-not-allowed"
          aria-disabled="true"
          on:click|preventDefault
        >
          COMMUNITY
        </a>

        <a 
          href="/enquire"
          on:click={handleNavClick}
          class="text-cyan-400 hover:text-cyan-300 font-orbitron tracking-wider text-lg py-4 border-b border-neutral-800 transition-colors"
        >
          CONTACT US >>
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