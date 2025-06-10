<script lang="ts">
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import { IconChevronRight } from '@tabler/icons-svelte';

    export let slides = [
      {
        image: 'https://mohair.qodeinteractive.com/wp-content/uploads/2023/05/H1-rev-img-2.jpg',
        title: 'Privacy Policy',
        subtitle: 'Learn how we collect, use, and protect your personal information.',
        lastUpdated: 'Last Updated: 17th March 2025',
      },
    ];
    let currentIndex = 0;
</script>

<svelte:head>
    <title>Privacy Policy - The Wilson's Bespoke</title>
    <meta name="description" content="Learn about The Wilson's Bespoke privacy policy, how we protect your data, and your privacy rights when using our bespoke tailoring services." />
</svelte:head>

<main class="min-h-screen bg-black text-white" in:fade={{ duration: 300 }}>
    <!-- Hero Section -->
    <div class="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">
        <div class="absolute inset-0 bg-black/60 z-10"></div>
        <img 
            src={slides[currentIndex].image} 
            alt="Privacy Policy" 
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
            <span class="text-amber-400">Privacy Policy</span>
        </div>

        <!-- Privacy Content -->
        <div class="space-y-12">
            <section class="space-y-4">
                <h2 class="text-2xl md:text-3xl font-light tracking-wide text-amber-400">Information We Collect</h2>
                <p class="text-white/80 leading-relaxed">We collect various types of information to provide and improve our bespoke tailoring services:</p>
                <ul class="list-disc pl-6 space-y-2 text-white/80">
                    <li>Personal information (name, email, phone number)</li>
                    <li>Measurements and fitting preferences</li>
                    <li>Payment information</li>
                    <li>Delivery address and contact details</li>
                    <li>Style preferences and order history</li>
                </ul>
            </section>

            <section class="space-y-4">
                <h2 class="text-2xl md:text-3xl font-light tracking-wide text-amber-400">How We Use Your Information</h2>
                <p class="text-white/80 leading-relaxed">Your information helps us provide personalized service:</p>
                <ul class="list-disc pl-6 space-y-2 text-white/80">
                    <li>Creating and maintaining your customer profile</li>
                    <li>Processing and fulfilling your orders</li>
                    <li>Communicating about your orders and services</li>
                    <li>Improving our products and services</li>
                    <li>Sending relevant marketing communications (with consent)</li>
                </ul>
            </section>

            <section class="space-y-4">
                <h2 class="text-2xl md:text-3xl font-light tracking-wide text-amber-400">Data Protection</h2>
                <p class="text-white/80 leading-relaxed">We implement robust security measures to protect your data:</p>
                <ul class="list-disc pl-6 space-y-2 text-white/80">
                    <li>Secure SSL encryption for all transactions</li>
                    <li>Regular security audits and updates</li>
                    <li>Limited access to personal information</li>
                    <li>Secure data storage and backup systems</li>
                </ul>
            </section>

            <section class="space-y-4">
                <h2 class="text-2xl md:text-3xl font-light tracking-wide text-amber-400">Cookie Policy</h2>
                <p class="text-white/80 leading-relaxed">Our website uses cookies to enhance your experience:</p>
                <ul class="list-disc pl-6 space-y-2 text-white/80">
                    <li>Essential cookies for website functionality</li>
                    <li>Analytics cookies to improve our service</li>
                    <li>Preference cookies to remember your settings</li>
                    <li>Marketing cookies (with your consent)</li>
                </ul>
            </section>

            <section class="space-y-4">
                <h2 class="text-2xl md:text-3xl font-light tracking-wide text-amber-400">Your Privacy Rights</h2>
                <p class="text-white/80 leading-relaxed">You have the right to:</p>
                <ul class="list-disc pl-6 space-y-2 text-white/80">
                    <li>Access your personal data</li>
                    <li>Request data correction or deletion</li>
                    <li>Withdraw marketing consent</li>
                    <li>Request data portability</li>
                    <li>Lodge a complaint with authorities</li>
                </ul>
            </section>

            <section class="space-y-4">
                <h2 class="text-2xl md:text-3xl font-light tracking-wide text-amber-400">Third-Party Services</h2>
                <p class="text-white/80 leading-relaxed">We may share data with trusted partners:</p>
                <ul class="list-disc pl-6 space-y-2 text-white/80">
                    <li>Payment processors</li>
                    <li>Shipping and delivery services</li>
                    <li>Analytics providers</li>
                    <li>Marketing services (with consent)</li>
                </ul>
            </section>

            <section class="space-y-4">
                <h2 class="text-2xl md:text-3xl font-light tracking-wide text-amber-400">Contact Information</h2>
                <p class="text-white/80 leading-relaxed">For privacy-related inquiries, please contact us:</p>
                <div class="space-y-2 pl-4 text-white/80">
                    <p>Email: <a href="mailto:privacy@thewilsonsbespoke.com" class="text-amber-400 hover:underline">privacy@thewilsonsbespoke.com</a></p>
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