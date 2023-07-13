import React from 'react'
import styles from '../styles'
import { layout } from '../styles'
import aboutImage from '../assets/aboutImage.png'
import { aboutInfo } from '../constants'

const About = () => {
    return (
        <div className='border-2 border-black-500 bg-dimother px-4 py-4'>
          
          <h1 className='text-[25px] sm:hidden py-3 font-bold text-dimBlue flex justify-center items-center'>
                About Us
            </h1>

            <section className={`${styles.sectionGrid} `}>
                <div className={`${layout.sectionImg} `}>
                    <img src={aboutImage} alt='aboutImage' className='rounded-[50%] sm:w-[75%] h-[320px] xx:w-[75%] h-[170px] sm:w-[75%] h-[310px] mb-5' />
                </div>
                <div className={`${layout.sectionInfo} `}>
                    {aboutInfo.map((info) => (
                        <>
                <h1 className='text-[25px] xx:hidden sm:flex py-3 font-bold text-dimBlue flex justify-center items-center'>
                About Us
            </h1>
                        <h1 className={`${styles.heading2}  xx:w-full  md:w-[70%]`}>
                            Preggify is here to 
                            bring you ease at 
                            your fingertips.
                        </h1>
                        <p>{info.info}</p>
                        </>
                    ))}

                <button className={`${styles.Button} mt-5 `}>Read More...</button>
                </div>
            </section>
        </div>

    )
}

export default About