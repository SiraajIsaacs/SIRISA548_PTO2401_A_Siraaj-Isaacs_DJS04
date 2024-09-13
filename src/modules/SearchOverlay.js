// src/modules/components/SearchOverlay.js
import { handleSearchSubmit } from './search.js';

export class SearchOverlay extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.shadowRoot.querySelector('[data-search-form]').addEventListener('submit', this.handleSubmit.bind(this));
  }

  handleSubmit(event) {
    const filteredBooks = handleSearchSubmit(event, this.books, this.authors, this.genres);
    const listContainer = document.querySelector('[data-list-items]');
    listContainer.innerHTML = ''; // Clear the current list of books
    filteredBooks.forEach(book => {
      const bookElement = document.createElement('book-preview');
      bookElement.setAttribute('id', book.id);
      bookElement.setAttribute('image', book.image);
      bookElement.setAttribute('title', book.title);
      bookElement.setAttribute('author', this.authors[book.author]);
      listContainer.appendChild(bookElement);
    });
    this.shadowRoot.querySelector('[data-search-overlay]').open = false; // Close the search overlay
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        /* Add styles here */
      </style>
      <dialog data-search-overlay>
        <form data-search-form>
          <!-- Search form elements -->
          <button type="submit">Search</button>
        </form>
      </dialog>
    `;
  }
}

customElements.define('search-overlay', SearchOverlay);