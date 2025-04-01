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
    Cal("init", "clairvoyance-intro", {origin:"https://cal.com"});

    // Setup inline embed
    Cal.ns["clairvoyance-intro"]("inline", {
      elementOrSelector:"#my-cal-inline",
      config: {
        "layout":"month_view",
        "theme":"light"
      },
      calLink: "jackdolbs/clairvoyance-intro",
    });

    // Setup UI configuration
    Cal.ns["clairvoyance-intro"]("ui", {
      "theme":"light",
      "hideEventTypeDetails":false,
      "layout":"month_view"
    });
  });
</script>

<div 
  in:fade={{ duration: 300, delay: 150 }}
  class="container mx-auto max-w-6xl px-6 lg:px-4 py-32 lg:py-40"
>
  <h1 class="text-3xl font-orbitron tracking-wider text-neutral-900 text-center mb-4 lg:mb-6">
    Get complete visibility into your AI agents
  </h1>

  <p class="space-y-5 text-neutral-700 leading-relaxed text-center font-grotesk mb-8 lg:mb-10 mx-auto max-w-2xl px-4 lg:px-0">
    See how our AI observability platform can help you understand, debug, and optimize your agents for better performance and measurable business impact.
  </p>

  <div 
    id="my-cal-inline" 
    class="mx-auto my-20"
  />
</div> 