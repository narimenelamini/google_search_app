import './App.css';
import React  from 'react';
import {Navbar} from './components/Navbar'
import {Footer} from './components/Footer'
import {Routes} from './components/Routes'

function App() {

  return (
    <div >
     
      <div className=" bg-gray-100  min-h-full">App</div>
      
        <Navbar />
        <Routes />
        <Footer />
        
       

    </div>
  );
}

export default App;
