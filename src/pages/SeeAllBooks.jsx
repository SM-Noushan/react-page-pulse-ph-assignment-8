import { useLoaderData, useNavigation } from "react-router-dom";
import Loader from "../components/Loader";
import Button from "../components/Button";
import { useState } from "react";
import BookCard from "../components/BookCard";

const SeeAllBooks = () => {
    const [count, setCount] = useState(6);
    const navigation = useNavigation();
    const books = useLoaderData();
    const handleLoadMore = () => {
        setCount(count + 3);
    }
    if (navigation.state === 'loading') return <Loader />;
    return (
        <section className="min-h-[calc(100dvh-472px)] md:min-h-[calc(100dvh-342px)] font-work_sans my-12">
            <h1 className="text-center text-[40px] font-bold font-playfair_display mb-4 bg-dark-01/5 rounded-2xl py-10">Our Collection</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 *:mx-auto gap-6 *:w-[320px] md:*:min-w-[362px]">
                {
                    books.slice(0, count).map(book => <BookCard key={book.bookId} book={book} />)
                }
            </div>
            <div className="text-center my-12">
                {
                    (books.length != count) && <Button label={'Load more...'} handleOnClickParent={handleLoadMore} styles="bg-green-01 btn-md w-44 hover:bg-green-01/80 text-white" />
                }
            </div>
        </section>
    );
};

export default SeeAllBooks;