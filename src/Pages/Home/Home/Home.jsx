import React from 'react';
import Banner from '../Banner/Banner';
import FirstSection from '../First Section/FirstSection';
import SecondSection from '../Second Section/SecondSection';
import PopularSection from './Popular Section/PopularSection';

const Home = () => {
    return (
        <div>
            {/* <h2>this is home page</h2> */}
            <Banner></Banner>
            <FirstSection></FirstSection>
            <SecondSection></SecondSection>
            <PopularSection></PopularSection>
        </div>
    );
};

export default Home;