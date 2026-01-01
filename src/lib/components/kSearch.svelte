<script lang="ts">
	import { tick } from 'svelte';
	import { focusOption } from '$lib/model/index.js';
	import { getKbarquery, getPlaceHolder, getKbarState } from '$lib/model/context.svelte.js';

	interface Props {
		onsearch?: (query: string) => void;
		showing?: boolean;
	}

	let { onsearch, showing }: Props = $props();

	const placeholder = getPlaceHolder();
	const ksearch = getKbarquery();
	let ksearchEl = $state<HTMLInputElement | undefined>();
	const kbarState = getKbarState();
	let isBrowser = $state(false);

	function search(): void {
		onsearch?.(ksearch.value);
	}

	let activeDescendantId = $state<string | null>(null);

	$effect(() => {
		if (placeholder.value && isBrowser && ksearchEl) {
			ksearchEl.focus();
		}
	});

	$effect(() => {
		if (kbarState.value && isBrowser && ksearchEl) {
			tick().then(() => {
				ksearchEl?.focus();
				setTimeout(() => {
					ksearchEl?.select();
				}, 200);
			});
		}
	});

	$effect(() => {
		if (typeof window !== 'undefined') {
			isBrowser = true;
		}

		function handleKeydown(event: KeyboardEvent): void {
			const listbox = document.getElementById('k-listbox');
			if (!listbox) return;

			const options = listbox.querySelectorAll('button[role="option"]');
			const focusedOption = listbox.querySelector('[aria-selected="true"]');
			const selectedIndex = Array.from(options).indexOf(focusedOption as Element);
			let gotoIndex: number;

			switch (event.key) {
				case 'ArrowDown':
					event.preventDefault(); // Prevent browser scrolling
					gotoIndex = selectedIndex + 1;
					if (gotoIndex < options.length) {
						focusOption(gotoIndex, options);
					} else {
						gotoIndex = 0;
						focusOption(gotoIndex, options);
					}
					options[gotoIndex]?.scrollIntoView();
					break;
				case 'ArrowUp':
					event.preventDefault();
					gotoIndex = selectedIndex - 1;
					if (options.length > gotoIndex && gotoIndex > -1) {
						options[gotoIndex]?.scrollIntoView();
						focusOption(gotoIndex, options);
					} else {
						gotoIndex = options.length - 1;
						focusOption(gotoIndex, options);
					}
					options[gotoIndex]?.scrollIntoView();
					break;
				case 'Enter':
					event.preventDefault();
					if (focusedOption) {
						(focusedOption as HTMLElement).click();
					}
			}
		}

		if (ksearchEl) {
			ksearchEl.addEventListener('keydown', handleKeydown);
			return () => ksearchEl?.removeEventListener('keydown', handleKeydown);
		}
	});
</script>

<div class="search-container">
	<input
		autocomplete="off"
		role="combobox"
		spellcheck="false"
		aria-controls="k-listbox"
		aria-expanded={showing}
		type="text"
		aria-activedescendant={activeDescendantId}
		name=""
		id=""
		bind:value={ksearch.value}
		oninput={search}
		class="search"
		placeholder={placeholder.value}
		bind:this={ksearchEl}
	/>
</div>

<style>
	.search-container {
		position: sticky;
		top: 4px;
		background-color: var(--bg);
		margin: 0;
		/* padding: 10px; */
		overflow: hidden;
		border-radius: 5px;
	}
	.search {
		width: 100%;
		margin: 0;
		padding: 14px;

		/* border-radius: 20px; */
		overflow: hidden;
		background-color: var(--bg, white);
		color: var(--kbar-search, var(--kbar-primary, black));
		outline: 0;
		border: 0;
	}

	.search:focus {
		outline: 0;
		border: 0;
	}
</style>
