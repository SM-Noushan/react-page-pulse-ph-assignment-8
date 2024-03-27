import { BsStar } from "react-icons/bs";
import { Link } from "react-router-dom";
const BookCard = ({ book }) => {
    const {
        bookId,
        image,
        tags,
        bookName,
        author,
        category,
        rating
    } = book;
    return (
        <Link to={`/book/${bookId}`} className="flex flex-col max-w-sm p-6 space-y-6 overflow-hidden rounded-2xl border border-dark-01/15 font-work_sans cursor-pointer transition group md:hover:scale-105 hover:border-dark-01/35">
            <div className="bg-dark-01/5 rounded-2xl h-60 flex justify-center items-center">
                <img src={image} alt="book-img" className="object-cover w-36 h-44 rounded-md" />
            </div>
            <div className="flex gap-1.5 items-center my-6 *:px-2 *:py-2 *:bg-green-01/5 *:text-green-01 *:text-xs *:font-medium *:rounded-[30px]">
                {
                    tags.map((tag, idx) => <p key={idx}>{tag}</p>)
                }
            </div>
            <div className="space-y-4">
                <h2 className="mb-1 text-2xl font-bold font-playfair_display group-hover:underline">{bookName}</h2>
                <p className="font-medium opacity-80">By: {author}</p>
            </div>
            {/* divider */}
            <div className="border border-dashed border-dark-01/15"></div>
            <div className="flex flex-wrap justify-between text-dark-01/80 font-medium">
                <p className="">{category}</p>
                <div className="flex items-center space-x-1">
                    <p className="">{rating}</p>
                    <BsStar className="mb-1" />
                </div>
            </div>
        </Link>
    );
};

export default BookCard;