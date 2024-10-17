<script>
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import CTAButton from '$lib/component/CTAButton.svelte';

  let visible = false;
  onMount(() => {
    visible = true;
  });

  const summerCategories = [
    {
      name: 'Linen Essentials',
      description: 'Breathable and elegant linen pieces for effortless summer style.',
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80'
    },
    {
      name: 'Seersucker Classics',
      description: 'Timeless seersucker designs reimagined for the modern gentleman.',
      image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80'
    },
    {
      name: 'Tropical Wool Collection',
      description: 'Lightweight wool pieces that combine comfort with refined structure.',
      image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80'
    },
    {
      name: 'Evening Sophistication',
      description: 'Elegant ensembles for summer soirées and special occasions.',
      image: 'https://images.unsplash.com/photo-1594938374182-a57061dac3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80'
    }
  ];
</script>

<div class="flex manrope flex-col bg-[#0C0404] items-center min-h-screen w-screen text-white">
  <div class="relative w-full h-[50vh] bg-cover bg-black bg-center flex items-center justify-center">
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    <h1 class="relative top-40 text-4xl md:text-6xl lg:text-7xl uppercase tracking-widest text-center">Summer Collection</h1>
  </div>
  
  <div class="max-w-7xl mx-auto px-4 py-16">
    {#if visible}
      <p in:fade={{duration: 1000, delay: 300}} class="text-lg text-center mb-12 max-w-3xl mx-auto">
        Discover our curated summer collection, where timeless elegance meets seasonal comfort. Each category showcases the pinnacle of bespoke craftsmanship for the discerning gentleman.
      </p>
    {/if}

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      {#each summerCategories as category, index}
        {#if visible}
          <div in:fly={{y: 50, duration: 1000, delay: 300 * (index + 1)}} class="group relative overflow-hidden">
            <img src={category.image} alt={category.name} class="w-full h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"/>
            <div class="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-60 flex flex-col justify-end p-6">
              <h2 class="text-3xl font-bold mb-2">{category.name}</h2>
              <p class="text-gray-200 mb-4">{category.description}</p>
              <!-- <a class="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-amber-400" href={`/lookbook/summer/${category.name.toLowerCase().replace(/\s+/g, '-')}-23`} >
                View Collection</a> -->
            </div>
          </div>
        {/if}
      {/each}
    </div>

    {#if visible}
      <div in:fade={{duration: 1000, delay: 1500}} class="mt-16 text-center">
        <h2 class="text-3xl mb-6">Elevate Your Summer Wardrobe</h2>
        <p class="mb-8">Experience the art of bespoke tailoring and create your perfect summer ensemble.</p>
        <CTAButton text="Book a Consultation" href="/contact" />
      </div>
    {/if}
  </div>
</div>

<style>
  :global(body) {
    background-color: #0C0404;
    color: white;
  }
</style>
