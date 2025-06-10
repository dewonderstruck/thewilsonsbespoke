<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { IconScissors, IconRuler, IconTie } from '@tabler/icons-svelte';

	const features = [
		{
			icon: IconScissors,
			title: "Master Craftsmanship",
			description: "Every garment is meticulously handcrafted by our expert tailors, ensuring unparalleled quality and attention to detail."
		},
		{
			icon: IconRuler,
			title: "Perfect Fit Guarantee",
			description: "Through multiple fittings and precise measurements, we ensure each piece fits you flawlessly."
		},
		{
			icon: IconTie,
			title: "Premium Materials",
			description: "We source the finest fabrics from renowned mills worldwide, offering you an extensive selection of luxurious materials."
		}
	];

	let visible = false;
	onMount(() => {
		visible = true;
		
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					visible = true;
				}
			},
			{ threshold: 0.1 }
		);

		const section = document.querySelector('.craft-section');
		if (section) observer.observe(section);

		return () => {
			if (section) observer.unobserve(section);
		};
	});
</script>

<section class="craft-section py-24 relative overflow-hidden">
	<div class="absolute inset-0 bg-gradient-to-b from-amber-900/10 to-transparent opacity-30"></div>
	<div class="max-w-7xl mx-auto px-4 relative z-10">
		{#if visible}
			<div class="text-center max-w-3xl mx-auto mb-20" in:fade={{ duration: 1000 }}>
				<h2 class="text-4xl md:text-5xl font-light mb-6 text-white">
					The Art of <span class="text-amber-400">Bespoke</span>
				</h2>
				<p class="text-white/70 text-lg leading-relaxed">
					Experience the pinnacle of tailoring excellence, where traditional craftsmanship meets contemporary style. Each garment is a masterpiece, crafted to your exact specifications.
				</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-12">
				{#each features as feature, i}
					<div 
						class="text-center space-y-6 p-8 border border-white/10 rounded-lg hover:border-amber-400/20 transition-all duration-500 group"
						in:fade={{ duration: 800, delay: i * 200 }}
					>
						<div class="text-amber-400 flex justify-center transform group-hover:scale-110 transition-transform duration-500">
							<svelte:component this={feature.icon} size={48} />
						</div>
						<h3 class="text-white text-2xl font-light group-hover:text-amber-400 transition-colors duration-300">{feature.title}</h3>
						<p class="text-white/70 leading-relaxed">{feature.description}</p>
					</div>
				{/each}
			</div>

			<div class="text-center mt-16">
				<a 
					href="/our-process" 
					class="inline-block px-8 py-3 border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-300"
				>
					Discover Our Process
				</a>
			</div>
		{/if}
	</div>
</section>

<style>
	section {
		background-color: rgba(0, 0, 0, 0.5);
	}
</style>
