<svelte:head>

<title>Programmatic Control - kbar-svelte-mini</title>
</svelte:head>

# Programmatic Control

Control the command palette programmatically from any component in your app.

## Toggle the Palette

Use `getKbarState()` to access the kbar state and toggle it from anywhere:

```svelte
<script lang="ts">
	import { getKbarState } from 'kbar-svelte-mini';

	const kbarState = getKbarState();

	function toggleKbar(): void {
		kbarState.value = !kbarState.value;
	}

	function openKbar(): void {
		kbarState.value = true;
	}

	function closeKbar(): void {
		kbarState.value = false;
	}
</script>

<button onclick={toggleKbar}>Toggle Command Palette</button>
<button onclick={openKbar}>Open</button>
<button onclick={closeKbar}>Close</button>
```

## Important Notes

1. **Call `setKbarState()` first** - The state must be initialized in your root layout before you can use `getKbarState()` in child components.

2. **Context-based** - The state is stored in Svelte's context, so `getKbarState()` must be called during component initialization (not inside event handlers or async functions).

```svelte
<script lang="ts">
	import { getKbarState } from 'kbar-svelte-mini';

	// Correct: called at component initialization
	const kbarState = getKbarState();

	function handleClick(): void {
		// Correct: use the already-retrieved state
		kbarState.value = true;
	}
</script>
```

## Example: Search Button

A common pattern is adding a search button that opens the palette:

```svelte
<script lang="ts">
	import { getKbarState } from 'kbar-svelte-mini';

	const kbarState = getKbarState();
</script>

<button class="search-trigger" onclick={() => (kbarState.value = true)}>
	<span>Search...</span>
	<kbd>Ctrl+K</kbd>
</button>

<style>
	.search-trigger {
		display: flex;
		align-items: center;
		gap: 2rem;
		padding: 0.5rem 1rem;
		border: 1px solid #ddd;
		border-radius: 0.5rem;
		background: #f5f5f5;
		cursor: pointer;
		transition: all 0.2s;
	}

	.search-trigger:hover {
		border-color: #bbb;
		background: #eee;
	}

	kbd {
		font-size: 0.75rem;
		padding: 0.25rem 0.5rem;
		background: #e5e5e5;
		border-radius: 0.25rem;
		font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
	}
</style>
```
