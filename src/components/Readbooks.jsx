import { getBooks } from "../utils";
import BookListView from "./BookListView";
import NoData from "./NoData";

const Readbooks = () => {
    const books = getBooks('read');
    if (!books.length) return <NoData />
    return (
        <>
            {
                books.map(book => <BookListView key={book.bookId} book={book} />)
            }
        </>
    );
};

export default Readbooks;