import { Facebook, Google, Apple,BinanceCoin, Home3 } from 'iconsax-react'
import { useState } from 'react';

const Row=()=>{


    return (
         <div className="flex items-start  h-screen w-full tablet:hidden  ">
           <div className="  mobile:w-full bg-primary text-white h-screen mobile:p-1 tablet:p-32 flex flex-col tablet:justify-between mobile:justify-end ">
           <img src='./img/newme.png' className='p-16 flex justify-center  md:py-2 '></img>


                     <a className='text-center font-mono  text-xs items-center'>Start Growing With DEVy Today</a>

                         <div className='px-5  items-center text-center flex justify-center '>
                             <h2 className='text-white font-mono text-xs'> Fast-Flexable-Easy to use. </h2>
                         </div> 

                          <div className="w-full flex px-5 py-3 justify-between  mb-10">
                               <button className="w-full bg-white rounded-md p-3 text-center flex font-bold items-center justify-center text-black">
                                <a href='/login'>Login</a>
                               </button>

                               <button className="w-full bg-black rounded-md p-3 text-center flex font-bold items-center justify-center text-white">
                                <a href='/signup'>Sign up</a>
                               </button>

                          </div>


                 </div>
         </div> 
    );
}

export default Row;