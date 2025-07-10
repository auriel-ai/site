<script lang="ts">
  export let size: 'sm' | 'md' | 'lg' = 'md';
  
  const sizes = {
    sm: {
      width: 120,
      height: 24,
      fontSize: 14,
      waveWidth: 40,
    },
    md: {
      width: 160,
      height: 32,
      fontSize: 18,
      waveWidth: 50,
    },
    lg: {
      width: 200,
      height: 40,
      fontSize: 28,
      waveWidth: 60,
    }
  };

  $: dimensions = sizes[size];
</script>

<div class="inline-flex items-center" style="width: {dimensions.width}px; height: {dimensions.height}px">
  <!-- Racing Telemetry SVG -->
  <div class="relative" style="width: {dimensions.waveWidth}px; height: {dimensions.height}px">
    <svg 
      width="100%" 
      height="100%" 
      viewBox="0 0 60 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      class="scale-90"
    >
      <!-- Speed/Throttle Trace -->
      <path 
        d="M0 20
           L15 20
           L20 30
           L30 10
           L40 30
           L45 20
           L60 20"
        stroke="currentColor" 
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="text-white"
      />
      
      <!-- Gear Change Point -->
      <circle cx="30" cy="10" r="2" class="fill-[#ff8100]" />
    </svg>
  </div>

  <!-- Logo Text -->
  <span 
    class="font-['Michroma'] tracking-wide text-white uppercase italic font-extrabold"
    style="font-size: {dimensions.fontSize}px"
  >
    Pulse
  </span>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Michroma&display=swap');
</style> 