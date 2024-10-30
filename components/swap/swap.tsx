import { Facebook, Google, Apple,BinanceCoin, Home3, Bitcoin, Ethereum, ArrowSwapVertical, ArrowSwapHorizontal } from 'iconsax-react'
import { useState } from 'react';

const Swap=()=>{


    return (
         <div className="flex items-start h-screen w-full bg-primary  ">
           <div className="tablet:w-full laptop:mx-auto laptop:container mobile:w-full text-black bg-primary h-screen mobile:space-y-5 mobile:p-5 tablet:p-20 flex flex-col">
               {/* Logo */}
               <div className='text-center flex justify-center'>
                    <a href='/devy' className='text-sm text-white font-bold'>Swap</a>
                </div>

               <div className='mobile:inline tablet:px-12 mobile:px-0 justify-between tablet:flex'>
                     
                  <div className='shadow w-full rounded-md mobile:px-3  p-3 bg-white'>
                    <div className='flex pb-4'>
                       <a>From <span> Bitcoin</span></a>
                    </div>

                    <div className='pb-8 flex justify-between'>
                       <div className='flex gap-2'>
                           <Bitcoin/>
                           <h1>BTC</h1>
                        </div>
                        
                       <div className=''>
                       <input
                        type="tel"
                        placeholder="0.0" 
                        required
                        className=" bg-white text-right flex items-center justify-end text-black outline-none" />
                       </div>
                    </div>

                </div>

                <div className='text-center w-full flex items-center text-white justify-center  '>
                  <ArrowSwapVertical
                  className='mobile:inline tablet:hidden'/>

                  <ArrowSwapHorizontal
                   className='mobile:hidden  tablet:inline'/>
                </div>

                <div className='w-full shadow rounded-md px-3 p-3 bg-white'>
                    <div className='pb-4'>
                       <a>To <span>Ethereum</span></a>
                    </div>

                    <div className='pb-8 flex justify-between'>
                        
                        <div className='flex'>
                           <Ethereum/>
                           <h1>ETH</h1>
                        </div>

                       
                       
                        <div className=''>
                          <input
                           type="tel"
                           placeholder="0.0" 
                           required
                           className=" bg-wjite text-right flex items-center justify-end text-black outline-none" />
                       </div>
                       
                    </div>

                   <div className='flex gap-2'>
                     <a className='text-black text-sm'>1 BTC = 18.043527 ETH </a>
                     <ArrowSwapHorizontal
                     size={18 }/>
                   </div>

                </div>

                  </div>

                <div className="w-full flex flex-col tablet:px-44 mobile:px-0 mb-6">
                        <button className="w-full bg-midWhite rounded-3xl p-4 text-center flex items-center justify-center text-black">
                           <a href='/swap'> Continue </a>
                        </button>
                 </div>


            </div>
           </div>
    );
}

export default Swap;