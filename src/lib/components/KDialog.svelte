<script lang="ts">
	import { kbModel, clickOutside } from '$lib/model/index.js';
	import {
		getKbarState,
		getKbarActions,
		setKbarActions,
		getKbarquery,
		setKbarquery,
		setPlaceHolder,
		getPlaceHolder
	} from '$lib/model/context.svelte.js';
	import type { KbarAction } from '$lib/types.js';
	import KSearch from './kSearch.svelte';
	import KCommads from './kCommads.svelte';

	interface Props {
		actions: KbarAction[];
	}

	let { actions }: Props = $props();

	const defPlaceholder = 'Search ..';
	setPlaceHolder(defPlaceholder);
	setKbarquery('');
	setKbarActions([]);

	const currentlyShown = getKbarActions();
	const ksearch = getKbarquery();
	let kbarDialog = $state<HTMLDialogElement | undefined>();
	const kbarState = getKbarState();
	const placeholder = getPlaceHolder();

	$effect(() => {
		if (actions) {
			currentlyShown.value = [...actions];
		}
	});

	$effect(() => {
		if (kbarState.value === true) {
			kbarDialog?.showModal();
			ksearch.value = '';
			placeholder.value = defPlaceholder;
			currentlyShown.value = [...actions];
		} else {
			kbarDialog?.close();
		}
	});

	function search(query: string): void {
		if (query) {
			if (placeholder.value !== defPlaceholder) {
				currentlyShown.value = kbModel.searchName(query, currentlyShown.value);
				return;
			}
			currentlyShown.value = kbModel.searchName(query, actions);
		} else {
			currentlyShown.value = [...actions];
			placeholder.value = defPlaceholder;
		}
	}

	function closeModal(): void {
		kbarState.value = false;
	}

	$effect(() => {
		function handleKeydown(event: KeyboardEvent): void {
			// Check if Ctrl (or Command on Mac) and K are pressed simultaneously
			if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
				event.preventDefault();
				kbarState.value = !kbarState.value;
			}
		}
		document.addEventListener('keydown', handleKeydown);
		return () => document.removeEventListener('keydown', handleKeydown);
	});
</script>

<dialog class="dialog" id="dialog" bind:this={kbarDialog} tabindex="-1">
	<div class="dialog-container" use:clickOutside={closeModal}>
		<KSearch onsearch={search} />
		<KCommads />
	</div>
</dialog>

<style>
	:root {
		--bg: white;
	}

	.dialog[open] {
		animation: fade-in 0.2s ease-out;
	}

	.dialog {
		padding: 20px;
		border: 0;
		max-width: 600px;
		width: 100%;
		height: 500px;
		background-color: transparent;
		animation: fade-out 0.1s ease-out;
	}

	.dialog::backdrop {
		opacity: 0;
	}

	.dialog-container {
		/* height: 100; */
		max-height: 450px;
		background-color: var(--bg, white);
		width: 100%;
		padding: 0;
		display: flex;
		flex-direction: column;
		box-shadow: var(--shadow, 0px 0px 20px #99999921);
		border-radius: 9px;
		margin: 0;
	}

	@keyframes fade-in {
		0% {
			opacity: 0;
			scale: 1.03;
			display: none;
		}

		100% {
			opacity: 1;
			scale: 1;
			display: block;
		}
	}

	@keyframes fade-out {
		0% {
			opacity: 1;
			scale: 1.01;
			display: block;
		}

		100% {
			opacity: 0;
			scale: 1;
			display: none;
		}
	}
</style>
