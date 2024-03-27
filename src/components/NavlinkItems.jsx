import { NavLink } from "react-router-dom";

const NavlinkItems = () => {
    const active = 'lg:border lg:border-green-01 rounded-lg lg:px-5 lg:py-3.5 text-green-01 font-semibold';
    return (
        <>
            <NavLink to="/" className={({ isActive }) => isActive ? active : ''}>Home</NavLink>
            <NavLink to="/our-collection" className={({ isActive }) => isActive ? active : ''}>Our Collection</NavLink>
            <NavLink to="/listed-books" className={({ isActive }) => isActive ? active : ''}>Listed Books</NavLink>
            <NavLink to="/pages-to-read" className={({ isActive }) => isActive ? active : ''}>Pages to Read</NavLink>
        </>
    );
};

export default NavlinkItems;