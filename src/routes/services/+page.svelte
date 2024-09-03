<script>
    import { IconMail, IconPhone, IconMapPin } from '@tabler/icons-svelte';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    export let slides = [
        {
            image: 'https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/inner-img-14.jpg',
            title: 'Services',
            subtitle: 'Please read these terms and conditions carefully before using our services...',
        },
    ];

    let currentIndex = 0;
    let path;
    let breadcrumbs = [];

    // Use onMount to ensure we have access to $page.url.pathname
    onMount(() => {
        path = $page.url.pathname;
        breadcrumbs = path.split('/').filter(Boolean);
    });
</script>

<div id="services" class="flex manrope flex-col items-center min-h-screen bg-[#0d0d0d] text-white text-center">
    <!-- Fixed height for the image section -->
    <div class="relative w-full h-[61.8vh]">
        <img
            src="{slides[currentIndex].image}"
            alt="bg"
            class="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
        />
        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        </div>
        <div class="absolute inset-0 flex items-center top-1/3 justify-center">
            <div class="flex flex-col items-center justify-center">
                <h1 class="text-7xl uppercase mb-6 cormorant-garamond text-white tracking-wider">{slides[currentIndex].title}</h1>
                <ol class="flex items-center cormorant-garamond  whitespace-nowrap">
                    <li class="inline-flex items-center">
                        <a class="flex items-center text-base text-gray-300 hover:underline focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500" href="/">
                            Home
                        </a>
                        {#if breadcrumbs.length > 0}
                            <svg class="shrink-0 size-5 text-gray-200 mx-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M6 13L10 3" stroke="currentColor" stroke-linecap="round"></path>
                            </svg>
                        {/if}
                    </li>
                    {#each breadcrumbs as crumb, index}
                        <li class="inline-flex items-center">
                            <a class="flex items-center text-base text-gray-400 hover:underline focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500" href={'/' + breadcrumbs.slice(0, index + 1).join('/')}>
                                {crumb.charAt(0).toUpperCase() + crumb.slice(1)}
                            </a>
                            {#if index < breadcrumbs.length - 1}
                                <svg class="shrink-0 size-5 text-gray-300 mx-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M6 13L10 3" stroke="currentColor" stroke-linecap="round"></path>
                                </svg>
                            {/if}
                        </li>
                    {/each}
                </ol>
            </div>
        </div>
    </div>

    <section class="py-24 bg-black/80">
        <div class="container mx-auto px-4 gap-8">
          <div class="flex flex-col md:flex-row mb-16">
            <div class="md:w-1/2 mb-8 md:mb-0">
              <h2 class="text-4xl font-serif mb-4 text-white">Our Services What We Offer</h2>
              <p class="text-gray-400 italic mb-8">
                Discover the range of bespoke services we provide to help you make the perfect choices.
              </p>
            </div>
            <div class="md:w-1/2">
              <p class="text-gray-300">
                From bespoke suits crafted to your exact measurements to canvas suits that combine comfort and elegance, 
                we offer a variety of services tailored to meet your sartorial needs. Explore our collection of finely made accessories 
                to complement your wardrobe. Let us help you elevate your style with personalized service and expert craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>         
</div>


<style>
    #services {
        font-family: 'Manrope', sans-serif;
    }
</style>
