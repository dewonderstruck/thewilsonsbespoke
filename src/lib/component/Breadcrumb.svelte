<script lang="ts">
    import { IconChevronRight } from '@tabler/icons-svelte';
    
    export let segments: { name: string; href: string }[] = [];
</script>

<nav class="flex items-center space-x-2 text-sm text-gray-400 mb-8">
    <a href="/" class="hover:text-amber-400 transition-colors">Home</a>
    {#each segments as segment, i}
        <IconChevronRight size={16} class="opacity-50" />
        {#if i === segments.length - 1}
            <span class="text-amber-400">{segment.name}</span>
        {:else}
            <a href={segment.href} class="hover:text-amber-400 transition-colors">{segment.name}</a>
        {/if}
    {/each}
</nav> 