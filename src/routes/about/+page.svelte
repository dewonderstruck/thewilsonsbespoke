<script>
  import { IconMail, IconPhone, IconMapPin } from '@tabler/icons-svelte';
  import { IconBrandLinkedin, IconBrandInstagram } from '@tabler/icons-svelte';
  import CTAButton from '$lib/component/CTAButton.svelte';
  import { fade, fly, scale } from 'svelte/transition';
  import { onMount } from 'svelte';

  let founder = {
    name: "Sujeeth Marc",
    title: "Founder",
    bio: "Sujeeth Marc, a visionary in bespoke fashion, transitioned from mechanical engineering to haute couture, driven by an unwavering passion for sartorial excellence. Since 2017, he has been the creative force behind T. Wilson's Bespoke, crafting exquisite, personalized garments for discerning clientele.",
    email: "sujeeth.marc@twilsonsbespoke.com",
    phone: "+91 98765 43210",
    address: "10 Sravanthi Nagar, ICRISAT Colony, Jubilee Hills, Hyderabad, India"
  };

  let visible = false;
  onMount(() => {
    visible = true;
  });
</script>

<main class="flex flex-col items-center min-h-screen bg-[#0C0404] text-white">
  <div class="relative w-full h-[61.8vh] bg-cover bg-center flex items-center justify-center" style="background-image: url('https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/inner-img-14.jpg');">
    <div class="absolute inset-0 bg-opacity-50 flex items-center justify-center"></div>
    <div class="absolute inset-0 top-40 flex flex-col items-center justify-center">
      {#if visible}
        <h1 class="text-5xl md:text-6xl lg:text-7xl uppercase tracking-widest text-center mb-4">About</h1>
        <p class="text-xl mt-2 md:text-xl lg:text-2xl text-center font-light">Our Journey in Bespoke Tailoring</p>
      {/if}
    </div>
  </div>

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

  <section id="founder" class="w-full py-24 bg-[#0d0d0d]">
    <div class="container mx-auto px-8 md:px-16 lg:px-24">
      <div class="flex flex-col md:flex-row items-center justify-between">
        {#if visible}
          <div in:fly={{x: -50, duration: 1000, delay: 300}} class="w-full md:w-1/2 mb-12 md:mb-0">
            <img src="https://th-i.thgim.com/public/life-and-style/fashion/kt4qbg/article29449698.ece/alternates/FREE_1200/hym19Mallik-Wilson-2" alt={founder.name} class="w-full h-auto object-cover">
          </div>
          <div in:fly={{x: 50, duration: 1000, delay: 600}} class="w-full md:w-1/2 md:pl-16">
            <h2 class="text-5xl uppercase mb-6">{founder.name}</h2>
            <p class="text-2xl italic text-amber-400 mb-8">{founder.title}</p>
            <p class="text-xl leading-relaxed mb-12">{founder.bio}</p>
            <div class="space-y-4 text-lg">
              <div class="flex items-center">
                <IconMail class="mr-4 text-amber-400" /><span>{founder.email}</span>
              </div>
              <div class="flex items-center">
                <IconPhone class="mr-4 text-amber-400" /><span>{founder.phone}</span>
              </div>
              <div class="flex items-center">
                <IconMapPin class="mr-4 text-amber-400" /><span>{founder.address}</span>
              </div>
            </div>
            <div class="mt-12 flex space-x-6">
              <a href="#" class="text-amber-400 hover:text-white transition-colors">
                <IconBrandLinkedin size={32} />
              </a>
              <a href="#" class="text-amber-400 hover:text-white transition-colors">
                <IconBrandInstagram size={32} />
              </a>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </section>

  <section id="commitment" class="w-full py-24 bg-[#0C0404]">
    <div class="container mx-auto px-8 md:px-16 lg:px-24">
      {#if visible}
        <h2 in:fly={{y: 50, duration: 1000, delay: 300}} class="text-4xl md:text-5xl lg:text-5xl uppercase mb-16 text-center tracking-wider">Our Commitment <br> to Excellence</h2>
        <p in:fade={{duration: 1000, delay: 600}} class="text-xl text-center max-w-4xl mx-auto leading-relaxed mb-16">
          At The Wilson's Bespoke, we are dedicated to the art of fine tailoring and the pursuit of sartorial perfection. 
          Each garment is a testament to our commitment to quality, craftsmanship, and personalized service. 
          We invite you to experience the luxury of truly bespoke clothing, where every stitch tells a story of elegance and individuality.
        </p>
        <div in:scale={{duration: 500, delay: 900}} class="text-center">
          <CTAButton text="Book an Appointment" href="/contact" />
        </div>
      {/if}
    </div>
  </section>
</main>

<style>
  :global(body) {
    background-color: #0C0404;
    color: white;
  }

  .container {
    max-width: 1200px;
  }

  #our-story, #commitment {
    background-color: #0C0404;
  }

  #founder {
    background-color: #0d0d0d;
  }

  /* Add smooth transitions for hover effects */
  a, button {
    transition: all 0.3s ease;
  }

  /* Add a subtle hover effect to images */
  img {
    transition: transform 0.3s ease;
  }

  img:hover {
    transform: scale(1.05);
  }
</style>
