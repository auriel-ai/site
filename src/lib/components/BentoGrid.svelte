<script lang="ts">
  import { Bot, Settings, ChartNetwork, Check, Globe, Infinity, BadgePercent, KeyRound, Download, Github, CreditCard, Users, Plug, ShieldCheck } from 'lucide-svelte';
  import MiniDashboard from './MiniDashboard.svelte';
  import IntegrationNetwork from './IntegrationNetwork.svelte';
  import AnimatedLock from './AnimatedLock.svelte';
</script>

<div class="w-full grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-6 bg-transparent max-w-7xl mx-auto my-24 px-4">
  <!-- Special Card: Your 24/7 Digital Workforce (wide, split layout) -->
  <div class="bg-white rounded-2xl p-8 flex flex-col justify-between min-h-[260px] shadow-sm lg:col-span-2 lg:row-span-1 transition-transform duration-200 will-change-transform hover:-translate-y-2">
    <div class="flex flex-col md:flex-row h-full gap-8">
      <!-- Left: Heading and Subtext -->
      <div class="flex-1 flex flex-col justify-start">
        <Bot class="w-8 h-8 text-neutral-700 mb-3" />
        <h3 class="font-regular text-xl text-neutral-700 mb-2">Your 24/7 Digital Workforce</h3>
        <p class="text-neutral-600 font-light">Boost productivity with AI agents designed specifically for your business, automating repetitive tasks, reducing costs, and working tirelessly around the clock to support your team.</p>
      </div>
      <!-- Right: Mini Dashboard Visual -->
      <div class="flex-1 flex flex-col gap-4 justify-center items-center">
        <MiniDashboard />
      </div>
    </div>
  </div>

  <!-- Module 2: Automated Workflows -->
  <div class="bg-white rounded-2xl p-8 flex flex-col justify-between min-h-[260px] shadow-sm lg:col-span-1 lg:row-span-1 transition-transform duration-200 will-change-transform hover:-translate-y-2">
    <div class="mb-4">
      <Settings class="w-8 h-8 text-neutral-700 mb-3" />
      <h3 class="font-regular text-lg text-neutral-700 mb-2">Streamline Your Operations</h3>
      <p class="text-neutral-600 font-light mb-2">Simplify complex processes with AI-powered automation, removing bottlenecks, enhancing team efficiency, and ensuring smooth operations with minimal manual effort.</p>
    </div>

      <ul class="mt-3 space-y-2 text-neutral-600 text-sm font-light">
        <li class="flex items-center gap-2"><Check class="w-4 h-4 text-green-500" />Eliminate manual bottlenecks</li>
        <li class="flex items-center gap-2"><Check class="w-4 h-4 text-green-500" />Accelerate task completion</li>
        <li class="flex items-center gap-2"><Check class="w-4 h-4 text-green-500" />Reduce human error</li>
        <li class="flex items-center gap-2"><Check class="w-4 h-4 text-green-500" />Free up your team for high-value work</li>
      </ul>
  </div>

  <!-- Module 3: Gain Real-Time Insights -->
  <div class="bg-white rounded-2xl p-8 flex flex-col justify-between min-h-[200px] shadow-sm lg:col-span-1 lg:row-span-1 transition-transform duration-200 will-change-transform hover:-translate-y-2">
    <div class="mb-4">
      <ChartNetwork class="w-8 h-8 text-neutral-700 mb-3" />
      <h3 class="font-regular text-lg text-neutral-700 mb-2">Gain Real-Time Insights</h3>
      <p class="text-neutral-600 font-light mb-4">Track agent performance instantly, identify issues before they escalate, and leverage actionable data to optimize decisions and drive business growth.</p>
    </div>
      <div class="w-full flex flex-col justify-center items-center gap-2">
        <!-- Animated SVG Line Chart -->
        <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-36 h-14">
          <polyline points="0,35 20,25 40,30 60,10 80,20 100,5 120,15" fill="none" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <animate attributeName="stroke-dasharray" from="0,300" to="300,0" dur="1.2s" fill="freeze" />
          </polyline>
          <!-- Pulsing data point (amber) -->
          <circle cx="60" cy="10" r="4" fill="#f59e42">
            <animate attributeName="r" values="4;7;4" dur="1.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.5;1" dur="1.2s" repeatCount="indefinite" />
          </circle>
        </svg>
        <!-- KPI Badges -->
        <div class="flex gap-2 mt-1">
          <span class="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-medium border border-indigo-100">Uptime: 99.99%</span>
          <span class="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-medium border border-indigo-100">Latency: 120ms</span>
        </div>
      </div>
  </div>

  <!-- Module 4: Connect Your Tools -->
  <div class="bg-white rounded-2xl p-8 flex flex-col justify-between min-h-[200px] shadow-sm lg:col-span-1 lg:row-span-1 transition-transform duration-200 will-change-transform hover:-translate-y-2">
    <div class="mb-4">
      <Plug class="w-8 h-8 text-neutral-700 mb-3" />
      <h3 class="font-regular text-lg text-neutral-700 mb-2">Connect Your Tools</h3>
      <p class="text-neutral-600 font-light mb-2">We'll connect your favorite apps and platforms. Our AI agents can integrate with CRMs, email, chat, and more—so your workflows stay connected and your data flows through your business without friction.</p>
    </div>
    <IntegrationNetwork />
  </div>

  <!-- Module 5: Top Notch Security -->
  <div class="bg-white rounded-2xl p-8 flex flex-col justify-between min-h-[200px] shadow-sm lg:col-span-1 lg:row-span-1 transition-transform duration-200 will-change-transform hover:-translate-y-2">
    <div class="mb-4">
      <div class="mb-4">
        <ShieldCheck class="w-8 h-8 text-neutral-700 mb-3" />
        <h3 class="font-regular text-lg text-neutral-700 mb-2 mt-2">Top Notch Security</h3>
        <p class="text-neutral-600 font-light mb-4">We'll deploy on your servers or private cloud infrastructure for maximum control. Our agents support on-premises hosting, so your data never leaves your environment—ensuring compliance, privacy, and peace of mind.</p>
      </div>
    </div>
    <div class="flex justify-center w-full mb-2">
        <AnimatedLock />
      </div>
  </div>
</div> 