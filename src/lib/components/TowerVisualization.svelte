<script lang="ts">
    const boxes = [
        {
            id: 'analytics',
            label: 'Performance Optimization',
            color: '#818CF8',
            y: 200,
            description: 'Actionable insights to optimize agent performance. Leverage AI-powered interfaces for natural language queries or use advanced analysis with SQL for deeper performance diagnostics and improvement recommendations.'
        },
        {
            id: 'semantic',
            label: 'Behavioral Visualization',
            color: '#4ADE80',
            y: 500,
            description: 'Visualize and explore your agents behavioral patterns through powerful semantic knowledge graphs, revealing hidden relationships between prompts, responses, and performance metrics.'
        },
        {
            id: 'ontology',
            label: 'Agent Ontologies',
            color: '#60A5FA',
            y: 800,
            description: 'Agent-specific ontologies define and structure your AIs operating logic, ensuring consistent monitoring of critical behaviors and meaningful performance analysis across different agent versions.'
        },
        {
            id: 'aggregation',
            label: 'Data Processing',
            color: '#F472B6',
            y: 1100,
            description: 'Process and analyze agent interactions in real-time, transforming raw operational data into structured insights about agent behavior, performance issues, and optimization opportunities.'
        },
        {
            id: 'connectivity',
            label: 'Agent Integration',
            color: '#FB923C',
            y: 1400,
            description: 'Connect to any AI platform through our flexible integration layer, supporting both batch and real-time observability for OpenAI, Anthropic, LangChain, and custom agent implementations.'
        }
    ];
</script>

<div class="max-w-6xl mx-auto my-48 lg:my-20">
    <div class="grid lg:grid-cols-[3fr,2fr] lg:gap-16 items-start">
        <!-- Left column: Tower -->
        <div class="relative lg:block">
            <svg viewBox="0 0 1000 1800" class="w-full h-full hidden lg:block">
                {#each [...boxes].reverse() as box}
                    <g transform="translate(200, {box.y})">
                        <!-- Box faces remain the same -->
                        <path d="M 0 0 L 400 -200 L 800 0 L 400 200 Z" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
                        <path d="M 800 0 L 800 120 L 400 320 L 400 200 Z" fill="#f1f5f9" stroke="#e2e8f0" stroke-width="1"/>
                        <path d="M 0 0 L 0 120 L 400 320 L 400 200 Z" fill="#f5f7fa" stroke="#e2e8f0" stroke-width="1"/>
                        
                        <g transform="translate(20, 80) rotate(26)">
                            <circle cx="0" cy="0" r="6" fill={box.color} />
                            <text 
                                x="18" 
                                y="7" 
                                transform="skewX(25)" 
                                class="text-xl font-orbitron fill-neutral-700"
                            >
                                {box.label}
                            </text>
                        </g>
                    </g>
                {/each}
            </svg>

            <!-- Mobile version -->
            <div class="lg:hidden space-y-28">
                {#each boxes as box}
                    <div class="space-y-10">
                        <!-- Individual box -->
                        <div class="relative aspect-[2/1]">
                            <svg viewBox="0 0 1000 600" class="w-full h-full -mx-10 -my-10">
                                <g transform="translate(200, 200)">
                                    <path d="M 0 0 L 400 -200 L 800 0 L 400 200 Z" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
                                    <path d="M 800 0 L 800 120 L 400 320 L 400 200 Z" fill="#f1f5f9" stroke="#e2e8f0" stroke-width="1"/>
                                    <path d="M 0 0 L 0 120 L 400 320 L 400 200 Z" fill="#f5f7fa" stroke="#e2e8f0" stroke-width="1"/>
                                    
                                    <g transform="translate(20, 70) rotate(26)">
                                        <circle cx="0" cy="0" r="6" fill={box.color} />
                                        <text 
                                            x="18" 
                                            y="7" 
                                            transform="skewX(25)" 
                                            class="text-2xl font-orbitron fill-neutral-700"
                                        >
                                            {box.label}
                                        </text>
                                    </g>
                                </g>
                            </svg>
                        </div>

                        <!-- Description below box -->
                        <div class="lg:bg-neutral-50 p-6 rounded-lg border-t lg:border border-neutral-200">
                            <div class="flex items-start gap-4">
                                <div class="w-4 h-4 rounded-full mt-1" style="background-color: {box.color}" />
                                <p class="text-neutral-600 text-sm leading-relaxed">{box.description}</p>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>

        <!-- Right column: Descriptions (desktop only) -->
        <div class="relative h-full hidden lg:block">
            {#each boxes as box}
                <div 
                    class="absolute mt-8 left-0 right-0"
                    style="top: {(box.y / 1750) * 100}%; transform: translateY(-50%);"
                >
                    <div class="absolute -left-16 top-1/2 w-16 h-[1px] bg-neutral-200"></div>
                    
                    <div class="flex items-start gap-4 bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                        <div class="w-4 h-4 rounded-full mt-1" style="background-color: {box.color}" />
                        <div>
                            <p class="text-neutral-600 text-sm leading-relaxed">{box.description}</p>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div> 