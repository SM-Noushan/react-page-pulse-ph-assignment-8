import { useEffect, useState } from "react";
import { deleteBook, getBooks } from "../utils";
import BookListView from "./BookListView";
import NoData from "./NoData";
import toast from "react-hot-toast";
import { useOutletContext } from "react-router-dom";
import Loader from "./Loader";

const Readbooks = () => {
    const { sortType, readBooks, setReadBooks } = useOutletContext();
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        setLoader(true);
        setReadBooks(getBooks('read'));
        setLoader(false);
    }, [])
    useEffect(() => {
        if (sortType === 'default')
            return;
        setLoader(true);
        setReadBooks([...getBooks('read').sort((a, b) => {
            return b[sortType] - a[sortType];
        })]);
        setLoader(false);
    }, [sortType])
    const handleDelete = id => {
        deleteBook('read', id);
        toast.success('Removed successfully');
        setReadBooks(getBooks('read'));
    }
    return (
        <>
            {
                loader ?
                    <Loader />
                    :
                    !readBooks.length ?
                        <NoData />
                        :
                        readBooks.map(book => <BookListView key={book.bookId} book={book} handleDelete={handleDelete} />)
            }
        </>
    );
};

export default Readbooks;