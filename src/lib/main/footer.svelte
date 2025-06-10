<script lang="ts">
	import { onMount } from 'svelte';
	import {
		IconBrandFacebookFilled,
		IconBrandInstagram,
		IconBrandXFilled,
		IconBrandYoutubeFilled
	} from '@tabler/icons-svelte';

	import type { ComponentType } from 'svelte';
	import pymtMethods from '$lib/assets/2152262473.webp';

	import { BsFacebook } from 'svelte-icons-pack/bs';

	interface SocialIcon {
		name: string;
		url: string;
		icon: ComponentType;
	}

	interface NavLink {
		name: string;
		url: string;
	}

	const socialIcons: SocialIcon[] = [
		{ name: 'Facebook', url: '#', icon: IconBrandFacebookFilled },
		{ name: 'Instagram', url: '#', icon: IconBrandInstagram },
		{ name: 'Twitter', url: '#', icon: IconBrandXFilled },
		{ name: 'YouTube', url: '#', icon: IconBrandYoutubeFilled }
	];

	const menuLinks: NavLink[] = [
		{ name: 'HOME', url: '/' },
		{ name: 'SERVICES', url: '/services' },
		{ name: 'OUR PROCESS', url: '/our-process' },
		{ name: 'LOOKBOOK', url: '/lookbook' },
		{ name: 'ABOUT', url: '/about' },
		{ name: 'CONTACT', url: '/contact' }
	];

	const navLinks: NavLink[] = [
		{ name: 'FAQ', url: '/policies/faq' },
		{ name: 'SHIPPING', url: '/policies/shipping' },
		{ name: 'RETURNS', url: '/policies/returns' },
		{ name: 'TERMS & CONDITIONS', url: '/policies/terms-and-conditions' },
		{ name: 'PRIVACY POLICY', url: '/policies/privacy-policy' },
		{ name: 'CONTACT US', url: '/contact' }
	];

	onMount(() => {
		// Any necessary initialization
	});
</script>

