<script lang="ts">
	import { KDialog, setKbarState, getKbarState } from '$lib/index.js';
	import type { KbarAction } from '$lib/types.js';
	import { goto } from '$app/navigation';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();

	setKbarState();

	const kbarState = getKbarState();

	const testData: KbarAction[] = [
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
								window.location.href = 'https://yaqeen.me';
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
					id: 'example-demo',
					title: 'Example',
					callback: () => {
						goto('/docs/examples');
					}
				},
				{
					id: 'programmatic-functions',
					title: 'Programmatic Functions',
					callback: () => {
						goto('/docs/functions');
					}
				},
				{
					id: 'api-reference',
					title: 'Data Structure',
					callback: () => {
						goto('/docs/reference');
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
			id: 'Start-us',
			title: 'Star ⭐',
			subtitle: 'Leave a star on GitHub',
			callback: () => {
				window.location.href = 'https://github.com/Abdulmumin1/kbar-svelte-mini';
			}
		}
	];
</script>

<KDialog
	actions={testData}
	--bg="#ffffff"
	--kbar-primary="#34d399"
	--kbar-secondary="#9ca3af"
	--kbar-border="2px"
/>

<div class="app-root">
	{@render children()}
</div>

<style>
	:global(.shiki) {
		padding: 30px 20px;
		border-radius: 10px;
	}

	:global(blockquote) {
		border-left: 5px solid black;
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

	.app-root {
		width: 100%;
		min-height: 100vh;
	}
</style>
