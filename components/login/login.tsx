import { Facebook, Google, Apple,BinanceCoin, Home3 } from 'iconsax-react'
import { useState } from 'react';

const Login=()=>{


    return (
         <div className="flex w-full  bg-black h-screen  ">

           <div className=" w-1/2 mobile:hidden tablet:flex bg-black h-full">
               <div className=' flex   '>
                    <img src='/img/newme.png' className='w-full   '></img>
               </div>
           </div>

           <div className='px-4 tablet:px-32 py-32 w-full  tablet:w-1/2 bg-black'> 

           <div className="  shadow-lg  rounded-2xl w-full bg-white h-full mobile:p-10 tablet:px-20 tablet:py-4  flex flex-col justify-center">
             

                <div className="w-full flex flex-col  mt-4">
                    <h3 className="text-2xl tablet:text-4xl font-semibold text-center mb-2 tableT:mb-4 text-primary ">Sign In</h3>
                    <p className="text-sm mb-2  text-center font-serif">Welcome Back DEVy</p>

                    <div className="w-full  flex flex-col mb-4">
                        <h1>Email</h1>
                        <div className='border border-y-2 rounded-md px-4 py-2'>
                            <input
                            type="email"
                            placeholder="Email" 
                            required
                            className="w-full text-black outline-none" />
                        </div>
                    </div>

                    <div className="w-full flex flex-col mb-4">
                        <h1>Password</h1>
                       <div className='border border-y-2 rounded-md px-4 py-2 '>    
                       <input
                        type="password"
                        placeholder="Password" 
                        required
                        className="w-full text-black outline-none" />
                       </div>
                    </div>

                    <div className="w-full  flex justify-between mb-4">
                        <a href='forgot' className="text-sm  whitespace-nowrap font-medium cursor-pointer underline underline-offset-2">Forgot Password ?</a>
                    </div>

                    <div className="w-full flex flex-col ">
                        <button  className="w-full bg-black rounded-md p-4 text-center flex items-center justify-center text-white">
                           <a href='devy'> Login </a>
                        </button>
                    </div>

                </div>

                <div className="w-full flex pb-4 items-center justify-center">
                    <p className="text-sm text-black font-normal ">Dont have an account? <a href="/signup"className=" font-semibold text-primary">Sign up now!! </a></p>
                </div>
                

           </div>
           </div>
         </div> 
    );
}

export default Login;