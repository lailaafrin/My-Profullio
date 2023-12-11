import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import NavBar from '../Shared/NavBar';

const MyLayOuts = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='pt-16  min -h-[calc(100vh-60)]'>
                <Outlet></Outlet>
            </div>
          <Footer></Footer>  
        </div>
    );
};

export default MyLayOuts;