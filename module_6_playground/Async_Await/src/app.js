import { fetchFromAPI } from "./api/service";

const showBooksAndAuthors = async () => {
    // Parallel
    const [books, authors] = await Promise.all([
        fetchFromAPI(`/books/`),
        fetchFromAPI(`/authors/`)
    ])
    .catch(error => console.log(error.message));

    console.log(books, authors);

    // Sequential
    try {
        const b = await fetchFromApi(`/books/`);
        const a = await fetchFromApi(`/authors/`);

        console.log(b, a);
    } catch (error) {
        console.log(error.message);
    }
};

showBooksAndAuthors();