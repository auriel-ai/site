<script>
    import { onMount } from 'svelte';
    import * as THREE from 'three';
  
    let container;
  
    const vertexShader = `
      varying vec2 vUv;
      void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;
  
    const fragmentShader = `
      uniform float time;
      varying vec2 vUv;
  
      float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      }
  
      float noise(vec2 st) {
          vec2 i = floor(st);
          vec2 f = fract(st);
  
          float a = random(i);
          float b = random(i + vec2(1.0, 0.0));
          float c = random(i + vec2(0.0, 1.0));
          float d = random(i + vec2(1.0, 1.0));
  
          vec2 u = f * f * (3.0 - 2.0 * f);
  
          return mix(a, b, u.x) +
                 (c - a)* u.y * (1.0 - u.x) +
                 (d - b) * u.x * u.y;
      }
  
      void main() {
          vec2 center = vec2(0.5);
          vec2 toCenter = center - vUv;
          float dist = length(toCenter);
          
          // Refined light effect with larger core and glow
          float innerGlow = 1.0 - smoothstep(0.0, 0.4, dist);
          float outerGlow = 1.0 - smoothstep(0.3, 0.6, dist);
          float lightEffect = innerGlow + outerGlow * 0.15;
          
          // Further increased movement speed and amplitude
          float movement = sin(time * 1.2) * 0.07;
          vec2 movedUv = vUv + vec2(movement * cos(time * 0.9), movement * sin(time * 1.1));
          
          // Even more dynamic swirling effect
          float swirl = noise(movedUv * 6.0 + time * 0.2) * 0.6;
          
          // Combine the light effect with swirling noise
          float finalLight = lightEffect * (1.0 + swirl);
          
          // Deeper blue color palette optimized for light backgrounds
          vec3 darkBlue = vec3(0.05, 0.15, 0.4);    // Deeper base blue
          vec3 brightBlue = vec3(0.3, 0.6, 1.0);    // Bright electric blue
          vec3 lightColor = mix(darkBlue, brightBlue, pow(finalLight, 1.2));
          
          // Enhanced alpha control for better glow effect
          float alpha = finalLight;
          alpha *= smoothstep(0.45, 0.0, dist);      // Slightly wider fade
          alpha *= mix(0.4, 0.9, innerGlow);         // Lower opacity for outer glow
          
          gl_FragColor = vec4(lightColor, alpha);
      }
    `;
  
    onMount(() => {
      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-3, 3, 3, -3, 0, 1);
      const renderer = new THREE.WebGLRenderer({ 
          antialias: true,
          alpha: true
      });
      
      renderer.setClearColor(0x000000, 0);
      renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(renderer.domElement);
  
      const geometry = new THREE.PlaneGeometry(6, 6);
      const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          time: { value: 0 }
        },
        transparent: true,
        blending: THREE.NormalBlending,
        depthWrite: false,
        depthTest: false
      });
  
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
  
      const animate = (time) => {
        mesh.material.uniforms.time.value = time * 0.001;
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      };
  
      requestAnimationFrame(animate);
  
      const handleResize = () => {
        renderer.setSize(container.clientWidth, container.clientHeight);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
        renderer.dispose();
        geometry.dispose();
        material.dispose();
      };
    });
  </script>
  
  <div bind:this={container} class="clairvoyance-container">
    <slot />
  </div>
  
  <style>
    .clairvoyance-container {
      width: 100%;
      height: 100%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 300px;
    }
  </style>