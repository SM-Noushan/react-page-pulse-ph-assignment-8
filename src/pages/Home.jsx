import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Books from "../components/Books";

const Home = () => {
    const books = useLoaderData();
    return (
        <div className="my-12 md:mx-auto md:px-4">
            <Banner />
            <Books books={books} />
        </div>
    );
};

export default Home;