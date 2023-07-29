import React from 'react';
import { Link } from 'react-router-dom';
import { FaSistrix } from 'react-icons/fa';

const NavBar = () => {

    const navOptions = <>

        <li><Link style={{fontSize: '12px'}}>Recommend</Link></li>
        {/* <li tabIndex={0}>
            <details>
                <summary>Recommend</summary>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li> */}
        <li><Link style={{fontSize: '12px'}}>Hot</Link></li>
        <li><Link style={{fontSize: '12px'}}>Novel</Link></li>

    </>

    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="form-control navbar-end relative">
                    <FaSistrix  style={{fontSize: '12px'}} className='absolute mr-36 mb-4' ></FaSistrix>
                    <input style={{fontSize: '12px', marginLeft: '10px'}} type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto ml-2" />
                </div>
            </div>
        </>
    );
};

export default NavBar;