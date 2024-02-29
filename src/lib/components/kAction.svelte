<script>
	import {
		setKbarState,
		getKbarState,
		getKbarActions,
		getPlaceHolder,
		getKbarquery
	} from '$lib/model/context.js';
	import { focusOption } from '$lib/model/index.js';
	import { onMount } from 'svelte';
	// setKbarState();

	export let details;
	export let count;

	let nested = details?.nested;

	let state = getKbarState();
	let jumpto = getKbarActions();
	let placeholder = getPlaceHolder();
	let ksearch = getKbarquery();
	let ele;

	function callback() {
		if (nested) {
			$placeholder = details?.title;
			$jumpto = nested;
			$ksearch = '';
			return;
		}
		details?.callback();
		$state = false;
	}

	onMount(() => {
		ele.addEventListener('mousemove', () => {
			const listbox = document.getElementById('k-listbox');
			const options = listbox.querySelectorAll('button[role="option"]');
			focusOption(count - 1, options);
		});
	});
</script>

<button
	id="kbar-option-{count}"
	aria-selected="false"
	role="option"
	class="action-button kbar-list-item"
	on:click={callback}
	bind:this={ele}
>
	{#if details?.parentTitle}
		<div class="parent-title">{details?.parentTitle}..&RightAngleBracket; &nbsp;</div>
	{/if}
	<div class="">
		<div class="title">{details?.title}</div>
		{#if details?.subtitle}
			<div class="subtitle">{details?.subtitle}</div>
		{/if}
	</div>
</button>

<style>
	.action-button {
		width: 100%;
		background-color: var(--bg, white);
		border: 0;
		padding: 15px;
		margin: 0;
		text-align: left;
		cursor: pointer;
		display: flex;
		align-items: center;
		color: var(--kbar-primary, black);
		font-size: 1rem;
		/* box-sizing: content-box; */
	}

	.parent-title {
		color: var(--kbar-secondary, gray);
		/* filter: brightness(20); */
		font-size: 0.7rem;
	}

	:global(.active) {
		filter: brightness(90%);
		border-left: var(--kbar-border, 2.4px) solid var(--kbar-primary, black) !important;
	}

	.subtitle {
		font-size: 0.7rem;
		color: var(--kbar-secondary, gray);
	}
</style>
