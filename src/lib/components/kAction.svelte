<script lang="ts">
	import {
		getKbarState,
		getKbarActions,
		getPlaceHolder,
		getKbarquery
	} from '$lib/model/context.svelte.js';
	import { focusOption } from '$lib/model/index.js';
	import type { KbarAction } from '$lib/types.js';

	interface Props {
		details: KbarAction;
		count: number;
	}

	let { details, count }: Props = $props();

	const kbarState = getKbarState();
	const jumpto = getKbarActions();
	const placeholder = getPlaceHolder();
	const ksearch = getKbarquery();
	let ele = $state<HTMLButtonElement | undefined>();

	function callback(): void {
		if (details?.nested) {
			placeholder.value = details.title;
			jumpto.value = details.nested;
			ksearch.value = '';
			return;
		}
		details?.callback?.();
		kbarState.value = false;
	}

	$effect(() => {
		if (ele) {
			function handleMouseMove(): void {
				const listbox = document.getElementById('k-listbox');
				if (listbox) {
					const options = listbox.querySelectorAll('button[role="option"]');
					focusOption(count - 1, options);
				}
			}
			ele.addEventListener('mousemove', handleMouseMove);
			return () => ele?.removeEventListener('mousemove', handleMouseMove);
		}
	});
</script>

<button
	id="kbar-option-{count}"
	aria-selected="false"
	role="option"
	class="action-button kbar-list-item"
	onclick={callback}
	bind:this={ele}
>
	{#if details?.parentTitle}
		<div class="parent-title">{details.parentTitle}..&RightAngleBracket; &nbsp;</div>
	{/if}
	<div class="">
		<div class="title">{details?.title}</div>
		{#if details?.subtitle}
			<div class="subtitle">{details.subtitle}</div>
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
