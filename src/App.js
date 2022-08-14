import './App.css';
import React , {useState} from 'react';
import {Navbar} from './components/Navbar'
import {Footer} from './components/Footer'
import {Routes} from './components/Routes'

function App() {
  const [darkTheme,setDarkTheme ] = useState(false);
  return (
    <div >
     
      <div className=" bg-gray-100  min-h-full">App</div>
      
        <Navbar />
        <Footer />
        <Routes />

    </div>
  );
}

export default App;
