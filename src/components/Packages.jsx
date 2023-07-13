import React from 'react'
import styles from '../styles'
import { services } from '../constants'
import CartBtn from './CartBtn'

const Packages = () => {
    return (
        <div className='pb-5'>
            <h1 className='text-[25px] py-3 font-bold text-dimBlue flex justify-center items-center'>
                Our Packages
            </h1>

            <div className={`${styles.paddingY} ${styles.paddingX} justify-center py-2 px-5 grid grid-cols-3 gap-4 
        xx:grid-cols-1 gap-4   sm:grid-cols-3 gap-4 
        `}>

                {services.map((service) => (
                    <div key={service.id} className='border-2 border-black-500 px-2 shadow-right
                py-3 rounded-[20px] xx:ml-8 md:ml-4 w-[260px] lg:w-full'>

                        <div className='flex flex-row space-x-4 justify-start  ml-2'>
                            <img src={service.img} alt='img' className='w-[25px] mt-1 h-[25px] bg-black' />
                            <h1 className='text-[15px] font-bold text-dimBlue flex justify-center items-center'>
                                {service.name}
                            </h1>
                        </div>


                        <p className={`flex justify-center items-left mt-2 mb-2 ml-2`}>
                            {service.details}
                        </p>
                        <hr />

                        <div className='flex flex-row justify-center sm:space-x-2 md:space-x-10  '>
                            <div className='mr-2 mt-7'><h1>{service.price}</h1></div>
                            <div className='mt-5'><CartBtn /></div>
                        </div>
                    </div>
                ))}
            </div>

        </div>

    )
}

export default Packages