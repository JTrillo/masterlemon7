export class BookApiClient {
    async fetchBooks() {
        const url = 'http://localhost:8000/api/books/';
        const response = await fetch(url);
        if(!response.ok) {
            const error = await response.json();
            console.log(error);
            throw Error(response.statusText);
        }
        return await response.json();
    }
}
