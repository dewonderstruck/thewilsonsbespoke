<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, fly, slide } from 'svelte/transition';
    import { IconTie, IconRuler, IconScissors, IconHanger, IconStars } from '@tabler/icons-svelte';
    import Breadcrumb from "$lib/component/Breadcrumb.svelte";

    interface ProcessStep {
        icon: any;
        title: string;
        description: string;
        details: string[];
        longDescription: string;
    }

    const processSteps: ProcessStep[] = [
        {
            icon: IconTie,
            title: "Initial Consultation",
            description: "Begin your bespoke journey with an in-depth consultation where we understand your style preferences and requirements.",
            details: [
                "Learn the distinctions between bespoke, made-to-measure, and off-the-rack garments",
                "Understand fabric quality and what constitutes an exceptional fit",
                "Discuss your style aspirations and wardrobe goals",
                "Receive expert guidance on styles that complement your body type"
            ],
            longDescription: "Our consultation process is designed to educate and inspire. We'll help you understand the true value of bespoke tailoring, the characteristics of premium fabrics, and how different styles can enhance your appearance. This knowledge empowers you to make informed decisions about your wardrobe investments."
        },
        {
            icon: IconScissors,
            title: "Design & Customization",
            description: "Select from our extensive collection of premium fabrics and customize every detail of your garment.",
            details: [
                "Choose from over 10,000 luxurious fabrics from renowned mills",
                "Select your preferred style, cut, and silhouette",
                "Customize details like buttons, stitching, and linings",
                "Design unique features that make your garment truly yours"
            ],
            longDescription: "With access to over 10,000 premium fabrics from the world's finest mills, you'll have unprecedented freedom to create truly unique garments. Our expert tailors will guide you through each customization option, from lapel styles to button choices, ensuring every detail reflects your personal taste."
        },
        {
            icon: IconRuler,
            title: "Precise Measurements",
            description: "Experience our meticulous measurement process, backed by decades of expertise in bespoke tailoring.",
            details: [
                "Comprehensive body measurements taken by expert tailors",
                "Detailed analysis of posture and body composition",
                "Documentation of unique physical characteristics",
                "Creation of your personal pattern template"
            ],
            longDescription: "This crucial step sets true bespoke tailoring apart. Our master tailors take over 30 precise measurements, noting every nuance of your posture and body composition. This detailed information forms the foundation of your unique pattern, ensuring a fit that's perfectly tailored to your body."
        },
        {
            icon: IconHanger,
            title: "Expert Craftsmanship",
            description: "Watch your garment come to life through traditional handcrafting techniques and meticulous attention to detail.",
            details: [
                "Hand-stitched buttonholes and functional sleeve buttons",
                "Traditional canvas construction for superior drape",
                "Precise pattern matching and expert seam work",
                "Multiple quality checks throughout construction"
            ],
            longDescription: "Our skilled artisans employ time-honored techniques passed down through generations. Each garment is meticulously constructed with hand-stitched details, traditional canvas construction, and precise pattern matching. This level of craftsmanship ensures not just superior quality, but a garment that will stand the test of time."
        },
        {
            icon: IconStars,
            title: "Perfect Fit & Finish",
            description: "Experience multiple fittings to ensure your garment meets our exacting standards of perfection.",
            details: [
                "Multiple fitting sessions for precise adjustments",
                "Careful evaluation of comfort and movement",
                "Final detailing and finishing touches",
                "Comprehensive care instructions and maintenance guidance"
            ],
            longDescription: "The journey culminates in a series of fittings where we perfect every aspect of your garment. We evaluate not just the static fit, but how the garment moves with you. This attention to detail ensures your bespoke piece not only looks impeccable but feels like a second skin."
        }
    ];

    let activeStep = 0;
    let isIntersecting = false;

    const breadcrumbSegments = [
        { name: "Our Process", href: "/our-process" }
    ];

    onMount(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                isIntersecting = entry.isIntersecting;
            },
            { threshold: 0.1 }
        );

        const element = document.querySelector('.process-section');
        if (element) observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    });
</script>

<svelte:head>
    <title>Our Process - The Wilson's Bespoke</title>
    <meta name="description" content="Discover The Wilson's Bespoke tailoring process, from initial consultation to final fitting. Experience true bespoke craftsmanship." />
</svelte:head>

