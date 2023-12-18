import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Cursor from "./components/cursor/Cursor";
import About from './components/about';
import Vacanze from './components/vacanze';
import Skills from './components/skills';
import BenLabs from './components/benlabs';
import Me from './components/me';



function App() {

  return (
    <div className="App">
        <Cursor />
        {/* <div className='relative z-50'> */}
        <Router>
          <Routes>
          <Route path='/portfolios' element={<About />}/>
            <Route path='/' element={<About />}/>
            <Route path='/portfolios/vacanze' element={<Vacanze />} />
            <Route path='/portfolios/skills' element={<Skills/>} />
            <Route path='/portfolios/benlabs' element={<BenLabs/>} />
            <Route path='/portfolios/me' element={<Me/>} />
          </Routes>
        </Router>
        {/* </div> */}
    </div>
  );
}
//  photo2={photo2} photo3={photo3} photo4={photo4} photo5={photo5} photo6={photo6} photo7={photo7} photo8={photo8} 
export default App;
