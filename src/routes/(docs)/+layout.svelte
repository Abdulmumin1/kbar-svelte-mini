<script lang="ts">
	import { page } from '$app/state';
	import type { Snippet } from 'svelte';
	import { getKbarState } from '$lib/index.js';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
	const kbarState = getKbarState();
</script>

<div class="layout">
	<aside class="sidebar">
		<div class="sidebar-content">
			<div class="nav-group">
				<div class="nav-header">GETTING STARTED</div>
				<nav>
					<a href="/docs" class:active={page.url.pathname === '/docs'}>Introduction</a>
				</nav>
			</div>

			<div class="nav-group">
				<div class="nav-header">EXAMPLES</div>
				<nav>
					<a href="/docs/examples" class:active={page.url.pathname === '/docs/examples'}>Examples</a
					>
				</nav>
			</div>

			<div class="nav-group">
				<div class="nav-header">REFERENCE</div>
				<nav>
					<a href="/docs/functions" class:active={page.url.pathname === '/docs/functions'}
						>Functions</a
					>
					<a href="/docs/reference" class:active={page.url.pathname === '/docs/reference'}
						>Data Structure</a
					>
				</nav>
			</div>
		</div>
	</aside>

	<div class="content-wrapper">
		<header class="content-header">
			<a class="breadcrumbs" href="/">
				<span class="brand">Kbar Svelte Mini</span>
				<span class="separator">/</span>
				<span class="current">Documentation</span>
			</a>
			<nav class="top-nav">
				<button class="cmd-k-trigger" onclick={() => (kbarState.value = !kbarState.value)}>
					<span class="cmd-k-icon">⌘K</span>
					<span class="cmd-k-text">Search</span>
				</button>
			</nav>
		</header>

		<main class="content-main">
			{@render children()}
		</main>
	</div>
</div>

