import React from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '../Shared/Container';

const Blog = () => {
    return (
        <div>
            <Helmet>

                <title>Protfolio||Blog</title>
            </Helmet>
            <Container>
                <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                            1.I am up-to-date on the latest technologies and trends in web development.

                        </div>
                        <div className="collapse-content">
                            <p>Need a modern, responsive, and high-performing website? I can help! I am a
                                <br />professional React JS  developer with over 1 years of experience. I specialize in building custom websites using Tailwind CSS and Bootstrap.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            2 .Website Maintenance and Support
                        </div>
                        <div className="collapse-content">
                            <p>Need a modern, responsive, and high-performing website? I can help! I am a
                                <br />professional React JS  developer with over 1 years of experience. I specialize in building custom websites using Tailwind CSS and Bootstrap.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            3.Custom Web Applications
                        </div>
                        <div className="collapse-content">
                            <p>Need a modern, responsive, and high-performing website? I can help! I am a
                                <br />professional React JS  developer with over 1 years of experience. I specialize in building custom websites using Tailwind CSS and Bootstrap.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            4.
                            Here are some of the benefits you'll get when you choose me for your web development project
                        </div>
                        <div className="collapse-content">
                            <p>Need a modern, responsive, and high-performing website? I can help! I am a
                                <br />professional React JS  developer with over 1 years of experience. I specialize in building custom websites using Tailwind CSS and Bootstrap.</p>
                        </div>
                    </div>
                </div>
                
                {/* ------ */}
                <div className='my-5'>
                    <div className="chat chat-end">
                        <div className="chat-bubble chat-bubble-primary">I will design and develop a your website</div>
                    </div>
                    <div className="chat chat-end">
                        <div className="chat-bubble chat-bubble-secondary">Contact me to discuss your web development project</div>
                    </div>
                    <div className="chat chat-end">
                        <div className="chat-bubble chat-bubble-accent">bug-free code and offer ongoing support!</div>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default Blog;