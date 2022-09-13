import {AiTwotoneHeart} from 'react-icons/ai'

function Footer() {
  return (
    <div className='w-full h-16 bg-gray-50 flex justify-center items-center'>

        <h1 className='text-xl text-red-900'>Made by </h1>
        <AiTwotoneHeart className='text-black'/>
        <h1 className='text-xl text-red-900 ml-2 '>
            created by <a href='#' className='cursor-pointer font-semibold text-rose-900 hover:text-black'>Dipesh</a>
        </h1>
        </div>
  )
}

export default Footer