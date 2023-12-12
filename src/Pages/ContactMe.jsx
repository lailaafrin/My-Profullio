import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser';
import Container from '../Shared/Container';
import toast from 'react-hot-toast';

const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_sj022xa',
            'template_n7jymak', form.current,
            'WrojU9UihQqLhgTM9')
            .then((result) => {
                console.log(result.text);
                toast("Email sent successfully!");
            }, (error) => {
                console.log(error.text);
                toast("Failed to send email. Please try again.");
            });
    };

    return (
        <div>
            <Helmet>
                <title>ContactMe</title>
            </Helmet>

            <Container>
                <div className='flex justify-center items-center h-screen mb-8 -mt-8'>
                    <div className='shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-8'>
                        <h1 className="text-4xl font-bold text-center mb-4">Contact Me</h1>

                        <form ref={form} onSubmit={sendEmail}>
                            <div className="mb-4">
                                <label className="label">Name</label>
                                <input type="text"
                                    name="user_name"
                                    placeholder="Your name"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="label">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    placeholder="Your email"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="label">Message</label>
                                <textarea name="message"
                                    placeholder="Your message"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div className="mt-6">
                                <input type="submit"
                                    className="btn w-full"
                                    value="Submit" />
                            </div>
                        </form>
                    </div>

                    
                </div>
            </Container>
        </div>
    );
};

export default ContactMe;
