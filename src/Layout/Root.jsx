import React from 'react';
import Navbar from '../Components/Pages/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Pages/Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>  
    );
};

export default Root;