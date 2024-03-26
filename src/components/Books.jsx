import BookCard from "./BookCard";
import Button from "./Button";

const Books = ({ books, styles = "" }) => {
    return (
        <section className="my-20">
            <h1 className={`text-center text-[40px] font-bold font-playfair_display mb-12 ${styles}`}>This is Books</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 *:mx-auto gap-6 *:w-[320px] md:*:min-w-[362px]">
                {
                    books.slice(0, 6).map(book => <BookCard key={book.bookId} book={book} />)
                }
            </div>
            <div className="text-center mt-12">
                {
                }
                <Button label={'See All Books'} url="#" styles="bg-green-01 btn-md w-44 hover:bg-green-01/80 text-white" />
            </div>
        </section>
    );
};

export default Books;