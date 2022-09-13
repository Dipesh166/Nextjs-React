import {Element} from 'react-scroll'
import {GiCardboardBox} from 'react-icons/gi'
import {HiColorSwatch} from 'react-icons/hi'
import {MdDeveloperBoard} from 'react-icons/md'
import {AiOutlineBlock} from 'react-icons/ai'

function Service() {
  return (
    < Element id='services' name='services'>
      <div className='w-full my-40 h-auto flex flex-col justify-center items-center'>
        <p className='text-sm uppercase text-gray-400 '>My skills</p>
        <h1 
        className='text-rose-900 text-6xl font-bold text-center'>
          My Expertise
          </h1>
          <div className='flex justify-items-start items-center mx-40 gap-10 mt-20'>
            
            <div className='flex flex-col justify-center items-center'>
              {/*first b;ock */}
              <div className='flex justify-center items-center cursor-pointer'>
                <GiCardboardBox className='w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md'/>
                <h2 className='text-xl text-rose-600 font-semibold'>Strategy & Direction</h2>

              </div>
              <p className='md:text-base text-gray-400 
              md:text-center sm:text-left sm:text-sm'>Lorem ipsum 
              dolor sit amet consectetur adipisicing elit. Laborum, deleniti!
              Lorem ipsum 
              dolor sit amet consectetur adipisicing elit. Laborum, deleniti!
            
              </p>

            </div>

            <div className='flex flex-col justify-center items-center'>
              {/*second b;ock */}
              <div className='flex justify-center items-center cursor-pointer'>
                <HiColorSwatch className='w-10 h-10 bg-red-400 text-gray-100 m-3 p-1 shadow-xl rounded-md'/>
                <h2 className='text-xl text-rose-600 font-semibold'>
                  Logo Design</h2>

              </div>
              <p className='md:text-base text-gray-400 
              md:text-center sm:text-left sm:text-sm'>Lorem ipsum 
              dolor sit amet consectetur adipisicing elit. Laborum, deleniti!
              Lorem ipsum 
              dolor sit amet consectetur adipisicing elit. Laborum, deleniti!
              </p>

            </div>

          </div>
          {/* Second Section*/}
          <div className='flex justify-items-start items-center mx-40 gap-10 mt-20'>
            
            <div className='flex flex-col justify-center items-center'>
              {/*first b;ock */}
              <div className='flex justify-center items-center cursor-pointer'>
                <AiOutlineBlock className='w-10 h-10 bg-green-400 text-gray-100 m-3 p-1 shadow-xl rounded-md'/>
                <h2 className='text-xl text-rose-600 font-semibold'>Video Editing & After Effect</h2>

              </div>
              <p className='md:text-base text-gray-400 
              md:text-center sm:text-left sm:text-sm'>Lorem ipsum 
              dolor sit amet consectetur adipisicing elit. Laborum, deleniti!
              Lorem ipsum 
              dolor sit amet consectetur adipisicing elit. Laborum, deleniti!
            
              </p>

            </div>

            <div className='flex flex-col justify-center items-center'>
              {/*second b;ock */}
              <div className='flex justify-center items-center cursor-pointer'>
                <MdDeveloperBoard className='w-10 h-10 bg-blue-400 text-gray-100 m-3 p-1 shadow-xl rounded-md'/>
                <h2 className='text-xl text-rose-600 font-semibold'>
                  Web Development</h2>

              </div>
              <p className='md:text-base text-gray-400 
              md:text-center sm:text-left sm:text-sm'>Lorem ipsum 
              dolor sit amet consectetur adipisicing elit. Laborum, deleniti!
              Lorem ipsum 
              dolor sit amet consectetur adipisicing elit. Laborum, deleniti!
              </p>

            </div>

          </div> 
          


      </div>
    </Element>
    
  )
}

export default Service