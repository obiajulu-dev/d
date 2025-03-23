 hmport { useState } from 'react';

const Forgottencont=()=>{


    return (
         <div className="flex w-full bg-black fixed h-screen  ">
            <div className='w-full flex tablet:mx-auto' >
                 <div className='px-4 tablet:px-32 py-32 w-full  tablet:w-1/2 bg-black'> 
                   <div className="  shadow-lg  rounded-lg w-full tablet:mx-auto laptop:container bg-white h-full mobile:px-5 tablet:px-20 tablet:py-4  flex flex-col justify-center">
                    <div className="w-full flex flex-col tablet:mx-auto tablet:container  mt-4">
                        <h3 className="text-2xl font-semibold text-center mb-4 text-primary ">Reset Password</h3>
                        <div className="w-full  flex flex-col mb-4">
                            <h1>Create new Password</h1>
                            <div className='border border-y-2 rounded-md px-4 py-2'>
                                <input
                                type="password"
                                placeholder="Password" 
                                required
                                className="w-full text-black outline-none" 
                                />
                            </div>
                            </div>
                            
                            <div className="w-full  flex flex-col mb-4">
                            <h1>Confirm Password</h1>
                            <div className='border border-y-2 rounded-md p-4 py-2'>
                                <input
                                type="Password"
                                placeholder="Confirm your Password" 
                                className="w-full text-black outline-none"
                                required
                                 />
                            </div>
                            </div>
                        <div className="w-full flex flex-col ">
                            <button className="w-full bg-black rounded-md p-4 text-center flex items-center justify-center text-white">
                               <a href='/login'> Reset </a>
                            </button>
                        </div>
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

export default Forgottencont;