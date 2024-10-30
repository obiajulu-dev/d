import { Facebook, Google, Apple,BinanceCoin, Home3 } from 'iconsax-react'
import { useState } from 'react';

const Row=()=>{


    return (
         <div className="flex items-start  h-screen w-full tablet:hidden  ">
           <div className="  mobile:w-full bg-primary text-white h-full mobile:p-1 tablet:p-32 flex flex-col tablet:justify-between mobile:justify-end ">
           <img src='./img/fann.png' className='p-28 md:-py-20 '></img>
                <div className='item-center flex  justify-center'>
                  <h1 className='text-white text-3xl font-serif'>Devy</h1>
                   </div>

                     <a className='text-center items-center'>Start Growing With Devy Today</a>

                         <div className='px-5 py-5 items-center text-center flex justify-center '>
                             <h2 className='text-white'> Fast, Flexable, Easy to use.  Fast, Flexable, Easy to use.  Fast, Flexable, Easy to use.</h2>
                         </div>

                          <div className="w-full flex px-5 justify-between  mb-10">
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