import { useOutletContext } from "react-router-dom";
import BooklistMain from "./BooklistMain";

const Readbooks = () => {
    const { sortType, readBooks, setReadBooks } = useOutletContext();
    return (
        <>
            <BooklistMain sortType={sortType} books={readBooks} setBooks={setReadBooks} contentType="read" />
        </>
    );
};

export default Readbooks;