import { SlLocationPin } from "react-icons/sl";
import { HiOutlineUsers } from "react-icons/hi2";
import { TbWallpaper } from "react-icons/tb";
import { CiSquareRemove } from "react-icons/ci";
import Button from "./Button";

const BookListView = ({ book, handleDelete = 'topG' }) => {
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
    } = book;
    const handleLocaleDelete = () => {
        handleDelete(bookId);
    }
    return (
        <div className="flex flex-col md:flex-row border border-dark-01/15 p-6 rounded-2xl gap-6">
            <div className="rounded-2xl mx-auto bg-dark-01/5 size-80 md:size-60 flex justify-center items-center relative">
                {
                    handleDelete !== 'topG' ? <button onClick={handleLocaleDelete} className="absolute z-10 top-1 md:top-3.5 right-9 transition hover:scale-105"><CiSquareRemove className="text-error" size={40} /></button> : ''
                }
                <img className="w-52 md:w-32 h-72 md:h-44" src={`.${image}`} alt="book-cover" />
            </div>
            <div className="flex-1 space-y-2 lg:space-y-4">
                <h1 className="font-bold text-2xl font-playfair_display text-center lg:text-start">{bookName}</h1>
                <h3 className="opacity-80 font-medium text-center lg:text-start">By: {author}</h3>
                <div className="flex flex-col lg:flex-row gap-1 lg:gap-6 items-center">
                    <p className="font-bold">Tag</p>
                    <div className="flex gap-x-1.5 items-center flex-wrap *:px-2 *:py-2 *:bg-green-01/5 *:text-green-01 *:text-sm md:*:text-base *:font-medium *:rounded-[30px] mx-2">
                        {
                            tags.map((tag, idx) => <p key={idx}>{`#${tag}`}</p>)
                        }
                    </div>
                    <div className="flex gap-1.5 items-center *:rounded-[30px]">
                        <SlLocationPin />
                        <p>Year of Publishing: {yearOfPublishing}</p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-1 lg:gap-6 items-center opacity-60">
                    <div className="flex gap-2 items-center">
                        <HiOutlineUsers />
                        <p>Publisher: {publisher}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <TbWallpaper className="mb-0.5" />
                        <p>Page {totalPages}</p>
                    </div>
                </div>
                <div className="border border-dashed border-dark-01/15"></div>
                <div className="grid grid-cols-3 md:grid-cols-12 gap-6">
                    <div className="col-span-2 md:col-span-5 lg:col-span-4">
                        <Button label={`Category: ${category}`} styles="btn-sm rounded-full w-full bg-blue-02/15 hover:bg-blue-02/30 text-blue-02 md:text-sm lg:text-base md:font-normal" />
                    </div>
                    <div className="md:col-span-4 lg:col-span-3">
                        <Button label={`Rating: ${rating}`} styles="btn-sm rounded-full w-full bg-orange-01/15 hover:bg-orange-01/30 text-orange-01 md:text-sm lg:text-base md:font-normal" />
                    </div>
                    <div className="col-span-3 mx-auto md:col-span-3">
                        <Button url={`/book/${bookId}`} label='View Details' styles="btn-sm rounded-full bg-green-01 hover:bg-green-01/80 text-white md:text-sm lg:text-base" />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BookListView;