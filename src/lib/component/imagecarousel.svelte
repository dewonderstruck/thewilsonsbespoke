<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import { IconChevronRight, IconChevronLeft } from '@tabler/icons-svelte';
    
    export let slides = [
      {
            image: 'https://mohair.qodeinteractive.com/wp-content/uploads/2023/05/H1-rev-img-2.jpg',
            title: 'Bespoke Tailoring at Its Finest',
            subtitle: 'Every garment is a masterpiece, tailored to perfection for the discerning individual.',
        },
        {
            image: 'https://mohair.qodeinteractive.com/wp-content/uploads/2023/05/H1-rev-img-2.jpg',
            title: 'Elevate Your Style',
            subtitle: 'Discover modern interpretations of timeless elegance, tailored just for you.',
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
      // Add auto-play functionality
      const interval = setInterval(next, 5000); // Auto-advance every 5 seconds
      return () => clearInterval(interval);
    });
</script>

<div class="relative w-full h-screen overflow-hidden">
  <div class="absolute inset-0 bg-cover bg-center flex items-center justify-center text-white text-center" style="background-image: url({slides[currentIndex].image})" transition:fade>
    <div class="max-w-lg md:max-w-4xl px-4">
      <h2 class="text-4xl md:text-6xl mb-4">{slides[currentIndex].title}</h2>
      <p class="text-base md:text-lg mb-8">{slides[currentIndex].subtitle}</p>
    </div>
  </div>
</div>