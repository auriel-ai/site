<script lang="ts">
  // No props needed for now
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 700 700"
  class="absolute inset-0 w-full h-full object-cover pointer-events-none"
  preserveAspectRatio="none"
  style="z-index:0;"
>
  <defs>
    <linearGradient gradientTransform="rotate(-311, 0.5, 0.5)" x1="50%" y1="0%" x2="50%" y2="100%" id="gggrain-gradient2">
      <stop stop-color="hsla(49, 56%, 71%, 1.00)" stop-opacity="1" offset="-0%"></stop>
      <stop stop-color="rgba(255,255,255,0)" stop-opacity="0" offset="100%"></stop>
    </linearGradient>
    <linearGradient gradientTransform="rotate(311, 0.5, 0.5)" x1="50%" y1="0%" x2="50%" y2="100%" id="gggrain-gradient3">
      <stop stop-color="hsl(227, 100%, 50%)" stop-opacity="1"></stop>
      <stop stop-color="rgba(255,255,255,0)" stop-opacity="0" offset="100%"></stop>
    </linearGradient>
    <filter id="gggrain-filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feTurbulence type="fractalNoise" baseFrequency="1.13" numOctaves="2" seed="2" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="turbulence"></feTurbulence>
      <feColorMatrix type="saturate" values="0" x="0%" y="0%" width="100%" height="100%" in="turbulence" result="colormatrix"></feColorMatrix>
      <feComponentTransfer x="0%" y="0%" width="100%" height="100%" in="colormatrix" result="componentTransfer">
        <feFuncR type="linear" slope="3"></feFuncR>
        <feFuncG type="linear" slope="3"></feFuncG>
        <feFuncB type="linear" slope="3"></feFuncB>
      </feComponentTransfer>
      <feColorMatrix x="0%" y="0%" width="100%" height="100%" in="componentTransfer" result="colormatrix2" type="matrix" values="1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 19 -11"></feColorMatrix>
    </filter>
  </defs>
  <g>
    <rect width="100%" height="100%" fill="hsl(276, 96%, 52%)"></rect>
    <rect width="100%" height="100%" fill="url(#gggrain-gradient3)"></rect>
    <rect width="100%" height="100%" fill="url(#gggrain-gradient2)"></rect>
    <rect width="100%" height="100%" fill="transparent" filter="url(#gggrain-filter)" opacity="0.61" style="mix-blend-mode: soft-light"></rect>
  </g>
</svg> 

