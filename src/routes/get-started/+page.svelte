<script lang="ts">
	import Logo from '$lib/components/Logo.svelte';
	import { fade, fly, scale } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let loading = true;
	let started = false;
	let currentStep = 0;
	let contentVisible = false; // Track when content should start animating
	let answers: Record<string, string> = {}; // To store answers
	let currentPath = "initial"; // Tracks which question path we're on
	let showResultScreen = false; // Whether to show custom result screen
	let resultType = ""; // Type of result to show

	// The first question is common to all users
	const initialQuestion = {
		id: "user_type",
		text: "Which best describes you?",
		options: [
			"Business owner / Startup founder",
			"Developer or AI engineer", 
			"Student or just getting started with AI agents"
		]
	};

	// Different question paths based on first answer
	const questionPaths = {
		// Developer path
		developer: [
			{
				id: "developer_need",
				text: "Are you primarily interested in optimizing your agents or connecting with other developers?",
				options: [
					"I am looking for tools to optimize my agents",
					"I am looking for community and learning resources",
				]
			}
		],
		
		// Business owner path
		business: [
			{
				id: "business_need",
				text: "What are you most interested in?",
				options: [
					"Custom AI agent development for my business",
					"Connecting with other founders building with AI"
				]
			}
		],
	};

	// Result screen content based on user path and answers
	const resultScreens = {
		student: {
			heading: "Start with Agent Alchemy",
			subtitle: "It sounds like our support network is the right starting point for you.",
			description: "This will show you everything you need to know to get started with building and monetizing AI agents — from basic concepts to practical implementation, best practices, and working with the latest tools.",
			cta: "Connect with other developers in our community and build your skills from scratch — no prior experience required.",
			buttonText: "Join Now",
			destination: "https://network.auriel.tech",
			newTab: true
		},
		developer_tools: {
			heading: "Optimize with our open-source devtools",
			subtitle: "Our observability devtools are designed for developers just like you.",
			description: "We build specialized tooling to help you build better, more efficient, and more reliable AI agents with powerful observability and debugging capabilities.",
			cta: "Leverage our advanced observability tools to monitor, debug, and optimize your AI agents for peak performance.",
			buttonText: "Explore Our Devtools",
			destination: "/projects",
			newTab: false
		},
		developer_community: {
			heading: "Join our developer support network",
			subtitle: "Learn, share, and grow with other developers building with AI.",
			description: "Our community platform gives you access to best practices, code examples, and discussions with peers who are building cutting-edge AI agents.",
			cta: "Exchange ideas with experienced developers and stay on top of the latest techniques and approaches in development.",
			buttonText: "Join Agent Alchemy",
			destination: "https://network.auriel.tech",
			newTab: true
		},
		business_development: {
			heading: "Transform Your Business with Custom AI Agents",
			subtitle: "Auriel helps select companies build AI Agents that cut costs, boost revenue, and streamline processes.",
			description: "Send us a job posting and we will build a custom agent for it. Instead of an employee working 40 hours per week, we'll build your team a custom one-time investment AI Agent that works 24/7/365.",
			cta: "Schedule a call and tell us about your idea.",
			buttonText: "Schedule a Call",
			destination: "/enquire",
			newTab: false
		},
		business_community: {
			heading: "Connect with other founders building with AI",
			subtitle: "Access a network of vetted startup founders building AI agents and LLM application.",
			description: "Our founder support network provides networking opportunities, learning resources, and direct access to AI expertise building products on the cutting edge.",
			cta: "Stay ahead of the curve by connecting with others who are implementing AI solutions in tangential contexts.",
			buttonText: "Join Agent Alchemy",
			destination: "https://network.auriel.tech",
			newTab: true
		}
	};

	// Current result screen content
	let currentResult = resultScreens.student;

	// Get current question based on path and step
	$: currentQuestion = currentPath === "initial" 
		? initialQuestion 
		: questionPaths[currentPath as keyof typeof questionPaths][currentStep];

	function handleStart() {
		started = true;
	}

	function handleAnswer(option: string) {
		if (currentPath === "initial") {
			// First question determines the path
			answers["user_type"] = option;
			
			// Set the appropriate path based on the answer
			if (option === "Student or just getting started with AI agents") {
				// For students, show result screen directly
				resultType = "student";
				currentResult = resultScreens.student;
				showResultScreen = true;
			} else if (option === "Developer or AI engineer") {
				currentPath = "developer";
			} else if (option === "Business owner / Startup founder") {
				currentPath = "business";
			}
			
			// Reset step counter for the new path
			currentStep = 0;
		} else {
			// Store answer with its question ID
			answers[currentQuestion.id] = option;
			
			// Move to next question if available
			if (currentStep < questionPaths[currentPath as keyof typeof questionPaths].length - 1) {
				currentStep += 1;
			} else {
				// No more questions, set up result screen based on answers
				setupResultScreen();
			}
		}
	}

	function setupResultScreen() {
		// Determine which result to show based on path and answers
		if (currentPath === "developer") {
			if (answers.developer_need === "I am looking for tools to optimize my agents") {
				resultType = "developer_tools";
				currentResult = resultScreens.developer_tools;
			} else {
				resultType = "developer_community";
				currentResult = resultScreens.developer_community;
			}
		} else if (currentPath === "business") {
			if (answers.business_need === "Custom AI agent development for my business") {
				resultType = "business_development";
				currentResult = resultScreens.business_development;
			} else {
				resultType = "business_community";
				currentResult = resultScreens.business_community;
			}
		}
		
		// Show the result screen
		showResultScreen = true;
	}

	function handleCTA() {
		if (currentResult.newTab) {
			window.open(currentResult.destination, '_blank');
		} else {
			goto(currentResult.destination);
		}
	}

	// Handle keyboard shortcuts
	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			if (!started) {
				handleStart();
			} else if (showResultScreen) {
				handleCTA();
			}
		}
	}

	onMount(() => {
		// Longer loading state (1.5 seconds)
		setTimeout(() => {
			loading = false;
			
			// Start content animations after loading completes
			setTimeout(() => {
				contentVisible = true;
			}, 100);
		}, 1500);
		
		window.addEventListener('keydown', handleKeydown);
		return () => {
			window.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

<div class="flex flex-col items-center justify-center min-h-screen bg-[#f7f9f8] text-neutral-900 font-sans">
	{#if loading}
		<!-- Loading State -->
		<div transition:fade={{ duration: 200 }}>
			<div class="relative w-12 h-12">
				<div class="animate-ping absolute inset-0 bg-neutral-300 opacity-30 rounded-full"></div>
				<div class="relative rounded-full w-12 h-12 border-2 border-t-neutral-900 border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
			</div>
			<div class="text-neutral-700 text-sm mt-10">Loading...</div>
		</div>
	{:else}
		{#if contentVisible}
			<div 
				class="fixed top-10 left-10 z-10" 
				in:fly={{ y: -20, duration: 700 }}
			>
				<Logo size="text-xl" />
			</div>
		{/if}
		{#if !started}
			<!-- Initial welcome screen -->
			<div class="max-w-3xl flex flex-col items-start text-left">
				{#if contentVisible}
					<h1 
						class="text-3xl font-sans font-semibold mb-5 text-neutral-900"
						in:fly={{ y: 20, duration: 700, delay: 200 }}
					>
						Need a hand finding your way around?
					</h1>
					<p 
						class="text-neutral-700 text-lg mb-5 font-sans"
						in:fly={{ y: 20, duration: 700, delay: 400 }}
					>
						Answer two quick questions, and we'll instantly direct you to the right resources.
					</p>
					<div 
						class="flex items-center"
						in:fly={{ y: 20, duration: 700, delay: 600 }}
					>
						<button 
							class="bg-neutral-900 text-white font-medium py-2 px-4 border border-neutral-900 hover:bg-neutral-800 hover:border-neutral-800 transition-all duration-200 rounded-md font-sans"
							on:click={handleStart}
						>
							Start
						</button>
						<span class="text-xs text-neutral-500 ml-3">press Enter ↵</span>
					</div>
					<div 
						class="flex items-center mt-5 text-xs text-neutral-500"
						in:fade={{ duration: 700, delay: 800 }}
					>
						<svg class="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<circle cx="12" cy="12" r="10" />
							<polyline points="12 6 12 12 16 14" />
						</svg>
						Takes 20 sec
					</div>
				{/if}
			</div>
		{:else if showResultScreen}
			<!-- Dynamic result screen based on user path -->
			<div class="max-w-3xl" in:fade={{ duration: 300 }}>
				<div class="flex flex-col items-start text-left">
					<h1 
						class="text-3xl font-sans font-semibold mb-6 text-neutral-900" 
						in:fly={{ y: 20, duration: 700 }}
					>
						{currentResult.heading}
					</h1>
					<p 
						class="text-lg mb-8 text-neutral-700 font-sans" 
						in:fly={{ y: 20, duration: 700, delay: 200 }}
					>
						{currentResult.subtitle}
					</p>
					<p 
						class="text-md mb-8 text-neutral-700 font-sans" 
						in:fly={{ y: 20, duration: 700, delay: 300 }}
					>
						{currentResult.description}
					</p>
					<p 
						class="text-md mb-12 text-neutral-500 font-medium font-sans" 
						in:fly={{ y: 20, duration: 700, delay: 400 }}
					>
						{currentResult.cta}
					</p>
					<div class="flex items-center" in:fly={{ y: 20, duration: 700, delay: 500 }}>
						<button 
							class="bg-neutral-900 text-white font-medium py-3 px-8 rounded-md hover:bg-neutral-800 transition-all duration-300 font-sans"
							on:click={handleCTA}
						>
							{currentResult.buttonText}
						</button>
						<span class="text-xs text-neutral-500 ml-4">press Enter ↵</span>
					</div>
				</div>
			</div>
		{:else}
			<!-- Question Section -->
			<div class="w-full max-w-2xl px-6" in:fade={{ duration: 300 }}>
				{#key currentQuestion.id}
					<div class="flex flex-col">
						<h2 
							class="text-2xl font-sans font-light text-left mb-10 text-neutral-900"
							in:fly={{ y: -20, duration: 400 }}
						>
							{currentQuestion.text}
						</h2>
						<div class="flex flex-col gap-3">
							{#each currentQuestion.options as option, i}
								<button 
									class="bg-white hover:bg-neutral-100 text-neutral-900 text-left font-sans font-light py-3 px-6 border border-neutral-200 hover:border-neutral-300 transition-all duration-200 rounded-md"
									on:click={() => handleAnswer(option)}
									in:fly={{ y: 20, duration: 400, delay: 100 + (i * 100) }}
								>
									{option}
								</button>
							{/each}
						</div>
					</div>
				{/key}
			</div>
		{/if}
	{/if}
</div> 