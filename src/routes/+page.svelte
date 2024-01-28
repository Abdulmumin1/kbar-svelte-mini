<script>
	import { getKbarState } from '$lib/index.js';
	import { onMount } from 'svelte';

	let state = getKbarState();

	function toggle() {
		$state = !$state;
	}

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

<div class="layout">
	<div class="relative">
		<h1 class="center"><button class="button" on:click={toggle}>KBar</button></h1>
	</div>

	<div class="command">npm i @abdulmuminyqn/kbar-svelte-mini</div>

	<div class="block">
		<div class="content">
			<h1 class="hero">Bring the magik of ctrl+k to your svelte website with breeze</h1>

			<svelte:component this={coentent} />
		</div>
	</div>

	<div>
		kbar-svelte-mini by <a
			href="https://twitter.com/intent/follow?screen_name=abdulmuminyqn"
			target="_blank">@abdulmuminyqn</a
		>
	</div>
</div>

<style>
	.layout {
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 10px;
		align-items: center;
		justify-content: center;
	}
	.center {
		text-align: center;
	}

	.hero {
		font-size: 4rem;
	}

	.command {
		background-color: rgb(216, 215, 215);
		color: black;
		padding: 4px 20px;
		border-radius: 20px;
	}

	.block {
		display: flex;
		gap: 60px;
		width: 100%;
		max-width: 860px;
		/* padding: 100px; */
	}

	.content {
		width: 100%;
	}
	.button {
		margin-top: 160px;
		height: 80px;
		width: 80px;
		background-color: white;
		border: 2px solid gray;
		border-radius: 10px;
		font-size: 1.2rem;
		cursor: pointer;
	}

	.sidenav {
		display: flex;
		flex-direction: column;
		gap: 2px;
		padding: 60px;
		position: sticky;
		top: 0;
	}

	.sidenav > a {
		text-decoration: none;
		color: black !important;
	}

	:is(.darkTheme .layout) {
		background-color: #0c0a09 !important;
		color: white !important;
	}

	:is(.darkTheme .button) {
		background-color: #0c0a09 !important;
		color: white !important;
	}

	:is(.darkTheme .sidenav > a) {
		color: white !important;
	}

	@media (max-width: 768px) {
		.block {
			flex-direction: column;
		}
		.sidenav {
			padding: 10px;
		}
	}
</style>
