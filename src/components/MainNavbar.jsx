import React, { useState } from 'react'
import { navLinks } from '../constants'
import logo from '../assets/logo.png'
import { BsCart } from "react-icons/bs";
import open from '../assets/open.png'
import closemenu from '../assets/closemenu.png'

const MainNavbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-4 px-8 justify-between
    items-center navbar'>

      <img src={logo} alt='Preggify' className='w-[130px] ' />

      <ul className='list-none sm:flex hidden justify-center items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins 
          font-normal 
          cursor-pointer text-[20px]
            text-black mr-5 px-2`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className='sm:flex hidden pr-4'>
        <button type='button' className={`px-3 
    flex
    py-1.5
     bg-white
    font-poppins
     text-black
     rounded-[22px]
     border-2
    border-green-500
    mr-3`}>Login</button>

        <button type='button' className={`px-3 
    flex
    py-1.5
     bg-other
    font-poppins
     text-white
     rounded-[22px]
     border-2
    border-white-500`}>
          <BsCart className={`mt-0.5`} size={18} />
          <h5 className={`ml-2`}>My Cart</h5>
        </button>
      </div>

      <div className='sm:hidden flex 
      flex-1 justify-end
      items-center'>
        <img src={toggle ? closemenu : open}
          alt='menu'
          className='w-[33px] h-[32] object-contain z-40'
          onClick={() => setToggle((prev) => !prev)} />

        <div className={
          `${toggle ? 'flex' : 'hidden'} 
          p-6 mt-14 bg-other absolute top-20 
          right-0 mx-4 my-2
          min-w-[140px] rounded-xl sidebar`
        }>

          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-poppins font-normal 
          cursor-pointer text-[16px]
           ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}
            text-white`}>
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>

        </div>
      </div>

    </nav>
  )
}

export default MainNavbar