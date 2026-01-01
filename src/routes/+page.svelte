<script lang="ts">
	import { getKbarState } from '$lib/index.js';

	const kbarState = getKbarState();

	function openKbar(): void {
		kbarState.value = true;
	}
</script>

<div class="page">
	<header class="header">
		<div class="logo">kbar-svelte-mini</div>
		<nav class="nav">
			<a href="/docs">Docs</a>
			<a href="/docs/examples">Examples</a>
			<a href="https://github.com/Abdulmumin1/kbar-svelte-mini" target="_blank">GitHub</a>
		</nav>
	</header>

	<main class="main">
		<section class="intro">
			<h1>kbar-svelte-mini</h1>
			<p class="tagline">A command palette for Svelte applications</p>

			<div class="try-it">
				<button class="search-trigger" onclick={openKbar}>
					<span>Try it now...</span>
					<kbd>Ctrl+K</kbd>
				</button>
			</div>
		</section>

		<section class="section">
			<h2>What is a command palette?</h2>
			<p>
				A command palette (also called kbar, command bar, or quick actions) is a keyboard-driven
				interface that lets users quickly navigate and perform actions. You've probably used one in
				VS Code, Figma, Notion, or Linear - press <kbd>Ctrl+K</kbd> or <kbd>Cmd+K</kbd> and start typing.
			</p>
			<p>
				Instead of hunting through menus, users type what they want. It's faster, more accessible,
				and feels great to use.
			</p>
		</section>

		<section class="section">
			<h2>What does this library do?</h2>
			<p>
				kbar-svelte-mini gives you a ready-to-use command palette component for Svelte 5. You define
				an array of actions (navigation links, theme toggles, any function) and the library handles:
			</p>
			<ul>
				<li>
					<strong>Keyboard shortcuts</strong> - Opens with Ctrl+K, navigate with arrow keys, select with
					Enter
				</li>
				<li><strong>Search/filtering</strong> - Users type to filter actions by title</li>
				<li>
					<strong>Nested menus</strong> - Actions can have sub-actions, creating hierarchical navigation
				</li>
				<li><strong>Theming</strong> - Style it with CSS custom properties to match your app</li>
				<li>
					<strong>Accessibility</strong> - ARIA attributes, keyboard navigation, focus management
				</li>
			</ul>
		</section>

		<section class="section">
			<h2>Quick example</h2>
			<p>First, install the package:</p>
			<pre><code>npm install kbar-svelte-mini</code></pre>
			<p>Then add the component to your root layout:</p>
			<pre><code
					>{`<script>
  import { KDialog, setKbarState } from 'kbar-svelte-mini';

  setKbarState();

  let actions = [
    {
      id: 'home',
      title: 'Home',
      callback: () => goto('/')
    },
    {
      id: 'theme',
      title: 'Change Theme',
      nested: [
        { id: 'light', title: 'Light', callback: () => setTheme('light') },
        { id: 'dark', title: 'Dark', callback: () => setTheme('dark') }
      ]
    }
  ];
</script>

<KDialog {actions} />`}</code
				></pre>
		</section>

		<section class="section">
			<h2>When to use this</h2>
			<p>A command palette works well for:</p>
			<ul>
				<li><strong>Documentation sites</strong> - Quick navigation between pages</li>
				<li><strong>Dashboards</strong> - Jump to different sections, trigger actions</li>
				<li><strong>Admin panels</strong> - Search users, switch views, run commands</li>
				<li><strong>Any app with lots of navigation</strong> - Give power users a fast path</li>
			</ul>
			<p>
				It's not a replacement for regular navigation - it's an enhancement for users who prefer the
				keyboard.
			</p>
		</section>

		<section class="section cta">
			<a href="/docs" class="btn">Read the docs</a>
			<a href="/docs/examples" class="btn btn-secondary">See examples</a>
		</section>
	</main>

	<footer class="footer">
		<p>
			Built by <a href="https://yaqeen.me" target="_blank">Abdumumin</a> ·
			<a href="https://github.com/Abdulmumin1/kbar-svelte-mini" target="_blank">Source on GitHub</a>
		</p>
	</footer>
</div>

