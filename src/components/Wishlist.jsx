import { useEffect, useState } from "react";
import { deleteBook, getBooks } from "../utils";
import BookListView from "./BookListView";
import NoData from "./NoData";
import toast from "react-hot-toast";

const Wishlist = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        setBooks(getBooks('wish'));
    }, [])
    const handleDelete = id => {
        deleteBook('wish', id);
        toast.success('Removed successfully');
        setBooks(getBooks('wish'));
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

export default Wishlist;