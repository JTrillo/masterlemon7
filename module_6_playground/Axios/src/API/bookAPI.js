import axios from 'axios';
import { appendElement, createList } from "../view/uiBuilder";

const BASE_URL = 'http://localhost:8000';

const errorHandler = error => console.log(error);

export const getBooks = () => {
    axios.get(`${BASE_URL}/api/books/`)
        .then((result) => {
            const titles = result.data.map(b => b.title);
            appendElement(
                "books-container",
                createList(titles)
            );
        })
        .catch(errorHandler);
};

export const postBook = (book) => {
    axios.post(`${BASE_URL}/api/books/`, book)
        .then(() => getBooks())
        .catch(errorHandler);
}