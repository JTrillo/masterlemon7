// READ BOOKS w/ TYPESCRIPT

interface Book{
    title: string,
    isRead: boolean
}

const findBookByTitle = (books:Book[], titleToSearch:string):Book => {
    for(let book of books){
        if(book.title === titleToSearch) return book;
    }
    return undefined;
};

const isBookRead = (books:Book[], titleToSearch:string):boolean => {
    let book = findBookByTitle(books, titleToSearch);
    return book === undefined || book.isRead === false ? false : true;
};


// Testing function
const books:Book[] = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];
console.log(isBookRead(books, "Devastación"));
console.log(isBookRead(books, "Canción de hielo y fuego"));
console.log(isBookRead(books, "Los Pilares de la Tierra"));