<script>
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    import ConsultationImg from '$lib/assets/consultation.avif';
    import FabricSelectionImg from '$lib/assets/fabricselection.jpg';
    import MeasurementsImg from '$lib/assets/fitting.jpg';
    import DesignCustomizationImg from '$lib/assets/design.jpg';
    import FinalFittingImg from '$lib/assets/final.jpeg';

    let visible = false;
    onMount(() => {
        visible = true;
    });

    const processes = [
        { title: 'The Art of Consultation', img: ConsultationImg, description: 'Embark on a journey of sartorial discovery as we delve into your unique style, preferences, and lifestyle.' },
        { title: 'Curating Exquisite Fabrics', img: FabricSelectionImg, description: 'Immerse yourself in a world of luxurious textiles, hand-selected from the most prestigious mills across the globe.' },
        { title: 'Precision in Every Measure', img: MeasurementsImg, description: 'Experience the meticulous art of tailoring as we capture your unique silhouette with unparalleled accuracy.' },
        { title: 'Crafting Your Vision', img: DesignCustomizationImg, description: 'Collaborate with our master artisans to bring your sartorial dreams to life, down to the finest detail.' },
        { title: 'The Perfect Finale', img: FinalFittingImg, description: 'Witness the culmination of craftsmanship as your bespoke garment is perfected for its debut in your wardrobe.' }
    ];
</script>

<div class="bg-[#0d0d0d] text-white">
    <!-- Hero Section -->
    <section class="relative h-screen">
        <div class="absolute inset-0">
            <img src="https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/inner-img-14.jpg" alt="Bespoke Tailoring" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div class="relative h-full flex flex-col justify-center items-center text-center px-4">
            {#if visible}
                <h1 in:fly={{ y: 50, duration: 1000 }} class="text-5xl md:text-7xl font-light mb-6 tracking-wider">The Bespoke Journey</h1>
                <p in:fade={{ duration: 1000, delay: 500 }} class="text-xl md:text-2xl font-light max-w-3xl">Embark on an exquisite odyssey of style, where each stitch tells a story of unparalleled craftsmanship and timeless elegance.</p>
            {/if}
        </div>
    </section>

    <!-- Process Section -->
    <section class="py-24 px-4 md:px-16">
        {#each processes as process, index}
            {#if visible}
                <div in:fade={{ duration: 1000, delay: 300 * index }} class="mb-32 flex flex-col md:flex-row items-center justify-between">
                    <div class="w-full md:w-1/2 mb-8 md:mb-0 {index % 2 === 0 ? 'md:pr-16' : 'md:pl-16 md:order-2'}">
                        <h2 class="text-4xl md:text-5xl font-light mb-6">{process.title}</h2>
                        <p class="text-lg md:text-xl font-light leading-relaxed">{process.description}</p>
                    </div>
                    <div class="w-full md:w-1/2 {index % 2 === 0 ? '' : 'md:order-1'}">
                        <img src={process.img} alt={process.title} class="w-full h-auto object-cover shadow-lg transition-all duration-300 hover:shadow-2xl" />
                    </div>
                </div>
            {/if}
        {/each}
    </section>
</div>

<style>
</style>
