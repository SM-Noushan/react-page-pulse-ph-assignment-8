import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Outlet } from "react-router-dom";
const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(1);
    return (
        <section className="my-20 min-h-[669vh]">
            <h1 className="text-center text-[40px] font-bold font-playfair_display mb-12 bg-dark-01/5 rounded-2xl py-10">Books</h1>
            <div className="text-center my-20">
                {/* <div className="dropdown"> */}
                <details className="dropdown dropdown-bottom">
                    <summary tabIndex={0} role="button" className="m-1 btn text-xl font-medium bg-green-01 hover:bg-green-01/80 text-white">Sort By<FaChevronDown />
                    </summary>
                    <ul tabIndex={0} className="menu dropdown-content z-[1] rounded-box w-40 space-y-2 -left-3">
                        <button className="cursor-pointer hover:bg-dark-01/15 rounded-md bg-dark-01/10 py-1">Rating</button>
                        <button className="cursor-pointer hover:bg-dark-01/15 rounded-md bg-dark-01/10 py-1">Number of ages</button>
                        <button className="cursor-pointer hover:bg-dark-01/15 rounded-md bg-dark-01/10 py-1">Publish year</button>
                    </ul>
                </details>
                {/* </div> */}
            </div>
            <div>
                <div>
                    <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap bg-gray-800 text-gray-100">
                        <button onClick={() => setTabIndex(1)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b  ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg border-dark-01/30`}>
                            <span>Read Books</span>
                        </button>
                        <button onClick={() => setTabIndex(2)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b ${tabIndex === 2 ? 'border border-b-0 rounded-t-lg ' : ''} rounded-t-lg border-dark-01/30`}>
                            <span>Wishlist Books</span>
                        </button>
                        <hr className="w-full border-dark-01/30 mt-12" />
                    </div>
                    <Outlet />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 *:mx-auto gap-6 *:w-[320px] md:*:min-w-[362px]">
                {
                    // books.slice(0, 6).map(book => <BookCard key={book.bookId} book={book} />)
                }
            </div>
            <div className="text-center mt-12">
                {/* <Button label={'See All Books'} url="#" styles="bg-green-01 btn-md w-44 hover:bg-green-01/80 text-white" /> */}
            </div>
        </section >
    );
};

export default ListedBooks;