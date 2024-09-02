<script>
    import { IconMail, IconPhone, IconMapPin } from '@tabler/icons-svelte'
    export let slides = [
      {
        image: 'https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/inner-img-3.jpg',
        title: 'Contact',
        subtitle: 'Please read these terms and conditions carefully before using our services...',
      },
    ];
    let currentIndex = 0;

    import { enhance } from '$app/forms';

  let formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  function handleSubmit(event) {
    // Prevent default form submission
    event.preventDefault();
    
    // Handle form submission logic here
    console.log(formData);
  }
</script>

<main class="flex flex-col items-center min-h-screen bg-[#0d0d0d] text-white text-center">
    <!-- Fixed height for the image section -->
    <div class="relative w-full h-[61.8vh]">
      <img
        src="{slides[currentIndex].image}"
        alt="bg"
        class="h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>

    <section class="py-24 bg-black/80">
        <div class="container mx-auto px-4 gap-8">
          <div class="flex flex-col md:flex-row mb-16">
            <div class="md:w-1/2 mb-8 md:mb-0">
              <h2 class="text-4xl font-serif mb-4 text-white">Get in Touch with Us</h2>
              <h2 class="text-4xl font-serif mb-4 text-white">We'd Love to Hear from You</h2>
              <p class="text-gray-400 italic mb-8">Contact Us for Any Queries</p>
            </div>
            <div class="md:w-1/2">
              <p class="text-gray-300">
                If you have any questions, comments, or concerns, please feel free to reach out to us. 
                Our team is here to assist you and provide the information you need. 
                We value your feedback and look forward to connecting with you.
              </p>
            </div>
          </div>

          <div class="flex flex-col md:flex-row h-full bg-[#0d0d0d] text-white">
            <div class="w-full md:w-1/2 bg-cover bg-center h-64 md:h-auto" style="background-image: url('https://www.edwardsexton.co.uk/cdn/shop/files/Shop_front_1512x.jpg?v=1664188724');">
                <!-- You'll need to replace the URL with an actual image of a tailor working on a suit -->
              </div>
            <div class="w-full md:w-1/2 p-8 md:p-24 ml-0 md:ml-16 flex flex-col justify-center">
              <h1 class="text-3xl md:text-5xl font-bold mb-4 text-start max-w-2xl leading-normal">
                Visit Us
              </h1>
              <p class="text-lg md:text-xl mb-4 text-start italic text-gray-400">Experience Our Craftsmanship</p>
              <p class="mb-8 text-gray-200 text-start max-w-xl">
                Step into our atelier to witness our artisans at work and explore our exquisite fabrics. 
                Whether you're ready for a fitting or simply curious about our process, we welcome you to 
                visit us and discover the art of bespoke tailoring firsthand.
              </p>
              <!-- Get Directions Button -->
              <button class="w-full md:w-52 bg-[#f4c430] text-black px-4 py-2 font-bold">Get Directions</button>
            </div>
          </div>

          <!-- Email, Phone, Address Icons with Information horizontally -->
          <div class="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 py-12 mt-8">
            <div class="flex flex-col items-center mb-8 md:mb-0">
              <svelte:component this={IconMail} class="mb-4 rounded-full bg-[#f4c430]/70 p-3" size={64} />
              <p class="text-lg font-medium text-center">info@example.com</p>
            </div>
            <div class="flex flex-col items-center mb-8 md:mb-0">
              <svelte:component this={IconPhone} class="mb-4 rounded-full bg-[#f4c430]/70 p-3" size={64} />
              <p class="text-lg font-medium text-center">+1 (555) 123-4567</p>
            </div>
            <div class="flex flex-col items-center">
              <svelte:component this={IconMapPin} class="mb-4 rounded-full bg-[#f4c430]/70 p-3" size={64} />
              <p class="text-lg font-medium text-center">1234 Main St, Anytown, USA</p>
            </div>
          </div>
        </div>
      </section>
      
  </main>

<style>
.fix-height {
    height: 50rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}

.fix-text {
    position: relative;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
}

</style>