<script lang="ts">
  import { fade } from 'svelte/transition';
  import { Button } from "$lib/components/ui/button";
</script>

<div 
  in:fade={{ duration: 300, delay: 150 }}
  class="container mx-auto max-w-2xl px-6 lg:px-4 py-28 lg:py-40 relative"
>
  <div class="absolute inset-0 bg-gradient-radial from-neutral-700/5 to-transparent opacity-30 blur-3xl pointer-events-none"></div>
  
  <div class="mb-6 lg:mb-8 relative">
    <a href="/legal">
      <Button variant="ghost" size="icon" class="hover:bg-neutral-800/60 text-neutral-400 hover:text-neutral-200 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
      </Button>
    </a>
  </div>

  <h2 class="text-xl lg:text-2xl font-orbitron tracking-wider text-white mb-3 lg:mb-4 relative">
    Terms of Service
  </h2>

  <p class="text-xs lg:text-sm text-neutral-500 mb-6 lg:mb-8 relative">Last updated: January 14, 2024</p>
  
  <div class="space-y-5 lg:space-y-6 text-neutral-300 text-sm lg:text-base relative">
    <p>
      By accessing our website or using our services, you agree to these Terms of Service. Please read them carefully.
    </p>
    
    <section>
      <h3 class="text-base lg:text-lg font-orbitron text-white mb-2 lg:mb-3">Use of Our Website</h3>
      <p>
        You may use our website for lawful purposes and in accordance with these Terms. You agree not to use our website in any way that could damage the site or impair its availability.
      </p>
    </section>
    
    <section>
      <h3 class="text-base lg:text-lg font-orbitron text-white mb-2 lg:mb-3">Our Software</h3>
      <p>
        Our open-source software is provided under the terms of the MIT License, which allows you to use, modify, and distribute it freely, subject to the conditions specified in the license.
      </p>
    </section>
    
    <section>
      <h3 class="text-base lg:text-lg font-orbitron text-white mb-2 lg:mb-3">Custom Services</h3>
      <p>
        For custom implementations or professional services, separate agreements will govern our relationship, including scope of work, deliverables, and fees.
      </p>
    </section>
    
    <section>
      <h3 class="text-base lg:text-lg font-orbitron text-white mb-2 lg:mb-3">Intellectual Property</h3>
      <p>
        All content on our website, excluding our open-source software, is the property of Auriel Analytics and is protected by copyright, trademark, and other intellectual property laws.
      </p>
    </section>
    
    <section>
      <h3 class="text-base lg:text-lg font-orbitron text-white mb-2 lg:mb-3">Limitation of Liability</h3>
      <p>
        Auriel Analytics shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our website or services.
      </p>
    </section>
    
    <section>
      <h3 class="text-base lg:text-lg font-orbitron text-white mb-2 lg:mb-3">Changes to Terms</h3>
      <p>
        We may revise these terms at any time. By continuing to use our website after changes are made, you accept the revised terms.
      </p>
    </section>
  </div>
</div>

<style>
  .bg-gradient-radial {
    background-image: radial-gradient(var(--tw-gradient-stops));
  }
</style> 