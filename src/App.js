import './App.css';
import {TopNavbar, MainNavbar} from './components'

function App() {
  return (
    <div className=" w-full overflow-hidden">
      <div>
        <div> <TopNavbar /> </div>
        <div> <MainNavbar /> </div>
        
      </div>
    
    </div>
  );
}

export default App;
