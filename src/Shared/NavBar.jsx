import React from 'react';
import { NavLink } from 'react-router-dom';
import laila2 from '../assets/images/liala2.png'
import Container from './Container';

const NavBar = () => {
    return (
        <Container>
            <div className="navbar bg-base-200 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  w-52 ">
                            <li className="block p-1 font-sans text-sm font-bold leading-normal text-inherit antialiased">

                                <NavLink to='/' className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-pink-500" : ""
                                }>
                                    Home
                                </NavLink>
                            </li>
                            <li className="block p-1 font-sans text-sm font-bold leading-normal text-inherit antialiased">

                                <NavLink to='/aboutMe' className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-pink-500" : ""
                                }>
                                    AboutMe
                                </NavLink>
                            </li>

                            <li className="block p-1 font-sans text-sm font-bold leading-normal text-inherit antialiased">

                                <NavLink to='/contactMe' className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-pink-500" : ""
                                }>
                                    ContactMe
                                </NavLink>
                            </li>
                          
                            <li className="block p-1 font-sans text-sm font-bold leading-normal text-inherit antialiased">

                                <NavLink to='/experienceMe' className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-pink-500" : ""
                                }>
                                    Experience
                                </NavLink>
                            </li>
                            <li className="block p-1 font-sans text-sm font-bold leading-normal text-inherit antialiased">

                                <NavLink to='/blog' className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-pink-500" : ""
                                }>
                                    Blog
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <img src={laila2} className="h-10 w-10 border-2 rounded-full" alt="" />
                    </a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="block p-1 font-sans text-sm font-bold leading-normal text-inherit antialiased">

                            <NavLink to='/' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-pink-500" : ""
                            }>
                                Home
                            </NavLink>
                        </li>
                        <li className="block p-1 font-sans text-sm font-bold leading-normal text-inherit antialiased">

                            <NavLink to='/aboutMe' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-pink-500" : ""
                            }>
                                AboutMe
                            </NavLink>
                        </li>
                        

                        <li className="block p-1 font-sans text-sm font-bold leading-normal text-inherit antialiased">

                            <NavLink to='/contactMe' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-pink-500" : ""
                            }>
                                ContactMe
                            </NavLink>
                        </li>
                        
                        <li className="block p-1 font-sans text-sm font-bold leading-normal text-inherit antialiased">

                            <NavLink to='/experienceMe' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-pink-500" : ""
                            }>
                                Experience
                            </NavLink>
                        </li>
                        <li className="block p-1 font-sans text-sm font-bold leading-normal text-inherit antialiased">

                            <NavLink to='/blog' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-pink-500" : ""
                            }>
                                Blog
                            </NavLink>
                        </li>


                    </ul>
                </div>

            </div>
        </Container>
    );
};

export default NavBar;