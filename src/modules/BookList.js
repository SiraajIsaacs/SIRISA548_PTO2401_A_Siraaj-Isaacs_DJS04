// src/modules/components/BookList.js
import { renderBooks } from './render.js';

export class BookList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.page = 1;
    this.limit = 36;
  }

  static get observedAttributes() {
    return ['books', 'authors'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'books') this.books = JSON.parse(newValue);
    if (name === 'authors') this.authors = JSON.parse(newValue);
    this.render();
  }

  connectedCallback() {
    this.render();
    this.shadowRoot.querySelector('[data-list-button]').addEventListener('click', this.loadMore.bind(this));
  }

  loadMore() {
    this.page += 1;
    renderBooks(this.books, this.shadowRoot.querySelector('[data-list-items]'), this.authors, this.limit, this.page);
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        /* Add styles here */
      </style>
      <div data-list-items></div>
      <button data-list-button>Show more</button>
    `;
    renderBooks(this.books, this.shadowRoot.querySelector('[data-list-items]'), this.authors, this.limit, this.page);
  }
}

customElements.define('book-list', BookList);