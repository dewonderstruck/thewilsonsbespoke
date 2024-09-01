<script>
	import bg from "$lib/assets/photo-1618022325802-7e5e732d97a1.webp";
	let companyName = "The Wilson's Bespoke";
	import ImageCarousel from "$lib/component/imagecarousel.svelte";
	import CraftSection from "$lib/component/craftsection.svelte";
	import CraftSplit from "$lib/component/craftsplit.svelte";
	import InspiredSplit from "$lib/component/inspiredsplit.svelte";
	import InspiredSection from "$lib/component/inspiredsection.svelte";
</script>

<svelte:head>
<title>The Wilson's Bespoke</title>
</svelte:head>

<main class="flex flex-col justify-center items-center min-h-screen bg-cover bg-center text-white text-center bg-black">
	<svelte:component this={ImageCarousel} />
	<svelte:component this={CraftSection} />
	<svelte:component this={CraftSplit} />
</main>
