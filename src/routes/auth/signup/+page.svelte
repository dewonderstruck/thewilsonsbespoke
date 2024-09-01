<script lang="ts">
	// register/+page.svelte
	import { session } from '$lib/session';
	import { auth } from '$lib/firebase.client';
	import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, type UserCredential } from 'firebase/auth';
	import { goto } from '$app/navigation';
	import logo from '$lib/assets/logo.edba41e7-3-removebg-preview.png';

	let email: string = '';
	let password: string = '';
	let confirmPassword: string = '';

	async function handleRegister() {
		if (password !== confirmPassword) {
			alert("Passwords don't match");
			return;
		}

		await createUserWithEmailAndPassword(auth, email, password)
			.then((result) => {
				const { user }: UserCredential = result;
				session.set({
					loggedIn: true,
					user: {
						displayName: user?.displayName,
						email: user?.email,
						uid: user?.uid
					}
				});
				goto('/');
			})
			.catch((error) => {
				alert(error.message);
			});
	}
</script>

<div class="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
	<div class="flex items-center justify-center w-full max-h-screen lg:p-12">
		<div class="flex items-center">
			<form on:submit|preventDefault={handleRegister} class="border border-white/10 flex flex-col w-full h-full px-24 py-16 text-center bg-zinc-950/90 text-white shadow-md rounded-md">
				<div class="container mx-auto flex justify-center items-center my-4">
					<div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
						<img class="object-cover h-32 mx-auto" src={logo} alt="logo" />
					</div>
				</div>
				<label for="email" class="mb-2 text-sm text-start text-gray-300 mt-3">Email*</label>
				<input id="email" type="email" bind:value={email} placeholder="your@email.com" class="flex border border-white/50 items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-black/20 mb-7 placeholder:bg-black bg-black/80 text-white rounded"/>
				<label for="password" class="mb-2 text-sm text-start text-gray-300">Password*</label>
				<input id="password" type="password" bind:value={password} placeholder="Enter your password" class="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm border border-white/50 font-medium outline-none focus:bg-black/20 placeholder:bg-black bg-black/80 text-white rounded"/>
				<label for="confirmPassword" class="mb-2 text-sm text-start text-gray-300">Confirm Password*</label>
				<input id="confirmPassword" type="password" bind:value={confirmPassword} placeholder="Confirm your password" class="flex items-center w-full px-5 py-4 mb-8 mr-2 text-sm border border-white/50 font-medium outline-none focus:bg-black/20 placeholder:bg-black bg-black/80 text-white rounded"/>
				<button type="submit" class="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-black transition duration-300 md:w-96 rounded hover:bg-gray-200 focus:ring-4 focus:ring-gray-400 bg-white">Register</button>
				<p class="text-sm leading-relaxed text-gray-300">Already have an account? <a href="/auth/login" class="font-bold text-gray-100 ml-1">Sign In</a></p>
			</form>
		</div>
	</div>
</div>