<script lang="ts">
  import Logo from './Logo.svelte';
  import LogoIcon from './LogoIcon.svelte';
  import { ChevronDown, Plus, X } from 'lucide-svelte';
  import { fade, fly } from 'svelte/transition';
  
  let isClairvoyanceOpen = false;
  let isMobileMenuOpen = false;
  let isMobileClairvoyanceOpen = false;
  let isProductsOpen = false;
  let productsCloseTimeout: ReturnType<typeof setTimeout> | undefined;

  function openProductsMenu() {
    clearTimeout(productsCloseTimeout);
    isProductsOpen = true;
  }

  function closeProductsMenu() {
    productsCloseTimeout = setTimeout(() => {
      isProductsOpen = false;
    }, 300); // 300ms delay before closing
  }

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
        class="nav-link text-neutral-100 hover:text-cyan-400 font-orbitron tracking-wider text-sm relative group"
      >
        <span>ABOUT</span>
        <span class="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
      </a>
      
      <!-- Products Flyout -->
      <div class="relative group" on:mouseenter={openProductsMenu} on:mouseleave={closeProductsMenu}>
        <button
          class="nav-link flex items-center gap-1 text-neutral-100 hover:text-cyan-400 font-orbitron tracking-wider text-sm relative group focus:outline-none"
          aria-haspopup="true"
          aria-expanded={isProductsOpen}
        >
          <span>PRODUCTS</span>
          <ChevronDown class={`w-4 h-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
        </button>
        
        <!-- Safety buffer to prevent accidental menu closing -->
        {#if isProductsOpen}
          <div class="absolute -bottom-3 left-0 right-0 h-8 z-40" on:mouseenter={openProductsMenu}></div>
          
          <div 
            class="absolute left-0 mt-5 w-40 bg-neutral-900 border border-neutral-800 rounded-lg shadow-lg py-2 z-50" 
            transition:fade={{ duration: 150 }}
            on:mouseenter={openProductsMenu}
            on:mouseleave={closeProductsMenu}
          >
            <a href="/agents" class="block px-4 py-2.5 text-neutral-300 hover:text-cyan-400 transition-colors font-orbitron text-sm">
              AGENTS
            </a>
            <a href="/tooling" class="block px-4 py-2.5 text-neutral-300 hover:text-cyan-400 transition-colors font-orbitron text-sm">
              DEVTOOLS
            </a>
          </div>
        {/if}
      </div>

      <a 
        href="https://network.auriel.tech"
        target="_blank"
        class="nav-link text-neutral-100 hover:text-cyan-400 font-orbitron tracking-wider text-sm relative group"
      >
        <span>NETWORK</span>
        <span class="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
      </a>
      
      <a 
        href="/news"
        class="nav-link text-neutral-100 hover:text-cyan-400 font-orbitron tracking-wider text-sm relative group"
      >
        <span>NEWS</span>
        <span class="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
      </a>
    </div>

    <!-- Enquire Button -->
    <div class="ml-auto">
      <a 
          href="/get-started"
          class="bg-transparent border border-cyan-500 hover:bg-cyan-500/10 text-cyan-400 px-8 py-2 rounded transition-all shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] font-orbitron text-sm lg:text-base hidden lg:flex"
      >
          GET STARTED &gt;&gt;
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
        
        <!-- Products group for mobile -->
        <div>
          <div class="text-neutral-400 font-orbitron tracking-wider text-xs uppercase mb-2 mt-4">Products</div>
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
            DEVTOOLS
          </a>
        </div>
        
        <a 
          href="https://network.auriel.tech"
          on:click={handleNavClick}
          class="text-neutral-300 hover:text-cyan-400 font-orbitron tracking-wider text-lg py-4 border-b border-neutral-800 transition-colors"
        >
          NETWORK
        </a>

        <a 
          href="/news"
          on:click={handleNavClick}
          class="text-neutral-300 hover:text-cyan-400 font-orbitron tracking-wider text-lg py-4 border-b border-neutral-800 transition-colors"
        >
          NEWS
        </a>

        <a 
          href="/get-started"
          on:click={handleNavClick}
          class="text-cyan-400 hover:text-cyan-300 font-orbitron tracking-wider text-lg py-4 border-b border-neutral-800 transition-colors"
        >
          GET STARTED >>
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