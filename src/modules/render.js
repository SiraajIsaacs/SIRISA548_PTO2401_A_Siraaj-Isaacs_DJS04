// Function to render a list of books on the page
export const renderBooks = (books, container, authors, limit = 36, page = 1) => {
    // Create a document fragment to batch DOM changes (performance optimization)
    const fragment = document.createDocumentFragment();

    // Get the subset of books to display (for pagination)
    const booksToShow = books.slice((page - 1) * limit, page * limit);

    // Loop through the books and create a preview button for each one
    for (const { author, id, image, title } of booksToShow) {
        const element = createBookPreview(id, image, title, authors[author]);
        fragment.appendChild(element);
    }

    // Append the fragment to the DOM container (displaying the books)
    container.appendChild(fragment);
};

// Function to create a preview button for a single book
export const createBookPreview = (id, image, title, author) => {
    const element = document.createElement('button');
    element.classList = 'preview';
    element.setAttribute('data-preview', id);

    // Set the inner HTML of the button with the book's image and title
    element.innerHTML = `
        <img class="preview__image" src="${image}" />
        <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            <div class="preview__author">${author}</div>
        </div>`;
    return element;
};

// Function to render dropdown options (e.g., for genres and authors)
export const renderOptions = (options, container, defaultOption = { value: 'any', label: 'All' }) => {
    const fragment = document.createDocumentFragment();

    // Create and append the default "All" option (e.g., 'All Genres')
    const firstOption = document.createElement('option');
    firstOption.value = defaultOption.value;
    firstOption.innerText = defaultOption.label;
    fragment.appendChild(firstOption);

    // Loop through the options and create an <option> element for each
    for (const [id, name] of Object.entries(options)) {
        const option = document.createElement('option');
        option.value = id;
        option.innerText = name;
        fragment.appendChild(option);
    }

    // Append the options to the container (dropdown menu)
    container.appendChild(fragment);
};