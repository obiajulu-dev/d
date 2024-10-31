import { Facebook, Google, Apple,BinanceCoin, Home3 } from 'iconsax-react'
import { useState } from 'react';

const Forgotten=()=>{


    return (
         <div className="flex w-full bg-black fixed h-screen  ">
            <div className='w-full flex tablet:mx-auto' >
                 <div className='px-4 tablet:px-32 py-32 w-full  tablet:w-1/2 bg-black'> 
                   <div className="  shadow-lg  rounded-lg w-full tablet:mx-auto laptop:container bg-white h-full mobile:px-5 tablet:px-20 tablet:py-4  flex flex-col justify-center">
                    <div className="w-full flex flex-col tablet:mx-auto tablet:container  mt-4">
                        <h3 className="text-2xl font-semibold text-center mb-4 text-primary ">Reset Password</h3>
                        <div className="w-full  flex flex-col mb-4">
                            <h1>Enter Email</h1>
                            <div className='border w-full border-y-2 rounded-md px-4 py-2'>
                                <input
                                type="email"
                                placeholder="email" 
                                required
                                className="w-full text-black outline-none" />
                            </div>
                        </div>
    
                        <div className="w-full  flex flex-col mb-4">
                            <h1>Last Password</h1>
                            <div className='border w-full border-y-2 rounded-md px-4 py-2'>
                                <input
                                type="password"
                                placeholder="last password" 
                                required
                                className="w-full text-black outline-none" />
                            </div>
                        </div>
                        <div className="w-full flex flex-col pb-2 ">
                            <button className="w-full bg-black rounded-md p-4 text-center flex items-center justify-center text-white">
                               <a href='/forgottenco'> Next </a>
                            </button>
                        </div>
                    </div>
                    <div className="w-full flex  items-center justify-center">
                        <p className="text-sm text-black font-normal ">Remember Password?<a href="/login"className=" font-semibold text-primary">Log in </a></p>
                    </div>
               </div>
           </div>

                <div className=" w-1/2 mobile:hidden tablet:flex bg-black h-full">
                    <div className=' flex p-20  '>
                         <img src='/img/newme.png' className='w-full   '></img>
                    </div>
                </div>

           </div>

         </div> 
    );
}

export default Forgotten;