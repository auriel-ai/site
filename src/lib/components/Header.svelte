<script lang="ts">
  // Imports
  import Logo from './Logo.svelte';
  import LogoIcon from './LogoIcon.svelte';
  import { Menu, X, ArrowRight } from 'lucide-svelte';
  import { fade, fly } from 'svelte/transition';
  import ContactPopup from './ContactPopup.svelte';
  import { getContext } from 'svelte';

  // Get hideBackground from context, defaulting to false if not set
  const hideBackground = getContext('hideHeaderBackground') ?? false;

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
<header 
  class="py-10 md:py-12 z-40"
>
  <nav class="container mx-auto max-w-7xl flex items-center justify-between relative px-4 clickable">
    
    <!-- Logo (Left) -->
    <div class="flex-shrink-0 z-50">
      <a href="/" aria-label="Home">
        {#if isMobileMenuOpen}
          <LogoIcon size="w-8 h-8" class_="stroke-black" />
        {:else}
          <Logo />
        {/if}
      </a>
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

    <!-- Right-side container -->
    <div class="flex items-center gap-4">
      <!-- CTA (Right) -->
      <div class="hidden lg:block">
        <button 
          on:click={() => openPopup('lyjf2sfh')}
          class="bg-white text-sm text-neutral-900 font-normal py-2 px-5 rounded-full border border-neutral-200 shadow-sm hover:bg-neutral-100 transition-all duration-200 flex items-center gap-2">
          Request A Project
          <ArrowRight size={18} class="ml-1" />
        </button>
      </div>

      <!-- Mobile Menu Trigger (Right) -->
      <button
        class="lg:hidden p-2 z-50 text-neutral-800 relative w-[24px] h-[24px]"
        on:click={() => isMobileMenuOpen = !isMobileMenuOpen}
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
      >
        <div class="hamburger-menu">
          <span class="line line-1" class:open={isMobileMenuOpen}></span>
          <span class="line line-2" class:open={isMobileMenuOpen}></span>
          <span class="line line-3" class:open={isMobileMenuOpen}></span>
        </div>
      </button>
    </div>
  </nav>
</header>

<!-- MOBILE NAVIGATION MENU -->
{#if isMobileMenuOpen}
  <div class="fixed inset-0 z-30 bg-[#f7f9f8]/95 backdrop-blur-md pt-5 pointer-events-auto" transition:fly={{ y: -100, duration: 300 }}>
    <div class="container mx-auto px-6 py-20">
      <div class="flex flex-col gap-6">
        <a href="/projects" on:click={handleNavClick} class="text-neutral-900 hover:text-black font-normal tracking-wide text-lg py-4 border-b border-[#ececec] transition-colors">
          Projects
        </a>
        <a href="https://network.auriel.tech" on:click={handleNavClick} class="text-neutral-900 hover:text-black font-normal tracking-wide text-lg py-4 border-b border-[#ececec] transition-colors">
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
  .hamburger-menu {
    width: 24px;
    height: 24px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
  }

  .line {
    width: 24px;
    height: 2px;
    background-color: #171717;
    position: absolute;
    border-radius: 2px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line-1 {
    transform: translateY(-8px);
  }

  .line-2 {
    opacity: 1;
  }

  .line-3 {
    transform: translateY(8px);
  }

  .line-1.open {
    transform: translateY(0) rotate(45deg);
  }

  .line-2.open {
    opacity: 0;
  }

  .line-3.open {
    transform: translateY(0) rotate(-45deg);
  }
</style>
