<script lang="ts">
  import { fade } from 'svelte/transition';
  import { Button } from "$lib/components/ui/button";
</script>

<div 
  in:fade={{ duration: 300, delay: 150 }}
  class="container mx-auto max-w-2xl px-6 lg:px-4 py-28 lg:py-40"
>
  <div class="mb-6 lg:mb-8">
    <a href="/legal">
      <Button variant="ghost" size="icon" class="hover:bg-neutral-100">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
      </Button>
    </a>
  </div>

  <h2 class="text-xl lg:text-2xl font-orbitron tracking-wider text-neutral-900 mb-3 lg:mb-4">
    Terms of Service
  </h2>

  <p class="text-xs lg:text-sm text-neutral-500 mb-6 lg:mb-8">Last updated: January 14, 2024</p>

  <div class="space-y-5 lg:space-y-6 text-neutral-700 text-sm lg:text-base">
    <p>
      This Terms of Service govern your access to and use of our website, open source software, and related services ("Service").
    </p>

    <section>
      <h3 class="text-base lg:text-lg font-orbitron text-neutral-900 mb-2 lg:mb-3">Open Source Software</h3>
      <div class="space-y-2 lg:space-y-3">
        <p>Our analytics platform and Clairvoyance visualization system are provided under an open source license. You may use, modify, and distribute the software in accordance with the terms of the applicable license. The software is provided "as is," without warranty of any kind. You are responsible for your implementation, maintainance, and use of the software.</p>
      </div>
    </section>

    <section>
      <h3 class="text-base lg:text-lg font-orbitron text-neutral-900 mb-2 lg:mb-3">Professional Services</h3>
      <div class="space-y-2 lg:space-y-3">
        <p>For custom implementations and professional services, separate service agreements will govern our business relationship. These Terms do not override or replace any such agreements.</p>
      </div>
    </section>

    <section>
      <h3 class="text-base lg:text-lg font-orbitron text-neutral-900 mb-2 lg:mb-3">Intellectual Property</h3>
      <div class="space-y-2 lg:space-y-3">
        <p>Website content, branding, and proprietary implementations remain the intellectual property of Auriel Analytics Ltd. The open source software is licensed under its respective terms.</p>
      </div>
    </section>

    <section>
      <h3 class="text-base lg:text-lg font-orbitron text-neutral-900 mb-2 lg:mb-3">Disclaimer</h3>
      <div class="space-y-2 lg:space-y-3">
        <p>The software and services are provided "as is" and "as available". We make no warranties regarding accuracy, reliability, or availability of the Service.</p>
      </div>
    </section>

    <section>
      <h3 class="text-base lg:text-lg font-orbitron text-neutral-900 mb-2 lg:mb-3">Limitation of Liability</h3>
      <div class="space-y-2 lg:space-y-3">
        <p>To the fullest extent permitted by law, Auriel Analytics Ltd shall not be liable for any indirect, incidental, or consequential damages resulting from your use of our software or services.</p>
      </div>
    </section>

    <section>
      <h3 class="text-base lg:text-lg font-orbitron text-neutral-900 mb-2 lg:mb-3">Changes to Terms</h3>
      <div class="space-y-2 lg:space-y-3">
        <p>We may update these Terms at any time. Continued use of our services following changes indicates acceptance of the new Terms.</p>
      </div>
    </section>
  </div>
</div> 