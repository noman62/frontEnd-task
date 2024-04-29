import {useState } from 'react'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'


const Header = () => {
 
  let [open, setOpen] = useState(false)

  

  let Links = [{ name: 'HOME', link: '/' }]

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        {/* Menu icon */}
        <div className='relative flex-1'>
          <input
            type='text'
            placeholder='Search'
            className='pl-10 pr-4 py-2  rounded-md focus:outline-none focus:border-blue-500 w-full'
          />
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 text-gray-400'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
              />
            </svg>
          </div>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* link items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-12' : 'top-[-490px]'
          }`}
        >
          {Links.map((link, key) => (
            <li key={key} className='md:ml-8 md:my-0 my-7 font-semibold'>
              <a
                href={link.link}
                className='text-gray-800 hover:text-blue-400 duration-500'
              >
                {link.name}
              </a>
            </li>
          ))}

        </ul>
      </div>
    </div>
  )
}

export default Header
