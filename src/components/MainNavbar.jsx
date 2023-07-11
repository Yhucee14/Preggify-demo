import React, { useState } from 'react'
import { navLinks } from '../constants'
import logo from '../assets/logo.png'
import { BsCart } from "react-icons/bs";
import open from '../assets/open.png'
import closemenu from '../assets/closemenu.png'
import styles from '../styles';

const MainNavbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-4 px-5 justify-between
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
        <button type='button' className={`${styles.navBtn} pt-1.5 mr-5`}>
          Login</button>

        <button type='button' className={`${styles.Button} w-[110px]`}>
          <BsCart className={`mt-0.5`} size={18} />
          <h5 className={`ml-2 sm:w-[100%] h-[100%]`}>My Cart</h5>
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
          p-6  bg-gradient-to-r from-green-900 via-green-600 to-green-400 absolute top-20 
          right-0 mt-28 my-2 mr-3
          min-w-[50%] min-h-[30%] rounded-xl sidebar
          xx:mt-30`
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