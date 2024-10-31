import { Facebook, Google, Apple,BinanceCoin, Home3 } from 'iconsax-react'
import { useState } from 'react';

const Signupl=()=>{


    return (
         <div className="flex w-full bg-black h-screen  ">

           <div className=" w-1/2 mobile:hidden tablet:flex bg-black h-full">
               <div className=' flex p-20  '>
                    <img src='/img/newme.png' className='w-full   '></img>
               </div>
           </div>

           <div className='px-4 tablet:px-32 py-32 w-full  tablet:w-1/2 bg-black'> 

           <div className="  shadow-lg  rounded-lg w-full tablet:mx-auto tablet:container bg-white h-fit mobile:px-10 tablet:px-20 tablet:py-4  flex flex-col ">


                <div className="w-full flex flex-col tablet:mx-auto tablet:container  mt-4">
                    <h3 className="text-2xl font-semibold text-center mb-2 text-primary ">Sign Up</h3>
                    <p className="text-sm mb-2  text-center font-serif">Create an account to Start Using Devy</p>

                    <div className="w-full  flex flex-col mb-4">
                        <h1>First Name</h1>
                        <div className='border w-full border-y-2 rounded-md px-4 py-2'>
                            <input
                            type="name"
                            placeholder="first name" 
                            required
                            className="w-full text-black outline-none" />
                        </div>
                    </div>

                    <div className="w-full  flex flex-col mb-4">
                        <h1>Last Name</h1>
                        <div className='border w-full border-y-2 rounded-md px-4 py-2'>
                            <input
                            type=" name"
                            placeholder="last name" 
                            required
                            className="w-full text-black outline-none" />
                        </div>
                    </div>

                    <div className="w-full flex flex-col mb-4">
                        <h1>Email</h1>
                       <div className='border border-y-2 rounded-md px-4 py-2 '>    
                       <input
                        type="email"
                        placeholder="email" 
                        required
                        className="w-full text-black outline-none" />
                       </div>
                    </div>


                    <div className="w-full flex pb-2 flex-col ">
                        <button className="w-full bg-black rounded-md p-4 text-center flex items-center justify-center text-white">
                           <a href='/consign'> Next </a>
                        </button>
                    </div>

                </div>

                <div className="w-full pb-2 flex  items-center justify-center">
                    <p className="text-sm text-black font-normal ">Already have an account?<a href="/login"className=" font-semibold text-primary">Log in </a></p>
                </div>
                

           </div>
           </div>
         </div> 
    );
}

export default Signupl;