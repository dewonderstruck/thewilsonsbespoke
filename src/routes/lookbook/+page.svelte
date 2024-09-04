<script>
  const collections = [
    { name: 'Spring', 
    description: 'Spring Collection',
    color: 'yellow-300'},
    { name: 'Summer', 
    description: 'Spring Collection',
    color: 'yellow-300' },
    { name: 'Fall', 
    description: 'Spring Collection',
    color: 'yellow-300' },
    { name: 'Winter', 
    description: 'Spring Collection',
    color: 'yellow-300' }
  ];
</script>

<div class="flex manrope flex-col bg-black items-center min-h-screen w-screen">
  <div class="relative bg-black w-full h-48"></div>
  <div class="flex flex-col md:flex-row bg-black min-h-screen w-screen px-8">
    {#each collections as { name, color, description }}
      <section class="md:w-1/4 flex p-4 md:p-2 items-center justify-center group">
        <div class="w-full py-12 md:py-24 h-full bg-{color} relative overflow-hidden flex items-center justify-center transition-transform duration-300 ease-in-out transform group-hover:scale-105 md:group-hover:scale-100">
          <div class="container mx-auto px-4 relative">
            <div class="max-w-2xl mx-auto">
              <h1 class="font-heading font-bold text-4xl xs:text-5xl sm:text-8xl lg:text-10xl mb-12 md:mb-16 transition-colors duration-300 group-hover:text-white">
                <span class="block">{name}</span>
                <span>24</span>
              </h1>
              <div class="max-w-lg mx-auto">
                <p class="text-xl font-medium mb-5 transition-opacity duration-300 group-hover:opacity-80 group-hover:text-white">{description}</p>
                <a class="group inline-flex items-center text-2xl font-bold transition-all duration-300 hover:text-white" href="#">
                  <span class="mr-3">Explore Collections</span>
                  <span class="animate-bounce transition-transform duration-300 group-hover:translate-x-1">
                    <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.95669 1.75742L9.55635 1.75742M9.55635 1.75742L9.55635 8.35709M9.55635 1.75742L1.07107 10.2427" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    {/each}
  </div>

  <!-- Archived List Links -->
   <div class="flex flex-col justify-center w-full items-start text-white px-10 mt-8">
    <a href="/lookbook/spring-24" class="hover:translate-x-2 transition-transform duration-300 flex items-center">
      <svg class="mr-2 opacity-70 text-white group-hover:opacity-100 transition-opacity duration-300" width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.95669 1.75742L9.55635 1.75742M9.55635 1.75742L9.55635 8.35709M9.55635 1.75742L1.07107 10.2427" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
      Spring 23 (ARHD)
    </a>
    <a href="/lookbook/summer-24" class="hover:translate-x-2 transition-transform duration-300 flex items-center">
      <svg class="mr-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300" width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.95669 1.75742L9.55635 1.75742M9.55635 1.75742L9.55635 8.35709M9.55635 1.75742L1.07107 10.2427" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
      Summer 23 (ARHD)
    </a>
    <a href="/lookbook/fall-24" class="hover:translate-x-2 transition-transform duration-300 flex items-center">
      <svg class="mr-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300" width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.95669 1.75742L9.55635 1.75742M9.55635 1.75742L9.55635 8.35709M9.55635 1.75742L1.07107 10.2427" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
      Fall 23 (ARHD)
    </a>
    <a href="/lookbook/winter-24" class="hover:translate-x-2 transition-transform duration-300 flex items-center">
      <svg class="mr-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300" width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.95669 1.75742L9.55635 1.75742M9.55635 1.75742L9.55635 8.35709M9.55635 1.75742L1.07107 10.2427" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
      Winter 23 (ARHD)
    </a>
   </div>
</div>

<style>
  /* Optional: Add a subtle gradient overlay on hover */
  .group:hover .bg-yellow-300::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(0,0,0,0.1), rgba(255,255,255,0.1));
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .group:hover .bg-yellow-300::before {
    opacity: 1;
  }
</style>