<footer class="bg-black text-white">
	<!-- Main Footer Content -->
	<div class="container mx-auto px-4 py-16 border-t border-white/10">
		<!-- Grid Layout -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
			<!-- Brand Section -->
			<div class="space-y-6">
				<h3 class="text-2xl font-light tracking-wider">THE WILSON'S BESPOKE</h3>
				<p class="text-white/60 leading-relaxed">
					Crafting timeless elegance through bespoke tailoring. Each garment is a masterpiece of precision and style, designed to elevate your presence.
				</p>
				<div class="flex space-x-6">
					{#each socialIcons as { name, url, icon: Icon }}
						<a
							href={url}
							class="text-white/60 hover:text-amber-400 transition-colors duration-300"
							aria-label={name}
							target="_blank"
							rel="noopener noreferrer"
						>
							<svelte:component this={Icon} size={20} />
						</a>
					{/each}
				</div>
			</div>

			<!-- Quick Links -->
			<div class="space-y-6">
				<h3 class="text-md uppercase tracking-wider text-white/80">Information</h3>
				<div class="grid grid-cols-1 gap-3">
					{#each menuLinks as { name, url }}
						<a
							href={url}
							class="text-white/60 hover:text-amber-400 transition-colors duration-300"
						>
							{name}
						</a>
					{/each}
					{#each navLinks.slice(0, 3) as { name, url }}
						<a
							href={url}
							class="text-white/60 hover:text-amber-400 transition-colors duration-300"
						>
							{name}
						</a>
					{/each}
				</div>
			</div>

			<!-- Contact & Support -->
			<div class="space-y-6">
				<h3 class="text-md uppercase tracking-wider text-white/80">Support</h3>
				<div class="grid grid-cols-1 gap-3">
					{#each navLinks.slice(3) as { name, url }}
						<a
							href={url}
							class="text-white/60 hover:text-amber-400 transition-colors duration-300"
						>
							{name}
						</a>
					{/each}
				</div>
			</div>
		</div>

		<!-- Bottom Section -->
		<div class="pt-8 border-t border-white/10">
			<div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
				<p class="text-white/40 text-sm">
					© {new Date().getFullYear()} THE WILSON'S BESPOKE. All Rights Reserved.
					<br>
					All trademarks, logos, and images are the property of their respective owners.
				</p>
				
				<!-- Payment Methods -->
				<div class="section-footer__row__col">
					<div class="section-footer__payment-icons flex flex-row flex-wrap justify-items-end space-x-4">
						<svg
							class="section-footer__payment-icon"
							viewBox="0 0 38 24"
							width="38"
							height="24"
							role="img"
							aria-labelledby="pi-discover"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						><title id="pi-discover">Discover</title><path
								fill="#000"
								opacity=".07"
								d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
							></path><path
								d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32z"
								fill="#fff"
							></path><path
								d="M3.57 7.16H2v5.5h1.57c.83 0 1.43-.2 1.96-.63.63-.52 1-1.3 1-2.11-.01-1.63-1.22-2.76-2.96-2.76zm1.26 4.14c-.34.3-.77.44-1.47.44h-.29V8.1h.29c.69 0 1.11.12 1.47.44.37.33.59.84.59 1.37 0 .53-.22 1.06-.59 1.39zm2.19-4.14h1.07v5.5H7.02v-5.5zm3.69 2.11c-.64-.24-.83-.4-.83-.69 0-.35.34-.61.8-.61.32 0 .59.13.86.45l.56-.73c-.46-.4-1.01-.61-1.62-.61-.97 0-1.72.68-1.72 1.58 0 .76.35 1.15 1.35 1.51.42.15.63.25.74.31.21.14.32.34.32.57 0 .45-.35.78-.83.78-.51 0-.92-.26-1.17-.73l-.69.67c.49.73 1.09 1.05 1.9 1.05 1.11 0 1.9-.74 1.9-1.81.02-.89-.35-1.29-1.57-1.74zm1.92.65c0 1.62 1.27 2.87 2.9 2.87.46 0 .86-.09 1.34-.32v-1.26c-.43.43-.81.6-1.29.6-1.08 0-1.85-.78-1.85-1.9 0-1.06.79-1.89 1.8-1.89.51 0 .9.18 1.34.62V7.38c-.47-.24-.86-.34-1.32-.34-1.61 0-2.92 1.28-2.92 2.88zm12.76.94l-1.47-3.7h-1.17l2.33 5.64h.58l2.37-5.64h-1.16l-1.48 3.7zm3.13 1.8h3.04v-.93h-1.97v-1.48h1.9v-.93h-1.9V8.1h1.97v-.94h-3.04v5.5zm7.29-3.87c0-1.03-.71-1.62-1.95-1.62h-1.59v5.5h1.07v-2.21h.14l1.48 2.21h1.32l-1.73-2.32c.81-.17 1.26-.72 1.26-1.56zm-2.16.91h-.31V8.03h.33c.67 0 1.03.28 1.03.82 0 .55-.36.85-1.05.85z"
								fill="#231F20"
							></path><path
								d="M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z"
								fill="url(#pi-paint0_linear)"
							></path><path
								opacity=".65"
								d="M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z"
								fill="url(#pi-paint1_linear)"
							></path><path
								d="M36.57 7.506c0-.1-.07-.15-.18-.15h-.16v.48h.12v-.19l.14.19h.14l-.16-.2c.06-.01.1-.06.1-.13zm-.2.07h-.02v-.13h.02c.06 0 .09.02.09.06 0 .05-.03.07-.09.07z"
								fill="#231F20"
							></path><path
								d="M36.41 7.176c-.23 0-.42.19-.42.42 0 .23.19.42.42.42.23 0 .42-.19.42-.42 0-.23-.19-.42-.42-.42zm0 .77c-.18 0-.34-.15-.34-.35 0-.19.15-.35.34-.35.18 0 .33.16.33.35 0 .19-.15.35-.33.35z"
								fill="#231F20"
							></path><path
								d="M37 12.984S27.09 19.873 8.976 23h26.023a2 2 0 002-1.984l.024-3.02L37 12.985z"
								fill="#F48120"
							></path><defs
							><linearGradient
								id="pi-paint0_linear"
								x1="21.657"
								y1="12.275"
								x2="19.632"
								y2="9.104"
								gradientUnits="userSpaceOnUse"
								><stop stop-color="#F89F20"></stop><stop offset=".25" stop-color="#F79A20"
								></stop><stop offset=".533" stop-color="#F68D20"></stop><stop
									offset=".62"
									stop-color="#F58720"
								></stop><stop offset=".723" stop-color="#F48120"></stop><stop
									offset="1"
									stop-color="#F37521"
								></stop></linearGradient
							><linearGradient
								id="pi-paint1_linear"
								x1="21.338"
								y1="12.232"
								x2="18.378"
								y2="6.446"
								gradientUnits="userSpaceOnUse"
								><stop stop-color="#F58720"></stop><stop offset=".359" stop-color="#E16F27"
								></stop><stop offset=".703" stop-color="#D4602C"></stop><stop
									offset=".982"
									stop-color="#D05B2E"
								></stop></linearGradient
							></defs
						></svg>

						<svg
							class="section-footer__payment-icon"
							viewBox="0 0 38 24"
							xmlns="http://www.w3.org/2000/svg"
							width="38"
							height="24"
							role="img"
							aria-labelledby="pi-maestro"
						><title id="pi-maestro">Maestro</title><path
								opacity=".07"
								d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
							></path><path
								fill="#fff"
								d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
							></path><circle fill="#EB001B" cx="15" cy="12" r="7"></circle><circle
								fill="#00A2E5"
								cx="23"
								cy="12"
								r="7"
							></circle><path
								fill="#7375CF"
								d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"
							></path></svg>

						<svg
							class="section-footer__payment-icon"
							viewBox="0 0 38 24"
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							width="38"
							height="24"
							aria-labelledby="pi-master"
						><title id="pi-master">Mastercard</title><path
								opacity=".07"
								d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
							></path><path
								fill="#fff"
								d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
							></path><circle fill="#EB001B" cx="15" cy="12" r="7"></circle><circle
								fill="#F79E1B"
								cx="23"
								cy="12"
								r="7"
							></circle><path
								fill="#FF5F00"
								d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"
							></path></svg>

						<svg
							class="section-footer__payment-icon"
							viewBox="0 0 38 24"
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							width="38"
							height="24"
							aria-labelledby="pi-visa"
						><title id="pi-visa">Visa</title><path
								opacity=".07"
								d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
							></path><path
								fill="#fff"
								d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
							></path><path
								d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z"
								fill="#142688"
							></path></svg>

						<!-- Paypal -->
						<svg class="section-footer__payment-icon" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" width="38" height="24" role="img" aria-labelledby="pi-paypal"><title id="pi-paypal">PayPal</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><path fill="#003087" d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z"></path><path fill="#3086C8" d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z"></path><path fill="#012169" d="M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z"></path></svg>
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>

<style>
	footer {
		background: black;
	}
</style>
