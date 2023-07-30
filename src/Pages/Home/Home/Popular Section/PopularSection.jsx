import React from 'react';
import useComics from '../../../../Hooks/useComics';

const PopularSection = () => {
    const [comic] = useComics();
    const popular = comic.slice(0, 6)
    // console.log(popular);

    return (
        <>
            <div className='grid grid-cols-3 w-full gap-6 my-10'>
                {
                    popular.map(item => <div key={item._id} className="card lg:w-52  bg-base-100 shadow-xl">
                        <figure><img  className='' style={{ height: '170px' }} src={item.image} alt="Shoes" /></figure>
                        <div className="lg:card-body">
                            <h2 style={{fontSize: '14px'}} className="lg:card-title font-bold">{item.title}</h2>
                            <p style={{fontSize: '12px'}} className='text-[#AAB2BD]'>{item.info}</p>
                         
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default PopularSection;