import { Location, Bitcoin, MusicCircle, BrushBig, Game, Microphone, ChemicalGlass, HeartCircle, Link2, Courthouse, Cup, Video, NoteText, People, Code1} from 'iconsax-react';

interface CategoryProps {
    link: string,
    title: string,
    icon: any
  }

  const Category: React.FC<CategoryProps> = ({ link, icon, title}) => {
    return (
        <button className="mobile:w-[44%] tablet:w-auto bg-midWhite rounded-lg p-4 m-2 tablet:p-8 tablet:my-4">
            <a href={link} className="flex flex-row space-x-4 items-center">
                <span className="text-mintGreen text-2xl">
                    {icon}
                </span>
                <h5 className='font-semibold text-xs tablet:text-base'>{title}</h5>
            </a>
      </button>
    );
  };

 const Utility=()=> {
    return(
        <div className='bg-black w-full flex '>
            <div className=" tablet:mx-auto tablet:container  space-y-10 tablet:py-10 mobile:my-6 mobile:mx-10 mobile:py-6 ">
                <div className="flex flex-col space-y-0 items-center">
                    <h2 className="tablet:text-4xl text-white font-extrabold mobile:text-3xl ">Utility</h2>
                    <span className="flex flex-row items-center space-x-2 text-mintGreen font-extrabold tablet:text-4xl  mobile:text-3xl">
                        <h2>Bills</h2>
                    </span>
                </div>

                <div className=" tablet:flex tablet:flex-row tablet:flex-wrap items-start tablet:justify-center">
                    <Category
                        icon=<Bitcoin/>
                        title='Waste Bill'
                        link='/swap'
                    />

                    <Category
                        icon=<Link2/>
                        title='Shopping'
                        link='/swap'
                    />

                    <Category
                        icon=<Link2/>
                        title='PayChoice'
                        link='/swap'
                    />

                    <Category
                        icon=<Link2/>
                        title='Travel & Hotel'
                        link='/swap'
                    />

                    <Category
                        icon=<Link2/>
                        title='Blackberry'
                        link='/swap'
                    />


                    <Category
                        icon=<Link2/>
                        title='Embassies'
                        link='/swap'
                    />

                    <Category
                        icon=<Link2/>
                        title='Government Payment'
                        link='/swap'
                    />

                    <Category
                        icon=<Link2/>
                        title='Product and Service'
                        link='/swap'
                    />

                    <Category
                        icon=<Link2/>
                        title='Invoice Payments  '
                        link='/swap'
                    />

                    <Category
                        icon=<Link2/>
                        title='Online Shopping'
                        link='/swap'
                    />

                   <Category
                        icon=<Link2/>
                        title='Merchant Payments'
                        link='/swap'
                    />

                    <Category
                        icon=<Link2/>
                        title='Religious'
                        link='/swap'
                    />

                    <Category
                        icon=<Link2/>
                        title='School & Exam '
                        link='/swap'
                    />

                    <Category
                        icon=<Link2/>
                        title='Internet Service'
                        link='/swap'
                    />
            </div>

                 <div className="mobile:w-full tablet:px-56 items-center justify-center flex flex-col  py-4 mb-6">
                     <button  className="w-full bg-mintGreen rounded-md p-3 text-center flex items-center justify-center text-white">
                        <a href='/swap'> Recharge Now </a>
                     </button>
                </div>

           </div>


        </div>
    )
}

export default Utility;
  