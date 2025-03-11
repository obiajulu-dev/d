
 const Footer=()=>{
     return(
        <footer className='bg-black mt-20 py-10'>
        <div className="tablet:container tablet:mx-auto mobile:mx-10">
            <div className="flex justify-between text-mintGreen items-start mobile:flex-col mobile:gap-6 tablet:flex-row  tablet:flex-wrap tablet:gap-20">
             {/* Logo */}
                   <div>
                       <h1 className="tablet:text-3xl text-sm text-white font-sans font-bold">DEVy</h1>
                    </div>
                 
                <div className="flex-col items-start">
                    <h4 className="font-semibold text-sm tablet:text-lg">
                        Are you a trader?
                    </h4>
                    <p className='text-midBlack text-xs tablet:text-sm '>
                        <a href='/login' className='text-white font-bold'>Create </a>your data with simplicity.
                    </p>
                </div>

                <div className="flex-col items-start">
                    <h4 className="font-semibold text-sm tablet:text-lg">
                        Our Links
                    </h4>
                    <div className="flex tablet:flex tablet:space-x-4 mobile:flex-row mobile:space-x-5 text-xs tablet:text-sm">
                        <a href="/" className='text-white'>Home</a>
                        <a href="/login" className='text-white'>Trade</a>
                        <a href="/login" className='text-white'>Utility</a>
                    </div>
                </div>

                <div className="flex-col items-start">
                    <h4 className="font-semibold text-sm tablet:text-lg">
                        Contact Us
                    </h4>
                    <div className="flex tablet:flex tablet:space-x-4 mobile:flex-row mobile:space-x-5 text-xs tablet:text-sm">
                        <a href="/" className='text-white'>X</a>
                        <a href="/" className='text-white'>Instagram</a>
                        <a href="/" className='text-white'>Mail</a>
           
                    </div>
                </div>


            </div>

            <div className=" p-3"><p className="border-t-2 bg-mintGreen"></p></div>

            <div className="flex justify-center p-3  text-white">
            <a className="text-xs" href=""> Copyright © 2025 DEVy. All rights reserved.</a>
            </div>
        </div>
     </footer>

         
     
     )
 }
 
 export default Footer;