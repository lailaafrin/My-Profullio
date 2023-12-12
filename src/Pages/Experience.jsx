import React from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '../Shared/Container';


const Experience = () => {
    const handleButtonClick = () => {
        
        window.location.href = 'https://tour-as-12.web.app/';
    };

    const handleButtonClickTow = () => {
        
 window.location.href = 'https://private-route-467bc.firebaseapp.com/';
    };
    const handleButtonClickThree = () => {

        window.location.href = 'https://chic-kleicha-0f917e.netlify.app/';
    };
    return (
        <div>
            <Helmet>

                <title>Protfolio||Experience</title>
            </Helmet>
            <Container>
                <div className='flex justify-around'>
                    <div>
                        <p className='text-3xl underline'>
                            My Skills:
                        </p>
                        <br />
                        <p>
                            <p className="text-2xl">
                                1.HTML,
                            </p>
                            <p className="text-2xl">
                                2. CSS,
                            </p>
                            <p className="text-2xl">
                                3.JavaScript
                            </p>
                            <p className="text-2xl">
                                4.Bootstrap
                            </p>
                            <p className="text-2xl">
                                5.React
                            </p>
                            <p className="text-2xl">
                                6.Tailwind
                            </p>
                            <p className="text-2xl">
                                7.Material UI
                            </p>
                            <p className="text-2xl">
                                8.Firebase
                            </p>
                            <p className="text-2xl">
                                9.MongodB
                            </p>
                            <p className="text-2xl">
                                10.Node.js
                            </p>
                            <p className="text-2xl">
                                11.Front-end web development
                            </p>
                            <p className="text-2xl">
                                12.Web development
                            </p>

                        </p>
                    </div>
                    <div>
                        <p className='text-3xl underline'>My Project Live Link:</p>
                        <br />
                        <p className='text-2xl'>1.Project</p>
                        <div className=' '>
                            <button className='text-2xl underline' onClick={handleButtonClick}>Visit Link</button>
                        </div>
                        <br />

                    
                        <p className='text-2xl'>2.Project</p>
                        <div className=' '>
                            <button className='text-2xl underline' onClick={handleButtonClickTow}>Visit Link</button>
                        </div>
                        <br />
                        <p className='text-2xl'>3.Project</p>
                        <div className=' '>
                            <button className='text-2xl underline' onClick={handleButtonClickThree}>Visit Link</button>
                        </div>
                        <br />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Experience;