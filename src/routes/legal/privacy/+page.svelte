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
    Privacy Policy
  </h2>

  <p class="text-xs lg:text-sm text-neutral-500 mb-6 lg:mb-8 relative">Last updated: January 14, 2024</p>

  <div class="space-y-5 lg:space-y-6 text-neutral-300 text-sm lg:text-base relative">
    <p>
      This policy outlines how Auriel Analytics collects and uses information from visitors to our website (auriel.tech) and describes our commitment to privacy.
    </p>

    <section>
      <h3 class="text-base lg:text-lg font-orbitron text-white mb-2 lg:mb-3">Website Information We Collect</h3>
      <div class="space-y-2 lg:space-y-3">
        <p><strong>Contact Information:</strong> When you reach out to us through our enquiry form, we collect your contact details to respond to your request.</p>
        <p><strong>Usage Data:</strong> We collect anonymous usage data about how visitors interact with our website to improve user experience.</p>
      </div>
    </section>

    <section>
      <h3 class="text-base lg:text-lg font-orbitron text-white mb-2 lg:mb-3">Our Software</h3>
      <div class="space-y-2 lg:space-y-3">
        <p>Our analytics platform is open source and self-hosted. We do not collect any data from users of self-hosted instances. For custom implementations, data collection and processing are governed by individual service agreements with our clients.</p>
      </div>
    </section>

    <section>
      <h3 class="text-base lg:text-lg font-orbitron text-white mb-2 lg:mb-3">How We Use Website Information</h3>
      <div class="space-y-2 lg:space-y-3">
        <p><strong>Communication:</strong> To respond to your inquiries.</p>
        <p><strong>Website Improvement:</strong> To analyze and improve the website performance.</p>
      </div>
    </section>

    <section>
      <h3 class="text-base lg:text-lg font-orbitron text-white mb-2 lg:mb-3">Third Parties</h3>
      <p>We may use third-party services for:</p>
      <ul class="list-disc pl-5 space-y-2 mt-2">
        <li>Website analytics</li>
        <li>Email communication</li>
        <li>Form processing</li>
      </ul>
    </section>

    <section>
      <h3 class="text-base lg:text-lg font-orbitron text-white mb-2 lg:mb-3">Your Rights</h3>
      <p>You have the right to:</p>
      <ul class="list-disc pl-5 space-y-2 mt-2">
        <li>Request information about what data we hold about you</li>
        <li>Request correction or deletion of your data</li>
        <li>Opt-out of future communications</li>
      </ul>
    </section>

    <section>
      <h3 class="text-base lg:text-lg font-orbitron text-white mb-2 lg:mb-3">Changes to This Policy</h3>
      <p>We may update this Privacy Policy to reflect changes in our practices or legal requirements. Material changes will be posted on this page.</p>
    </section>
  </div>
</div>

<style>
  .bg-gradient-radial {
    background-image: radial-gradient(var(--tw-gradient-stops));
  }
</style> 