<style>
	:root {
		--bg-color: #ffffff;
		--sidebar-bg: #fbfbfb;
		--text-primary: #111827;
		--text-secondary: #6b7280;
		--accent-color: #34d399; /* Emerald green like home page */
		--accent-bg: #ecfdf5;
		--border-color: #e5e7eb;
		--font-sans:
			-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
			'Helvetica Neue', sans-serif;
	}

	:global(body) {
		margin: 0;
		padding: 0;
		background-color: var(--bg-color);
		font-family: var(--font-sans);
		color: var(--text-primary);
	}

	.layout {
		display: flex;
		min-height: 100vh;
		max-width: 1500px;
		margin-inline: auto;
	}

	.sidebar {
		width: 250px;
		/* background-color: var(--sidebar-bg); */
		border-right: 1px solid var(--border-color);
		position: sticky;
		top: 0;
		height: 100vh;
		flex-shrink: 0;
		display: flex;
		flex-direction: column;
	}

	.sidebar-content {
		padding: 32px 24px;
		display: flex;
		flex-direction: column;
		gap: 32px;
	}

	.nav-group {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.nav-header {
		font-size: 11px;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--text-secondary);
		margin-bottom: 4px;
	}

	nav {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	nav a {
		text-decoration: none;
		color: var(--text-secondary);
		font-size: 14px;
		padding: 8px 12px;
		/* border-radius: 6px;ds */
		transition: all 0.2s;
		font-weight: 500;
	}

	nav a:hover {
		color: var(--text-primary);
		background-color: rgba(0, 0, 0, 0.03);
	}

	nav a.active {
		background-color: var(--accent-bg);
		color: var(--accent-color);
	}

	.content-wrapper {
		flex: 1;
		display: flex;
		flex-direction: column;
		min-width: 0;
	}

	.content-header {
		height: 64px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 48px;
		/* border-bottom: 1px solid var(--border-color); */
	}

	.breadcrumbs {
		display: flex;
		align-items: center;
		gap: 12px;
		font-size: 14px;
		color: var(--text-secondary);
		text-decoration: none;
	}

	.brand {
		font-weight: 600;
		color: var(--text-primary);
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.brand::before {
		content: '';
		display: block;
		width: 20px;
		height: 20px;
		background-color: var(--accent-color);
		border-radius: 4px;
	}

	.separator {
		color: var(--border-color);
	}

	.top-nav {
		display: flex;
		align-items: center;
		gap: 24px;
	}

	.cmd-k-trigger {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 6px 10px;
		background: #ffffff;
		border: 1px solid var(--border-color);
		border-radius: 6px;
		cursor: pointer;
		font-size: 13px;
		color: var(--text-secondary);
		transition: all 0.2s;
	}

	.cmd-k-trigger:hover {
		border-color: var(--accent-color);
		color: var(--accent-color);
	}

	.cmd-k-icon {
		font-size: 11px;
		font-weight: 600;
		background: #f3f4f6;
		padding: 2px 6px;
		border-radius: 4px;
		color: #4b5563;
	}

	.content-main {
		flex: 1;
		padding: 40px 48px;
		max-width: 960px;
		margin: 0;
	}

	/* Markdown Content Styles */
	.content-main :global(h1) {
		font-size: 36px;
		font-weight: 700;
		color: var(--text-primary);
		margin-bottom: 24px;
		letter-spacing: -0.02em;
	}

	.content-main :global(p) {
		font-size: 16px;
		line-height: 1.6;
		color: var(--text-secondary);
		margin-bottom: 24px;
		max-width: 800px;
	}

	.content-main :global(h2) {
		font-size: 24px;
		font-weight: 600;
		color: var(--text-primary);
		margin-top: 48px;
		margin-bottom: 24px;
		letter-spacing: -0.01em;
	}

	.content-main :global(h3) {
		font-size: 18px;
		font-weight: 600;
		color: var(--text-primary);
		margin-top: 32px;
		margin-bottom: 16px;
	}

	.content-main :global(a) {
		color: var(--accent-color);
		text-decoration: none;
		font-weight: 500;
	}

	.content-main :global(a:hover) {
		text-decoration: underline;
	}

	.content-main :global(code) {
		background-color: #f3f4f6;
		padding: 2px 6px;
		border-radius: 4px;
		font-family: 'SF Mono', Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
		font-size: 0.9em;
		color: var(--text-primary);
	}

	.content-main :global(pre) {
		background-color: #f9fafb !important;
		border: 1px solid var(--border-color);
		border-radius: 8px;
		padding: 20px !important;
		overflow-x: auto;
		margin: 24px 0;
	}

	.content-main :global(hr) {
		border: none;
		border-top: 1px solid var(--border-color);
		margin: 48px 0;
	}

	@media (max-width: 768px) {
		.sidebar {
			display: none;
		}

		.content-header {
			padding: 0 24px;
		}

		.content-main {
			padding: 32px 24px;
		}
	}

	/* Card Grid Styles */
	:global(.card-grid) {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 24px;
		margin: 40px 0;
	}

	:global(.card) {
		background: #ffffff;
		border: 1px solid var(--border-color);
		border-radius: 12px;
		padding: 24px;
		text-decoration: none !important;
		transition: all 0.2s ease;
		display: flex;
		flex-direction: column;
		height: 100%;
		box-sizing: border-box;
	}

	:global(.card:hover) {
		transform: translateY(-2px);
		box-shadow: 0 12px 24px -10px rgba(0, 0, 0, 0.08);
		border-color: var(--accent-color);
	}

	:global(.card-icon) {
		width: 40px;
		height: 40px;
		background: var(--accent-bg);
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 20px;
		margin-bottom: 16px;
		color: var(--accent-color);
	}

	:global(.card h3) {
		margin: 0 0 8px 0 !important;
		font-size: 18px !important;
		color: var(--text-primary) !important;
	}

	:global(.card p) {
		margin: 0 !important;
		font-size: 14px !important;
		color: var(--text-secondary) !important;
		line-height: 1.5;
	}

	:global(.info-box) {
		background: var(--accent-bg);
		border: 1px solid rgba(52, 211, 153, 0.2);
		border-radius: 12px;
		padding: 24px;
		margin-top: 40px;
	}

	:global(.info-box h3) {
		color: var(--accent-color) !important;
		margin-top: 0 !important;
		margin-bottom: 8px !important;
		font-size: 16px !important;
	}

	:global(.info-box p) {
		margin: 0 !important;
		font-size: 14px !important;
		color: var(--text-primary) !important;
	}
</style>
