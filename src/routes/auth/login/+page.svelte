<script lang="ts">
	// signin/+page.svelte
	import { session } from '$lib/session';
	import { auth } from '$lib/firebase.client';
	import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, type UserCredential } from 'firebase/auth';
	import { goto } from '$app/navigation';
	import logo from '$lib/assets/logo.edba41e7-3-removebg-preview.png';

	let email: string = '';
	let password: string = '';
	let keepLoggedIn: boolean = false;

	async function signInWithEmail() {
		await signInWithEmailAndPassword(auth, email, password)
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

	async function signInWithGoogle() {
		const provider = new GoogleAuthProvider();
		await signInWithPopup(auth, provider)
			.then((result) => {
				const { displayName, email, uid } = result.user;
				session.set({
					loggedIn: true,
					user: {
						displayName,
						email,
						uid
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
	<div class="flex items-center justify-center w-full max-h-screen lg:p-12 ">
		<div class="flex items-center">
			<form on:submit|preventDefault={signInWithEmail} class="border border-white/10 flex flex-col w-full h-full px-24 py-16 text-center bg-zinc-950/90 text-white shadow-md rounded-md">
				<div class="container mx-auto flex justify-center items-center my-4">
				<div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
					<img class="object-cover h-32 mx-auto" src={logo} alt="logo" />
				</div>
				</div>
				<label for="email" class="mb-2 text-sm text-start text-gray-300 mt-3">Email*</label>
				<input id="email" type="email" bind:value={email} placeholder="your@email.com" class="flex border border-white/50 items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-black/20 mb-7 placeholder:bg-black bg-black/80 text-white rounded"/>
				<label for="password" class="mb-2 text-sm text-start text-gray-300">Password*</label>
				<input id="password" type="password" bind:value={password} placeholder="Enter your password" class="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm border border-white/50 font-medium outline-none focus:bg-black/20 placeholder:bg-black bg-black/80 text-white rounded"/>
				<div class="flex flex-row justify-between mb-8">
					<label class="relative inline-flex items-center mr-3 cursor-pointer select-none">
						<input type="checkbox" bind:checked={keepLoggedIn} class="sr-only peer">
						<div class="w-5 h-5 bg-gray-800 border-2 rounded-sm border-gray-600 peer peer-checked:border-0 peer-checked:bg-blue-600">
							<img class="" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/icons/check.png" alt="tick">
						</div>
						<span class="ml-3 text-sm font-normal text-gray-300">Keep me logged in</span>
					</label>
					<a href="/forgot-password" class="mr-4 text-sm font-medium text-gray-400">Forget password?</a>
				</div>
				<button type="submit" class="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-black transition duration-300 md:w-96 rounded hover:bg-gray-200 focus:ring-4 focus:ring-gray-400 bg-white">Sign In</button>
				<button on:click={signInWithGoogle} type="button" class="mt-2 flex items-center border border-white/30 text-white justify-center w-full py-4 mb-6 text-sm font-medium transition rounded duration-300 bg-zinc-950 focus:ring-4 focus:ring-gray-600">
					<img class="h-5 mr-2" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png" alt="">
					Sign in with Google
				</button>
				<p class="text-sm leading-relaxed text-gray-300">Not registered yet? <a href="/auth/signup" class="font-bold text-gray-100 ml-1">Create an Account</a></p>
			</form>
		</div>
	</div>
</div>