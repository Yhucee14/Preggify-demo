import './App.css';
import React from 'react';
import {TopNavbar, MainNavbar, Body} from './components'
import styles from './styles'
import Packages from './components/Packages';

function App() {
  return (
    <div className=" w-full overflow-hidden ">
    <div>
      <div> <TopNavbar /> </div>
      <div> <MainNavbar /> </div>
    </div>

    <div >
      <div className={`${styles.boxWidth}`}>
        <Body />
        <Packages />
     </div>
    </div>
  
  </div>
  );
};

export default App;
