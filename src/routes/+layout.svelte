<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import logo from '$lib/assets/logo.edba41e7-3-removebg-preview.png';
	import Footer from '$lib/component/footersection.svelte';
	import { onMount } from 'svelte';
	import { session } from '$lib/session';
	import Footer2 from "$lib/main/footer.svelte";
	import { goto } from '$app/navigation';
	import { IconBrandMeta, IconBrandX, IconBrandYoutubeFilled, IconBrandInstagram, IconSend2 } from '@tabler/icons-svelte';
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	import { signOut } from 'firebase/auth';
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	import { auth } from '$lib/firebase.client';
	import '../app.css';
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	import '@fontsource-variable/manrope';
	import '@fontsource/marcellus';

	import type { LayoutData } from './$types';
	export let data: LayoutData;

	let loading: boolean = true;
	let loggedIn: boolean = false;

	afterNavigate(() => {
		window.HSStaticMethods.autoInit();
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
</script>

{#if loading}
	<div>Loading...</div>
{:else}
	<header
		class="fixed w-full transition-all duration-300 z-10 {isScrolled
			? 'bg-black'
			: ''}"
		transition:fade
	>
		<div class="container mx-auto px-4 py-4 flex justify-center items-center">
			<div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
				<img class="object-contain h-28 mx-auto" src={logo} alt="logo" />
			</div>
		</div>
		<!-- White Line -->
		<div class="h-[0.5px] w-full bg-white"></div>

		<!-- Menu Items -->
		<div class="container mx-auto px-4 py-2 flex flex-col items-center uppercase">
			<div class="flex justify-between">
				<nav class="flex flex-wrap justify-center space-x-8">
					<div class="m-1">
						<a href="/" class="text-white text-lg">Home</a>
					</div>

					<!-- Services Dropdown -->
					<div class="m-1 hs-dropdown [--trigger:hover] relative inline-flex">
						<a
							href="/services"
							class="uppercase text-white text-lg px-4 inline-flex items-center gap-x-2 hs-dropdown-toggle disabled:pointer-events-none"
							aria-haspopup="menu"
							aria-expanded="false"
							aria-label="Dropdown"
						>
							Services
							<svg
								class="hs-dropdown-open:rotate-180 size-4"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg
							>
						</a>

						<div
							class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-black bg-opacity-70 shadow-md rounded p-1 space-y-0.5 mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
							role="menu"
							aria-orientation="vertical"
						>
							<a
								href="/services/bespoke-suits"
								class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-white hover:underline focus:outline-none focus:bg-gray-100"
								>Bespoke Suits</a
							>
							<a
								href="/services/canvas-suits"
								class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-white hover:underline focus:outline-none focus:bg-gray-100"
								>Canvas Suits</a
							>
						
						</div>
					</div>

					<div class="m-1">
						<a href="/our-process" class="text-white text-lg">Our Process</a>
					</div>

					<!-- Lookbook Dropdown -->
					<div class="m-1 hs-dropdown [--trigger:hover] relative inline-flex">
						<button
							id="hs-dropdown-hover-event"
							type="button"
							class="uppercase text-white text-lg px-4 inline-flex items-center gap-x-2 hs-dropdown-toggle hs-dropdown-toggle disabled:pointer-events-none"
							aria-haspopup="menu"
							aria-expanded="false"
							aria-label="Dropdown"
						>
							Lookbook
							<svg
								class="hs-dropdown-open:rotate-180 size-4"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg
							>
						</button>

						<div
							class="hs-dropdown-menu bg-black bg-opacity-70 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 shadow-md rounded p-1 space-y-0.5 mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
							role="menu"
							aria-orientation="vertical"
							aria-labelledby="hs-dropdown-hover-event"
						>
							<a
								class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-white hover:underline focus:outline-none focus:bg-gray-100"
								href="/lookbook/spring-summer"
							>
								Spring/Summer 24
							</a>
							<a
								class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-white hover:underline focus:outline-none focus:bg-gray-100"
								href="/lookbook/fall-winter"
							>
								Fall/Winter 24
							</a>
						</div>
					</div>

					<!-- About Us Dropdown -->
					<div class="m-1 hs-dropdown [--trigger:hover] relative inline-flex">
						<a
							href="/about"
							class="uppercase text-white text-lg px-4 inline-flex items-center gap-x-2 hs-dropdown-toggle disabled:pointer-events-none"
							aria-haspopup="menu"
							aria-expanded="false"
							aria-label="Dropdown"
						>
							About Us
							<svg
								class="hs-dropdown-open:rotate-180 size-4"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg
							>
						</a>

						<div
							class="rounded hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-black bg-opacity-70 p-1 space-y-0.5 mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
							role="menu"
							aria-orientation="vertical"
						>
							<a
								href="/about/our-story"
								class="flex items-center gap-x-3.5 py-2 px-3 underline-offset-4 text-white hover:underline focus:outline-none focus:bg-gray-100"
								>Our Story</a
							>

							<a
								href="/about/our-commitment"
								class="flex items-center gap-x-3.5 py-2 underline-offset-4 px-3 text-white hover:underline focus:outline-none focus:bg-gray-100"
								>Our Commitment</a
							>
						</div>
					</div>

					<div class="m-1">
						<a href="/contact" class="text-white text-lg">Contact Us</a>
					</div>
				</nav>
			</div>
		</div>
		
	</header>
	<slot />
	<Footer2/>
	  
{/if}
