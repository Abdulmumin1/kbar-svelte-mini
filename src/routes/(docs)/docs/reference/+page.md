<svelte:head>

<title>Data Structure</title>
</svelte:head>

# Data Structure

## Overview

This documentation outlines the data structure for creating a dynamic navigation menu or similar interactive components. The structure employs an array of objects, each representing a menu item, to offer flexibility and customization options. Below is an in-depth look at the key properties used in this data structure.

### 1. id (String)

- **Description:**
  - A unique identifier for the menu item.
- **Usage:**
  - Used to distinguish and reference each item.

### 2. title (String)

- **Description:**
  - The display name or label of the menu item.
- **Usage:**
  - Represents the text visible to users.

### 3. subtitle (String) [Optional]

- **Description:**
  - Additional information or context for the menu item.
- **Usage:**
  - Provides supplementary details about the item, when applicable.

### 4. callback (Function)

- **Description:**
  - A function executed upon interaction with the menu item.
- **Usage:**
  - Defines the action or behavior associated with the menu item.

### 5. parent (String) [Optional]

- **Description:**
  - Identifies the parent item for nested sub-items.
- **Usage:**
  - Organizes items hierarchically, establishing parent-child relationships.

### 6. nested (Array of Objects) [Optional]

- **Description:**
  - Represents an array of sub-items nested under a parent item.
- **Usage:**
  - Allows for the creation of dropdowns or multi-level menu structures.
