/**
 * Represents a single action in the command palette
 */
export interface KbarAction {
	/** Unique identifier for the action */
	id?: string;
	/** Display text for the action */
	title: string;
	/** Secondary description text */
	subtitle?: string;
	/** Function to execute when the action is selected */
	callback?: () => void;
	/** Child actions for nested menus */
	nested?: KbarAction[];
	/** Parent title (set internally for search results) */
	parentTitle?: string;
}

/**
 * Reactive state wrapper for kbar values
 */
export interface KbarState<T> {
	value: T;
}

/**
 * Props for the KDialog component
 */
export interface KDialogProps {
	/** Array of actions to display in the command palette */
	actions: KbarAction[];
}

/**
 * Props for the KAction component
 */
export interface KActionProps {
	/** The action details to display */
	details: KbarAction;
	/** The index of this action (1-based) */
	count: number;
}

/**
 * Props for the KSearch component
 */
export interface KSearchProps {
	/** Callback when search input changes */
	onsearch?: (query: string) => void;
	/** Whether the listbox is showing */
	showing?: boolean;
}
