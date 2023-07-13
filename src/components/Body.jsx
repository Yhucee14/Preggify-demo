import React from 'react'
import styles from '../styles'
import { services } from '../constants'

const Body = () => {
  return (
    <section className={`bg-dimother pl-10 ${styles.sectionGrid}`}>

      <div className={` ${styles.flexStart} 
      flex-col xl:px-0 sm:px-6 px-6  `}>

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

        <div className='flex flex-col justify-between items-start w-full'>
          <h1 className='justify-center text-[20px] font-bold text-dimBlue pb-1 text-center'>Welcome To Preggify</h1> 
          <h1 className={`${styles.heading2} xx:w-full text-[24px] md:w-[70%]`}>
            Convenience And Ease
            At Your Finger Tips.
          </h1>

        </div>


        <p className={`${styles.paragraph}  max-w-[420px] mt-2 mb-2`}>
        Preggify is a health-tech startup offering flexible tech-driven solution to career women who are hard-pressed to juggle
         motherhood and career through our various services.
        </p>

        <button type='button' className={`px-3 
    flex
    py-1.5
    bg-gradient-to-r from-green-900 via-green-600 to-green-400
    font-poppins
     text-white
     rounded-[22px]
     border-2 
    border-black-500`}>
          <h5 >Get Started</h5>
        </button>

      </div>

      <div className={` ${styles.flexCenter} 
      rounded-[12px]
      flex-row xx:mt-3 px-6 py-5 bg-dimother border-2 border-black-500
      xx:w-[310px]  h-[90%] xx:ml-2`}>

        <div className=' items-center py-[6px]
        px-4 rounded-[10px] mb-2 '>
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
              Home sample collection.</span>

          </p>

          <h1 className='flex-1 font-poppins font-semi-bold
           text-dimBlue text-[13.5px] py-2 justify-center items-center
          '>
            Choose A Package that suits you
          </h1>

          <div className={` ${styles.blockCenter}`}>
            {services.map((service) => (
              <div key={service.id} className={`items-center py-[6px]
          rounded-[10px] mb-1 w-[100%] `}>
                <p className={`${styles.paragraph} `}>
                  <button
                    className={` 
               flex flex-col
               bg-white
               hover:bg-green-100
               active:bg-green-100
               focus:ring 
               focus:ring-green-200
               font-poppins
                text-black
                font-semi-bold
                text-[15px]
                rounded-[22px]
                border-2
               border-gray-300
               py-1
               px-2  w-[100%] justify-center items-center
               `}
                  >

                    
                      <h6 className='justify-center items-center text-bold py-2'>{service.name}</h6>
                  
                     <div className='flex flex-row space-x-24'>
                      <div className='justify-items-start text-black text-semibold'>{service.price}</div>
                     <div className=' ml-4'>
                      <img src={service.icon} alt='img' className='w-[21px] mt-1 h-[21px] bg-black'/>
                     </div>
                      
                      </div>

                  </button>
                </p>
              </div>
            ))}

            <h4 className={`${styles.flexCenter} font-poppins font-semi-bold
           text-dimBlue text-[10px] py-2`}>
              All offers are for a limited time.
            </h4>
          </div>
        </div>

      </div>


    </section>
  )
}

export default Body