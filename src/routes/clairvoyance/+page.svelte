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
            title: 'Custom Ontologies',
            description: 'Clairvoyance provides pre-made ontology templates alongside the flexibility to customize via JSON, defining your business logic with precision. This ensures your data is structured semantically to reflect how your startup runs, leading to more accurate actionable insights.'
        },
        {
            icon: ChartNetwork,
            title: 'Visualize Your Business',
            description: 'Explore and visualize aggregated data through an intuitive interface, leveraging Semantic Knowledge Graphs. Simplify complex data relationships to enhance strategic decision-making from a panoramic BI viewpoint.'
        },
        {
            icon: Grid2X2,
            title: 'Unified Data, Unified Vision',
            description: 'Built-in pipelines for data aggregation, supporting CSV uploads and API integrations with continuous delivery from major sources. Break down data silos for a unified view of your business data.'
        },
        {
            icon: ChartNoAxesCombined,
            title: 'Metrics That Matter',
            description: 'Our metrics dashboard displays primary and secondary metrics with customizable widgets, including the ability to create bespoke visualizations. View key metrics at a glance to make informed decisions swiftly and identify sheltered growth opportunities.'
        },
        {
            icon: Bot,
            title: 'Chat Powered Queries',
            description: 'Our AI-powered chat interface lets you query your ontology using natural language, making data analysis accessible and lightning fast.'
        },
        {
            icon: NotebookText,
            title: 'Notebooks: A Deeper Dive into Data',
            description: 'Use the advanced analytics dashboards built around notebooks to write complex SQL queries and build interactive visualizations and reports to uncover nuanced insights from your ontology.'
        }
    ];

    const faqs = [
        {
            question: "What is Clairvoyance?",
            answer: "Clairvoyance is a custom analytics engine for startups developed by Auriel Analytics. It transforms raw data into actionable insights through custom ontologies, semantic knowledge graphs, and tailored dashboards, helping startups make data-driven decisions to boost their metrics."
        },
        {
            question: "What is an ontology?",
            answer: "An ontology is a formal, structured framework that defines the concepts, relationships, and rules within a specific domain. Ontologies are a way of enforcing data consistency that ensures your data is structured according to your unique business logic. By using ontologies to break down data silos and aggregate all business data into one unified database, it results in more accurate insights by providing a complete, contextual view of your business operations and KPIs."
        },
        {
            question: "Can I customize the ontology?",
            answer: "Yes, Clairvoyance offers pre-made ontology templates for quick setup, and you can further customize these via JSON files to match your startup's specific needs, ensuring your data framework is as unique as your business model."
        },
        {
            question: "What are Semantic Knowledge Graphs?",
            answer: "Semantic Knowledge Graphs are visual representations of your business's ontology, organizing data into semantic graphs. They simplify understanding complex data relationships, making it easier to see connections and patterns that can drive strategic decisions."
        },
        {
            question: "How does Clairvoyance handle data aggregation?",
            answer: "Clairvoyance includes built-in pipelines for aggregating and centralizing data, breaking down data silos. It supports CSV uploads and API integrations for continuous data delivery from major sources, ensuring all your data is in one place for comprehensive analysis."
        },
        {
            question: "Can I track our latest metrics/KPIs?",
            answer: "Our metrics dashboard displays custom set primary and secondary metrics through customizable widgets. It allows you to view key metrics at a glance, helping you make informed decisions quickly and identify growth opportunities."
        },
        {
            question: "How does the AI chat interface work?",
            answer: "The AI-powered chat interface lets you query your data using natural language. This feature provides quick, self-serve data analysis, making it accessible for anyone in your team to get insights fast without needing deep technical knowledge. Please note that for self-hosted Clairvoyance instances you will need to provide an API key in the configuration settings."
        },
        {
            question: "Is Clairvoyance open source?",
            answer: "Yes, Clairvoyance is open source, which means you can freely use, modify, and distribute the core product. This allows for community contributions and self-hosting."
        },
        {
            question: "Do you build custom Clairvoyance instances?",
            answer: "Yes, Auriel works closely with startups to build bespoke versions of Clairvoyance. This includes defining core KPIs & metrics, setting up custom ontologies, integrating data sources and designing custom dashboards, ensuring your analytics solutions are tailor-made to be precise and effective."
        },
    ];
</script>

<main class="container mx-auto px-4 lg:px-4 py-20" in:fade={{ duration: 300, delay: 150 }}>
    <div class="max-w-xl mx-auto mb-2 mt-5">
        <div class="visualization-frame">
            <ClairvoyanceVisualization />
        </div>
    </div>
    
    <h1 class="text-4xl font-orbitron tracking-wider text-neutral-900 text-center mb-12 lg:mb-8 max-w-4xl mx-auto">
        An OSS Data Insight Engine For Startups
    </h1>
    <h2 class="text-xl text-neutral-600 text-center mb-10 lg:mb-8 max-w-[90%] lg:max-w-none mx-auto">
        Transform your startup's siloed data into actionable intelligence
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
                        Free and open-source BI engine with flexible deployment options.
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
