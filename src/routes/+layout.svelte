<script>
	import { KDialog, setKbarState, getKbarState } from '$lib/index.js';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	setKbarState();

	let state = getKbarState();

	function toggle() {
		$state = !$state;
	}

	let theme = 'lightTheme';

	let themes = {
		darkTheme: {
			bg: '#0c0a09',
			primary: 'white',
			secondary: '#999',
			border: '3px'
		},
		lightTheme: {
			bg: '#ffffff',
			primary: 'black',
			secondary: '#95a5a6',
			border: '2px'
		},
		forestTheme: {
			bg: '#2c3e50',
			primary: '#27ae60',
			secondary: '#138d75',
			border: '4px'
		},
		oceanTheme: {
			bg: '#3498db',
			primary: '#2980b9',
			secondary: '#1f618d',
			border: '3px'
		},
		fireTheme: {
			bg: '#e74c3c',
			primary: '#d35400',
			secondary: '#c0392b',
			border: '2px'
		},
		earthTheme: {
			bg: '#8e44ad',
			primary: '#9b59b6',
			secondary: '#5d3c6a',
			border: '3px'
		},
		skyTheme: {
			bg: '#3498db',
			primary: '#1abc9c',
			secondary: '#16a085',
			border: '2px'
		},
		sunriseTheme: {
			bg: '#f39c12',
			primary: '#e67e22',
			secondary: '#b9770e',
			border: '4px'
		},
		cloudTheme: {
			bg: '#ecf0f1',
			primary: '#3498db',
			secondary: '#bdc3c7',
			border: '3px'
		},
		chocolateTheme: {
			bg: '#d35400',
			primary: '#8e44ad',
			secondary: '#6c3483',
			border: '2px'
		}
	};

	let actions = [
		{
			id: 'home',
			title: 'Home',
			subtitle: 'Subtitle can help with more context',
			callback: () => {
				console.log('home');
			}
		},
		{
			id: 'contact',
			title: 'Contact',
			callback: () => {
				window.location.href = 'https://yaqeen.me';
			}
		},
		{
			id: 'blog',
			title: 'Blog',
			callback: () => {
				console.log('blog');
			}
		},
		{
			id: 'twitter',
			title: 'Twitter',
			subtitle: '@abdulmuminyqn',
			callback: () => {
				console.log('twitter');
			}
		},
		{
			id: 'services',
			title: 'Services',
			callback: () => {
				console.log('Services');
			}
		},
		{
			id: 'youtube',
			title: 'Youtube',
			parent: 'Navigation',
			callback: () => {
				console.log('Services');
			}
		},
		{
			id: 'changetheme',
			title: 'Change theme',
			nested: [
				{
					id: 'light',
					title: 'Light',
					callback: () => {
						console.log('light');
					}
				},
				{
					id: 'dark',
					title: 'Dark',
					callback: () => {
						console.log('Dark');
					}
				}
			]
		}
	];

	let testData = [
		{
			id: 'home',
			title: 'Home',
			subtitle: 'Subtitle can help with more context',
			callback: () => {
				goto('/');
			}
		},
		{
			id: 'about',
			title: 'About',
			nested: [
				{
					id: 'team',
					title: 'Team',
					nested: [
						{
							id: 'abdul',
							title: 'Abdumumin Abdulkarim',
							subtitle: 'author',
							callback: () => {
								window.location.href = 'yaqeen.me';
							}
						},
						{
							id: 'kamal',
							title: 'Kamal',
							subtitle: 'design & ux researcher',
							callback: () => {
								console.log('history');
							}
						}
					]
				}
			]
		},

		{
			id: 'blog',
			title: 'Blog',
			subtitle: 'For demo purpose only',
			nested: [
				{
					id: 'article1',
					title: 'Introduction to Web Development',
					callback: () => {
						console.log('Introduction to Web Development');
					}
				},
				{
					id: 'article2',
					title: 'Best Practices for SEO',
					callback: () => {
						console.log('Best Practices for SEO');
					}
				}
			]
		},
		{
			id: 'documentation',
			title: 'Documentation',
			nested: [
				{
					id: 'getting-started',
					title: 'Getting Started',
					callback: () => {
						goto('/docs');
					}
				},
				{
					id: 'api-reference',
					title: 'Usage',
					callback: () => {
						goto('/docs/usage');
					}
				},
				{
					id: 'example-demo',
					title: 'Example',
					callback: () => {
						goto('/docs/example');
					}
				}
			]
		},
		{
			id: 'contact',
			title: 'Contact',
			callback: () => {
				window.location.href = 'https://yaqeen.me';
			}
		},
		{
			id: 'changetheme',
			title: 'Change theme',
			nested: [
				{
					id: 'light',
					title: 'Light',
					callback: () => {
						theme = 'lightTheme';
						document.querySelector('html').classList = [];
						document.querySelector('html').classList = ['lightTheme'];
					}
				},
				{
					id: 'dark',
					title: 'Dark',
					callback: () => {
						theme = 'darkTheme';
						document.querySelector('html').classList = [];
						document.querySelector('html').classList = ['darkTheme'];
					}
				},
				{
					id: 'otherop',
					title: 'Other Options',
					nested: [
						{
							id: 'forest',
							title: 'Forest',
							callback: () => {
								theme = 'forestTheme';
							}
						},
						{
							id: 'ocean',
							title: 'Ocean',
							callback: () => {
								theme = 'oceanTheme';
							}
						},
						{
							id: 'fire',
							title: 'Fire',
							callback: () => {
								theme = 'fireTheme';
							}
						},
						{
							id: 'earth',
							title: 'Earth',
							callback: () => {
								theme = 'earthTheme';
							}
						},
						{
							id: 'sky',
							title: 'Sky',
							callback: () => {
								theme = 'skyTheme';
							}
						},
						{
							id: 'sunrise',
							title: 'Sunrise',
							callback: () => {
								theme = 'sunriseTheme';
							}
						},
						{
							id: 'cloud',
							title: 'Cloud',
							callback: () => {
								theme = 'cloudTheme';
							}
						}
					]
				}
			]
		}
	];

	let bg = themes[theme].bg;
	let primary = themes[theme].primary;
	let secondary = themes[theme].secondary;
	let border = themes[theme].border;

	$: {
		if (theme) {
			bg = themes[theme].bg;
			primary = themes[theme].primary;
			secondary = themes[theme].secondary;
			border = themes[theme].border;
		}
	}
