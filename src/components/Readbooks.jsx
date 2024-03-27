import { useEffect, useState } from "react";
import { deleteBook, getBooks } from "../utils";
import BookListView from "./BookListView";
import NoData from "./NoData";
import toast from "react-hot-toast";

const Readbooks = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        setBooks(getBooks('read'));
    }, [])
    const handleDelete = id => {
        deleteBook('read', id);
        toast.success('Removed successfully');
        setBooks(getBooks('read'));
    }
    if (!books.length) return <NoData />
    return (
        <>
            {
                books.map(book => <BookListView key={book.bookId} book={book} handleDelete={handleDelete} />)
            }
        </>
    );
};

export default Readbooks;