import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const SecondSection = () => {
    return (
        <>
            <div className='flex'>
                <h1 style={{fontSize: '10px', marginLeft: '10px'}} className='flex-1 font-bold'>Popular</h1>
                <div className='flex justify-center items-center w-2/4'>
                    <h1 style={{fontSize: '10px', marginLeft: '100px'}}><Link>More</Link></h1>
                    <FaAngleRight  className='text-[#AAB2BD]' style={{fontSize: '10px'}}></FaAngleRight>
                </div>
            </div>
        </>
    );
};

export default SecondSection;