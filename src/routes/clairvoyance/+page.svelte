<script lang="ts">
    import ClairvoyanceVisualization from '$lib/components/ClairvoyanceVisualization.svelte';
    import TowerVisualization from '$lib/components/TowerVisualization.svelte';
    import * as Card from "$lib/components/ui/card";
    import * as Accordion from "$lib/components/ui/accordion";
    import { fade } from 'svelte/transition';
    import { toast } from "svelte-sonner";
    import { 
        FileJson, 
        ChartNetwork, 
        Grid2X2, 
        ChartNoAxesCombined, 
        Bot, 
        NotebookText,
        Image,
        Cloud,
        Github
    } from 'lucide-svelte';
    import { Button } from "$lib/components/ui/button";

    // Clairvoyance features
    let features = [
        {
            icon: FileJson,
            title: 'Agent-Specific Ontologies',
            description: 'Define your AI agents behavior patterns, expected outcomes, and failure modes with customizable ontologies. Map the relationships between prompts, responses, and performance metrics to create a complete picture of your operations.'
        },
        {
            icon: ChartNetwork,
            title: 'Behavioral Visualization',
            description: 'See how your agents actually behave in production through intuitive knowledge graphs. Identify patterns, anomalies, and edge cases that might be invisible in logs alone, giving you unprecedented visibility into complex AI systems.'
        },
        {
            icon: Grid2X2,
            title: 'Comprehensive Data Collection',
            description: 'Capture every aspect of your agents operations with built-in collectors for prompts, completions, context, tokens, latency, and user interactions.'
        },
        {
            icon: ChartNoAxesCombined,
            title: 'Performance Metrics Dashboard',
            description: 'Track critical agent metrics like response quality, hallucination rates, token efficiency, and latency through customizable dashboards. Compare performance across versions to precisely measure the impact of your optimizations.'
        },
        {
            icon: Bot,
            title: 'Agent Interrogation',
            description: 'Ask natural language questions about your agents performance and behavior. Our AI-powered interface lets you explore your data without complex queries, making observability accessible to your entire team.'
        },
        {
            icon: NotebookText,
            title: 'Deep Analysis Notebooks',
            description: 'Use interactive notebooks for advanced analysis when you need to dive deeper. Perform complex queries, build custom visualizations, and create shareable reports that connect technical improvements to business outcomes.'
        }
    ];

    const faqs = [
        {
            question: "What is Clairvoyance?",
            answer: "Clairvoyance is an AI agent observability platform developed by Auriel Analytics. It helps teams observe how their agents behave in production, diagnose issues, and optimize performance through comprehensive data collection, custom ontologies, and actionable visualizations."
        },
        {
            question: "How is this different from existing monitoring tools?",
            answer: "Unlike general monitoring tools, Clairvoyance is built specifically for AI agents with specialized metrics, visualizations, and ontologies that understand the unique relationships between prompts, completions, and performance. We focus on semantic understanding of agent behavior, not just log collection."
        },
        {
            question: "What metrics can I track for my AI agents?",
            answer: "Clairvoyance tracks both technical metrics (latency, token usage, completion patterns, hallucination rates) and business metrics (user satisfaction, task completion rates, conversion impact) to give you a complete picture of how your agents are performing and where to optimize."
        },
        {
            question: "How does the ontology system work?",
            answer: "Our ontologies create a semantic model of your AI agent's behavior, defining the relationships between inputs, outputs, context, and performance. This structured approach helps you understand patterns across thousands of interactions and identify specific scenarios where your agent excels or struggles."
        },
        {
            question: "How do you collect agent data?",
            answer: "Clairvoyance includes lightweight collectors for all major AI platforms (OpenAI, Anthropic, etc.) and frameworks (LangChain, LlamaIndex, etc.), as well as a direct API for custom integrations. The collectors capture prompts, completions, metadata, and performance metrics with minimal overhead."
        },
        {
            question: "Can I connect agent performance to business outcomes?",
            answer: "Yes, a key feature of Clairvoyance is the ability to correlate technical improvements in your agents with business metrics. Our dashboards and notebooks help you quantify the business impact of your optimization efforts and prioritize improvements with the highest ROI."
        },
        {
            question: "How does the Agent Interrogation feature work?",
            answer: "Agent Interrogation allows you to ask natural language questions about your agent's performance and behavior. The system translates your questions into appropriate queries against your data and returns visualizations and insights, making observability accessible without requiring you to write SQL queries."
        },
        {
            question: "Is Clairvoyance open source?",
            answer: "Yes, the core Clairvoyance platform is open source and free to use. We offer enterprise features, support, and custom implementation services for teams that need additional capabilities or assistance with their observability strategy."
        },
        {
            question: "Do you build custom observability solutions?",
            answer: "Yes, we can work with AI teams to build tailored observability systems for complex agent deployments. Our services include defining critical metrics, creating custom ontologies for specific use cases, integrating with existing systems, and building specialized dashboards that connect technical and business metrics."
        }
    ];
</script>

