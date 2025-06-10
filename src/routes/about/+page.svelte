<script lang="ts">
  import { IconMail, IconPhone, IconMapPin } from '@tabler/icons-svelte';
  import { IconBrandLinkedin, IconBrandInstagram, IconStars, IconScissors, IconTie } from '@tabler/icons-svelte';
  import { fade, fly, scale } from 'svelte/transition';
  import { onMount } from 'svelte';
  import Breadcrumb from "$lib/component/Breadcrumb.svelte";

  let founder = {
    name: "Sujeeth Marc",
    title: "Founder & Master Designer",
    bio: "A mechanical engineer and MBA graduate in HR, Sujeeth Marc followed his passion for fashion by transitioning into luxury tailoring. Since 2017, he has been crafting bespoke experiences through private appointments, culminating in the establishment of The Wilson's at Park Hyatt, Hyderabad - a 600 square foot atelier that embodies his vision of personalized luxury.",
    email: "sujeeth.marc@thewilsonsbespoke.com",
    phone: "+91 89781 59977",
    address: "Park Hyatt, Banjara Hills, Hyderabad, India",
    achievements: [
      "Expertise in luxury retail segment",
      "Personal styling and bespoke consultations",
      "Partnerships with premium fabric houses worldwide"
    ]
  };

  let visible = false;
  onMount(() => {
    visible = true;
  });

  const values = [
    {
      icon: IconTie,
      title: "Artisanal Excellence",
      description: "Every garment is meticulously crafted by hand, embodying generations of tailoring expertise."
    },
    {
      icon: IconScissors,
      title: "Personalized Service",
      description: "We provide an intimate, one-on-one experience tailored to your unique style preferences."
    },
    {
      icon: IconStars,
      title: "Timeless Quality",
      description: "Using only the finest materials, we create garments that stand the test of time."
    }
  ];

  const breadcrumbSegments = [
    { name: "About", href: "/about" }
  ];
</script>

<svelte:head>
    <title>About Us - The Wilson's Bespoke</title>
    <meta name="description" content="Discover the story behind The Wilson's Bespoke, our commitment to excellence in tailoring, and our founder's vision for redefining luxury menswear." />
</svelte:head>

