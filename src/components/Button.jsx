import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ url = '#', label, styles = '' }) => {
    return (
        <Link to={url} className={`btn btn-xs md:btn-md md:font-semibold md:text-lg md:px-6 ${styles}`}>{label}</Link>
    );
};

export default Button;