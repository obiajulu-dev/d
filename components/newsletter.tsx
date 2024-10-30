const Newsletter =()=> {
    return(
        <div className="w-full py-16 text-white bg-primary px-4">
            <div className="w-full  tablet:mx-auto tablet:container grid laptop:grid-cols-3">
                <div className="laptop:col-span-2">
                    <h1 className="laptop:text-4xl tablet:text-3xl mobile:text-2xl font-bold py-2 ">Wants tips & tricks to optimize your flow?</h1>
                    <p>Sign up to our newsletter and stay up to date  </p>
                </div>
                <div className="my-4">
                    <div className="flex flex-col laptop:flex-row space-x-3 items-center justify-between w-full">
                        <input className="p-3 flex w-full outline-none rounded-md text-black " type="email" placeholder="Enter Email"/>
                        <button className="bg-mintGreen w-[200px] text-white rounded-md  font-medium my-6 mx-auto py-3">Notify Me</button>
                    </div>

                </div>

            </div>
           
        </div>
    )
}

export default Newsletter;