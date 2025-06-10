<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, slide } from 'svelte/transition';
    import { IconChevronRight, IconPlus, IconMinus } from '@tabler/icons-svelte';

    export let slides = [
      {
        image: 'https://mohair.qodeinteractive.com/wp-content/uploads/2023/05/H1-rev-img-2.jpg',
        title: 'Frequently Asked Questions',
        subtitle: 'Find answers to common questions about our bespoke tailoring services.',
        lastUpdated: 'Last Updated: 17th March 2025',
      },
    ];

    interface FAQItem {
        question: string;
        answer: string;
        category: string;
        isOpen: boolean;
    }

    let faqItems: FAQItem[] = [
        {
            category: "Bespoke Services",
            question: "What is bespoke tailoring?",
            answer: "Bespoke tailoring is the art of creating a garment from scratch, specifically for you. Unlike made-to-measure or off-the-rack clothing, bespoke involves creating a unique pattern for each client, with multiple fittings to ensure perfect fit and style.",
            isOpen: false
        },
        {
            category: "Bespoke Services",
            question: "How long does the bespoke process take?",
            answer: "The typical bespoke process takes 4-6 weeks from initial consultation to final delivery. This includes multiple fittings, pattern creation, and meticulous handcrafting of your garment. Rush orders may be accommodated upon request.",
            isOpen: false
        },
        {
            category: "Measurements & Fittings",
            question: "How many fittings will I need?",
            answer: "Most bespoke garments require 2-3 fittings. The first fitting is for measurements and style consultation, the second for initial adjustments, and the final fitting ensures everything is perfect before delivery.",
            isOpen: false
        },
        {
            category: "Measurements & Fittings",
            question: "Can I get measured remotely?",
            answer: "While we recommend in-person measurements for the best results, we offer detailed video consultations and measurement guides for remote clients. We can also work with your local tailor for measurements.",
            isOpen: false
        },
        {
            category: "Pricing & Payment",
            question: "What is the price range for bespoke suits?",
            answer: "Our bespoke suits start from ₹75,000, with final pricing dependent on fabric choice, details, and complexity. We offer various payment plans and accept all major credit cards, UPI, and bank transfers.",
            isOpen: false
        },
        {
            category: "Pricing & Payment",
            question: "Do you require a deposit?",
            answer: "Yes, we require a 50% deposit to begin work on your bespoke garment. The remaining balance is due upon completion, before final delivery.",
            isOpen: false
        },
        {
            category: "Alterations & Maintenance",
            question: "Do you offer alterations?",
            answer: "Yes, we provide complimentary alterations within 30 days of delivery for all bespoke garments. Beyond this period, we offer alterations at a nominal cost to ensure your garment maintains its perfect fit.",
            isOpen: false
        },
        {
            category: "Alterations & Maintenance",
            question: "How should I care for my bespoke garments?",
            answer: "We provide detailed care instructions with each garment. Generally, we recommend dry cleaning only when necessary, hanging garments properly, and regular pressing. We also offer maintenance services to keep your garments in pristine condition.",
            isOpen: false
        }
    ];

    let currentIndex = 0;
    let categories = [...new Set(faqItems.map(item => item.category))];
    let activeCategory = categories[0];
    
    function toggleQuestion(index: number) {
        faqItems[index].isOpen = !faqItems[index].isOpen;
        faqItems = [...faqItems];
    }

    function setCategory(category: string) {
        activeCategory = category;
    }

    $: filteredFAQs = activeCategory === 'All' 
        ? faqItems 
        : faqItems.filter(item => item.category === activeCategory);
</script>

<svelte:head>
    <title>FAQ - The Wilson's Bespoke</title>
    <meta name="description" content="Find answers to frequently asked questions about The Wilson's Bespoke tailoring services, including our bespoke process, fittings, pricing, and maintenance." />
</svelte:head>

<main class="min-h-screen bg-black text-white" in:fade={{ duration: 300 }}>
   

    <div class="relative z-20 h-full flex flex-col items-center justify-center px-4 text-center mt-[35vh]">
            <h1 class="text-4xl md:text-6xl font-light tracking-wider mb-6">{slides[currentIndex].title}</h1>
            <p class="max-w-2xl text-lg md:text-xl text-white/80 font-light leading-relaxed mb-4">{slides[currentIndex].subtitle}</p>
            <p class="text-sm text-amber-400">{slides[currentIndex].lastUpdated}</p>
    </div>

    <!-- Content Section -->
    <div class="max-w-4xl mx-auto px-4 py-16 md:py-24">
    
        <!-- Breadcrumb -->
        <div class="flex items-center gap-2 text-sm mb-12 text-white/60">
            <a href="/" class="hover:text-amber-400 transition-colors">Home</a>
            <IconChevronRight size={16} />
            <a href="/policies" class="hover:text-amber-400 transition-colors">Policies</a>
            <IconChevronRight size={16} />
            <span class="text-amber-400">FAQ</span>
        </div>

        <!-- Category Navigation -->
        <div class="mb-12">
            <div class="flex flex-wrap gap-4">
                {#each ['All', ...categories] as category}
                    <button
                        class="px-6 py-2 text-sm transition-all duration-300 border {
                            activeCategory === category 
                                ? 'bg-amber-400 text-black border-amber-400' 
                                : 'border-white/20'
                        }"
                        on:click={() => setCategory(category)}
                    >
                        {category}
                    </button>
                {/each}
            </div>
        </div>

        <!-- FAQ Items -->
        <div class="space-y-6">
            {#each filteredFAQs as faq, index}
                <div 
                    class="border border-white/10 overflow-hidden hover:border-amber-400/50 transition-all duration-300"
                    in:fade={{ duration: 300, delay: index * 100 }}
                >
                    <button
                        class="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-300"
                        on:click={() => toggleQuestion(index)}
                    >
                        <span class="text-lg font-light">{faq.question}</span>
                        <span class="text-amber-400 flex-shrink-0">
                            {#if faq.isOpen}
                                <IconMinus size={20} />
                            {:else}
                                <IconPlus size={20} />
                            {/if}
                        </span>
                    </button>
                    {#if faq.isOpen}
                        <div 
                            class="px-6 py-4 text-white/80 border-t border-white/10"
                            transition:slide={{ duration: 300 }}
                        >
                            {faq.answer}
                        </div>
                    {/if}
                </div>
            {/each}
        </div>

        <!-- Contact Section -->
        <div class="mt-16 text-center">
            <p class="text-white/80 mb-4">Still have questions? We're here to help!</p>
            <div class="space-y-2">
                <p>Email: <a href="mailto:support@thewilsonsbespoke.com" class="text-amber-400 hover:underline">support@thewilsonsbespoke.com</a></p>
                <p>Phone: <a href="tel:+918978159977" class="text-amber-400 hover:underline">+91 089781 59977</a></p>
            </div>
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