<main class="min-h-screen bg-black text-white">
  <!-- Hero Section -->
  <div class="relative h-[70vh] md:h-[90vh] flex items-center justify-center">
    <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>
    <img 
      src="https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/inner-img-14.jpg"
      alt="About The Wilson's Bespoke" 
      class="absolute inset-0 w-full h-full object-cover"
    />
    <div class="relative z-20 text-center px-4 max-w-5xl mx-auto">
      {#if visible}
        <h1 
          class="text-4xl md:text-7xl font-light tracking-wider mb-8"
          in:fly={{ y: 50, duration: 1000 }}
        >
          Crafting <span class="text-amber-400">Legacy</span>
        </h1>
        <p 
          class="max-w-2xl mx-auto text-lg md:text-2xl text-white/90 font-light leading-relaxed"
          in:fade={{ duration: 1000, delay: 500 }}
        >
          A journey of passion, precision, and unparalleled craftsmanship in bespoke tailoring.
        </p>
      {/if}
    </div>
  </div>

  <!-- Our Story Section -->
  <section id="our-story" class="w-full py-24 px-8 md:px-16 lg:px-24">
    {#if visible}
      <h2 in:fly={{y: 50, duration: 1000, delay: 300}} class="text-4xl md:text-5xl lg:text-6xl uppercase mb-16 text-center tracking-wider">Our Story</h2>
    {/if}
    <div class="max-w-4xl mx-auto text-justify text-lg leading-relaxed space-y-8">
      {#if visible}
        <p in:fade={{duration: 1000, delay: 600}}>
          At <span class="italic text-amber-400">The Wilson's</span>, each garment is more than just a piece of clothing — it's a work of art, meticulously crafted to perfection. From selecting the finest fabrics sourced from renowned mills to hand-stitching every seam with precision and care, our artisans pour their expertise and passion into every stitch, ensuring that each creation embodies the highest standards of quality and refinement.
        </p>
        <p in:fade={{duration: 1000, delay: 900}}>
          Over the years, <span class="italic text-amber-400">The Wilson's</span> has become synonymous with unparalleled craftsmanship and uncompromising quality. Our commitment to perfection extends beyond the finished product to the entire customer experience, where personalized service and attention to detail are paramount. From innovative fabric blends to modern interpretations of timeless designs, we strive to push the boundaries of sartorial elegance.
        </p>
        <p in:fade={{duration: 1000, delay: 1200}}>
          At the heart of <span class="italic text-amber-400">The Wilson's</span> philosophy lies the belief that true style is a reflection of individuality. Whether it's a bespoke suit tailored to perfection or a statement accessory that adds a touch of personality, each piece is designed to empower our clientele to express their unique sense of style with confidence and grace.
        </p>
        <p in:fade={{duration: 1000, delay: 1500}}>
          With a legacy built on timeless elegance and a vision that looks towards the future, we invite you to join us in celebrating the art of sartorial craftsmanship and the enduring power of style.
        </p>
      {/if}
    </div>
  </section>

  <!-- Founder Section -->
  <section class="relative py-32 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-black/50 to-black"></div>
    <div class="max-w-7xl mx-auto px-4 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {#if visible}
          <div 
            class="relative group"
            in:fly={{x: -50, duration: 1000, delay: 300}}
          >
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img 
              src="https://th-i.thgim.com/public/life-and-style/fashion/kt4qbg/article29449698.ece/alternates/FREE_1200/hym19Mallik-Wilson-2" 
              alt={founder.name} 
              class="w-full rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-700"
            >
          </div>
          <div 
            class="space-y-8"
            in:fly={{x: 50, duration: 1000, delay: 600}}
          >
            <div>
              <h2 class="text-4xl font-light mb-4">{founder.name}</h2>
              <p class="text-xl text-amber-400">{founder.title}</p>
            </div>
            <p class="text-white/80 text-lg leading-relaxed">{founder.bio}</p>
            
            <div class="space-y-6 border-t border-white/10 pt-6">
              {#each founder.achievements as achievement}
                <div class="flex items-center gap-3">
                  <span class="w-2 h-2 rounded-full bg-amber-400"></span>
                  <p class="text-white/70">{achievement}</p>
                </div>
              {/each}
            </div>

            <div class="space-y-4 pt-6">
              <a 
                href={`mailto:${founder.email}`} 
                class="flex items-center gap-3 text-white/80 hover:text-amber-400 transition-colors duration-300"
              >
                <IconMail class="text-amber-400" />
                <span>{founder.email}</span>
              </a>
              <a 
                href={`tel:${founder.phone}`} 
                class="flex items-center gap-3 text-white/80 hover:text-amber-400 transition-colors duration-300"
              >
                <IconPhone class="text-amber-400" />
                <span>{founder.phone}</span>
              </a>
              <div class="flex items-start gap-3 text-white/80">
                <IconMapPin class="text-amber-400 flex-shrink-0 mt-1" />
                <span>{founder.address}</span>
              </div>
            </div>

            <div class="flex gap-4 pt-6">
              <a 
                href="#" 
                class="p-3 bg-white/5 rounded-full hover:bg-amber-400/10 transition-colors duration-300"
              >
                <IconBrandLinkedin class="w-6 h-6 text-amber-400" />
              </a>
              <a 
                href="#" 
                class="p-3 bg-white/5 rounded-full hover:bg-amber-400/10 transition-colors duration-300"
              >
                <IconBrandInstagram class="w-6 h-6 text-amber-400" />
              </a>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </section>

  <!-- Values Section -->
  <section class="py-32 bg-white/5">
    <div class="max-w-7xl mx-auto px-4">
      {#if visible}
        <h2 
          class="text-4xl md:text-5xl font-light text-center mb-24"
          in:fly={{y: 50, duration: 1000}}
        >
          Our <span class="text-amber-400">Values</span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          {#each values as value, i}
            <div 
              class="text-center space-y-6 p-8 border border-white/10 rounded-lg hover:border-amber-400/20 transition-all duration-500 group"
              in:fade={{ duration: 800, delay: i * 200 }}
            >
              <div class="text-amber-400 flex justify-center">
                <svelte:component this={value.icon} size={48} />
              </div>
              <h3 class="text-2xl font-light group-hover:text-amber-400 transition-colors duration-300">{value.title}</h3>
              <p class="text-white/70 leading-relaxed">{value.description}</p>
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </section>

  <!-- Call to Action -->
  <section class="py-32">
    <div class="max-w-4xl mx-auto px-4 text-center">
      {#if visible}
        <h2 
          class="text-4xl md:text-5xl font-light mb-8"
          in:fly={{y: 50, duration: 1000}}
        >
          Experience the <span class="text-amber-400">Difference</span>
        </h2>
        <p 
          class="text-white/80 text-lg mb-12 leading-relaxed"
          in:fade={{duration: 1000, delay: 300}}
        >
          Begin your journey into the world of bespoke tailoring. Schedule a consultation with our master craftsmen and discover the perfect fit.
        </p>
        <a 
          href="/contact"
          class="inline-block px-12 py-4 border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-500 text-lg"
        >
          Book Consultation
        </a>
      {/if}
    </div>
  </section>
</main>

<style>
  :global(body) {
    background-color: black;
  }

  /* Smooth scroll behavior */
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
