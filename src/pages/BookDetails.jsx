import { useLoaderData, useNavigation, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Button from "../components/Button";

const BookDetails = () => {
    const navigation = useNavigation();
    const books = useLoaderData();
    const { id } = useParams();
    const book = books.find(book => book.bookId == id);
    const {
        bookId,
        image,
        tags,
        bookName,
        author,
        category,
        rating,
        review,
        publisher,
        yearOfPublishing,
        totalPages
    } = book
    if (navigation.state === 'loading') return <Loader />
    return (
        <section className="min-h-[calc(100dvh-436px)] my-24 font-work_sans">
            <div className="flex gap-6 items-center w-full rounded-2xl *:w-1/2">
                <div className="rounded-2xl p-16  bg-dark-01/5">
                    <img src={`.${image}`} className="w-[425px] h-[564px] object-contain rounded-2xl" alt="book_cover" />
                </div>
                <div>
                    <h1 className="font-bold text-[40px] font-playfair_display mb-4">{bookName}</h1>
                    <h3 className="opacity-80 font-medium text-[28px]">By: {author}</h3>
                    <div className="border border-dashed border-dark-01/15 mt-6 mb-4"></div>
                    <h3 className="opacity-80 font-medium text-[28px]">{category}</h3>
                    <div className="border border-dashed border-dark-01/15 mt-4 mb-6"></div>
                    <p className="font-bold">Review : <span className="opacity-70 font-normal">{review}</span></p>
                    <div className="flex items-center gap-8">
                        <p className="font-bold">Tag</p>
                        <div className="flex gap-1.5 items-center my-6 *:px-2 *:py-2 *:bg-green-01/5 *:text-green-01 *:text-xs *:font-medium *:rounded-[30px]">
                            {
                                tags.map((tag, idx) => <p key={idx}>{`#${tag}`}</p>)
                            }
                        </div>
                    </div>
                    <div className="border border-dashed border-dark-01/15 mb-6"></div>
                    <table className="table">
                        <tbody className="*:*:py-1.5">
                            <tr>
                                <th className="pl-0 opacity-70">Number of Pages:</th>
                                <td className="font-semibold">{totalPages}</td>
                            </tr>
                            <tr>
                                <th className="pl-0 opacity-70">Published:</th>
                                <td className="font-semibold">{publisher}</td>
                            </tr>
                            <tr>
                                <th className="pl-0 opacity-70">Year of Publishing:</th>
                                <td className="font-semibold">{yearOfPublishing}</td>
                            </tr>
                            <tr>
                                <th className="pl-0 opacity-70">Rating:</th>
                                <td className="font-semibold">{rating}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flex gap-2 mt-8">
                        <Button label={'Read'} styles="btn-md px-4.5 hover:bg-dark-01/20 border border-dark-01 text-dark-01" />
                        <Button label={'Wishlist'} styles="bg-blue-01 btn-md px-4.5 hover:bg-blue-01/80 text-white" />
                    </div>
                </div>
            </div>
        </section >
    );
};

export default BookDetails;