<main class="min-h-screen bg-black text-white">
    <!-- Hero Section -->
    <div class="relative h-[70vh] md:h-[90vh] flex items-center justify-center">
        <div class="absolute inset-0 bg-black/60 z-10"></div>
        <img 
            src="https://mohair.qodeinteractive.com/wp-content/uploads/2023/05/H1-rev-img-2.jpg"
            alt="Bespoke Tailoring Process" 
            class="absolute inset-0 w-full h-full object-cover"
        />
        <div class="relative z-20 text-center px-4">
            <h1 class="text-4xl md:text-6xl font-light tracking-wider mb-6">The Art of Bespoke</h1>
            <p class="max-w-2xl mx-auto text-lg md:text-xl text-white/80 font-light leading-relaxed">
                Experience the transformative journey of true bespoke tailoring, where craftsmanship meets personal expression through our meticulous five-step process.
            </p>
        </div>
    </div>

    <!-- Progress Bar -->
    <div class="sticky top-0 z-30 bg-black/90 backdrop-blur-sm border-b border-white/10">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex justify-between items-center py-4">
                {#each processSteps as step, index}
                    <div class="flex items-center">
                        <div 
                            class="w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 {
                                activeStep >= index 
                                    ? 'border-amber-400 text-amber-400' 
                                    : 'border-white/20 text-white/20'
                            }"
                        >
                            {index + 1} 
                        </div>
                        {#if index < processSteps.length - 1}
                            <div class="hidden md:block w-24 h-0.5 mx-2 {
                                activeStep > index ? 'bg-amber-400' : 'bg-white/20'
                            }"></div>
                        {/if}
                        <span class="text-xs text-white/50 mx-1">{step.title}</span>
                    </div>
                {/each}
            </div>
        </div>
    </div>

    <!-- Process Section -->
    <div class="process-section max-w-7xl mx-auto px-4 py-24">
        <div class="max-w-7xl mx-auto px-4 py-12">
            <Breadcrumb segments={breadcrumbSegments} />
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <!-- Steps Navigation -->
            <div class="space-y-8">
                {#each processSteps as step, index}
                    <button
                        class="w-full text-left p-6 border transition-all duration-300 {
                            activeStep === index 
                                ? 'border-amber-400 bg-white/5' 
                                : 'border-white/10 hover:border-amber-400/50'
                        }"
                        on:click={() => activeStep = index}
                        in:fade={{ duration: 300, delay: index * 100 }}
                    >
                        <div class="flex items-center gap-4">
                            <div class="flex-shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center {
                                activeStep === index ? 'border-amber-400 text-amber-400' : 'border-white/20'
                            }">
                                {index + 1}
                            </div>
                            <div>
                                <h3 class="text-xl font-light mb-2">{step.title}</h3>
                                <p class="text-white/60 text-sm">{step.description}</p>
                            </div>
                        </div>
                    </button>
                {/each}
            </div>

            <!-- Step Details -->
            <div class="lg:sticky lg:top-32 space-y-8">
                {#key activeStep}
                    <div 
                        class="space-y-8"
                        in:fly={{ y: 20, duration: 300 }}
                    >
                        <div class="flex items-center gap-4">
                            <div class="w-16 h-16 rounded-full border-2 border-amber-400 flex items-center justify-center text-2xl text-amber-400">
                                {activeStep + 1}
                            </div>
                            <div class="text-amber-400">
                                <svelte:component this={processSteps[activeStep].icon} size={48} />
                            </div>
                        </div>
                        <h2 class="text-3xl md:text-4xl font-light">{processSteps[activeStep].title}</h2>
                        <p class="text-white/80 text-lg leading-relaxed">{processSteps[activeStep].longDescription}</p>
                        <div class="bg-white/5 border border-white/10 p-6 rounded-lg">
                            <h3 class="text-xl font-light mb-4 text-amber-400">Key Features</h3>
                            <ul class="space-y-4">
                                {#each processSteps[activeStep].details as detail}
                                    <li class="flex items-start gap-3">
                                        <span class="text-amber-400 mt-1.5">•</span>
                                        <span class="text-white/70">{detail}</span>
                                    </li>
                                {/each}
                            </ul>
                        </div>
                    </div>
                {/key}
            </div>
        </div>
    </div>

    <!-- Why Choose Bespoke -->
    <div class="bg-white/5">
        <div class="max-w-7xl mx-auto px-4 py-24">
            <h2 class="text-3xl md:text-4xl font-light text-center mb-16">Why Choose Bespoke?</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div class="text-center space-y-4">
                    <div class="text-amber-400 flex justify-center">
                        <IconTie size={48} />
                    </div>
                    <h3 class="text-xl font-light">Perfect Fit Guarantee</h3>
                    <p class="text-white/70">Experience clothing that's crafted exclusively for your body, ensuring unparalleled comfort and style.</p>
                </div>
                <div class="text-center space-y-4">
                    <div class="text-amber-400 flex justify-center">
                        <IconScissors size={48} />
                    </div>
                    <h3 class="text-xl font-light">Expert Craftsmanship</h3>
                    <p class="text-white/70">Benefit from generations of tailoring expertise and time-honored techniques in every garment.</p>
                </div>
                <div class="text-center space-y-4">
                    <div class="text-amber-400 flex justify-center">
                        <IconStars size={48} />
                    </div>
                    <h3 class="text-xl font-light">Unique Expression</h3>
                    <p class="text-white/70">Create garments that truly reflect your personal style with unlimited customization options.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Call to Action -->
    <div class="bg-black border-t border-white/10">
        <div class="max-w-4xl mx-auto px-4 py-24 text-center">
            <h2 class="text-3xl md:text-4xl font-light mb-6">Begin Your Bespoke Journey</h2>
            <p class="text-white/80 text-lg mb-8">
                Experience the difference of true bespoke tailoring. Schedule your consultation today and take the first step towards your perfect garment.
            </p>
            <a 
                href="/contact" 
                class="inline-block px-8 py-3 border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-300"
            >
                Book Consultation
            </a>
        </div>
    </div>
</main>

<style>
    :global(body) {
        background-color: black;
    }

    button {
        -webkit-tap-highlight-color: transparent;
    }
</style>
