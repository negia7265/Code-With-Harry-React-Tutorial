import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Navbar from './Navbar';
import Textarea from './Textarea';
import About from './About';
import { useState } from 'react';
import Alert from './SmallComponents/Alert';
import { BrowserRouter } from "react-router-dom";

function App() {
  const [mode,setmode]=useState("light");
  const [alert,setalert]=useState(null);
  const showalert=(message,type)=>{
  setalert({
    msg:message,
    type:type
  })
}

  let toggleMode=()=>{
    if(mode==='dark'){
    setmode('light');
    document.body.style.backgroundColor="white";
    document.body.style.color="black";
    showalert("Light Mode has been enabled","success");
    setTimeout(()=>{
      setalert(null);
    },3000);
    }
    else{
    setmode('dark')
    document.body.style.backgroundColor="#042743";
    document.body.style.color="white";
    showalert("Dark Mode has been enabled","success");
    setTimeout(()=>{
      setalert(null);
    },3000);
    }
  }
  return (
    <div>

      <Navbar title="textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      
      <Routes>
      <Route path="/about" element={<About />}/>
      <Route path="/textarea" element={<Textarea mode={mode} showalert={showalert} setalert={setalert} />} />     s
      </Routes>     
      
    </div>
  );
}

export default App;
