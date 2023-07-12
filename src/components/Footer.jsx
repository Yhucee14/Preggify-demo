import React from 'react'
import logo from '../assets/logo.png'
import { navLinks, socialMedia } from '../constants'
import styles from '../styles'

const Footer = () => {
  return (
    <div className={`${styles.sectionGridThree}  px-3 py-3 bg-dimBlue`}>
      <img src={logo} alt='Preggify' className='w-[130px] sm:flex hidden bg-white mt-2 ml-5' />

      <ul className='list-none sm:flex hidden 
        justify-center items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins 
          font-semibold
          cursor-pointer text-[18px]
            text-white mr-2 px-2`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className='flex flex-col mb-2 justify-center items-center'>
        <p className='font-semibold py-2 mr-2 text-white'>All Rights Reserved</p>
        
        <div className='flex flex-row  mr-1'>
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt='social.id'
            className={`w-[21px] h-[21px] mr-3  object-contain
              cursor-pointer`} />
        ))}
        </div>
     
      </div>

    </div>
  )
}

export default Footer