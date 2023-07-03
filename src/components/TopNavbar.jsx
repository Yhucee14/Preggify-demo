import React from 'react'
import styles from '../styles'
import Button from './Button'

const TopNavbar = () => {
  return (
    <nav className={` bg-other width-full 
    flex-1 navbar text-primary ${styles.paddingX}
     ${styles.flexCenter} ${styles.paddingY} `}>
      <h4 className={`${styles.paddingX} xs:block hidden`}>
        Not sure where to start? Chat with our health advisor
        </h4>
      <Button />
    </nav>
  ) 
}

export default TopNavbar