<svelte:head>

<title>Programmatic Functions</title>
</svelte:head>

# Programmatically toggle kbar

To toggle the state of the dialog:

```js
import { getKbarState } from 'kbar-svelte-mini';

let state = getKbarState();

// your toggle function
function toggleKbar() {
	$state = !$state;
}
```

In the correponding element:

```svelte
<button on:click={toggleKbar}>Open kbar</button>
```
