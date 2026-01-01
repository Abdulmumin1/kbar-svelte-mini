<svelte:head>

<title>Examples - kbar-svelte-mini</title>
</svelte:head>

# Examples

Practical examples of action configurations for common use cases.

## Basic Navigation

Simple navigation items that redirect to different pages:

```typescript
import type { KbarAction } from 'kbar-svelte-mini';

let actions: KbarAction[] = [
	{
		id: 'home',
		title: 'Home',
		subtitle: 'Return to homepage',
		callback: () => goto('/')
	},
	{
		id: 'about',
		title: 'About',
		subtitle: 'Learn more about us',
		callback: () => goto('/about')
	},
	{
		id: 'contact',
		title: 'Contact',
		callback: () => goto('/contact')
	}
];
```

## Nested Menus

Create hierarchical navigation with nested items. When a user selects a parent item, the palette shows its children:

```typescript
import type { KbarAction } from 'kbar-svelte-mini';

let actions: KbarAction[] = [
	{
		id: 'settings',
		title: 'Settings',
		nested: [
			{
				id: 'profile',
				title: 'Profile Settings',
				callback: () => goto('/settings/profile')
			},
			{
				id: 'notifications',
				title: 'Notification Preferences',
				callback: () => goto('/settings/notifications')
			},
			{
				id: 'security',
				title: 'Security & Privacy',
				callback: () => goto('/settings/security')
			}
		]
	}
];
```

## Theme Switching

A common use case is allowing users to switch themes:

```typescript
import type { KbarAction } from 'kbar-svelte-mini';

let theme = $state<'light' | 'dark'>('light');

let actions: KbarAction[] = [
	{
		id: 'theme',
		title: 'Change Theme',
		nested: [
			{
				id: 'light',
				title: 'Light Mode',
				subtitle: 'Switch to light theme',
				callback: () => {
					theme = 'light';
					document.documentElement.classList.remove('dark');
				}
			},
			{
				id: 'dark',
				title: 'Dark Mode',
				subtitle: 'Switch to dark theme',
				callback: () => {
					theme = 'dark';
					document.documentElement.classList.add('dark');
				}
			}
		]
	}
];
```

## External Links

Open external URLs in new tabs:

```typescript
import type { KbarAction } from 'kbar-svelte-mini';

let actions: KbarAction[] = [
	{
		id: 'github',
		title: 'GitHub',
		subtitle: 'View source code',
		callback: () => window.open('https://github.com/user/repo', '_blank')
	},
	{
		id: 'docs',
		title: 'Documentation',
		subtitle: 'Read the full docs',
		callback: () => window.open('https://docs.example.com', '_blank')
	}
];
```

## Actions with Side Effects

Trigger any function - not just navigation:

```typescript
import type { KbarAction } from 'kbar-svelte-mini';

let actions: KbarAction[] = [
	{
		id: 'copy-url',
		title: 'Copy Page URL',
		subtitle: 'Copy current URL to clipboard',
		callback: async () => {
			await navigator.clipboard.writeText(window.location.href);
			// Show a toast notification
		}
	},
	{
		id: 'print',
		title: 'Print Page',
		callback: () => window.print()
	},
	{
		id: 'refresh',
		title: 'Refresh Data',
		subtitle: 'Reload data from server',
		callback: () => invalidateAll()
	}
];
```

## Deeply Nested Menus

You can nest menus as deep as needed:

```typescript
import type { KbarAction } from 'kbar-svelte-mini';

let actions: KbarAction[] = [
	{
		id: 'docs',
		title: 'Documentation',
		nested: [
			{
				id: 'getting-started',
				title: 'Getting Started',
				nested: [
					{
						id: 'installation',
						title: 'Installation',
						callback: () => goto('/docs/installation')
					},
					{
						id: 'configuration',
						title: 'Configuration',
						callback: () => goto('/docs/configuration')
					}
				]
			},
			{
				id: 'api',
				title: 'API Reference',
				callback: () => goto('/docs/api')
			}
		]
	}
];
```

## Complete Example

A full actions array combining multiple patterns:

```typescript
import { goto, invalidateAll } from '$app/navigation';
import type { KbarAction } from 'kbar-svelte-mini';

let actions: KbarAction[] = [
	// Navigation
	{
		id: 'home',
		title: 'Home',
		callback: () => goto('/')
	},
	{
		id: 'dashboard',
		title: 'Dashboard',
		callback: () => goto('/dashboard')
	},

	// Nested settings
	{
		id: 'settings',
		title: 'Settings',
		nested: [
			{
				id: 'profile',
				title: 'Profile',
				callback: () => goto('/settings/profile')
			},
			{
				id: 'theme',
				title: 'Theme',
				nested: [
					{
						id: 'light',
						title: 'Light',
						callback: () => setTheme('light')
					},
					{
						id: 'dark',
						title: 'Dark',
						callback: () => setTheme('dark')
					}
				]
			}
		]
	},

	// Actions
	{
		id: 'refresh',
		title: 'Refresh',
		subtitle: 'Reload page data',
		callback: () => invalidateAll()
	},

	// External
	{
		id: 'github',
		title: 'GitHub',
		subtitle: 'Star us on GitHub',
		callback: () => window.open('https://github.com', '_blank')
	}
];
```
