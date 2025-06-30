<script lang="ts">
  // Imports
  import Logo from './Logo.svelte';
  import LogoIcon from './LogoIcon.svelte';
  import { Plus, X, ArrowRight } from 'lucide-svelte';
  import { fade, fly } from 'svelte/transition';
  import ContactPopup from './ContactPopup.svelte';

  // State
  let isPopupOpen = false;
  let isMobileMenuOpen = false;
  let isMobileClairvoyanceOpen = false;
  let currentFormId = 'sb7xbw2f';

  // Handlers
  function handleNavClick() {
    isMobileMenuOpen = false;
    isMobileClairvoyanceOpen = false;
  }

  function openPopup(formId: string) {
    currentFormId = formId;
    isPopupOpen = true;
    if (isMobileMenuOpen) {
      handleNavClick();
    }
  }
</script>

<!-- Contact Popup -->
<ContactPopup 
  isOpen={isPopupOpen}
  onClose={() => isPopupOpen = false}
  formId={currentFormId}
/>

<!-- HEADER -->
<header class="py-12 bg-[#f7f9f8] backdrop-blur-md">
  <nav class="container mx-auto max-w-7xl flex items-center justify-between relative">
    
    <!-- Logo (Left) -->
    <div class="absolute left-0 top-1/2 -translate-y-1/2 z-50">
      {#if isMobileMenuOpen}
        <LogoIcon size="w-8 h-8" class_="stroke-black" />
      {:else}
        <Logo />
      {/if}
    </div>

    <!-- Nav Links (Center, Desktop) -->
    <div class="hidden lg:flex items-center gap-5 absolute left-1/2 -translate-x-1/2">
      <a href="/projects" class="nav-link text-neutral-700 hover:text-black font-normal tracking-wide text-base relative group">
        <span>Projects</span>
      </a>
      <a href="https://network.auriel.tech" class="nav-link text-neutral-700 hover:text-black font-noramal tracking-wide text-base relative group" target="_blank">
        <span>Network</span>
      </a>
      <a href="/news" class="nav-link text-neutral-700 hover:text-black font-normal tracking-wide text-base relative group">
        <span>News</span>
      </a>
      <button 
        on:click={() => openPopup('sb7xbw2f')}
        class="nav-link text-neutral-700 hover:text-black font-normal tracking-wide text-base relative group cursor-pointer">
        <span>Contact</span>
      </button>
    </div>

    <!-- CTA (Right) -->
    <div class="ml-auto">
      <button 
        on:click={() => openPopup('lyjf2sfh')}
        class="bg-white text-sm text-neutral-900 font-normal py-2 px-5 rounded-full border border-neutral-200 shadow-sm hover:bg-neutral-100 transition-all duration-200 flex items-center gap-2">
        Request A Project
        <ArrowRight size={18} class="ml-1" />
      </button>
    </div>

    <!-- Mobile Menu Trigger (Right) -->
    <button
      class="lg:hidden w-10 h-10 rounded-full border border-neutral-300 ml-auto flex items-center justify-center bg-white transition-all"
      on:click={() => isMobileMenuOpen = !isMobileMenuOpen}
    >
      <div class="relative w-5 h-5">
        <div class="absolute inset-0 transition-opacity duration-300" class:opacity-0={isMobileMenuOpen}>
          <Plus size={20} class="text-gray-500" />
        </div>
        <div class="absolute inset-0 transition-opacity duration-300" class:opacity-0={!isMobileMenuOpen}>
          <X size={20} class="text-black" />
        </div>
      </div>
    </button>
  </nav>
</header>

<!-- MOBILE NAVIGATION MENU -->
{#if isMobileMenuOpen}
  <div class="fixed inset-0 z-30 bg-[#f7f9f8]/95 backdrop-blur-md pt-5" transition:fly={{ y: -100, duration: 300 }}>
    <div class="container mx-auto px-6 py-20">
      <div class="flex flex-col gap-6">
        <a href="/projects" on:click={handleNavClick} class="text-neutral-900 hover:text-black font-normal tracking-wide text-lg py-4 border-b border-[#ececec] transition-colors">
          Projects
        </a>
        <a href="/network" on:click={handleNavClick} class="text-neutral-900 hover:text-black font-normal tracking-wide text-lg py-4 border-b border-[#ececec] transition-colors">
          Network
        </a>
        <a href="/news" on:click={handleNavClick} class="text-neutral-900 hover:text-black font-normal tracking-wide text-lg py-4 border-b border-[#ececec] transition-colors">
          News
        </a>
        <button 
          on:click={() => openPopup('sb7xbw2f')}
          class="text-left w-full text-neutral-900 hover:text-black font-normal tracking-wide text-lg py-4 border-b border-[#ececec] transition-colors cursor-pointer">
          Contact
        </button>
        <button 
          on:click={() => openPopup('lyjf2sfh')}
          class="bg-white text-neutral-900 font-normal py-3 px-5 rounded-full border border-[#ececec] shadow-sm hover:bg-neutral-50 transition-all duration-200 mt-4 text-center flex items-center justify-center gap-2">
          Request Project
          <ArrowRight size={18} class="ml-1" />
        </button>
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