<script lang="ts">
  import { fade } from 'svelte/transition';
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card";
  import { Github, Copy, Check } from 'lucide-svelte';

  let copiedCommand = '';

  async function copyText(text: string) {
    await window.navigator.clipboard.writeText(text);
    copiedCommand = text;
    setTimeout(() => {
      copiedCommand = '';
    }, 2000);
  }

  const deploymentOptions = [
    {
      title: "Fork & Deploy The Pre-Alpha",
      status: "Available Soon",
      description: "Fork our GitHub repository to get started. We've provided a detailed deployment guide for Coolify, making it easy to deploy your instance for free in minutes. The repo includes an example config and best practices for production deployments.",
      command: "https://github.com/Auriel-Analytics/clairvoyance",
      isAvailable: true
    },
    {
      title: "Docker Image",
      status: "Coming Q2 2025",
      description: "We're currently working on providing an official Docker image to deploy on any system or server running Docker. Coming Q1 2025.",
      isAvailable: false
    },
    {
      title: "Coolify Template",
      status: "Coming Q2 2025",
      description: "Deploy instantly with our official Coolify Service Template, built on top of our Docker image. It gets you up and running in just a few clicks. Coming later this year.",
      isAvailable: false
    }
  ];
</script>

<div 
  in:fade={{ duration: 300, delay: 150 }}
  class="container mx-auto max-w-2xl px-6 lg:px-4 py-32 lg:py-40 relative"
>
  <div class="absolute inset-0 bg-gradient-radial from-cyan-500/10 to-transparent opacity-20 blur-3xl pointer-events-none"></div>
  
  <h1 class="text-3xl lg:text-3xl font-orbitron tracking-wider text-cyan-400 text-center mb-8 relative">
    Deploy Your Observability Platform
  </h1>

  <p class="text-md text-neutral-300 text-center mb-16 max-w-lg mx-auto relative">
    Run your own instance of Clairvoyance on your infrastructure for complete control over your AI agent observability data.
  </p>

  <div class="grid grid-cols-1 gap-8 mb-20 relative">
    {#each deploymentOptions as option}
      <Card.Root class="border-neutral-800 bg-neutral-900/50 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.1)]">
        <Card.Header class="p-8 pb-0 space-y-5">
          <div class="flex items-start gap-4">
            <Card.Title class="text-lg font-orbitron text-neutral-200 font-normal tracking-wider">{option.title}</Card.Title>
            <span class={`text-xs px-2 py-2 rounded-full ${option.isAvailable ? 'bg-cyan-950 text-cyan-400' : 'bg-neutral-800 text-neutral-400'}`}>
              {option.status}
            </span>
          </div>
          <Card.Description class="text-neutral-400 mt-4">{option.description}</Card.Description>
        </Card.Header>
        <Card.Content class="p-8 pt-6">
          {#if option.command}
            <div class="relative">
              <code class="bg-neutral-800/60 px-4 py-3 rounded-lg font-mono text-xs block w-full overflow-x-auto mb-6 pr-12 text-cyan-400">
                {option.command}
              </code>
              <button
                class="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 hover:bg-neutral-700 rounded-md flex items-center justify-center text-neutral-400 hover:text-cyan-400 transition-colors"
                on:click={() => copyText(option.command)}
              >
                {#if copiedCommand === option.command}
                  <Check class="h-4 w-4 text-cyan-400" />
                {:else}
                  <Copy class="h-4 w-4" />
                {/if}
              </button>
            </div>
            <div class="flex justify-start">
              <Button 
                variant="link" 
                size="sm"
                href="#"
                class="text-xs tracking-wider font-orbitron text-cyan-400 hover:text-cyan-300"
              >
                VIEW FULL SETUP GUIDE >>
              </Button>
            </div>
          {/if}
        </Card.Content>
      </Card.Root>
    {/each}
  </div>
</div>

<style>
  .bg-gradient-radial {
    background-image: radial-gradient(var(--tw-gradient-stops));
  }
</style> 