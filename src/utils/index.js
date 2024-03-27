import toast from 'react-hot-toast';
// load data
export const getBooks = type => {
    const books = localStorage.getItem(type);
    if (books)
        return JSON.parse(books);
    return [];
}

// store data
export const saveBook = (book, type) => {
    const books = getBooks(type);
    const isExists = books.find(b => b.bookId === book.bookId);
    if (isExists)
        return toast.error(`Already added to ${type} list!`)
    if (type === 'wish') {
        const books = getBooks('read');
        const isExists = books.find(b => b.bookId === book.bookId);
        if (isExists)
            return toast.error(`Unable to add already read book to wish list!`)
    }
    if (type === 'read')
        deleteBook(book.bookId);
    books.push(book);
    localStorage.setItem(type, JSON.stringify(books));
    return toast.success(`Successfully added to ${type} list!`);
}
// delete data
export const deleteBook = id => {
    const books = getBooks('wish');
    const remainingBooks = books.filter(b => b.bookId !== id);
    localStorage.setItem('wish', JSON.stringify(remainingBooks));
}