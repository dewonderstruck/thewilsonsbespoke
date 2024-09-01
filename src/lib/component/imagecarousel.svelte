<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import { IconChevronRight, IconChevronLeft } from '@tabler/icons-svelte';
    
    export let slides = [
      {
        image: 'https://mohair.qodeinteractive.com/wp-content/uploads/2023/05/H1-rev-img-2.jpg',
        title: 'The Wilson\'s Bespoke has over 40 years of experience.',
        subtitle: 'At vero et justoprovident, similique sunt in culpa mi quis hendrerit...',
      },
      // Add more slides here
    ];
  
    let currentIndex = 0;
  
    function next() {
      currentIndex = (currentIndex + 1) % slides.length;
    }
  
    function prev() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    }
  
    onMount(() => {
      // Add auto-play functionality if needed
    });
</script>

<div class="relative w-full h-screen overflow-hidden">
  <div class="absolute inset-0 bg-cover bg-center flex items-center justify-center text-white text-center" style="background-image: url({slides[currentIndex].image})" transition:fade>
    <div class="max-w-4xl">
      <h2 class="text-6xl mb-4">{slides[currentIndex].title}</h2>
      <p class="text-lg mb-8">{slides[currentIndex].subtitle}</p>
      <button class="px-4 py-2 border border-white text-white">DISCOVER</button>
    </div>
  </div>
  
  <button class="absolute top-1/2 transform -translate-y-1/2 left-4 text-white" on:click={prev}>
    <IconChevronLeft size={32} />
  </button>
  <button class="absolute top-1/2 transform -translate-y-1/2 right-4 text-white" on:click={next}>
    <IconChevronRight size={32} />
  </button>
  
  <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
    {#each slides as _, i}
      <button type="button" class="w-2.5 h-2.5 rounded-full bg-white bg-opacity-50" class:opacity-100={i === currentIndex} on:click={() => currentIndex = i}></button>
    {/each}
  </div>
</div>