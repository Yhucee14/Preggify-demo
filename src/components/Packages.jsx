import React from 'react'
import styles from '../styles'
import { services } from '../constants'
import CartBtn from './CartBtn'

const Packages = () => {
    return (
        <div>
            <h1 className='text-[25px] py-3 font-bold text-dimBlue flex justify-center items-center'>
                Our Packages
            </h1>

            <div className={`${styles.paddingY} ${styles.paddingX}py-2 px-5 grid grid-cols-3 gap-4 
        xx:grid-cols-1 gap-4  sm:grid-cols-3 gap-4 
        `}>

                {services.map((service) => (
                    <div key={service.id} className='border-2 border-black-500 bg-dimother px-4
                py-5 rounded-[20px]'>
                        <h1 className='text-[15px] font-bold text-dimBlue flex justify-center items-center'>
                            {service.name}
                        </h1>

                        <p className={`flex justify-center items-center mt-2 mb-2 ml-3`}>
                            {service.details}
                        </p>
                        <hr />

                        <div className='flex flex-row justify-center space-x-10 '>
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