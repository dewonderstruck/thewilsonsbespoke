<script lang="ts">
    import { page } from '$app/stores';
    import { fade, fly } from 'svelte/transition';
    import { IconChevronRight } from '@tabler/icons-svelte';
    import { onMount } from 'svelte';

    let visible = false;
    onMount(() => {
        visible = true;
    });

    // Get collection name from URL and format it
    $: collectionSlug = $page.params.collection;
    $: collectionName = collectionSlug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
        .replace(/-and-/g, ' & ');

    // Simulated collection data - in a real app, this would come from your data store
    let products: any[] = []; // Empty for now, you can add products later
</script>

<svelte:head>
    <title>{collectionName} - The Wilson's Bespoke</title>
    <meta name="description" content="Explore {collectionName} collection at The Wilson's Bespoke. Discover our handcrafted garments and bespoke tailoring services." />
</svelte:head>

<main class="min-h-screen bg-black text-white">
    <!-- Hero Section -->
    <div class="relative h-[50vh] flex items-center justify-center">
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>
        <img 
            src="https://mohair.qodeinteractive.com/wp-content/uploads/2023/05/H1-rev-img-2.jpg"
            alt="{collectionName} Collection" 
            class="absolute inset-0 w-full h-full object-cover"
        />
        <div class="relative z-20 text-center px-4 max-w-5xl mx-auto">
            {#if visible}
                <h1 
                    class="text-4xl md:text-6xl font-light tracking-wider mb-6"
                    in:fly={{ y: 50, duration: 1000 }}
                >
                    {collectionName}
                </h1>
            {/if}
        </div>
    </div>

    <!-- Breadcrumb -->
    <div class="max-w-7xl mx-auto px-4 py-8">
        <div class="flex items-center gap-2 text-sm text-white/60">
            <a href="/" class="hover:text-amber-400 transition-colors">Home</a>
            <IconChevronRight size={16} />
            <a href="/lookbook" class="hover:text-amber-400 transition-colors">Lookbook</a>
            <IconChevronRight size={16} />
            <span class="text-amber-400">{collectionName}</span>
        </div>
    </div>

    <!-- Collection Content -->
    <div class="max-w-7xl mx-auto px-4 py-16">
        {#if products.length === 0}
            <div 
                class="text-center py-32 border border-white/10 bg-white/5"
                in:fade={{ duration: 300 }}
            >
                <h2 class="text-3xl font-light mb-6">Coming Soon</h2>
                <p class="text-white/70 mb-8 max-w-2xl mx-auto">
                    This collection is currently being curated. Please check back soon or contact us to learn more about our upcoming pieces.
                </p>
                <a 
                    href="/contact" 
                    class="inline-block px-8 py-3 bg-amber-400 text-black hover:bg-amber-300 transition-colors duration-300"
                >
                    Contact Us
                </a>
            </div>
        {:else}
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {#each products as product}
                    <!-- Product Card (to be implemented when products are added) -->
                {/each}
            </div>
        {/if}
    </div>

    <!-- Call to Action -->
    <div class="bg-white/5 border-t border-white/10">
        <div class="max-w-4xl mx-auto px-4 py-24 text-center">
            <h2 class="text-3xl md:text-4xl font-light mb-6">Experience Bespoke Excellence</h2>
            <p class="text-white/80 text-lg mb-8">
                Let us help you create the perfect garment. Schedule a consultation with our master tailors today.
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
</style> 