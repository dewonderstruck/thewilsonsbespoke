<script lang="ts">
    import { cubicOut } from 'svelte/easing';
    import { slide, fade } from 'svelte/transition';
    import { IconChevronDown, IconChevronUp } from '@tabler/icons-svelte';

    export let slides = [
      {
        image: 'https://mohair.qodeinteractive.com/wp-content/uploads/2023/05/H1-rev-img-2.jpg',
        title: 'FAQ',
        subtitle: 'Frequently Asked Questions',
      },
    ];
    let currentIndex = 0;

    let faqs = [
        {
            question: "What is your return policy?",
            answer: "Our return policy allows returns within 30 days of purchase. Items must be in original condition."
        },
        {
            question: "How long does shipping take?",
            answer: "Shipping typically takes 5-7 business days for domestic orders and 10-15 business days for international orders."
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes, we offer international shipping to most countries. Shipping fees and delivery times vary by location."
        },
        {
            question: "What are the opening hours for appointments?",
            answer: "We are open from 11am to 9pm, Monday to Saturday."
        },
        {
            question: "Can I customise or alter my order?",
            answer: "Yes, we offer customisation and alteration services. Please contact us for more information."
        }
    ];

    let activeIndex: number | null = null;

    function toggleFAQ(index: number) {
        activeIndex = activeIndex === index ? null : index;
    }
</script>

<main class="flex flex-col justify-center items-center min-h-screen bg-[#0C090A] text-white text-center">
    <div class="relative w-full h-48">
    </div>
    <div class="relative w-full h-96">
      <img
        src="{slides[currentIndex].image}"
        alt="bg"
        class="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div class="relative flex flex-col items-center justify-center h-full">
        <h2 class="text-4xl md:text-6xl font-bold">{slides[currentIndex].title}</h2>
        <p>{slides[currentIndex].subtitle}</p>
      </div>
    </div>

    <div class="relative my-8 p-6 max-w-4xl text-start w-full h-full">
        <div class="space-y-4">
            {#each faqs as faq, index}
                <div class="border-b border-gray-700/40 overflow-hidden" transition:fade={{ duration: 300 }}>
                    <button 
                        class="w-full text-left p-4 focus:outline-none flex justify-between items-center transition-colors duration-300 hover:bg-zinc-800 {activeIndex === index ? 'bg-zinc-800' : 'bg-transparent'}" 
                        on:click={() => toggleFAQ(index)}
                    >
                        <h4 class="text-xl font-medium">{faq.question}</h4>
                        <div class="transition-transform duration-300 ease-in-out" class:rotate-180={activeIndex === index}>
                            <IconChevronDown class="w-5 h-5" />
                        </div>
                    </button>
                    {#if activeIndex === index}
                        <div transition:slide={{ duration: 300, easing: cubicOut }}>
                            <p class="p-4 mb-2 text-lg">{faq.answer}</p>
                        </div>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</main>

<style>
    a {
        @apply underline underline-offset-4 text-blue-400/90;
    }
    .transition-height {
        overflow: hidden;
    }
</style>