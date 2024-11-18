
import {MessageQuestion,ArrowRight2,BinanceCoin} from 'iconsax-react';

const Faq=()=>{

    return(
        <main className='w-full bg-white flex h-full flex-col'>
             <nav className=" bg-white  top-0 left-0 w-[100vw] z-40">
            <div className="font-semibold relative tablet:container mobile:mx-10 tablet:mx-auto py-6">
                {/* Flex Container */}
                <div className="flex flex-row items-center justify-between">
                      {/* Logo */}
                      <div>
                          <a>DEVy</a>
                       </div>

                    {/* Menu Item */}
                    <div className="hidden space-x-10 tablet:flex tablet:items-center text-sm">
                        <a href="/" className="hover:text-primary">Home</a>
                        <a href="/profile" className="hover:text-primary text-primary">Profile</a>
                        <a>Trade</a>
                    </div>


                 


                </div>
            </div>

        
            <div className="mobile:inline tablet:hidden">
                <div className="mx-10 relative flex-col items-start hidden py-10 font-semibold text-lg h-auto bg-white z-50">
                    <div className="textReveal flex flex-col text-left space-y-6 text-sm font-bold">
                        <a href="/fin" className=" hover:text-primary hover:translate-x-2">Home</a>
                        <a href="/signup/signup" className="hover:text-primary hover:translate-x-2">Sign Up</a>

                      
                    </div>

                    
                </div>
            </div>
        </nav>  

        <div className="flex mobile:mx-10 tablet:mx-auto text-white ">
                <h1 className=" font-sans text-xs font-bold">All collections </h1>
                <ArrowRight2 size={15} className=''/>
                <h2 className='text-xs'>Getting Started on Devy</h2>
             </div>

        <div className=' mobile:mx-10 py-3  tablet:mx-auto'>
              <MessageQuestion size={40} color='#37045D'/>
        </div>            
             
        <div className='mobile:mx-10  pb-6  tablet:mx-auto'>
         <h1 className='font-bold tablet:text-2xl text-black'>Getting Started DEVy</h1>
        </div>

        <div className='bg-white h-full text-black  mx-20  flex flex-col tablet:py-12   tablet:px-[150px] justify-center'>
           <div className='space-y-6 bg-midWhite shadow-5xl tablet:py-8 mobile:py-3 px-10 rounded-2xl'>

           <details>
                <summary>You cant login to your account?</summary>
                <span className='space-y-2 pl-34'>
                  <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem</p>
                  
                </span>
            </details>

            <details>
                <summary>About Devy?</summary>
                <span className='space-y-2 pl-34'>
                  <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem</p>
                  
                </span>
            </details>

            <details>
                <summary>About Devy?</summary>
                <span className='space-y-2 pl-34'>
                  <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem</p>
                  
                </span>
            </details>

            <details>
                <summary>About Devy?</summary>
                <span className='space-y-2 pl-34'>
                  <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem</p>
                  
                </span>
            </details>

            <details>
                <summary>About Devy?</summary>
                <span className='space-y-2 pl-34'>
                  <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem</p>
                  
                </span>
            </details>

            <details>
                <summary>About Devy?</summary>
                <span className='space-y-2 pl-3'>
                  <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem</p>
                  
                </span>
            </details>



            
           </div>
        </div>

        
        
     
        </main>
    );
}

export default Faq;