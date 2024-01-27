import { writable } from 'svelte/store';
import { getContext, setContext } from 'svelte';

export function setKbarState(state = false) {
	let kbarstate = writable(state);
	setContext('kbarstate', kbarstate);
}

export function getKbarState() {
	return getContext('kbarstate');
}

export function setKbarActions(actions) {
	let kbarActions = writable(actions);
	setContext('kbaractions', kbarActions);
}

export function getKbarActions() {
	return getContext('kbaractions');
}

export function setPlaceHolder(text) {
	let kbarplaceholder = writable(text);
	setContext('kbarplaceholder', kbarplaceholder);
}

export function getPlaceHolder() {
	return getContext('kbarplaceholder');
}

export function setKbarquery(text) {
	let kbarplaceholder = writable(text);
	setContext('ksearch', kbarplaceholder);
}

export function getKbarquery() {
	return getContext('ksearch');
}
