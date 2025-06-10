<script lang="ts">
    export let title: string = '';
    export let description: string = '';
    export let image: string = '';
    export let features: string[] = [];
    export let price: string = '';
    export let icon: any;
    export let link: string = '/contact';
</script>

<div class="group relative bg-white/5 rounded-lg overflow-hidden border border-white/10 hover:border-amber-400/50 transition-all duration-700">
    <!-- Image Container with Parallax Effect -->
    <div class="relative h-[300px] overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700 z-10"></div>
        <img 
            src={image} 
            alt={title} 
            class="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-all duration-700"
        />
        <!-- Icon Overlay -->
        <div class="absolute top-6 right-6 z-20 bg-black/30 backdrop-blur-sm p-3 rounded-full border border-white/10 group-hover:border-amber-400/50 transition-all duration-700">
            <svelte:component this={icon} class="w-6 h-6 text-amber-400" />
        </div>
    </div>

    <!-- Content Section -->
    <div class="p-8 space-y-6">
        <!-- Title and Description -->
        <div class="space-y-4">
            <h3 class="text-2xl font-light tracking-wide group-hover:text-amber-400 transition-colors duration-500">{title}</h3>
            <p class="text-white/70 leading-relaxed">{description}</p>
        </div>

        <!-- Features List -->
        <div class="space-y-3">
            {#each features as feature}
                <div class="flex items-center gap-3 text-white/60 group-hover:text-white/80 transition-colors duration-500">
                    <span class="w-1.5 h-1.5 rounded-full bg-amber-400/60 group-hover:bg-amber-400 transition-colors duration-500"></span>
                    <span class="text-sm">{feature}</span>
                </div>
            {/each}
        </div>

        <!-- Price and CTA -->
        <div class="pt-6 flex items-center justify-between border-t border-white/10 group-hover:border-amber-400/20 transition-colors duration-700">
            {#if price}
                <div class="space-y-1">
                    <span class="text-white/50 text-sm">Starting from</span>
                    <p class="text-xl text-amber-400">{price}</p>
                </div>
            {/if}
            <a 
                href={link}
                class="relative inline-flex items-center gap-2 px-6 py-2 overflow-hidden rounded bg-white/5 text-white/90 hover:text-amber-400 transition-all duration-500 group/btn"
            >
                <span class="relative z-10">Explore</span>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    class="h-4 w-4 transform transition-transform duration-500 group-hover/btn:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <div class="absolute inset-0 bg-amber-400/0 group-hover/btn:bg-amber-400/10 transition-colors duration-500"></div>
            </a>
        </div>
    </div>
</div>

<style>
    /* Optional: Add a subtle shadow effect on hover */
    .group:hover {
        box-shadow: 0 0 40px rgba(251, 191, 36, 0.1);
    }
</style>
