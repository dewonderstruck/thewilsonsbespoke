<script>
	import { onMount } from 'svelte';
	import { Package, Truck, Check, CreditCard } from 'lucide-svelte';
	import { Icon } from 'svelte-icons-pack';

	export let orderNumber;

	let orderDetails = null;
	let loading = true;

	onMount(async () => {
		// Simulating an API call to fetch order details
		await new Promise(resolve => setTimeout(resolve, 1000));
		orderDetails = {
			status: 'Processing',
			items: [
				{ name: 'Product 1', quantity: 2, price: 29.99 },
				{ name: 'Product 2', quantity: 1, price: 49.99 }
			],
			total: 109.97,
			paymentStatus: 'Pending'
		};
		loading = false;
	});

	function getProgressStep(status) {
		const steps = ['Ordered', 'Processing', 'Shipped', 'Delivered'];
		return steps.indexOf(status) + 1;
	}

	function handlePayment() {
		// Add payment logic here
		console.log('Processing payment...');
	}
</script>

<div class="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
	<div class="flex items-center justify-center w-full max-h-screen lg:p-12">
		<div class="border border-white/10 flex flex-col w-2/4 h-full px-8 py-10 text-center bg-zinc-950/90 text-white shadow-md rounded-md">
			{#if loading}
				<p>Loading order details...</p>
			{:else if orderDetails}
				<h1 class="text-2xl font-bold mb-6">Order #{orderNumber}</h1>

				<!-- Progress bar -->
				<div class="mb-8">

					<div class="flex justify-between mb-2">
						<svelte:component this="{Package}" class={getProgressStep(orderDetails.status) >= 1 ? 'text-green-500' : 'text-gray-500'} />
						<svelte:component this="{Truck}" class={getProgressStep(orderDetails.status) >= 2 ? 'text-green-500' : 'text-gray-500'} />
						<svelte:component this="{Check}" class={getProgressStep(orderDetails.status) >= 4 ? 'text-green-500' : 'text-gray-500'} />
					</div>

					<div class="w-full bg-gray-700 rounded-full h-2.5">
						<div
							class="bg-green-500 h-2.5 rounded-full"
							style="width: {(getProgressStep(orderDetails.status) / 4) * 100}%"
						></div>
					</div>

				</div>

				<!-- Order items -->
				<div class="mb-6">
					<h2 class="text-xl font-semibold mb-3">Order Items</h2>
					{#each orderDetails.items as item}
						<div class="flex justify-between mb-2">
							<span>{item.name} (x{item.quantity})</span>
							<span>${(item.price * item.quantity).toFixed(2)}</span>
						</div>
					{/each}
					<div class="border-t border-white/30 mt-4 pt-2 flex justify-between font-bold">
						<span>Total</span>
						<span>${orderDetails.total.toFixed(2)}</span>
					</div>
				</div>

				<!-- Payment status -->
				{#if orderDetails.paymentStatus === 'Pending'}
					<div class="mt-4">
						<button on:click={handlePayment} class="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition rounded duration-300 bg-white text-black hover:bg-gray-200 focus:ring-4 focus:ring-gray-400">
							<CreditCard class="mr-2" />
							Make Payment
						</button>
					</div>
				{:else}
					<p class="text-green-500 font-semibold">Payment Completed</p>
				{/if}
			{:else}
				<p>Order not found</p>
			{/if}
		</div>
	</div>
</div>