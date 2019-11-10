// READ BOOKS w/ TYPESCRIPT
var findBookByTitle = function (books, titleToSearch) {
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var book = books_1[_i];
        if (book.title === titleToSearch)
            return book;
    }
    return undefined;
};
var isBookRead = function (books, titleToSearch) {
    var book = findBookByTitle(books, titleToSearch);
    return book === undefined || book.isRead === false ? false : true;
};
// Testing function
var books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];
console.log(isBookRead(books, "Devastación"));
console.log(isBookRead(books, "Canción de hielo y fuego"));
console.log(isBookRead(books, "Los Pilares de la Tierra"));
