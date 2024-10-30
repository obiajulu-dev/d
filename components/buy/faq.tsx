
import {MessageQuestion,ArrowRight2,BinanceCoin} from 'iconsax-react';

const Faq=()=>{

    return(
        <main className='w-full bg-black flex h-full flex-col'>
             <nav className=" bg-black  top-0 left-0 w-[100vw] z-40">
            <div className="font-semibold relative tablet:container mobile:mx-10 tablet:mx-auto py-6">
                {/* Flex Container */}
                <div className="flex flex-row items-center justify-between">
                      {/* Logo */}
                      <div>
                          <a><BinanceCoin color='#37045D' variant='Bold' size={32} /></a>
                       </div>

                    {/* Menu Item */}
                    <div className="hidden space-x-10 tablet:flex tablet:items-center text-sm">
                        <a href="/" className="hover:text-primary">Home</a>
                        <a href="/profile" className="hover:text-primary text-primary">Profile</a>
                        
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
         <h1 className='font-bold tablet:text-2xl text-white font-sans'>Getting Started on Devy</h1>
        </div>

        <div className='bg-black h-full text-white mx-10 flex flex-col tablet:py-12   tablet:px-[150px] justify-center'>
           <div className='space-y-6 shadow-5xl tablet:py-8 mobile:py-3 px-5 rounded-2xl'>

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

            <details>
                <summary>About Devy?</summary>
                <span className='space-y-2 pl-3'>
                  <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem</p>
                  
                </span>
            </details>

            <details>
                <summary>About Devy ?</summary>
                <span className='space-y-2 pl-3'>
                  <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem</p>
                </span>
            </details>

            <details>
                <summary>About Devy ?</summary>
                <span className='space-y-2 pl-3'>
                  <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem</p>
                </span>
            </details>

            
           </div>
        </div>

        <footer className='bg-black mt-20 py-10'>
            <div className="tablet:container text-white tablet:mx-auto mobile:mx-10">
                <div className="flex justify-between items-start mobile:flex-col mobile:gap-8 tablet:flex-row  tablet:flex-wrap tablet:gap-20">
                 {/* Logo */}
                      <div>
                          <a><BinanceCoin color='white' variant='Bold' size={32} /></a>
                       </div>
                     
                    <div className="flex-col items-start">
                        <h4 className="font-semibold text-sm tablet:text-lg">
                            Are you a trader?
                        </h4>
                        <p className='text-mintGreen text-xs tablet:text-sm '>
                            <a href='/creator' className='text-white font-bold'>Create </a>your data with simplicity.
                        </p>
                    </div>

                    <div className="flex-col items-start">
                        <h4 className="font-semibold text-sm tablet:text-lg">
                            Our Links
                        </h4>
                        <div className="flex tablet:flex-row tablet:space-x-5 mobile:flex-row mobile:space-x-5 text-xs tablet:text-sm">
                            <a href="/" className='text-white'>Home</a>
                            <a href="/faq" className='text-white'>FAQ</a>
                            <a href="/profile" className='text-white'>Profile</a>
                        </div>
                    </div>

                    <div className="flex-col items-start">
                        <h4 className="font-semibold text-sm tablet:text-lg">
                            Contact Us
                        </h4>
                        <div className="flex tablet:flex-row tablet:space-x-5 mobile:flex-row mobile:space-x-5 text-xs tablet:text-sm">
                            <a href="/" className='text-white'>Twitter</a>
                            <a href="/" className='text-white'>Instagram</a>
                            <a href="/" className='text-white'>LinkedIn</a>
                            <a href="/" className='text-white'>Mail</a>
                        </div>
                    </div>


                </div>
            </div>
         </footer>

        
     
        </main>
    );
}

export default Faq;