<script lang="ts">
    import { onMount } from 'svelte';
    import designSketches from '$lib/assets/main-home-img-5.jpg';
    import handmade from '$lib/assets/main-home-img-2.jpg';
    import singerMachine from '$lib/assets/main-home-img-2.jpg';
    import bodyMeasure from '$lib/assets/main-home-img-2.jpg';
    import { IconScissors } from '@tabler/icons-svelte';
    let currentSlide = 0;
    const slides = [
      { image: designSketches, title: 'Design Sketches', subtitle: 'Design' },
      { image: handmade, title: 'Handmade', subtitle: 'Handmade' },
      { image: singerMachine, title: 'Singer Machine', subtitle: 'Custom Tailored' },
      { image: bodyMeasure, title: 'Body Measure', subtitle: 'Custom Tailored' },
    ];
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    }
  
    function setSlide(index: number) {
      currentSlide = index;
    }
  
    onMount(() => {
      const interval = setInterval(nextSlide, 5000); // Auto-advance every 5 seconds
      return () => clearInterval(interval);
    });
  </script>
  
  <section class="py-24 bg-black/80">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row">
        <div class="md:w-1/2 mb-8 md:mb-0">
          <h2 class="text-4xl font-serif mb-4 text-white">Individuality of your design.</h2>
          <h2 class="text-4xl font-serif mb-4 text-white">Create your style.</h2>
          <p class="text-gray-400 italic mb-8">High Quality Tailor</p>
        </div>
        <div class="md:w-1/2">
          <p class="text-gray-300">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
            iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas
          </p>
        </div>
      </div>
    </div>
  </section>
  
  <style>
    /* Add any additional styles here */
    @import url('https://fonts.googleapis.com/css2?family=Marcellus&display=swap');
  
    :global(body) {
      font-family: 'Manrope', sans-serif;
    }
  
    h2 {
      font-family: 'Marcellus', serif;
    }

  </style>