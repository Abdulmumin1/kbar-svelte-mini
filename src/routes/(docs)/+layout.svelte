<div class="block">
	<div>
		<div class="sidenav">
			<a href="/docs">Overview</a>
			<a href="/docs/usage">Usage</a>
			<a href="/docs/example">Example</a>
		</div>
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
