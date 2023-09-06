import { useState } from 'react'
import Avatar from '../../../public/avatar.avif'


export default function Nav() {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
        console.log('press')
    }



    return (

        <nav className='relative mx-8 mb-24 flex justify-between items-center pt-12 pb-6 font-medium md:mx-16'>
            <svg
                width='250'
                className=' absolute bottom-0 left-1/2 -translate-x-1/2'
                height={4}
                viewBox='0 0 250 4'
                fill='none'
                xmlns='http://www.w3.org/200/svg' >
                <path d="M2 2L428 2" strokeWidth={2} stroke='#282828' strokeLinecap='round' />
            </svg>
            <div>
                <img src={Avatar} alt="avatar" width={70} />
            </div>

            <div className='block md:hidden'>
            </div>
            <h1 className=' text-lg font-bold '>Arequipa</h1>

            <div className='flex gap-12 '>
                <a className='hidden md:block' href="">Home</a>
                <a className='hidden md:block' href="">Services</a>
                <a className='hidden md:block' href="">Contact </a>
            </div>

            <div onClick={handleNav} className='block md:hidden space-y-1 cursor-pointer z-50'>
                <span className='block h-0.5 w-8 bg-black'></span>
                <span className='block h-0.5 w-6 bg-black'></span>
                <span className='block h-0.5 w-4 bg-black'></span>
            </div>

            <div
                className={nav ? 'fixed flex left-0 top-0 w-full h-screen bg-white justify-center items-center md:hidden ease-in-out duration-300 z-10' : ' fixed left-[-100%]'}>
                <div className='flex flex-col gap-24 text-lg'>
                    <a className='' href="">Home</a>
                    <a className='' href="">Services</a>
                    <a className='' href="">Contact</a>
                </div>
            </div>





        </nav >
    )
}