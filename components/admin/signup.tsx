

const Signup=()=>{


    return(
        <div className=" bg-white mx-auto h-screen w-full ">
 
            <div className="flex px-5 md:px-48 lg:px-80 xl:px-[520px] gap-5 py-16 flex-col ">
                <span className="flex justify-center ">
                  <img src='./img/upao-logo.png' className="md:w-20 w-16" />
                </span>
              
               <h3 className="text-black font-sans font-bold text-xl text-center">Sign in to UPAO Record Portal</h3>

               <div className="flex flex-col rounded-md shadow bg-black bg-opacity-5 py-5 px-3  justify-center">
               <div className=" text-black flex flex-col mb-4">
                            <h1 className="text-xs">Name</h1>
                            <div className='border border-y-2 text-xs rounded-md px-2 bg-white py-2'>
                                <input
                                type="name"
                                placeholder=""
                                required
                                className="w-full text-black outline-none"
                                 />
                            </div>
                     </div>

                   <div className=" text-black flex flex-col mb-4">
                            <h1 className="text-xs">Email</h1>
                            <div className='border border-y-2 text-xs rounded-md px-2 bg-white py-2'>
                                <input
                                type="email"
                                placeholder=""
                                required
                                className="w-full text-black outline-none"
                                 />
                            </div>
                     </div>

                     <div className="w-full text-black  flex flex-col mb-4">
                         <h1 className="text-xs"> Password</h1>
                         <div className='border border-y-1 bg-white rounded-md text-xs px-2 py-2'>
                             <input
                             type="password"
                             placeholder="" 
                             required
                             className="w-full text-black outline-none" 
                             />
                         </div>
                     </div>

  
                     <div className="w-full flex flex-col">
                        <button className="w-full bg-[#3E8E41] rounded-md p-2 text-center flex font-bold items-center justify-center text-white">
                         <a href='/' className="text-xs">Sign Up</a>
                        </button>
                    </div>
               </div>

            </div>

            
        </div>
    )
}

export default Signup;