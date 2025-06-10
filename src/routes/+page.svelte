<script lang="ts">
	import { onMount } from 'svelte';
	import anime from 'animejs';
	let companyName = "The Wilson's Bespoke";
	import CraftSection from '$lib/component/craftsection.svelte';
	import CraftSplit from '$lib/component/craftsplit.svelte';
	import InspiredSection from '$lib/component/inspiredsection.svelte';
	import snitch from '$lib/assets/snitch.svg';

	let titleElement: HTMLElement;
	let subtitleElement: HTMLElement;
	let contentWrapper: HTMLElement;
	let snitchElement: HTMLElement;
	let taglineElement: HTMLElement;
	let scrollButton: HTMLElement;
	let isScrolled = false;

	onMount(() => {
		// Pattern animation
		anime({
			targets: snitchElement,
			opacity: [0, 0.15],
			scale: [1.1, 1],
			duration: 2500,
			easing: 'easeOutExpo'
		});

		// Title animation
		anime({
			targets: titleElement,
			opacity: [0, 1],
			translateY: [30, 0],
			letterSpacing: ['0.1em', '0.15em'],
			duration: 2200,
			easing: 'easeOutExpo',
			delay: 400
		});

		// Subtitle animation
		anime({
			targets: subtitleElement,
			opacity: [0, 1],
			translateY: [20, 0],
			duration: 2000,
			easing: 'easeOutExpo',
			delay: 800
		});

		// Tagline animation
		anime({
			targets: taglineElement,
			opacity: [0, 1],
			translateY: [20, 0],
			duration: 2000,
			easing: 'easeOutExpo',
			delay: 1200
		});

		// Scroll button animation
		anime({
			targets: scrollButton,
			opacity: [0, 1],
			translateY: [20, 0],
			duration: 1000,
			easing: 'easeOutExpo',
			delay: 2000,
			complete: () => {
				// Continuous bounce animation with thread effect
				anime({
					targets: scrollButton,
					translateY: [0, 10],
					direction: 'alternate',
					loop: true,
					easing: 'easeInOutSine',
					duration: 1500,
					update: (anim) => {
						// Optional: Animate thread length if desired
						const progress = anim.progress;
						const thread = scrollButton.querySelector('.thread-line');
						if (thread) {
							thread.style.height = `${20 + (progress / 100) * 5}px`;
						}
					}
				});
			}
		});

		// Scroll event listener
		window.addEventListener('scroll', () => {
			isScrolled = window.scrollY > 100;
		});

		// Content sections fade in with stagger
		anime({
			targets: contentWrapper,
			opacity: [0, 1],
			translateY: [50, 0],
			duration: 2000,
			easing: 'easeOutExpo',
			delay: 1600
		});
	});

	function scrollToContent() {
		const contentSection = document.querySelector('#content-start');
		if (contentSection) {
			contentSection.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<svelte:head>
	<title>The Wilson's Bespoke - Luxury Tailoring</title>
	<meta
		name="description"
		content="Experience the art of bespoke tailoring at The Wilson's Bespoke. Crafting timeless elegance through precision and sophistication."
	/>
</svelte:head>

<div class="pattern-overlay" bind:this={snitchElement}>
	<img src={snitch} alt="" class="w-full h-full object-cover z-100" />
</div>

<main class="flex flex-col justify-center items-center min-h-screen bg-black">
	<!-- Hero Section -->
	<div class="min-h-screen w-full flex flex-col justify-center items-center relative z-20 px-4">
		<div class="text-center max-w-4xl mx-auto">
			<h1
				bind:this={titleElement}
				class="text-4xl sm:text-5xl md:text-7xl font-light tracking-wider opacity-0 text-white mb-8"
			>
				{companyName}
			</h1>
			<p
				bind:this={subtitleElement}
				class="text-xl sm:text-2xl md:text-3xl font-light tracking-widest opacity-0 text-amber-400 mb-6"
			>
				Crafting Timeless Elegance
			</p>
			<p
				bind:this={taglineElement}
				class="text-base sm:text-lg md:text-xl font-light tracking-wide opacity-0 text-gray-200 max-w-2xl mx-auto leading-relaxed mb-12"
			>
				Where precision meets sophistication in every stitch. Experience the art of bespoke
				tailoring, crafted to perfection for the distinguished gentleman.
			</p>
			<!-- Replace the scroll button section in your code with this -->
			<button
				bind:this={scrollButton}
				on:click={scrollToContent}
				class="opacity-0 text-amber-400 border-2 border-amber-400 rounded-full p-2 hover:text-amber-300 transition-colors duration-300 focus:outline-none relative"
				aria-label="Scroll to content"
			>
				<svg
					width="32"
					height="32"
					viewBox="0 0 32 32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="needle-thread"
				>
					<!-- Needle -->
					<path d="M8 24 L24 8" stroke="currentColor" stroke-width="2" />
					<!-- Eye of needle -->
					<ellipse
						cx="8.5"
						cy="23.5"
						rx="2"
						ry="1"
						fill="none"
						stroke="currentColor"
						stroke-width="1"
					/>
					<!-- Thread -->
					<path
						d="M8 24 Q12 28, 16 24 T20 20"
						stroke="currentColor"
						stroke-width="1"
						fill="none"
						class="thread-path"
					/>
				</svg>
			</button>
		</div>
	</div>

	<!-- Content Sections -->
	<div bind:this={contentWrapper} id="content-start" class="w-full opacity-0 relative z-20">
		<svelte:component this={CraftSection} />
		<svelte:component this={CraftSplit} />
		<svelte:component this={InspiredSection} />
	</div>
</main>

<style>
	:global(body) {
		background-color: black;
		overflow-x: hidden;
	}

	.pattern-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 1;
		opacity: 0;
		pointer-events: none;
	}

	.pattern-overlay img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		mix-blend-mode: overlay;
		filter: brightness(0.15) contrast(1.2);
	}

	main {
		position: relative;
		z-index: 2;
		background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 1),
			rgba(0, 0, 0, 0.98) 30%,
			rgba(0, 0, 0, 0.97) 60%,
			rgba(0, 0, 0, 1) 100%
		);
	}

	/* Responsive Typography */
	@media (max-width: 640px) {
		h1 {
			letter-spacing: 0.1em;
		}
	}

	.needle-thread-container {
		position: relative;
		width: 32px;
		height: 32px;
	}

	.thread-line {
		position: absolute;
		bottom: -10px;
		left: 50%;
		width: 1px;
		height: 20px;
		background: #d97706; /* amber-400 */
		transform: translateX(-50%);
		z-index: 5;
	}

	/* Enhance the bounce animation to feel more like a needle pulling thread */
	button:hover .thread-line {
		height: 25px;
		transition: height 0.3s ease;
	}
</style>
