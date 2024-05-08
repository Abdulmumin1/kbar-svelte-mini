<svelte:head>

<title>Getting Started</title>
</svelte:head>

## Getting Started

To set up a KBar-mini navigation system in your Svelte application, follow these steps:

### Step 1: Add to Root Layout

Include the KDialog component in your root layout file (layout.svelte):

```js
// layout.svelte
import { KDialog } from 'kbar-svelte-mini';
```

### Step 2: Additional Configuration

Due to safety design decisions, add the following function call in your layout.svelte:

```js
import { setKbarState } from 'kbar-svelte-mini';

setKbarState();
```

### Step 3: Define Actions

Create an array of actions that represent the navigation items in your KBar. Each action should have an **_id_** (optional), **_title_**, **_optional subtitle_**, and a **_callback_** function:

```js
let actions = [
  {
	id: 'home',
	title: 'Home',
	subtitle: 'Subtitle can help with more context',
	callback: () => {
		console.log('home');
	},
  },
// ... add more actions as needed
];

// Include the KDialog component with defined actions

<KDialog {actions} />
```

## Customization (Optional)

You can customize the appearance of the KBar-mini navigation system by adjusting the following variables:

- `--bg`: Change the background to fit your application.
- `--kbar-primary`: Primary color for your app, used for text and border highlight.
- `--kbar-gray`: Color for dimmed texts.
- `--kbar-search`: Search bar text color, primary color used in the absence.
- `--shadow`: Control the shadow of the dialog.

### Example:

```svelte
<KDialog
	{actions}
	--bg={bg}
	--kbar-primary={primary}
	--kbar-secondary={secondary}
	--kbar-border={border}
	--shadow={'0px 0px 10px gray'}
/>
```

Feel free to customize these variables according to your application's design.
