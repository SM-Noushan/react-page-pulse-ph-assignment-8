import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { useLocation } from 'react-router-dom';
const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(1);
    const [sortType, setSortType] = useState('default');
    const [readBooks, setReadBooks] = useState([]);
    const [wishBooks, setWishBooks] = useState([]);
    useEffect(() => {
        if (location.pathname.includes('wish'))
            setTabIndex(2);
    }, [])
    let location = useLocation();
    return (
        <section className="my-12 font-work_sans">
            <h1 className="text-center text-[40px] font-bold font-playfair_display mb-4 bg-dark-01/5 rounded-2xl py-10">Books</h1>
            <div className="text-center mb-20">
                {/* <div className="dropdown"> */}
                <details className="dropdown dropdown-bottom">
                    <summary tabIndex={0} role="button" className="m-1 btn text-xl font-medium bg-green-01 hover:bg-green-01/80 text-white">Sort By<FaChevronDown />
                    </summary>
                    <ul tabIndex={0} className="menu dropdown-content z-[1] rounded-box w-40 space-y-2 -left-3">
                        <button onClick={() => setSortType('rating')} className="cursor-pointer hover:bg-dark-01/15 rounded-md bg-dark-01/10 py-1">Rating</button>
                        <button onClick={() => setSortType('totalPages')} className="cursor-pointer hover:bg-dark-01/15 rounded-md bg-dark-01/10 py-1">Number of pages</button>
                        <button onClick={() => setSortType('yearOfPublishing')} className="cursor-pointer hover:bg-dark-01/15 rounded-md bg-dark-01/10 py-1">Published year</button>
                    </ul>
                </details>
                {/* </div> */}
            </div>
            <div>
                <div className="mb-8 flex items-center overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap bg-gray-800 text-gray-100">
                    <Link to="" onClick={() => setTabIndex(1)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b  ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg border-dark-01/30`}>
                        <span>Read Books</span>
                    </Link>
                    <Link to="wishlist" onClick={() => setTabIndex(2)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b ${tabIndex === 2 ? 'border border-b-0 rounded-t-lg ' : ''} rounded-t-lg border-dark-01/30`}>
                        <span>Wishlist Books</span>
                    </Link>
                    <hr className="w-full border-dark-01/30 mt-12" />
                </div>
                <div className="space-y-6">
                    <Outlet context={{ sortType, readBooks, setReadBooks, wishBooks, setWishBooks }} />
                </div>
            </div>
        </section >
    );
};

export default ListedBooks;