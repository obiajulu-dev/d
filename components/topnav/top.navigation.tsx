'use client'
import { useRef, useState }from 'react';
import {BinanceCoin } from 'iconsax-react'

const TopNavigation=()=>{

    const hamburger = useRef<HTMLDivElement>(null);
    const mobileNavBody = useRef<HTMLDivElement>(null);


    function handleHamburgerMenu(){
        hamburger.current?.classList.toggle("open");
        mobileNavBody.current?.classList.toggle("flex");
        mobileNavBody.current?.classList.toggle("hidden");  
    }


    return(
        <nav className="fixed bg-opacity-30 px-5  top-4 left-0 w-full  text-white z-40">
            <div className='  shadow  tablet:mx-auto tablet:container rounded-3xl bg-mintGreen '>

           
            <div className="font-semibold relative tablet:container mobile:px-5 desktop:mx-auto laptop:px-10 py-4">
                {/* Flex Container */}
                <div className="flex flex-row items-center justify-between">
                    
                    {/* Hamburger Icon */}
                    <div ref={hamburger} className="flex hamburger tablet:hidden" onClick={handleHamburgerMenu}>
                      <span className="hamburger-top"></span>
                      <span className="hamburger-middle"></span>
                      <span className="hamburger-bottom"></span>
                   </div>

                    {/* Logo */}
                    <div className='text-white'>
                        <h1>DEVy</h1>
                    </div>

                    {/* Menu Item */}
                    <div className="hidden space-x-10 tablet:flex text-center tablet:items-left  text-sm">
                        <a href="/" className="hover:text-black font-sans ">Home</a>
                        <a href="/faq" className="hover:text-black font-sans ">Trades</a>
                        <a href="/login" className="hover:text-black font-sans ">Utility</a>
                        <a href="/login" className="hover:text-black font-sans ">Login</a>
                        <a href="/" className="hover:text-black font-sans ">Home</a>

                    </div>

                                     
                       <a 
                        href="/down" 
                        className=' text-mintGreen text-sm  bg-white mobile:hidden font-sans font-bold tablet:inline rounded-lg p-2'>Download DEVy App </a>
                


                    <div className='mobile:inline tablet:hidden'>
                      <a
                           href="/down"
                            className=' text-black text-xs  bg-white rounded-lg p-3'>Download DEVy App</a>
                    </div>


                </div>
            </div>

 
            <div className="mobile:inline tablet:hidden">
                <div  ref={mobileNavBody} className="mx-10 relative flex-col items-start hidden py-10  font-semibold text-lg h-auto bg-mintGreen text-white z-50">
                    <div className="textReveal flex flex-col text-center items-center content-center space-y-6 text-sm justify-center font-bold">
                        <a href="/" className="text-xs">Home</a>
                        <a href="/" className="text-xs">Trades</a>
                        <a href="/faq" className="text-xs">FAQ</a>

                      
                    </div>                    
                </div>
            </div>

            </div>
        </nav>
    )
}

export default TopNavigation;