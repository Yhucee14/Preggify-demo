import React from 'react'
import styles from '../styles'
import { services } from '../constants'

const Body = () => {
  return (
    <section className={`flex md:flex-row flex-col bg-dimother
    ${styles.paddingY} ${styles.paddingX}`}>

      <div className={`flex-1 ${styles.flexStart} 
      flex-col xl:px-0 sm:px-6 px-6 md:w-[50%]`}>

        <div className='flex flex-row items-center py-[6px]
        px-4 rounded-[10px] mb-2 ml-[-25px]'>
          <p className={`${styles.paragraph}`}>
            <span
              className={` ${styles.flexCenter}
              flex
              items-center
               bg-white
              font-poppins
               text-black
               rounded-[22px]
               border-2
              border-green-500
              py-1
              px-2
              `}
            >
              7am - 6am, Mon - Sat</span>
          </p>
        </div>

        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semi-bold
          ss:text-[32px] text-dimBlue text-[24px] xx:ml-[-3px]
          '>
            Let's deliver <span className='text-bold'
            >healthcare</span>
            <br />
            <span>to you at home. </span>
          </h1>
        </div>


        <p className={`${styles.paragraph}  max-w-[420px] mt-2 mb-2`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, placeat?
        </p>

        <button type='button' className={`px-3 
    flex
    py-1.5
     bg-other
    font-poppins
     text-white
     rounded-[22px]
     border-2 
    border-black-500`}>
          <h5 >Get Started</h5>
        </button>

      </div>

      <div className={` ${styles.flexCenter} 
      flex-row xx:mt-3 px-6 bg-white 
      xx:w-[310px] md:w-[50%] xx:ml-2`}>

        <div className=' items-center py-[6px]
        px-4 rounded-[10px] mb-2'>
          <p className={`${styles.paragraph} ml-2`}>
            <span
              className={` ${styles.flexCenter}
              flex
              items-center
               bg-lightGreen
              font-poppins
               text-bold
               rounded-[22px]
               text-[15px]
               border-2
              border-black-500
              px-2
              `}
            >
              Home sample collection</span>
              
          </p>

          <h1 className='flex-1 font-poppins font-semi-bold
           text-dimBlue text-[14px] py-2
          '>
            Choose A Package that suits you
          </h1>

          <div className={` ${styles.blockCenter}`}>
      {services.map((service) => (
         <div key={service.id} className={`items-center py-[6px]
          rounded-[10px] mb-1 w-[100%]`}>
           <p className={`${styles.paragraph} `}>
             <span
               className={` 
                bg-white
               font-poppins
                text-black
                rounded-[22px]
                border-2
               border-green-500
               py-1
               px-2
              
               `}
             >
               {service.name}</span>
           </p>
         </div>
      ))}
      </div>
        </div>

     
  

      

      </div>


    </section>
  )
}

export default Body