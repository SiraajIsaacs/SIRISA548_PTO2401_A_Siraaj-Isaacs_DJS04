// Import the initApp function that starts the app.
import { initApp } from './initApp.js';

// Import data from data.js
import { books, authors, genres } from '../data/data.js';

// Initialize the app with data from data.js
initApp(books, authors, genres);