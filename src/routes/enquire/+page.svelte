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
    Cal("init", "30min", {origin:"https://app.cal.com"});

    // Setup inline embed
    Cal.ns["30min"]("inline", {
      elementOrSelector:"#my-cal-inline",
      config: {
        "layout":"month_view",
        "theme":"light"
      },
      calLink: "jackdolbs/30min",
    });

    // Setup UI configuration
    Cal.ns["30min"]("ui", {
      "theme":"light",
      "cssVarsPerTheme":{"light":{"cal-brand":"#fafafa"}},
      "hideEventTypeDetails":false,
      "layout":"month_view"
    });
  });
</script>

<div 
  in:fade={{ duration: 300, delay: 150 }}
  class="container mx-auto max-w-6xl px-4 py-10 bg-[#f7f9f8] font-sans"
>
  <div style="width:100%;height:100%;overflow:scroll" id="my-cal-inline"></div>
</div>

<style>
  /* Custom styles for Cal.com embed to match our design */
  :global(.cal-embed) {
    --cal-brand: rgb(245, 158, 11) !important; /* Amber-400 */
    --cal-border-color: #e5e7eb !important; /* neutral-200 */
    --cal-text: #232323 !important; /* neutral-900 */
  }
</style> 