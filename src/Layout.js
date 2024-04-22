import React from 'react';
import Header from "./components/header/Header";
import "./Layout.css";

const Layout = ({ children }) => {
    return (
        <div className='layout-container'>
            <Header />
            <main className='main-content'>{children}</main>
        </div>
    )
}

export default Layout;