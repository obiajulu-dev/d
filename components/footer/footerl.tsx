
const Footerl=()=>{

    return(
      <footer className=" bg-mintGreen  ">
        <div className="mx-5  tablet:mx-auto tablet:container py-20 flex flex-col items-start space-y-5 tablet:flex-row tablet:space-y-0 tablet:py-32 tablet:justify-between ">
          <div className="w-full justify-center text-white font-lufga-bold text-2xl md:text-4xl md:w-2/3 lg:text-5xl flex flex-col md:space-y-2">
              <h1 className="text-center text-base py-5 md:py-0 font-bold">DEVy</h1>
               <span className="flex flex-row w-full justify-center items-center tablet:space-x-2">
                 <h6 className=" text-sm tablet:text-2xl">We no go carry your money run.</h6>
                </span>
                  <div className="flex justify-center text-center w-full flex-col font-lufga-light space-y-4 pt-3  md:pt-10 tablet:font-medium">
                    <a className="text-xs tablet:text-sm" href=""> Copyright © 2024 Devy. All rights reserved.</a>
                  </div>
           </div>
                    <div className="flex justify-center text-center w-full flex-row space-x-4 text-white font-semibold text-sm items-start tablet:items-start tablet:space-x-0 tablet:flex-col tablet:text-base tablet:space-y-14">
                      <a href="/devy">Home</a>
                      <a href="/swap">Swap</a>
                      <a href="/faq">FAQ </a>
                     </div>
         </div>
       </footer>
    )
}

export default Footerl;