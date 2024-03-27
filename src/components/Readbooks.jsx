import { getBooks } from "../utils";
import BookListView from "./BookListView";

const Readbooks = () => {
    const books = getBooks('read');
    return (
        <>
            {
                books.map(book => <BookListView key={book.bookId} book={book} />)
            }
        </>
    );
};

export default Readbooks;