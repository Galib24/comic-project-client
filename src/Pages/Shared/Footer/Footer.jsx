import React from 'react';
import mg1 from '../../../assets/icons/6.svg'
import mg2 from '../../../assets/icons/7.svg'
import mg3 from '../../../assets/icons/8.svg'
import mg4 from '../../../assets/icons/9.svg'
import mg5 from '../../../assets/icons/10.svg'

const Footer = () => {
    return (
        <>
            <footer className="footer   text-neutral-content">
                <div  className='flex  justify-center items-center mx-auto lg:gap-28 sm:gap-6 my-12'>
                    <div className=''>
                        <img className='ml-5' src={mg1} alt="" />
                        <h1 className='text-[#AAB2BD]' style={{ fontSize: '10px' }}>Recommend</h1>
                    </div>
                    <div>
                        <img className='ml-3' src={mg2} alt="" />

                        <h1 className='text-[#AAB2BD]' style={{ fontSize: '10px' }}>Category</h1>
                    </div>
                    <div>
                        <img className='ml-1' src={mg3} alt="" />
                        <h1 className='text-[#AAB2BD]' style={{ fontSize: '10px' }}>Novel</h1>
                    </div>
                    <div>
                        <img className='ml-4' src={mg4} alt="" />
                        <h1 className='text-[#AAB2BD]' style={{ fontSize: '10px' }}>My Comics</h1>
                    </div>
                    <div>
                        <img className='ml-3' src={mg5} alt="" />
                        <h1 className='text-[#AAB2BD]' style={{ fontSize: '10px' }}>My Profile</h1>
                    </div>
                </div>

            </footer>
        </>
    );
};

export default Footer;