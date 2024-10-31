'use client'
import { useRef, useState }from 'react';
import {BinanceCoin } from 'iconsax-react'

const TopNavigationl=()=>{

    const hamburger = useRef<HTMLDivElement>(null);
    const mobileNavBody = useRef<HTMLDivElement>(null);


    function handleHamburgerMenu(){
        hamburger.current?.classList.toggle("open");
        mobileNavBody.current?.classList.toggle("flex");
        mobileNavBody.current?.classList.toggle("hidden");  
    }


    return(
        <nav className="fixed bg-opacity-30 px-5 tablet:px-10  top-4 left-0 w-full  text-white z-40">
        <div className='  shadow  tablet:mx-auto tablet:container rounded-3xl bg-mintGreen '>

       
        <div className="font-semibold relative tablet:container mobile:px-5 desktop:mx-auto laptop:px-10 py-6">
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
                       <div className="hidden space-x-10 tablet:flex text-white tablet:items-center text-sm">
                           <a href="/devy" className="hover:text-primary">Trade </a>
                           <a href="/profile" className="hover:text-primary">Profile</a>
                           <a href="/faq" className="hover:text-primary">FAQ</a>
                           <a href="/withdraw" className="hover:text-primary">Withdraw</a>
                           <a href="/depo" className="hover:text-primary">Deposite</a>
                       </div>


                    <div className='mobile:inline tablet:hidden'>
                      <a
                           href="/down"
                            className=' text-black text-xs  bg-white rounded-lg p-3'>Download DEVy App</a>
                    </div>


                </div>
            </div>

 
            <div className="mobile:inline tablet:hidden">
                <div ref={mobileNavBody} className="mx-10 relative text-white flex-col items-start hidden py-10 font-semibold text-lg h-auto bg-mintGreen z-50">
                        <div className='flex space-x-28 justify-between'>
                              <div className="textReveal flex flex-col  items-center content-center space-y-6 text-sm justify-center font-bold">
                                  <a href="/profile" className=" hover:text-primary hover:translate-x-2">Profile</a>
                                  <a href="/down" className="hover:text-primary hover:translate-x-2">Trade</a>
                                  <a href="/faq" className="hover:text-primary hover:translate-x-2">FAQ</a>
                                  <details>
                                    <summary>Balance</summary>
                                    <span>
                                        <p>$1500.00</p>
                                    </span>
                                  </details>
                        
                              </div>  
                         </div>    


                         <div className='flex gap-5'>
                             <div className="w-full flex flex-col py-4 mb-6">
                                 <button className="w-full laptop:hover:translate-y-8 bg-white rounded-xl p-3 text-center flex items-center justify-center text-black">
                                    <a href='/depo'> Deposit </a>
                                 </button>
                             </div>

                             <div className="w-full flex flex-col py-4 mb-6">
                                 <button className="w-full laptop:hover:translate-x-8 bg-primary rounded-xl p-3 text-center flex items-center justify-center text-white">
                                    <a href='/withdraw'> Withdraw </a>
                                 </button>
                             </div>

                             
                        </div>            
                </div>

              </div>
            </div>
        </nav>
    )
}

export default TopNavigationl;           