
import {MessageQuestion,ArrowRight2,ArrowDown2,BinanceCoin} from 'iconsax-react';

const Faq=()=>{

    return(
        <main className='w-full bg-white flex h-full flex-col'>
             <div className="flex mobile:mx-auto pt-5 tablet:mx-auto text-black ">
                <h1 className=" font-sans text-xs font-bold">All collections </h1>
                <ArrowRight2 size={15} className=''/>
                <h2 className='text-xs'>Getting Started on DEVy</h2>
             </div>

                <div className=' mobile:mx-auto py-3  tablet:mx-auto'>
                      <MessageQuestion size={40} color='#6cae75'/>
                </div>            
             


        <div className='bg-white h-full text-black  mx-10  flex flex-col tablet:py-1 tablet:pb-10 py-3   tablet:px-[150px] justify-center'>
           <div className='space-y-6 bg-mintGreen text-white shadow-5xl tablet:py-8 mobile:py-3 px-5 rounded-2xl'>

            <div className='  pb-6  tablet:mx-auto'>
              <h1 className=' tablet:text-2xl text-2xl  text-white'>Frequently Asked Questions </h1>
            </div>
   
           <details>
                <summary className='mobile:text-sm  flex list-none tablet:text-sm'>Lorem Ipsum Lorem Ipsum Lorem?</summary>
                <span className='space-y-2 pl-34'>
                  <p className='mobile:text-xs tablet:text-sm'>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem</p>
                  
                </span>
            </details>

            <details>
                <summary className='mobile:text-sm list-none tablet:text-sm'>Lorem Ipsum Lorem Ipsum Lorem?</summary>
                <span className='space-y-2 pl-34'>
                  <p className='mobile:text-xs tablet:text-sm'>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem</p>
                  
                </span>
            </details>

            <details>
                <summary className='mobile:text-sm list-none tablet:text-sm'>Lorem Ipsum Lorem Ipsum Lorem?</summary>
                <span className='space-y-2 pl-34'>
                  <p className='mobile:text-xs tablet:text-sm'>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem</p>
                  
                </span>
            </details>

            <details>
                <summary className='mobile:text-sm list-none tablet:text-sm'>Lorem Ipsum Lorem Ipsum Lorem?</summary>
                <span className='space-y-2 pl-34'>
                  <p className='mobile:text-xs tablet:text-sm'>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem</p>
                  
                </span>
            </details>

            <details>
                <summary className='mobile:text-sm list-none tablet:text-sm'>Lorem Ipsum Lorem Ipsum Lorem?</summary>
                <span className='space-y-2 pl-34'>
                  <p className='mobile:text-xs tablet:text-sm'>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem</p>
                  
                </span>
            </details>

            <details>
                <summary className='mobile:text-sm list-none tablet:text-sm'>Lorem Ipsum Lorem Ipsum Lorem?</summary>
                <span className='space-y-2 pl-34'>
                  <p className='mobile:text-xs tablet:text-sm'>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem</p>
                  
                </span>
            </details>


            
           </div>
        </div>

        
        
     
        </main>
    );
}

export default Faq;