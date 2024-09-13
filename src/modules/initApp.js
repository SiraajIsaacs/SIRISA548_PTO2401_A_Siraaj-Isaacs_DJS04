// Import the functions for rendering, applying themes, and setting up events
import { renderBooks, renderOptions } from './render.js';
import { applyTheme } from './theme.js';
import { setupEventListeners } from './eventListeners.js';

// Export the initApp function so it can be called from scripts.js
export const initApp = (books, authors, genres) => {
    // Get the container where the list of books will be rendered
    const listContainer = document.querySelector('[data-list-items]');

    // Render the initial set of books on the page
    renderBooks(books, listContainer, authors);

    // Render dropdown options for genres and authors in the search form
    renderOptions(genres, document.querySelector('[data-search-genres]'), { value: 'any', label: 'All Genres' });
    renderOptions(authors, document.querySelector('[data-search-authors]'), { value: 'any', label: 'All Authors' });

    // Apply the initial theme based on user preferences (dark or light mode)
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = prefersDark ? 'night' : 'day';
    applyTheme(initialTheme);

    // Setup all event listeners (search, theme change, etc.)
    setupEventListeners(books, authors, genres);
};