</script>

<KDialog
	actions={testData}
	--bg={bg}
	--kbar-primary={primary}
	--kbar-secondary={secondary}
	--kbar-border={border}
/>

<div class="layout">
	<div class="relative">
		<h1 class="center"><button class="button" on:click={toggle}>KBar</button></h1>
	</div>

	<div class="command">npm i kbar-svelte-mini</div>
	<blockquote>Try it out - press <code>ctrl+k/cmd+k </code>or click the button above</blockquote>

	<div class="block">
		<div class="content">
			<slot />
		</div>
	</div>

	<div style="margin-bottom: 10px;">
		kbar-svelte-mini by <a
			href="https://twitter.com/intent/follow?screen_name=abdulmuminyqn"
			target="_blank">@abdulmuminyqn</a
		>
	</div>
</div>

<style>
	:global(.shiki) {
		padding: 30px 20px;
		border-radius: 10px;
		/* width: 100%; */
	}

	:global(blockquote) {
		border-left: 5px solid black;
		/* background-color: orange; */
		padding: 0px 10px;
		margin: 0;
	}

	:global(code) {
		font-size: 0.9rem;
		border-radius: 3px;
		color: #005cc5;
	}

	:global(pre > code) {
		background-color: inherit;
	}

	.layout {
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 10px;
		align-items: center;
		justify-content: center;
		padding: 10px;
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
		/* padding: 1px; */
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
