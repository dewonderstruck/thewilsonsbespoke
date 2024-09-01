<script>
	let orderNumber = '';
	let orderEmail = '';
	let billingZipCode = '';

	function handleCheckStatus(event) {
		event.preventDefault();
		// Add logic to check order status
		console.log('Checking status for:', { orderNumber, orderEmail, billingZipCode });
	}
</script>

<div class="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
	<div class="flex items-center justify-center w-full max-h-screen lg:p-12">
		<div class="flex items-center">
			<form on:submit|preventDefault={handleCheckStatus} class="border border-white/10 flex flex-col w-full h-full px-24 py-16 text-center bg-zinc-950/90 text-white shadow-md rounded-md">
				<h1 class="text-2xl font-bold mb-6">CHECK ORDER</h1>
				<p class="mb-6 text-sm text-gray-300">See your order even if you are not a registered user. Enter the order number and the billing address ZIP code.</p>

				<label for="orderNumber" class="mb-2 text-sm text-start text-gray-300">ORDER NUMBER *</label>
				<input id="orderNumber" type="text" bind:value={orderNumber} class="flex border border-white/50 items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-black/20 mb-7 placeholder:bg-black bg-black/80 text-white rounded" required />

				<label for="billingZipCode" class="mb-2 text-sm text-start text-gray-300">BILLING ZIP CODE *</label>
				<input id="billingZipCode" type="text" bind:value={billingZipCode} class="flex border border-white/50 items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-black/20 mb-7 placeholder:bg-black bg-black/80 text-white rounded" required />

				<button type="submit" class="mt-2 flex items-center border border-white/30 text-black justify-center w-full py-4 mb-6 text-sm font-medium transition rounded duration-300 bg-white focus:ring-4 focus:ring-gray-600">CHECK STATUS</button>

			</form>
		</div>
	</div>
</div>