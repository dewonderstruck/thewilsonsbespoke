<script>
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  let visible = false;
  onMount(() => {
    visible = true;
  });

  const collections = [
    { 
      name: 'Spring', 
      description: 'Embrace renewal with our Spring collection, featuring lightweight fabrics and pastel hues.',
      color: 'bg-emerald-100',
      image: 'https://images.unsplash.com/photo-1633655442136-bbc120229009?q=80&w=3091&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    { 
      name: 'Summer', 
      description: 'Experience the essence of summer with breathable linens and vibrant patterns.',
      color: 'bg-amber-100',
      image: 'https://images.unsplash.com/photo-1633655442432-620aa55d7ac1?q=80&w=3091&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    { 
      name: 'Autumn', 
      description: 'Transition in style with our Autumn collection, rich in warm tones and layered textures.',
      color: 'bg-orange-100',
      image: 'https://images.unsplash.com/photo-1665815844395-06f64f44b5e3?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    { 
      name: 'Winter', 
      description: 'Discover elegance in our Winter collection, featuring luxurious wools and sophisticated silhouettes.',
      color: 'bg-blue-100',
      image: 'https://images.unsplash.com/photo-1633655442136-bbc120229009?q=80&w=3091&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];
</script>

<div class="flex flex-col bg-[#0C0404] items-center min-h-screen w-screen text-white">
  <div class="relative w-full h-[40vh] bg-cover bg-center flex items-center justify-center bg-black">
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    <h1 class="relative top-40 text-4xl md:text-6xl lg:text-7xl uppercase tracking-widest text-center">T. Wilson's Bespoke Lookbook</h1>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl mx-auto px-4 py-16">
    {#each collections as { name, color, description, image }}
      {#if visible}
        <section in:fade={{duration: 1000, delay: 300}} class="group">
          <div class={`${color} text-[#0C0404] p-8 shadow-lg transition-all duration-300 group-hover:shadow-xl`}>
            <img src={image} alt={`${name} Collection`} class="w-full h-74 object-cover mb-6"/>
            <h2 class="font-heading font-bold text-3xl mb-4 transition-colors duration-300 group-hover:text-slate-700">
              {name} Collection
            </h2>
            <p class="text-lg mb-6">{description}</p>
            <a class="inline-flex items-center text-xl font-bold transition-all duration-300 hover:text-zinc-600" href={`/lookbook/${name.toLowerCase()}`}>
              <span class="mr-2">Explore Collection</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </section>
      {/if}
    {/each}
  </div>

  <div class="w-full max-w-7xl mx-auto px-4 py-16">
    <h2 class="text-3xl mb-8">Archived Collections</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {#each ['Spring', 'Summer', 'Autumn', 'Winter'] as season}
        <a href={`/lookbook/${season.toLowerCase()}-23`} class="text-lg hover:text-amber-400 transition-colors duration-300">
          {season} '23 Collection
        </a>
      {/each}
    </div>
  </div>
</div>

<style>
  :global(body) {
    background-color: #0C0404;
    color: white;
  }
</style>