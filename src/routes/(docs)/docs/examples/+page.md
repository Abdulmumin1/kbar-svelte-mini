<svelte:head>

<title>Examples</title>
</svelte:head>

## Examples

### Main Navigation Items

```javascript
{
   id: 'home',
   title: 'Home',
   subtitle: 'Subtitle can help with more context',
   callback: () => {
      console.log('home');
   }
},
// Additional main navigation items...
```

<!-- ### Sub-Items with Parent

```javascript
{
   id: 'youtube',
   title: 'Youtube',
   parent: 'Navigation',
   callback: () => {
      console.log('Services');
   }
},
// Additional sub-items with parent...
``` -->

### Nested Sub-Items

```javascript
{
   id: 'changetheme',
   title: 'Change theme',
   nested: [
      {
         id: 'light',
         title: 'Light',
         callback: () => {
            console.log('light');
         }
      },
      {
         id: 'dark',
         title: 'Dark',
         callback: () => {
            console.log('Dark');
         }
      }
   ]
},
// Additional items with nested sub-items...
```

Adhering to this data structure enables the creation of a versatile and organized menu system for applications. Customize the properties and callbacks as needed, providing a seamless navigation experience and enhancing user interaction.
