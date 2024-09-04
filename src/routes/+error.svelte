<script>
    import { emojis, statusTexts, statusDescriptions } from './emojis';
    import { page } from '$app/stores';
    import { fade, fly } from 'svelte/transition';
    import { onMount } from 'svelte';

    let status = $page.status;
    let emoji = emojis[status] || '🤔';
    let description = statusDescriptions[status] || 'We apologize for the inconvenience. Our team has been notified and is working on a solution.';
    let statusText = statusTexts[status] || 'Unknown Error';
    let visible = false;

    onMount(() => {
        visible = true;
    });
</script>

<div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-gray-900 text-white px-4">
    <div class="w-full max-w-4xl mx-auto text-center flex flex-col items-center justify-center" style="aspect-ratio: 1.618">
        {#if visible}
            <h1 in:fly={{ y: -50, duration: 1000 }} class="text-6xl sm:text-8xl font-bold mb-4 manrope">{status}</h1>
            <p in:fade={{ duration: 1000, delay: 300 }} class="text-xl sm:text-2xl mb-2">{emoji} {statusText}</p>
            <div in:fade={{ duration: 1000, delay: 600 }} class="flex flex-col items-center">
                <span class="text-base sm:text-lg manrope block mb-4">{description}</span>
                <a href="/" class="inline-block px-6 py-3 mt-4 bg-amber-400 text-black font-semibold rounded-full transition-all duration-300 hover:bg-amber-300 hover:shadow-lg">Return to Homepage</a>
            </div>
        {/if}
    </div>
</div>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }
</style>