<script>
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    import CTAButton from '$lib/component/CTAButton.svelte';

    let visible = false;
    onMount(() => {
        visible = true;
    });

    const services = [
        {
            title: 'Bespoke Suits',
            description: 'Tailored to perfection, our bespoke suits are crafted to your exact measurements and style preferences.',
            image: 'https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/inner-img-2.jpg'
        },
        {
            title: 'Made-to-Measure Shirts',
            description: 'Experience the luxury of shirts that fit you flawlessly, with your choice of fabrics and details.',
            image: 'https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/main-home-img-2.jpg'
        },
        {
            title: 'Custom Accessories',
            description: 'Complete your look with our range of handcrafted accessories, from ties to cufflinks.',
            image: 'https://kozasko.com/cdn/shop/files/70_2082099a-0540-4db5-bbfe-461b24c29f7c.jpg?v=1715191552&width=1346'
        }
    ];
</script>

<div class="bg-[#0d0d0d] text-white">
    <section class="relative h-screen">
        <div class="absolute inset-0">
            <img src="https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/inner-img-14.jpg" alt="Bespoke Tailoring" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div class="relative h-full flex flex-col justify-center items-center text-center px-4">
            {#if visible}
                <h1 in:fly={{ y: 50, duration: 1000 }} class="text-5xl md:text-7xl font-light mb-6 tracking-wider">Our Services</h1>
                <p in:fade={{ duration: 1000, delay: 500 }} class="text-xl md:text-2xl font-light max-w-3xl">
                    Discover the art of bespoke tailoring and elevate your style with our premium services.
                </p>
            {/if}
        </div>
    </section>

    <section class="py-24 px-4 md:px-16">
        <div class="max-w-6xl mx-auto">
            {#if visible}
                <h2 in:fly={{ y: 50, duration: 1000 }} class="text-4xl md:text-5xl font-light mb-16 text-center tracking-wider">Tailored Excellence</h2>
            {/if}
            {#each services as service, index}
                {#if visible}
                    <div in:fade={{ duration: 1000, delay: 300 * index }} class="mb-24 flex flex-col md:flex-row items-center justify-between">
                        <div class="w-full md:w-1/2 mb-8 md:mb-0 {index % 2 === 0 ? 'md:pr-16' : 'md:pl-16 md:order-2'}">
                            <h3 class="text-3xl md:text-4xl font-light mb-6">{service.title}</h3>
                            <p class="text-lg md:text-xl font-light leading-relaxed mb-8 ">{service.description}</p>
                            <a href="/contact" class=" inline-block px-6 py-3 mt-4 bg-amber-400 text-black font-semibold transition-all duration-300 hover:bg-amber-300 hover:shadow-lg">Learn More</a>
                        </div>
                        <div class="w-full md:w-1/2 {index % 2 === 0 ? '' : 'md:order-1'}">
                            <img src={service.image} alt={service.title} class="w-full h-auto object-cover shadow-lg transition-all duration-300 hover:shadow-2xl" />
                        </div>
                    </div>
                {/if}
            {/each}
        </div>
    </section>
</div>

<style>
    :global(body) {
        background-color: #0d0d0d;
        color: white;
    }
</style>
