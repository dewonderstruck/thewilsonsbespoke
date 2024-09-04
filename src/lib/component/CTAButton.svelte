<script>
    export let text = '';
    export let href = '';
</script>

<a href={href} class="manrope inline-block px-6 py-3 bg-amber-500 text-white font-semibold rounded-md hover:bg-amber-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50">
    {text}
</a>