<script lang="ts">
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import { IconChevronRight } from '@tabler/icons-svelte';

    export let slides = [
      {
        image: 'https://mohair.qodeinteractive.com/wp-content/uploads/2023/05/H1-rev-img-2.jpg',
        title: 'Returns & Exchanges',
        subtitle: 'Understanding our return policy for bespoke and ready-to-wear items.',
        lastUpdated: 'Last Updated: 17th March 2025',
      },
    ];
    let currentIndex = 0;
</script>

<svelte:head>
    <title>Returns & Exchanges - The Wilson's Bespoke</title>
    <meta name="description" content="Learn about The Wilson's Bespoke returns and exchange policies for our tailored garments. Understand our commitment to customer satisfaction and quality." />
</svelte:head>

<main class="min-h-screen bg-black text-white" in:fade={{ duration: 300 }}>
    <!-- Hero Section -->
    <div class="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">
        <div class="absolute inset-0 bg-black/60 z-10"></div>
        <img 
            src={slides[currentIndex].image} 
            alt="Luxury Tailoring Returns" 
            class="absolute inset-0 w-full h-full object-cover"
        />
        <div class="relative z-20 h-full flex flex-col items-center justify-center px-4 text-center">
            <h1 class="text-4xl md:text-6xl font-light tracking-wider mb-6">{slides[currentIndex].title}</h1>
            <p class="max-w-2xl text-lg md:text-xl text-white/80 font-light leading-relaxed mb-4">{slides[currentIndex].subtitle}</p>
            <p class="text-sm text-amber-400">{slides[currentIndex].lastUpdated}</p>
        </div>
    </div>

    <!-- Content Section -->
    <div class="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <!-- Breadcrumb -->
        <div class="flex items-center gap-2 text-sm mb-12 text-white/60">
            <a href="/" class="hover:text-amber-400 transition-colors">Home</a>
            <IconChevronRight size={16} />
            <a href="/policies" class="hover:text-amber-400 transition-colors">Policies</a>
            <IconChevronRight size={16} />
            <span class="text-amber-400">Returns & Exchanges</span>
        </div>

        <!-- Returns Content -->
        <div class="space-y-12">
            <section class="space-y-4">
                <h2 class="text-2xl md:text-3xl font-light tracking-wide text-amber-400">Bespoke Items</h2>
                <p class="text-white/80 leading-relaxed">Due to the personalized nature of our bespoke garments, we do not accept returns or exchanges for custom-made items. Each piece is crafted specifically to your measurements and preferences, making it uniquely yours.</p>
                <ul class="list-disc pl-6 space-y-2 text-white/80">
                    <li>All sales are final once production begins</li>
                    <li>Alterations available within 30 days of delivery</li>
                    <li>Quality guarantee against craftsmanship defects</li>
                </ul>
            </section>

            <section class="space-y-4">
                <h2 class="text-2xl md:text-3xl font-light tracking-wide text-amber-400">Ready-to-Wear Items</h2>
                <p class="text-white/80 leading-relaxed">For non-bespoke items, we accept returns within 30 days of delivery, provided:</p>
                <ul class="list-disc pl-6 space-y-2 text-white/80">
                    <li>Items are unworn and in original condition</li>
                    <li>Original tags are attached</li>
                    <li>Items are in their original packaging</li>
                    <li>Proof of purchase is provided</li>
                </ul>
            </section>

            <section class="space-y-4">
                <h2 class="text-2xl md:text-3xl font-light tracking-wide text-amber-400">Quality Guarantee</h2>
                <p class="text-white/80 leading-relaxed">We stand behind the quality of our craftsmanship. If you receive a defective item or notice any issues with the construction:</p>
                <ul class="list-disc pl-6 space-y-2 text-white/80">
                    <li>Contact us within 7 days of receipt</li>
                    <li>Provide detailed photos of the issue</li>
                    <li>We will arrange repair or replacement</li>
                    <li>Complimentary alterations for fit issues</li>
                </ul>
            </section>

            <section class="space-y-4">
                <h2 class="text-2xl md:text-3xl font-light tracking-wide text-amber-400">Return Process</h2>
                <p class="text-white/80 leading-relaxed">For eligible returns, please follow these steps:</p>
                <ul class="list-disc pl-6 space-y-2 text-white/80">
                    <li>Contact our customer service team</li>
                    <li>Receive a return authorization number</li>
                    <li>Package the item securely with all documentation</li>
                    <li>Ship to our provided return address</li>
                </ul>
                <p class="text-white/80 leading-relaxed mt-4">Refunds will be processed within 5-7 business days of receiving the returned item.</p>
            </section>

            <section class="space-y-4">
                <h2 class="text-2xl md:text-3xl font-light tracking-wide text-amber-400">Alterations Service</h2>
                <p class="text-white/80 leading-relaxed">We offer professional alteration services to ensure your garments fit perfectly:</p>
                <ul class="list-disc pl-6 space-y-2 text-white/80">
                    <li>First alteration is complimentary within 30 days</li>
                    <li>Minor adjustments available at nominal cost</li>
                    <li>Major alterations assessed case-by-case</li>
                    <li>Expert tailors ensure perfect fit</li>
                </ul>
            </section>

            <section class="space-y-4">
                <h2 class="text-2xl md:text-3xl font-light tracking-wide text-amber-400">Contact Information</h2>
                <p class="text-white/80 leading-relaxed">For returns, exchanges, or alteration inquiries, please contact us:</p>
                <div class="space-y-2 pl-4 text-white/80">
                    <p>Email: <a href="mailto:support@thewilsonsbespoke.com" class="text-amber-400 hover:underline">support@thewilsonsbespoke.com</a></p>
                    <p>Phone: <a href="tel:+918978159977" class="text-amber-400 hover:underline">+91 089781 59977</a></p>
                </div>
            </section>
        </div>
    </div>
</main>

<style>
    section {
        position: relative;
        padding-left: 1.5rem;
    }

    section::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0.75rem;
        width: 3px;
        height: 1.5rem;
        background-color: rgb(251 191 36 / 0.4);
        border-radius: 4px;
    }

    :global(body) {
        background-color: black;
    }
</style>
