<script>
	import { onMount } from 'svelte';
	import { kbModel, clickOutside } from '$lib/model/index.js';
	import {
		getKbarState,
		getKbarActions,
		setKbarActions,
		getKbarquery,
		setKbarquery,
		setPlaceHolder,
		getPlaceHolder
	} from '$lib/model/context.js';
	import KSearch from './kSearch.svelte';
	import KCommads from './kCommads.svelte';

	export let actions;

	// kbModel.register(actions);

	let defPlaceholder = 'Search ..';
	setPlaceHolder(defPlaceholder);
	setKbarquery('');
	setKbarActions(actions);

	let currentlyShown = getKbarActions();
	let ksearch = getKbarquery();
	let kbarDialog;
	let state = getKbarState();
	let placeholder = getPlaceHolder();

	$: {
		try {
			if ($state === true) {
				kbarDialog.showModal();
				$ksearch = '';
				$placeholder = defPlaceholder;
				$currentlyShown = [...actions];
			} else {
				kbarDialog.close();
			}
		} catch (error) {}
	}

	function search(event) {
		if (event.detail) {
			if ($placeholder != defPlaceholder) {
				$currentlyShown = kbModel.searchName(event.detail, $currentlyShown);
				return;
			}
			$currentlyShown = kbModel.searchName(event.detail, actions);
		} else {
			$currentlyShown = [...actions];
			$placeholder = defPlaceholder;
		}
	}
	// export let o;
	function closeModal() {
		$state = false;
		// kbarDialog.close();
	}
	onMount(() => {
		document.addEventListener('keydown', function (event) {
			// Check if Ctrl (or Command on Mac) and K are pressed simultaneously
			if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
				event.preventDefault();
				$state = !$state;

				// Add your custom functionality here
			}
		});
	});
</script>

<dialog class="dialog" id="dialog" bind:this={kbarDialog} tabindex="-1">
	<div class="dialog-container" use:clickOutside on:click_outside={closeModal}>
		<KSearch on:search={search} />
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
