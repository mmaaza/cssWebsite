// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Link } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
function ButtonGreenLarge({ urlLink, text }) {
    return (
        <>
            <Link to={urlLink} className="px-5 py-3 border-2 border-transparent bg-green-light mt-5 inline-block rounded-sm font-semibold text-green-dark text-sm md:text-base">{text}</Link>
        </>
    )
}

export default ButtonGreenLarge