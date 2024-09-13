// Import functions for applying themes, rendering books, and handling searches
import { applyTheme } from './theme.js';
import { renderBooks } from './render.js';
import { handleSearchSubmit } from './search.js';

// Export the setupEventListeners function to initialize all event listeners on the app
export const setupEventListeners = (books, authors, genres) => {
    // Open search overlay when the search button is clicked
    document.querySelector('[data-header-search]').addEventListener('click', () => {
        document.querySelector('[data-search-overlay]').open = true;
        document.querySelector('[data-search-title]').focus();
    });

    // Open settings overlay when the settings button is clicked
    document.querySelector('[data-header-settings]').addEventListener('click', () => {
        document.querySelector('[data-settings-overlay]').open = true;
    });

    // Close the active book detail modal when the close button is clicked
    document.querySelector('[data-list-close]').addEventListener('click', () => {
        document.querySelector('[data-list-active]').open = false;
    });

    // Handle theme changes from the settings form
    document.querySelector('[data-settings-form]').addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const { theme } = Object.fromEntries(formData);
        applyTheme(theme); // Apply the selected theme
        document.querySelector('[data-settings-overlay]').open = false;
    });

    // Handle search form submission and render the filtered books
    document.querySelector('[data-search-form]').addEventListener('submit', (event) => {
        const filteredBooks = handleSearchSubmit(event, books, authors, genres);
        const listContainer = document.querySelector('[data-list-items]');
        listContainer.innerHTML = ''; // Clear the current list of books
        renderBooks(filteredBooks, listContainer, authors); // Render the filtered books
        document.querySelector('[data-search-overlay]').open = false; // Close the search overlay
    });

    // Load more books when "Show more" is clicked (pagination)
    document.querySelector('[data-list-button]').addEventListener('click', () => {
        page += 1;
        renderBooks(books, document.querySelector('[data-list-items]'), authors, BOOKS_PER_PAGE, page);
    });
};