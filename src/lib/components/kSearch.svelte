<script>
	import { createEventDispatcher, onMount, tick } from 'svelte';
	import { focusOption } from '$lib/model/index.js';
	import { browser } from '$app/environment';
	import { getKbarquery, getPlaceHolder, getKbarState } from '$lib/model/context.js';
	const dispatch = createEventDispatcher();

	let placeholder = getPlaceHolder();
	let ksearch = getKbarquery();
	let ksearchEl;
	let state = getKbarState();

	export let showing;

	function search() {
		dispatch('search', $ksearch);
	}

	let activeDescendantId = null;

	$: {
		if ($placeholder && browser && ksearchEl) {
			ksearchEl.focus();
		}
	}

	$: {
		if ($state && browser && ksearchEl) {
			tick().then(() => {
				ksearchEl.focus();
				setTimeout(() => {
					ksearchEl.select();
				}, 200);
			});
		}
	}

	onMount(() => {
		// Initially focus and select the first option
		// options[0].focus();
		// Handle keyboard events
		ksearchEl.addEventListener('keydown', (event) => {
			const listbox = document.getElementById('k-listbox');
			const options = listbox.querySelectorAll('button[role="option"]');
			const focusedOption = listbox.querySelector('[aria-selected="true"]');
			const selectedIndex = Array.from(options).indexOf(focusedOption);
			// console.log(selectedIndex, focusedOption);
			let goto;
			switch (event.key) {
				case 'ArrowDown':
					event.preventDefault(); // Prevent browser scrolling
					goto = selectedIndex + 1;
					if (goto < options.length) {
						focusOption(goto, options);
					} else {
						goto = 0;
						focusOption(goto, options);
					}
					options[goto].scrollIntoView();

					// focusOption(selectedIndex + 1, options);
					break;
				case 'ArrowUp':
					event.preventDefault();
					goto = selectedIndex - 1;
					if (options.length > goto && goto > -1) {
						console.log(options.length, goto);
						options[goto].scrollIntoView();
						focusOption(goto, options);
					} else {
						goto = options.length - 1;
						focusOption(goto, options);
					}
					options[goto].scrollIntoView();

					break;
				case 'Enter':
					// const selectedElement = listbox.querySelector('[aria-selected="true"]');
					event.preventDefault();
					if (focusedOption) {
						focusedOption.click();
					}
				// Implement other keyboard shortcuts as needed (e.g., Home, End, Space, Shift+Up/Down)
			}
		});
	});
</script>

<div class="search-container">
	<input
		autofocus
		autocomplete="off"
		role="combobox"
		spellCheck="false"
		aria-controls="k-listbox"
		aria-expanded={showing}
		type="text"
		aria-activedescendant={activeDescendantId}
		name=""
		id=""
		bind:value={$ksearch}
		on:input={search}
		class="search"
		placeholder={$placeholder}
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
