<script lang="ts">
    import { IconMail, IconPhone, IconMapPin, IconClock, IconSend } from '@tabler/icons-svelte';
    import { fade, fly, scale } from 'svelte/transition';
    import { onMount } from 'svelte';

    let visible = false;
    let formSubmitted = false;
    
    onMount(() => {
        visible = true;
    });

    let formData = {
        name: '',
        email: '',
        phone: '',
        message: ''
    };

    const handleSubmit = () => {
        formSubmitted = true;
        // Handle form submission logic here
        console.log(formData);
    };

    const contactInfo = [
        {
            icon: IconMapPin,
            title: 'Visit Our Atelier',
            content: 'Anitha Enclave, Road No. 10, Jubilee Hills, Hyderabad, India',
            description: 'Experience the art of bespoke tailoring firsthand. Our master craftsmen are ready to bring your vision to life.'
        },
        {
            icon: IconPhone,
            title: 'Call Us',
            content: '+91 089781 59977',
            link: 'tel:+918978159977'
        },
        {
            icon: IconMail,
            title: 'Email Us',
            content: 'info@thewilsonsbespoke.com',
            link: 'mailto:info@thewilsonsbespoke.com'
        },
        {
            icon: IconClock,
            title: 'Opening Hours',
            content: ['Monday - Saturday: 11:00 AM - 9:00 PM', 'Sunday: 11:30 AM - 7:00 PM']
        }
    ];
</script>

<svelte:head>
    <title>Contact Us - The Wilson's Bespoke</title>
    <meta name="description" content="Get in touch with The Wilson's Bespoke for exceptional tailoring services. Schedule your consultation today and experience true bespoke craftsmanship." />
</svelte:head>

