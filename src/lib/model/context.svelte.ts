import { getContext, setContext } from 'svelte';
import type { KbarAction, KbarState } from '$lib/types.js';

export function setKbarState(initialState: boolean = false): void {
	let state = $state(initialState);
	const kbarState: KbarState<boolean> = {
		get value() {
			return state;
		},
		set value(v: boolean) {
			state = v;
		}
	};
	setContext('kbarstate', kbarState);
}

export function getKbarState(): KbarState<boolean> {
	return getContext<KbarState<boolean>>('kbarstate');
}

export function setKbarActions(initialActions: KbarAction[]): void {
	let actions = $state(initialActions);
	const kbarActions: KbarState<KbarAction[]> = {
		get value() {
			return actions;
		},
		set value(v: KbarAction[]) {
			actions = v;
		}
	};
	setContext('kbaractions', kbarActions);
}

export function getKbarActions(): KbarState<KbarAction[]> {
	return getContext<KbarState<KbarAction[]>>('kbaractions');
}

export function setPlaceHolder(text: string): void {
	let placeholder = $state(text);
	const kbarPlaceholder: KbarState<string> = {
		get value() {
			return placeholder;
		},
		set value(v: string) {
			placeholder = v;
		}
	};
	setContext('kbarplaceholder', kbarPlaceholder);
}

export function getPlaceHolder(): KbarState<string> {
	return getContext<KbarState<string>>('kbarplaceholder');
}

export function setKbarquery(text: string): void {
	let query = $state(text);
	const kbarQuery: KbarState<string> = {
		get value() {
			return query;
		},
		set value(v: string) {
			query = v;
		}
	};
	setContext('ksearch', kbarQuery);
}

export function getKbarquery(): KbarState<string> {
	return getContext<KbarState<string>>('ksearch');
}
