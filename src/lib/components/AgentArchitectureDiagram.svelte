<script lang="ts">
  export let type: 'monolithic' | 'microagents' | 'workflows' = 'monolithic';
</script>

{#if type === 'monolithic'}
  <!-- Redesigned Monolithic Agent SVG -->
  <svg viewBox="0 0 420 210" height="100%" style="width:auto;display:block;margin:0 auto;" fill="none" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
    <!-- Master Agent -->
    <rect x="135" y="20" width="150" height="48" rx="18" fill="#fffbe8" stroke="#fbbf24" stroke-width="2.5" filter="url(#shadow)"/>
    <text x="210" y="50" text-anchor="middle" font-size="18" font-weight="bold" fill="#b45309" font-family="'Orbitron', monospace">Master Agent</text>
    <!-- Tools -->
    <rect x="40" y="140" width="90" height="40" rx="16" fill="#e0f7ef" stroke="#10b981" stroke-width="2" filter="url(#shadow)"/>
    <rect x="165" y="140" width="90" height="40" rx="16" fill="#e0f7ef" stroke="#10b981" stroke-width="2" filter="url(#shadow)"/>
    <rect x="290" y="140" width="90" height="40" rx="16" fill="#e0f7ef" stroke="#10b981" stroke-width="2" filter="url(#shadow)"/>
    <text x="85" y="165" text-anchor="middle" font-size="16" font-weight="bold" fill="#047857" font-family="'Orbitron', monospace">Tool A</text>
    <text x="210" y="165" text-anchor="middle" font-size="16" font-weight="bold" fill="#047857" font-family="'Orbitron', monospace">Tool B</text>
    <text x="335" y="165" text-anchor="middle" font-size="16" font-weight="bold" fill="#047857" font-family="'Orbitron', monospace">Tool C</text>
    <!-- Curved Arrows -->
    <path d="M210 68 Q120 104 85 140" stroke="#fbbf24" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/>
    <path d="M210 68 Q210 104 210 140" stroke="#fbbf24" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/>
    <path d="M210 68 Q300 104 335 140" stroke="#fbbf24" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/>
    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto" markerUnits="strokeWidth">
        <path d="M2,2 L7,5 L2,8" fill="none" stroke="#fbbf24" stroke-width="2.5"/>
      </marker>
      <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#fbbf24" flood-opacity="0.08"/>
      </filter>
    </defs>
  </svg>
{:else if type === 'microagents'}
  <!-- Redesigned Microagents SVG -->
  <svg viewBox="0 0 420 240" height="100%" style="width:auto;display:block;margin:0 auto;" fill="none" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
    <!-- Master Agent -->
    <rect x="135" y="20" width="150" height="48" rx="18" fill="#fffbe8" stroke="#fbbf24" stroke-width="2.5" filter="url(#shadow)"/>
    <text x="210" y="50" text-anchor="middle" font-size="18" font-weight="bold" fill="#b45309" font-family="'Orbitron', monospace">Master Agent</text>
    <!-- Micro Agents -->
    <rect x="60" y="110" width="80" height="38" rx="14" fill="#fef9c3" stroke="#fbbf24" stroke-width="2" filter="url(#shadow)"/>
    <rect x="170" y="110" width="80" height="38" rx="14" fill="#fef9c3" stroke="#fbbf24" stroke-width="2" filter="url(#shadow)"/>
    <rect x="280" y="110" width="80" height="38" rx="14" fill="#fef9c3" stroke="#fbbf24" stroke-width="2" filter="url(#shadow)"/>
    <text x="100" y="135" text-anchor="middle" font-size="16" font-weight="bold" fill="#b45309" font-family="'Orbitron', monospace">Agent A</text>
    <text x="210" y="135" text-anchor="middle" font-size="16" font-weight="bold" fill="#b45309" font-family="'Orbitron', monospace">Agent B</text>
    <text x="320" y="135" text-anchor="middle" font-size="16" font-weight="bold" fill="#b45309" font-family="'Orbitron', monospace">Agent C</text>
    <!-- Tools -->
    <rect x="60" y="180" width="80" height="32" rx="12" fill="#e0f7ef" stroke="#10b981" stroke-width="2" filter="url(#shadow)"/>
    <rect x="170" y="180" width="80" height="32" rx="12" fill="#e0f7ef" stroke="#10b981" stroke-width="2" filter="url(#shadow)"/>
    <rect x="280" y="180" width="80" height="32" rx="12" fill="#e0f7ef" stroke="#10b981" stroke-width="2" filter="url(#shadow)"/>
    <text x="100" y="202" text-anchor="middle" font-size="15" font-weight="bold" fill="#047857" font-family="'Orbitron', monospace">Tool A</text>
    <text x="210" y="202" text-anchor="middle" font-size="15" font-weight="bold" fill="#047857" font-family="'Orbitron', monospace">Tool B</text>
    <text x="320" y="202" text-anchor="middle" font-size="15" font-weight="bold" fill="#047857" font-family="'Orbitron', monospace">Tool C</text>
    <!-- Curved Arrows -->
    <path d="M210 68 Q120 89 100 110" stroke="#fbbf24" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/>
    <path d="M210 68 Q210 89 210 110" stroke="#fbbf24" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/>
    <path d="M210 68 Q300 89 320 110" stroke="#fbbf24" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/>
    <path d="M100 148 Q100 164 100 180" stroke="#10b981" stroke-width="2" fill="none" marker-end="url(#arrow2)"/>
    <path d="M210 148 Q210 164 210 180" stroke="#10b981" stroke-width="2" fill="none" marker-end="url(#arrow2)"/>
    <path d="M320 148 Q320 164 320 180" stroke="#10b981" stroke-width="2" fill="none" marker-end="url(#arrow2)"/>
    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto" markerUnits="strokeWidth">
        <path d="M2,2 L7,5 L2,8" fill="none" stroke="#fbbf24" stroke-width="2.5"/>
      </marker>
      <marker id="arrow2" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto" markerUnits="strokeWidth">
        <path d="M2,2 L7,5 L2,8" fill="none" stroke="#10b981" stroke-width="2"/>
      </marker>
      <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#10b981" flood-opacity="0.08"/>
      </filter>
    </defs>
  </svg>
{:else if type === 'workflows'}
  <!-- Redesigned Workflows SVG - V2 -->
  <svg viewBox="0 0 420 220" height="100%" style="width:auto;display:block;margin:0 auto;" fill="none" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
    <!-- Nodes -->
    <g filter="url(#shadow)">
      <rect x="20" y="30" width="120" height="52" rx="20" fill="#eef2ff" stroke="#6366f1" stroke-width="2.5"/>
      <path d="M45 50 L 45 72 M 95 50 L 95 72 M 45 50 L 70 61 L 95 50" stroke="#4338ca" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="70" y="102" text-anchor="middle" font-size="18" font-weight="bold" fill="#312e81" font-family="'Orbitron', monospace">Trigger</text>
    </g>

    <g filter="url(#shadow)">
      <rect x="150" y="84" width="120" height="52" rx="20" fill="#eef2ff" stroke="#6366f1" stroke-width="2.5"/>
      <rect x="180" y="100" width="60" height="20" rx="4" stroke="#4338ca" stroke-width="2.5"/>
      <path d="M180 106 L 170 106 M 180 114 L 170 114 M 240 106 L 250 106 M 240 114 L 250 114" stroke="#4338ca" stroke-width="2.5" stroke-linecap="round"/>
      <text x="210" y="156" text-anchor="middle" font-size="18" font-weight="bold" fill="#312e81" font-family="'Orbitron', monospace">Process</text>
    </g>

    <g filter="url(#shadow)">
      <rect x="280" y="138" width="120" height="52" rx="20" fill="#eef2ff" stroke="#6366f1" stroke-width="2.5"/>
      <path d="M310 168 L 330 180 L 370 150" stroke="#4338ca" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="340" y="210" text-anchor="middle" font-size="18" font-weight="bold" fill="#312e81" font-family="'Orbitron', monospace">Action</text>
    </g>

    <!-- Arrows -->
    <path d="M120 70 Q150 75 165 88" stroke="#6366f1" stroke-width="2.5" fill="none" marker-end="url(#arrow3)"/>
    <path d="M250 130 Q270 135 285 142" stroke="#6366f1" stroke-width="2.5" fill="none" marker-end="url(#arrow3)"/>
    
    <defs>
      <marker id="arrow3" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto" markerUnits="strokeWidth">
        <path d="M2,2 L7,5 L2,8" fill="none" stroke="#6366f1" stroke-width="2.5"/>
      </marker>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="4" stdDeviation="4" flood-color="#6366f1" flood-opacity="0.08"/>
      </filter>
    </defs>
  </svg>
{/if} 