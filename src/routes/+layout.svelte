<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import logo from '$lib/assets/logo.edba41e7-3-removebg-preview.png';
	import { onMount } from 'svelte';
	import { session } from '$lib/session';
	import Footer2 from "$lib/main/footer.svelte";
	import { goto } from '$app/navigation';
	import { IconBrandMeta, IconBrandX, IconBrandYoutubeFilled, IconBrandInstagram, IconSend2 } from '@tabler/icons-svelte';
	import { IconMenu3, IconX } from '@tabler/icons-svelte';
	import { fade, fly, slide, scale } from 'svelte/transition';
	import { quintOut, elasticOut } from 'svelte/easing';
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	import { signOut } from 'firebase/auth';
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	import { auth } from '$lib/firebase.client';
	import '../app.css';

	import type { LayoutData } from './$types';
	export let data: LayoutData;

	let loading: boolean = true;
	let loggedIn: boolean = false;
	let isMenuOpen: boolean = false;

	afterNavigate(() => {
		if (typeof window !== 'undefined' && 'HSStaticMethods' in window) {
			(window as any).HSStaticMethods.autoInit();
		}
	});

	session.subscribe((cur: any) => {
		loading = cur?.loading;
		loggedIn = cur?.loggedIn;
	});

	onMount(async () => {
		const user: any = await data.getAuthUser();

		const loggedIn = !!user && user?.emailVerified;
		session.update((cur: any) => {
			loading = false;
			return {
				...cur,
				user,
				loggedIn,
				loading: false
			};
		});

		if (loggedIn) {
			await goto('/');
		}
	});

	let isScrolled = false;

	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 20;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	let isExpanded = false;
	let hoveredItem: string | null = null;
</script>

{#if loading}
	<div>Loading...</div>
{:else}
	<header
		class="fixed w-full transition-all duration-300 z-10 {isScrolled
			? 'bg-black shadow-lg'
			: ''}"
		transition:fade
	>
	<div class="bg-red-300 text-center py-3 text-base text-black font-medium">
		Website under development, some links may be broken or pages may not work as expected.
	</div>
		<div class="container mx-auto px-4 py-4 flex justify-center items-center">
			<button class="text-white md:hidden absolute left-8" on:click={toggleMenu}>
				<!-- svelte-ignore block_empty -->
				{#if isMenuOpen}
					
				{:else}
					<IconMenu3 size={42} />
				{/if}
			</button>
			<div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center">
				<img class="object-contain h-28" src={logo} alt="logo" />
			</div>
		</div>
		<!-- White Line -->
		<div class="h-[0.5px] w-full bg-white"></div>

		<!-- Menu Items -->
		<div class="container mx-auto px-4 py-2 flex flex-col items-center uppercase hidden md:block">
			<div class="flex justify-center">
				<nav class="flex flex-wrap justify-center space-x-8 md:flex">
					<div class="m-1">
						<a href="/" class="text-white text-lg">Home</a>
					</div>

					<!-- Services Dropdown -->
					<div class="m-1 relative inline-flex">
						<a
							href="/services"
							class="uppercase text-white text-lg px-4 inline-flex items-center gap-x-2 hs-dropdown-toggle disabled:pointer-events-none"
							aria-haspopup="menu"
							aria-expanded="false"
							aria-label="Dropdown"
						>
							Services
							
						</a>

					
					</div>

					<div class="m-1">
						<a href="/our-process" class="text-white text-lg">Our Process</a>
					</div>

					<!-- Lookbook Dropdown -->
					<div class="m-1">
						<a href="/lookbook" class="text-white text-lg">Lookbook</a>
					</div>

					<!-- About Us Dropdown -->
					<div class="m-1 relative inline-flex">
						<a
							href="/about"
							class="uppercase text-white text-lg px-4 inline-flex items-center gap-x-2 hs-dropdown-toggle disabled:pointer-events-none"
							aria-haspopup="menu"
							aria-expanded="false"
							aria-label="Dropdown"
						>
							About
							
						</a>
					</div>

					<div class="m-1">
						<a href="/contact" class="text-white text-lg">Contact Us</a>
					</div>
				</nav>
			</div>
		</div>
	</header>

	<!-- Responsive Menu Overlay -->
	{#if isMenuOpen}
		<div 
			class="fixed inset-0 bg-black bg-opacity-95 z-20"
			transition:fade={{ duration: 300 }}
		>
			<div 
				class="h-full w-full flex flex-col justify-between py-8 px-6"
				in:fly={{ x: -100, duration: 400, easing: quintOut }}
				out:fly={{ x: -100, duration: 300 }}
			>
				<button 
					class="text-white self-end p-2 relative group" 
					on:click={toggleMenu}
				>
					<IconX size={42} />
					<span class="absolute inset-0 border-2 border-transparent rounded-full transition-all duration-300 group-hover:border-white"></span>
				</button>
				<nav class="flex flex-col items-start space-y-8 w-full">
					{#each ['Home', 'Services', 'Our Process', 'Lookbook', 'About', 'Contact Us'] as item, index}
						<a 
							href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
							class="text-white text-3xl font-light tracking-wide transition-all duration-300 overflow-hidden relative group"
							on:click={toggleMenu}
							in:slide={{ delay: 100 * index, duration: 400, easing: quintOut }}
						>
							<span class="relative inline-block">
								{item}
								<span class="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
							</span>
							<span class="absolute left-0 w-full h-full bg-white/10 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
						</a>
					{/each}
				</nav>
				<div class="flex space-x-6 mt-8" in:fade={{ delay: 600, duration: 400 }}>
					<a href="https://www.instagram.com/thewilsonsbespoke/" class="text-white hover:text-gray-300 transition-colors duration-300">
						<IconBrandInstagram size={28} />
					</a>
					<a href="https://www.instagram.com/thewilsonsbespoke/" class="text-white hover:text-gray-300 transition-colors duration-300">
						<IconBrandMeta size={28} />
					</a>
				</div>
			</div>
		</div>
	{/if}

	<slot />
	<Footer2/>
	  
	<!-- Floating Chat Button -->
	<a 
		href="https://www.instagram.com/thewilsonsbespoke/" 
		target="_blank" 
		rel="noopener noreferrer" 
		class="fixed bottom-6 right-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center overflow-hidden"
		style="width: {isExpanded ? '200px' : '56px'}; height: 56px;"
		on:mouseenter={() => isExpanded = true}
		on:mouseleave={() => isExpanded = false}
	>
		<div class="flex items-center justify-center w-14 h-14 {isExpanded ? '' : 'ml-3.5'}">
			<IconBrandInstagram size={28} />
		</div>
		<span class="whitespace-nowrap text-base font-medium {isExpanded ? '' : 'mr-3.5'} overflow-hidden" style="max-width: {isExpanded ? '144px' : '0'}; opacity: {isExpanded ? '1' : '0'}; transition: max-width 0.3s ease-out, opacity 0.3s ease-out;">Send a message</span>
	</a>
{/if}
