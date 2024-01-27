<script>
	import KAction from './kAction.svelte';
	import { getKbarActions } from '$lib/model/context.js';
	import { onMount, tick } from 'svelte';
	import { focusOption } from '$lib/model/index.js';

	let comboboxItems = 'k-listbox';

	let currentlyShown = getKbarActions();
	let contanter;

	$: {
		if (contanter && $currentlyShown) {
			tick().then(() => {
				let index = 0;
				const options = contanter.querySelectorAll('button[role="option"]');
				focusOption(index, options);
			});
		}
	}
</script>

<div role="listbox" class="actions-container" id={comboboxItems} bind:this={contanter}>
	{#each $currentlyShown as m (crypto.randomUUID())}
		<KAction details={m} count={$currentlyShown.indexOf(m) + 1} />
	{/each}
</div>

<style>
	.actions-container {
		width: 100%;
		height: 100%;
		/* gap: 0; */
		max-height: 400px;
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		margin-top: 5px;
		box-sizing: border-box;
	}

	.actions-container:last-child {
		border-radius: 0px 0px 10px 10px;
		padding-bottom: 5px;
	}
</style>
