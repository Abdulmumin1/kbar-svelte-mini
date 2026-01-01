import type { KbarAction } from '$lib/types.js';

class NameModel {
	private model: KbarAction[] = [];

	register(actions: KbarAction[]): void {
		this.model = actions;
	}

	getModel(): KbarAction[] {
		return this.model;
	}

	searchName(query: string, array: KbarAction[] = this.model): KbarAction[] {
		function searchRecursive(
			query: string,
			items: KbarAction[],
			parentTitle: string | null = null
		): KbarAction[] {
			let matches: KbarAction[] = [];

			for (const item of items) {
				const currentItem: KbarAction = { ...item, parentTitle: parentTitle ?? undefined };

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

export const kbModel = new NameModel();

export function focusOption(index: number, options: NodeListOf<Element>): void {
	for (let i = 0; i < options.length; i++) {
		const element = options[i];
		element.setAttribute('aria-selected', 'false');
		element.classList.remove('active');
	}

	if (options.length > 0) {
		options[index].setAttribute('aria-selected', 'true');
		options[index].classList.add('active');
	}
}

/** Dispatch event on click outside of node */
export function clickOutside(node: HTMLElement, callback: () => void) {
	const handleClick = (event: MouseEvent) => {
		if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
			callback?.();
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}
