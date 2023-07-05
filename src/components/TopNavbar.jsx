import React from 'react'
import styles from '../styles'
import Button from './Button'

const TopNavbar = () => {
  return (
    <nav className={`xs:flex-col bg-other width-full 
    flex-1 navbar text-primary ${styles.paddingX}
     ${styles.flexCenter} ${styles.paddingY} `}>
      <h4 className={`${styles.paddingX} ${styles.flexCenter}
      xs:justify-center items-center flex-col `}>
        <div className='pb-1 xx:hidden'>Not sure where to start?</div> 
        <div className='pb-2 xx:hidden'>Chat with our health advisor</div>
        </h4>
      <Button 
/>
    </nav>
  ) 
}

export default TopNavbar