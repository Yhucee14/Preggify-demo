import React from 'react';
import styles from '../styles';
import Button from './Button';

const TopNavbar = () => {
  return (
    <nav className={`flex xs:flex-col sm:flex-row xx:flex-col bg-other width-full navbar text-primary ${styles.paddingX} ${styles.flexCenter} ${styles.paddingY}`}>
      <h4 className={`${styles.paddingX} ${styles.flexCenter} flex xs:flex-col sm:flex-row xx:flex-col justify-center items-center pb-4 mt-3.5`}>
        <div className="pb-0 pr-2">Not sure where to start?..</div>
        <div className="pb-0">Chat with our health advisor</div>
      </h4>
      <Button />
    </nav>
  );
};

export default TopNavbar;
