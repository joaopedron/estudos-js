function books (bookName) {
    var allBooks = {
        'JavaScript Remoto': {
            pages: 267,
            author: 'Ben Vinegar Anton Kovalyov',
            publisher: 'Novatec'
        },
        'JavaScript: O guia definitivo': {
            pages: 1062,
            author: 'David Flanagan',
            publisher: 'Novatec'
        },
        'Segredos do Ninja JavaScript': {
            pages: 233,
            author: ' John Resig & Bear Bibeault',
            publisher: 'Novatec'
        }
    };
    return !bookName ? allBooks : allBooks[bookName];
}

var book = books('JavaScript: O guia definitivo');

console.log('O livro [JavaScript: O guia definitivo] tem ' + book.pages + ' páginas!');
console.log('O autor do livro [JavaScript: O guia definitivo] é ' + book.author + '!');
console.log('O livro [JavaScript: O guia definitivo] foi publicado pela editora ' + book.publisher + '.');
