<script>
    import { IconMail, IconPhone, IconMapPin } from '@tabler/icons-svelte';
    import { fade, fly } from 'svelte/transition';
    import { onMount } from 'svelte';
    import CTAButton from '$lib/component/CTAButton.svelte';

    let visible = false;
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
        // Handle form submission logic here
        console.log(formData);
    };
</script>

<div class="flex flex-col items-center min-h-screen bg-[#0C0404] text-white">
    <div class="relative w-full h-[61.8vh] bg-cover bg-center flex items-center justify-center" style="background-image: url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');">
        <div class="absolute inset-0 bg-black bg-opacity-60"></div>
        <div class="absolute inset-0 top-40 flex items-center justify-center">
            {#if visible}
                <h1 class="manrope text-5xl md:text-7xl uppercase tracking-widest text-center">Contact Us</h1>
            {/if}
        </div>
    </div>

    <section class="w-full py-24 px-8 md:px-16 lg:px-24">
        <div class="max-w-6xl mx-auto">
            {#if visible}
                <h2 in:fly={{ y: 50, duration: 1000, delay: 300 }} class="text-4xl md:text-5xl uppercase mb-16 text-center tracking-wider">Get in Touch</h2>
            {/if}
            <div class="flex flex-col md:flex-row gap-16">
                <div class="w-full md:w-1/2">
                    {#if visible}
                        <form on:submit|preventDefault={handleSubmit} in:fade={{ duration: 1000, delay: 600 }} class="space-y-6">
                            <div>
                                <label for="name" class="block text-sm font-medium text-gray-300">Name</label>
                                <input type="text" id="name" bind:value={formData.name} class="mt-1 block w-full bg-[#1C1C1C] border border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500" required>
                            </div>
                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-300">Email</label>
                                <input type="email" id="email" bind:value={formData.email} class="mt-1 block w-full bg-[#1C1C1C] border border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500" required>
                            </div>
                            <div>
                                <label for="phone" class="block text-sm font-medium text-gray-300">Phone</label>
                                <input type="tel" id="phone" bind:value={formData.phone} class="mt-1 block w-full bg-[#1C1C1C] border border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500">
                            </div>
                            <div>
                                <label for="message" class="block text-sm font-medium text-gray-300">Message</label>
                                <textarea id="message" bind:value={formData.message} rows="4" class="mt-1 block w-full bg-[#1C1C1C] border border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500" required></textarea>
                            </div>
                            <div>
                                <CTAButton text="Send Message" />
                            </div>
                        </form>
                    {/if}
                </div>
                <div class="w-full md:w-1/2 space-y-8 manrope">
                    {#if visible}
                        <div in:fade={{ duration: 1000, delay: 900 }} class="space-y-4">
                            <h3 class="text-2xl font-semibold">Visit Our Atelier</h3>
                            <p class="text-gray-300 ">Experience the art of bespoke tailoring firsthand. Our master craftsmen are ready to bring your vision to life.</p>
                            <div class="flex items-center space-x-4">
                                <IconMapPin class="text-amber-500" />
                                <span>123 Savile Row, London, UK</span>
                            </div>
                        </div>
                        <div in:fade={{ duration: 1000, delay: 1200 }} class="space-y-4">
                            <h3 class="text-2xl font-semibold">Contact Information</h3>
                            <div class="flex items-center space-x-4">
                                <IconPhone class="text-amber-500" />
                                <span>+44 20 1234 5678</span>
                            </div>
                            <div class="flex items-center space-x-4">
                                <IconMail class="text-amber-500" />
                                <span>info@twilsonsbespoke.com</span>
                            </div>
                        </div>
                        <div in:fade={{ duration: 1000, delay: 1500 }} class="space-y-4">
                            <h3 class="text-2xl font-semibold">Opening Hours</h3>
                            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                            <p>Saturday: 10:00 AM - 4:00 PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    </section>
  </div>

<style>
    :global(body) {
        background-color: #0C0404;
        color: white;
    }

    input, textarea {
        font-family: 'Manrope', sans-serif;
    }
</style>