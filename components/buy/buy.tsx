import { Facebook, Google, Apple,BinanceCoin, Home3, Bitcoin, Ethereum, ArrowSwapVertical, ArrowSwapHorizontal } from 'iconsax-react'
import { useState } from 'react';

const Buy=()=>{


    return (
         <div className="flex items-start h-full w-full  ">
           <div className="tablet:w-full mobile:w-full text-black bg-black h-full mobile:space-y-5 mobile:p-5 tablet:p-20 flex flex-col">
               {/* Logo */}
               <div  className='text-center flex justify-center'>
                    <a className='text-sm text-white font-bold'>Buy</a>
                </div>

 
             <div className='inline laptop:flex-col space-y-3 w-full'>

               <div className='mobile:inline tablet:px-12 mobile:px-0  justify-between tablet:flex'> 
                  <div className='shadow w-full rounded-md mobile:px-3 py-5  p-3 bg-white'>
                    <div className='flex pb-4'>
                       <a>Buy <span> Bitcoin</span></a>
                    </div>

                    <div className='pb-8 flex justify-between'>

                       <div className='flex gap-2'>
                           <Bitcoin/>
                           <h1>BT</h1>
                        </div>
                        
                       <div className=' relative space-y-5'>
                          <input
                           type="tel"
                           placeholder="0.0" 
                           required
                           className=" bg-white text-right flex items-center justify-end text-black outline-none" />
                           <button className="w-full absolute bg-midWhite right-24 rounded-3xl top-1  p-2 flex items-center justify-center text-black">
                             <a href='/depo'> Buy </a>
                          </button>
                       </div>

                    </div>
                </div> 
            </div>


            <div className='mobile:inline tablet:px-12 mobile:px-0 justify-between tablet:flex'>
                     
                     <div className='shadow w-full rounded-md mobile:px-3 py-5  p-3 bg-white'>
                       <div className='flex pb-4'>
                          <a>Buy <span> Ethereum</span></a>
                       </div>
   

                       <div className='pb-8 flex justify-between'>
   
                          <div className='flex gap-2'>
                              <Bitcoin/>
                              <h1>BTC</h1>
                           </div>
                           
                          <div className=' relative space-y-5'>
                             <input
                              type="tel"
                              placeholder="0.0" 
                              required
                              className=" bg-white text-right flex items-center justify-end text-black outline-none" />
                              <button className="w-full absolute bg-midWhite right-24 rounded-3xl top-1  p-2 flex items-center justify-center text-black">
                                <a href='/depo'> Buy </a>
                             </button>
                          </div>
   
                       </div>
   
                   </div>
               </div>


               <div className='mobile:inline tablet:px-12 mobile:px-0 justify-between tablet:flex'>
                     
                     <div className='shadow w-full rounded-md mobile:px-3 py-5  p-3 bg-white'>
                       <div className='flex pb-4'>
                          <a>Buy <span> Tether</span></a>
                       </div>
   
                       <div className='pb-8 flex justify-between'>
   
                          <div className='flex gap-2'>
                              <Bitcoin/>
                              <h1>BTC</h1>
                           </div>
                           
                          <div className=' relative space-y-5'>
                             <input
                              type="tel"
                              placeholder="0.0" 
                              required
                              className=" bg-white text-right flex items-center justify-end text-black outline-none" />
                              <button className="w-full absolute bg-midWhite right-24 rounded-3xl top-1  p-2 flex items-center justify-center text-black">
                                <a href='/depo'> Buy </a>
                             </button>
                          </div>
   
                       </div>
   
                   </div>
               </div>


               <div className='mobile:inline tablet:px-12 mobile:px-0 justify-between tablet:flex'>
                     
                     <div className='shadow w-full rounded-md mobile:px-3 py-5  p-3 bg-white'>
                       <div className='flex pb-4'>
                          <a>Buy <span> Solana</span></a>
                       </div>
   
                       <div className='pb-8 flex justify-between'>
   
                          <div className='flex gap-2'>
                              <Bitcoin/>
                              <h1>BTC</h1>
                           </div>
                           
                          <div className=' relative space-y-5'>
                             <input
                              type="tel"
                              placeholder="0.0" 
                              required
                              className=" bg-white text-right flex items-center justify-end text-black outline-none" />
                              <button className="w-full absolute bg-midWhite right-24 rounded-3xl top-1  p-2 flex items-center justify-center text-black">
                                <a href='/depo'> Buy </a>
                             </button>
                          </div>
   
                       </div>
   
                   </div>
               </div>


               <div className='mobile:inline tablet:px-12 mobile:px-0 justify-between tablet:flex'>
                     
                     <div className='shadow w-full rounded-md mobile:px-3 py-5  p-3 bg-white'>
                       <div className='flex pb-4'>
                          <a>Buy <span> Cardano</span></a>
                       </div>
   
                       <div className='pb-8 flex justify-between'>
   
                          <div className='flex gap-2'>
                              <Bitcoin/>
                              <h1>BTC</h1>
                           </div>
                           
                          <div className=' relative space-y-5'>
                             <input
                              type="tel"
                              placeholder="0.0" 
                              required
                              className=" bg-white text-right flex items-center justify-end text-black outline-none" />
                              <button className="w-full absolute bg-midWhite right-24 rounded-3xl top-1  p-2 flex items-center justify-center text-black">
                                <a href='/depo'> Buy </a>
                             </button>
                          </div>
   
                       </div>
   
                   </div>

               </div>


               <div className='mobile:inline tablet:px-12 mobile:px-0 justify-between tablet:flex'>
                     
                     <div className='shadow w-full rounded-md mobile:px-3 py-5  p-3 bg-white'>
                       <div className='flex pb-4'>
                          <a>buy <span> Polkadot</span></a>
                       </div>
   
                       <div className='pb-8 flex justify-between'>
   
                          <div className='flex gap-2'>
                              <Bitcoin/>
                              <h1>BTC</h1>
                           </div>
                           
                          <div className=' relative space-y-5'>
                             <input
                              type="tel"
                              placeholder="0.0" 
                              required
                              className=" bg-white text-right flex items-center justify-end text-black outline-none" />
                              <button className="w-full absolute bg-midWhite right-24 rounded-3xl top-1  p-2 flex items-center justify-center text-black">
                                <a href='/depo'> Buy </a>
                             </button>
                          </div>
   
                       </div>
   
                   </div>

               </div>

               <div className='mobile:inline tablet:px-12 mobile:px-0 justify-between tablet:flex'>
                     
                     <div className='shadow w-full rounded-md mobile:px-3 py-5  p-3 bg-white'>
                       <div className='flex pb-4'>
                          <a>buy <span> Litecoin</span></a>
                       </div>
   
                       <div className='pb-8 flex justify-between'>
   
                          <div className='flex gap-2'>
                              <Bitcoin/>
                              <h1>BTC</h1>
                           </div>
                           
                          <div className=' relative space-y-5'>
                             <input
                              type="tel"
                              placeholder="0.0" 
                              required
                              className=" bg-white text-right flex items-center justify-end text-black outline-none" />
                              <button className="w-full absolute bg-midWhite right-24 rounded-3xl top-1  p-2 flex items-center justify-center text-black">
                                <a href='/depo'> Buy </a>
                             </button>
                          </div>
   
                       </div>
   
                   </div>

               </div>

               <div className='mobile:inline tablet:px-12 mobile:px-0 justify-between tablet:flex'>
                     
                     <div className='shadow w-full rounded-md mobile:px-3 py-5  p-3 bg-white'>
                       <div className='flex pb-4'>
                          <a>buy <span> Bitcoin Cash</span></a>
                       </div>
   
                       <div className='pb-8 flex justify-between'>
   
                          <div className='flex gap-2'>
                              <Bitcoin/>
                              <h1>BTC</h1>
                           </div>
                           
                          <div className=' relative space-y-5'>
                             <input
                              type="tel"
                              placeholder="0.0" 
                              required
                              className=" bg-white text-right flex items-center justify-end text-black outline-none" />
                              <button className="w-full absolute bg-midWhite right-24 rounded-3xl top-1  p-2 flex items-center justify-center text-black">
                                <a href='/depo'> Buy </a>
                             </button>
                          </div>
   
                       </div>
   
                   </div>

               </div>

               <div className='mobile:inline tablet:px-12 mobile:px-0 justify-between tablet:flex'>
                     
                     <div className='shadow w-full rounded-md mobile:px-3 py-5  p-3 bg-white'>
                       <div className='flex pb-4'>
                          <a>buy <span> Stellar</span></a>
                       </div>
   
                       <div className='pb-8 flex justify-between'>
   
                          <div className='flex gap-2'>
                              <Bitcoin/>
                              <h1>BTC</h1>
                           </div>
                           
                          <div className=' relative space-y-5'>
                             <input
                              type="tel"
                              placeholder="0.0" 
                              required
                              className=" bg-white text-right flex items-center justify-end text-black outline-none" />
                              <button className="w-full absolute bg-midWhite right-24 rounded-3xl top-1  p-2 flex items-center justify-center text-black">
                                <a href='/depo'> Buy </a>
                             </button>
                          </div>
   
                       </div>
   
                   </div>

               </div>

               <div className='mobile:inline tablet:px-12 mobile:px-0 justify-between tablet:flex'>
                     
                     <div className='shadow w-full rounded-md mobile:px-3 py-5  p-3 bg-white'>
                       <div className='flex pb-4'>
                          <a>buy <span> Stellar</span></a>
                       </div>
   
                       <div className='pb-8 flex justify-between'>
   
                          <div className='flex gap-2'>
                              <Bitcoin/>
                              <h1>BTC</h1>
                           </div>
                           
                          <div className=' relative space-y-5'>
                             <input
                              type="tel"
                              placeholder="0.0" 
                              required
                              className=" bg-white text-right flex items-center justify-end text-black outline-none" />
                              <button className="w-full absolute bg-midWhite right-24 rounded-3xl top-1  p-2 flex items-center justify-center text-black">
                                <a href='/pay'> Buy </a>
                             </button>
                          </div>
   
                       </div>
   
                   </div>

               </div>


               </div>

            </div>
           </div>
    );
}

export default Buy;