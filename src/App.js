import Reacts from 'react';
import {Portfoliodata} from './components/component/Portfoliodata';

import NavBar from './components/NavBar';
import About from './components/sections/About';
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
      
      
    </div>
  );
}

export default App;
