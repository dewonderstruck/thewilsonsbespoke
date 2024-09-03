<script>
    import { IconMail, IconPhone, IconMapPin } from '@tabler/icons-svelte';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import ConsultationImg from '$lib/assets/consultation.avif';
    import FabricSelectionImg from '$lib/assets/fabricselection.jpg';
    import MeasurementsImg from '$lib/assets/fitting.jpg';
    import DesignCustomizationImg from '$lib/assets/design.jpg';
    import FinalFittingImg from '$lib/assets/final.jpeg';

    export let slides = [
        {
            image: 'https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/inner-img-14.jpg',
            title: 'Our Process',
            subtitle: 'We take you on a journey through the process of creating your bespoke suit. From the initial consultation to the final fitting, we ensure that every step is tailored to your needs.'
        },
    ];

    let currentIndex = 0;
    let path;
    let breadcrumbs = [];

    // Use onMount to ensure we have access to $page.url.pathname
    onMount(() => {
        path = $page.url.pathname;
        breadcrumbs = path.split('/').filter(Boolean);
    });
</script>

<div id="services" class="flex flex-col items-center min-h-screen bg-[#0d0d0d] text-white text-center">
    <!-- Hero Image with Title -->
    <div class="relative w-full h-[61.8vh]">
        <img
            src="{slides[currentIndex].image}"
            alt="bg"
            class="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
        />
        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"></div>
        <div class="absolute inset-0 flex items-center top-1/3 justify-center">
            <div class="flex flex-col items-center justify-center">
                <h1 class="text-6xl uppercase mb-6 cormorant-garamond text-white tracking-wider">{slides[currentIndex].title}</h1>
                <p class="text-lg mb-6 manrope text-gray-200 italic text-center max-w-2xl">{slides[currentIndex].subtitle}</p>
                
            </div>
        </div>
    </div>

    <!-- Magazine Style Section -->
    <section class="py-8 bg-[#0d0d0d] text-white">
        <div class="container gap-16">
            {#each [
                { title: 'Consultation', img: ConsultationImg },
                { title: 'Fabric Selection', img: FabricSelectionImg },
                { title: 'Measurements & Fittings', img: MeasurementsImg },
                { title: 'Design & Customization', img: DesignCustomizationImg },
                { title: 'Final Fitting & Delivery', img: FinalFittingImg }
            ] as process, index}
                <div class="flex flex-wrap lg:flex-nowrap items-center justify-center gap-16 border my-16 border-gray-200">
                    <div class="w-full lg:w-1/2 p-8 flex flex-col justify-center items-start">
                        <h1 class="text-5xl uppercase cormorant-garamond font-semibold mb-4 text-start max-w-2xl leading-normal">{process.title}</h1>
                        <p class="mb-8 manrope text-lg text-gray-200 italic text-start max-w-xl">
                            {#if index === 0}
                            Experience a personalized consultation where we understand your style preferences, lifestyle, and specific needs.
                            {:else if index === 1}
                            Explore our curated selection of premium fabrics from the world's finest mills.
                            {:else if index === 2}
                            Precise measurements for a flawless fit that complements your unique silhouette.
                            {:else if index === 3}
                            Customize your garment with a range of design options and unique details.
                            {:else}
                            A final fitting ensures every detail is perfect before your bespoke garment is delivered.
                            {/if}
                        </p>
                    </div>
                    <img id="img" src="{process.img}" alt="{process.title}" class="w-full lg:w-1/2 h-64 lg:h-auto bg-cover bg-center" />
                </div>
            {/each}
        </div>
    </section>
</div>

<style>
    #services {
        font-family: 'Manrope', sans-serif;
    }

    .text-shadow-md {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
    }

    .text-shadow-lg {
        text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.6);
    }

    #img {
        height: 700px;
        max-width: 700px;
        object-fit: cover;
        filter: grayscale(100%);
        transition: transform 0.3s ease;
    }

    #img:hover {
        filter: grayscale(30%);
    }
</style>
