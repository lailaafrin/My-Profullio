import React from 'react';
import Container from './Container';
import image from '../assets/images/liala.png'
import { FaLinkedin } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
    return (
        <Container>
            
            <footer className="footer p-10 bg-base-300 text-base-content mt-4">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    {/* <a className="link link-hover">Advertisement</a> */}
                </nav>
                <nav>
                  
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                   
                </nav>
                <nav>
                    <aside className="items-center grid-flow-col">
                        <img src={image} className='h-12 w-12 rounded-full border-2' alt="" />

                    </aside>
                    <header className="footer-title">Social</header>
                    <div className="grid grid-flow-col gap-4">
                        <Link to='https://www.linkedin.com/in/laila-afrin-9125961b2/'>
                            <FaLinkedin  className='text-2xl'/>
                        </Link>

                        <Link to='https://www.instagram.com/laillaafrin/'>
                           
                            <FaSquareInstagram className='text-2xl' />
                        </Link>

                        <Link to='https://www.facebook.com/laila.jamal.5203'>

                           
                            <FaFacebookF className='text-2xl' />
                        </Link>
                     
                    </div>
                </nav>
            </footer>
       </Container>
    );
};

export default Footer;