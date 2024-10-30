import { Facebook, Google, Apple,BinanceCoin, Home3, Bitcoin, Ethereum, ArrowSwapVertical, ArrowSwapHorizontal } from 'iconsax-react'
import { useState } from 'react';

const Depo=()=>{


    return (
         <div className="flex items-start h-screen w-full  ">
           <div className="tablet:w-full justify-between mobile:w-full text-black bg-black h-full mobile:space-y-5 mobile:p-5 tablet:p-20 flex flex-col">
              
               <div  className='text-center flex justify-center'>
                    <a className='text-sm text-white font-bold'>Deposite</a>
                </div>


                <div className='space-y-4'>
                    <div>
                        <h1 className='text-white text-center'>Enter Coin</h1>
                        <input
                           type="text"
                           placeholder="coin" 
                           required
                           className=" bg-black w-full text-center  flex text-white outline-none" />
                    </div>

                    <div>
                        <h1 className='text-white text-center'>Enter Amount</h1>
                        <input
                           type="tel"
                           placeholder="0.00" 
                           required
                           className=" bg-black w-full text-center  flex text-white outline-none" />
                    </div>
                </div>


                   <div className='flex justify-center'>
                          <button className="w-full laptop:w-44  bg-midWhite  rounded-3xl  p-2 flex items-center justify-center text-black">
                                <a href='/pay'> Next </a>
                          </button>
                   </div>

               </div>
            </div>
    );
}

export default Depo;