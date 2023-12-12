import React from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '../Shared/Container';

const AboutMe = () => {
    return (
        <div>
            <Helmet>

                <title>AboutMe</title>
            </Helmet>
            <Container>
                <p className='text-2xl'>
                    Welcome to my profile!
                    <br />
                    I am a react front end web developer with 1 years of experience in building and maintaining web applications. I specialize in HTML, CSS, Bootstrap, JavaScript, React, Firebase, MongodB MaterialUI Node js  to create custom and user friendly web experiences. I am passionate about my work and I am always looking for new and innovative ways to improve my skills and knowledge. I am also a strong believer in communication and collaboration, and I always work closely with my clients to ensure that their needs are met and exceeded.
                </p>
                <br />  

                <p className='text-3xl font-bold'>
                    My services:
                </p>
                <p>
                  

                    <p>1. Design and development of React JS websites</p>
                    <p>2.
                        Implementation of Tailwind CSS and Bootstrap for responsive layouts
                  </p>
                    <p>
                       3. API integration
                  </p>
                    <p>4. Font awesome ICONS</p>
                    <p>
                       5. Unit testing and code review
                  </p>
                   6. Deployment to production
                </p>
            </Container>
        </div>
    );
};

export default AboutMe;