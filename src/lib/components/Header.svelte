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
  <nav class="container mx-auto max-w-7xl flex items-center justify-between relative">
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
      
      <!-- Clairvoyance Dropdown -->
      <div class="relative">
        <button
          on:click={() => isClairvoyanceOpen = !isClairvoyanceOpen}
          class="flex items-center gap-1 text-neutral-400 hover:text-cyan-400 font-orbitron tracking-wider text-sm relative group"
        >
          <span>PRODUCT</span>
          <ChevronDown 
            size={16} 
            class="transition-transform duration-200" 
            style={isClairvoyanceOpen ? 'transform: rotate(180deg)' : ''} 
          />
          <span class="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
        </button>

        {#if isClairvoyanceOpen}
          <div
            role="menu"
            tabindex="0"
            class="absolute top-full right-0 mt-2 py-2 w-72 bg-neutral-900 border border-neutral-800 rounded-md shadow-lg"
            transition:fade={{ duration: 100 }}
            on:mouseleave={() => isClairvoyanceOpen = false}
          >
              <a
              href="/start"
              role="menuitem"
              class="px-4 py-2 text-sm font-orbitron tracking-wider text-neutral-400 hover:text-cyan-400 flex items-center justify-between gap-3 transition-colors"
            >
              <span>SELF-HOST</span>
            </a>
            <div
              role="menuitem"
              class="px-4 py-2 text-sm font-orbitron tracking-wider text-neutral-600 cursor-not-allowed flex items-center justify-between gap-3"
            >
              <span>LIVE DEMO</span>
              <span class="text-[10px] text-neutral-600 whitespace-nowrap">(COMING SOON)</span>
            </div>
            <div
              role="menuitem"
              class="px-4 py-2 text-sm font-orbitron tracking-wider text-neutral-600 cursor-not-allowed flex items-center justify-between gap-3"
            >
              <span>ROADMAP</span>
              <span class="text-[10px] text-neutral-600 whitespace-nowrap">(COMING SOON)</span>
            </div>
            <div
              role="menuitem"
              class="px-4 py-2 text-sm font-orbitron tracking-wider text-neutral-600 cursor-not-allowed flex items-center justify-between gap-3"
            >
              <span>DOCS</span>
              <span class="text-[10px] text-neutral-600 whitespace-nowrap">(COMING SOON)</span>
            </div>
          </div>
        {/if}
      </div>

      <a 
        href="/community"
        class="nav-link text-neutral-400 hover:text-cyan-400 font-orbitron tracking-wider text-sm cursor-not-allowed relative group"
        aria-disabled="true"
        on:click|preventDefault
      >
        <span>COMMUNITY</span>
        <span class="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
      </a>
      
    </div>

    <!-- Enquire Button -->
    <div class="ml-auto">
      <a 
          href="/enquire"
          class="bg-transparent border border-cyan-500 hover:bg-cyan-500/10 text-cyan-400 px-8 py-2 rounded transition-all shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] font-orbitron text-sm lg:text-base hidden lg:flex"
      >
          WORK WITH US &gt;&gt;
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
        
        <!-- Mobile Clairvoyance Section -->
        <div>
          <button
            on:click={() => isMobileClairvoyanceOpen = !isMobileClairvoyanceOpen}
            class="w-full flex items-center justify-between text-neutral-300 hover:text-cyan-400 font-orbitron tracking-wider text-lg py-4 border-b border-neutral-800 transition-colors"
          >
            <span>CLAIRVOYANCE</span>
            <ChevronDown 
              size={20} 
              class="transition-transform duration-200" 
              style={isMobileClairvoyanceOpen ? 'transform: rotate(180deg)' : ''} 
            />
          </button>

          {#if isMobileClairvoyanceOpen}
            <div class="pl-4 mt-2 flex flex-col gap-4" transition:fade={{ duration: 200 }}>
              <a 
                href="/start"
                class="text-neutral-300 hover:text-cyan-400 font-orbitron tracking-wider text-base py-4 border-b border-neutral-800 transition-colors"
                on:click={handleNavClick}
              >
                SELF-HOST
              </a>
              <div class="text-neutral-600 font-orbitron tracking-wider text-base py-4 border-b border-neutral-800 flex items-center justify-between">
                <span>LIVE DEMO</span>
                <span class="text-[10px] whitespace-nowrap">(COMING SOON)</span>
              </div>
              <div class="text-neutral-600 font-orbitron tracking-wider text-base py-4 border-b border-neutral-800 flex items-center justify-between">
                <span>ROADMAP</span>
                <span class="text-[10px] whitespace-nowrap">(COMING SOON)</span>
              </div>
              <div class="text-neutral-600 font-orbitron tracking-wider text-base py-4 border-b border-neutral-800 flex items-center justify-between">
                <span>DOCS</span>
                <span class="text-[10px] whitespace-nowrap">(COMING SOON)</span>
              </div>
            </div>
          {/if}
        </div>

        <a 
          href="/community"
          class="text-neutral-300 hover:text-cyan-400 font-orbitron tracking-wider text-lg py-4 border-b border-neutral-800 transition-colors cursor-not-allowed"
          aria-disabled="true"
          on:click|preventDefault
        >
          COMMUNITY
        </a>
        
        <a 
          href="/merch"
          class="text-neutral-300 hover:text-cyan-400 font-orbitron tracking-wider text-lg py-4 border-b border-neutral-800 transition-colors cursor-not-allowed"
          aria-disabled="true"
          on:click|preventDefault
        >
          MERCH
        </a>

        <a 
          href="/enquire"
          on:click={handleNavClick}
          class="text-cyan-400 hover:text-cyan-300 font-orbitron tracking-wider text-lg py-4 border-b border-neutral-800 transition-colors"
        >
          WORK WITH US >>
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