import React from 'react'
import Image from 'next/image'
import heroimage from '../public/yo.png';
import {Element} from 'react-scroll'
import Link from 'next/link'



function HOMEPAGE() {
    return (
        <Element id='home' name='home' >
        <div>
            <div className='flex justify-between text-center md:mx-20 md:pt-32 pt-28'>
                <div className='w-3/4 h-96 shadow-xl rounded-full relative px-10 hidden md:block shadow-red-400'>
                    <Image src={heroimage}
                        alt='heroimage'
                        layout='fill'
                        objectFit='cover'
                        className='rounded-full cursor-pointer hidden md:block ' />


                </div>
                <div className='flex flex-col md:ml-20 mx-10 mt-10'>
                    <h1 className='font-bold text-7xl text-left mb-5'>
                        Hello! I am <span className='text-rose-900 ' >Risha</span>
                    </h1>
                    <p className='text-left font-normal mb-5 flex-wrap'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eaque quasi fugit suscipit nisi quas mollitia!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eaque quasi fugit suscipit nisi quas mollitia!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eaque quasi fugit suscipit nisi quas mollitia!



                    </p>
                    <Link href='/Blog' >
                        <a className='font-semibold text-white md:mt-10 mt-5 pt-5 rounded-md bg-rose-900 w-60 h-16 text-lf hover:bg-black'>
                        See My Blog !
                        </a>
                       
                    </Link>



                </div>

            </div>
            
        </div>
        </Element>
    )
}

export default HOMEPAGE