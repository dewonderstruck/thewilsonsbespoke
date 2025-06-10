<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { fade, fly, slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { IconMenu2, IconX } from '@tabler/icons-svelte';
	import { IconBrandInstagram, IconBrandMeta } from '@tabler/icons-svelte';
	import logo from '$lib/assets/logo.edba41e7-3-removebg-preview.png';

	let isScrolled = false;
	let isMenuOpen = false;
	let activeSection: string | null = null;

	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 20;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter' || event.key === ' ') {
			toggleMenu();
		}
	}

	const navItems = [
		{ label: 'Home', href: '/' },
		{ label: 'Services', href: '/services' },
		{ label: 'Our Process', href: '/our-process' },
		{ label: 'Lookbook', href: '/lookbook' },
		{ label: 'About', href: '/about' },
		{ label: 'Contact Us', href: '/contact' }
	];

	$: activeSection = navItems.find(item => item.href === $page.url.pathname)?.label || null;
</script>

<header
	class="fixed w-full transition-all duration-500 z-50 {isScrolled ? 'bg-black/95 backdrop-blur-sm' : ''}"
	transition:fade
>
	<!-- Top Logo Section -->
	<div class="container mx-auto px-4 py-4 flex items-center justify-between md:justify-center">
		<!-- Mobile Menu Button -->
		<button
			class="text-white md:hidden p-2 hover:bg-white/10 rounded-full transition-colors duration-300"
			on:click={toggleMenu}
			on:keydown={handleKeydown}
			aria-label="Toggle menu"
		>
			{#if isMenuOpen}
				<IconX size={28} />
			{:else}
				<IconMenu2 size={28} />
			{/if}
		</button>

		<!-- Logo -->
		<a href="/" class="block transform transition-all duration-300 hover:opacity-90">
			<img
				class="h-20 md:h-24 object-contain"
				src={logo}
				alt="The Wilson's Bespoke Logo"
			/>
		</a>

		<!-- Social Icons (Mobile) -->
		<div class="flex space-x-4 md:hidden">
			<a
				href="https://www.instagram.com/thewilsonsbespoke/"
				class="text-white hover:text-amber-400 transition-colors duration-300"
				target="_blank"
				rel="noopener noreferrer"
			>
				<IconBrandInstagram size={24} />
			</a>
			<a
				href="https://www.facebook.com/thewilsonsbespoke/"
				class="text-white hover:text-amber-400 transition-colors duration-300"
				target="_blank"
				rel="noopener noreferrer"
			>
				<IconBrandMeta size={24} />
			</a>
		</div>
	</div>

	<!-- Decorative Line -->
	<div class="h-[1px] w-full bg-white/50"></div>

	<!-- Navigation Menu -->
	<div class="container mx-auto px-4 py-3">
		<!-- Desktop Navigation -->
		<nav class="hidden md:block">
			<ul class="flex justify-center space-x-12 uppercase text-sm tracking-widest">
				{#each navItems as { label, href }}
					<li class="relative">
						<a
							{href}
							class="text-white font-medium text-xl hover:text-amber-400 transition-colors duration-300 relative pb-2 block"
							class:active={$page.url.pathname === href}
						>
							{label}
							{#if $page.url.pathname === href}
								<span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3.5 h-0.5 bg-amber-400 rounded-full"></span>
							{/if}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>

<!-- Mobile Menu Overlay -->
{#if isMenuOpen}
	<div
		class="fixed inset-x-0 top-[88px] bottom-0 bg-black z-50 lg:hidden"
		transition:fade={{ duration: 200 }}
		on:click={toggleMenu}
		on:keydown={handleKeydown}
		role="button"
		tabindex="0"
	>
		<div
			class="h-full w-full flex flex-col px-6 py-8 bg-black"
			on:click|stopPropagation
			on:keydown|stopPropagation
			role="button"
			tabindex="0"
			in:fly={{ y: 20, duration: 300, easing: quintOut }}
		>
			<!-- Mobile Navigation -->
			<nav class="flex-1">
				<ul class="space-y-0">
					{#each navItems as { label, href }, index}
						<li
							in:fly={{ y: 20, duration: 300, delay: 100 + index * 50 }}
							class="border-b border-white/5"
						>
							<a
								{href}
								class="block py-6 text-xl font-light tracking-wider text-white hover:text-amber-400 transition-colors duration-300 flex items-center justify-between group"
								class:active={$page.url.pathname === href}
								on:click={toggleMenu}
							>
								<span class="uppercase">{label}</span>
								<span class="text-white/30 transition-all duration-300 transform group-hover:translate-x-1">
									<span class="inline-block w-1.5 h-1.5 rounded-full bg-current group-hover:hidden"></span>
									<span class="hidden group-hover:inline">→</span>
								</span>
							</a>
						</li>
					{/each}
				</ul>
			</nav>

			<!-- Mobile Footer -->
			<div
				class="mt-auto pt-8 flex flex-col items-center space-y-6 border-t border-white/10"
				in:fly={{ y: 20, duration: 300, delay: 400 }}
			>
				<p class="text-white/60 text-sm text-center">
					Crafting Timeless Elegance<br />Since 2020
				</p>
			</div>
		</div>
	</div>
{/if}

<style>
	.active {
		@apply text-amber-400;
	}

	/* Prevent body scroll when mobile menu is open */
	:global(body.menu-open) {
		overflow: hidden;
	}
</style> 