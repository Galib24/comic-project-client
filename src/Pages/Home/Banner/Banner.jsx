import React from 'react';
import  { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../assets/banner/banner-5-up.png'
import img2 from '../../../assets/banner/banner-3-up.png'
import img3 from '../../../assets/banner/banner-2-up.png'
import img4 from '../../../assets/banner/banner-1-up.png'



// const AutoplaySlider = withAutoplay(AwesomeSlider);
const Banner = () => {
    return (
        <>
        <Carousel>
                <div>
                    <img src={img1} />
                   
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                    
                </div>
                <div>
                    <img src={img4} />
                    
                </div>
            </Carousel>
        </>
    );
};

export default Banner;