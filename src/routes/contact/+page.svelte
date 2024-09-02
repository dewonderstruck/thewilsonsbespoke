<script>
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

          <div class="flex flex-col md:flex-row h-full bg-[#0d0d0d] text-white">
            <div class="w-full md:w-1/2 bg-cover bg-center h-64 md:h-auto" style="background-image: url('https://www.edwardsexton.co.uk/cdn/shop/files/Shop_front_1512x.jpg?v=1664188724');">
                <!-- You'll need to replace the URL with an actual image of a tailor working on a suit -->
              </div>
            <div class="w-full md:w-1/2 p-8 md:p-24 ml-0 md:ml-16 flex flex-col justify-center">
              <h1 class="text-3xl md:text-5xl font-bold mb-4 text-start max-w-2xl leading-normal">Exquisite Designs Crafted by Experts</h1>
              <p class="text-lg md:text-xl mb-4 text-start italic text-gray-400">High Quality</p>
              <p class="mb-8 text-gray-200 text-start max-w-xl">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti cupiditate non provident, similique sunt in culpa...
              </p>
              <!-- Get Directions Button -->
              <button class="w-full md:w-52 bg-[#f4c430] text-black px-4 py-2 font-bold">Get Directions</button>
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