/**
 * A Svelte action that teleports an element to the document body.
 * This is useful for modals, tooltips, etc., to avoid CSS stacking context issues.
 * @param {HTMLElement} node The DOM node to teleport.
 */
export function portal(node: HTMLElement) {
	// Move the node to the end of the document body
	document.body.appendChild(node);

	// Return a destroy method to clean up when the component is unmounted
	return {
		destroy() {
			if (document.body.contains(node)) {
				document.body.removeChild(node);
			}
		}
	};
} 