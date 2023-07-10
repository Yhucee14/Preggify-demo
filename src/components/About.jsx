import React from 'react'
import styles from '../styles'
import { layout } from '../styles'
import aboutImage from '../assets/aboutImage.png'
import { aboutInfo } from '../constants'

const About = () => {
    return (
        <div className='border-2 border-black-500 bg-dimother px-4 py-5'>
              <h1 className='text-[25px] py-3 font-bold text-dimBlue flex justify-center items-center'>
                About Us
            </h1>
            <section className={`${styles.sectionGrid} `}>
                <div className={`${layout.sectionImg} `}>
                    <img src={aboutImage} alt='aboutImage' className='rounded-[50%] sm:w-[75%] h-[320px] xx:w-[75%] h-[190px] mb-5' />
                </div>
                <div className={`${layout.sectionInfo} `}>
                    {aboutInfo.map((info) => (
                        <p>{info.info}</p>
                    ))}

                <button className={`${styles.Button} mt-5 `}>Read More...</button>
                </div>
            </section>
        </div>

    )
}

export default About