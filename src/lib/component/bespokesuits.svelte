<script>
    const suits = [
      {
        name: "Bespoke Suits",
        image: "https://cdn.media.amplience.net/i/tom_ford/2EYHT1-WOS09_HB790_OS_A?w=2560"
      },
      {
        name: "Canvas Suits",
        image: "https://cdn.media.amplience.net/i/tom_ford/2EYHT1-WOS09_HB790_OS_A?w=2560"
      },
      {
        name: "Accessories",
        image: "https://cdn.media.amplience.net/i/tom_ford/2EYHT1-WOS09_HB790_OS_A?w=2560"
      }
    ];
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-black/80">
    {#each suits as suit}
      <div class="relative border border-gray-100/20 text-center bg-black/90">
        <img src={suit.image} alt={suit.name} class="w-full h-auto"/>
        <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-70 hover:underline hover:underline-offset-8 hover:decoration-gray-100/20 hover:decoration-1 transition-opacity">
          <span class="text-white text-4xl font-semibold uppercase tracking-wider hover:shadow-lg manrope ">{suit.name}</span>
        </div>
      </div>
    {/each}
</div>