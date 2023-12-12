
import React from 'react';
import Container from './Container';
import images from '../assets/images/imagese.jpg'
import img from '../assets/images/data.avif'
const Section = () => {
    return (
        
        <Container>
            
            <div className="hero lg:h-96 bg-base-200 my-4">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className="sm:text-center  lg:text-right ">
                        <p className='text-4xl animate-pulse '>
                            web development, whether
                        </p>
                        <p> <br /> it's about HTML, CSS, JavaScript, <br /> front-end frameworks (like React, Angular, or Vue.js),<br /> back-end development, databases,<br /> or any other web development topics, feel free to ask.</p>
                    </div>
                   
                        <div className='lg:relative backdrop-saturate-50'>
                            <img src={img}
                                className='h-60 w-96 border-4 animate-pulse lg:-mt-10' alt="" />
                            <div className='lg:absolute lg:-mt-24'>
                                <img src={images}
                                    className='h-36 sm:w-full lg:w-72 animate-pulse  sm:mt-4   lg:mx-64 border-4' alt="" />
                            </div>
                        </div> 
                    
                </div>
            </div>
            
        </Container>
      
    );
};

export default Section;