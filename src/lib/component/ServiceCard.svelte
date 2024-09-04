<script>
    export let title = '';
    export let description = '';
    export let image = '';
</script>

<div class="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
    <img src={image} alt={title} class="w-full h-48 object-cover" />
    <div class="p-6">
        <h3 class="text-2xl font-semibold mb-2">{title}</h3>
        <p class="text-gray-600 mb-4">{description}</p>
        <a href="/contact" class="inline-block px-4 py-2 bg-amber-500 text-white font-semibold rounded hover:bg-amber-600 transition duration-300">
            Learn More
        </a>
    </div>
</div>
