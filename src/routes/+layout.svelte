<script>
	import { KDialog, setKbarState } from '$lib/index.js';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	setKbarState();

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
				goto('/docs');
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
								console.log('history');
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
				},

				{
					id: 'history',
					title: 'History',
					callback: () => {
						console.log('history');
					}
				}
			]
		},
		{
			id: 'services',
			title: 'Services',
			callback: () => {
				console.log('Services');
			},
			nested: [
				{
					id: 'web-design',
					title: 'Web Design',
					callback: () => {
						console.log('Web Design');
					}
				},
				{
					id: 'seo',
					title: 'SEO',
					callback: () => {
						console.log('SEO');
					}
				}
			]
		},
		{
			id: 'blog',
			title: 'Blog',
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
	--shadow={'0px 0px 10px gray'}
/>

<slot />

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
</style>
