<script>
	import bg from "$lib/assets/photo-1618022325802-7e5e732d97a1.webp";
	import logo from "$lib/assets/logo.edba41e7-3-removebg-preview.png";
	import pymtMethods from "$lib/assets/2152262473.webp"
	import { onMount } from 'svelte';

	let companyName = "The Wilson's Bespoke";
	let launchDate = new Date("2024-08-01");

	function formatDate(date) {
		return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
	}

	function getDaysUntil(date) {
		const now = new Date();
		const timeDiff = date - now;
		const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
		return days;
	}

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

<svelte:head>
	<title>The Wilson's Bespoke</title>
</svelte:head>

<header class="fixed w-full transition-all duration-300 z-10 {isScrolled ? 'bg-black bg-opacity-70' : ''}" transition:fade>
	<div class="container mx-auto px-4 py-4 flex justify-center items-center mt-8">
		<div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
			<img class="object-contain h-28 mx-auto" src={logo} alt="logo" />
		</div>
	</div>
</header>

<main class="flex flex-col justify-center items-center min-h-screen bg-cover bg-center text-white text-center p-4" style="background-image: url({bg});">
	<div class="max-w-2xl bg-opacity-70 p-6 rounded-lg">
		<h1 class="text-5xl md:text-6xl font-bold mb-4">{companyName}</h1>
		<p class=" text-lg md:text-xl mb-2">We're tailoring the perfect experience for you.</p>
	</div>
</main>

<footer class="fixed bg-black/50 mt-8 bottom-0 w-full transition-all duration-300 z-10">
	<div class="container mx-auto px-4 flex justify-center items-center mb-8">
		<div class="max-w-2xl bg-opacity-70 p-6 rounded-lg text-white text-center">
			<address class="text-sm mb-2 not-italic">
				ANITHA ENCLAVE, PLOT NO 10, JUBILE HILLS, Hyderabad, TG, 500033
			</address>
			<p class=" text-sm mb-4">GSTIN: 36AKSPV5642F1ZK</p>
			<p class=" text-sm mb-4">&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p>
			<nav class="flex justify-center space-x-4">
				<a href="#" class=" text-sm hover:text-gray-300 transition-colors duration-300 hover:underline hover:underline-offset-4">Privacy Policy</a>
				<a href="#" class=" text-sm hover:text-gray-300 transition-colors duration-300 hover:underline hover:underline-offset-4">Terms of Service</a>
				<a href="#" class=" text-sm hover:text-gray-300 transition-colors duration-300 hover:underline hover:underline-offset-4">Contact Us</a>
			</nav>
		</div>
	</div>
</footer>
