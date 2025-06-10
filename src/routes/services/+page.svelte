<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    import ServiceCard from '$lib/component/ServiceCard.svelte';
    import { IconTie, IconScissors, IconHanger, IconShirt } from '@tabler/icons-svelte';
    import Breadcrumb from "$lib/component/Breadcrumb.svelte";

    let visible = false;
    onMount(() => {
        visible = true;
    });

    const services = [
        {
            title: 'Bespoke Suits',
            description: 'Experience the pinnacle of tailoring with our bespoke suits, meticulously crafted to your exact measurements and style preferences.',
            image: 'https://images.unsplash.com/photo-1610652492500-ded49ceeb378?q=80&w=1974&auto=format&fit=crop',
            features: [
                'Personal consultation with master tailor',
                'Over 10,000 premium fabric options',
                'Multiple fittings for perfect fit',
                'Hand-stitched details and canvas construction'
            ],
            price: '₹75,000',
            icon: IconTie
        },
        {
            title: 'Made-to-Measure Shirts',
            description: 'Elevate your wardrobe with shirts that fit you flawlessly, crafted from the finest cottons and linens.',
            image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1925&auto=format&fit=crop',
            features: [
                'Premium cotton and linen fabrics',
                'Custom collar and cuff styles',
                'Monogram options available',
                'Perfect fit guarantee'
            ],
            price: '₹12,000',
            icon: IconShirt
        },
        {
            title: 'Wedding & Formal Wear',
            description: 'Make your special occasions unforgettable with our bespoke formal wear and wedding attire.',
            image: 'https://images.unsplash.com/photo-1600091166971-7f9faad6c1e2?q=80&w=1974&auto=format&fit=crop',
            features: [
                'Specialized wedding suit consultation',
                'Coordination with wedding themes',
                'Family and groomsmen packages',
                'Rush service available'
            ],
            price: '₹95,000',
            icon: IconTie
        },
        {
            title: 'Alterations & Restyling',
            description: 'Give your existing garments new life with our expert alteration and restyling services.',
            image: 'https://images.unsplash.com/photo-1564859228273-274232fdb516?q=80&w=1974&auto=format&fit=crop',
            features: [
                'Expert garment reconstruction',
                'Style modernization',
                'Size adjustments',
                'Quick turnaround times'
            ],
            price: '₹5,000',
            icon: IconScissors
        }
    ];

    const features = [
        {
            icon: IconTie,
            title: 'Premium Materials',
            description: 'Access to over 10,000 luxury fabrics from renowned mills worldwide.'
        },
        {
            icon: IconScissors,
            title: 'Expert Craftsmanship',
            description: 'Every garment is crafted by master tailors with decades of experience.'
        },
        {
            icon: IconHanger,
            title: 'Perfect Fit Guarantee',
            description: 'Multiple fittings ensure your garments fit flawlessly.'
        }
    ];

    const breadcrumbSegments = [
        { name: "Services", href: "/services" }
    ];
</script>

<svelte:head>
    <title>Our Services - The Wilson's Bespoke</title>
    <meta name="description" content="Discover our range of bespoke tailoring services, from custom suits to shirts and formal wear. Experience true luxury with The Wilson's Bespoke." />
</svelte:head>

<main class="min-h-screen bg-black text-white">
    <!-- Hero Section -->
    <div class="relative h-[70vh] md:h-[90vh] flex items-center justify-center">
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>
        <img 
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
            alt="Bespoke Tailoring Services" 
            class="absolute inset-0 w-full h-full object-cover"
        />
        <div class="relative z-20 text-center px-4 max-w-5xl mx-auto">
            {#if visible}
                <h1 
                    class="text-4xl md:text-7xl font-light tracking-wider mb-8"
                    in:fly={{ y: 50, duration: 1000 }}
                >
                    Crafting <span class="text-amber-400">Excellence</span>
                </h1>
                <p 
                    class="max-w-2xl mx-auto text-lg md:text-2xl text-white/90 font-light leading-relaxed"
                    in:fade={{ duration: 1000, delay: 500 }}
                >
                    Experience the art of true bespoke tailoring, where every stitch tells a story of precision, passion, and unparalleled craftsmanship.
                </p>
            {/if}
        </div>
    </div>

    <!-- Features Section -->
    <div class="relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-b from-amber-900/10 to-transparent opacity-30"></div>
        <div class="max-w-7xl mx-auto px-4 py-32">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-16">
                {#each features as feature, i}
                    <div 
                        class="text-center space-y-6 relative group"
                        in:fade={{ duration: 800, delay: i * 200 }}
                    >
                        <div class="text-amber-400 flex justify-center transform group-hover:scale-110 transition-transform duration-500">
                            <svelte:component this={feature.icon} size={64} />
                        </div>
                        <h3 class="text-2xl font-light">{feature.title}</h3>
                        <p class="text-white/70 text-lg leading-relaxed">{feature.description}</p>
                        <div class="absolute inset-0 border border-amber-400/0 group-hover:border-amber-400/20 transition-all duration-500 -z-10"></div>
                    </div>
                {/each}
            </div>
        </div>
    </div>

    <!-- Services Grid -->
    <div class="max-w-7xl mx-auto px-4 py-32">
        <div class="max-w-7xl mx-auto px-4 py-12">
            <Breadcrumb segments={breadcrumbSegments} />
        </div>
        <h2 class="text-4xl md:text-5xl font-light text-center mb-24">Our <span class="text-amber-400">Services</span></h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            {#each services as service, i}
                <div
                    in:fade={{ duration: 800, delay: i * 200 }}
                >
                    <ServiceCard {...service} />
                </div>
            {/each}
        </div>
    </div>

    <!-- Call to Action -->
    <div class="relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
        <div class="max-w-4xl mx-auto px-4 py-32 relative z-10">
            <div class="text-center space-y-8">
                <h2 class="text-4xl md:text-5xl font-light mb-6">Begin Your <span class="text-amber-400">Bespoke Journey</span></h2>
                <p class="text-white/90 text-xl leading-relaxed mb-12">
                    Experience the difference of true bespoke tailoring. Schedule your consultation today and take the first step towards your perfect garment.
                </p>
                <a 
                    href="/contact" 
                    class="inline-block px-12 py-4 border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-500 text-lg tracking-wider"
                >
                    Book Consultation
                </a>
            </div>
        </div>
    </div>
</main>

<style>
    :global(body) {
        background-color: black;
    }

    /* Smooth scroll behavior */
    :global(html) {
        scroll-behavior: smooth;
    }
</style>
