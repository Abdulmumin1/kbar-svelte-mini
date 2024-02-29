<script>
	import { page } from '$app/stores';
</script>

<div class="block">
	<div class="sidenav">
		<a href="/docs/example" class:highlight={$page.url.pathname == '/docs/example'}
			>Getting Started</a
		>
		<a href="/docs" class:highlight={$page.url.pathname == '/docs'}>Overview</a>
		<a href="/docs/usage" class:highlight={$page.url.pathname == '/docs/usage'}>Usage</a>
	</div>

	<div class="content">
		<slot />
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

		/* padding: px; */
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
		padding: 6px;
		position: sticky;
		top: 0;
	}

	:global(.highlight) {
		background-color: #005cc5;
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
