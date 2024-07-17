import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Header from "./components/Header.jsx";

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default Layout;
