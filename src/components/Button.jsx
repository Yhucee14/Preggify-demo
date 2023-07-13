import React from 'react'
import { BsWhatsapp } from "react-icons/bs";

const Button = ({ styles }) => {
  return (
    <button type='button' className={`px-3 
    flex
    hover:bg-lightGreen hover:text-black 
    hover:border-2
    hover:border-black-500
    active:bg-lightGreen-100 active:text-black 
    focus:ring 
    focus:ring-black-400
    py-1.5
     bg-other
    font-quicksand
     text-white
     rounded-[22px]
     border-2
     mb-2
    border-white-500`}>
      <BsWhatsapp className={`mt-0.5`} size={18} />
      <h5 className={`ml-2`}>Chat Now</h5>
    </button>
  )
}

export default Button