<script>
	import { getKbarState } from '$lib/index.js';
	import { onMount } from 'svelte';

	async function lodmd() {
		try {
			const post = await import(`$lib/example.md`);
			return {
				content: post.default,
				meta: post.metadata
			};
			// console.log(params);
			// return {
			// 	content: params.content,
			// 	meta: params.meta
			// };
		} catch (e) {
			console.log('failed');
		}
	}
	let coentent = '';

	onMount(async () => {
		let res = await lodmd();
		console.log(res.content);
		coentent = res.content;
	});
</script>

<h1 class="hero">Bring the magik of ctrl+k to your svelte website with breeze</h1>

<svelte:component this={coentent} />

<style>
	.hero {
		font-size: 4rem;
	}

	:global(a) {
		text-decoration: none;
		color: #005cc5;
	}
</style>
