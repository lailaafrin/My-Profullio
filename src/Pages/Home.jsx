import React from 'react';
import Banner from '../components/Banner';
import Container from '../Shared/Container';
import { Helmet } from 'react-helmet-async';
import Section from '../Shared/Section';

const Home = () => {
    return (
        <div className=''>
            <Helmet>

                <title>My-Protfullio</title>
            </Helmet>
            <Banner></Banner>
            <Section></Section>

            
        </div>
    );
};

export default Home;