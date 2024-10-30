import { Apple, GooglePlay } from 'iconsax-react'

 const CallToActionl =()=>{
    return(
        <section id="callToAction" className="reveal my-28 tablet:my-36">
            <div className="tablet:container tablet:mx-auto  mobile:mx-10 py-20">
                <div className="relative w-full flex flex-col justify-center items-center">
                    <h1 className='absolute w-full bg-mintGreen mobile:h-72 tablet:h-[350px] object-cover rounded-lg'></h1>

                    <div className="absolute flex flex-col items-center justify-center text-center space-y-5 px-5">
                        <h2 className='font-black text-2xl tablet:text-4xl desktop:text-4xl text-white'>Download <span className='text-primary'>the</span><br/><span className='text-primary'>DEVy</span> app now</h2>
                        <p className='mobile:text-base tablet:text-lg desktop:text-xl text-white'></p>
                         <div className="flex flex-row mobile:inline-flex mobile:space-y-0 mobile:space-x-2 tablet:flex-row tablet:space-x-8 tablet:space-y-0">
                            <button className='bg-primary rounded-md items-center py-2 px-6'>
                                <a href="/" className='flex flex-row items-center justify-center space-x-2 font-semibold text-white'>
                                    <Apple size={20}/>
                                    <span className='flex flex-col items-start'>
                                        <p className='mobile:text-[10px] tablet:text-sm'>Get on the</p>
                                        <p className='mobile:text-xs tablet:text-base'>App store</p>
                                    </span>
                                </a>
                            </button>

                            <button className='bg-white rounded-md py-2 px-6'>
                                <a href="/"  className='flex flex-row items-center justify-center space-x-2 font-semibold text-primary'>
                                    <GooglePlay size={20}/>
                                    <span className='flex flex-col items-start'>
                                        <p className='mobile:text-[10px] tablet:text-sm'>Download on</p>
                                        <p className='mobile:text-xs tablet:text-base'>Play store</p>
                                    </span>
                                </a>
                            </button>   
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallToActionl;