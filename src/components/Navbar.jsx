import { Link } from "react-router-dom";
import NavlinkItems from "./NavlinkItems";
import Button from "./Button";

const Navbar = () => {
    return (
        <nav className="navbar font-work_sans">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm text-sm md:text-base dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 space-y-2 rounded-box w-52">
                        <NavlinkItems />
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl md:text-[28px] font-bold px-0 lg:px-4">Page Pulse</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 opacity-80 text-lg gap-4 items-center">
                    <NavlinkItems />
                </ul>
            </div>
            <div className="navbar-end gap-1.5 md:gap-2.5 md:flex">
                <Button label={'Sign in'} styles={'bg-green-01 hover:bg-green-01/80 text-white'} />
                <Button label={'Sign up'} styles={'bg-blue-01 hover:bg-blue-01/80 text-white'} />
            </div>
        </nav>
    );
};

export default Navbar;