<style>
	:root {
		--text: #1a1a1a;
		--text-muted: #666;
		--bg: #fff;
		--accent: #34d399;
		--accent-hover: #2aa37a;
		--border: #e5e5e5;
		--code-bg: #f5f5f5;
	}

	.page {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		color: var(--text);
		line-height: 1.6;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 2rem;
		border-bottom: 1px solid var(--border);
	}

	.logo {
		font-weight: 700;
		font-size: 1.1rem;
		color: var(--accent);
	}

	.nav {
		display: flex;
		gap: 1.5rem;
	}

	.nav a {
		color: var(--text-muted);
		text-decoration: none;
		font-size: 0.9rem;
		font-weight: 500;
	}

	.nav a:hover {
		color: var(--accent);
	}

	.main {
		flex: 1;
		max-width: 680px;
		margin: 0 auto;
		padding: 3rem 2rem;
		width: 100%;
		box-sizing: border-box;
	}

	.intro {
		text-align: center;
		margin-bottom: 3rem;
		padding-bottom: 3rem;
		border-bottom: 1px solid var(--border);
	}

	.intro h1 {
		font-size: 2.5rem;
		font-weight: 700;
		margin: 0 0 0.5rem 0;
		letter-spacing: -1px;
	}

	.tagline {
		font-size: 1.25rem;
		color: var(--text-muted);
		margin: 0 0 2rem 0;
	}

	.try-it {
		display: flex;
		justify-content: center;
	}

	.search-trigger {
		display: flex;
		align-items: center;
		gap: 3rem;
		padding: 0.75rem 1.25rem;
		border: 1px solid var(--border);
		border-radius: 8px;
		background: var(--bg);
		color: var(--text-muted);
		font-size: 0.95rem;
		cursor: pointer;
		transition: all 0.15s ease;
	}

	.search-trigger:hover {
		border-color: var(--accent);
		color: var(--text);
	}

	.search-trigger kbd {
		font-size: 0.75rem;
		padding: 0.25rem 0.5rem;
		background: var(--code-bg);
		border: 1px solid var(--border);
		border-radius: 4px;
		font-family: inherit;
	}

	.section {
		margin-bottom: 2.5rem;
	}

	.section h2 {
		font-size: 1.35rem;
		font-weight: 600;
		margin: 0 0 1rem 0;
	}

	.section p {
		margin: 0 0 1rem 0;
		color: var(--text);
	}

	.section ul {
		margin: 0 0 1rem 0;
		padding-left: 1.5rem;
	}

	.section li {
		margin-bottom: 0.5rem;
	}

	kbd {
		display: inline-block;
		padding: 0.15rem 0.4rem;
		font-size: 0.8em;
		font-family: -apple-system, BlinkMacSystemFont, monospace;
		background: var(--code-bg);
		border: 1px solid var(--border);
		border-radius: 3px;
	}

	pre {
		background: var(--code-bg);
		border: 1px solid var(--border);
		border-radius: 8px;
		padding: 1.25rem;
		overflow-x: auto;
		font-size: 0.85rem;
		line-height: 1.5;
	}

	code {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
	}

	.cta {
		display: flex;
		gap: 1rem;
		justify-content: center;
		padding-top: 1rem;
	}

	.btn {
		display: inline-block;
		padding: 0.75rem 1.5rem;
		background: var(--accent);
		color: #fff;
		text-decoration: none;
		border-radius: 6px;
		font-weight: 600;
		font-size: 0.95rem;
		transition: background 0.15s ease;
	}

	.btn:hover {
		background: var(--accent-hover);
	}

	.btn-secondary {
		background: var(--text);
	}

	.btn-secondary:hover {
		background: #333;
	}

	.footer {
		border-top: 1px solid var(--border);
		padding: 1.5rem 2rem;
		text-align: center;
		color: var(--text-muted);
		font-size: 0.9rem;
	}

	.footer a {
		color: var(--text-muted);
	}

	.footer a:hover {
		color: var(--accent);
	}

	@media (max-width: 600px) {
		.header {
			flex-direction: column;
			gap: 1rem;
		}

		.intro h1 {
			font-size: 2rem;
		}

		.search-trigger {
			width: 100%;
			justify-content: space-between;
		}

		.cta {
			flex-direction: column;
		}

		.btn {
			text-align: center;
		}
	}
</style>
