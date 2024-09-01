<script>
	import { IconBrandMeta, IconBrandX, IconBrandInstagram, IconBrandYoutubeFilled } from '@tabler/icons-svelte';
	import { IconSend2 } from '@tabler/icons-svelte';
    
    import logo from '$lib/assets/logo.edba41e7-3-removebg-preview.png';
	export let socialLinks = [
		{ href: "#", icon: IconBrandMeta, alt: "Facebook" },
		{ href: "#", icon: IconBrandX, alt: "Twitter" },
		{ href: "#", icon: IconBrandYoutubeFilled, alt: "YouTube" },
		{ href: "#", icon: IconBrandInstagram, alt: "Instagram" }
	];

	export let quickLinks = [
		{ href: "/home", label: "HOME" },
		{ href: "/process", label: "OUR PROCESS" },
		{ href: "/services", label: "SERVICES" },
		{ href: "/lookbook", label: "LOOKBOOK" },
		{ href: "/contact", label: "CONTACT US" }
	];

	export let contactInfo = {
		email: "info.tailor@example.com",
		phone: "+345 8892 7413",
		address: "35 Savile Row, London W1S",
		hours: "Monday to Saturday 10am–6pm"
	};
</script>

<section class="bg-black text-white py-12">
	<div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
		<div class="flex flex-wrap justify-between gap-4">
			<!-- Company Logo and Description -->
			<div class="w-full sm:w-1/2 md:w-1/4 mb-8 sm:mb-0">
				<img src={logo} alt="The Wilson's Logo" class="w-32 h-auto mb-4" />
				<p>At The Wilson's, every garment is a meticulously crafted work of art, reflecting the highest standards of quality and refinement.</p>
				<div class="flex space-x-4 mt-4">
					{#each socialLinks as link}
						<a href={link.href} class="p-2 rounded-2xl hover:bg-gray-700/30">
							<svelte:component this={link.icon} size={24} />
						</a>
					{/each}
				</div>
			</div>

			<!-- Information -->
			<div class="flex flex-col space-y-4 w-full sm:w-1/2 md:w-1/4 mb-8">
				<h2 class="text-lg font-semibold  underline underline-offset-8 decoration-gray-500">Information</h2>
				<p>{contactInfo.email}</p>
				<p>{contactInfo.phone}</p>
				<p>{contactInfo.address}</p>
				<p>{contactInfo.hours}</p>
			</div>

			<!-- Quick Links -->
			<div class="flex flex-col space-y-4 w-full sm:w-1/2 md:w-1/4 mb-8">
				<h2 class="text-lg font-semibold underline underline-offset-8 decoration-gray-500">Quick Links</h2>
				<ul class="space-y-2">
					{#each quickLinks as link}
						<li><a href={link.href} class="hover:underline">{link.label}</a></li>
					{/each}
				</ul>
			</div>

		</div>
	</div>

</section>

<style>
    /* Add any custom styles if necessary */
</style>