<main class="min-h-screen bg-black text-white">
    <!-- Hero Section -->
    <div class="relative h-[70vh] md:h-[90vh] flex items-center justify-center">
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>
        <img 
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Bespoke Tailoring Contact" 
            class="absolute inset-0 w-full h-full object-cover"
        />
        <div class="relative z-20 text-center px-4 max-w-5xl mx-auto">
            {#if visible}
                <h1 
                    class="text-4xl md:text-7xl font-light tracking-wider mb-8"
                    in:fly={{ y: 50, duration: 1000 }}
                >
                    Experience <span class="text-amber-400">Excellence</span>
                </h1>
                <p 
                    class="max-w-2xl mx-auto text-lg md:text-2xl text-white/90 font-light leading-relaxed"
                    in:fade={{ duration: 1000, delay: 500 }}
                >
                    Schedule a consultation with our master tailors and discover the pinnacle of bespoke craftsmanship.
                </p>
            {/if}
        </div>
    </div>

    <!-- Contact Section -->
    <div class="max-w-7xl mx-auto px-4 py-24 md:py-32">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <!-- Contact Form -->
            <div class="space-y-12">
                <div class="space-y-4">
                    <h2 class="text-3xl md:text-4xl font-light">Get in <span class="text-amber-400">Touch</span></h2>
                    <p class="text-white/70 leading-relaxed">Share your vision with us, and we'll help bring it to life through our bespoke tailoring expertise.</p>
                </div>

                {#if formSubmitted}
                    <div 
                        class="bg-amber-400/10 border border-amber-400/20 rounded-lg p-8 text-center space-y-4"
                        in:scale={{ duration: 300 }}
                    >
                        <IconSend class="w-12 h-12 text-amber-400 mx-auto" />
                        <h3 class="text-2xl font-light">Message Sent!</h3>
                        <p class="text-white/70">Thank you for reaching out. We'll get back to you shortly.</p>
                    </div>
                {:else}
                    <form on:submit|preventDefault={handleSubmit} class="space-y-6">
                        {#if visible}
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div class="space-y-2">
                                    <label for="name" class="text-sm text-white/60">Full Name</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        bind:value={formData.name} 
                                        class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-400/50 transition-colors duration-300"
                                        required
                                    >
                                </div>
                                <div class="space-y-2">
                                    <label for="email" class="text-sm text-white/60">Email Address</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        bind:value={formData.email} 
                                        class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-400/50 transition-colors duration-300"
                                        required
                                    >
                                </div>
                            </div>
                            <div class="space-y-2">
                                <label for="phone" class="text-sm text-white/60">Phone Number</label>
                                <input 
                                    type="tel" 
                                    id="phone" 
                                    bind:value={formData.phone} 
                                    class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-400/50 transition-colors duration-300"
                                >
                            </div>
                            <div class="space-y-2">
                                <label for="message" class="text-sm text-white/60">Your Message</label>
                                <textarea 
                                    id="message" 
                                    bind:value={formData.message} 
                                    rows="4" 
                                    class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-400/50 transition-colors duration-300"
                                    required
                                ></textarea>
                            </div>
                            <button 
                                type="submit"
                                class="w-full bg-amber-400 text-black py-4 rounded-lg font-medium hover:bg-amber-300 transition-colors duration-300"
                            >
                                Send Message
                            </button>
                        {/if}
                    </form>
                {/if}
            </div>

            <!-- Contact Information -->
            <div class="lg:pl-12 space-y-12">
                <div class="space-y-4">
                    <h2 class="text-3xl md:text-4xl font-light">Contact <span class="text-amber-400">Information</span></h2>
                    <p class="text-white/70 leading-relaxed">Visit our atelier to experience the finest in bespoke tailoring, or reach out through your preferred method of contact.</p>
                </div>

                <div class="grid gap-6">
                    {#each contactInfo as info, i}
                        {#if visible}
                            <div 
                                class="p-8 bg-white/5 border border-white/10 rounded-lg hover:border-amber-400/20 transition-all duration-500 group"
                                in:fade={{ duration: 800, delay: i * 200 }}
                            >
                                <div class="flex items-start gap-6">
                                    <div class="p-4 bg-amber-400/10 rounded-full flex-shrink-0">
                                        <svelte:component this={info.icon} class="w-8 h-8 text-amber-400" />
                                    </div>
                                    <div class="space-y-3">
                                        <h3 class="text-2xl font-light group-hover:text-amber-400 transition-colors duration-300">{info.title}</h3>
                                        {#if info.description}
                                            <p class="text-white/70 leading-relaxed">{info.description}</p>
                                        {/if}
                                        {#if Array.isArray(info.content)}
                                            <div class="space-y-1">
                                                {#each info.content as line}
                                                    <p class="text-white/90 text-lg">{line}</p>
                                                {/each}
                                            </div>
                                        {:else}
                                            {#if info.link}
                                                <a 
                                                    href={info.link}
                                                    class="text-xl text-white/90 hover:text-amber-400 transition-colors duration-300 inline-flex items-center gap-2 group-hover:gap-3"
                                                >
                                                    {info.content}
                                                    <span class="text-amber-400/70 text-base group-hover:translate-x-1 transition-transform duration-300">→</span>
                                                </a>
                                            {:else}
                                                <p class="text-xl text-white/90">{info.content}</p>
                                            {/if}
                                        {/if}
                                    </div>
                                </div>
                            </div>
                        {/if}
                    {/each}
                </div>

                <!-- Additional Contact Note -->
                <div class="p-6 bg-amber-400/5 border border-amber-400/10 rounded-lg text-center">
                    <p class="text-white/80">
                        Prefer to visit us? We welcome walk-ins during business hours, or 
                        <a href="tel:+918978159977" class="text-amber-400 hover:underline">call us</a> 
                        to schedule a private consultation.
                    </p>
                </div>
            </div>
        </div>
    </div>
</main>

<style>
    :global(body) {
        background-color: black;
    }

    input, textarea {
        color-scheme: dark;
    }

    /* Smooth scroll behavior */
    :global(html) {
        scroll-behavior: smooth;
    }
</style>