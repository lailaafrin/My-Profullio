import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import NavBar from '../Shared/NavBar';
import { Toaster } from 'react-hot-toast';

const MyLayOuts = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='pt-16  min -h-[calc(100vh-60)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer> 
            <Toaster />  
        </div>
    );
};

export default MyLayOuts;