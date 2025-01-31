
 const Footer=()=>{
     return(
        <footer className='bg-black mt-20 py-10'>
        <div className="tablet:container tablet:mx-auto mobile:mx-10">
            <div className="flex justify-between text-mintGreen items-start mobile:flex-col mobile:gap-8 tablet:flex-row  tablet:flex-wrap tablet:gap-20">
             {/* Logo */}
                   <div>
                       <h1 className="text-3xl text-white font-sans font-bold">DEVy</h1>
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
                    <div className="flex tablet:flex-col tablet:space-x-0 mobile:flex-row mobile:space-x-5 text-xs tablet:text-sm">
                        <a href="/" className='text-white'>Home</a>
                        <a href="/login" className='text-white'>Trade</a>
                        <a href="/login" className='text-white'>Utility</a>
                    </div>
                </div>

                <div className="flex-col items-start">
                    <h4 className="font-semibold text-sm tablet:text-lg">
                        Contact Us
                    </h4>
                    <div className="flex tablet:flex-col tablet:space-x-0 mobile:flex-row mobile:space-x-5 text-xs tablet:text-sm">
                        <a href="/" className='text-white'>X</a>
                        <a href="/" className='text-white'>Instagram</a>
                        <a href="/" className='text-white'>Mail</a>
           
                    </div>
                </div>


            </div>
        </div>
     </footer>

         
     
     )
 }
 
 export default Footer;