<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { IconStar, IconStarFilled, IconZoomIn, IconRuler, IconChevronRight, IconZoomOut, IconX } from '@tabler/icons-svelte';

  let visible = false;
  let selectedCategory = 'all';
  let zoomedImage: string | null = null;
  let zoomLevel = 1;
  let zoomPosition = { x: 0, y: 0 };
  let isZooming = false;
  let zoomedImageElement: HTMLImageElement;
  let showSizeGuide = false;
  let mainImage: string;
  let hoverActive = false;
  let zoomContainer: HTMLElement;
  let zoomLens: HTMLElement;
  let zoomResult: HTMLElement;
  let cx: number;
  let cy: number;

  onMount(() => {
    visible = true;
    mainImage = featuredProduct.images[0];
    
    // Initialize zoom when elements are ready
    initializeZoom();
  });

  function initializeZoom() {
    if (zoomContainer && zoomLens && zoomResult) {
      // Calculate the ratio between result and lens
      cx = 3; // Fixed zoom ratio for better control
      cy = 3;
      
      // Set initial background properties
      updateZoomView();
    }
  }

  function updateZoomView() {
    if (!zoomResult || !mainImage) return;
    
    zoomResult.style.backgroundImage = `url('${mainImage}')`;
    zoomResult.style.backgroundSize = `${zoomContainer.offsetWidth * cx}px ${zoomContainer.offsetHeight * cy}px`;
  }

  function handleImageSelect(image: string) {
    mainImage = image;
    updateZoomView();
  }

  function moveLens(e: MouseEvent) {
    if (!zoomContainer || !zoomLens || !zoomResult || !hoverActive) return;
    
    e.preventDefault();
    
    // Get cursor position
    const pos = getCursorPos(e);
    
    // Calculate lens position
    let x = pos.x - (zoomLens.offsetWidth / 2);
    let y = pos.y - (zoomLens.offsetHeight / 2);
    
    // Prevent lens from going outside image
    x = Math.max(0, Math.min(x, zoomContainer.offsetWidth - zoomLens.offsetWidth));
    y = Math.max(0, Math.min(y, zoomContainer.offsetHeight - zoomLens.offsetHeight));
    
    // Move lens
    zoomLens.style.left = x + "px";
    zoomLens.style.top = y + "px";
    
    // Calculate and set background position
    const bgPosX = -(x * cx);
    const bgPosY = -(y * cy);
    zoomResult.style.backgroundPosition = `${bgPosX}px ${bgPosY}px`;
  }

  function getCursorPos(e: MouseEvent) {
    const rect = zoomContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    return { x, y };
  }

  function showZoom() {
    hoverActive = true;
    if (zoomLens) {
      zoomLens.style.display = 'block';
      // Center the lens initially
      const x = (zoomContainer.offsetWidth - zoomLens.offsetWidth) / 2;
      const y = (zoomContainer.offsetHeight - zoomLens.offsetHeight) / 2;
      zoomLens.style.left = x + "px";
      zoomLens.style.top = y + "px";
    }
    if (zoomResult) {
      zoomResult.style.display = 'block';
      updateZoomView();
      // Center the initial zoom view
      zoomResult.style.backgroundPosition = `-${(zoomContainer.offsetWidth - zoomLens.offsetWidth) / 2 * cx}px -${(zoomContainer.offsetHeight - zoomLens.offsetHeight) / 2 * cy}px`;
    }
  }

  function hideZoom() {
    hoverActive = false;
    if (zoomLens) zoomLens.style.display = 'none';
    if (zoomResult) zoomResult.style.display = 'none';
  }

  interface Collection {
    name: string;
    description: string;
    image: string;
    category: string;
  }

  interface Product {
    id: string;
    name: string;
    description: string;
    collection: string;
    category: string;
    gender: 'men' | 'women';
    occasion: string;
    style: string;
    price: string;
    images: string[];
    materials: string[];
    features: string[];
    careInstructions: string[];
    reviews: Review[];
    rating: number;
    sizes: {
      size: string;
      chest: string;
      waist: string;
      shoulder: string;
      length: string;
      availability: boolean;
    }[];
    sizeGuide: {
      title: string;
      measurements: {
        measurement: string;
        description: string;
        howTo: string;
      }[];
    };
  }

  interface Review {
    author: string;
    date: string;
    rating: number;
    comment: string;
    verified: boolean;
  }

  const collections = [
    { 
      name: 'Wedding & Ceremonies', 
      description: 'Exquisite formal wear for your most special occasions, from wedding suits to ceremonial attire.',
      category: 'formal',
      image: 'https://images.unsplash.com/photo-1600091166971-7f9faad6c1e2?q=80&w=1974&auto=format&fit=crop'
    },
    { 
      name: 'Business & Professional', 
      description: 'Sophisticated suits and separates designed for the modern professional.',
      category: 'business',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop'
    },
    { 
      name: 'Evening & Black Tie', 
      description: 'Refined evening wear and tuxedos for prestigious events and galas.',
      category: 'formal',
      image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1925&auto=format&fit=crop'
    },
    { 
      name: 'Casual Elegance', 
      description: 'Elevated casual wear that combines comfort with sophistication.',
      category: 'casual',
      image: 'https://images.unsplash.com/photo-1610652492500-ded49ceeb378?q=80&w=1974&auto=format&fit=crop'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Collections' },
    { id: 'formal', name: 'Formal Wear' },
    { id: 'business', name: 'Business Attire' },
    { id: 'casual', name: 'Casual Wear' }
  ];

  const featuredProduct: Product = {
    id: 'classic-peak-tuxedo',
    name: 'Classic Peak Lapel Tuxedo',
    description: 'A timeless black tuxedo crafted from the finest Italian wool, featuring hand-stitched peak lapels and mother of pearl buttons.',
    collection: 'Evening & Black Tie',
    category: 'formal',
    gender: 'men',
    occasion: 'Black Tie Events',
    style: 'Classic',
    price: '₹95,000',
    images: [
      'https://images.unsplash.com/photo-1600091166971-7f9faad6c1e2?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1925&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1610652492500-ded49ceeb378?q=80&w=1974&auto=format&fit=crop'
    ],
    materials: [
      'Super 150s Italian Wool',
      'Grosgrain Silk Lapels',
      'Mother of Pearl Buttons',
      'Bemberg Cupro Lining'
    ],
    features: [
      'Hand-stitched peak lapels',
      'Fully canvassed construction',
      'Pick-stitched details',
      'Working buttonholes',
      'Hand-finished edges',
      'Interior pocket system'
    ],
    careInstructions: [
      'Dry clean only',
      'Store on wooden hanger',
      'Use garment bag for storage',
      'Steam press when needed',
      'Avoid direct sunlight',
      'Brush after each wear'
    ],
    reviews: [
      {
        author: 'Rahul M.',
        date: '2024-02-15',
        rating: 5,
        comment: 'Exceptional craftsmanship and attention to detail. The fit is perfect and the fabric quality is outstanding. Worth every rupee.',
        verified: true
      },
      {
        author: 'Aditya S.',
        date: '2024-02-10',
        rating: 5,
        comment: 'The attention to detail is remarkable. The tuxedo fits like a second skin and the fabric is luxurious.',
        verified: true
      },
      {
        author: 'Vikram P.',
        date: '2024-01-28',
        rating: 4,
        comment: 'Beautiful craftsmanship and excellent service. Minor adjustments were needed but handled professionally.',
        verified: true
      }
    ],
    rating: 4.7,
    sizes: [
      {
        size: '36R',
        chest: '36"',
        waist: '30"',
        shoulder: '17.5"',
        length: '29"',
        availability: true
      },
      {
        size: '38R',
        chest: '38"',
        waist: '32"',
        shoulder: '18"',
        length: '29.5"',
        availability: true
      },
      {
        size: '40R',
        chest: '40"',
        waist: '34"',
        shoulder: '18.5"',
        length: '30"',
        availability: true
      },
      {
        size: '42R',
        chest: '42"',
        waist: '36"',
        shoulder: '19"',
        length: '30.5"',
        availability: false
      }
    ],
    sizeGuide: {
      title: 'How to Measure',
      measurements: [
        {
          measurement: 'Chest',
          description: 'Measure around the fullest part of your chest, keeping the tape horizontal.',
          howTo: 'Place the tape measure under your arms and around your chest at its fullest point.'
        },
        {
          measurement: 'Waist',
          description: 'Measure around your natural waistline, keeping the tape comfortably loose.',
          howTo: 'Find your natural waistline by bending to one side. The crease that forms is your natural waist.'
        },
        {
          measurement: 'Shoulder',
          description: 'Measure from shoulder point to shoulder point across your back.',
          howTo: 'Place the tape at the point where your shoulder meets your arm, then measure straight across to the other shoulder.'
        },
        {
          measurement: 'Length',
          description: 'Measure from the base of your neck to your desired jacket length.',
          howTo: 'Start at the base of your neck and measure down to where you want the jacket to end.'
        }
      ]
    }
  };

  function handleZoom(image: string) {
    zoomedImage = image;
    zoomLevel = 2;
    isZooming = true;
    zoomPosition = { x: 0, y: 0 };
  }

  function handleMouseMove(event: MouseEvent) {
    if (!isZooming || !zoomedImageElement) return;
    
    const rect = zoomedImageElement.getBoundingClientRect();
    
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    
    const translateX = -x * (rect.width * (zoomLevel - 1));
    const translateY = -y * (rect.height * (zoomLevel - 1));
    
    zoomPosition = { x: translateX, y: translateY };
  }

  function handleZoomIn() {
    zoomLevel = Math.min(zoomLevel + 0.5, 3);
  }

  function handleZoomOut() {
    zoomLevel = Math.max(zoomLevel - 0.5, 1);
  }

  function closeZoom() {
    zoomedImage = null;
    isZooming = false;
    zoomLevel = 1;
  }

  function handleFullscreen(image: string) {
    // Ensure we have a valid image before opening fullscreen
    if (!image) return;
    
    zoomedImage = image;
    isZooming = true;
    zoomLevel = 2;
    zoomPosition = { x: 0, y: 0 };
    
    // Wait for next tick to ensure DOM update
    setTimeout(() => {
      if (zoomedImageElement) {
        zoomedImageElement.onload = () => {
          // The image is fully loaded now
          zoomedImageElement.style.opacity = '1';
        };
      }
    }, 50);
  }

  $: filteredCollections = selectedCategory === 'all' 
    ? collections 
    : collections.filter(c => c.category === selectedCategory);

  function handleCollectionClick(collectionName: string) {
    const slug = collectionName.toLowerCase().replace(/&amp;|\s+/g, '-');
    window.location.href = `/lookbook/${slug}`;
  }

  function handleImageHover(event: MouseEvent, image: string) {
    // This function is no longer needed - we'll remove it
  }

  function handleImageLeave() {
    // This function is no longer needed - we'll remove it
  }
</script>

<svelte:head>
    <title>Lookbook - The Wilson's Bespoke</title>
    <meta name="description" content="Explore The Wilson's Bespoke collections of handcrafted suits, formal wear, and luxury menswear. Discover our range of bespoke tailoring for every occasion." />
</svelte:head>

<main class="min-h-screen bg-black text-white">
  <!-- Hero Section -->
  <div class="relative h-[70vh] md:h-[90vh] flex items-center justify-center">
    <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>
    <img 
      src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
      alt="Bespoke Tailoring Lookbook" 
      class="absolute inset-0 w-full h-full object-cover"
    />
    <div class="relative z-20 text-center px-4 max-w-5xl mx-auto">
      {#if visible}
        <h1 
          class="text-4xl md:text-7xl font-light tracking-wider mb-8"
          in:fly={{ y: 50, duration: 1000 }}
        >
          Our <span class="text-amber-400">Collections</span>
        </h1>
        <p 
          class="max-w-2xl mx-auto text-lg md:text-2xl text-white/90 font-light leading-relaxed"
          in:fade={{ duration: 1000, delay: 500 }}
        >
          Discover our curated collections of bespoke garments, each piece a testament to timeless elegance and superior craftsmanship.
        </p>
      {/if}
    </div>
  </div>

  <!-- Collections Section -->
  <div class="relative overflow-hidden py-24 md:py-32">
    <div class="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
    <div class="max-w-7xl mx-auto px-4 relative z-10">
      <!-- Category Navigation -->
      <div class="flex flex-wrap justify-center gap-4 mb-16">
        {#each categories as category}
          <button
            class="px-6 py-2 text-sm border {selectedCategory === category.id ? 'bg-amber-400 text-black border-amber-400' : 'border-white/20 hover:border-amber-400/50'} transition-all duration-300"
            on:click={() => selectedCategory = category.id}
          >
            {category.name}
          </button>
        {/each}
      </div>

      <!-- Collections Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {#each filteredCollections as collection, i}
          <div 
            class="group relative overflow-hidden border border-white/10 hover:border-amber-400/50 transition-all duration-700 cursor-pointer"
            on:click={() => handleCollectionClick(collection.name)}
            on:keydown={(e) => e.key === 'Enter' && handleCollectionClick(collection.name)}
            role="button"
            tabindex="0"
            in:fade={{ duration: 800, delay: i * 200 }}
          >
            <div class="relative h-[400px] overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700 z-10"></div>
              <img 
                src={collection.image} 
                alt={collection.name}
                class="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-all duration-700"
              />
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-8 z-20">
              <h3 class="text-2xl font-light mb-3 group-hover:text-amber-400 transition-colors duration-300">
                {collection.name}
              </h3>
              <p class="text-white/70 leading-relaxed mb-4">{collection.description}</p>
              <div class="flex items-center gap-2 text-amber-400/70 group-hover:text-amber-400 transition-colors duration-300">
                <span>Explore Collection</span>
                <span class="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- Featured Product Section -->
  <div class="relative py-24 md:py-32 bg-white/5">
    <div class="absolute inset-0 bg-gradient-to-b from-black/50 to-black/90"></div>
    <div class="max-w-7xl mx-auto px-4 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <!-- Product Images -->
        <div class="space-y-8">
          <div class="relative">
            <!-- Main image container -->
            <div 
              bind:this={zoomContainer}
              class="relative border border-white/10 h-[600px] overflow-hidden"
              on:mousemove={moveLens}
              on:mouseenter={showZoom}
              on:mouseleave={hideZoom}
              on:click={() => handleFullscreen(mainImage)}
              on:keydown={(e) => e.key === 'Enter' && handleFullscreen(mainImage)}
              role="button"
              tabindex="0"
            >
              <!-- Main product image -->
              <img 
                src={mainImage}
                alt={featuredProduct.name}
                class="w-full h-full object-cover cursor-zoom-in"
              />
              
              <!-- Zoom lens -->
              <div 
                bind:this={zoomLens} 
                class="hidden absolute border-2 border-amber-400/50 w-32 h-32 pointer-events-none"
              ></div>
            </div>
            
            <!-- Zoom result -->
            <div 
              bind:this={zoomResult}
              class="hidden fixed top-56 right-96 w-[600px] h-[600px] border border-white/10 bg-black/90 bg-no-repeat z-50 pointer-events-none shadow-xl"
            ></div>
          </div>
          <div class="grid grid-cols-4 gap-4">
            {#each featuredProduct.images as image, i}
              <button
                class="border {mainImage === image ? 'border-amber-400' : 'border-white/10 hover:border-amber-400/50'} transition-all duration-300"
                on:click={() => handleImageSelect(image)}
              >
                <img 
                  src={image} 
                  alt={`${featuredProduct.name} view ${i + 1}`}
                  class="w-full h-24 object-cover"
                />
              </button>
            {/each}
          </div>
        </div>

        <!-- Product Details -->
        <div class="space-y-8">
          <div class="space-y-4">
            <div class="flex flex-wrap gap-4">
              <span class="px-3 py-1 bg-white/5 text-white/70 text-sm">{featuredProduct.gender === 'men' ? 'Men' : 'Women'}</span>
              <span class="px-3 py-1 bg-white/5 text-white/70 text-sm">{featuredProduct.style}</span>
              <span class="px-3 py-1 bg-white/5 text-white/70 text-sm">{featuredProduct.occasion}</span>
            </div>
            <h2 class="text-3xl md:text-4xl font-light">{featuredProduct.name}</h2>
            <p class="text-2xl text-amber-400">{featuredProduct.price}</p>
            <p class="text-white/70 leading-relaxed">{featuredProduct.description}</p>
          </div>

          <!-- Materials & Features -->
          <div class="space-y-6 border-t border-white/10 pt-8">
            <h3 class="text-xl font-light">Materials</h3>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
              {#each featuredProduct.materials as material}
                <li class="flex items-center gap-3 text-white/70">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-400/60"></span>
                  <span>{material}</span>
                </li>
              {/each}
            </ul>
          </div>

          <!-- Features -->
          <div class="space-y-6 border-t border-white/10 pt-8">
            <h3 class="text-xl font-light">Features</h3>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
              {#each featuredProduct.features as feature}
                <li class="flex items-center gap-3 text-white/70">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-400/60"></span>
                  <span>{feature}</span>
                </li>
              {/each}
            </ul>
          </div>

          <!-- Size Selection -->
          <div class="space-y-6 border-t border-white/10 pt-8">
            <h3 class="text-xl font-light">Size</h3>
            <div class="flex flex-wrap gap-4">
              {#each featuredProduct.sizes as size}
                <button 
                  class="px-4 py-2 border {zoomedImage === size.size ? 'border-amber-400 text-amber-400' : 'border-white/20 hover:border-amber-400/50'} transition-all duration-300"
                >
                  {size.size}
                </button>
              {/each}
            </div>
            <button 
              class="text-amber-400 hover:underline text-sm"
              on:click={() => showSizeGuide = true}
            >
              Size Guide
            </button>
          </div>

          <!-- Care Instructions -->
          <div class="space-y-6 border-t border-white/10 pt-8">
            <h3 class="text-xl font-light">Care Instructions</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              {#each featuredProduct.careInstructions as instruction}
                <div class="text-white/70 text-sm">{instruction}</div>
              {/each}
            </div>
          </div>

          <!-- Reviews -->
          <div class="space-y-6 border-t border-white/10 pt-8">
            <div class="flex items-center justify-between">
              <h4 class="text-xl font-light">Customer Reviews</h4>
              <div class="flex items-center gap-2">
                <div class="flex">
                  {#each Array(5) as _, i}
                    <span class="text-amber-400">
                      {#if i < Math.floor(featuredProduct.rating)}
                        <IconStarFilled size={20} />
                      {:else}
                        <IconStar size={20} />
                      {/if}
                    </span>
                  {/each}
                </div>
                <span class="text-white/60">({featuredProduct.reviews.length})</span>
              </div>
            </div>
            <div class="space-y-6">
              {#each featuredProduct.reviews as review}
                <div class="space-y-3 p-4 bg-white/5 rounded-lg">
                  <div class="flex items-center justify-between">
                    <div>
                      <span class="font-medium">{review.author}</span>
                      {#if review.verified}
                        <span class="ml-2 text-xs text-amber-400">Verified Purchase</span>
                      {/if}
                    </div>
                    <span class="text-white/60 text-sm">{review.date}</span>
                  </div>
                  <div class="flex">
                    {#each Array(5) as _, i}
                      <span class="text-amber-400">
                        {#if i < review.rating}
                          <IconStarFilled size={16} />
                        {:else}
                          <IconStar size={16} />
                        {/if}
                      </span>
                    {/each}
                  </div>
                  <p class="text-white/80">{review.comment}</p>
                </div>
              {/each}
            </div>
          </div>

          <!-- Book Consultation Button -->
          <div class="pt-8">
            <a 
              href="/contact" 
              class="inline-block w-full md:w-auto px-8 py-4 bg-amber-400 text-black hover:bg-amber-300 transition-colors duration-300 text-center"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Zoom Modal -->
  {#if isZooming}
    <div 
      class="fixed inset-0 bg-black/95 z-[60]"
      on:click={closeZoom}
      transition:fade={{ duration: 150 }}
    >
      <button 
        class="absolute top-4 right-4 text-white/70 hover:text-white transition-colors duration-300"
        on:click={closeZoom}
      >
        <IconX size={32} />
      </button>
      <div class="absolute top-4 left-4 flex items-center gap-4">
        <button 
          class="text-white/70 hover:text-white transition-colors duration-300"
          on:click={handleZoomIn}
          disabled={zoomLevel >= 3}
        >
          <IconZoomIn size={32} />
        </button>
        <button 
          class="text-white/70 hover:text-white transition-colors duration-300"
          on:click={handleZoomOut}
          disabled={zoomLevel <= 1}
        >
          <IconZoomOut size={32} />
        </button>
      </div>
      <div 
        class="h-full w-full flex items-center justify-center overflow-hidden cursor-zoom-in"
        on:mousemove={handleMouseMove}
      >
        <img 
          bind:this={zoomedImageElement}
          src={zoomedImage} 
          alt="Zoomed product view"
          class="max-h-[90vh] w-auto opacity-0 transition-opacity duration-300"
          style="transform: scale({zoomLevel}) translate({zoomPosition.x}px, {zoomPosition.y}px)"
        />
      </div>
    </div>
  {/if}

  <!-- Size Guide Dialog -->
  {#if showSizeGuide}
    <div 
      class="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
      transition:fade={{ duration: 200 }}
    >
      <div 
        class="bg-zinc-900 max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg relative"
        on:click|stopPropagation
      >
        <button 
          class="absolute top-4 right-4 text-white/70 hover:text-white transition-colors duration-300"
          on:click={() => showSizeGuide = false}
        >
          <IconX size={28} />
        </button>
        
        <div class="p-8">
          <h2 class="text-3xl font-light mb-8">{featuredProduct.sizeGuide.title}</h2>
          
          <!-- Size Chart -->
          <div class="mb-12 overflow-x-auto">
            <table class="w-full min-w-[600px]">
              <thead>
                <tr class="border-b border-white/10">
                  <th class="py-4 px-4 text-left">Size</th>
                  <th class="py-4 px-4 text-left">Chest</th>
                  <th class="py-4 px-4 text-left">Waist</th>
                  <th class="py-4 px-4 text-left">Shoulder</th>
                  <th class="py-4 px-4 text-left">Length</th>
                </tr>
              </thead>
              <tbody>
                {#each featuredProduct.sizes as size}
                  <tr class="border-b border-white/10">
                    <td class="py-4 px-4">{size.size}</td>
                    <td class="py-4 px-4">{size.chest}</td>
                    <td class="py-4 px-4">{size.waist}</td>
                    <td class="py-4 px-4">{size.shoulder}</td>
                    <td class="py-4 px-4">{size.length}</td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>

          <!-- Measurement Guide -->
          <h3 class="text-xl font-light mb-6">How to Measure</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            {#each featuredProduct.sizeGuide.measurements as { measurement, description, howTo }}
              <div class="space-y-3">
                <h4 class="text-lg text-amber-400">{measurement}</h4>
                <p class="text-white/70">{description}</p>
                <p class="text-sm text-white/60">{howTo}</p>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  {/if}
</main>

<style>
  :global(body) {
    background-color: black;
  }

  /* Smooth scroll behavior */
  :global(html) {
    scroll-behavior: smooth;
  }

  /* Table styles */
  table {
    border-collapse: collapse;
  }

  th {
    font-weight: normal;
    color: rgba(255, 255, 255, 0.7);
  }

  td {
    color: rgba(255, 255, 255, 0.9);
  }

  .cursor-zoom-in {
    cursor: zoom-in;
  }

  /* Zoom styles */
  .img-zoom-lens {
    position: absolute;
    border: 2px solid rgba(251, 191, 36, 0.5);
    width: 160px;
    height: 160px;
  }
  
  .img-zoom-result {
    border: 1px solid rgba(255, 255, 255, 0.1);
    width: 600px;
    height: 600px;
  }
</style>