import React from 'react';
import useComics from '../../../Hooks/useComics';

const Novel = () => {
    const [comic] = useComics();
    const novel = comic.filter(items => items.type === 'novel')
    console.log(novel);
    return (
        <div>
          <h2 className='text-4xl text-center font-bold my-6'>Here is the section of Novel</h2>

{
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 my-10 ml-12'>
    {
        novel.map(item => <div key={item._id} className="card w-60 bg-base-100 shadow-xl">
            <figure><img className='mr-20 mt-4' style={{ height: '170px' }} src={item.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 style={{fontSize: '14px'}} className="card-title font-bold">{item.title}</h2>
                <p style={{fontSize: '14px'}} className='text-[#AAB2BD]'>{item.info}</p>
             
            </div>
        </div>)
    }
</div>
}
        </div>
    );
};

export default Novel;