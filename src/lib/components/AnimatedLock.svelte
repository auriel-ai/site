<script lang="ts">
  // No props for now
</script>

<style>
  .lock-glow {
    filter: drop-shadow(0 0 8px #6366f1aa);
  }
</style>

<svg viewBox="0 0 64 64" width="72" height="72" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-auto lock-glow">
  <!-- Lock body -->
  <rect x="16" y="28" width="32" height="28" rx="6" fill="#fff" stroke="#6366f1" stroke-width="3" />
  <!-- Animated shackle -->
  <path id="shackle" d="M20 28a12 12 0 1 1 24 0" stroke="#6366f1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
    <animate
      attributeName="d"
      values="M20 28a12 12 0 1 1 24 0;M20 20a12 12 0 1 1 24 0;M20 28a12 12 0 1 1 24 0"
      keyTimes="0;0.5;1"
      dur="2s"
      repeatCount="indefinite"
    />
  </path>
  <!-- Keyhole -->
  <ellipse cx="32" cy="44" rx="3" ry="4" fill="#6366f1" />
  <rect x="30.5" y="44" width="3" height="8" rx="1.5" fill="#6366f1" />
  <!-- Glow shimmer -->
  <rect x="16" y="28" width="32" height="28" rx="6" fill="url(#shimmer)" opacity="0.2">
    <animate attributeName="x" values="16;48;16" dur="2s" repeatCount="indefinite" />
  </rect>
  <defs>
    <linearGradient id="shimmer" x1="16" y1="28" x2="48" y2="56" gradientUnits="userSpaceOnUse">
      <stop stop-color="#6366f1" />
      <stop offset="1" stop-color="#fff" />
    </linearGradient>
  </defs>
</svg> 