<main class="container mx-auto px-4 lg:px-4 py-20" in:fade={{ duration: 300, delay: 150 }}>
    <div class="max-w-xl mx-auto mb-2 mt-5">
        <div class="visualization-frame">
            <ClairvoyanceVisualization />
        </div>
    </div>
    
    <h1 class="text-3xl font-orbitron tracking-wider text-neutral-900 text-center mb-12 lg:mb-8 max-w-4xl mx-auto">
        An Open-Source AI Agent Observability Platform
    </h1>
    <h2 class="text-lg text-neutral-600 text-center mb-10 lg:mb-8 max-w-[90%] lg:max-w-none mx-auto">
        Observe, understand, and optimize your AI agents with comprehensive data visibility
    </h2>
    
    <div class="flex flex-col lg:flex-row justify-center gap-4 items-center">
        <Button 
            variant="outline"
            size="lg"
            href="/start"
            class="w-full lg:w-auto font-orbitron tracking-wider"
        >
            SELF HOST >>
        </Button>
        <Button 
            variant="default"
            size="lg"
            href="/enquire"
            class="w-full lg:w-auto bg-neutral-900 hover:bg-neutral-800 font-orbitron tracking-wider"
        >
            WORK WITH US >>
        </Button>
    </div>

    <div class="mt-24 mb-32 lg:mt-20 lg:mb-40">
        <div class="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg relative screenshot-container mb-40">
            <img 
                src="/screenshot.png" 
                alt="Clairvoyance Dashboard Preview" 
                class="w-full h-auto fade-edges"
            />
        </div>

        <h2 class="text-3xl font-orbitron text-center mb-20">Get Started</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
            <Card.Root class="border-neutral-200 hover:border-blue-200 transition-all duration-300 hover:shadow-lg group py-5">
                <Card.Header class="pt-5">
                    <div class="flex items-center justify-center w-full">
                        <Button 
                            variant="default" 
                            size="lg"
                            href="https://github.com/"
                            class="bg-blue-500 hover:bg-blue-600 group-hover:scale-110 transition-all duration-300"
                        >
                            <Github class="w-5 h-5" />
                            <span class="font-medium">Star on GitHub</span>
                        </Button>
                    </div>
                    <Card.Description class="text-neutral-600 text-sm leading-relaxed pt-5">
                        Free and open-source observability engine with flexible deployment options.
                    </Card.Description>
                </Card.Header>
            </Card.Root>

            <Card.Root class="border-neutral-200 hover:border-blue-200 transition-all duration-300 hover:shadow-lg group">
                <Card.Header class="pt-14">
                    <code class="bg-neutral-100 px-4 py-2 rounded-lg font-mono text-xs block text-center">
                        curl -sSL install.auriel.tech | bash
                    </code>
                    <Card.Description class="text-neutral-600 text-sm leading-relaxed pt-5">
                        <span class="block mt-1">
                            Get started in seconds with our one-line installation script.
                        </span>
                    </Card.Description>
                </Card.Header>
            </Card.Root>

            <Card.Root class="pb-10 border-neutral-200 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
                <Card.Header class="pt-14">
                    <div class="flex flex-wrap gap-2 pt-2 items-center justify-center">
                        <span class="text-blue-500 font-medium text-lg">Connect Everything</span> 
                    </div>
                    <Card.Description class="text-neutral-600 text-sm leading-relaxed pt-5">
                        Built-in connectors for your databases, warehouses and APIs off the bat.
                    </Card.Description>
                </Card.Header>
            </Card.Root>
        </div>
    </div>

    <div class="my-24 lg:my-32">
        <h2 class="text-3xl font-orbitron text-center mb-20">Modular Architecture</h2>
        <TowerVisualization />
    </div>

    <div class="features px-0 lg:p-8 my-16 lg:my-20">
        <h2 class="text-xl lg:text-2xl font-orbitron tracking-wider text-neutral-900 text-center mb-10 lg:mb-14">Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-4xl mx-auto">
            {#each features as feature}
                <Card.Root class="border-neutral-200 bg-neutral-50">
                    <Card.Header class="space-y-0 p-4 lg:p-6">
                        <div class="flex items-center gap-3">
                            <div class="icon text-[#4C99FF] transition-colors duration-300 hover:text-[#6AABFF]">
                                <svelte:component this={feature.icon} size={20} strokeWidth={1.5} />
                            </div>
                            <Card.Title class="text-lg lg:text-xl font-normal">{feature.title}</Card.Title>
                        </div>
                    </Card.Header>
                    <Card.Content class="p-4 lg:p-6 pt-0 lg:pt-0">
                        <Card.Description class="text-sm lg:text-md text-neutral-600 font-light leading-relaxed">
                            {feature.description}
                        </Card.Description>
                    </Card.Content>
                </Card.Root>
            {/each}
        </div>
    </div>
    
    <div class="max-w-3xl mx-auto my-24 lg:my-32">
        <h2 class="text-xl lg:text-2xl font-orbitron tracking-wider text-neutral-900 text-center mb-10 lg:mb-14">
            Frequently Asked Questions
        </h2>
        
        <Accordion.Root type="single" class="w-full">
            {#each faqs as faq, i}
                <Accordion.Item value={`item-${i}`}>
                    <Accordion.Trigger class="text-left font-normal text-base lg:text-lg p-4 lg:p-6">
                        {faq.question}
                    </Accordion.Trigger>
                    <Accordion.Content class="text-neutral-600 text-sm lg:text-md p-4 lg:p-6">
                        {faq.answer}
                    </Accordion.Content>
                </Accordion.Item>
            {/each}
        </Accordion.Root>
    </div>
</main>

<style>
    .visualization-frame {
        height: 300px;
        border-radius: 0.75rem;
        overflow: hidden;
    }
    .features {
        max-width: 1200px;
        margin: 0 auto;
    }
    
    .screenshot-container {
        position: relative;
        max-height: 500px;
        overflow: hidden;
    }

    .fade-edges {
        -webkit-mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
        );
        mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
        );
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
</style>
