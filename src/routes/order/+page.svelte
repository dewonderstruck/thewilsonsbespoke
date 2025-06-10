<script lang="ts">
    import Breadcrumb from "$lib/component/Breadcrumb.svelte";
    
    const breadcrumbSegments = [
        { name: "Order", href: "/order" }
    ];
</script>

<div class="max-w-7xl mx-auto px-4 py-12">
    <Breadcrumb segments={breadcrumbSegments} />
    // ... existing code ...
</div> 