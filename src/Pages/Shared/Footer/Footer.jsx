import React from 'react';
import mg1 from '../../../assets/icons/6.svg'
import mg2 from '../../../assets/icons/7.svg'
import mg3 from '../../../assets/icons/8.svg'
import mg4 from '../../../assets/icons/9.svg'
import mg5 from '../../../assets/icons/10.svg'

const Footer = () => {
    return (
        <>
            <footer className="footer p-5 bg-white text-neutral-content">
                <div  className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 w-1/2 lg:ml-80  sm:mr-40 my-12'>
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