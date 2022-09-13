import React from 'react'
import Image from 'next/image'
import jarvis from '../public/jarvis.jpg';


function Vlog() {
  return (
    
    <div>
        <div className=' pt-28 pb-12 flex  justify-center'>
          <h1 className='text-3xl font-bold text-fuchsia-800 lg:text-6xl md:text-4xl'> " Blog "</h1>
        
        </div>
        <div className='p-30 flex flex-row gap-10'>
            <div className=' pl-40 md:pl-30 '>
                <div className='h-10 w-25'>
                    <Image src={jarvis}  alt='heroimage'
                        
                         className="rounded-2xl shadow-lg" />
                </div>

            </div>
           
            <div className=' flex flex-col  '>
               
                
               <h1 className=' pr-40 mr-40 font-bold font-sans text-black lg:text-3xl md:text-2xl sm:text-1xl'>How Ai is eating 
               Human brain in this 2022 !!!</h1>
               <p className='text-left font-normal pr-40 mr-40 mb-6 flex-wrap'>Lorem, 
                ipsum dolor sit amet consectetur adipisicing elit. Eos quisquam sint, cupiditate 
                veritatis amet alias eaque eveniet molestias veniam, ea reiciendis aperiam! Nihil, 
                lorem 14
                jskjfjajflajfajfja ajfjajf;afajkjfa; ajf;lalfj;af;a;fj;aj;faj;fajfajf;ajfajf;ajf;a
                maxime.</p>
                <div>
                <button className='flex justify-center  py-2 px-8 text-md  bg-blue-300 text-black rounded-xl hover:bg-black hover:text-white '> READ</button>
                </div>

            </div>
           

        </div>
       
       

    </div>
  )
}

export default Vlog