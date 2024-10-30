
const Hero=()=>{

  return(
      <section id='hero' className="  bg-primary w-full h-full text-white mobile:hidden tablet:flex">
            
            <div className="tablet:mx-auto tablet:container space-x-5 flex justify-between ">

                 <div className='w-1/2 tablet:mx-auto flex  '>
                    <div className=" content-center">
                        <img src='./img/newme.png' className=' '></img>
                    </div>
                 </div>

            <div className="w-1/2   mobile:h-screen   text-center flex flex-col justify-center">
              <p className="uppercase text-mintGreen font-bold p-2">Growing with Devy</p>
              <h1 className=" tablet:text-5xl font-bold laptop:py-6">Grow with your data.</h1>
              <div>
                <p className="laptop:text-5xl tablet:text-4xl mobile:text-xl font-bold ">Fast, Flexable, Easy to use </p>
            {/*}    <Typed    />*/}
              </div>

              <div className=" flex px-20 py-5 justify-end   mb-10">
                  <button className="w-full bg-white rounded-md p-3 text-center flex font-bold items-center justify-center text-black">
                   <a href='/signup'>Get Started</a>
                  </button>
              </div>

            </div>



        </div>
     </section>
  )
}

export default Hero;