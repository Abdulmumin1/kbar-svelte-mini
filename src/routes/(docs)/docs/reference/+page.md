<svelte:head>

<title>Data Structure - kbar-svelte-mini</title>
</svelte:head>

# Data Structure

Reference for the action object structure used in kbar-svelte-mini.

## Action Object

Each action in the `actions` array is an object with the following properties. You can import the `KbarAction` type from the package:

```typescript
import type { KbarAction } from 'kbar-svelte-mini';
```

## Properties

### `id` (optional)

A unique identifier for the action.

```typescript
{ id: 'home', title: 'Home', ... }
```

**Type:** `string`

**Notes:** While optional, providing an `id` helps with debugging and can be useful for tracking which actions users select.

### `title` (required)

The main text displayed for the action.

```typescript
{ title: 'Go to Dashboard', ... }
```

**Type:** `string`

**Notes:** Keep titles concise and action-oriented. Users scan these quickly when searching.

### `subtitle` (optional)

Secondary text that provides additional context.

```typescript
{
  title: 'Settings',
  subtitle: 'Manage your preferences',
  ...
}
```

**Type:** `string`

**Notes:** Use subtitles to clarify what an action does or provide keyboard shortcuts.

### `callback` (conditional)

A function executed when the action is selected.

```typescript
{
  title: 'Print Page',
  callback: () => window.print()
}
```

**Type:** `() => void`

**Notes:** Either `callback` or `nested` should be provided. If neither is present, selecting the action does nothing. If both are present, `nested` takes priority.

### `nested` (optional)

An array of child actions. When selected, these replace the current list.

```typescript
{
  title: 'Theme',
  nested: [
    { id: 'light', title: 'Light', callback: () => setTheme('light') },
    { id: 'dark', title: 'Dark', callback: () => setTheme('dark') }
  ]
}
```

**Type:** `KbarAction[]`

**Notes:** Nested menus can go as deep as needed. The palette title updates to show the current parent context.

## Quick Reference Table

| Property   | Type       | Required    | Description           |
| ---------- | ---------- | ----------- | --------------------- |
| `id`       | `string`   | No          | Unique identifier     |
| `title`    | `string`   | **Yes**     | Display text          |
| `subtitle` | `string`   | No          | Secondary description |
| `callback` | `function` | Conditional | Action to perform     |
| `nested`   | `Action[]` | Conditional | Child actions         |

## TypeScript Types

If you're using TypeScript, you can import or define the action type:

```typescript
type KbarAction = {
	id?: string;
	title: string;
	subtitle?: string;
	callback?: () => void;
	nested?: KbarAction[];
};

// Usage
const actions: KbarAction[] = [
	{
		id: 'home',
		title: 'Home',
		callback: () => goto('/')
	}
];
```
