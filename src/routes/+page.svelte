<script>
	import { getKbarState } from '$lib/index.js';

	let state = getKbarState();

	// your toggle function
	function toggleKbar() {
		$state = !$state;
	}
</script>

<div class="layout">
	<div class="content">
		<h1 class="hero-text">Bring the magik of ctrl+k to your svelte website with breeze</h1>
		<div class="hero-actions">
			<a href="/docs" class="btn btn-primary">Get Started</a>
			<a href="/examples" class="btn btn-secondary">View Examples</a>
		</div>
		<button class="btn btn-menu" on:click={toggleKbar}>Toggle Menu</button>
	</div>
	<div class="blob"></div>
</div>

<style>
	:root {
		--bg-color: #fff;
		--text-color: #333;
		--primary-color: #34d399;
		--secondary-color: #0c0a09;
	}

	body {
		margin: 0;
		padding: 0;
		font-family: Arial, sans-serif;
		color: var(--text-color);
	}

	.layout {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		/* background: linear-gradient(20deg, var(--text-color), var(--primary-color)); */
		/* background: var(--primary-color); */

		position: relative;
	}

	.content {
		max-width: 800px;
		text-align: center;
		/* padding: 2rem; */
		/* background-color: #05966811; */
		/* backdrop-filter: blur(18px); */
		-webkit-backdrop-filter: blur(18px);
		/* border: 1px solid rgba(255, 255, 255, 0.18); */
		/* border-radius: 1rem; */
		/* padding: 1.5rem; */
		z-index: 10;
	}

	.hero-text {
		font-size: 3rem;
		margin-bottom: 2rem;
	}

	.hero-actions {
		display: flex;
		gap: 1rem;
		justify-content: center;
	}

	.btn {
		padding: 0.75rem 1.5rem;
		border-radius: 0.25rem;
		font-size: 1rem;
		font-weight: 600;
		text-decoration: none;
		transition:
			background-color 0.3s,
			color 0.3s;
	}

	.btn-primary {
		background-color: var(--primary-color);
		color: #fff;
	}

	.btn-menu {
		margin-top: 10px;
		background-color: var(--primary-color);
		color: #fff;
		border: 0;
	}

	.btn-primary:hover {
		background-color: #2aa37a;
	}

	.btn-secondary {
		background-color: var(--secondary-color);
		color: #fff;
	}

	.btn-secondary:hover {
		background-color: #333;
	}
</style>
