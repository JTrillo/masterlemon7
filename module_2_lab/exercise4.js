// READ BOOKS

function isBookRead(books, titleToSearch) {
    let book = books.find((element) => {
        return element.title === titleToSearch;
    });
    return book === undefined || book.isRead === false ? false : true;
}

// Testing function
const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];
console.log(isBookRead(books, "Devastación"));
console.log(isBookRead(books, "Canción de hielo y fuego"));
console.log(isBookRead(books, "Los Pilares de la Tierra"));