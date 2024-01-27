// import {writable } from 'svelte/stores'

class nameModel {
	constructor() {
		this.model = [];
		// this.homemodel = [];
	}

	// Method to display information about the person
	register(actions) {
		this.model = actions;
	}

	getModel() {
		// const resultArray = [];
		return this.model;
	}

	// home(model) {
	// 	try {
	// 		this.homemodel = model;
	// 		this.model = [...this.homemodel, ...this.model];
	// 	} catch (error) {
	// 		return 'err';
	// 	}
	// }

	// getHome() {
	// 	return this.model;
	// }

	// addCategory(){

	// }

	searchName(query, array = this.model) {
		function searchRecursive(query, items, parentTitle = null) {
			let matches = [];

			for (let item of items) {
				const currentItem = { ...item, parentTitle };

				if (item.title && item.title.toLowerCase().includes(query.toLowerCase())) {
					matches.push(currentItem);
				}

				if (item.nested && item.nested.length > 0) {
					const nestedMatches = searchRecursive(query, item.nested, item.title);
					matches = matches.concat(nestedMatches);
				}
			}

			return matches;
		}

		return searchRecursive(query, array);
	}
}

function findNameInObject(obj) {
	if (obj.hasOwnProperty('title')) {
		return obj.title;
	} else if (obj.hasOwnProperty('parent')) {
		return obj.parent;
	}
	return undefined; // If the object doesn't have a name property
}

export let kbModel = new nameModel();

export function focusOption(index, options) {
	// console.log(selectedIndex);
	for (let i = 0; i < options.length; i++) {
		let element = options[i];
		element.setAttribute('aria-selected', 'false');
		element.classList.remove('active');
	}

	if (options.length > 0) {
		options[index].setAttribute('aria-selected', 'true');
		options[index].classList.add('active');
	}

	// activeDescendantId = options[index].id;
}

/** Dispatch event on click outside of node */
export function clickOutside(node) {
	const handleClick = (event) => {
		if (node && !node.contains(event.target) && !event.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('click_outside', node));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}
