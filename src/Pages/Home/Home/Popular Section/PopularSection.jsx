import React from 'react';
import useComics from '../../../../Hooks/useComics';

const PopularSection = () => {
    const [comic] = useComics();
    const popular = comic.slice(0, 6)
    // console.log(popular);

    return (
        <>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
                {
                    popular.map(item => <div key={item._id} className="card w-60 bg-base-100 shadow-xl">
                        <figure><img className='mr-20 mt-4' style={{ height: '170px' }} src={item.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 style={{fontSize: '14px'}} className="card-title font-bold">{item.title}</h2>
                            <p style={{fontSize: '14px'}} className='text-[#AAB2BD]'>{item.info}</p>
                         
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default PopularSection;