import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Books from "../components/Books";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

const Home = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div className="my-12 md:mx-auto md:px-4">
            <Banner />
            {
                books.length ?
                    <Books books={books} />
                    :
                    <Loader />
            }
        </div>
    );
};

export default Home;