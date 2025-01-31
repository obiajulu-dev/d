import {  ProfileCircle, Back, DocumentCode,Edit2 } from 'iconsax-react'
import { Location,Bitcoin, Link2} from 'iconsax-react';

interface CategoryProps {
    link: string,
    title: string,
    icon: any
  }

  const Category: React.FC<CategoryProps> = ({ link, icon, title}) => {
    return (
        <button className="mobile:w-[44%] tablet:w-auto bg-midWhite rounded-lg p-4 m-2 tablet:p-8 tablet:my-4">
            <a href={link} className="flex flex-row space-x-4 items-center">
                <span className="text-primary text-2xl">
                    {icon}
                </span>
                <h5 className='font-semibold text-xs tablet:text-base'>{title}</h5>
            </a>
      </button> 
    );
  };
  const Profile=()=>{


    return (
         <div className='bg-white h-full mobile:py-0 tablet:py-5 mobile:px-0 tablet:px-34 '>
            <div className='shadow  w-full h-full mobile:inline tablet:flex rounded-lg bg-primary'>
                <div className='tablet:w-1/2 bg-white rounded-lg h-full'> 



                     <div className='flex items-center pt-16 justify-center'>
                        <img src='/img/newme.png' className='rounded-full w-40 h-40'/>
                     </div>
                   
                   <div className='p-6 flex justify-between  text-black'>
                   <div className='  '>
                      <h1 className='text-xl font-sans font-bold first-letter:'>obiajulu-dev </h1>
                      <p>pr********@gmail.com</p>
                       <p>$1500.00</p>
                   </div>

                   <div>
                    <button>
                    <a className='font-bold text-xs lg:text-base'>Edit</a>
                    </button>
                    

                   </div>
                    
                   </div>

                   <div className='p-10 laptop:px-36 '>
                      <a href='/withdraw' className='lg:text-2xl w-full text-base text-white shadow bg-black rounded-lg flex justify-center font-serif font-bold '>
                         Withdraw    
                       </a>
                   </div>
                   
                   <div className='border-b-2 border-b-black'>

                   </div>

                   <div className=' w-full p-5 flex  h-full justify-between mobile:bg-white tablet:bg-midWhite mobile:text-black  tablet:text-black'>
                    <div className='h-full'>
                      <h1 className='text-xl font-sans font-bold'>Transaction History</h1>              
                      <div className='flex py-3 gap-16'>
                        <h1 className='font-bold'>Transac rececived 0.0234</h1>
                        <a className='text-accent'>+0.0234</a>
                      </div>

                      <div className='flex py-3 gap-16'>
                        <h1 className='font-bold'>Transac rececived 0.0234</h1>
                        <a className='text-accent'>+0.0234</a>
                      </div>

                      <div className='flex py-3 gap-16'>
                        <h1 className='font-bold'>Transac rececived 0.0234</h1>
                        <a className='text-accent'>+0.0234</a>
                      </div>

                      <div className='flex py-3 gap-16'>
                        <h1 className='font-bold'>Transac rececived 0.0234</h1>
                        <a className='text-accent'>+0.0234</a>
                      </div>

                      <div className='flex py-3 gap-16'>
                        <h1 className='font-bold'>Transac rececived 0.0234</h1>
                        <a className='text-accent'>+0.0234</a>
                      </div>

                      <div className='flex py-3 gap-16'>
                        <h1 className='font-bold'>Transac rececived 0.0234</h1>
                        <a className='text-accent'>+0.0234</a>
                      </div>
                    </div>


                   </div>

                   <div className='p-4 pt-16 flex justify-end mobile:hidden tablet:inline'>
                   <a href='/'><Back variant='Bold' size={32} color='white'/> </a>
                    
                   
                   </div>
                   

                </div>  
                <div className='border-l-2 border-l-black'>                
                    
                </div>

                 <div className='tablet:w-full flex-row justify-between bg-white  text-black'>
                    <div className=' mobile:p-6      tablet:p-10 border-b-2 pb-28 border-b-black'>
                        <h1 className='text-xl font-sans font-bold'>Details</h1>
                        <p>introduce yourself brother,sister......</p>
                    </div>  
                           <div className='p-10'>
                               <h1 className='text-xl font-sans font-bold'>Owned Coin</h1>
                               <div className="flex-col tablet:flex-row tablet:flex-wrap text-black items-start tablet:justify-center">
                               <Category
                               icon=<Bitcoin/>
                               title='Bitcoin'
                               link='/'
                           />
       
                           <Category
                               icon=<Link2/>
                               title='Ethereum'
                               link='/'
                           />
       
                           <Category
                               icon=<Link2/>
                               title='Tether'
                               link='/'
                           />
       
                           <Category
                               icon=<Link2/>
                               title='Solana'
                               link='/'
                           />
                           </div>
                 </div>

                 <div className='px-5 pb-3'>
                    <button className='font-bold'>
                        <a href='/login  '>Sign out</a>
                    </button>
                 </div>

                 <div className='text-center font-bold pb-4'>
                    <h1>Obiajulu-dev</h1>
                 </div>


                 </div>
            
            </div>
          
         </div>
    );
}

export default Profile;