import { Facebook, Google, Apple,BinanceCoin, Home3, Bitcoin, Ethereum, ArrowSwapVertical, ArrowSwapHorizontal } from 'iconsax-react'
import { useState } from 'react';

const Airtime=()=>{


    return (
         <div className="flex items-start h-full w-full    ">
           <div className="tablet:w-full mobile:w-full text-white bg-black h-screen mobile:space-y-5 mobile:p-5 tablet:p-20 flex flex-col">
               {/* Logo */}
               <div className='text-center flex justify-center'>
                    <a className='text-sm text-white font-bold'>Airtime</a>
                </div>

                <div className='text-white w-full shadow p-3 bg-primary rounded-full  flex text-center justify-between'>
                    <button className='w-1/2 bg-mintGreen rounded-lg'>
                        Local 
                    </button>

                    <button className='w-1/2'>
                        International
                    </button>
                </div>

                <div className=''>
                    <h1 className='py-2'>Select Service Provider</h1>
                    <span className='flex gap-10 tablet:w-fit items-center shadow bg-mintGreen rounded-lg p-5 justify-center'>
                    <img src='./img/mtn.png' className='w-[50px] rounded-full '></img>
                    <img src='./img/airtel.png' className='w-[50px] rounded-full '></img>
                    <img src='./img/9 mob.png' className='w-[50px] rounded-full '></img>
                    <img src='./img/glo.jpeg' className='w-[50px] rounded-full '></img>

                    </span>
                </div>

            </div>


           </div>
    );
}

export default Airtime;