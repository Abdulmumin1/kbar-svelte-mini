<script lang="ts">
	import KAction from './kAction.svelte';
	import { getKbarActions } from '$lib/model/context.svelte.js';
	import { tick } from 'svelte';
	import { focusOption } from '$lib/model/index.js';

	const comboboxItems = 'k-listbox';

	const currentlyShown = getKbarActions();
	let container = $state<HTMLDivElement | undefined>();

	$effect(() => {
		if (container && currentlyShown.value) {
			tick().then(() => {
				const index = 0;
				const options = container!.querySelectorAll('button[role="option"]');
				focusOption(index, options);
			});
		}
	});
</script>

<div role="listbox" class="actions-container" id={comboboxItems} bind:this={container}>
	{#each currentlyShown.value as m, i (m.id ?? i)}
		<KAction details={m} count={i + 1} />
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
