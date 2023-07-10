import React from 'react'

const CartBtn = () => {
  return (
    <button type='button' className={`px-3 
    flex
    hover:bg-dimBlue hover:text-white
    hover:border-2
    hover:border-black-500
    active:bg-lightGreen-100 active:text-black 
    focus:ring 
    focus:ring-black-400
     bg-other
    font-poppins
     text-white
     rounded-[22px]
     border-2
     mb-2
    border-white-500
    py-1.5 sm:px-3 w-[100%] ` }>
      <h5>Add to Cart</h5>
    </button>
  )
}

export default CartBtn