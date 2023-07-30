import React from 'react';
import img1 from '../../../assets/icons/1.svg'
import img2 from '../../../assets/icons/2.svg'
import img3 from '../../../assets/icons/3.svg'
import img4 from '../../../assets/icons/4.svg'
import img5 from '../../../assets/icons/5.svg'
const FirstSection = () => {
    return (
        <>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 w-1/2 lg:ml-80 sm:mr-52 my-24'>
                <img style={{ fontSize: '10px' }} src={img1} alt="" />
                <img style={{ fontSize: '10px' }} src={img2} alt="" />
                <img style={{ fontSize: '10px' }} src={img3} alt="" />
                <img style={{ fontSize: '10px' }} src={img4} alt="" />
                <img style={{ fontSize: '10px' }} src={img5} alt="" />
            </div>

        </>
    );
};

export default FirstSection;