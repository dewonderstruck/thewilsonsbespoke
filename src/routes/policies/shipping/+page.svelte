<script lang="ts">
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import { IconChevronRight } from '@tabler/icons-svelte';

    export let slides = [
      {
        image: 'https://mohair.qodeinteractive.com/wp-content/uploads/2023/05/H1-rev-img-2.jpg',
        title: 'Shipping Policy',
        subtitle: 'Learn about our worldwide shipping services, delivery times, and tracking procedures.',
        lastUpdated: 'Last Updated: 17th March 2025',
      },
    ];
    let currentIndex = 0;
</script>

<svelte:head>
    <title>Shipping Policy - The Wilson's Bespoke</title>
    <meta name="description" content="Learn about The Wilson's Bespoke shipping policies, delivery times, and international shipping services for our bespoke tailoring products." />
</svelte:head>

<main class="min-h-screen bg-black text-white" in:fade={{ duration: 300 }}>
    <!-- Hero Section -->
    <div class="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">
        <div class="absolute inset-0 bg-black/60 z-10"></div>
        <img 
            src={slides[currentIndex].image} 
            alt="Luxury Tailoring Shipping" 
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
            <span class="text-amber-400">Shipping</span>
        </div>

        <!-- Shipping Content -->
        <div class="space-y-12">
            <section class="space-y-4">
                <h2 class="text-2xl md:text-3xl font-light tracking-wide text-amber-400">Shipping Services</h2>
                <p class="text-white/80 leading-relaxed">We offer worldwide shipping through premium carriers to ensure your bespoke garments reach you in perfect condition. Our shipping services are designed to provide secure and timely delivery while maintaining the highest standards of care for your custom-made pieces.</p>
            </section>

            <section class="space-y-4">
                <h2 class="text-2xl md:text-3xl font-light tracking-wide text-amber-400">Processing Times</h2>
                <p class="text-white/80 leading-relaxed">For bespoke garments, please allow 4-6 weeks for crafting before shipping. This ensures each piece receives the attention to detail it deserves. Once your order is ready for shipping, you will receive a notification with tracking information.</p>
                <ul class="list-disc pl-6 space-y-2 text-white/80">
                    <li>Standard orders: 2-3 business days processing</li>
                    <li>Bespoke suits: 4-6 weeks crafting time</li>
                    <li>Rush orders: Available upon request (additional fees apply)</li>
                </ul>
            </section>

            <section class="space-y-4">
                <h2 class="text-2xl md:text-3xl font-light tracking-wide text-amber-400">Delivery Times</h2>
                <p class="text-white/80 leading-relaxed">Estimated delivery times vary by destination:</p>
                <ul class="list-disc pl-6 space-y-2 text-white/80">
                    <li>Domestic (India): 2-4 business days</li>
                    <li>International (Asia): 5-7 business days</li>
                    <li>Europe & Americas: 7-10 business days</li>
                    <li>Rest of World: 10-14 business days</li>
                </ul>
            </section>

            <section class="space-y-4">
                <h2 class="text-2xl md:text-3xl font-light tracking-wide text-amber-400">Shipping Costs</h2>
                <p class="text-white/80 leading-relaxed">Shipping costs are calculated based on destination and service level selected at checkout. We offer:</p>
                <ul class="list-disc pl-6 space-y-2 text-white/80">
                    <li>Complimentary shipping on orders over ₹50,000</li>
                    <li>Standard shipping rates starting at ₹500</li>
                    <li>Express shipping available at additional cost</li>
                    <li>International shipping rates vary by destination</li>
                </ul>
            </section>

            <section class="space-y-4">
                <h2 class="text-2xl md:text-3xl font-light tracking-wide text-amber-400">Tracking & Insurance</h2>
                <p class="text-white/80 leading-relaxed">All shipments include tracking and insurance coverage. Once your order ships, you'll receive:</p>
                <ul class="list-disc pl-6 space-y-2 text-white/80">
                    <li>Tracking number via email</li>
                    <li>Real-time shipping updates</li>
                    <li>Full insurance coverage</li>
                    <li>Signature confirmation on delivery</li>
                </ul>
            </section>

            <section class="space-y-4">
                <h2 class="text-2xl md:text-3xl font-light tracking-wide text-amber-400">International Shipping</h2>
                <p class="text-white/80 leading-relaxed">For international orders, please note:</p>
                <ul class="list-disc pl-6 space-y-2 text-white/80">
                    <li>Import duties and taxes are the responsibility of the recipient</li>
                    <li>Customs processing may affect delivery times</li>
                    <li>All necessary customs documentation will be provided</li>
                    <li>We ship to most countries worldwide</li>
                </ul>
            </section>

            <section class="space-y-4">
                <h2 class="text-2xl md:text-3xl font-light tracking-wide text-amber-400">Contact Information</h2>
                <p class="text-white/80 leading-relaxed">For shipping inquiries or assistance, please contact us:</p>
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
  