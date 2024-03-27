import { getBooks } from "../utils";
import BookListView from "./BookListView";

const Wishlist = () => {
    const books = getBooks('wish');
    return (
        <div>
            <BookListView />
        </div>
    );
};

export default Wishlist;