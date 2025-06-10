<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    import { IconStars, IconHanger, IconTie } from '@tabler/icons-svelte';

    const collections = [
        {
            image: "https://images.unsplash.com/photo-1600091166971-7f9faad6c1e2?q=80&w=1974&auto=format&fit=crop",
            title: "Wedding Collection",
            description: "Timeless elegance for your special day"
        },
        {
            image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop",
            title: "Business Collection",
            description: "Sophisticated suits for the modern professional"
        },
        {
            image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1925&auto=format&fit=crop",
            title: "Evening Wear",
            description: "Refined elegance for special occasions"
        }
    ];

    let visible = false;
    onMount(() => {
        visible = true;
        
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    visible = true;
                }
            },
            { threshold: 0.1 }
        );

        const section = document.querySelector('.inspired-section');
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    });
</script>

<section class="inspired-section py-24 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-black/50 to-black/90"></div>
    <div class="max-w-7xl mx-auto px-4 relative z-10">
        {#if visible}
            <div class="text-center max-w-3xl mx-auto mb-20" in:fade={{ duration: 1000 }}>
                <h2 class="text-4xl md:text-5xl font-light mb-6 text-white">
                    Inspired by <span class="text-amber-400">Excellence</span>
                </h2>
                <p class="text-white/70 text-lg leading-relaxed">
                    Discover our curated collections, where timeless elegance meets contemporary style. Each piece is a testament to our commitment to excellence.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                {#each collections as collection, i}
                    <div 
                        class="group relative overflow-hidden border border-white/10 hover:border-amber-400/50 transition-all duration-700"
                        in:fade={{ duration: 800, delay: i * 200 }}
                    >
                        <div class="relative h-[400px] overflow-hidden">
                            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700 z-10"></div>
                            <img 
                                src={collection.image} 
                                alt={collection.title}
                                class="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-all duration-700"
                            />
                        </div>
                        <div class="absolute bottom-0 left-0 right-0 p-8 z-20">
                            <h3 class="text-2xl text-white font-light mb-2 group-hover:text-amber-400 transition-colors duration-300">
                                {collection.title}
                            </h3>
                            <p class="text-white/70">{collection.description}</p>
                        </div>
                    </div>
                {/each}
            </div>

            <div class="text-center mt-16">
                <a 
                    href="/lookbook" 
                    class="inline-block px-8 py-3 border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-300"
                >
                    Explore Lookbook
                </a>
            </div>
        {/if}
    </div>
</section>

<style>
    section {
        background-color: rgba(0, 0, 0, 0.5);
    }
</style>