<script lang="ts">
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';

  onMount(() => {
    // Cal.com initialization
    (function (C, A, L) { 
      let p = function (a, ar) { a.q.push(ar); }; 
      let d = C.document; 
      C.Cal = C.Cal || function () { 
        let cal = C.Cal; 
        let ar = arguments; 
        if (!cal.loaded) { 
          cal.ns = {}; 
          cal.q = cal.q || []; 
          d.head.appendChild(d.createElement("script")).src = A; 
          cal.loaded = true; 
        } 
        if (ar[0] === L) { 
          const api = function () { p(api, arguments); }; 
          const namespace = ar[1]; 
          api.q = api.q || []; 
          if(typeof namespace === "string"){
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar); 
          return;
        } 
        p(cal, ar); 
      }; 
    })(window, "https://app.cal.com/embed/embed.js", "init");

    // Initialize Cal.com
    Cal("init", "15", {origin:"https://cal.com"});

    // Setup inline embed
    Cal.ns["15"]("inline", {
      elementOrSelector:"#my-cal-inline",
      config: {
        "layout":"month_view",
        "theme":"dark"
      },
      calLink: "jackdolbs/15",
    });

    // Setup UI configuration
    Cal.ns["15"]("ui", {
      "theme":"dark",
      "hideEventTypeDetails":false,
      "layout":"month_view"
    });
  });
</script>

<div 
  in:fade={{ duration: 300, delay: 150 }}
  class="container mx-auto max-w-6xl px-6 lg:px-4 py-32 lg:py-40 relative"
>
  <div class="absolute inset-0 bg-gradient-radial from-amber-500/10 to-transparent opacity-20 blur-3xl pointer-events-none"></div>
  
  <h1 class="text-3xl font-orbitron tracking-wider text-white text-center mb-4 lg:mb-6 relative">
    Contact Us
  </h1>

  <p class="space-y-5 text-neutral-300 leading-relaxed text-center font-grotesk mb-8 lg:mb-10 mx-auto max-w-4xl px-4 lg:px-10 relative">
    Schedule a quick call to discuss your ideas. Use the calendar below to find a time that works for you.
  </p>

  <div 
    id="my-cal-inline" 
    class="mx-auto my-20 relative bg-neutral-900/50 py-10 rounded-lg border border-neutral-800 shadow-[0_0_30px_rgba(245,158,11,0.15)]"
  />
</div>

<style>
  .bg-gradient-radial {
    background-image: radial-gradient(var(--tw-gradient-stops));
  }
  
  /* Custom styles for Cal.com embed to match our design */
  :global(.cal-embed) {
    --cal-brand: rgb(245, 158, 11) !important; /* Amber-400 */
    --cal-border-color: rgba(38, 38, 38, 0.5) !important; /* neutral-800 */
    --cal-text: rgb(212, 212, 212) !important; /* neutral-300 */
  }
</style> 