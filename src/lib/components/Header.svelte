<script lang="ts">
  // Imports
  import Logo from './Logo.svelte';
  import LogoIcon from './LogoIcon.svelte';
  import { Menu, X, ArrowRight } from 'lucide-svelte';
  import { fade, fly } from 'svelte/transition';
  import ContactPopup from './ContactPopup.svelte';
  import { getContext, onMount } from 'svelte';

  // Get hideBackground from context, defaulting to false if not set
  const hideBackground = getContext('hideHeaderBackground') ?? false;

  // State
  let isPopupOpen = false;
  let isMobileMenuOpen = false;
  let isMobileClairvoyanceOpen = false;
  let currentFormId = 'sb7xbw2f';
  let hasScrolled = false;

  // Scroll handler
  function handleScroll() {
    hasScrolled = window.scrollY > 10;
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

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

  $: {
    if (isMobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
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
  class="sticky top-0 py-5 px-5 md:px-24 md:py-5 z-30 flex items-center {hideBackground ? 'pointer-events-none' : ''}"
>
  <nav class="container mx-auto max-w-7xl flex items-center justify-between relative px-4 py-4 rounded-2xl clickable backdrop-blur-md transition-all duration-300 {hasScrolled && !hideBackground ? 'bg-white/95 shadow-[0_2px_8px_rgba(0,0,0,0.06)]' : ''} {hideBackground ? 'opacity-0' : 'opacity-100'}">
    <!-- Logo (Left) -->
    <div class="flex-shrink-0 z-50">
      <a href="/" class="transition-opacity duration-200 hover:opacity-80" aria-label="Home">
        <Logo />
      </a>
    </div>

    <!-- Nav Links (Center, Desktop) -->
    <div class="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
      <a 
        href="/projects" 
        class="nav-link text-neutral-700 hover:text-black text-base relative group transition-colors duration-200"
      >
        <span>Projects</span>
      </a>
      <a 
        href="/news" 
        class="nav-link text-neutral-700 hover:text-black text-base relative group transition-colors duration-200"
      >
        <span>News</span>
      </a>
      <a 
        href="https://network.auriel.tech" 
        class="nav-link text-neutral-700 hover:text-black text-base relative group transition-colors duration-200" 
        target="_blank"
      >
        <span>Network</span>
      </a>
      <button 
        on:click={() => openPopup('sb7xbw2f')}
        class="nav-link text-neutral-700 hover:text-black text-base relative group transition-colors duration-200 cursor-pointer"
      >
        <span>Contact</span>
      </button>
    </div>

    <!-- Right-side container -->
    <div class="flex items-center gap-4">
      <!-- CTA (Right) -->
      <div class="hidden lg:block">
        <button 
          on:click={() => openPopup('lyjf2sfh')}
          class="bg-white text-sm text-neutral-900 py-2.5 px-6 rounded-lg border border-neutral-200 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2"
        >
          Request Custom Project
          <ArrowRight size={18} class="ml-1 transition-transform duration-200 group-hover:translate-x-0.5" />
        </button>
      </div>

      <!-- Mobile Menu Trigger (Right) -->
      <button
        class="lg:hidden flex items-center justify-center z-50 text-neutral-800 relative w-[24px] h-[24px] pr-8"
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
  <div 
    class="fixed inset-0 z-20 bg-white/60 backdrop-blur-lg pointer-events-auto overflow-hidden" 
    transition:fly={{ y: -20, duration: 300 }}
    style="position: fixed; top: 0; left: 0; right: 0; bottom: 0;"
  >
    <div class="h-full overflow-y-auto">
      <div class="container mx-auto px-6 pt-32 pb-8 h-full flex flex-col">
        <div class="flex flex-col gap-2 flex-grow">
          <a 
            href="/projects" 
            on:click={handleNavClick} 
            class="text-neutral-900 hover:text-black text-4xl py-6 transition-all duration-200 hover:pl-2"
          >
            Projects
          </a>
          <a 
            href="/news" 
            on:click={handleNavClick} 
            class="text-neutral-900 hover:text-black text-4xl py-6 transition-all duration-200 hover:pl-2"
          >
            News
          </a>
          <a 
            href="https://network.auriel.tech" 
            on:click={handleNavClick} 
            class="text-neutral-900 hover:text-black text-4xl py-6 transition-all duration-200 hover:pl-2"
          >
            Network
          </a>
          <button 
            on:click={() => openPopup('sb7xbw2f')}
            class="text-left w-full text-neutral-900 hover:text-black text-4xl py-6 transition-all duration-200 hover:pl-2 cursor-pointer"
          >
            Contact
          </button>
        </div>
        <button 
          on:click={() => openPopup('lyjf2sfh')}
          class="bg-black text-white text-lg py-4 px-6 rounded-xl shadow-sm hover:bg-neutral-800 active:scale-[0.98] transition-all duration-200 text-center flex items-center justify-center gap-2 mt-auto"
        >
          Request A Custom Project
          <ArrowRight size={20} class="ml-1" />
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  .hamburger-menu {
    width: 20px;
    height: 20px;
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

  :global(body.menu-open) {
    overflow: hidden;
    position: fixed;
    width: 100%;
  }
</style>
