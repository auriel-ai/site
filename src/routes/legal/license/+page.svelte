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
      <Button variant="ghost" size="icon" class="hover:bg-neutral-800/60 text-neutral-400 hover:text-cyan-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
      </Button>
    </a>
  </div>

  <h2 class="text-xl lg:text-2xl font-orbitron tracking-wider text-cyan-400 mb-3 lg:mb-4">
    License
  </h2>

  <p class="text-xs lg:text-sm text-neutral-500 mb-6 lg:mb-8">Last updated: January 14, 2024</p>

  <div class="space-y-5 lg:space-y-6 text-neutral-300 text-sm lg:text-base">
    <p>
      This document outlines the terms and conditions for use, reproduction, and distribution of Auriel Analytics' open source software.
    </p>

    <section>
      <h3 class="text-base lg:text-lg font-orbitron text-cyan-400 mb-2 lg:mb-3">1. Definitions</h3>
      <div class="space-y-2 lg:space-y-3">
        <p><strong>"License"</strong> shall mean the terms and conditions for use, reproduction, and distribution as defined by this document.</p>
        
        <p><strong>"Licensor"</strong> shall mean Auriel Analytics, the copyright owner or entity authorized by the copyright owner that is granting the License.</p>
        
        <p><strong>"Legal Entity"</strong> shall mean the union of the acting entity and all other entities that control, are controlled by, or are under common control with that entity.</p>
        
        <p><strong>"You"</strong> (or "Your") shall mean an individual or Legal Entity exercising permissions granted by this License.</p>
        
        <p><strong>"Source"</strong> form shall mean the preferred form for making modifications, including but not limited to software source code, documentation source, and configuration files.</p>
        
        <p><strong>"Object"</strong> form shall mean any form resulting from mechanical transformation or translation of a Source form.</p>
        
        <p><strong>"Work"</strong> shall mean the work of authorship, whether in Source or Object form, made available under the License.</p>
        
        <p><strong>"Derivative Works"</strong> shall mean any work, whether in Source or Object form, that is based on (or derived from) the Work.</p>
        
        <p><strong>"Contribution"</strong> shall mean any work of authorship intentionally submitted to Licensor for inclusion in the Work.</p>
      </div>
    </section>

    <section>
      <h3 class="text-base lg:text-lg font-orbitron text-cyan-400 mb-2 lg:mb-3">2. Grant of Copyright License</h3>
      <div class="space-y-2 lg:space-y-3">
        <p>Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Work and such Derivative Works in Source or Object form.</p>
      </div>
    </section>

    <section>
      <h3 class="text-base lg:text-lg font-orbitron text-cyan-400 mb-2 lg:mb-3">3. Grant of Patent License</h3>
      <div class="space-y-2 lg:space-y-3">
        <p>Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable patent license to make, have made, use, offer to sell, sell, import, and otherwise transfer the Work.</p>
        <p>This license applies only to patent claims licensable by such Contributor that are necessarily infringed by their Contribution(s) alone or by combination of their Contribution(s) with the Work to which such Contribution(s) was submitted.</p>
      </div>
    </section>

    <section>
      <h3 class="text-base lg:text-lg font-orbitron text-cyan-400 mb-2 lg:mb-3">4. Redistribution</h3>
      <div class="space-y-2 lg:space-y-3">
        <p>You may reproduce and distribute copies of the Work or Derivative Works thereof in any medium, with or without modifications, and in Source or Object form, provided that You meet the following conditions:</p>
        <ul class="list-disc pl-5 space-y-2 mt-2">
          <li>You must give any other recipients of the Work or Derivative Works a copy of this License</li>
          <li>You must cause any modified files to carry prominent notices stating that You changed the files</li>
          <li>You must retain all copyright, patent, trademark, and attribution notices from the Source form of the Work</li>
          <li>If the Work includes a "NOTICE" text file as part of its distribution, then any Derivative Works must include a readable copy of the attribution notices</li>
        </ul>
      </div>
    </section>

    <section class="mt-6 lg:mt-8 pt-6 lg:pt-8 border-t border-neutral-800">
      <h3 class="text-base lg:text-lg font-orbitron text-cyan-400 mb-2 lg:mb-3">How to Apply the License</h3>
      <div class="space-y-2 lg:space-y-3">
        <p>To apply this license to your work, include a copy of this license in your distribution, and attach the following notice:</p>
        <div class="bg-neutral-900/60 p-3 lg:p-4 rounded-md border border-neutral-800 font-mono text-xs lg:text-sm text-neutral-400">
          Copyright {new Date().getFullYear()} Auriel Analytics<br><br>
          Licensed under the Auriel Analytics Open Source License for Clairvoyance, Version 0.1.0
        </div>
      </div>
    </section>
  </div>
</div> 