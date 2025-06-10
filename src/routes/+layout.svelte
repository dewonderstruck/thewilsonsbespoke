<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import { browser } from '$app/environment';
	import logo from '$lib/assets/logo.edba41e7-3-removebg-preview.png';
	import Navbar from '$lib/main/navbar.svelte';
	import Footer from '$lib/main/footer.svelte';
	import { IconBrandInstagram } from '@tabler/icons-svelte';

	let isLoading = true;
	let isMenuOpen = false;

	onMount(async () => {
		if (browser) {
			isLoading = false;
		}
	});

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<svelte:head>
	<title>The Wilson's Bespoke</title>
</svelte:head>

{#if isLoading}
	<div class="fixed inset-0 flex items-center justify-center bg-black z-50">
		<div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
	</div>
{:else}
	<div class="flex flex-col min-h-screen">
		<Navbar />
		<main class="flex-grow">
			<slot />
		</main>
		<Footer />
		
		<!-- Floating Instagram Button -->
		<a
			href="https://www.instagram.com/thewilsonsbespoke/"
			class="fixed bottom-6 font-medium right-6 py-2.5 px-6 hover:bg-amber-400 bg-black/90 hover:text-black text-white flex items-center gap-3 shadow transition-all duration-300 z-50 backdrop-blur-sm border border-white/30"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Follow us on Instagram"
		>
			<IconBrandInstagram size={28} />
			<span class="font-medium mt-0.5 mr-2 tracking-wide">
				Send Message
			</span>
		</a>
	</div>
{/if}

<style>
	:global(body) {
		overflow-x: hidden;
	}
</style>
