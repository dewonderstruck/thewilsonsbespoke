<script>
	import bg from '$lib/assets/photo-1637946175491-53bca31c90ba.webp';
	import logo from '$lib/assets/logo.edba41e7-3-removebg-preview.png';
	let companyName = "The Wilson's Bespoke";
	import { onMount } from 'svelte';
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


<div class="flex flex-col justify-center items-center min-h-screen bg-center bg-cover text-white text-center" style="backdrop-filter: blur(12px); background-image: url({bg}); ">
	<slot/>
</div>
