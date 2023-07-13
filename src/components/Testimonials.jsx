import React from 'react'
import '../index.css'
import { clientInfo } from '../constants'
import styles from '../styles'
import quotes from '../assets/quotes.png'

const Testimonials = () => {
  return (
    <div className='pb-3'>
        <h1 className='text-[25px] py-3 font-bold text-dimBlue flex justify-center items-center'>
                Testimonials
            </h1>
        <p className='text-[15px] xx:px-5 py-3 sm:px-2 py-3 font-bold text-dimBlue flex justify-center items-center text-center'>At Preggify, our goal is to promote all-round career fulfilment for women in their reproductive years.</p>

        <div className={`${styles.sectionGridThree} px-3 py-3 `}>
    {clientInfo.map((client) => (
      <div key={client} className='rounded-[20px] bg-dimother px-3 py-3 border-2 mb-2 border-dimBlue-500 shadow-right'>
         <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain ml-[40%]" />
        <p className={`${styles.flexCenter} ${styles.paragraph} pb-2`}>{client.words}</p>
        <hr />
        <div className='flex flex-row'>
          <img src={client.image} alt='img' className='w-[45px] h-[48px] mt-2'/>
          <div className='px-1 py-2 ml-3'>
            <h6 className='font-semibold'>{client.name}</h6>
            {client.role}
          </div>
        </div>
      </div>
    ))}
   
  </div>
    </div>

  )
}

export default Testimonials