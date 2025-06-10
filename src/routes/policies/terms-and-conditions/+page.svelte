<script lang="ts">
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import { IconChevronRight } from '@tabler/icons-svelte';

    export let slides = [
      {
        image: 'https://mohair.qodeinteractive.com/wp-content/uploads/2023/05/H1-rev-img-2.jpg',
        title: 'Terms and Conditions',
        subtitle: 'By accessing or using our services, you agree to comply with and be bound by the following terms and conditions.',
        lastUpdated: 'Last Updated: 17th March 2025',
      },
    ];
    let currentIndex = 0;
</script>

<svelte:head>
    <title>Terms and Conditions - The Wilson's Bespoke</title>
    <meta name="description" content="Read our terms and conditions for The Wilson's Bespoke tailoring services. Learn about our policies, procedures, and legal agreements." />
</svelte:head>

<main class="min-h-screen bg-black text-white" in:fade={{ duration: 300 }}>
    <!-- Hero Section -->
    <div class="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">
        <div class="absolute inset-0 bg-black/60 z-10"></div>
        <img 
            src={slides[currentIndex].image} 
            alt="Luxury Tailoring" 
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
            <span class="text-amber-400">Terms and Conditions</span>
        </div>

        <!-- Terms Content -->
        <div class="space-y-12">
            <section class="space-y-4">
                <h2 class="text-2xl md:text-3xl font-light tracking-wide text-amber-400">Introduction</h2>
                <p class="text-white/80 leading-relaxed">Welcome to our website. By accessing or using our services, you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully, as they contain important information regarding your legal rights, remedies, and obligations.</p>
            </section>

            <section class="space-y-4">
                <h2 class="text-2xl md:text-3xl font-light tracking-wide text-amber-400">Order Process</h2>
                <p class="text-white/80 leading-relaxed">All orders are subject to acceptance and availability. Once an order is placed, you will receive an email confirmation. This email does not constitute acceptance of your order, but is a confirmation that we have received your request.</p>
                <p class="text-white/80 leading-relaxed">Orders for bespoke suits and custom clothing are final sale once production begins. Changes or cancellations may be requested within 24 hours of placing your order. After 24 hours, we cannot guarantee any modifications or cancellations.</p>
            </section>

            <section class="space-y-4">
                <h2 class="text-2xl md:text-3xl font-light tracking-wide text-amber-400">Payment</h2>
                <p class="text-white/80 leading-relaxed">We accept payments via PayPal and Razorpay for your convenience and security. Payment is required at the time of order placement. All prices are listed in the local currency and include applicable taxes unless otherwise stated.</p>
                <p class="text-white/80 leading-relaxed">By providing your payment information, you authorize us to charge the designated payment method for the total amount of your purchase. We reserve the right to change pricing at any time without prior notice.</p>
            </section>

            <section class="space-y-4">
                <h2 class="text-2xl md:text-3xl font-light tracking-wide text-amber-400">Custom Orders</h2>
                <p class="text-white/80 leading-relaxed">As all our suits are bespoke and made to measure, it is crucial that you provide accurate measurements and specifications. We are not responsible for incorrect measurements provided by the customer. Please follow our measurement guide carefully or visit a local tailor to ensure accuracy.</p>
                <p class="text-white/80 leading-relaxed">We strive to deliver products that match the specifications and expectations of our customers. However, slight variations in color, fabric, or design may occur due to the bespoke nature of the products.</p>
            </section>

            <section class="space-y-4">
                <h2 class="text-2xl md:text-3xl font-light tracking-wide text-amber-400">Shipping and Delivery</h2>
                <p class="text-white/80 leading-relaxed">We offer worldwide shipping using trusted carriers. Shipping costs and delivery times vary based on the destination and shipping method chosen at checkout. All orders are processed within 2-3 business days, except for bespoke items, which may take up to 4-6 weeks to manufacture.</p>
                <p class="text-white/80 leading-relaxed">We are not responsible for delays caused by customs, postal delays, or other circumstances beyond our control. Tracking information will be provided once your order is shipped.</p>
            </section>

            <section class="space-y-4">
                <h2 class="text-2xl md:text-3xl font-light tracking-wide text-amber-400">Returns and Exchanges</h2>
                <p class="text-white/80 leading-relaxed">Due to the bespoke nature of our products, we do not offer returns or exchanges on custom orders. If you receive a defective or incorrect item, please contact us within 7 days of receipt to arrange for a repair or replacement.</p>
                <p class="text-white/80 leading-relaxed">For non-bespoke items, returns are accepted within 30 days of delivery, provided the items are in their original, unused condition. Please see our Returns Policy for more details.</p>
            </section>

            <section class="space-y-4">
                <h2 class="text-2xl md:text-3xl font-light tracking-wide text-amber-400">Contact Information</h2>
                <p class="text-white/80 leading-relaxed">If you have any questions or concerns about these terms and conditions, please contact us:</p>
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
