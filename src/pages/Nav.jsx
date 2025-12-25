import React from 'react'
import { Link,useLocation } from 'react-router'

const Nav = () => {
    let {pathname}=useLocation()
    return (
        <header className="flex justify-between border-b border-gray-300 py-3 px-4 sm:px-10 bg-white min-h-[65px] tracking-wide relative z-50">
            <div className="flex justify-between flex-wrap items-center gap-4 max-w-screen-xl mx-auto w-full">
                <Link to="/"> 
                    <div className='flex items-center gap-2'>
<img
                        src="https://readymadeui.com/readymadeui-short.svg"
                        alt="logo"
                        className="w-8"
                    />
                    <h2 className='bg-gradient-to-r from-[#0F172A] to-[#017BFE] bg-clip-text text-transparent font-bold text-3xl'> STORE</h2>
                    </div>
                </Link>
              
                <div
                    id="collapseMenu"
                    className="max-lg:hidden lg:!block max-lg:w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
                >
                    <button
                        id="toggleClose"
                        className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border border-gray-200 cursor-pointer"
                    >
                       
                    </button>
                   
                </div>
                
              <ul className="lg:flex lg:ml-14 lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
                        <li className="mb-6 hidden max-lg:block">
                            <a href="javascript:void(0)">
                                <img
                                    src="https://readymadeui.com/readymadeui.svg"
                                    alt="logo"
                                    className="w-36"
                                />
                            </a>
                        </li>
                        <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                            <Link to="/"
                                className={`${pathname=="/" && "text-blue-700 font-medium  block text-[15px]"} text-[15px]`}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                            <Link to="/product"
                                
                                className={`${pathname=="/product" && "text-blue-700 font-medium  block text-[15px]"} text-[15px]`}
                            >
                                Product
                            </Link>
                        </li>
                        <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                            <Link to="/card"
                                 className={`${pathname=="/card" && "text-blue-700 font-medium  block text-[15px]"} text-[15px]`}
                            >
                               Card
                            </Link>
                        </li>
                       
                    </ul>
            </div>
        </header>

    )
}

export default Nav
