import { Facebook, Google, Apple,BinanceCoin, Home3 } from 'iconsax-react'
import { useState } from 'react';

const Rowl=()=>{


    return (
         <div className=" items-start h-screen w-full tablet:hidden  ">
           <div className="tablet:w-full mobile:w-full bg-primary text-white h-full mobile:p-1 tablet:p-32 flex flex-col tablet:justify-between mobile:justify-end ">
           <img src='./img/newme.png' className='p-16'></img>
                <div className='item-center flex  justify-center'>
                  <h1 className='text-white text-3xl font-serif'>DEVy</h1>
                   </div>
                   <a className='text-center font-mono  text-xs items-center'>Start Growing With DEVy Today</a>

                         <div className='px-5 pb-2 items-center flex justify-center text-center '>
                             <h2 className='text-white  font-mono text-xs'>Fast, Flexable, Easy to use. </h2>
                         </div>

                         <div className="w-full flex px-5 justify-end   mb-10">
                               <button className="w-full bg-white rounded-md p-3 text-center flex font-bold items-center justify-center text-black">
                                <a href='/buy'>Buy</a>
                               </button>

                               <button className="w-full bg-black rounded-md p-3 text-center flex font-bold items-center justify-center text-white">
                                <a href='/fin  '>Sell</a> 
                               </button>

                          </div>

                 </div>

         </div> 
    );
}

export default Rowl;