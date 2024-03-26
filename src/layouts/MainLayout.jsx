import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div className="max-w-[425px] md:container xl:max-w-[1170px] mx-auto text-dark-01 py-2.5">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};
export default MainLayout;