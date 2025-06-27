<script lang="ts">
  // No props for now, static demo
</script>

<style>
  .pulse {
    @apply relative;
  }
  .pulse::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    height: 100%;
    background: theme('colors.indigo.600');
    border-radius: 9999px;
    transform: translate(-50%, -50%);
    opacity: 0.5;
    animation: pulse 1.5s infinite;
    z-index: 0;
  }
  @keyframes pulse {
    0% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.5;
    }
    70% {
      transform: translate(-50%, -50%) scale(2.2);
      opacity: 0;
    }
    100% {
      transform: translate(-50%, -50%) scale(2.2);
      opacity: 0;
    }
  }
</style>

<div class="bg-neutral-50 rounded-xl p-4 w-full max-w-xs flex flex-col gap-3 shadow-lg border border-neutral-200">
  <div class="flex items-center gap-3">
    <img src="https://randomuser.me/api/portraits/lego/1.jpg" alt="AI Agent" class="w-8 h-8 rounded-full border-2 border-indigo-600" />
    <div class="flex flex-col">
      <span class="text-sm text-neutral-900 font-medium">Bob the Customer Service Agent</span>
      <span class="flex items-center gap-1 text-xs text-indigo-600 font-semibold">
        <span class="inline-block w-2 h-2 rounded-full bg-indigo-600 pulse"></span>
        Active
      </span>
    </div>
  </div>
  <div class="flex items-center gap-2 mt-2">
    <span class="text-xs text-neutral-500">Support Tickets Handled Today</span>
    <span class="text-base text-indigo-600 font-semibold ml-auto">128</span>
  </div>
  <div class="w-full grid grid-cols-11 gap-1 mt-1 items-end">
    <!-- Mini sparkline bar chart -->
    <div class="h-6 w-full bg-indigo-600 rounded"></div>
    <div class="h-4 w-full bg-indigo-400 rounded"></div>
    <div class="h-5 w-full bg-indigo-700 rounded"></div>
    <div class="h-3 w-full bg-indigo-300 rounded"></div>
    <div class="h-6 w-full bg-indigo-600 rounded"></div>
    <div class="h-2 w-full bg-indigo-200 rounded"></div>
    <div class="h-5 w-full bg-indigo-400 rounded"></div>
    <div class="h-4 w-full bg-indigo-700 rounded"></div>
    <div class="h-6 w-full bg-indigo-600 rounded"></div>
    <div class="h-3 w-full bg-indigo-300 rounded"></div>
    <div class="h-6 w-full bg-indigo-600 rounded"></div>
    
  </div>
</div> 