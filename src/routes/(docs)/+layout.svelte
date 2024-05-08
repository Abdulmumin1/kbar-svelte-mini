<script>
	import { page } from '$app/stores';
	let isDarkMode = false;

	function toggle() {
		isDarkMode = !isDarkMode;

		if (isDarkMode) {
			document.documentElement.classList.add('darkTheme');
		} else {
			document.documentElement.classList.remove('darkTheme');
		}
	}
</script>

<div class="layout">
	<aside class="sidebar">
		<div class="sidebar-header">
			<div class="logo">
				<span class="logo-text">KBAR-SVELTE-MINI</span>
			</div>
		</div>
		<nav class="sidebar-nav">
			<a href="/docs" class:active={$page.url.pathname === '/docs'}>Getting Started</a>
			<a href="/docs/examples" class:active={$page.url.pathname === '/docs/examples'}>Examples</a>
			<a href="/docs/functions" class:active={$page.url.pathname === '/docs/functions'}
				>Programmatic Functions</a
			>
			<a href="/docs/reference" class:active={$page.url.pathname === '/docs/reference'}
				>Data structure</a
			>
		</nav>
	</aside>

	<div class="content-wrapper">
		<header class="content-header">
			<nav class="top-nav">
				<a href="https://twitter.com/abdulmuminyqn" target="_blank">Twitter</a>
				<a href="https://github.com/Abdulmumin1/kbar-svelte-mini">GitHub</a>
				<button on:click={() => toggle()}>
					{isDarkMode ? 'Light Mode' : 'Dark Mode'}
				</button>
			</nav>
		</header>

		<main class="content-main">
			<slot />
		</main>
	</div>
</div>

<style>
	:root {
		--bg-color: #fff;
		--text-color: #333;
		--sidebar-bg: #f5f5f5;
		--sidebar-border: #ddd;
		--logo-color: #34d399;
		--active-link-bg: #34d399;
		--active-link-color: #fff;
		--header-bg: #f5f5f5;
		--header-border: #ddd;
		--footer-bg: #f5f5f5;
		--footer-border: #ddd;
	}

	:global(.darkTheme) {
		--bg-color: #030712;
		--text-color: #fff;
		--sidebar-bg: #23262e;
		--sidebar-border: #333;
		--logo-color: #05c9ae;
		--active-link-bg: #05c9ae;
		--active-link-color: #fff;
		--header-bg: #23262e;
		--header-border: #333;
		--footer-bg: #23262e;
		--footer-border: #333;
	}

	.layout {
		display: flex;
		min-height: 100vh;
		background-color: var(--bg-color);
		color: var(--text-color);
	}

	.sidebar {
		width: 250px;
		background-color: var(--sidebar-bg);
		border-right: 1px solid var(--sidebar-border);
		padding-inline: 20px;
		overflow-y: auto;
		position: sticky;
		top: 0;
		height: 100vh;
	}

	.sidebar-header {
		margin-bottom: 20px;
	}

	.logo {
		font-size: 24px;
		font-weight: bold;
		padding: 20px 0;
		color: var(--logo-color);
	}

	.sidebar-nav {
		display: flex;
		flex-direction: column;
	}

	.sidebar-nav a {
		padding: 10px;
		text-decoration: none;
		color: var(--text-color);
		transition: background-color 0.3s;
	}

	.sidebar-nav a.active {
		background-color: var(--active-link-bg);
		color: var(--active-link-color);
	}

	.content-wrapper {
		flex: 1;
		display: flex;
		flex-direction: column;
		min-width: 0; /* Moved this line here */
	}

	.content-header {
		background-color: var(--header-bg);
		border-bottom: 1px solid var(--header-border);
		padding: 10px 20px;
		position: sticky;
		top: 0;
		z-index: 1;
	}

	.top-nav {
		display: flex;
		gap: 20px;
		align-items: center;
		justify-content: end;
		width: 100%;
	}

	.top-nav a {
		text-decoration: none;
		color: var(--text-color);
	}

	.content-main {
		flex: 1;
		padding: 20px;
		overflow: auto;
	}

	.content-footer {
		background-color: var(--footer-bg);
		border-top: 1px solid var(--footer-border);
		padding: 10px 20px;
		text-align: center;
	}
</style>
