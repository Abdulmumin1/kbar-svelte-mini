<svelte:head>

<title>Documentation - kbar-svelte-mini</title>
</svelte:head>

# Kbar Svelte Mini Documentation

Welcome to the kbar-svelte-mini documentation. Learn how to integrate a fully accessible, keyboard-first command palette into your Svelte 5 applications.

## Quick Start

1. **Install the package**

   Run the installation command in your terminal:

   ```bash
   npm install kbar-svelte-mini
   ```

2. **Define Actions**

   Create an array of actions. Each action requires an `id` and `title`.

   ```typescript
   import type { KbarAction } from 'kbar-svelte-mini';
   import { goto } from '$app/navigation';

   const actions: KbarAction[] = [
   	{
   		id: 'home',
   		title: 'Home',
   		callback: () => goto('/')
   	},
   	{
   		id: 'docs',
   		title: 'Documentation',
   		callback: () => goto('/docs')
   	}
   ];
   ```

3. **Add to layout**

   Import `KDialog` and add it to your root `+layout.svelte` file, passing in your actions.

   ```svelte
   <script>
   	import { KDialog, setKbarState } from 'kbar-svelte-mini';

   	let { children } = $props();

   	// Initialize the state
   	setKbarState();
   </script>

   <KDialog {actions} />

   {@render children()}
   ```
