// Function to handle the search form submission and filter books
export const handleSearchSubmit = (event, books, authors, genres) => {
    event.preventDefault(); // Prevent form from reloading the page
    const formData = new FormData(event.target); // Get form data
    const filters = Object.fromEntries(formData); // Convert form data to an object

    // Filter the books based on the search criteria
    const filteredBooks = books.filter(book => {
        const matchesTitle = !filters.title || book.title.toLowerCase().includes(filters.title.toLowerCase());
        const matchesAuthor = filters.author === 'any' || book.author === filters.author;
        const matchesGenre = filters.genre === 'any' || book.genres.includes(filters.genre);
        return matchesTitle && matchesAuthor && matchesGenre;
    });

    return filteredBooks;
};