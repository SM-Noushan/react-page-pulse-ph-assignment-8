import { useOutletContext } from "react-router-dom";
import BooklistMain from "./BooklistMain";

const Wishlist = () => {
    const { sortType, wishBooks, setWishBooks } = useOutletContext();
    return (
        <>
            <BooklistMain sortType={sortType} books={wishBooks} setBooks={setWishBooks} contentType="wish" />
        </>
    );
};

export default Wishlist;