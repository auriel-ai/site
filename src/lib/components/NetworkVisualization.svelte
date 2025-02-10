<script lang="ts">
  import { onMount, afterUpdate } from 'svelte';
  import * as THREE from 'three';
  import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
  import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '$lib/components/ui/tooltip';

  let container: HTMLDivElement;
  let mouseX = 0;
  let mouseY = 0;
  let currentTooltipIndex: number | null = null;
  let tooltipVisible = false;
  let tooltipX = 0;
  let tooltipY = 0;
  let activeParticleIndex: number | null = null;
  let particleSizes: Float32Array;
  let targetParticleSizes: Float32Array;
  let mediaQuery: MediaQueryList;
  let isLargeScreen = false;
  
  // B2B SaaS Ontology Classes
  type OntologyCategory = {
    name: string;
    color: string;
    classes: string[];
  };

  const ontologyCategories: OntologyCategory[] = [
    {
      name: 'Core Business Entities',
      color: 'bg-blue-100 border-blue-200',
      classes: ['Customer', 'Product', 'Service', 'Order', 'Subscription', 'Contract']
    },
    {
      name: 'Customer Interaction',
      color: 'bg-green-100 border-green-200',
      classes: ['Lead', 'Opportunity', 'CustomerSegment', 'CustomerJourney', 
               'CustomerTouchpoint', 'CustomerFeedback', 'ChurnEvent']
    },
    {
      name: 'Sales and Revenue',
      color: 'bg-purple-100 border-purple-200',
      classes: ['SalesPipeline', 'Deal', 'RevenueStream', 'PricingModel',
               'Discount', 'Invoice', 'Payment']
    },
    {
      name: 'Product Performance',
      color: 'bg-yellow-100 border-yellow-200',
      classes: ['ProductUsage', 'ServiceUsage', 'FeatureUsage',
               'ProductPerformance', 'ServicePerformance']
    },
    {
      name: 'Customer Metrics',
      color: 'bg-red-100 border-red-200',
      classes: ['CustomerLifetimeValue', 'CustomerAcquisitionCost', 'RetentionRate',
               'ChurnRate', 'NetPromoterScore', 'CustomerSatisfactionScore']
    },
    {
      name: 'Financial Metrics',
      color: 'bg-emerald-100 border-emerald-200',
      classes: ['MonthlyRecurringRevenue', 'AnnualRecurringRevenue', 'GrossMargin',
               'NetProfitMargin', 'RevenueGrowthRate']
    },
    {
      name: 'Operational Metrics',
      color: 'bg-orange-100 border-orange-200',
      classes: ['OperationalEfficiency', 'ResourceUtilization',
               'ProjectCompletionRate', 'TaskCompletionRate']
    },
    {
      name: 'Support Metrics',
      color: 'bg-cyan-100 border-cyan-200',
      classes: ['SupportTicket', 'FirstResponseTime', 'ResolutionTime', 'SLACompliance']
    },
    {
      name: 'Marketing Metrics',
      color: 'bg-pink-100 border-pink-200',
      classes: ['MarketingCampaign', 'LeadToCustomerConversionRate', 'SalesConversionRate',
               'CostPerLead', 'MarketingReturnOnInvestment']
    },
    {
      name: 'Innovation',
      color: 'bg-indigo-100 border-indigo-200',
      classes: ['FeatureFlag', 'InnovationIndex', 'ProductDevelopmentCycle']
    },
    {
      name: 'Internal Performance',
      color: 'bg-violet-100 border-violet-200',
      classes: ['EmployeeProductivity', 'TeamPerformance']
    },
    {
      name: 'System Metrics',
      color: 'bg-slate-100 border-slate-200',
      classes: ['DataQuality', 'SystemUptime', 'APIResponseTime']
    }
  ];

  // Create flat ontologyClasses array from categories
  const ontologyClasses = ontologyCategories.flatMap(cat => cat.classes);

  // Add helper function to get category for a class
  function getCategoryForClass(className: string): OntologyCategory | undefined {
    return ontologyCategories.find(cat => cat.classes.includes(className));
  }

  // Add this helper function after the getCategoryForClass function
  function getColorForClass(className: string): THREE.Color {
    const category = getCategoryForClass(className);
    // Default to blue if no category found
    if (!category) return new THREE.Color(0x60A5FA);
    
    // Convert Tailwind color classes to hex colors
    const colorMap: { [key: string]: number } = {
      'bg-blue-100': 0x60A5FA,
      'bg-green-100': 0x34D399,
      'bg-purple-100': 0xA78BFA,
      'bg-yellow-100': 0xFBBF24,
      'bg-red-100': 0xF87171,
      'bg-emerald-100': 0x34D399,
      'bg-orange-100': 0xFB923C,
      'bg-cyan-100': 0x22D3EE,
      'bg-pink-100': 0xF472B6,
      'bg-indigo-100': 0x818CF8,
      'bg-violet-100': 0xA78BFA,
      'bg-slate-100': 0x94A3B8
    };

    // Extract the color class and get its hex value
    const colorClass = category.color.split(' ')[0];
    return new THREE.Color(colorMap[colorClass]);
  }

  // Configuration
  const maxParticleCount = ontologyClasses.length;
  const particleCount = ontologyClasses.length;
  const radius = 600;

  // Three.js variables
  let camera: THREE.PerspectiveCamera;
  let scene: THREE.Scene;
  let renderer: THREE.WebGLRenderer;
  let controls: OrbitControls;
  let particles: THREE.Points;
  let particlePositions: Float32Array;
  let linesMesh: THREE.LineSegments;
  let positions: Float32Array;
  let lineColors: Float32Array;

  // Add these to your existing variables
  const PARTICLE_DEFAULT_SIZE = 20;
  const PARTICLE_ACTIVE_SIZE = 35;
  const PARTICLE_TRANSITION_SPEED = 0.05;

  let tooltipTimeout: number | null = null;
  let tooltipOpacity = 1;
  const TOOLTIP_DURATION = 3000;    // 3 seconds display time
  const FADE_DURATION = 1000;       // 1 second fade out
  const FADE_IN_DURATION = 200;     // 200ms fade in (much faster)

  function startTooltipTimer() {
    // Clear any existing timeout
    if (tooltipTimeout) {
      clearTimeout(tooltipTimeout);
    }
    
    // If there's an existing tooltip, fade it out first
    if (tooltipVisible) {
      tooltipOpacity = 0;
      setTimeout(() => {
        // After fade out, update tooltip content and fade in
        tooltipOpacity = 0;
        setTimeout(() => {
          tooltipOpacity = 1;
        }, 10); // Reduced delay before fade in
      }, FADE_IN_DURATION); // Shorter duration for switching between tooltips
    } else {
      // If no existing tooltip, just fade in
      tooltipOpacity = 0;
      setTimeout(() => {
        tooltipOpacity = 1;
      }, 0);
    }
    
    // Set timeout for eventual fade out
    tooltipTimeout = window.setTimeout(() => {
      tooltipOpacity = 0;
      
      setTimeout(() => {
        tooltipVisible = false;
        currentTooltipIndex = null;
        if (activeParticleIndex !== null) {
          const sizes = particles.geometry.attributes.size.array;
          sizes[activeParticleIndex] = PARTICLE_DEFAULT_SIZE;
          particles.geometry.attributes.size.needsUpdate = true;
          activeParticleIndex = null;
        }
      }, FADE_DURATION);
    }, TOOLTIP_DURATION);
  }

  function handleMouseMove(event: MouseEvent) {
    const rect = container.getBoundingClientRect();
    mouseX = ((event.clientX - rect.left) / container.clientWidth) * 2 - 1;
    mouseY = -((event.clientY - rect.top) / container.clientHeight) * 2 + 1;

    // Find nearest particle
    let minDistance = Infinity;
    let nearestIndex = null;

    for (let i = 0; i < particleCount; i++) {
      const x = particlePositions[i * 3];
      const y = particlePositions[i * 3 + 1];
      
      // Project 3D position to 2D screen coordinates
      const vector = new THREE.Vector3(x, y, particlePositions[i * 3 + 2]);
      vector.project(camera);
      
      const distance = Math.sqrt(
        Math.pow(vector.x - mouseX, 2) + 
        Math.pow(vector.y - mouseY, 2)
      );

      if (distance < minDistance && distance < 0.1) { // Threshold for showing tooltip
        minDistance = distance;
        nearestIndex = i;
      }
    }

    // Update cursor style
    container.style.cursor = nearestIndex !== null ? 'pointer' : 'default';

    if (nearestIndex !== null && nearestIndex !== currentTooltipIndex) {
      // Update active particle
      if (activeParticleIndex !== null) {
        targetParticleSizes[activeParticleIndex] = PARTICLE_DEFAULT_SIZE;
      }
      targetParticleSizes[nearestIndex] = PARTICLE_ACTIVE_SIZE;
      activeParticleIndex = nearestIndex;
      
      // Update tooltip
      const x = particlePositions[nearestIndex * 3];
      const y = particlePositions[nearestIndex * 3 + 1];
      const vector = new THREE.Vector3(x, y, particlePositions[nearestIndex * 3 + 2]);
      vector.project(camera);
      
      tooltipX = (vector.x + 1) * container.clientWidth / 2;
      tooltipY = (-vector.y + 1) * container.clientHeight / 2;
      currentTooltipIndex = nearestIndex;
      tooltipVisible = true;
      
      startTooltipTimer(); // Start the timer when showing new tooltip
    } else if (nearestIndex === null && activeParticleIndex !== null) {
      targetParticleSizes[activeParticleIndex] = PARTICLE_DEFAULT_SIZE;
      activeParticleIndex = null;
      tooltipVisible = false;
      currentTooltipIndex = null;
    }
  }

  function handleMouseLeave() {
    if (tooltipTimeout) {
      clearTimeout(tooltipTimeout);
    }
    tooltipOpacity = 0;
    setTimeout(() => {
      if (activeParticleIndex !== null) {
        const sizes = particles.geometry.attributes.size.array;
        sizes[activeParticleIndex] = PARTICLE_DEFAULT_SIZE;
        particles.geometry.attributes.size.needsUpdate = true;
      }
      activeParticleIndex = null;
      tooltipVisible = false;
      currentTooltipIndex = null;
    }, FADE_DURATION);
    container.style.cursor = 'default'; // Reset cursor on mouse leave
  }

  let resizeObserver: ResizeObserver;

  function init() {
    // Scene setup
    scene = new THREE.Scene();

    // Adjust camera based on screen size
    camera = new THREE.PerspectiveCamera(35, container.clientWidth / container.clientHeight, 1, 4000);
    
    // Adjust camera position based on screen width
    const isMobile = container.clientWidth < 1024; // lg breakpoint
    if (isMobile) {
      camera.position.z = 2000; // Move camera further back on mobile
      camera.position.y = 50; // Adjust height for mobile
    } else {
      camera.position.z = 1500; // Original desktop position
      camera.position.y = 100; // Original desktop height
    }

    // Renderer setup
    renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Add OrbitControls with disabled zoom
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;
    controls.enableZoom = false; // Disable zoom
    controls.maxPolarAngle = Math.PI * 0.6;

    // Initialize particle sizes array
    particleSizes = new Float32Array(maxParticleCount).fill(PARTICLE_DEFAULT_SIZE);
    targetParticleSizes = new Float32Array(maxParticleCount).fill(PARTICLE_DEFAULT_SIZE);

    const geometry = new THREE.BufferGeometry();
    particlePositions = new Float32Array(maxParticleCount * 3);
    const sizes = new Float32Array(maxParticleCount);
    const colors = new Float32Array(maxParticleCount * 3);

    // Initialize particles with positions, sizes, and colors
    for (let i = 0; i < maxParticleCount; i++) {
      // Set particle positions
      particlePositions[i * 3] = (Math.random() - 0.5) * radius * 1.8;     // X position
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * radius * 0.5; // Y position
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * radius * 0.4; // Z position
      
      // Set particle sizes
      sizes[i] = PARTICLE_DEFAULT_SIZE;
      
      // Set particle colors based on ontology class
      const color = getColorForClass(ontologyClasses[i]);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setDrawRange(0, particleCount);

    const material = new THREE.PointsMaterial({
      vertexColors: true, // Enable vertex colors
      blending: THREE.AdditiveBlending,
      transparent: true,
      sizeAttenuation: true,
      opacity: 0.95,
      size: PARTICLE_DEFAULT_SIZE
    });

    particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Create lines
    const linesGeometry = new THREE.BufferGeometry();
    positions = new Float32Array(maxParticleCount * maxParticleCount * 3);
    lineColors = new Float32Array(maxParticleCount * maxParticleCount * 3);

    linesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    linesGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));
    linesGeometry.setDrawRange(0, 0);

    const linesMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.7
    });

    linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
    scene.add(linesMesh);

    // Handle window resize
    window.addEventListener('resize', onWindowResize);

    // Add mouse move listener
    container.addEventListener('mousemove', handleMouseMove);

    // Add mouse leave listener
    container.addEventListener('mouseleave', handleMouseLeave);

    animate();
  }

  function onWindowResize() {
    camera.aspect = container.clientWidth / container.clientHeight;
    
    // Adjust camera position on resize
    const isMobile = container.clientWidth < 1024;
    if (isMobile) {
      camera.position.z = 2000;
      camera.position.y = 50;
    } else {
      camera.position.z = 1500;
      camera.position.y = 100;
    }
    
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  }

  function animate() {
    requestAnimationFrame(animate);
    controls.update();

    // Update particle sizes with smooth transition
    const sizes = particles.geometry.attributes.size.array;
    for (let i = 0; i < particleCount; i++) {
      const targetSize = i === activeParticleIndex ? PARTICLE_ACTIVE_SIZE : PARTICLE_DEFAULT_SIZE;
      sizes[i] += (targetSize - sizes[i]) * PARTICLE_TRANSITION_SPEED;
    }
    particles.geometry.attributes.size.needsUpdate = true;

    // Gentler rotation
    const rotationSpeed = 0.00015; // Even gentler rotation
    for (let i = 0; i < particleCount; i++) {
      const x = particlePositions[i * 3];
      const z = particlePositions[i * 3 + 2];
      
      particlePositions[i * 3] = x * Math.cos(rotationSpeed) - z * Math.sin(rotationSpeed);
      particlePositions[i * 3 + 2] = x * Math.sin(rotationSpeed) + z * Math.cos(rotationSpeed);
    }

    particles.geometry.attributes.position.needsUpdate = true;

    // Update connections
    let vertexpos = 0;
    let colorpos = 0;
    let numConnected = 0;

    for (let i = 0; i < particleCount; i++) {
      let connectionsForThisNode = 0; // Track connections per node
      for (let j = i + 1; j < particleCount; j++) {
        const dx = particlePositions[i * 3] - particlePositions[j * 3];
        const dy = particlePositions[i * 3 + 1] - particlePositions[j * 3 + 1];
        const dz = particlePositions[i * 3 + 2] - particlePositions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        // More balanced connections
        if (dist < radius * 0.42 && connectionsForThisNode < 6) { // Increased radius and max connections
          positions[vertexpos++] = particlePositions[i * 3];
          positions[vertexpos++] = particlePositions[i * 3 + 1];
          positions[vertexpos++] = particlePositions[i * 3 + 2];

          positions[vertexpos++] = particlePositions[j * 3];
          positions[vertexpos++] = particlePositions[j * 3 + 1];
          positions[vertexpos++] = particlePositions[j * 3 + 2];

          const alpha = 1.0 - dist / (radius * 0.42);
          const brightBlue = 0.8 * alpha;
          const midBlue = 0.6 * alpha;
          const darkBlue = 0.4 * alpha;
          
          lineColors[colorpos++] = brightBlue;
          lineColors[colorpos++] = brightBlue;
          lineColors[colorpos++] = 1.0;

          lineColors[colorpos++] = midBlue;
          lineColors[colorpos++] = darkBlue;
          lineColors[colorpos++] = 0.9;

          numConnected++;
          connectionsForThisNode++;
        }
      }
    }

    linesMesh.geometry.setDrawRange(0, numConnected * 2);
    linesMesh.geometry.attributes.position.needsUpdate = true;
    linesMesh.geometry.attributes.color.needsUpdate = true;

    renderer.render(scene, camera);
  }

  onMount(() => {
    if (container) {
      init();
      
      // Create a ResizeObserver to watch for container size changes
      resizeObserver = new ResizeObserver(() => {
        if (container) {
          onWindowResize();
        }
      });
      
      resizeObserver.observe(container);
    }

    return () => {
      if (renderer) {
        window.removeEventListener('resize', onWindowResize);
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
        renderer.dispose();
      }
      if (tooltipTimeout) {
        clearTimeout(tooltipTimeout);
      }
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  });
</script>

<TooltipProvider>
  <div 
    bind:this={container}
    class="w-full lg:h-[600px] h-[400px] relative"
    on:mouseleave={handleMouseLeave}
  >
    {#if tooltipVisible && currentTooltipIndex !== null}
      <div 
        class="absolute pointer-events-none"
        style="
          left: {tooltipX}px; 
          top: {tooltipY}px; 
          transform: translate(-50%, -100%);
          opacity: {tooltipOpacity};
          transition: opacity {tooltipOpacity === 1 ? FADE_IN_DURATION : FADE_DURATION}ms ease-in-out;
        "
      >
        <Tooltip open={true}>
          <TooltipContent
            class={`backdrop-blur-sm shadow-sm px-2 py-1 ${getCategoryForClass(ontologyClasses[currentTooltipIndex])?.color}`}
            sideOffset={5}
          >
            <div class="text-xs font-medium text-neutral-900 tracking-tight">
              {ontologyClasses[currentTooltipIndex]}
            </div>
          </TooltipContent>
        </Tooltip>
      </div>
    {/if}
  </div>
</TooltipProvider>

<style>
  :global(.tooltip-transition-enter-active),
  :global(.tooltip-transition-leave-active) {
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  :global(.tooltip-transition-enter-from),
  :global(.tooltip-transition-leave-to) {
    opacity: 0;
    transform: translate(-50%, -90%);
  }
</style> 