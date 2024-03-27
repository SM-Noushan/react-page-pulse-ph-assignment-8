import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Button = ({ url = '#', label, styles = '', handleOnClickParent = null }) => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        if (url !== '#') {
            navigate(url);
        }
        if (handleOnClickParent !== null)
            handleOnClickParent();
    }
    return (
        <button onClick={handleOnClick} className={`btn btn-xs md:btn-md md:font-semibold font-work_sans md:text-lg md:px-6 ${styles}`}>{label}</button>
    );
};

export default Button;