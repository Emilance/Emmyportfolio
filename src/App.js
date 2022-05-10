import Reacts from 'react';

import NavBar from './components/NavBar';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import Header from './components/sections/Header';
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
     <Footer/>
      
    </div>
  );
}

export default App;
