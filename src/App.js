import Reacts from 'react';
import {Portfoliodata} from './components/component/Portfoliodata';

import NavBar from './components/NavBar';
import About from './components/sections/About';
import CircularNav from './components/sections/CircularNav';
import Contact from './components/sections/Contact';
import Header from './components/sections/Header';
import Portfolio from './components/sections/Portfolio';
import PortSpace from './components/sections/PortSpace';
import Services from './components/sections/Services';
import './index.css'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <About/>
      <Services/>
      <PortSpace/>
      {/*<Portfolio  slides={Portfoliodata}/>*/}
     <Contact/>
      
    </div>
  );
}

export default App;
