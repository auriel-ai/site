<script lang="ts">
  // Props
  export let isPageLoaded = false;
  export let activeSection = '';
  export let STAGGER_DELAY = 50;
  export let shouldAnimate = false;

  // Track which FAQ is open
  let openIndex = -1; // -1 means no FAQ is open

  // Simple toggle function
  function toggleFAQ(index: number) {
    if (openIndex === index) {
      // If clicking on the open item, close it
      openIndex = -1;
    } else {
      // Otherwise open the clicked item
      openIndex = index;
    }
  }

  // FAQs
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

<section id="faq" class="py-16 md:py-20 lg:py-24 xl:py-28 mb-40 relative">
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-cyan-950/10 to-transparent opacity-20 blur-3xl"></div>
  </div>

  <div class="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
    <div class="max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto">
      <h2 class="text-xl md:text-2xl lg:text-3xl font-orbitron tracking-wider text-cyan-400 text-center mb-10 md:mb-12 lg:mb-16">
        Frequently Asked Questions
      </h2>
      
      <div class="space-y-3">
        {#each faqs as faq, i}
          <div class="border border-neutral-800 rounded-md bg-neutral-900/50 backdrop-blur-sm hover:border-cyan-500/20 transition-all duration-300">
            <button 
              on:click={() => toggleFAQ(i)}
              class="text-left font-normal text-base lg:text-lg p-4 lg:p-6 text-neutral-300 hover:text-cyan-400 transition-colors w-full flex justify-between items-center"
            >
              <span>{faq.question}</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round"
                class="transition-transform duration-200"
                style={openIndex === i ? 'transform: rotate(180deg)' : ''}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            
            {#if openIndex === i}
              <div class="text-neutral-400 text-sm lg:text-base p-4 lg:p-6 pt-0 leading-relaxed">
                {faq.answer}
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </div>
</section> 