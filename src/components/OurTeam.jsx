import React from 'react'
import styles from '../styles'
import { teamInfo, socialMedia } from '../constants'

const OurTeam = () => {
    return (
        <div className='h-[100%] xx:px-3 py-4 sm:py-12 px-12 border-2 border-black-200'>
            <h1 className='text-[25px] py-5 font-bold text-dimBlue flex justify-center items-center'>
                Our Team
            </h1>
            <section className={`${styles.sectionGrid}  `}>
                {teamInfo.map((info) => (
                    <div key={info} className={`${styles.sectionGridOne} py-2 rounded-[15px] border-2 border-green-200 h-[100%] bg-dimother`}>
                        <img src={info.image} alt='img' className='rounded-[15px]  w-full h-full' />

                        <div className='flex flex-col'>
                            <h1 className='text-[17px] py-1 font-bold text-dimBlue flex px-3'>{info.name}</h1>
                            <h6 className='font-semibold px-3'>{info.role}</h6>
                            <p className={`font-quicksand font-normal leading-[30.8px] text-black text-[14.5px] px-3 py-1`}>{info.desc}</p>
                            <hr />

                            <div className='flex flex-row justify-center items-center py-4'>
                                {socialMedia.map((social, index) => (
                                    <img
                                        key={social.id}
                                        src={social.icon}
                                        alt='social.id'
                                        className={`w-[21px] h-[21px] bg-black object-contain
              cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`} />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>

    )
}

export default OurTeam