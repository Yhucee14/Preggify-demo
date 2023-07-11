import './App.css';
import React from 'react';
import {TopNavbar, MainNavbar, Body} from './components'
import styles from './styles'
import Packages from './components/Packages';
import About from './components/About';
import Testimonials from './components/Testimonials';
import OurTeam from './components/OurTeam';

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
        <About />
        <Testimonials />
        <OurTeam />
     </div>
    </div>
  
  </div>
  );
};

export default App;
