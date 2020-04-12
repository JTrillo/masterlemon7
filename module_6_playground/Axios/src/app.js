import * as bookAPI from './API/bookAPI';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('button-retrieve-books')
        .addEventListener('click', (event) => {
            event.stopPropagation();
            bookAPI.getBooks();
        });
    
    document.getElementById('container-add-book-form-submit')
        .addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            const book = {
                title: document.getElementById('title').value,
                author: document.getElementById('author').value,
                genre: document.getElementById('genre').value,
                read: document.getElementById('read').checked,
            }
            bookAPI.postBook(book);
        });
});