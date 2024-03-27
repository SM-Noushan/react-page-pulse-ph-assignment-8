import { useEffect, useState } from "react";
import { deleteBook, getBooks } from "../utils";
import BookListView from "./BookListView";
import NoData from "./NoData";
import toast from "react-hot-toast";
import { useOutletContext } from "react-router-dom";
import Loader from "./Loader";

const Wishlist = () => {
    const { sortType, wishBooks, setWishBooks } = useOutletContext();
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        setLoader(true);
        setWishBooks(getBooks('wish'));
        setLoader(false);
    }, [])
    useEffect(() => {
        if (sortType === 'default')
            return;
        setLoader(true);
        setWishBooks([...getBooks('wish').sort((a, b) => {
            return b[sortType] - a[sortType];
        })]);
        setLoader(false);
    }, [sortType])
    const handleDelete = id => {
        deleteBook('wish', id);
        toast.success('Removed successfully');
        setWishBooks(getBooks('wish'));
    }
    return (
        <>
            {
                loader ?
                    <Loader />
                    :
                    !wishBooks.length ?
                        <NoData />
                        :
                        wishBooks.map(book => <BookListView key={book.bookId} book={book} handleDelete={handleDelete} />)
            }
        </>
    );
};

export default Wishlist;