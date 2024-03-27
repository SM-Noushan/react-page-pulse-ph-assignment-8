import { useEffect, useState } from "react";
import { deleteBook, getBooks } from "../utils";
import toast from "react-hot-toast";
import Loader from "./Loader";
import NoData from "./NoData";
import BookListView from "./BookListView";

const BooklistMain = ({ sortType, books, setBooks, contentType }) => {
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        setLoader(true);
        setBooks(getBooks(contentType));
        setLoader(false);
    }, [])
    useEffect(() => {
        if (sortType === 'default')
            return;
        setLoader(true);
        setBooks([...getBooks(contentType).sort((a, b) => {
            return b[sortType] - a[sortType];
        })]);
        setLoader(false);
    }, [sortType])
    const handleDelete = id => {
        deleteBook(contentType, id);
        toast.success('Removed successfully');
        setBooks(getBooks(contentType));
    }
    return (
        <>
            {
                loader ?
                    <Loader />
                    :
                    !books.length ?
                        <NoData />
                        :
                        books.map(book => <BookListView key={book.bookId} book={book} handleDelete={handleDelete} />)
            }
        </>
    );
};

export default BooklistMain;