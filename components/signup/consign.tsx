import { Facebook, Google,BinanceCoin, Apple, Home3 } from 'iconsax-react'
import { useState } from 'react';

function Consign() {

  return (
    <div className="flex w-full bg-black h-screen  ">

           <div className=" w-1/2 mobile:hidden tablet:flex bg-black h-full">
               <div className=' flex p-20  '>
                    <img src='/img/newme.png' className='w-full   '></img>
               </div>
           </div>
        <div className='px-4 tablet:px-32 py-32 w-full  tablet:w-1/2 bg-black'> 
            <div className="  shadow-lg  rounded-lg w-full tablet:mx-auto tablet:container bg-white h-full mobile:px-10 tablet:px-20 tablet:py-4  flex flex-col justify-center">
                <div className="w-full flex flex-col tablet:mx-auto tablet:container  mt-4">
                    <h3 className="text-2xl text-center font-semibold mb-3 text-primary ">Sign Up</h3>
                    <p className="text-sm mb-2 text-center font-serif">Create an account to Start Using DEVy</p>
                    <div className='p-1'>
                        <form >
                        <div className="w-full  flex flex-col mb-4">
                            <h1 className='text-sm'>Create Password</h1>
                            <div className='border border-y-2 rounded-md px-4 py-2'>
                                <input
                                type="password"
                                placeholder="Create Password" 
                                required
                                className="w-full text-black outline-none" 
                                />
                            </div>
                        </div>    
                        <div className="w-full  flex flex-col mb-4">
                            <h1 className='text-sm'>Confirm Password</h1>
                            <div className='border border-y-2 rounded-md px-4 py-2'>
                                <input
                                type="Password"
                                placeholder="Confirm your Password" 
                                className="w-full text-black outline-none"    
                                required
                                 />
                            </div>
                        </div>   

                           <div className=" w-full space-x-4 flex justify-between mb-2">
                             <button  className="w-1/2 bg-primary rounded-lg p-1  text-center flex font-bold items-center justify-center text-white">
                                  <a href='/signup'>Back</a>
                               </button>
                               <button type="submit" className="w-1/2 bg-primary rounded-lg p-1 text-center flex font-bold items-center justify-center text-white">
                                  <a href='/login'>Sign Up</a>
                               </button>
                           </div>
                        </form>

                    </div>
                </div>

                 <div className="w-full flex  items-center justify-center">
                     <p className="text-sm text-black font-normal ">Already have an account? <a href="/login" className=" font-semibold text-primary">Login </a></p>
                 </div>

             </div>
        </div>
    </div> 
);
}

export default Consign;