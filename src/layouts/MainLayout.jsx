import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../utils/ScrollToTop";

const MainLayout = () => {
    return (
        <>
            <ScrollToTop>
                <div className="max-w-[425px] md:container xl:max-w-[1170px] mx-auto text-dark-01 py-2.5">
                    <Navbar />
                    <Outlet />
                </div>
                <Footer />
            </ScrollToTop>
        </>
    );
};
export default MainLayout;