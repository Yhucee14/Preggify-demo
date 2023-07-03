import './App.css';
import {TopNavbar, MainNavbar, Body} from './components'
import styles from './styles'

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
       </div>
      </div>
    
    </div>
  );
}

export default App;
